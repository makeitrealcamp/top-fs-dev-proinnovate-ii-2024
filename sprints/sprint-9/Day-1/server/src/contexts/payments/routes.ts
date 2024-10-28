import { Router } from 'express';

import { checkout, customerPortal, subscribe, success, webhook } from './controller';

const router = Router();

router.post('/checkout', checkout);
router.get('/success', success);
router.post('/subscribe', subscribe);

router.get('/customers/:id', customerPortal);

router.post('/webhook', webhook);

export default router;