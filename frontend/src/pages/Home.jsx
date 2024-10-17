import React from "react";

import { Link } from "react-router-dom";
import doctor from "../assets/images/doctor1.jpg"


const Home = ()=>{
    return (
        <>
            <section className="hero_section pt-[60px] 2xl:h-[800px]">
            <div className="container" >
                <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                    <div>
                     <div className="pl-12 lg:w-[570px]">
                        <h1 className = "text-[36px] leading-9 text-primaryColor font-extrabold  sm:text-[40px] md:text-[60px] md:leading-[70px]">We help patients get well as soon as possible</h1>
                        <p className="text-black text-xs mt-4">lorem ipsum how are you toady is a good day,also have a nice day and along with the people<br />
                           also have a nice day and along with the people lorem ipsum how are you toady is a good day<br />
                           are enjoy so much then we are show happy lorem ipsum how are you toady is a good day<br />
                           also have nice day</p>
                           <Link to = "/doctors">   <button className="btn px-8 mt-5 text-xl py-6 rounded-full text-white hover:bg-purpleColor hover:text-black lg:px-5 lg:py-3">Request an Appointment</button></Link>
                     </div>
                     <div className="pl-12 mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center lg:gap-[30px]">
                     <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">30+</h2>
                        <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]"></span>
                        <p className="text-[20px] text-black font-extrabold ">Years of Experience</p>
                     </div>
                     <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">15+</h2>
                        <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]"></span>
                        <p className="text-[20px] text-black font-extrabold ">Clinic Location</p>
                     </div>
                     <div>
                        <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]">100%</h2>
                        <span className="w-[100px] h-2 bg-green-400 rounded-full block mt-[-14px]"></span>
                        <p className="text-[20px] text-black font-extrabold ">Patient Satisfaction</p>
                     </div>
                  </div>
                  </div>

                  <div className="flex gap-[30px] justify-end">
                        <div>
                            <img src = {doctor} alt = "" className="w-full"/>
                        </div>
                    </div>


                  </div>
                  </div>
            </section> 
        </>
    )
}
export default Home;