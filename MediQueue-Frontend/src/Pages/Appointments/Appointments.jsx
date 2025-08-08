import React, { useEffect, useState } from 'react';
import api from '../Api/axios';
import { Calendar, MapPin, User, Stethoscope, CheckCircle, AlertCircle, Clock, Phone, Mail, Star, Search, Filter } from 'lucide-react';

const Appointments = () => {

  const [doctors, setDoctors] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [doctorId, setDoctorId] = useState('');
    const [hospitalId, setHospitalId] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [message, setMessage] = useState('');
    
    // New features state
    const [appointmentTime, setAppointmentTime] = useState('');
    const [appointmentType, setAppointmentType] = useState('consultation');
    const [patientNotes, setPatientNotes] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [showDoctorDetails, setShowDoctorDetails] = useState(null);
    const [preferredContact, setPreferredContact] = useState('email');

    useEffect(() => {
        api.get('/doctors').then(res => {
            setDoctors(res.data.doctors);
            setFilteredDoctors(res.data.doctors);
        });
        api.get('/hospitals').then(res => setHospitals(res.data.hospitals));
    }, []);

    // Filter doctors based on search and hospital
    useEffect(() => {
        let filtered = doctors;
        
        if (hospitalId) {
            filtered = filtered.filter(doc => doc.hospital.name === hospitals.find(h => h.id === parseInt(hospitalId))?.name);
        }
        
        if (searchDoctor) {
            filtered = filtered.filter(doc => 
                doc.name.toLowerCase().includes(searchDoctor.toLowerCase()) ||
                doc.speciality?.name.toLowerCase().includes(searchDoctor.toLowerCase())
            );
        }
        
        setFilteredDoctors(filtered);
    }, [searchDoctor, hospitalId, doctors, hospitals]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsLoading(true);

        try {
            const res = await api.post('/appointments', {
                doctor_id: doctorId,
                hospital_id: hospitalId,
                appointment_date: appointmentDate,
                appointment_time: appointmentTime,
                appointment_type: appointmentType,
                patient_notes: patientNotes,
                preferred_contact: preferredContact
            });
            setMessage('Appointment booked successfully!');
            
            // Reset form after success
            setTimeout(() => {
                setDoctorId('');
                setHospitalId('');
                setAppointmentDate('');
                setAppointmentTime('');
                setPatientNotes('');
                setAppointmentType('consultation');
                setPreferredContact('email');
            }, 2000);
            
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to book appointment.');
        } finally {
            setIsLoading(false);
        }
    };

    const isSuccess = message === 'Appointment booked successfully!';
    const selectedDoctor = filteredDoctors.find(doc => doc.id === parseInt(doctorId));
    const selectedHospital = hospitals.find(h => h.id === parseInt(hospitalId));

    const timeSlots = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
    ];

    const appointmentTypes = [
        { value: 'consultation', label: 'General Consultation', icon: '💬' },
        { value: 'checkup', label: 'Regular Checkup', icon: '🔍' },
        { value: 'followup', label: 'Follow-up Visit', icon: '🔄' },
        { value: 'emergency', label: 'Urgent Care', icon: '🚨' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
                        <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Appointment</h1>
                    <p className="text-gray-600">Schedule your visit with our healthcare professionals</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Hospital Selection */}
                                <div>
                                    <label className="flex items-center font-semibold text-gray-700 mb-3">
                                        <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                                        Select Hospital
                                    </label>
                                    <select
                                        value={hospitalId}
                                        onChange={e => setHospitalId(e.target.value)}
                                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-700"
                                        required
                                    >
                                        <option value="">Select Hospital</option>
                                        {hospitals.map(h => (
                                        <option key={h.id} value={h.id}>{h.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Doctor Search */}
                                <div>
                                    <label className="flex items-center font-semibold text-gray-700 mb-3">
                                        <Search className="w-5 h-5 mr-2 text-green-500" />
                                        Search Doctor
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search by name or specialty..."
                                            value={searchDoctor}
                                            onChange={e => setSearchDoctor(e.target.value)}
                                            className="w-full border-2 border-gray-200 p-4 pl-12 rounded-xl focus:border-green-500 focus:ring-0 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-700"
                                        />
                                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                {/* Doctor Selection */}
                                <div>
                                    <label className="flex items-center font-semibold text-gray-700 mb-3">
                                        <User className="w-5 h-5 mr-2 text-purple-500" />
                                        Select Doctor
                                    </label>
                                    <div className="space-y-3 max-h-64 overflow-y-auto">
                                        {filteredDoctors.map(d => (
                                            <div 
                                                key={d.id}
                                                className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                                    parseInt(doctorId) === d.id 
                                                        ? 'border-purple-500 bg-purple-50' 
                                                        : 'border-gray-200 hover:border-purple-300 bg-gray-50'
                                                }`}
                                                onClick={() => setDoctorId(d.id.toString())}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex-1">
                                                        <div className="flex items-center mb-2">
                                                            <h3 className="font-semibold text-gray-800">{d.name}</h3>
                                                            <div className="flex items-center ml-2">
                                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                                <span className="text-sm text-gray-600 ml-1">{d.rating}</span>
                                                            </div>
                                                        </div>
                                                        <p className="text-purple-600 text-sm">{d.speciality?.name || 'General Practice'}</p>
                                                        <p className="text-gray-500 text-sm">{d.hospital.name}</p>
                                                        <p className="text-gray-500 text-xs">{d.experience} experience</p>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name="doctor"
                                                        checked={parseInt(doctorId) === d.id}
                                                        onChange={() => setDoctorId(d.id.toString())}
                                                        className="text-purple-600"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        {filteredDoctors.length === 0 && (
                                            <p className="text-gray-500 text-center py-4">No doctors found</p>
                                        )}
                                    </div>
                                </div>

                                {/* Appointment Type */}
                                <div>
                                    <label className="flex items-center font-semibold text-gray-700 mb-3">
                                        <Filter className="w-5 h-5 mr-2 text-indigo-500" />
                                        Appointment Type
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {appointmentTypes.map(type => (
                                            <div
                                                key={type.value}
                                                className={`p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                                                    appointmentType === type.value
                                                        ? 'border-indigo-500 bg-indigo-50'
                                                        : 'border-gray-200 hover:border-indigo-300 bg-gray-50'
                                                }`}
                                                onClick={() => setAppointmentType(type.value)}
                                            >
                                                <div className="flex items-center">
                                                    <span className="text-lg mr-2">{type.icon}</span>
                                                    <span className="text-sm font-medium">{type.label}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Date and Time */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center font-semibold text-gray-700 mb-3">
                                            <Calendar className="w-5 h-5 mr-2 text-green-500" />
                                            Appointment Date
                                        </label>
                                        <input
                                            type="date"
                                            value={appointmentDate}
                                            onChange={e => setAppointmentDate(e.target.value)}
                                            className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-500 focus:ring-0 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-700"
                                            required
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    <div>
                                        <label className="flex items-center font-semibold text-gray-700 mb-3">
                                            <Clock className="w-5 h-5 mr-2 text-orange-500" />
                                            Preferred Time
                                        </label>
                                        <select
                                            value={appointmentTime}
                                            onChange={e => setAppointmentTime(e.target.value)}
                                            className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-orange-500 focus:ring-0 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-700"
                                            required
                                        >
                                            <option value="">Select Time</option>
                                            {timeSlots.map(time => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Contact Preference */}
                                <div>
                                    <label className="flex items-center font-semibold text-gray-700 mb-3">
                                        <Phone className="w-5 h-5 mr-2 text-pink-500" />
                                        Preferred Contact Method
                                    </label>
                                    <div className="flex space-x-4">
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="contact"
                                                value="email"
                                                checked={preferredContact === 'email'}
                                                onChange={e => setPreferredContact(e.target.value)}
                                                className="mr-2 text-pink-500"
                                            />
                                            <Mail className="w-4 h-4 mr-1 text-pink-500" />
                                            Email
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="contact"
                                                value="phone"
                                                checked={preferredContact === 'phone'}
                                                onChange={e => setPreferredContact(e.target.value)}
                                                className="mr-2 text-pink-500"
                                            />
                                            <Phone className="w-4 h-4 mr-1 text-pink-500" />
                                            Phone
                                        </label>
                                    </div>
                                </div>

                                {/* Patient Notes */}
                                <div>
                                    <label className="flex items-center font-semibold text-gray-700 mb-3">
                                        <Stethoscope className="w-5 h-5 mr-2 text-teal-500" />
                                        Additional Notes (Optional)
                                    </label>
                                    <textarea
                                        value={patientNotes}
                                        onChange={e => setPatientNotes(e.target.value)}
                                        placeholder="Describe your symptoms or reason for visit..."
                                        rows={4}
                                        className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-teal-500 focus:ring-0 transition-all duration-300 bg-gray-50 hover:bg-white text-gray-700 resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
                                        isLoading 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98]'
                                    } text-white`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Booking...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <Stethoscope className="w-5 h-5 mr-2" />
                                            Book Appointment
                                        </div>
                                    )}
                                </button>
                            </form>
                            
                            {message && (
                                <div className={`mt-6 p-4 rounded-xl flex items-center transition-all duration-300 ${
                                    isSuccess
                                        ? 'bg-green-50 text-green-800 border-2 border-green-200'
                                        : 'bg-red-50 text-red-800 border-2 border-red-200'
                                }`}>
                                    {isSuccess ? (
                                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                    )}
                                    <p className="font-medium">{message}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Selected Doctor Info */}
                        {selectedDoctor && (
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Selected Doctor</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                            <User className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{selectedDoctor.name}</h4>
                                            <p className="text-purple-600 text-sm">{selectedDoctor.speciality?.name || 'General Practice'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-yellow-500">
                                        <Star className="w-4 h-4 fill-current mr-1" />
                                        <span className="text-sm text-gray-600">{selectedDoctor.rating} rating</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{selectedDoctor.experience} experience</p>
                                    <div className="pt-2 border-t space-y-1">
                                        <p className="text-sm text-gray-600 flex items-center">
                                            <Phone className="w-4 h-4 mr-2" />
                                            {selectedDoctor.phone}
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center">
                                            <Mail className="w-4 h-4 mr-2" />
                                            {selectedDoctor.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Selected Hospital Info */}
                        {selectedHospital && (
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Hospital Information</h3>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-800">{selectedHospital.name}</h4>
                                    <p className="text-sm text-gray-600 flex items-start">
                                        <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                        {selectedHospital.address}
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <Phone className="w-4 h-4 mr-2" />
                                        {selectedHospital.phone}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Appointment Summary */}
                        {(appointmentDate || appointmentTime || appointmentType) && (
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Appointment Summary</h3>
                                <div className="space-y-2 text-sm">
                                    {appointmentDate && (
                                        <p className="flex items-center text-gray-700">
                                            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                                            {new Date(appointmentDate).toLocaleDateString()}
                                        </p>
                                    )}
                                    {appointmentTime && (
                                        <p className="flex items-center text-gray-700">
                                            <Clock className="w-4 h-4 mr-2 text-orange-500" />
                                            {appointmentTime}
                                        </p>
                                    )}
                                    {appointmentType && (
                                        <p className="flex items-center text-gray-700">
                                            <Filter className="w-4 h-4 mr-2 text-indigo-500" />
                                            {appointmentTypes.find(t => t.value === appointmentType)?.label}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Tips */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                    <Calendar className="w-4 h-4 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-800">Quick Tips</h3>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Arrive 15 minutes before your appointment</li>
                                <li>• Bring your ID and insurance information</li>
                                <li>• You can reschedule up to 24 hours in advance</li>
                                <li>• Bring a list of current medications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;