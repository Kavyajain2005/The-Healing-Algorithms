


import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    TeleHealth App
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/patient"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                            >
                                PatientDashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/doctor"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                            >
                                DoctorDashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="#"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/logout"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

