import React, { useState } from 'react';
import styles from "../../Pages/SpecialityTraining/ExtendedTest.module.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    additionalInfo: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section className={styles.formContainer}>
        <section className={styles.innerFormSection}>
          <div className={styles.enquiryForm}>
            <h4>Enquiry Form</h4>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">
                  Full Name<span>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactNumber">
                  Contact Number<span>*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="additionalInfo">
                  Additional Information<span>*</span>
                </label>
                <textarea
                  id={styles.additionalInfo}
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <ReCAPTCHA
                  id="recaptcha"
                  sitekey="your_site_key" // Replace 'your_site_key' with your actual reCAPTCHA site key
                />
              </div>
              <div className={styles.formBtn}>
                <button type="submit" id={styles.formBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
