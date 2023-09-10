
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home" 
import Login from "./pages/Login" 
import Signup from "./pages/Signup" 
import Dashboard from "./pages/Dashboard"   
import {Route,Routes} from "react-router-dom"  
import { useState } from "react";
import Private from "./components/Private";  



function App() { 

 
 const[isLoggedIn,setIsLoggedIn]=useState(false); 

  

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col  ">  
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>   
      <Route path="/signup" element={<Signup/>}/>  
      <Route path="/dashboard" element={
        <Private isLoggedIn={isLoggedIn} >  
      <Dashboard/> 
      </Private> 
      
      }/>  
    </Routes> 

    </div>
    )
}

export default App;
