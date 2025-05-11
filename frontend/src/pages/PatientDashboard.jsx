

import React, { useEffect, useState } from "react";
import axios from "axios";

function PatientDashboard() {
    const [user, setUser] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [medicalHistory, setMedicalHistory] = useState([]);

    useEffect(() => {
        const fetchPatientData = async () => {
            try {
                const token = localStorage.getItem("token");
                const userResponse = await axios.get("http://localhost:5000/api/auth/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(userResponse.data);

                const appointmentsResponse = await axios.get(`http://localhost:5000/api/patient/appointments/${userResponse.data._id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setAppointments(appointmentsResponse.data);

                const historyResponse = await axios.get(`http://localhost:5000/api/patient/medical-history/${userResponse.data._id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMedicalHistory(historyResponse.data);
            } catch (error) {
                console.error("Error fetching patient data", error);
            }
        };

        fetchPatientData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Welcome, {user.name}</h1>
            <div className="mt-4">

                {/* Upcoming Appointments */}
                <section className="card mb-4 shadow">
                    <div className="card-header bg-primary text-white">
                        <h2>Upcoming Appointments</h2>
                    </div>
                    <div className="card-body">
                        {appointments.length > 0 ? (
                            <ul className="list-group">
                                {appointments.map((appointment) => (
                                    <li key={appointment._id} className="list-group-item">
                                        {new Date(appointment.date).toLocaleString()} with Dr. {appointment.doctorId.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted">No upcoming appointments.</p>
                        )}
                    </div>
                </section>

                {/* Medical History */}
                <section className="card mb-4 shadow">
                    <div className="card-header bg-success text-white">
                        <h2>Medical History</h2>
                    </div>
                    <div className="card-body">
                        {medicalHistory.length > 0 ? (
                            <ul className="list-group">
                                {medicalHistory.map((history) => (
                                    <li key={history._id} className="list-group-item">
                                        {new Date(history.date).toLocaleDateString()} - {history.details}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted">No medical history available.</p>
                        )}
                    </div>
                </section>

                {/* Notifications */}
                <section className="card shadow">
                    <div className="card-header bg-warning text-dark">
                        <h2>Notifications</h2>
                    </div>
                    <div className="card-body">
                        <p>No new notifications.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PatientDashboard;

