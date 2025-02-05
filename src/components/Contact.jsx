import React, { useState } from 'react';
import Title from './Title';

function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted:\nName: ${formData.first_name} ${formData.last_name}\nEmail: ${formData.email}\nPhone: ${formData.phone_number}\nMessage: ${formData.message}`);
  };

  return (
    <div className="main">
      <Title />
      <div className="contact-title">
      <h2>Contact Us</h2>
      </div>
      <div className="contact">
        <p className="p-contact-upper">Hello Beautiful Thing, Here You Can Contact Us</p>
        <form onSubmit={handleSubmit}>
          <p className="p-contact">First Name</p>
          <input type="text" name="first_name" className="input-contact" value={formData.first_name} onChange={handleChange} />

          <p className="p-contact">Last Name</p>
          <input type="text" name="last_name" className="input-contact" value={formData.last_name} onChange={handleChange} />

          <p className="p-contact">Email</p>
          <input type="email" name="email" className="input-contact" value={formData.email} onChange={handleChange} />

          <p className="p-contact">Phone Number</p>
          <input type="tel" name="phone_number" required maxLength="10" className="input-contact" value={formData.phone_number} onChange={handleChange} />

          <p className="p-contact">Message Us</p>
          <textarea rows="4" cols="50" name="message" className="textarea-contact" placeholder="Anything you wanna say..." value={formData.message} onChange={handleChange}></textarea>

          <div className="button-container">
            <button type="submit" className="button-contact">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;