// import React from 'react'

import { useState } from "react";


export default function CallBackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Optionally, you can reset the form fields
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          message: "",
        });
      };


  return (
    <div className="callBackform">
    <h2>REQUEST A CALLBACK</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          placeholder="Enter Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Regarding:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Regarding..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button id="btn" type="submit">
        SEND CALLBACK REQUEST
      </button>
    </form>
  </div>
  
  )
}
