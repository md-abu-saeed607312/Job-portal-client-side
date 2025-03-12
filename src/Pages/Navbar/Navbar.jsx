import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContex from "../../Contex/AuthContex";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContex);

  const signOutUserHandler = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error("Sign-out Error:", error); // Error handle করা হলো
      });
  };


  const link = (
    <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/myapplication"}>My Application</NavLink></li>
      <li><NavLink to={"/addjobs"}>Job Post</NavLink></li>
      <li><NavLink to={"/mypostedJobs"}>My Posted Jobs</NavLink></li>
     
    </>
  );
  return (
    <div>
      <div className='navbar bg-base-100 shadow-sm z-50 backdrop:blur-xl fixed'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"} className="font-bold text-2xl btn btn-ghost text-xl">
            Job-Protal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-6">
          {user ? (
            <>
              <div>{user.email}</div>
              <button onClick={signOutUserHandler} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
