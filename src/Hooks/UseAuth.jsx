import { useContext } from "react"
import AuthContex from "../Contex/AuthContex"

const UseAuth =()=>{
    const couscontext=useContext(AuthContex)
    return couscontext
}

export default UseAuth