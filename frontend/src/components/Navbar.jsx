import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar custom-navbar">
            <div className="navbar-logo">
                <NavLink to="/" className="nav-brand-link">
                    <h1>TeleHealth</h1>
                </NavLink>
            </div>
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
                <ul className="navbar-links ms-auto">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
                    <li><NavLink to="/payment" className={({ isActive }) => isActive ? "active-link" : ""}>Payment</NavLink></li>
                    <li><NavLink to="/consultation" className={({ isActive }) => isActive ? "active-link" : ""}>Consultation</NavLink></li>
                    <li><NavLink to="/transcript" className={({ isActive }) => isActive ? "active-link" : ""}>Transcript</NavLink></li>
                    <li><NavLink to="/patient" className={({ isActive }) => isActive ? "active-link" : ""}>PatientDashboard</NavLink></li>
                    <li><NavLink to="/doctor" className={({ isActive }) => isActive ? "active-link" : ""}>DoctorDashboard</NavLink></li>
                    <li><NavLink to="#" className="nav-link">Profile</NavLink></li>
                    <li><NavLink to="/logout" className={({ isActive }) => isActive ? "active-link" : ""}>Logout</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;