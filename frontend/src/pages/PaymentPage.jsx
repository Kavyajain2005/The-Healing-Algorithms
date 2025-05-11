import React, { useState } from 'react';
import '../styles/PaymentPage.css'; // Import your CSS file for styling

const PaymentPage = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Call API to process payment
    console.log('Processing payment:', amount);
  };

  return (
    <div className="payment-page">
      <h2>Make Payment</h2>
      <div className="payment-form">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentPage;
