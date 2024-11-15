import React, { useEffect } from 'react';
import { messaging } from '../firebase';

import {
  MessagePayload,
  deleteToken,
  getMessaging,
  getToken,
  onMessage,
} from 'firebase/messaging';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationComponent = () => {
  useEffect(() => {
    const requestPermission = async () => {
      //   const permission = await Notification.requestPermission();
      console.log('requestPermission');
      //   if (permission === 'granted') {
      getToken(messaging, {
        vapidKey:
          'BHk20pXUWjP6rhYGH0jkcINss7iynJSvT8i0BwT4G6_laOHebTl-y_8vfg876_7utFhDULmc9JtfmwvKpo8DRFo',
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
            // sendTokenToServer(currentToken);
            // updateUIForPushEnabled(currentToken);
          } else {
            // Show permission request.
            console.log(
              'No registration token available. Request permission to generate one.'
            );
            // Show permission UI.
            // updateUIForPushPermissionRequired();
            // setTokenSentToServer(false);
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          //   showToken('Error retrieving registration token.');
          //   setTokenSentToServer(false);
        });
      //   }
    };

    requestPermission();
    onMessage(messaging, (payload: MessagePayload) => {
      console.log('Message received. ', payload);
      toast(payload.notification?.body || 'No message body');
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      Notification Setup
      <ToastContainer />
    </div>
  );
};
