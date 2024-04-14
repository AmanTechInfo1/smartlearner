import styles from "./css/Home.module.css";
import { useState } from "react";
import LplateImg from "..//assets/images/L-Plate.jpg";
import arrowImg from "../assets/images/arrow-img2.png";
import trustPilot from "..//assets/images/trustpilot-inline-white.png";
import homeUserHand from "..//assets/images/userHandImg.png";
import img1 from "..//assets/images/1 (1).png";
import img2 from "../assets/images/1 (2).png";
import img3 from "../assets/images/1 (3).png";
import tropfyImg from "../assets/images/grand-prize-transparent-trophy-free-png.png";
import userIdentificationImg from "../assets/images/userIndentification.png";
import hallOfFame from "../assets/images/hallOfFame.png"
// import Accordion from "react-bootstrap/Accordion";

// import Lplateimg from "..//assets/images/L-Plate.jpg";
// import leftCarimg from "../assets/images/car-red.png";
// import giftVoucherImage from "../assets/images/Screenshot-2022-12-23-113404.png";
// import { GoPlay } from "react-icons/go";
// import {
//   FaSearch,
//   FaTrophy,
//   FaRegMoneyBillAlt,
//   FaBookOpen,
//   FaCar,
//   FaCarSide,
//   FaFacebook,
//   FaInstagram,
//   FaSnapchat,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// import { FaLocationDot, FaCommentSms } from "react-icons/fa6";
// import { Areas } from "../assets/data/chooseyourareas";
// import { faqs } from "../assets/data/Faqs";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    postcode: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // const [drivenBefore, setDrivenBefore] = useState("");
  // const [preferredType, setPreferredType] = useState("");
  // const [location, setLocation] = useState("");

  // const locationSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted:", { drivenBefore, preferredType, location });
  // };

  // useEffect(() => {
  //   toast.success('Successfully toasted!')
  // }, [])

  return (
    <div className={styles.homepage}>
      <section className={styles.homeSection}>
        <div className={styles.homeContent}>
          <img src={trustPilot} alt="trustPilot" />
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.innerHomeHeading}>
            <h2>
              START YOUR
              <br /> DRIVING <br /> JOURNEY
            </h2>
          </div>

          <div className={styles.arrowImgSection}>
            <img src={arrowImg} alt="arrowImg" />
          </div>
          <div className={styles.userIdentificationImg}>
            <img src={userIdentificationImg} alt="userIdentificationImg" />
          </div>

          <div className={styles.homeUserHand}>
            <img id={styles.userHand} src={homeUserHand} alt="homeUserHand" />
            <img id={styles.LplateImg} src={LplateImg} alt="LplateImg" />
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <section className={styles.homeSection}>
        <div className={styles.secondSectionContent}>
          <div className={styles.listContent}>
            <ul type="none">
              <li>
                <span>
                  <img src={img1} alt="1" />
                </span>
                Apply for your Provisonal License
              </li>
              <li>
                <span>
                  <img src={img2} alt="2" />
                </span>
                Pass your Theory Test with Smartlearner
              </li>
              <li>
                <span>
                  <img src={img3} alt="3" />
                </span>
                Book Your lessons with Smartlearner
              </li>
            </ul>
          </div>
          <div className={styles.formContent}>
            <h2>BOOK ME IN</h2>
            <p>Contact Form</p>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <div className={styles.homeFormGroup}>
                  <label htmlFor="service">SERVICES</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={styles.homeForminputField}
                    required
                  >
                    <option disabled value="">
                      Select a service
                    </option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                  </select>
                </div>
                <div className={styles.homeFormGroup}>
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.homeForminputField}
                    required
                  />
                </div>
                <div className={styles.homeFormGroup}>
                  <label htmlFor="email">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.homeForminputField}
                    required
                  />
                </div>
                <div className={styles.homeFormGroup}>
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.homeForminputField}
                    required
                  />
                </div>
                <div className={styles.homeFormGroup}>
                  <label htmlFor="postcode">POSTCODE</label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                    className={styles.homeForminputField}
                  />
                </div>
                <button type="submit" className={styles.homeFormSubmitButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className={styles.hallFameContent}>
            <div className={styles.semiCircle}>
           <img src={hallOfFame} alt="hallOfFame" />
            </div>
            <div className={styles.trophyImg}>
            <img src={tropfyImg} alt="tropfyImg" />
            </div>
           
            <div className={styles.trophyFrame}>
            <img src="" alt="" />
            <img src="" alt="" />            
            <img src="" alt="" />
            <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}

      <section>
        <div></div>
      </section>
    </div>
  );
}
