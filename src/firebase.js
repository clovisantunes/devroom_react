import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgZd0h5PDQrP4W_cDg__kPgy5ipr7eGQw",
  authDomain: "devroom-41c05.firebaseapp.com",
  projectId: "devroom-41c05",
  storageBucket: "devroom-41c05.appspot.com",
  messagingSenderId: "811561926272",
  appId: "1:811561926272:web:516e4cdb8af1fdbe237065",
  measurementId: "G-7NT7ZBWYPD"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
