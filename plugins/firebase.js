// plugins/firebase.js
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDECd36hCzUEWzfKPEUwzOBhXChEo-13Ds",
    authDomain: "reecheff-85538.firebaseapp.com",
    projectId: "reecheff-85538",
    storageBucket: "reecheff-85538.appspot.com",
    messagingSenderId: "25886082530",
    appId: "1:25886082530:web:f6cd4b99ecdc95501325bb",
    measurementId: "G-MP6JHC8Z7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
let auth;

if (typeof window !== "undefined") {
  auth = getAuth(app);
  signInAnonymously(auth).catch((error) => {
    console.error("Error signing in anonymously:", error);
  });
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("firebase", app);
  nuxtApp.provide("firestore", firestore);
  if (auth) {
    nuxtApp.provide("auth", auth);
  }
});
