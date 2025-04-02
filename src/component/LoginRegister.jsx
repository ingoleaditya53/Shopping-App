import React, { useState } from 'react';

const LoginRegister = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = () => {
    if (mobile) {
      // Simulate OTP sending (you would typically make an API call here)
      alert(`OTP sent to ${mobile}`);
      setOtpSent(true);
    } else {
      alert("Please enter a valid mobile number.");
    }
  };

  return (
    <div className="container my-5 py-5">
      <h2>{otpSent ? 'Verify OTP' : 'Login / Register'}</h2>
      {!otpSent ? (
        <div>
          <input
            type="text"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="form-control mb-3"
          />
          <button onClick={sendOtp} className="btn btn-primary">Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            className="form-control mb-3"
          />
          <button className="btn btn-success">Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
