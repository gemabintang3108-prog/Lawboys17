import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyBY4i8moa3g2VUw_N7yfv8aYhB51xR65fs",
  authDomain: "lawboys-c0f81.firebaseapp.com",
  projectId: "lawboys-c0f81",
  storageBucket: "lawboys-c0f81.firebasestorage.app",
  messagingSenderId: "29582673064",
  appId: "1:29582673064:web:781e159c5fdca7cf72ae9d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export { db, auth };
