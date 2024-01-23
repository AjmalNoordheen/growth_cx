import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDT4wI7WYW35s_dqjju9wcV4-UQ6b8Bg0A",
  authDomain: "todo-growth-cx.firebaseapp.com",
  projectId: "todo-growth-cx",
  storageBucket: "todo-growth-cx.appspot.com",
  messagingSenderId: "67612472155",
  appId: "1:67612472155:web:7d39023ecae0f08b0fe07e",
  measurementId: "G-V2VGTT3PL8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

