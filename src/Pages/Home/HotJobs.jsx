import { useEffect, useState } from "react";
import HotjobCard from "./HotjobCard";

const HotJobs = () => {
    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-3.5 mt-10 ">
                {
                 jobs.map(job=><HotjobCard job={job}></HotjobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;