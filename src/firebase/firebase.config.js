// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};


// const firebaseConfig = {
//     apiKey: "AIzaSyCoto7DpRGKr56PlVrwFX985-eKLjY_5B8",
//     authDomain: "bistro-boss-21823.firebaseapp.com",
//     projectId: "bistro-boss-21823",
//     storageBucket: "bistro-boss-21823.appspot.com",
//     messagingSenderId: "826871139485",
//     appId: "1:826871139485:web:f8d5e954e15ddcb8c5d874"
//   };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;