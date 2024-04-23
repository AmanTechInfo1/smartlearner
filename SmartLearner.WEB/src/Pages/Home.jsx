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
import hallOfFame from "../assets/images/hallOfFame.png";
import starImg from "../assets/images/star.png";
import spiralImg from "../assets/images/pngtree-undulate-gray-wave-swirl-png-image_5082452.png";
import Carousel from "./Carousel";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
  const images = [
    "src/assets/images/xain-img-150x150.jpg",
    "src/assets/images/kevin-img-150x150.jpg",
    "src/assets/images/xain-img-150x150.jpg",
    "src/assets/images/kevin-img-150x150.jpg",
    "src/assets/images/xain-img-150x150.jpg",
    "src/assets/images/kevin-img-150x150.jpg",
    // Add more image URLs as needed
  ];

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
        <div className={styles.carContent}>
          <div className={styles.carContainer}>
            <h2>
              BOOK <br /> NOW WITH <br />
              SMARTLEARNER
            </h2>
          </div>
          <div className={styles.mainFeatures}>
            <div className={styles.column}>
              <h3>
                Afordable <br />
                Prices{" "}
              </h3>
              <p>
                We are always looking at industry prices to ensure our learners
                get the best valued lessons
              </p>
            </div>
            <div className={styles.column}>
              <h3>
                Automated SMS <br /> Alerts
              </h3>
              <p>
                You will receive SMS alerts on your phoine to remind you of your
                lessons
              </p>
            </div>
            <div className={styles.column}>
              <h3>
                Unique Learning <br />
                Plans
              </h3>
              <p>
                Our Instructor cater to your unique learning styles and create
                lesson plans around them
              </p>
            </div>
          </div>
          <div className={styles.spiralImgContainer}>
            <img src={spiralImg} alt="spiralImg" />
          </div>
          <div className={styles.whyChooseText}>
            <p>
              See why more than 10,000 people choose Smartlearner to Pass their
              Driving Test{" "}
            </p>
          </div>
          <div className={styles.starImgContainer}>
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
          </div>
        </div>
      </section>
      {/* //////////////carousel section///////////////// */}

      <>
        <Carousel />
      </>
      {/* ////////////////////////Reviews section //////////////////////// */}
      <section className={styles.facebookReviewsSection}>
        <div className={styles.facebookReviewsContainer}>
          <h4 id={styles.heading1}>Our Reviews</h4>
          <hr />
          <div className={styles.reviewsList}></div>
          <div className={styles.followUsLinks}>
            <h4>Follow us!</h4>
            <hr />
            <div className={styles.socialFollowIcons}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook id={styles.FollowIcons} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram id={styles.FollowIcons} />
              </a>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat id={styles.FollowIcons} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter id={styles.FollowIcons} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube id={styles.FollowIcons} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////pass with us ////////////////////////// */}
      <section className={styles.imageSliderContainer}>
        <h2>Pass With Us</h2>
        <div className={styles.slider}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
}
