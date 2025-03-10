import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const LayOut = () => {
  return (
    <div>
      <div className="h-[64px]">
        <Navbar></Navbar>
      </div>
      <div className="container mx-auto min-h-[calc(100vh-385px)]">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LayOut;
