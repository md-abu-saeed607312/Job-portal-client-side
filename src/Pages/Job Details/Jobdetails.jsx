// import { Link, useLoaderData } from "react-router-dom";

// const Jobdetails = () => {
//   const detailsData = useLoaderData();

//   const {
//     title,
//     location,
//     applicationDeadline,
//     description,
//     salaryRange,
//     requirements,
//     company_logo,
//     company,
//     _id,
//   } = detailsData;

//   return (
//     <div className="my-5">
//       <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full">
//         <h2 className="text-lg font-semibold mb-4">Employment Information</h2>
//         <hr className="mb-4" />
//         <div className="grid grid-cols-2 gap-4 text-gray-700">
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Industry: {company}</span>
//             <span>Mechanical / Auto / Automotive, Civil / Construction</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Job Level:</span>
//             <span>Experienced (Non - Manager)</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Salary:</span>
//             <span>$800 - $1000</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Experience:</span>
//             <span>1 - 2 years</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Job Type:</span>
//             <span>Permanent</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Deadline:{applicationDeadline}</span>
//             <span>10/08/2022</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Updated:</span>
//             <span>10/07/2022</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="font-medium">Location:{location}</span>
//             <span>Dallas, Texas (Remote Friendly)</span>
//           </div>
//         </div>
//         <div className="flex justify-end mt-4 ">
//           <button className=" bg-blue-600 px-3 py-2 rounded-sm text-white">
//             <Link to={`jobapply/${_id}`}>Apply</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobdetails;



import { Link, useLoaderData } from "react-router-dom";

const Jobdetails = () => {
  const detailsData = useLoaderData();

  const {
    title,
    location,
    applicationDeadline,
    description,
    salaryRange,
    requirements,
    company_logo,
    company,
    _id,
  } = detailsData;

  return (
    <div className="my-5 px-4 md:px-6 lg:px-8">
      <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Employment Information</h2>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Industry:</span>
            <span>Mechanical / Auto / Automotive, Civil / Construction</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Job Level:</span>
            <span>Experienced (Non - Manager)</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Salary:</span>
            <span>$800 - $1000</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Experience:</span>
            <span>1 - 2 years</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Job Type:</span>
            <span>Permanent</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Deadline:</span>
            <span>{applicationDeadline}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Updated:</span>
            <span>10/07/2022</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <span className="font-medium">Location:</span>
            <span>{location} (Remote Friendly)</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-6">
          <Link to={`/jobapply/${_id}`} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm md:text-base transition">
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
