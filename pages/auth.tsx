// auth.tsx
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {firebaseAuth, firebaseUIConfig} from "../firebase/clientApp";

function SignInScreen() {
  return (
    <div>
      <h1>Pineapple Login</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={firebaseAuth} />
    </div>
  );
}

export default SignInScreen;
