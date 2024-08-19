// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGtViLXHK9Bb_R_vqLIARumM9IzggNjm8",
    authDomain: "nofa-egypt.firebaseapp.com",
    databaseURL: "https://nofa-egypt-default-rtdb.firebaseio.com",
    projectId: "nofa-egypt",
    storageBucket: "nofa-egypt.appspot.com",
    messagingSenderId: "733459200218",
    appId: "1:733459200218:web:09604637396a00c1188de3",
    measurementId: "G-ZMRT31F960"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { app, auth }; 