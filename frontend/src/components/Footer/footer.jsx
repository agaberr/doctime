import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"


    const quickslinks01 = [
        {
            path:"/",
            display:"Home",
        },
    ];
    const quickslinks02 = [
        {
            path:"/doctors",
            display:"Find a Doctor",
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