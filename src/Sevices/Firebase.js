import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBiBK69hKs-o6AXxGhOHcJ77TNvdoUPjjM",
    authDomain: "chat-20505.firebaseapp.com",
    projectId: "chat-20505",
    storageBucket: "chat-20505.appspot.com",
    messagingSenderId: "294049514900",
    appId: "1:294049514900:web:6e9c2142f613ceb6d1fb81"
  };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
export {firebase};