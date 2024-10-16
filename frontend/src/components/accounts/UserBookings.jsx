import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "./../.. /conponents/Doctors/DoctorCard" ;
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";


const UserBooking = () => {
    const {
        data: appointments,
            loading,
            error,
        } = useFetchoata(`${BASE_URL}/users/appointments/my-appointments`);

    return (
        <div>
            {loading && !error && <Loading />}
            {error && !loading && <Error errMessages={error} />}

            {!loading && !error && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {appointments.map(doctor => (
                        <DoctorCard doctors={doctor} key={doctors._id} />
                ))}
                </div>
            )}

            {!loading && !error && appointments.length ===0 && (
                <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor">
                    You Didn't book any appointments!!!
                </h2>
            )}


            </div>
        );
};
export default UserBooking;