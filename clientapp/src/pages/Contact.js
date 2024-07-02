import { FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";
import styles from "./css/ContactUs.module.css"; // Import CSS module
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../schemas/master";
import { enquiryData } from "../redux/features/enquirySlice";

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
    formData.append("postcode", data.postcode);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("tutionType", data.tutionType);
    formData.append("instructorType", data.instructorType);
    formData.append("message", data.message);
    formData.append("formType", "contactUsForm");
    dispatch(enquiryData({ requestData: data, reset }));
   
  };

  return (
    <div
      className={styles.ContactUsPage}
      style={{
        backgroundColor: "black",
        color: "white",
        paddingBottom: "5rem",
      }}
    >
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
              <a href="tel:+4402475092784"> +44 02475092784</a>
            </p>
            <hr />
            <h4>
              Get in <span>touch</span> with us
            </h4>
            <ul id={styles.linksIconId} type="none">
              <li>
                <a href="https://www.facebook.com/smartlearnerdrivingschool">
                  <FaFacebook id={styles.socialIconContactUs} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/smartlearnerdrivingschool">
                  <FaInstagram id={styles.socialIconContactUs} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/smartlearner">
                  <FaTwitter id={styles.socialIconContactUs} />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.map}>
            {/* Embed your map here, such as Google Maps iframe */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2431.76492499033!2d-1.510095!3d52.447173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870c1a41cee7455%3A0x371db3a56741de7!2sSmartLearner%20Driving%20School!5e0!3m2!1sen!2sin!4v1719565626829!5m2!1sen!2sin"
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
          <form onSubmit={handleSubmit(handleContactUsForm)}>
            <div className={styles.contantUsFormColoumn}>
              <div className={styles.column}>
                <Controller
                  name="firstName"
                  control={control}
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
                  defaultValue=""
                />
                {errors?.firstName && (
                  <p style={{ color: "red" }}>{errors?.firstName?.message}</p>
                )}
                <Controller
                  name="address"
                  control={control}
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
                  defaultValue=""
                />
                {errors?.address && (
                  <p style={{ color: "red" }}>{errors?.address?.message}</p>
                )}
                <Controller
                  name="phoneNumber"
                  control={control}
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
                  defaultValue=""
                />
                {errors?.phoneNumber && (
                  <p style={{ color: "red" }}>{errors?.phoneNumber?.message}</p>
                )}
                <Controller
                  name="tutionType"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <select
                      value={value}
                      onChange={onChange}
                      className={styles.homeForminputField}
                      required
                    >
                      <option disabled value="">
                        --Select Tution Type--
                      </option>
                      <option value="Auto">Auto</option>
                      <option value="Manual">Manual</option>
                    </select>
                  )}
                  defaultValue=""
                />
                {errors?.tutionType && (
                  <p style={{ color: "red" }}>{errors?.tutionType?.message}</p>
                )}
              </div>

              <div className={styles.column}>
                <Controller
                  name="lastName"
                  control={control}
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
                  defaultValue=""
                />
                {errors?.lastName && (
                  <p style={{ color: "red" }}>{errors?.lastName?.message}</p>
                )}
                <Controller
                  name="postcode"
                  control={control}
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
                  defaultValue=""
                />
                {errors?.postcode && (
                  <p style={{ color: "red" }}>{errors?.postcode?.message}</p>
                )}
                <Controller
                  name="email"
                  control={control}
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
                  defaultValue=""
                />
                {errors?.email && (
                  <p style={{ color: "red" }}>{errors?.email?.message}</p>
                )}
                <Controller
                  name="instructorType"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <select
                      value={value}
                      onChange={onChange}
                      className={styles.homeForminputField}
                      required
                    >
                      <option disabled value="">
                        --Select Instruction Type--
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="No preference">No Preference</option>
                    </select>
                  )}
                  defaultValue=""
                />
                {errors?.instructorType && (
                  <p style={{ color: "red" }}>{errors?.instructorType?.message}</p>
                )}
              </div>
            </div>

            <div className={styles.message}>
              <Controller
                name="message"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <textarea
                    value={value}
                    onChange={onChange}
                    placeholder="Any Special Instructions"
                    className={styles.homeForminputField}
                    required
                  />
                )}
                defaultValue=""
              />
              {errors?.message && (
                <p style={{ color: "red" }}>{errors?.message?.message}</p>
              )}
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
