import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditAccount() {
  const [user, setUser] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
          navigate('/login');
          return;
        }
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
        setUpdatedName(response.data.name);
        setUpdatedEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleSave = async () => {
    try {
      await axios.put(`/users/${user.id}`, {
        name: updatedName,
        email: updatedEmail
      });

      navigate('/account'); // חזרה לעמוד החשבון לאחר השמירה
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Edit Account</h2>
      <div className="account-edit-form">
        <label>Name:</label>
        <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />

        <button onClick={handleSave}>Save Changes</button>
        <button onClick={() => navigate('/account')}>Cancel</button>
      </div>
    </div>
  );
}

export default EditAccount;
