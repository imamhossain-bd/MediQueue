import React, { useEffect, useState } from 'react';
import api from '../Api/axios';

const Appointments = () => {

    const [doctors, setDoctors] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [doctorId, setDoctorId] = useState('');
    const [hospitalId, setHospitalId] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        api.get('/doctors').then(res => setDoctors(res.data.doctors));
        api.get('/hospitals').then(res => setHospitals(res.data.hospitals));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
        const res = await api.post('/appointments', {
            doctor_id: doctorId,
            hospital_id: hospitalId,
            appointment_date: appointmentDate,
        });
        setMessage('Appointment booked successfully!');
        } catch (error) {
        setMessage(error.response?.data?.message || 'Failed to book appointment.');
        }
    };



    return (
        <div>
            <div className="max-w-md mx-auto p-6 border rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label className="block font-semibold">Select Hospital</label>
                    <select
                        value={hospitalId}
                        onChange={e => setHospitalId(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Select Hospital</option>
                        {hospitals.map(h => (
                        <option key={h.id} value={h.id}>{h.name}</option>
                        ))}
                    </select>
                    </div>
                    <div>
                    <label className="block font-semibold">Select Doctor</label>
                    <select
                        value={doctorId}
                        onChange={e => setDoctorId(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Select Doctor</option>
                        {doctors.map(d => (
                        <option key={d.id} value={d.id}>
                            {d.name} - {d.hospital.name} ({d.speciality?.name || 'No speciality'})
                        </option>
                        ))}
                    </select>
                    </div>
                    <div>
                    <label className="block font-semibold">Appointment Date</label>
                    <input
                        type="date"
                        value={appointmentDate}
                        onChange={e => setAppointmentDate(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                        min={new Date().toISOString().split('T')[0]} // today or after
                    />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Book Appointment
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-red-600">{message}</p>}
            </div>
        </div>
    );
};

export default Appointments;