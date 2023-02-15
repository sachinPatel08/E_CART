import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWGhsAqnfLjbayJeJvWPd44RD3XuP90zs",
  authDomain: "ecart-login.firebaseapp.com",
  databaseURL: "https://ecart-login-default-rtdb.firebaseio.com",
  projectId: "ecart-login",
  storageBucket: "ecart-login.appspot.com",
  messagingSenderId: "288459700979",
  appId: "1:288459700979:web:28ac7dfe873a42d8f29586",
  measurementId: "G-30LJ7HGZ2D",
  "dataset_name": { ".read": true, ".write": true }
  
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const analytics = getAnalytics(app);
const db = getFirestore(app);


export {app , auth , db }