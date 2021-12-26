import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyCdKsOCDAxcVtVRt6mZSwt3qi4FqfnOV7w",
  authDomain: "car-mazaad.firebaseapp.com",
  projectId: "car-mazaad",
  storageBucket: "car-mazaad.appspot.com",
  messagingSenderId: "781191864519",
  appId: "1:781191864519:web:b10ef21558485a8f33dee2",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
