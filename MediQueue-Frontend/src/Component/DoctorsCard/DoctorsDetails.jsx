import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Pages/Api/axios';

const DoctorsDetails = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                setLoading(true);
                const res = await api.get(`/doctors/${id}`);
                setDoctor(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch doctor details.");
            } finally {
                setLoading(false);
            }
        };
        fetchDoctorDetails();
    }, [id]);

    if (loading) return <p>Loading doctor details...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Doctor Details</h2>
            {doctor ? (
                <div>
                    <p><strong>Name:</strong> {doctor.name}</p>
                    <p><strong>Speciality:</strong> {doctor.speciality?.name || "N/A"}</p>
                    <p><strong>Available Days:</strong> {Array.isArray(doctor.available_days) ? doctor.available_days.join(', ') : doctor.available_days}</p>
                    <p><strong>Time:</strong> {doctor.start_time} - {doctor.end_time}</p>
                </div>
            ) : (
                <p>No doctor found.</p>
            )}
        </div>
    );
};

export default DoctorsDetails;
