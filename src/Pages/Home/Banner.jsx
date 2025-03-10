/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import grouphoto from "../../assets/tem meet/group meet.jpg"
import grouphototwo from "../../assets/tem meet/group tow meet.jpg"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={grouphoto}
              animate={{y:[50,100,50]}}
              transition={{duration: 10,repeat:Infinity}}
              className="max-w-sm w-64 rounded-t-[40px] border-red-500 border-l-8 border-b-8 rounded-br-[40px]  shadow-2xl"
            /> 
            <motion.img
              src={grouphototwo}
              animate={{x:[100,50,100]}}
              transition={{duration: 10,repeat:Infinity}}
              className="max-w-sm w-64 rounded-t-[40px] border-red-500 border-l-8 border-b-8 rounded-br-[40px]  shadow-2xl"
            /> 
          </div>
         
          <div className="flex-1">
            {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
            <motion.h1 
            animate={{x:50,color:["red"]}}
            transition={{duration:10,delay:1,ease:"easeOut",repeat:Infinity}}
            className="text-5xl font-bold">Letest <motion.span
            animate={{color:['#4af10b','#0bdef1']}}
            transition={{duration:1.5,repeat:Infinity}}
            >JOBS</motion.span> For You!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
