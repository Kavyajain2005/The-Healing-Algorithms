import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorDashboard() {
    const [user, setUser] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const token = localStorage.getItem("token");
                const userResponse = await axios.get("http://localhost:5000/api/auth/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(userResponse.data);

                const appointmentsResponse = await axios.get(`http://localhost:5000/api/doctor/appointments/${userResponse.data._id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setAppointments(appointmentsResponse.data);

                const requestsResponse = await axios.get(`http://localhost:5000/api/doctor/requests/${userResponse.data._id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setRequests(requestsResponse.data);
            } catch (error) {
                console.error("Error fetching doctor data", error);
            }
        };

        fetchDoctorData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary">Welcome, Dr. {user.name}</h1>
            <div className="mt-4">

                {/* Scheduled Appointments */}
                <section className="card mb-4 shadow">
                    <div className="card-header bg-primary text-white">
                        <h2>Scheduled Appointments</h2>
                    </div>
                    <div className="card-body">
                        {appointments.length > 0 ? (
                            <ul className="list-group">
                                {appointments.map((appointment) => (
                                    <li key={appointment._id} className="list-group-item">
                                        {new Date(appointment.date).toLocaleString()} with {appointment.patientId.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted">No scheduled appointments.</p>
                        )}
                    </div>
                </section>

                {/* Patient Requests */}
                <section className="card mb-4 shadow">
                    <div className="card-header bg-success text-white">
                        <h2>Patient Requests</h2>
                    </div>
                    <div className="card-body">
                        {requests.length > 0 ? (
                            <ul className="list-group">
                                {requests.map((request) => (
                                    <li key={request._id} className="list-group-item">
                                        {new Date(request.date).toLocaleString()} - {request.details}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted">No pending requests.</p>
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

export default DoctorDashboard;

