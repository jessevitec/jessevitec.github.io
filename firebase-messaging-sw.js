// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js')


// Your Firebase configuration
// eslint-disable-next-line no-undef
firebase.initializeApp({
    apiKey: "AIzaSyARSGdBCb1A3rYDV_3lRjr6bPLJROq6Fic",
    authDomain: "testproject-5ce7b.firebaseapp.com",
    projectId: "testproject-5ce7b",
    storageBucket: "testproject-5ce7b.firebasestorage.app",
    messagingSenderId: "655770773574",
    appId: "1:655770773574:web:ba6bf259ec34396d628247"
});

// Initialize Firebase
// Retrieve Firebase Messaging instance
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});


