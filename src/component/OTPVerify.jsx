// src/component/OtpVerify.jsx
import React, { useState } from 'react';

const OtpVerify = () => {
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here (e.g., API call)
    alert('OTP Verified');
  };

  return (
    <div className="otp-verify">
      <h2>OTP Verification</h2>
      <form onSubmit={handleOtpSubmit}>
        <div>
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OtpVerify;
