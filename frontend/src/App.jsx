import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import ConsultationPage from './pages/ConsultationPage';
import TranscriptPage from './pages/TranscriptPage';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/transcript" element={<TranscriptPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
