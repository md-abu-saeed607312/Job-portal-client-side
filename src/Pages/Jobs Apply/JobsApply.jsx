import {useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";


const JobsApply = () => {
  const naviget=useNavigate()
  const { id } = useParams();
  const { user } = UseAuth();
  // console.log(id,user);

  const applyHandel = (e) => {
    e.preventDefault();
    console.log(e);

    const form = e.target;
    const facebook= form.facebook.value;
    const linkdin= form.linkdin.value;
    const description= form.description.value;
    const resume = form.resume.files[0];
    // console.log(fullName,email,contactNumber,resume);

    const jobApplication = {
      job_id: id,
      application_email: user.email,
      linkdin,
      facebook,
      resume,
      description
    }

    fetch("http://localhost:5000/jobapplication", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: "Congratulations! Your application submitted Successfully",
            icon: "success",
            draggable: true
          });
          naviget("/myapplication")
        }
      });
  };
  return (
    <div className=" flex justify-center bg-white  my-8">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Job Application
          </span>
          <h2 className="text-2xl font-bold mt-3">Start Your Career Today</h2>
          <p className="text-gray-600 text-sm">
            Please fill in your information and send it to the employer.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={applyHandel} className="mt-5 space-y-4">
        <div>
            <label className="block text-gray-700 font-medium">
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Facebool Link
            </label>
            <input
              type="url"
              name="facebook"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Linkdin Link
            </label>
            <input
              type="url"
              name="linkdin"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Your description..."
              className="w-full p-2 border rounded focus:outline-blue-500"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="agreed" className="mr-2" />
            <span className="text-gray-700 text-sm">
              Agree to our terms and policy
            </span>
          </div>

          {/* Apply Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Apply Job
          </button>
        </form>

        {/* Support */}
        <p className="text-center text-gray-500 text-sm mt-3">
          Do you need support?{" "}
          <a href="#" className="text-blue-600">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default JobsApply;

// // import { useState } from "react";

// // const JobApplicationModal = ({ onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     contactNumber: "",
// //     description: "",
// //     resume: null,
// //     agreed: false,
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, type, checked, files } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //     alert("Application Submitted!");
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //       <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
// //         {/* Close Button */}
// //         <button
// //           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
// //           onClick={onClose}
// //         >
// //           ✕
// //         </button>

// //         {/* Header */}
// //         <div className="text-center">
// //           <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
// //             Job Application
// //           </span>
// //           <h2 className="text-2xl font-bold mt-3">Start Your Career Today</h2>
// //           <p className="text-gray-600 text-sm">Please fill in your information and send it to the employer.</p>
// //         </div>

// //         {/* Form */}
// //         <form onSubmit={handleSubmit} className="mt-5 space-y-4">
// //           <div>
// //             <label className="block text-gray-700 font-medium">Full Name *</label>
// //             <input
// //               type="text"
// //               name="fullName"
// //               value={formData.fullName}
// //               onChange={handleChange}
// //               placeholder="Your Name"
// //               className="w-full p-2 border rounded focus:outline-blue-500"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-gray-700 font-medium">Email *</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="your@email.com"
// //               className="w-full p-2 border rounded focus:outline-blue-500"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-gray-700 font-medium">Contact Number *</label>
// //             <input
// //               type="tel"
// //               name="contactNumber"
// //               value={formData.contactNumber}
// //               onChange={handleChange}
// //               placeholder="(+01) 234 567 89"
// //               className="w-full p-2 border rounded focus:outline-blue-500"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-gray-700 font-medium">Description</label>
// //             <textarea
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               placeholder="Your description..."
// //               className="w-full p-2 border rounded focus:outline-blue-500"
// //             ></textarea>
// //           </div>
// //           <div>
// //             <label className="block text-gray-700 font-medium">Upload Resume</label>
// //             <input
// //               type="file"
// //               name="resume"
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded"
// //             />
// //           </div>
// //           <div className="flex items-center">
// //             <input
// //               type="checkbox"
// //               name="agreed"
// //               checked={formData.agreed}
// //               onChange={handleChange}
// //               className="mr-2"
// //             />
// //             <span className="text-gray-700 text-sm">Agree to our terms and policy</span>
// //           </div>

// //           {/* Apply Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
// //           >
// //             Apply Job
// //           </button>
// //         </form>

// //         {/* Support */}
// //         <p className="text-center text-gray-500 text-sm mt-3">
// //           Do you need support? <a href="#" className="text-blue-600">Contact Us</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobApplicationModal;
