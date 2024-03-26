// import React from 'react'
import "./css/Home.css";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import Lplateimg from "..//assets/images/L-Plate.jpg";
import leftCarimg from "../assets/images/car-red.png";
import giftVoucherImage from "../assets/images/Screenshot-2022-12-23-113404.png";
import { GoPlay } from "react-icons/go";
import {
  FaSearch,
  FaTrophy,
  FaRegMoneyBillAlt,
  FaBookOpen,
  FaCar,
  FaCarSide,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { FaLocationDot, FaCommentSms } from "react-icons/fa6";
import { Areas } from "../assets/data/chooseyourareas";
import { faqs } from "../assets/data/Faqs";

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

  const [drivenBefore, setDrivenBefore] = useState("");
  const [preferredType, setPreferredType] = useState("");
  const [location, setLocation] = useState("");

  const locationSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { drivenBefore, preferredType, location });
  };

  // useEffect(() => {
  //   toast.success('Successfully toasted!')
  // }, [])

  return (
    <div className="Home">
      <section className="homeContent">
        <div className="Container">
          <div className="mainContainer">
            <div className="form">
              <h2>REQUEST A CALLBACK</h2>
              <form onSubmit={handleSubmit}>
                <div>
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
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
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
            <div className="flexRow">
              {/*---------------------------Empty section--------------------------------- */}
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------Drivin Section------------------------------------------- */}
      <section className="driverSection">
        <div className="innerFormSection">
          <div className="search-Form">
            <form onSubmit={locationSubmit} id="locationForm">
              <div className="infoDetails">
                <div className="redio-box">
                  <h3>Have you driven before?</h3>

                  <label className="redio-btn">
                    <input
                      type="radio"
                      value="yes"
                      checked={drivenBefore === "yes"}
                      onChange={(e) => setDrivenBefore(e.target.value)}
                    />
                    <span className="checkmark"></span>
                    Yes
                  </label>
                  <label className="redio-btn">
                    <input
                      type="radio"
                      value="no"
                      checked={drivenBefore === "no"}
                      onChange={(e) => setDrivenBefore(e.target.value)}
                    />
                    <span className="checkmark"></span>
                    No
                  </label>
                </div>
                <div className="redio-box">
                  <h3>What do you prefer?</h3>

                  <label className="redio-btn">
                    <input
                      type="radio"
                      value="manual"
                      checked={preferredType === "manual"}
                      onChange={(e) => setPreferredType(e.target.value)}
                    />
                    <span className="checkmark"></span>
                    Manual
                  </label>
                  <label className="redio-btn">
                    <input
                      type="radio"
                      value="auto"
                      checked={preferredType === "auto"}
                      onChange={(e) => setPreferredType(e.target.value)}
                    />
                    <span className="checkmark"></span>
                    Auto
                  </label>
                </div>
              </div>
              <div className="submitFleid">
                <p>
                  <FaLocationDot />
                </p>

                <input
                  name="passcode"
                  type="text"
                  placeholder="ENTER POSTCODE PREFIX E.G. CV6"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ////////////////////////////Features section //////////////////////// */}
      <section className="features">
        <div className="mainFeatures">
          <div className="column">
            <span>
              <FaTrophy id="featuresIcon" />
            </span>

            <h3>Award Winning Service</h3>
            <p>
              In 2021 and 2022, SmartLearner Driving School was voted the best
              regional driving school in the UK!
            </p>
          </div>
          <div className="column">
            <span>
              <FaRegMoneyBillAlt id="featuresIcon" />
            </span>

            <h3>Affordable Prices</h3>
            <p>
              We are always looking at industry prices to ensure our learners
              get the best-valued lessons!
            </p>
          </div>
          <div className="column">
            <span>
              <FaCommentSms id="featuresIcon" />
            </span>

            <h3>Automated SMS Alerts</h3>
            <p>
              You will receive SMS alerts on your phone to remind you of your
              lesson.
            </p>
          </div>
          <div className="column">
            <span>
              <FaBookOpen id="featuresIcon" />
            </span>

            <h3>Unique Learning Plans</h3>
            <p>
              Our instructors cater to your unique learning styles and create
              lesson plans around them.
            </p>
          </div>
        </div>
      </section>
      {/* ///////////////////////////call us on ////////////////////// */}
      <section className="callUsSection">
        <div style={{ textAlign: "center" }}>
          <p>Call us on:</p>
          <p>
            <a
              href="tel:+02475092784"
              style={{
                textDecoration: "none",

                color: "#ed2025",

                fontWeight: "bolder",
              }}
            >
              <strong>02475 092 784</strong>
            </a>
            <br />
            to book!
          </p>
        </div>
      </section>
      {/* ////////////////////// video play ///////////////////// */}
      <section className="videoContainer">
        <div className="mainVideoContainer">
          <div className="imageContainer">
            <a
              href="your-video-url.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Lplateimg} alt="Lplateimg" />
              <GoPlay className="playIcon" />
            </a>
          </div>
          <div className="infoDetailsContainer">
            <div className="ulfeature">
              <ul>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>72% of pupils pass first time.</p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    Manual, automatic, and intensive driving courses to suit
                    your availability.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    Manual, automatic, and intensive driving courses to suit
                    your availability.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    All instructors are qualified coaches and extensively
                    trained in-house.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    All instructors have undergone safeguarding training, and
                    are DBS approved.
                  </p>
                </li>
                <li>
                  <span>
                    <FaCar />
                  </span>
                  <p>
                    Unique learning plans, SMS lesson reminders, and FREE online
                    training materials.
                  </p>
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////////////Book now section ///////////////////// */}
      <section className="sectionContainer">
        <div className="iconDiv">
          <FaCarSide className="iconCar" />
        </div>
        <div className="headingDiv">
          <h2>Book Your Driving Lessons</h2>
        </div>
        <div className="buttonDiv">
          <a href="tel:+123456789">
            <button id="buttonDiv">Call Us</button>
          </a>
        </div>
        <div className="paragraphsDiv">
          <p>Lines open:</p>
          <p>Monday to Friday, 9:00AM to 7:00PM</p>
          <p>Weekends 10:00AM to 4:00PM</p>
        </div>
      </section>
      {/* /////////////////////////////////Driver Areas///////////////// */}

      <section className="areaContainer">
        <h2 className="areaHeading">Choose Your Areas</h2>

        <div className="areaRow">
          {Areas.map((item, index) => (
            <div className="areaColumn" key={index}>
              <a href={item.url}>
                <img src={item.img} alt={item.name} className="areaImage" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ///////////////////////////Gift voucher section///////////////////// */}
      <section className="giftVoucherSection">
        <div className="giftVoucher">
          <div className="giftVoucherImageDiv">
            <img
              src={giftVoucherImage}
              alt="Image"
              className="giftVoucherImage"
            />
          </div>
          <div className="giftVoucherDetails">
            <h2>Gift vouchers for all occasions.</h2>
            <p>
              Does your loved one have a Birthday coming up? Maybe you are
              struggling for a last minute Christmas present?{" "}
            </p>
            <p>
              To receive a gift voucher via email, make a purchase, and let us
              know that you would like a gift voucher to be created in your
              order note, and the occasion.{" "}
            </p>
            <p>You will then receive a call to confirm your purchase.</p>
          </div>
        </div>
      </section>
      {/* /////////////////////// why choose us container/////////////////////// */}
      <section className="chooseUsContainer">
        <h4>why choose Smartlearner</h4>
        <hr />
        <div className="chooseUsMainContainer">
          <div className="chooseUsimageContainer">
            <a
              href="your-video-url.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={leftCarimg} alt="Lplateimg" />
              <GoPlay className="playIcon" />
            </a>
          </div>
          <div className="chooseDetailsContainer">
            <div className="ulchooseDetails">
              <p>
                We are the highest-rated and fast-growing independent driving
                school in the West Midlands. We offer everything you could ever
                need to get yourself on the road. We take into consideration
                your availability, requirements, lesson location, and anything
                else you may require. We then choose the perfect instructor for
                you.
              </p>
              <p>
                We even offer 1-2-1 theory and simulator training with a tutor
                for those who feel they may need additional support to pass
                their exams. So, forget the rest and learn with the best! Call
                us today on 02475 092 784 to get yourself booked in.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////// Reviews section /////////////////*/}

      <section className="facebookReviewsSection">
        <h4 id="heading1">Our Reviews</h4>
        <div className="facebookReviewsContainer">
          <h4 id="heading2">Stay Connected</h4>
          <div className="reviewsList"></div>
          <div className="followUsLinks">
            <h4>Follow us!</h4>
            <hr />
            <div className="socialFollowIcons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook id="FollowIcons" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram id="FollowIcons" />
              </a>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat id="FollowIcons" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter id="FollowIcons" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube id="FollowIcons" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  ////////////////////////Faqs ////////////////////// */}

      <section className="faqs-section">
        <div className="faqs-container">
          <h4>FAQ</h4>
          <p>Most frequent questions and answers</p>
          <Accordion defaultActiveKey="0">
            {faqs.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  <h5>{item.question}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
