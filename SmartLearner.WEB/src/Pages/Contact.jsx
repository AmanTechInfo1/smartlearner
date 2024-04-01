// ContactUs.js
import { FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import styles from "./css/ContactUs.module.css"; // Import CSS module

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    mobileNo: "",
    email: "",
    tutionType: "",
    instructorType: "",
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
    // Handle form submission, you can use formData state here
 
    console.log(formData);
  };

  return (
    <div className={styles.ContactUsPage}>
      <div className={styles.contactHead}>
        <h1>Contact</h1>
      </div>
      <div className={styles.contactUsDetails}>
        <div className={styles.contactUsContainer}>
          <div className={styles.contactInfo}>
            <h4>
              Our <span> address</span>
            </h4>
            <p>
              {" "}
              <FaBuilding id={styles.addressIcon} />
              SmartLearner Driving School <br />4 Wheelwright Buildings, Hen
              Lane, Coventry, CV6 4LB, England
            </p>
            <hr />
            <p>
              <IoMdMail id={styles.addressIcon} />
              <a href="mailto:admin@smartlearner.com">
                {" "}
                admin@smartlearner.com
              </a>
            </p>
            <p>
              <FaPhoneAlt id={styles.addressIcon} />
              <a href="tel:07859 800 382"> +44 02475092784</a>
            </p>
            <hr />
            <h4>
              Get in <span>touch</span> with us
            </h4>
            <ul id={styles.linksIconId} type="none">
              <li>
                <a href="#">
                  <FaFacebook id={styles.socialIconContactUs} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram id={styles.socialIconContactUs} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter id={styles.socialIconContactUs} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.map}>
            {/* Embed your map here, such as Google Maps iframe */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzM4LjQiTiA3wrAzMCc0My44Ilc!5e0!3m2!1sen!2sus!4v1587265813612!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.contactUsFormContainer}>
        <h2>
          Contact <span> Form</span>
        </h2>
        <p>Please fill out the fields given below</p>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.contantUsFormColoumn}>
              <div className={styles.column}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />

                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                />

                <label htmlFor="mobileNo">Mobile No.</label>
                <input
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder="Mobile No."
                  required
                />

                <label htmlFor="tutionType">Tution Type</label>
                <select
                  id="tutionType"
                  name="tutionType"
                  value={formData.tutionType}
                  onChange={handleChange}
                  required
                >
                  <option disabled value="">
                    --Select Tution Type--
                  </option>
                  <option value="Auto">Auto</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
              <div className={styles.column}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />

                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  required
                />

                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />

                <label htmlFor="instructorType">Instructor Type</label>
                <select
                  id="instructorType"
                  name="instructorType"
                  value={formData.instructorType}
                  onChange={handleChange}
                  required
                >
                  <option disabled value="">
                    --Select Instruction Type--
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="No prefrence">No Prefrence</option>
                </select>
              </div>
            </div>
            <div className={styles.message}>
              <label htmlFor="message">Any Special Instructions</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className={styles.submit}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
