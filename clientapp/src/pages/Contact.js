// ContactUs.js
import { FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import styles from "./css/ContactUs.module.css"; // Import CSS module
// /////////////////
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { contactUsData } from "../redux/features/contactUsSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../schemas/master";

export default function ContactUs() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const handleContactUsForm = async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("address", data.address);
    formData.append("postalCode", data.postalCode);
    formData.append("mobileNo", data.mobileNo);
    formData.append("email", data.email);
    formData.append("tutionType", data.tutionType);
    formData.append("instructorType", data.instructorType);
    formData.append("message", data.message);

    dispatch(contactUsData({ requestData: data, reset }));
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
              tabIndex="0"></iframe>
          </div>
        </div>
      </div>
      <div className={styles.contactUsFormContainer}>
        <h2>
          Contact <span> Form</span>
        </h2>
        <p>Please fill out the fields given below</p>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(handleContactUsForm)}>
            <div className={styles.contantUsFormColoumn}>
              <div className={styles.column}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <input
                      value={value}
                      onChange={onChange}
                      type="text"
                      placeholder="First Name"
                      className={styles.homeForminputField}
                      required
                    />
                  )}
                />

                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <input
                      value={value}
                      onChange={onChange}
                      type="text"
                      placeholder="Address"
                      className={styles.homeForminputField}
                      required
                    />
                  )}
                />

                <Controller
                  name="mobileNo"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <input
                      value={value}
                      onChange={onChange}
                      type="text"
                      placeholder="Mobile No."
                      className={styles.homeForminputField}
                      required
                    />
                  )}
                />

                <Controller
                  name="tutionType"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <select
                      value={value}
                      onChange={onChange}
                      className={styles.homeForminputField}
                      required>
                      <option disabled value="">
                        --Select Tution Type--
                      </option>
                      <option value="Auto">Auto</option>
                      <option value="Manual">Manual</option>
                    </select>
                  )}
                />
              </div>

              <div className={styles.column}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <input
                      value={value}
                      onChange={onChange}
                      type="text"
                      placeholder="Last Name"
                      className={styles.homeForminputField}
                      required
                    />
                  )}
                />

                <Controller
                  name="postalCode"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <input
                      value={value}
                      onChange={onChange}
                      type="text"
                      placeholder="Postal Code"
                      className={styles.homeForminputField}
                      required
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <input
                      value={value}
                      onChange={onChange}
                      type="email"
                      placeholder="Email Address"
                      className={styles.homeForminputField}
                      required
                    />
                  )}
                />

                <Controller
                  name="instructorType"
                  control={control}
                  defaultValue=""
                  render={({ field: { value, onChange } }) => (
                    <select
                      value={value}
                      onChange={onChange}
                      className={styles.homeForminputField}
                      required>
                      <option disabled value="">
                        --Select Instruction Type--
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="No preference">No Preference</option>
                    </select>
                  )}
                />
              </div>
            </div>

            <div className={styles.message}>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field: { value, onChange } }) => (
                  <textarea
                    value={value}
                    onChange={onChange}
                    placeholder="Any Special Instructions"
                    className={styles.homeForminputField}
                    required
                  />
                )}
              />
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
