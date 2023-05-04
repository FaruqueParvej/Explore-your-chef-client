import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from "../firebase/firebase.config";

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    const createUser = (email,password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email,password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
const logOut = () =>{
    setIsLoading(true);
    return signOut(auth);
}
const updateUser=(photo)=>{
    return updateProfile(auth.currentUser, {
       photoURL: photo
      });
}

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth,loggedUser=>{
            console.log("a",loggedUser);
            setUser(loggedUser);
            setIsLoading(false);
        })
        return ()=>{
            unsbscribe();
        }
    },[])


  
    const authInfo={user,createUser,logIn,logOut,isLoading,updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;