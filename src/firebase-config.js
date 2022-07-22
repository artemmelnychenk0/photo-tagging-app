import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCKkBf0k9pDCAboW2qB3EoBZ08aCzRgjSM",
    authDomain: "photo-tagging-app-fb2ab.firebaseapp.com",
    projectId: "photo-tagging-app-fb2ab",
    storageBucket: "photo-tagging-app-fb2ab.appspot.com",
    messagingSenderId: "269620160084",
    appId: "1:269620160084:web:d793c9c138e7e69be72fc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

