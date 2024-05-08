// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import 'firebase/compat/storage';  // Use compat for storage as well


const firebaseConfig = {
  apiKey: "AIzaSyAI1VFvAr4wIIWxWaTaKF1-IznxYy8cKYY",
  authDomain: "social-app-50dd6.firebaseapp.com",
  projectId: "social-app-50dd6",
  storageBucket: "social-app-50dd6.appspot.com",
  messagingSenderId: "422765942046",
  appId: "1:422765942046:web:b63131990d9987fb6ae50f",
  measurementId: "G-4X2JP92T8M"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export auth related items
export const auth = firebase.auth();
export const EmailAuthProvider = firebase.auth.EmailAuthProvider;
export const firestore = firebase.firestore();
// export const storage = firebase.storage(); // Use compat storage
export const storage = firebase.storage();
export default firebase;
