import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const aplication = useLoaderData();
  console.log(aplication);

  const handleStatusUpdate = (e,id) => {
    console.log(e.target.value,id);

    const data={
        status:e.target.value
    }

    fetch(`http://localhost:5000/jobapplication/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
  };

  return (
    <div>
      <h2 className="text-3xl">
        Applications for this job:{aplication.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {aplication.map((apply, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{apply.application_email}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      onChange={(e)=>handleStatusUpdate(e,apply._id)}
                      defaultValue={apply.status || "change Status"}
                      className="select select-sm"
                    >
                      <option disabled={true}>Change Status</option>
                      <option>Undet Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
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

export default ViewApplications;
