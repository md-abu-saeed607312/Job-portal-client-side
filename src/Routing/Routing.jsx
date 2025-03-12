import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Jobdetails from "../Pages/Job Details/Jobdetails";
import PriverRout from "./PriverRout";
import JobsApply from "../Pages/Jobs Apply/JobsApply";
import MyApplication from "../Pages/My Applications/MyApplication";
import Addjobs from "../Pages/Add Jobs/Addjobs";
import MyPostJobs from "../Pages/My Posted Jobs/MyPostJobs";
import ViewApplications from "../Pages/View Applications/ViewApplications";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut></LayOut>,
      errorElement:<h4>Error 4004</h4>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/jobs/:id",
          loader: ({params}) =>fetch(`http://localhost:5000/jobs/${params.id}`),
          element:<PriverRout><Jobdetails></Jobdetails></PriverRout>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register" ,
            element:<Register></Register>
        },
        {
          path:"/jobapply/:id",
          element:<PriverRout><JobsApply></JobsApply></PriverRout>
        },
        {
          path:"/addjobs",
          element:<PriverRout><Addjobs></Addjobs></PriverRout>
        },
        {
          path:"/myapplication",
          element:<PriverRout><MyApplication></MyApplication></PriverRout>
        },
        {
          path:"/viewAplictions/:job_id",     
          loader:({params})=>fetch(`http://localhost:5000/jobapplication/jobs/${params.job_id}`),
          element:<PriverRout><ViewApplications></ViewApplications></PriverRout>
        },
        {
          path:"/mypostedJobs",
          element:<PriverRout><MyPostJobs></MyPostJobs></PriverRout>
        }
      ]
    },
  ]);

  export default router