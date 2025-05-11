import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import Register from './pages/Register';
import Login from './pages/Login';
const App = () => {
  return (
    <div>
      <Navbar/>
     
        <Routes>
          {/* <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/> */}
          <Route path="/patient" element={<PatientDashboard/>}/>
          <Route path="/doctor" element={<DoctorDashboard/>}/>
        </Routes>
        <Footer/>
      
    </div>
  )
}

export default App;

