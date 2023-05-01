// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcw5A9smz9h_ud62LCgTczP2aR2I_25Pg",
  authDomain: "chef-recipe-hunter-clien-ee4d5.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-ee4d5",
  storageBucket: "chef-recipe-hunter-clien-ee4d5.appspot.com",
  messagingSenderId: "970611141540",
  appId: "1:970611141540:web:0902b8d89d1a324c376f31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;