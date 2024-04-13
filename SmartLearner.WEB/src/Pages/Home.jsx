import styles from "./css/Home.module.css";
import { useState } from "react";
import LplateImg from "..//assets/images/L-Plate.jpg";
import arrowImg from "../assets/images/arrow-img2.png";
import trustPilot from "..//assets/images/trustpilot-inline-white.png";
import homeUserHand from "..//assets/images/userHandImg.png";

import userIdentificationImg from "../assets/images/userIndentification.png";
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
      <section className={styles.homeSection}>
<div>
  <div></div>
</div>

      </section>
    </div>
  );
}
