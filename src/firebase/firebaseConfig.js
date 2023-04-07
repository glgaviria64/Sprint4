import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider,
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCO4H9fIGXWlChEK6k4o0Y-k22GO2pBMIQ",
    authDomain: "deliveryapp-e70d9.firebaseapp.com",
    projectId: "deliveryapp-e70d9",
    storageBucket: "deliveryapp-e70d9.appspot.com",
    messagingSenderId: "1089321466827",
    appId: "1:1089321466827:web:9d2207c15e6c21418fd44e"
  };



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google= new GoogleAuthProvider();
export const facebook= new FacebookAuthProvider();
export const dataBase = getFirestore(app)

