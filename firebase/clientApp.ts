// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider  } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(clientCredentials);
const firebaseAuth = getAuth(firebaseApp);
const getFirestoreByCollection = (collectionName: string) =>
  collection(getFirestore(firebaseApp), collectionName);

const firebaseUIConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // GitHub as the only included Auth Provider.
  // You could add and configure more here!
  signInOptions: [GithubAuthProvider.PROVIDER_ID],
};
export { firebaseApp, firebaseAuth, getFirestoreByCollection, firebaseUIConfig };
