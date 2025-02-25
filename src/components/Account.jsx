import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Account() {
  const [user, setUser] = useState(null);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
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
        if (response.data.profile_picture) {
          setPreview(response.data.profile_picture);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(`/users/upload/${user.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setPreview(response.data.profile_picture);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete(`/users/${user.id}`);
        sessionStorage.clear();
        navigate('/login');
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('/users/logout', {}, { withCredentials: true });
      sessionStorage.clear();
      document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.dispatchEvent(new Event("storage"));
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>My Account</h2>
      <div className="account-container">
        <div className="profile-picture-container">
          {preview ? (
            <img src={preview} alt="Profile" className="profile-picture" />
          ) : (
            <p>No profile picture</p>
          )}
          <input type="file" accept="image/*" onChange={handleChange} className="file-input" />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div className="account-info">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <Link to="/editAccount" className="edit-button">Edit</Link>
        </div>
        <button onClick={handleLogout}>Log Out</button>
        <button onClick={handleDelete} className="delete-button">Delete Account</button>
      </div>
    </div>
  );
}

export default Account;
