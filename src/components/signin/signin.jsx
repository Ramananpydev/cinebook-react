import React from 'react'
import { FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './signin.css'

function SignIn({ onClose }) {
  return (
    <div className="signin-overlay">
      <div className="signin-card">

        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Get Started</h2>

        <button className="auth-btn">
          <FaGoogle /> Continue with Google
        </button>

        <button className="auth-btn">
          <MdEmail /> Continue with Email
        </button>

        <button className="auth-btn">
          <FaApple /> Continue with Apple
        </button>

        <div className="or">OR</div>

        <div className="mobile">
          <span>IN +91</span>
          <input type="text" placeholder="Continue with mobile number" />
        </div>

        <p className="terms">
          I agree to <span>Terms & Conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  )
}

export default SignIn
