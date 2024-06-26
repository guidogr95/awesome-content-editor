import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCnMemVootDhxmWeAQmf3QopoVinZANSO8",
  authDomain: "yt-ai-3463a.firebaseapp.com",
  databaseURL: "https://yt-ai-3463a-default-rtdb.firebaseio.com",
  projectId: "yt-ai-3463a",
  storageBucket: "yt-ai-3463a.appspot.com",
  messagingSenderId: "720226364372",
  appId: "1:720226364372:web:48a6655bc98d01c8814441",
  measurementId: "G-8JH9HZP13F",
};

const APP = initializeApp(firebaseConfig);
export const FUNCTIONS = getFunctions(APP);
