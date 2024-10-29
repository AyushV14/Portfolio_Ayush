import React, { useState } from 'react';
import './ContactUs.css';
import Skills from './Skills';
import Quote from './Quote';

const ContactMe = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "92f72487-d659-4d4c-bb94-ec0e95381349");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className='contact-us'>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>Name:</label>
          <input type="text" name="name" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Message:</label>
          <textarea name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
        <span>{result}</span>
        
        <div className="feedback-section">
          <h3>Feedback / Comments</h3>
          <textarea placeholder="Leave your feedback here..." rows="4"></textarea>
          <button>Submit</button>
        </div>
      </div>
      <div className='sidecontent'>
        <Skills />
        <Quote />
      </div>
    </div>
  );
};

export default ContactMe;
