import { createContext } from "react";

export const AuthContext = createContext(null);
import {getAuth} from "firebase/auth"
import app from "../firebase/firebase.config";

const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const user={displayName:"Murikhan"}
    const authInfo={user,}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;