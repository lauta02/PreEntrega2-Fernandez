import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCpsyqkCeMOrG7WvJ5VI7pDnXPYViOLIm8",
  authDomain: "coder-fernandez.firebaseapp.com",
  projectId: "coder-fernandez",
  storageBucket: "coder-fernandez.appspot.com",
  messagingSenderId: "1009968131540",
  appId: "1:1009968131540:web:15fe75af8407a76a18fa41"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 