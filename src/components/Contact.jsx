import React from 'react';
import logo from '../assets/images/LogoFlowerShop.png';

function Contact() {
  return (
    <div className="main">
      <div className="title">
        <img src={logo} alt="store's logo" className="logo" />
        <h1>MOON's FLOWER SHOP</h1>
      </div>
      <h4 className="names">by LOREN RACHEL CHEZRONY and SALEH KHATIB</h4>
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