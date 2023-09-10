import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'
const Signup = ({setIsLoggedIn}) => { 
  return (
    <div>
         <Template title="Joint the millions learning to code" desc1="Build skills for tommorow and beyond" desc2="Education to future proof" image={signupImg} setIsLoggedIn={setIsLoggedIn} formtype="signup"  />    
    </div>
  ) 
}

export default Signup 
