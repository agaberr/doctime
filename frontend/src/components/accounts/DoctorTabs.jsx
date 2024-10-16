import {useContext} from "react";
import {authContext} from "../../context/authContext";
import {useNavigate} from "react-router-dom";


const DoctorTabs = ({ tab, setTab }) => {


    const dispatch = useContext(authContext)
    const navigate = useNavigate()


    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
        navigate('/')
    };

    return (
        <div>
        <div className="lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md ">

        <button onClick={()=> setTab('overview')} 
                className={`${ tab === "overview"
                ? "bg-indigo-100 text-primaryColor"
                : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
                Overview
        </button>

        <button onClick={()=> setTab('appointments')} 
                className={`${ tab === "appointments"
                ? "bg-indigo-100 text-primaryColor"
                : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
                Appointments
        </button>

        <button onClick={()=> setTab('profile')} 
                className={`${ tab === "profile"
                ? "bg-indigo-100 text-primaryColor"
                : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}>
                Profile
        </button>


        <div className="mt-[50-px] w-full ">
            <div className="mt-[50px] md:mt-[100px]">
                    <button onClick={handleLogout}
                            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">
                        Logout
                    </button>
                    
                    <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                        Delete account
                    </button>
                </div>
        </div>

        </ div>
        </ div>
    );
};
export default DoctorTabs;