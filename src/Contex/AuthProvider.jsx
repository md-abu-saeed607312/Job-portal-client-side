import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthContex from "./AuthContex";
import { auth } from "../Fairbase/fairbase.config";
import { useEffect, useState } from "react";
const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const [loding,setLoding]=useState(true)


//    Sing Up 

    const userCreate=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login 
    const logingUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Sign up 
    const googleSingup=()=>{
        return signInWithPopup(auth, googleprovider)
    }

   

    // ইউজারের স্টেট পরিবর্তন মনিটর করা
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoding(false)
        })
        return()=> unSubscribe()
    },[])

     // sign Out
    const signOutUser = () => {
        setLoding(true)
        return signOut(auth); // `auth` সরাসরি ব্যবহার করা হচ্ছে
      };

    const authInfo={
        user,
        googleSingup,
        logingUser,
        signOutUser, 
        setUser,
        loding,
        userCreate
    }

    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;