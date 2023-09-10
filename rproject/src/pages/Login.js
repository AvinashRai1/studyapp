import React from 'react'
import Template from '../components/Template'
import logginImg from "../assets/login.png" 

const Login = ({setIsLoggedIn}) => {      

  return (
   <Template title="WELCOME BACK" desc1="Build skills for tommorow and beyond" desc2="Education to future proof" image={logginImg} setIsLoggedIn={setIsLoggedIn} formtype="login"/>    
  )  
} 

export default Login
