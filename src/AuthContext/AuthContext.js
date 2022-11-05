import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthenticationContext = createContext({});
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setUser(user)
        setLoading(false)
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
  const logout = ()=>{
   return signOut(auth)
   .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authData = { login, signUp, update, user, loading, setLoading,logout};
  return (
    <div>
      <AuthenticationContext.Provider value={authData}>
        {children}
      </AuthenticationContext.Provider>
    </div>
  );
};

export default AuthContext;
