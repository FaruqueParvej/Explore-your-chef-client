// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA52GzmqsswWZosQyB19OvfgfUvWhf30Ms",
  authDomain: "chef-recipe-acee0.firebaseapp.com",
  projectId: "chef-recipe-acee0",
  storageBucket: "chef-recipe-acee0.appspot.com",
  messagingSenderId: "451270014051",
  appId: "1:451270014051:web:abc0e292018f0a3070b456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;