// Firebase Configuration - Used by all pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB0mdh__hsEUc7Cj908F18apeGdjKjtzWI",
    authDomain: "jamb-simulator.firebaseapp.com",
    projectId: "jamb-simulator",
    storageBucket: "jamb-simulator.firebasestorage.app",
    messagingSenderId: "177483010216",
    appId: "1:177483010216:web:706cec71d1804f8c8bf29d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

