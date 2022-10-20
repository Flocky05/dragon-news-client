// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs3KkU713IsTyVorEehBSEAzHWQkObEUY",
    authDomain: "news-portal-client-fa901.firebaseapp.com",
    projectId: "news-portal-client-fa901",
    storageBucket: "news-portal-client-fa901.appspot.com",
    messagingSenderId: "1070358709486",
    appId: "1:1070358709486:web:a9242656681538d11a5fff",
    measurementId: "G-GJNXJ4LD2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;