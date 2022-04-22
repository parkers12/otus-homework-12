// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGOHdI4VJr06hbiD2ogA68Ow1PFutMN6c",
  authDomain: "task-calendar-6c313.firebaseapp.com",
  projectId: "task-calendar-6c313",
  storageBucket: "task-calendar-6c313.appspot.com",
  messagingSenderId: "506904117249",
  appId: "1:506904117249:web:ffb49f9569065ffe2d0000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;