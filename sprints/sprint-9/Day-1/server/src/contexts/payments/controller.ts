import { Request, Response } from 'express';
import Stripe from 'stripe';

import {
  FRONTEND_URL,
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET_KEY,
} from '../../config/config';

const stripe = new Stripe(`${STRIPE_SECRET_KEY}`, {});

const productsDB = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199,
  },
  {
    id: 2,
    name: 'Wireless Keyboard',
    price: 79,
  },
  {
    id: '3',
    name: 'Cap',
    price: 50,
  },
];

export const checkout = async (req: Request, res: Response) => {
  const { order } = req.body;

  // query the database for the product details
  console.log({
    order,
  });
  const createProductOrder = (id: string, quantity: number) => {
    const product = productsDB.find((product) => product.id == id);
    if (!product) {
      throw new Error('Product not found');
    }
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
        },
        unit_amount: product?.price * 100,
      },
      quantity,
    };
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: order.map(
      ({ productId, quantity }: { productId: string; quantity: number }) =>
        createProductOrder(productId, quantity),
    ),
    mode: 'payment',
    // success_url: `${FRONTEND_URL}/success`,
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${FRONTEND_URL}/cancel`,
  });

  console.log({
    session,
  });

  res.status(200).json({ id: session.id, url: session.url });
};

export const success = async (req: Request, res: Response) => {
  const sessionId = req.query.session_id as string;

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  //update database with the order details
  console.log('DAtabases successfully transaction');
  console.log({
    session,
  });

  res.redirect(`${FRONTEND_URL}/success`);
};

export const subscribe = async (req: Request, res: Response) => {
  const plan = req.query.plan as string;

  // query the database for the product details get the price ID
  let priceId = '';

  if (plan === 'starter') {
    priceId = 'price_1QCUlwCMKsOGPDDkCmFsxUnt'; // from database
  }
  if (plan === 'premium') {
    priceId = 'price_1Mmn3RCMKsOGPDDkJs4w5PNl';
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    payment_method_types: ['card'],

    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${FRONTEND_URL}/cancel`,
  });

  res.status(200).json({ id: session.id, url: session.url });
};

export const customerPortal = async (req: Request, res: Response) => {
  const customerId = req.params.id as string;
  console.log({ customerId });
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${FRONTEND_URL}/account`,
  });
  console.log({ session });

  res.status(200).json({ url: session.url });
};

export const webhook = async (request: Request, response: Response) => {
  console.log('webhook called',STRIPE_WEBHOOK_SECRET_KEY );
  const sig = request.headers['stripe-signature'] as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      request.body,
      sig,
      `${STRIPE_WEBHOOK_SECRET_KEY}`,
    );
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  console.log({ type: event });
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      // const paymentIntentSucceeded = event.data.object;
      // console.log({ paymentIntentSucceeded });
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    case 'customer.subscription.created':
      console.log({ data: event.data.object });
      break;
    case 'customer.subscription.deleted':
      console.log('User canceled subscription');
      console.log({ data: event.data.object });
      break;
    case 'customer.subscription.updated':
      console.log('User canceled subscription');
      console.log({ data: event.data.object });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
};
