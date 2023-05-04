import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({children}) => {
    const {user,isLoading}=useContext(AuthContext);
    const location =useLocation();
    console.log(isLoading);

    if(isLoading){
       return <div className="d-flex justify-content-center my-3 text-danger"><Spinner  animation="grow" size="sm" />
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate> ;
};

export default PrivateRoute;