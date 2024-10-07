// src/component/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState(''); // New state for Contact No
  const [address, setAddress] = useState(''); // New state for Address
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., API call)
    // After registration, navigate to OTP verification page
    navigate('/otp-verify');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f8f9fa' }} // Optional background color
    >
      <div
        className="card p-3 w-50"
        style={{ maxHeight: '400px', overflowY: 'auto' }} // Set max height and overflow
      >
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact No:</label>
            <input
              type="text"
              className="form-control"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address:</label>
            <textarea
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
