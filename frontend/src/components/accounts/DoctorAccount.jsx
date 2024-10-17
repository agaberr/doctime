import {useState} from "react"
import useGetProfile from "../../hooks/userFetchData"
import { BASE_URL } from "../../config";
import DoctorTabs from "./DoctorTabs";
import img from "../../assets/images/doctor1.jpg"

const DoctorAccount = () => {
    
    const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);

    const [tab, setTab] = useState('overview');

    return (
    <section>
        <div className="max-w-[1170px] px-5 mx-auto">
            <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
                <DoctorTabs tab={tab} setTab={setTab} />
                <div className="lg:col-span-2">

                    <div className="mt-8">
                        {tab === "overview" && (
                            
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <figure className="max-w-[200px] max-h-[200px]">
                                        <img src={img} alt="" className="w-full"/>
                                    </figure>
                                    <div>
                                        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                                            Surgeon
                                        </span>
                                        <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">Ahmed Gaber</h3>

                                        <p className="text__para font-[15px] lg:max-w-[390px] leading-6">doctor bio</p>
                                    </div>
                                </div>
                            </div>



                        )}
                        {tab === "appointments" && <div>appointments</div>}
                        {tab === "profile" && <div>profile settings</div>}
                    </div>

                </div>
            </div>
        </div>
        </section>
    );
};

export default DoctorAccount;