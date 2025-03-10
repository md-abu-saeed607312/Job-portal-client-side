import { useContext } from "react";
import AuthContex from "../Contex/AuthContex";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLoing = () => {
  const location=useLocation()
  const naviget=useNavigate()
  const { googleSingup,setLoding } = useContext(AuthContex);

  const googlehandel = () => {
    googleSingup()
      .then(() => {
        naviget(location?.state?location.state:"/") // state privet Route থেকে আসতেছে
        setLoding(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <div>
     <div className="divider">OR</div>
    <button onClick={googlehandel} className="btn w-full bg-green-500">Google</button>
  </div>;
};

export default GoogleLoing;
