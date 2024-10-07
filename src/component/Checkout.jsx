import React, { useState } from 'react';
import LoginForm from '../component/LoginForm';
import RegistrationForm from '../component/RegisterForm';
import OTPVerification from '../component/OTPVerify';

const Checkout = () => {
  const [step, setStep] = useState('login'); // 'login', 'register', 'otp', 'success'
  const [mobile, setMobile] = useState('');

  const handleLoginSuccess = (mobileNo) => {
    setMobile(mobileNo); // Store the mobile number from login
    setStep('otp'); // Move to OTP verification after login
  };

  const handleRegisterSuccess = (mobileNo) => {
    setMobile(mobileNo); // Store the mobile number from registration
    setStep('otp'); // Move to OTP verification after registration
  };

  const handleOTPSuccess = () => {
    setStep('success'); // Show success message after OTP verification
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Checkout</h2>
      {step === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      {step === 'register' && <RegistrationForm onRegisterSuccess={handleRegisterSuccess} />}
      {step === 'otp' && <OTPVerification mobile={mobile} onOTPSuccess={handleOTPSuccess} />}
      {step === 'success' && <p className="text-center">Order Successfully Delivered!</p>}
      <div className="text-center">
        <button onClick={() => setStep('register')} className="btn btn-link">
          Don't have an account? Register here.
        </button>
        <button onClick={() => setStep('login')} className="btn btn-link">
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};

export default Checkout;
