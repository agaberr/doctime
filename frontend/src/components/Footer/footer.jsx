import React from "react";
import { Link } from "react-router-dom";
import {RiLinkedinFill} from "react-icons/ri"
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from "react-icons/ai"
import logo from "../../assets/images/logo.png"

const sociallinks = [
    {
        path:"",
        icon:<AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    },
    {
        path:"",
        icon:<AiFillGithub className="group-hover:text-white w-4 h-5" />,
    },
    {
        path:"",
        icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    },
    {
        path:"",
        icon:<RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    },
    ];
    const quickslinks01 = [
        {
            path:"/",
            display:"Home",
        },
        {
            path:"/about",
            display:"About Us",
        },
        {
            path:"/services",
            display:"Services",
        },
    ];
    const quickslinks02 = [
        {
            path:"/doctors",
            display:"Find a Doctor",
        },
        {
            path:"/appointment",
            display:"Request an Appointment",
        },
        {
            path:"/location",
            display:"Find a location",
        },
    ];
    const quickslinks03 = [

        {
            path:"/contact",
            display:"Contact Us",
        },
    ];
const Footer = ()=>{
    const year = new Date().getFullYear();
    
    return (
        <>
         <footer className="pb-16 pt-10">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src = {logo} alt = "" />
                        
                        {/* <div className="flex items-centergap-3 mt-4 ">
                            {sociallinks.map((link,index)=><Link to = {link.path} className="w-9 h-9 border border-solid border-[#181A1E]
                            rounded-full flex items-center justify-center group-hover:bg-blue-600 hover:border-none">{link.icon}</Link>)}
                        </div> */}
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-medium mb-6 text-black">Quick Link</h2>
                        <ul>
                            {quickslinks01.map((link,index)=><li key = {index} className="mb-4"><Link to = {link.path} className="text-[16px] leading-7 font-normal text-black
                            ">{link.display}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-medium mb-6 text-black">I want to:</h2>
                        <ul>
                            {quickslinks02.map((link,index)=><li key = {index} className="mb-4"><Link to = {link.path} className="text-[16px] leading-7 font-normal text-black
                            ">{link.display}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-medium mb-6 text-black">Support</h2>
                        <ul>
                            {quickslinks03.map((link,index)=><li key = {index} className="mb-4"><Link to = {link.path} className="text-[16px] leading-7 font-normal text-black
                            ">{link.display}</Link></li>)}
                        </ul>
                    </div>
               
                </div>
            </div>
         </footer>
    
        </>
    )
}
export default Footer;