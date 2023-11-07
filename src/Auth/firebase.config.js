import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBzylKVoPJ5T6rYr8gzza5DWaN4mAyi2_c",
  authDomain: "assignment-11-auth-8450a.firebaseapp.com",
  projectId: "assignment-11-auth-8450a",
  storageBucket: "assignment-11-auth-8450a.appspot.com",
  messagingSenderId: "1092126757628",
  appId: "1:1092126757628:web:1b31ab9631dcb9a0acfd79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;