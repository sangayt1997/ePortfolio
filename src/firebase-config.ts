import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAtE-9ErmVZJgT0QcQa4OtwTq2qidBdnVQ",
    authDomain: "portfolio-dc6be.firebaseapp.com",
    projectId: "portfolio-dc6be",
    storageBucket: "portfolio-dc6be.appspot.com",
    messagingSenderId: "65026468880",
    appId: "1:65026468880:web:b7ccb6c9d436b982616e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
