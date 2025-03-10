import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotjobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    description,
    salaryRange,
    requirements,
    company_logo,
    company,
  } = job;

  return (
    <div>
      <div className="card bg-[#F8FAFF] sm:w-[310px] md:w-60 lg:w-[340px] shadow-sm">
        <div className="flex gap-3">
          <div>
            <figure>
              <img
                className="h-16 mx-2"
                src={company_logo}
                alt="company_logo"
              />
            </figure>
          </div>
          <div>
            <h4>{company}</h4>
            <p className="flex items-center gap-1">
              <IoLocationOutline />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>{description}</p>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((skill,index) => (
              <p 
              key={index}
              className="rounded bg-gray-300 text-[#4F5E64] text-center px-1 hover:bg-[#3C65F5] hover:text-white">
                {skill}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end flex items-center">
            <p>
              Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotjobCard;
