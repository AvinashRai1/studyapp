import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;  
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto" >   
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" /> 
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white">    
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> 
            <Link to="/">About</Link>
          </li>
          <li>
           
            <Link to="/">Conatct</Link> 
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4  ">     
        {!isLoggedIn &&
            <Link to="/login">
                <button className="text-white bg-richblack-800 py-[8px] px-[12px] border border-richblack-700 rounded -[8px]">Login</button>    
            </Link>
        } 
         {!isLoggedIn &&
            <Link to="/signup">
                <button className="text-white bg-richblack-800 py-[8px] px-[12px] border border-richblack-700 rounded -[8px]" >Signup</button>   
            </Link>
        }
         { isLoggedIn &&
            <Link to="/"> 
                <button onClick={()=>{
                    setIsLoggedIn(false); 
                    toast.success("Logged out");  
                }} className="text-white bg-richblack-800 py-[8px] px-[12px] border border-richblack-700 rounded -[8px]">LogOut</button>  
            </Link> 
        }
         { isLoggedIn &&  
            <Link to="/dashboard"> 
                <button className="text-white bg-richblack-800 py-[8px] px-[12px] border border-richblack-700 rounded -[8px]">Dashboard</button> 
            </Link>
        } 
      </div>

    </div>
  );
};

export default Navbar;
