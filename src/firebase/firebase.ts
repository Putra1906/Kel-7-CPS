import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyANGMKVvYNW6pUGeO7EYwTPutxZAWKkHz8",
    authDomain: "raindropldr-new.firebaseapp.com",
    databaseURL: "https://raindropldr-new-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "raindropldr-new",
    storageBucket: "raindropldr-new.appspot.com",
    messagingSenderId: "817059336964",
    appId: "1:817059336964:web:366b847f6893f28354f651",
    measurementId: "G-J7X9KWPE3S"
};

const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;