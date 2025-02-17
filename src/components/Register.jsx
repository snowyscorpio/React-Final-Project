import React, { useState } from 'react';
import Title from './Title';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import visibleIcon from '../assets/images/visible.png';
import invisibleIcon from '../assets/images/invisible.png';

function Register() {
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
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="register-container">
        <h2 className="register-title">Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <p className="register-label">Name</p>
          <input type="text" name="name" className="register-input" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <p className="register-label">Email</p>
          <input type="email" name="email" className="register-input" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <p className="register-label">Password</p>
          <div className="password-container">
            <input type={showPassword ? 'text' : 'password'} name="password" className="register-input password-input" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              <img src={showPassword ? invisibleIcon : visibleIcon} alt="Toggle password visibility" className="eye-icon" />
            </span>
          </div>
          <div className="button-container">
            <button type="submit" className="register-button">Sign Up</button>
          </div>
        </form>
        <p className="register-footer">Already have an account? <NavLink to="/login" className="register-link"> Log In</NavLink></p>
      </div>
    </div>
  );
}

export default Register;
