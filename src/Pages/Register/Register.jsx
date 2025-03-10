import Lottie from "lottie-react";
import registerAnimation from "../../assets/Animation - 1741103799238.json";
import { useContext, useState } from "react";
import AuthContex from "../../Contex/AuthContex";
import GoogleLoing from "../../Social Login/GoogleLoing";

const Register = () => {

  const {userCreate}=useContext(AuthContex)
  const [error,setError]=useState()


  const registerHandele = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setError()

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!passwordRegex.test(password)){
      setError(
        "Password validation: Must contain uppercase, and lowercase letters, and be at least 6 characters long."
      );
      return
    }


    userCreate(email, password)
    .then(data=>{
     console.log(data);
    })
    .catch((error) => {
      setError("user Create Fail",error)
    });

  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerAnimation} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={registerHandele} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <p className="text-red-500">{error}</p>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              <GoogleLoing></GoogleLoing>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
