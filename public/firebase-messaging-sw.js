importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceworker.js')
        .then(registration => {
            console.log('Firebase Service worker registration succeeded :: ', registration.scope);
        })
        .catch(err => {
            console.log('Firebase Service worker registration failed :: ', err);
        }
    );
}

firebase.initializeApp({
    apiKey: "AIzaSyD0QVhZYrKhvP6UIfn_ZuUtLBaLkcBtwMw",
    authDomain: "pwa-react-demo-express-api.firebaseapp.com",
    projectId: "pwa-react-demo-express-api",
    storageBucket: "pwa-react-demo-express-api.appspot.com",
    messagingSenderId: "737920045866",
    appId: "1:737920045866:web:6c11bc6c3f45022c768453"
});

const initMessaging = firebase.messaging();