import React from 'react'
import { useState } from "react";

const Contact = () => {
  const [formData,setFormData] = useState({
      email:"",
      subject:"",
      message:"",
      role:"",

  });
  
  const handleInputChange = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});

  };

  const handleSubmit = async (e)=>{
      e.preventDefault(); 
  };


  return (
      <section>
          <div className="px-4 mx-auto max-w-screen-md">
              <h2 className="text-center text-[50px] text-black font-bold">Contact-US</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-[20px] text-black">
                  Got a technical issue? want to sent feedback about a beta feature? let <br />
                  us know
              </p>
              <form action="" method = "post" className="space-y-8" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="text-black font-bold text-[16px] leading-7">Your Email</label>
                      <input type="email"
                      name= "email"
                      value={formData.email}
                      placeholder="example@gmail.com"
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                          focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]" />
                  </div>
                  <div>
                      <label htmlFor="subject" className="text-black font-bold text-[16px] leading-7">subject</label>
                      <input type="text"
                      name = "subject"
                      onChange={handleInputChange}
                      value={formData.subject}
                      placeholder="let us know how we can help you"
                      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                          focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]" />
                  </div>
                  <div className="sm:col-span-2">
                      <label htmlFor="message" className="text-black font-bold text-[16px] leading-7">Your Message</label>
                      <textarea type="text"
                      rows="5"
                      name= "message"
                      onChange={handleInputChange}
                      value={formData.message}
                      placeholder="leave a comment...."
                      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                          focus:border-b-blue-600 rounded-md cursor-pointer text-[16px]" ></textarea>
                  </div>
                  <div className="mb-5 flex items-center justify-between">
                  <label htmlFor="" className="text-black font-bold text-[16px] leading-7"
                      value={formData.role}
                         onChange={handleInputChange}>
                          Conatct as a patient or doctor:
                          <select name = "role" className="text-black font-semibold text-[15px] leading-7 px-4
                          py-3 focus:outline-none">
                              <option value="">Select</option>
                              <option value="patient">patient</option>
                              <option value="doctor">doctor</option>
                              
                          </select>
                      </label>
                </div>
                  <div className="mt-7">
                <button type="submit" className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg
                      px-4 py-3">Submit</button>
                  </div>
              
              </form>
          </div>
      </section>
  )
}

export default Contact
