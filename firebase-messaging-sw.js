// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
const firebaseConfig = {
    apiKey: 'AIzaSyARSGdBCb1A3rYDV_3lRjr6bPLJROq6Fic',
    projectId: 'testproject-5ce7b',
    messagingSenderId: '655770773574',
    appId: '1:655770773574:android:82049260b6866ec5628247',
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
    console.log('test');
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    // eslint-disable-next-line no-restricted-globals
    self.registration.showNotification(notificationTitle, notificationOptions);
});
