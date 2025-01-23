import React from 'react';
import Title from './Title';


function Contact() {
  return (
    <div className="main">

      < Title />
      <div className="contact">
        <h2>Contact Us</h2>
        <p className="p-contact-upper">Hello Beautiful Thing, Here You Can Contact Us</p>
        <p className="p-contact">First Name</p>
        <input type="text" name="first_name" className="input-contact" />

        <p className="p-contact">Last Name</p>
        <input type="text" name="last_name" className="input-contact" />

        <p className="p-contact">Email</p>
        <input type="email" name="email" className="input-contact" />

        <p className="p-contact">Phone Number</p>
        <input
          type="tel"
          name="phone_number"
          required
          maxLength="10"
          className="input-contact"
        />

        <p className="p-contact">Message Us</p>
        <textarea
          rows="4"
          cols="50"
          name="message"
          className="textarea-contact"
          placeholder="Anything you wanna say..."
        ></textarea>

        <div>
          <button type="submit" className="button-contact">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;