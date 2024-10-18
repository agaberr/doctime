import useFetchData from "../../hooks/userFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../doctors/Doctorcards2";
import useGetProfile from "../../hooks/userFetchData";

import { useState, useEffect } from "react";

const UserBooking = () => {
    const [appointments, setAppointments] = useState([]);
    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/api/users/profile/me`);

    useEffect(() => {
        // Fetch appointments only after userData is available
        const fetchAppointments = async () => {
          if (userData && userData._id) {  // Check if userData._id exists
            try {
              const response = await fetch(`${BASE_URL}/api/users/appointments/${userData._id}`);
              const data = await response.json();
              
              if (Array.isArray(data.data)) {
                  setAppointments(data.data);
              } else {
                throw new Error("Invalid data format: Expected an array");
              }
            } catch (err) {
              console.error("Error fetching appointments:", err.message);
            }
          }
        };

        fetchAppointments();
    }, [userData]);  // Only run this effect when userData changes

    return (
        <div>
            {loading ? (
                <p>Loading appointments...</p>
            ) : error ? (
                <p>Error loading user profile: {error}</p>
            ) : appointments.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {appointments.map(doctor => (
                        <DoctorCard doctor={doctor} key={doctor.id} />
                    ))}
                </div>
            ) : (
                <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor">
                    You haven't booked any appointments yet!!!
                </h2>
            )}
        </div>
    );
};

export default UserBooking;
