import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJxMUk2nJc-Q5dgleq33rMdrZOFjPb15E",
    authDomain: "eportfolio-app-5a374.firebaseapp.com",
    projectId: "eportfolio-app-5a374",
    storageBucket: "eportfolio-app-5a374.appspot.com",
    messagingSenderId: "716010633742",
    appId: "1:716010633742:web:9618509d2f2f845f259a5f",
    measurementId: "G-VYMM2MG5MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
