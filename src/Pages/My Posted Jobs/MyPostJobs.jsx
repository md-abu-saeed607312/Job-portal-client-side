import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostJobs = () => {
  const { user } = UseAuth();

  const [mypost, setMyPost] = useState([]);

  console.log(mypost);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPost(data);
      });
  }, [user.email]);
  return (
    <div>
      <p>My Posted Jobs:{mypost?.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {mypost.map((job, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>
                    <Link to={`/viewAplictions/${job._id}`}>
                      <button className="btn btn-link">
                        View Applications
                      </button>
                    </Link>
                  </td>
                </tr>
              </>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostJobs;
