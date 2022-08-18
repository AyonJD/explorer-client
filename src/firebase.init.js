// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-jl2YLWjKzf5DLQqHRtd4W7F0DIsyAcw",
  authDomain: "explorer-bd.firebaseapp.com",
  projectId: "explorer-bd",
  storageBucket: "explorer-bd.appspot.com",
  messagingSenderId: "48844080811",
  appId: "1:48844080811:web:6f8b678bc23ed958f619ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;