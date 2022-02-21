import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAI0ukhw2hhJmxYgv2XAjjzmyVwzyE8NmU",
    authDomain: "berloga-hub.firebaseapp.com",
    projectId: "berloga-hub",
    storageBucket: "berloga-hub.appspot.com",
    messagingSenderId: "4780189367",
    appId: "1:4780189367:web:939d6d6f493ec27a4a0f32",
    measurementId: "G-MMM029MG27"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export default firebase;