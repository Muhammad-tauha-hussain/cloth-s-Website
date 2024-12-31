import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  

  apiKey: "AIzaSyC4G51gDboWXsMlGINjNI3axQ_inMhJEbI",
  authDomain: "shopco-88be5.firebaseapp.com",
  projectId: "shopco-88be5",
  storageBucket: "shopco-88be5.firebasestorage.app",
  messagingSenderId: "280560449135",
  appId: "1:280560449135:web:24f74acdb99309be18ff9a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);