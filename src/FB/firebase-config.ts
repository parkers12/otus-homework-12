// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGOHdI4VJr06hbiD2ogA68Ow1PFutMN6c",
  authDomain: "task-calendar-6c313.firebaseapp.com",
  databaseURL: "https://task-calendar-6c313-default-rtdb.firebaseio.com",
  projectId: "task-calendar-6c313",
  storageBucket: "task-calendar-6c313.appspot.com",
  messagingSenderId: "506904117249",
  appId: "1:506904117249:web:ffb49f9569065ffe2d0000",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export default db;
