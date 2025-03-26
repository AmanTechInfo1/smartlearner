import { FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import styles from "./css/ContactUs.module.css"; // Import CSS module
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../schemas/master";
import { enquiryData } from "../redux/features/enquirySlice";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";


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
    data.formType = "contactUsForm";

    dispatch(enquiryData({ requestData: data, reset }));
  };

  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "Contact Us";

    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out",
      stagger: 0.1,
      rotationX: 90,
      transformOrigin: "bottom center",
      scale: 0.5,
    })
      .to(letters, {
        scale: 1,
        opacity: 1,
        rotationX: 0,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
      })
      .to(letters, {
        color: "#FF5733",
        rotationY: 360,
        stagger: 0.1,
        duration: 1,
      })
      .to(letters, {
        scale: 1.2,
        opacity: 0.8,
        rotationX: -10,
        stagger: 0.1,
        duration: 1,
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "Contact Form"; // First part before "Driving"
    // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = text2Ref.current.querySelectorAll("span");

    // GSAP Timeline for the text animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out", // Start from below
      stagger: 0.1, // Stagger the animation for each letter
      rotationX: 90, // Initial rotation effect
      transformOrigin: "bottom center", // Center for rotation
      scale: 0.5,
    })
      .to(letters, {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade in to full opacity
        rotationX: 0, // Reset rotation
        y: 0, // Move to original position
        stagger: 0.1, // Slight stagger for each letter
        duration: 0.8, // Smooth transition duration
      })
      .to(letters, {
        color: "#FF5733", // Change text color to red
        rotationY: 360, // Apply rotation on the Y-axis
        stagger: 0.1,
        duration: 1, // Rotate each letter over 1 second
      })
      .to(letters, {
        scale: 1.2, // Slightly enlarge text
        opacity: 0.8, // Reduce opacity slightly
        rotationX: -10, // Slight tilt effect
        stagger: 0.1, // Stagger the scaling
        duration: 1, // Animation duration
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  return (
    <div
      className={styles.ContactUsPage}
      style={{
        backgroundColor: "black",
        color: "white",
        paddingBottom: "5rem",
      }}>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Get in Touch with Us</title>
                <link rel="canonical" href="https://smartlearner.com/Contact-Us" />
                <meta name="description" content="Have questions or need more information? Contact us today! " />
            </Helmet>
      <div className={styles.contactHead}>
        <div className="opicity"></div>
        <div className={styles.contactheadinghead}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </div>
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
                  <FaXTwitter id={styles.socialIconContactUs} />
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
              tabIndex="0"></iframe>
          </div>
        </div>
      </div>
      <div className={styles.contactUsFormContainer}>
        <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>

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
                      required>
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
                      required>
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
                  <p style={{ color: "red" }}>
                    {errors?.instructorType?.message}
                  </p>
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
