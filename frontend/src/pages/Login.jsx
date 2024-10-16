import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { userContext } from "../layout/Layout";

const Login = ()=>{

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const handleInputChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e)=>{
        
        e.preventDefault();
        try{
            // Login backend here
           
            alert("login successfully");
           
            navigate("/");

        }
        catch(err){
            alert("login is unsuccessfully");
        }
    }
    return (
        <>
            <section className="px-5 lg:px-0 py-28">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
                    Hello! <span className="text-blue-500">Welcome</span> Back
                </h3>
                <form method = "post" className="py-4 md:py-0" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input type="email" placeholder="Enter Your Email" name = "email" value={formData.email}
                        onChange={handleInputChange} 
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input type="password" placeholder="Enter Your Password" name = "password" value={formData.password}
                        onChange={handleInputChange} 
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            required
                        />
                    </div>
                    <div className="mt-7">
                        <button type="submit" className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg
                        px-4 py-3">Login</button>
                    </div>
                    <p className="mt-5 text-black text-center">
                        Don't have an account
                        <Link to = "/signup" className="text-blue-600 font-medium ml-1">Sign Up</Link>
                    </p>
                </form>
            </div>

            </section>
        </>
    )
}
export default Login;