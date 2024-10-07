import React, { useState } from "react";

const LoginForm = ({ onOrderDelivered }) => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // New state for password
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [isOrderDelivered, setIsOrderDelivered] = useState(false);

  // Validation functions
  const validateMobile = (number) => /^[0-9]{10}$/.test(number); // Validates 10-digit number
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email); // Validates @gmail.com email
  const validatePassword = (password) => password.length >= 6; // Password should be at least 6 characters long

  const sendOtp = () => {
    if (!validateMobile(mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Please enter a valid Gmail ID (e.g., example@gmail.com).");
      return;
    }
    if (!validatePassword(password)) {
      setMessage("Password should be at least 6 characters long.");
      return;
    }
    setIsOtpSent(true);
    setMessage(`OTP sent to ${mobile}. Please enter the OTP.`);
  };

  const verifyOtp = () => {
    // Mock OTP verification
    if (otp === "12345") {
      onOrderDelivered(email);
      setIsOrderDelivered(true); // Set order delivered status to true
      setMessage("Order delivered successfully!"); // Set success message
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="container my-5 py-5 text-center">
      <h2>Login</h2>
      <div className="form-group">
        {/* Mobile number input */}
        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          disabled={isOtpSent}
        />

        {/* Email input */}
        <input
          type="email"
          className="form-control my-3"
          placeholder="Enter Email ID (e.g., example@gmail.com)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isOtpSent}
        />

        {/* Password input */}
        <input
          type="password"
          className="form-control my-3"
          placeholder="Enter Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isOtpSent}
        />
      </div>

      {isOtpSent && (
        <>
          {/* OTP input field */}
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn btn-success mb-3" onClick={verifyOtp}>
            Verify OTP
          </button>
        </>
      )}

      {!isOtpSent && (
        <button className="btn btn-primary" onClick={sendOtp}>
          Send OTP
        </button>
      )}

      {/* Display message below the buttons */}
      {message && (
        <p className={`mt-3 ${isOrderDelivered ? "text-success" : "text-danger"}`} style={{ fontSize: "18px" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LoginForm;
