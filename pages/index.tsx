// index.tsx
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from "../firebase/clientApp";
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  // Destructure user, loading, and error out of the hook.  
  const [user, loading, error] = useAuthState(firebase.auth());
  // console.log the current user and loading status
 console.log("Loading:", loading, "|", "Current user:", user);

 return (
  <div
    style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <button style={{ fontSize: 32, marginRight: 8 }}>✔️🍍🍕</button>
    <button style={{ fontSize: 32 }}>❌🍍🍕</button>
  </div>
);
}
