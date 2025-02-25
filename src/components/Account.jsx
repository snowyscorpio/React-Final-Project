import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('/logout', {}, { withCredentials: true });

      localStorage.removeItem('user');

      document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  if (!user) return <p>Loading...</p>;

  return (
    <div className="account-container">
      <h2>My Account</h2>
      <div className="account-info">
        <img src={user.profile_picture || 'default-avatar.png'} alt="Profile" className="profile-pic" />
        <p>Name:{user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
      <button onClick={() => { localStorage.removeItem('user'); navigate('/login'); }}>
        Log Out
      </button>
    </div>
  );
}

export default Account;
