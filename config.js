import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "lawboys-c0f81.firebaseapp.com",
  projectId: "lawboys-c0f81",
  storageBucket: "lawboys-c0f81.appspot.com",
  messagingSenderId: "XXXX",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
