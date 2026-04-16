
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAs3tzHEsfMfcr2WW3_mRehMMDP1isc01I",
  authDomain: "gradxp-landing.firebaseapp.com",
  projectId: "gradxp-landing",
  storageBucket: "gradxp-landing.firebasestorage.app",
  messagingSenderId: "429927918260",
  appId: "1:429927918260:web:d3f79198bc3ea69f5b05e1",
  measurementId: "G-632JFHZY0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)