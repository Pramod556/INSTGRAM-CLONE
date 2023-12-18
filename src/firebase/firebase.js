import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdfujcMPIfU70fkukba2cWQTfJg6Ve5Ho",
  authDomain: "insta-clone-52fa3.firebaseapp.com",
  projectId: "insta-clone-52fa3",
  storageBucket: "insta-clone-52fa3.appspot.com",
  messagingSenderId: "134948114424",
  appId: "1:134948114424:web:577296069700b0ab5c100d",
  measurementId: "G-XDC6LPTS68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
