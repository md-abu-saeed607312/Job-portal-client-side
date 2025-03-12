/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Login-Animation 1741155898400.json";
import { useContext, useState } from "react";
import AuthContex from "../../Contex/AuthContex";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLoing from "../../Social Login/GoogleLoing";
import axios from "axios";

const Login = () => {
  const naviget=useNavigate()
 const location=useLocation()
  const { logingUser } = useContext(AuthContex);
  const[error,setError]=useState()
  const loginHAndeler = (e) => {
    e.preventDefault();

    setError()

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logingUser(email, password)
      .then((result) => {
        // naviget(location?.state?location.state:"/")
        console.log('sign in',result.user.email);
        const user={email:email}
        axios.post("http://localhost:5000/jwt",user)
        .then(res=>{
          console.log(res.data);
        })
      })
      .catch((error) => {
        setError("login fail ,please tray again")
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie className="min-h-3/12 " animationData={loginAnimation} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={loginHAndeler} className="fieldset">
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
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <GoogleLoing></GoogleLoing>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
