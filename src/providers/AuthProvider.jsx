import { createContext } from "react";

export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from "../firebase/firebase.config";

const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    
   const user=null;
    const authInfo={user,createUser,logIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;