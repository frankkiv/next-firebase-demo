// index.tsx
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import {
  firebaseAuth,
  getFirestoreByCollection,
  setDocument,
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

  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }

  const addVoteDocument = async (vote: string) => {
    setDocument(getFirestoreByCollection("votes"), user.uid, { vote });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        gridGap: 8,
      }}
    >
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button
          style={{ fontSize: 32, marginRight: 8 }}
          onClick={() => addVoteDocument("yes")}
        >
          ✔️🍍🍕
        </button>
        <h3>
          Pinapple Lovers:{" "}
          {votes?.docs?.filter((doc) => doc.data().vote === "yes").length}
        </h3>
      </div>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button style={{ fontSize: 32, marginRight: 8 }} onClick={() => addVoteDocument("no")}>
          ❌🍍🍕
        </button>
        <h3>
          Pinapple Haters:{" "}
          {votes?.docs?.filter((doc) => doc.data().vote === "no").length}
        </h3>
      </div>
    </div>
  );
}
