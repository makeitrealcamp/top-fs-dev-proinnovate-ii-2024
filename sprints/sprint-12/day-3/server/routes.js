const express = require('express');
const router = express.Router();
const vapidKeys = require('./vapid-keys.json');
const urlBase64 = require('urlsafe-base64');
const push = require('web-push');

const messages = [];

const subscribers = [];

router.get('/subscription/key', function (req, res) {
  res.send(urlBase64.decode(vapidKeys.publicKey));
});

router.post('/subscription', function (req, res) {
  const { subscription } = req.body;
  // messages.push(subscription);
  console.log({ subscription });
  subscribers.push(subscription);
  res.json({
    ok: true,
    message: 'Subscription added',
  });

  // res.json({
  //   ok: true,
  //   message
  // });
});

router.post('/message', function (req, res) {
  const payload = 'this is a test message';

  // const vapidHeaders = vapidHelper.getVapidHeaders(
  //   audience,
  //   'mailto: example@web-push-node.org',
  //   vapidDetails.publicKey,
  //   vapidDetails.privateKey,
  //   'aes128gcm'
  // );

  push.setVapidDetails(
    'mailto:user@example.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );
  // const options = {
  //   vapidDetails: {
  //     subject: 'user@email.com',
  //     publicKey: urlBase64.decode(vapidKeys.publicKey),
  //     privateKey: urlBase64.decode(vapidKeys.privateKey),
  //   },
  //   headers: vapidHeaders,
  // };
  try {
    push.sendNotification(subscribers[0], payload);

    res.json({
      ok: true,
      message: 'Message sent',
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
