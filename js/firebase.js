
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCutFi0lx1C_ncGkEbU94vzrbyy7T2pwxY",
  authDomain: "sabkamitra-b9b6f.firebaseapp.com",
  projectId: "sabkamitra-b9b6f",
  storageBucket: "sabkamitra-b9b6f.firebasestorage.app",
  messagingSenderId: "117920542180",
  appId: "1:117920542180:web:4586d83a9892bbc2096bf1",
  measurementId: "G-5R5N5P529C"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
