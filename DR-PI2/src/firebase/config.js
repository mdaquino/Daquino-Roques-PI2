import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAqqc4wL18zaVlpKtee0fv2qn6_hjFzfyY",
  authDomain: "dr-pi2.firebaseapp.com",
  projectId: "dr-pi2",
  storageBucket: "dr-pi2.firebasestorage.app",
  messagingSenderId: "388332792783",
  appId: "1:388332792783:web:f7b0a1d920e1f19d7000ba"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();