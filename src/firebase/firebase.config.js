// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmtCzut2AcK8OtZGIVtfZ5chVkzike77w",
    authDomain: "car-mechanics-5c1fa.firebaseapp.com",
    projectId: "car-mechanics-5c1fa",
    storageBucket: "car-mechanics-5c1fa.appspot.com",
    messagingSenderId: "871747934814",
    appId: "1:871747934814:web:cee2145b9661e362f8b2cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;