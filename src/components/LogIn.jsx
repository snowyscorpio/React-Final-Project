import React, { useState, useEffect } from 'react';
import Title from './Title';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import visibleIcon from '../assets/images/visible.png';
import invisibleIcon from '../assets/images/invisible.png';

function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/users/session', { withCredentials: true })
      .then((res) => {
        if (res.data.user) {
          setRole(res.data.user.role);
          navigate('/');
        }
      })
      .catch(() => setRole(null));
  }, [navigate]);

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
      const res = await axios.post('/users/login', formData, { withCredentials: true });
      alert('Login successful!');
      setRole(res.data.user.role);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="main">
      <Title />
              <h2 className="login-title">Log In</h2>
      <div className="login-container">

        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
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
            <button type="submit" className="login-button">Log In</button>
          </div>
        </form>
        <p className="login-footer">Don't have an account? <NavLink to="/register" className="login-link"> Sign Up</NavLink></p>
      </div>
    </div>
  );
}

export default LogIn;