import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
    {/* Contact Form Main Container */}
    <div className="contact-form-container">
      <h2 className="contact-subtitle">DON'T BE SHY...</h2>
      <h1 className="contact-title">say hello</h1>
      <form className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="form-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="form-input"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="form-input full-width"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="form-input full-width"
        />
        <textarea
          name="message"
          placeholder="Write your message here... *"
          className="form-textarea"
          required
        ></textarea>
        {/* Submit Button */}
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
    </>  
  );
}
export default Contact;