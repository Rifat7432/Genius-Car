import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthenticationContext = createContext({});
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setloding] = useState(true);
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setUser(user)
    });
    return ()=> unsubscribe()
  }, []);
  const update = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authData = { login, signUp, update };
  return (
    <div>
      <AuthenticationContext.Provider value={authData}>
        {children}
      </AuthenticationContext.Provider>
    </div>
  );
};

export default AuthContext;
