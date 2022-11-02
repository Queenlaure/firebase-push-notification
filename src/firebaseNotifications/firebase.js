// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyDIiRcZXobuQTAMpLg0ahHDuhLt7q1N_20",
  authDomain: "first-push-notification-b1efd.firebaseapp.com",
  projectId: "first-push-notification-b1efd",
  storageBucket: "first-push-notification-b1efd.appspot.com",
  messagingSenderId: "990618623475",
  appId: "1:990618623475:web:ad7deffecbb70c94b98686",
  measurementId: "G-JVYTSYTP68"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BO5QYBEvGELAvnuEaJfM2WMDIv3twTIhkhb65Qc6Mw-1h5apop-XROGcpRxeImRJh2d63YFtCqoT7zOC8hyJvmo` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });