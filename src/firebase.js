// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import "firebase/installations";
import 'firebase/messaging';

// Our web app's Firebase configuration
// PWA Project name (projectId): pwa-react-demo-express-api
// PWA Project Nickname: PWA React express Demo
const firebaseConfig = {
    apiKey: "AIzaSyD0QVhZYrKhvP6UIfn_ZuUtLBaLkcBtwMw",
    authDomain: "pwa-react-demo-express-api.firebaseapp.com",
    projectId: "pwa-react-demo-express-api",
    storageBucket: "pwa-react-demo-express-api.appspot.com",
    messagingSenderId: "737920045866",
    appId: "1:737920045866:web:6c11bc6c3f45022c768453"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;