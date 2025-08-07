import React, { useEffect, useState } from 'react';
import api from '../Api/axios';


const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get('/my-appointments').then(res => {
      setAppointments(res.data.appointments);
    });
  }, []);

  if (!appointments.length) return <p className="p-6">No appointments found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      {appointments.map(app => (
        <div key={app.id} className="border p-4 rounded-md shadow">
          <p><strong>Doctor:</strong> {app.doctor.name}</p>
          <p><strong>Hospital:</strong> {app.hospital.name}</p>
          <p><strong>Date:</strong> {app.appointment_date}</p>
          <p><strong>Serial No:</strong> {app.serial_number}</p>
          <p><strong>Status:</strong> {app.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
