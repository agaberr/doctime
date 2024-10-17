import React from "react";
import Doctorcards from "./Doctorcards"
import { Doctor } from "../../assets/data/Doctor";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/userFetchData";

const Doctorlist = ()=>{
    
    const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/api/doctors`);
    
    return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

    {doctors.map(doctor => (
        <Doctorcards key={doctor._id} doctor={doctor} />
        ))}

    </div>
        </>

    )
}
export default Doctorlist;