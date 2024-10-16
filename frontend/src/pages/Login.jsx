import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";
import { authContext } from "../context/AuthContext";

const Login = ()=>{

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(authContext);

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const handleInputChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitHandler = async (e)=>{
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/api/auth/signin`,
               {method: "POST",
                headers: {
                    'Content-Type': 'Application/json',

                },
                body: JSON.stringify(formData)}
            )

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message);
            }

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload:{
                    user: result.data,
                    token: result.token,
                    role: result.role
                }
            }
            )

            console.log(result, 'login data')

            setLoading(false);
            toast.success('User logged in successfully');
            navigate('/');

        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }            
      
    };
    return (
        <>
            <section className="px-5 lg:px-0 py-28">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
                    Hello! <span className="text-blue-500">Welcome</span> Back
                </h3>
                <form method = "post" className="py-4 md:py-0" onSubmit={submitHandler}>
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