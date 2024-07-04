// plugins/firebase.js
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDECd36hCzUEWzfKPEUwzOBhXChEo-13Ds",
    authDomain: "reecheff-85538.firebaseapp.com",
    projectId: "reecheff-85538",
    storageBucket: "reecheff-85538.appspot.com",
    messagingSenderId: "25886082530",
    appId: "1:25886082530:web:f6cd4b99ecdc95501325bb",
    measurementId: "G-MP6JHC8Z7B"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default (context, inject) => {
  inject('firebase', app);
  inject('firestore', db);
}

