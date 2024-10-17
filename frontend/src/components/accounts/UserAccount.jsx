import React from"react";
import userImg from "../../assets/images/doctor1.jpg";
import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UserBookings from "./UserBookings";
import UserProfile from "./UserProfile";
import useGetProfile from "../../hooks/userFetchData"
import { BASE_URL } from "../../config";
import Loading from "../animations/Loading";
import Error from "../animations/Error";

const UserAccount = () => {

    const {dispatch} = useContext(authContext);
    const navigate = useNavigate();
    const [tab, setTab] = useState();

    const {data:userData, loading, error} = useGetProfile(`${BASE_URL}/api/users/profile/me`);

    // console.log(userData, "userdata")

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
        navigate('/')
    };

return (
    <div className="max-w-[1170px] px-5 mx-auto">

        {loading && <Loading />}

        {!error && <Error errMessage={error} />}

        <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
                <div className="flex items-center justify-center">
                    <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid Mborder-primaryColor">
                    <img
                    src={userImg}
                    alt=""
                    className="w-full h-full rounded-full"
                    />
                    </figure>
                </div>

                <div className="text-center mt-4">
                    <h3 className="text-[18px] leading-[30px] Otext-headingColor font-bold ">
                        Muhibur Rahman
                    </h3>
                    <p className="Mtext-textColor text-[15px] leading-6 font-medium ">
                        exampleagmail .com
                    </p>
                    <p className="Mtext-textColor text-[15px] leading-6 font-medium ">
                    Blood Type:
                    <span className="ml-2 Otext-headingColor text-[22px] leading-8">
                            o+
                    </span>
                    </p>
                </div>

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

        <div classNames="md:col-span-2 md:px-[30px]">
            <div>
            <button
                onClick={() => setTab("bookings")}
                className={`${
                    tab === "bookings" && "bg-primaryColor text-white font-normal"
                } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid Eborder-primaryColor`}>
                    My Bookings
            </button>
            <button
                onClick={() => setTab("settings")}
                className={`${
                    tab === "settings" && "bg-primaryColor text-white font-normal"
                } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid Eborder-primaryColor`}>
                    Profile Settings
            </button>   
    </div>
                {tab === 'bookings' && <UserBookings />}
                {tab === 'settings' && <UserProfile user={userData} />}
    </div>
    </div>
</div>
)}

export default UserAccount


