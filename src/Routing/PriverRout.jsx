import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContex from "../Contex/AuthContex";

const PriverRout = ({children}) => {
    const location=useLocation()

    const {user,loding}=useContext(AuthContex)


    if(user){
        return children
    }

    if(loding){
        return <span className="loading loading-spinner loading-xl"></span>
    }



    return (
        <div>
            <Navigate
            state={location.pathname}
             to={"/login"}>Login</Navigate>
        </div>
    );
};

export default PriverRout; 