// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI2wlAbIZUeF8KQwXjxwncxMyXWkMBPQc",
    authDomain: "the-news-dragon-ee79b.firebaseapp.com",
    projectId: "the-news-dragon-ee79b",
    storageBucket: "the-news-dragon-ee79b.appspot.com",
    messagingSenderId: "836752997688",
    appId: "1:836752997688:web:a0da0e1aa5464c4b4f15cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;