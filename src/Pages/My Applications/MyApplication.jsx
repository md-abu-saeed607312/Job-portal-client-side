import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";


const MyApplication = () => {
    const {user}=UseAuth()
    const[myjob,setjobs]=useState([])
    console.log(user);


    useEffect(()=>{
        fetch(`http://localhost:5000/jobapplication?email=${user?.email}`)
        .then((res)=>res.json())
        .then((data)=>setjobs(data))
    },[user.email])

    return (
        <div>
            <h2 className="text-5xl">My Application:{myjob.length}</h2>

        </div>
    );
};

export default MyApplication;