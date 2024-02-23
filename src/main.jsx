import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR49VBBdgSOflmMFAvwUa9pjhkNTM7UDo",
  authDomain: "pelitos-petshop.firebaseapp.com",
  projectId: "pelitos-petshop",
  storageBucket: "pelitos-petshop.appspot.com",
  messagingSenderId: "1070269785584",
  appId: "1:1070269785584:web:0e473541a6caadc33f2935",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
