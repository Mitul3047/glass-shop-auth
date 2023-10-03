// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ3LYpSjvOXzc5FxaFFb11OivPSQlg6gA",
  authDomain: "glass-auth-d1b91.firebaseapp.com",
  projectId: "glass-auth-d1b91",
  storageBucket: "glass-auth-d1b91.appspot.com",
  messagingSenderId: "712811402901",
  appId: "1:712811402901:web:0a6217d3bbd4e3ab2b2d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;