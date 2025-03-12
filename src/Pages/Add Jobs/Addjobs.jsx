import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const naviget=useNavigate()

  const{user}=UseAuth()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    // Salary Range Object Conversion
    // min max currency বাদে সব ডাটা newJob এ রখলাম 
    const { min, max, currency, ...newJob } = initialData; 
    //min max currency নিয়ে Object তৈরী করলাম
    newJob.salaryRange = {
      min: Number(min),
      max: Number(max),
      currency,
    };

    // Convert requirements and responsibilities to arrays
    newJob.requirements = initialData.requirements
      ? initialData.requirements.split("\n") //.map((item) => item.trim()) ব্যবহার করে প্রতিটি লাইন থেকে অপ্রয়োজনীয় স্পেস (space) সরানো হচ্ছে।
      : []; //•যদি ইনপুট না থাকে, তাহলে [] (খালি অ্যারে) সেট করা হচ্ছে।
    newJob.responsibilities = initialData.responsibilities
      ? initialData.responsibilities.split("\n") //.map((item) => item.trim()) ব্যবহার করে প্রতিটি লাইন থেকে অপ্রয়োজনীয় স্পেস (space) সরানো হচ্ছে।
      : []; //•যদি ইনপুট না থাকে, তাহলে [] (খালি অ্যারে) সেট করা হচ্ছে।

    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => { 
        if(data.insertedId){
          Swal.fire({
            title: "Successfully Job Post",
            icon: "success",
            draggable: true
          });
        }
        naviget("/mypostedJobs")
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Job Posting Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <label className="block font-semibold">Job Title</label>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="w-full p-2 border rounded"
          required
        />
        {/* Job Location */}
        <label className="block font-semibold">Job Location</label>
        <input
          type="text"
          name="location"
          placeholder="Job Location"
          className="w-full p-2 border rounded"
          required
        />
        {/* Job Type Dropdown */}
        <label className="block font-semibold">Job Type</label>
        <select defaultValue="Select Job Type" name="jobType" className="w-full p-2 border rounded" required>
          <option disabled>Select Job Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Freelance</option>
        </select>
        {/* Job Field Dropdown */}
        <label className="block font-semibold">Job Field</label>
        <select defaultValue="Select Job Field" name="category" className="w-full p-2 border rounded" required>
          <option disabled >Select Job Field</option>
          <option>IT</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Engineering</option>
        </select>
        {/* Salary Range Section */}
        <label className="block font-semibold">Salary Range</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            name="min"
            placeholder="Min Salary"
            className="flex-1 p-2 border rounded"
            required
          />
          <input
            type="number"
            name="max"
            placeholder="Max Salary"
            className="flex-1 p-2 border rounded"
            required
          />
          <select defaultValue="Select Currency" name="currency" required className="p-2 border rounded">
            <option disabled>Select Currency</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>INR</option>
          </select>
        </div>
        {/* Job Description */}
        <label className="block font-semibold">Job Description</label>
        <textarea
          name="description"
          placeholder="Job Description"
          className="w-full p-2 border rounded"
          required
        ></textarea>
        {/* Company Name */}
        <label className="block font-semibold">Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full p-2 border rounded"
          required
        />
        {/* Job Requirements */}
        <label className="block font-semibold">Job Requirements</label>
        <textarea
          name="requirements"
          placeholder="Enter requirements, each on a new line"
          className="w-full p-2 border rounded"
          required
        ></textarea>
        {/* Job Responsibilities */}
        <label className="block font-semibold">Job Responsibilities</label>
        <textarea
          name="responsibilities"
          placeholder="Enter responsibilities, each on a new line"
          className="w-full p-2 border rounded"
          required
        ></textarea>
        {/* Application Date Line */}
        <label className="block font-semibold">Date Line</label>
        <input
          type="date"
          name="applicationDeadline"
          placeholder="HR Name"
          className="w-full p-2 border rounded"
          required
        />
        {/* HR Name */}
        <label className="block font-semibold">HR Name</label>
        <input
          type="text"
          defaultValue={user?.name}
          name="hr_name"
          placeholder="HR Name"
          className="w-full p-2 border rounded"
          required
        />
        {/* HR Email */}
        <label  className="block font-semibold">HR Email</label>
        <input
          type="email"
          defaultValue={user?.email}
          name="hr_email"
          placeholder="HR Email"
          className="w-full p-2 border rounded"
          required
        />
        {/* Company Logo URL */}
        <label className="block font-semibold">Company Logo URL</label>
        <input
          type="url"
          name="company_logo"
          placeholder="Company Logo URL"
          className="w-full p-2 border rounded"
          required
        />
        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit Job Posting
        </button>
      </form>
    </div>
  );
};

export default AddJobs;
