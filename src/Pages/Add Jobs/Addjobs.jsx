// import React, { useState } from "react";

import { object } from "motion/react-client";

const AddJobs = () => {
  // const [formData, setFormData] = useState({
  //   jobTitle: "",
  //   jobLocation: "",
  //   jobType: "Full-time",
  //   jobField: "IT",
  //   salaryMin: "",
  //   salaryMax: "",
  //   currency: "USD",
  //   jobDescription: "",
  //   companyName: "",
  //   jobRequirements: "",
  //   jobResponsibilities: "",
  //   hrName: "",
  //   hrEmail: "",
  //   companyUrl: "",
  //   comments: ""
  // });

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Job Posting Data:", formData);
  // };

  const handleChange = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target); // ফর্মের সমস্ত ডাটা ফর্ম ডাটা অবজেক্টে রূপান্তরিত হয়।
    const initialData = Object.fromEntries(formData.entries()); // ফর্ম ডাটা অবজেক্টটি একটি সাধারণ জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তরিত হয়।
    console.log(initialData);

    const {salaryMax ,salaryMin,...newJob}=initialData
    console.log(newJob);

  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Job Posting Form</h2>
      <form onSubmit={handleChange} className="space-y-4">
        {/* Job Title */}
        <label className="block font-semibold">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          // value={formData.jobTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {/* Job Location */}
        <label className="block font-semibold">Job Location</label>
        <input
          type="text"
          name="jobLocation"
          placeholder="Job Location"
          // value={formData.jobLocation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {/* Job Type Dropdown */}
        <label className="block font-semibold">Job Type</label>
        <select
          name="jobType"
          // value={formData.jobType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Freelance</option>
        </select>
        {/* Job Field Dropdown */}
        <label className="block font-semibold">Job Field</label>
        <select
          name="jobField"
          // value={formData.jobField}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option>IT</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Engineering</option>
          <option>Construction</option>
          <option>Hospitality</option>
          <option>Legal</option>
          <option>Manufacturing</option>
          <option>Retail</option>
          <option>Sales</option>
          <option>Customer Service</option>
          <option>Human Resources</option>
          <option>Administration</option>
          <option>Real Estate</option>
          <option>Transportation</option>
          <option>Logistics</option>
          <option>Media & Communication</option>
          <option>Entertainment</option>
          <option>Science & Research</option>
          <option>Government</option>
          <option>Non-Profit</option>
          <option>Environmental</option>
        </select>
        {/* Salary Range Section */}
        <label className="block font-semibold">Salary Range</label>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          <input
            type="number"
            name="salaryMin"
            placeholder="Min Salary"
            // value={formData.salaryMin}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="number"
            name="salaryMax"
            placeholder="Max Salary"
            // value={formData.salaryMax}
            onChange={handleChange}
            className="flex-1 p-2 border rounded"
          />
          <select
            name="currency"
            // value={formData.currency}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>INR</option>
          </select>
        </div>
        {/* Job Description */}
        <label className="block font-semibold">Job Description</label>
        <textarea
          name="jobDescription"
          placeholder="Job Description"
          // value={formData.jobDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        {/* Company Name */}
        <label className="block font-semibold">Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          // value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {/* Job Requirements */}
        <label className="block font-semibold">Job Requirements</label>
        <textarea
          name="jobRequirements"
          placeholder="Job Requirements"
          // value={formData.jobRequirements}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        {/* Job Responsibilities */}
        <label className="block font-semibold">Job Responsibilities</label>
        <textarea
          name="jobResponsibilities"
          placeholder="Job Responsibilities"
          // value={formData.jobResponsibilities}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        {/* HR Name */}
        <label className="block font-semibold">HR Name</label>
        <input
          type="text"
          name="hrName"
          placeholder="HR Name"
          // value={formData.hrName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {/* HR Email */}
        <label className="block font-semibold">HR Email</label>
        <input
          type="email"
          name="hrEmail"
          placeholder="HR Email"
          // value={formData.hrEmail}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {/* Company URL */}
        <label className="block font-semibold">Conpany Logo URL</label>
        <input
          type="url"
          name="companyUrl"
          placeholder="Company URL"
          // value={formData.companyUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {/* Comments Field */}
        <label className="block font-semibold">Additional Comments</label>
        <textarea
          name="comments"
          placeholder="Additional Comments"
          // value={formData.comments}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit Job Posting
        </button>
      </form>
    </div>
  );
};

export default AddJobs;

// import React from 'react';

// const Addjobs = () => {
//   return (
//     <div>
//       <fieldset class="fieldset">
//           <label class="fieldset-label">Email</label>
//           <input type="email" class="input" placeholder="Email" />
//           <label class="fieldset-label">Password</label>
//           <input type="password" class="input" placeholder="Password" />
//           <div><a class="link link-hover">Forgot password?</a></div>
//           <button class="btn btn-neutral mt-4">Login</button>
//         </fieldset>
//     </div>
//   );
// };

// export default Addjobs;
