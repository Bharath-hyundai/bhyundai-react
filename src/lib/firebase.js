import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCu2GjFkBWZCzrbE2Y1mqq8u5uYD-zwTfQ",
//   authDomain: "leads-fc7d4.firebaseapp.com",
//   projectId: "leads-fc7d4",
//   storageBucket: "leads-fc7d4.firebasestorage.app",
//   messagingSenderId: "319374718589",
//   appId: "1:319374718589:web:8da4c94f976a1358b46314",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBpmTCPVy4HQTGEe4pbYFYrQgPRN5TPeSs",
  authDomain: "bharathyundai-b3418.firebaseapp.com",
  projectId: "bharathyundai-b3418",
  storageBucket: "bharathyundai-b3418.firebasestorage.app",
  messagingSenderId: "863478673766",
  appId: "1:863478673766:web:e9973c728cf54e08f058a7",
  measurementId: "G-PQG51554GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
