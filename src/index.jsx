import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeK6yDVhvwGIb32yWuY7mGMO95QgubVb0",
  authDomain: "proyecto-coderhouse-34368.firebaseapp.com",
  projectId: "proyecto-coderhouse-34368",
  storageBucket: "proyecto-coderhouse-34368.appspot.com",
  messagingSenderId: "798739012595",
  appId: "1:798739012595:web:05bf87c03133e70eafd086",
  measurementId: "G-YPKQGYEP81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
