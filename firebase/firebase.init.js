import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeFirebaseApp = () => {
    return initializeApp(firebaseConfig);
}

export default initializeFirebaseApp;