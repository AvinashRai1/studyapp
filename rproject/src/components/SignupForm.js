import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  function handleChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
   const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  function handlesubmit(e) {
    
    e.preventDefault(); 
    if(formData.password!==formData.confirmpassword){
      toast.error("Password do not match");
      return ;
    }
    navigate("/"); 
    toast.success("ACCOUNT-CREATED");  
  }
  return (
    <div>
      <div className="bg-richblack-800 flex rounded-full max-w-max  gap-x-1 my-6 p-1 ">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-yellow-50"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("student");
          }}
        >
          STUDENT
        </button>
        <button
          className={`${
            accountType === "INSTRUCTOR"
              ? "bg-richblack-900 text-yellow-50"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("INSTRUCTOR");
          }}
        >
          INSTRUCTOR
        </button>
      </div>
      <form onSubmit={handlesubmit}>
        <div className="flex justify-between mt-[20px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full px-[12px] py-[8px]"
              required
              type="text"
              name="firstname"
              onChange={handleChange}
              placeholder="enter your name"
              value={formData.firstname}
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              LastName <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full px-[12px] py-[8px]"
              required
              type="text"
              name="lastname"
              onChange={handleChange}
              placeholder="enter your last name"
              value={formData.lastname}
            />
          </label>
        </div>
        <div className="mt-[20px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              E-MAIL<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full px-[12px] py-[8px]"
              required
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="enter your email"
              value={formData.email}
            />
          </label>
        </div>

        <div className="flex justify-between gap-x-2 mt-[20px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create-password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full px-[12px] py-[8px]"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="enter your password"
              value={formData.password}
            />
            <span
              className="absolute right-3 top-[40.5px] "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm-password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full px-[12px] py-[8px]"
              required
              type={showPassword ? "text" : "password"}
              name="confirmpassword"
              onChange={handleChange}
              placeholder="confirm password"
              value={formData.confirmpassword}
            />

            <span
              className="absolute right-3 top-[42.5px] "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-[20px] w-full ">
          create account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
