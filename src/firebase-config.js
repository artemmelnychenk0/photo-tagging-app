import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCdN2dCF8LG6XvnrTWSp9vEtyx_3Izy9Io",
    authDomain: "photo-tagging-app-14395.firebaseapp.com",
    projectId: "photo-tagging-app-14395",
    storageBucket: "photo-tagging-app-14395.appspot.com",
    messagingSenderId: "627188243621",
    appId: "1:627188243621:web:c00077ee0ae34c4799014c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

