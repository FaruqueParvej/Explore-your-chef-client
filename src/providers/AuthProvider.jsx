import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  

  const googleLogIn = (googleProvider) => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogIn =(githubProvider)=>{
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  const updateUser = (photo,name) => {
    return updateProfile(auth.currentUser, {
      photoURL: photo,
      displayName:name,
    });
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (loggedUser) => {
      setIsLoading(false);
      // console.log("loggedUser is:", loggedUser);
      setUser(loggedUser);
      
    });
    return () => {
      unsbscribe();
    };
  }, []);

  const authInfo = { user, createUser, logIn, logOut, isLoading, updateUser,googleLogIn,githubLogIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
