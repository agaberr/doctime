import {React,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import patient from "../assets/images/patient-avatar.png"
import { BASE_URL } from "../config";
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";



const SignUp = ()=>{

    const [selectFile,setSelectFile] = useState(null);
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        photo:selectFile,
        gender:"",
        role:""
    });
  
    const handleInputChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleFileInputChange = async (e)=>{
        const file = e.target.files[0];
        console.log(file);

    };
    const submitHandler = async (e)=>{
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/api/auth/signup`,
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

            setLoading(false);
            toast.success('User registered successfully');
            navigate('/login');

        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }            
      
    };
    return ( <>
        <section className="px-5 lg:px-0 py-28">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md ">
                <div>
                    <div className=" lg:pl-16 py-10">
                        <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
                        Create an <span className="text-blue-600 ">Account</span></h3>
                        <form  method = "post" onSubmit={submitHandler}>
                        <div className="mb-5">
                        <input type="name" placeholder="Enter Your name" name = "name" value={formData.name}
                           onChange={handleInputChange}
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input type="email" placeholder="Email" name = "email" value={formData.email}
                           onChange={handleInputChange}
                        
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input type="password" placeholder="Password" name = "password" value={formData.password}
                           onChange={handleInputChange}
                        
                            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]"
                            required
                        />
                    </div>
                    <div className="mb-5 flex items-center justify-between">
                    <label htmlFor="" className="text-black font-bold text-[16px] leading-7"
                        value={formData.role}
                           onChange={handleInputChange}>
                            Type:
                            <select name = "role" className="text-black font-semibold text-[15px] leading-7 px-4
                            py-3 focus:outline-none">
                                <option value="">Select</option>
                                <option value="patient">patient</option>
                                <option value="doctor">doctor</option>
                                
                            </select>
                        </label>
                        <label htmlFor="" className="text-black font-bold text-[16px] leading-7"
                        value={formData.gender}
                           onChange={handleInputChange}>
                            Gender:
                            <select name = "gender" className="text-black font-semibold text-[15px] leading-7 px-4
                            py-3 focus:outline-none">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    
                    </div>
                  <div className="mb-5 flex items-center gap-3">
                    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-600 flex items-center justify-center">
                        <img src = {patient} alt = ""  className="w-full rounded-full"/>
                    </figure>
                    <div className="relative w-[130px] h-[50px]">
                        <input type="file " name = "photo" id = "customfile" accept=".jpg, .png"
                        onChange={handleFileInputChange}
                        className="absolute  top-0 left-0 w-full  h-full opacity-0 cursor-pointer" />
                        <label htmlFor="customfile" className="absolute  top-0 left-0 w-full  h-full flex items-center px-[0.75rem]
                        py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-black font-semibold rounded-lg
                        truncate cursor-pointer">Update Photo</label>
                    </div>
                  </div>
                  <div className="mt-7">
                  <button 
                    disabled={loading && true}
                    type="submit" className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg
                        px-4 py-3">
                            {loading ? <HashLoader size={35} color="ffffff"/> : 'SignUp'}
                    </button>
                    </div>
                    <p className="mt-5 text-black text-center">
                        Already  have an account
                        <Link to = "/login" className="text-blue-600 font-medium ml-1">Login</Link>
                    </p>
                
                  
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default SignUp;