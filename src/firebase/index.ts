// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnE5bQ8Fa5LQ2rnSjLqF66T5uEtfNDCpg",
    authDomain: "store-48d8e.firebaseapp.com",
    projectId: "store-48d8e",
    storageBucket: "store-48d8e.firebasestorage.app",
    messagingSenderId: "975956915143",
    appId: "1:975956915143:web:96a964d1faa53072311fe2",
    measurementId: "G-HJY4J5ZK9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
