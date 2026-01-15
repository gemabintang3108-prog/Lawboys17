import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://console.firebase.google.com/u/0/project/lawboys-c0f81/authentication/users";

const firebaseConfig = {
  apiKey: "ambil dari firebase",
  authDomain: "ambil dari firebase",
  projectId: "ambil dari firebase",
  storageBucket: "ambil dari fire",
  messagingSenderId: "dari firebase",
  appId: "dari firebase",
  measurementId: "dari firebase"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
