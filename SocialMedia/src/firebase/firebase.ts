import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBVVvz1GEhrCAMRim0h4dbPI57I2K_DB1Q",
	authDomain: "socialmediaapp-98122.firebaseapp.com",
	projectId: "socialmediaapp-98122",
	storageBucket: "socialmediaapp-98122.firebasestorage.app",
	messagingSenderId: "342924420014",
	appId: "1:342924420014:web:dcd50e93cda7f0b3ad5e3f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getFirestore(app);
const storage = getStorage(app);

export { app, auth, store, storage };