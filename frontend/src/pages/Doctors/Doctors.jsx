import React, { useEffect, useState, useContext } from "react";
import Doctorcards from "../../components/doctors/Doctorcards";
import { BASE_URL } from "../../config"; 
import Loading from "../../components/animations/Loading";
import Error from "../../components/animations/Error";
import { authContext } from "../../context/AuthContext"; // Import the auth context
import useFetchData from "../../hooks/userFetchData";

const Doctors = () => {
  const { data: userData, loading: loadingUser, error: userError } = useFetchData(`${BASE_URL}/api/users/profile/me`); // Fetch user profile
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/doctors`);
        const data = await response.json();
        
        if (Array.isArray(data.data)) {
          setDoctors(data.data);
        } else {
          throw new Error("Invalid data format: Expected an array");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading || loadingUser) {
    return <Loading />;
  }

  if (error || userError) {
    return <Error errMessage={error || userError} />;
  }

  return (
    <>
      <section>
        <div className="container text-center">
          <h2 className="text-xl text-center font-extrabold text-black">Find a Doctor</h2>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <Doctorcards 
                doctor={doctor} 
                index={index} 
                key={doctor.id} 
                userId={userData?._id} // Pass userId as a prop
              />
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Doctors;
