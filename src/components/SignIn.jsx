import React, { useState } from 'react';
import Title from './Title';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import visibleIcon from '../assets/images/visible.png';
import invisibleIcon from '../assets/images/invisible.png';

function SignIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Remove spaces if the user is typing a password
    const newValue = name === "password" ? value.replace(/\s/g, '') : value;

    setFormData({ ...formData, [name]: newValue });
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return false; 
       }

    let hasLetter = false;
    let hasNumber = false;


    for (let char of password) {
      if (/[a-zA-Z]/.test(char)) {
        hasLetter = true;
      } else if (/[0-9]/.test(char)) {
        hasNumber = true;
      }


      if (hasLetter && hasNumber) {
        return true;
      }
    }

    return false; 
  };


  const validateEmail = (email) => {
    if (email.includes(' ')) {
      return false; // Email should not contain spaces
    }

    for (let i = 0; i < email.length; i++) {
      let char = email[i];

      // Allow only letters, numbers, '@', and '.'
      if (
        !((char >= 'a' && char <= 'z') ||
          (char >= 'A' && char <= 'Z') ||
          (char >= '0' && char <= '9') ||
          char === '@' ||
          char === '.')
      ) {
        return false; // Invalid character found
      }
    }

    return true; // Email is valid
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Email can only contain letters, numbers, ".", and "@". No spaces or special characters allowed.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters long and contain both letters and numbers.');
      return;
    }

    try {
      await axios.post('/users/register', formData, { withCredentials: true });
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setError('Error registering user');
    }
  };



  return (
    <div className="main">
      <Title />
      <div className="container">
        <h2 className="login-title">Sign Up</h2>
        <div className="login-container">
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <p className="login-label">Name</p>
            <input type="text" name="name" className="login-input" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <p className="login-label">Email</p>
            <input type="email" name="email" className="login-input" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <p className="login-label">Password</p>
            <div className="password-container">
              <input type={showPassword ? 'text' : 'password'} name="password" className="login-input password-input" placeholder="Password" value={formData.password} onChange={handleChange} required />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                <img src={showPassword ? invisibleIcon : visibleIcon} alt="Toggle password visibility" className="eye-icon" />
              </span>
            </div>
            <div className="button-container">
              <button type="submit" className="login-button">Sign Up</button>
            </div>
          </form>
          <p className="login-footer">Already have an account? <NavLink to="/login" className="login-link"> Log In</NavLink></p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
