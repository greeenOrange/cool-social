import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARJPCfsZKr7Vkr5muIDM-iCxkO0tjifzg",
  authDomain: "cool-media-ff3e0.firebaseapp.com",
  projectId: "cool-media-ff3e0",
  storageBucket: "cool-media-ff3e0.appspot.com",
  messagingSenderId: "989747573896",
  appId: "1:989747573896:web:f5f880b1ef16c362f35b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth