import React from 'react'
import frameimg from "../assets/frame.png" 
import SignupForm from './SignupForm'
import LoginForm   from './LoginForm' 
import {FcGoogle} from 'react-icons/fc'    


const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => { 
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 text-white justify-between'>     
      <div className='w-11/12 max-w-[450px]'>  
       <h1 className='font-semibold text-[1.875rem] leading-[2.37rem]' >{title}</h1>    
       <p className='text-[1.25rem] leading-[1.6rem] mt-[4]'>  
        <span className='text-richblack-100 '>{desc1}</span> 
        <br/> 
        <span className='text-blue-100 italic'>{desc2}</span>      


       </p>
       {formtype==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn} />):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}   
       <div className='flex w-full items-center my-3 gap-x-2 '>
        <div className=' w-full h-[1px] bg-richblack-100' ></div>   
        <p className='text-richblack-700 leading-[1.375rem]'>OR</p>  
        <div className=' w-full h-[1px] bg-richblack-100'></div>  
       </div>

       <button className='w-full flex items-center justify-center font-medium  rounded-[8px] border border-richblack-700 px-[12px] py-[7px] gap-x-2'>    
        <FcGoogle/>   
        <p className='px-[6px]'>Sign Up with Google</p></button>        


      </div>
      <div className='relative w-11/12 max-w-[450px] '>   
        <img src={frameimg} alt="pattern" width={558} height={504} /> 

        <img className='absolute -top-4 right-4' src={image} alt="pattern" width={558} height={504} />     
      </div>
    </div>
  )
}

export default Template
