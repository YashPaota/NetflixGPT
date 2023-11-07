// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZIjJvEI09qV5FBGM2a65xv7pmXpEHFYI",
  authDomain: "netflixgpt-b3a26.firebaseapp.com",
  projectId: "netflixgpt-b3a26",
  storageBucket: "netflixgpt-b3a26.appspot.com",
  messagingSenderId: "998950453273",
  appId: "1:998950453273:web:f3e71fc5e4fda28ac86a88",
  measurementId: "G-2LVRRK591D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();