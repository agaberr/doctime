import { useState } from "react";
import { toast } from 'react-toastify';
import { token, BASE_URL } from '../../config';
import defaultDoctorImage from "../../assets/images/doctor1.jpg";

const Doctorcards = ({ doctor, index, userId }) => {
  const { name, _id: doctorId } = doctor;
  const [loading, setLoading] = useState(false);

  const bookAppointment = async () => {
    setLoading(true);
    try {

    const appointmentDate = new Date(); // Set to current date/time for demo purposes

    console.log(doctorId, userId, appointmentDate);

    
    const response = await fetch(`${BASE_URL}/api/doctors/book-appointment`, 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Use token from config
            },
            body: JSON.stringify({
                doctorId: doctorId,
                userId: userId,
                appointmentDate
            }),
        }
    );

    // console.log(response.success)
        toast.success("Appointment booked successfully!"); // Show success toast
    } catch (error) {
        console.log(error);
      toast.error("Error booking appointment."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-3 lg:p-5">
        <div>
          <img src={defaultDoctorImage} alt={name || "Doctor"} />
        </div>

        <h2 className="text-xl text-center font-extrabold text-black mt-4">{`Dr. ${name}`}</h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={bookAppointment}
            className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            disabled={loading}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Doctorcards;
