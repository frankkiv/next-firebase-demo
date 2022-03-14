// index.tsx
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import {
  firebaseAuth,
  getFirestoreByCollection,
} from "../firebase/clientApp";
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Home() {
  // Destructure user, loading, and error out of the hook.
  const [user, loading, error] = useAuthState(firebaseAuth);
  const [votes, votesLoading, votesError] = useCollection(
    getFirestoreByCollection("votes"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  // console.log the current user and loading status
  console.log("Loading:", loading, "|", "Current user:", user);
  // console.log the current votes and loading status
  console.log("Loading:", votesLoading, "|", "Current votes:", votes?.docs);

    
  if(!votesLoading && votes){
    votes.docs.map((doc)=>console.log(doc.data()))
  }

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
