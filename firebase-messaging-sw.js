// firebase-messaging-sw.js

// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARSGdBCb1A3rYDV_3lRjr6bPLJROq6Fic",
    authDomain: "testproject-5ce7b.firebaseapp.com",
    projectId: "testproject-5ce7b",
    storageBucket: "testproject-5ce7b.firebasestorage.app",
    messagingSenderId: "655770773574",
    appId: "1:655770773574:web:de18fa8cbfb9ebc9628247"
};

// Initialize Firebase in the service worker
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('📦 Received background message:', payload);

/*    const notificationTitle = payload.notification?.title || 'Default Title';
    const notificationOptions = {
        body: payload.notification?.body || 'Default Body',
        icon: payload.notification?.icon || '/default-icon.png'
    };

    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(notificationTitle, notificationOptions);*/
});
