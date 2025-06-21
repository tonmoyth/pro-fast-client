import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);

  // create user with email and password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logOut user
  const logoutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  //google login
  const loginWithGoogle = () => {
    setLoader(true)
    return signInWithPopup(auth,provider);
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("this is current user", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loader,
    user,
    createUser,
    loginUser,
    logoutUser,
    loginWithGoogle
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
