import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyACZTPT7V1A9JauDz9jwx9R6-b7ODPWsiE",
    authDomain: "servicesphere-45e45.firebaseapp.com",
    projectId: "servicesphere-45e45",
    storageBucket: "servicesphere-45e45.firebasestorage.app",
    messagingSenderId: "731484005373",
    appId: "1:731484005373:web:e0d33d0c28849a24552f94"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;