import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyD55BQXIfi8UirvDbiqQVpotTRB9KGDvL8",
  authDomain: "my-project-react-native-392210.firebaseapp.com",
  projectId: "my-project-react-native-392210",
  storageBucket: "my-project-react-native-392210.appspot.com",
  messagingSenderId: "332908643758",
  appId: "1:332908643758:web:57a4d6228db5bc2e37a46c",
  measurementId: "G-FQ201JLGL0",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
