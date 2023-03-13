import React, { useContext } from "react";
import { Context } from "../../main";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    return user;
  };

  return (
    <>
      <button onClick={login}>Login with google</button>;
    </>
  );
}
