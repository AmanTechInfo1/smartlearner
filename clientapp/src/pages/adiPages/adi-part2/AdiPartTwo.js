import React from "react";
import styles from "../AdiPartOne.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import adiImg from "../../../assets/images/finished-road-map-1.png";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import smartlearnerLogo from "../../../assets/images/White-Logo-Fixed-1024x174.png"



export default function AdiPartTwo() {
  const videoURLs = [
    "https://www.youtube.com/embed/YVYQNgPfPwI",
    "https://www.youtube.com/embed/jy-UXGIVBXg",
    "https://www.youtube.com/embed/ep0syyvToOk",
    "https://www.youtube.com/embed/u20fhAqd1cI",
    "https://www.youtube.com/embed/WMBziTxVZV4",
    "https://www.youtube.com/embed/zhVgLEA3Mrc",
    "https://www.youtube.com/embed/u8skr_74ip8",
  ];

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <p>
                  Congratulations on passing your part 1 ADI test. It’s now time
                  for part 2 – Professional Driving Test.
                </p>
              </div>

              <div className={styles.heading2}>
                <h2>
                  ADI - Part 2 <br />
                  Training
                </h2>
              </div>
              <div className={styles.btn}>
                <button id={styles.btn}>Contact Us</button>
              </div>
            </div>
            <div className={styles.video}>
              <img src={Lplateimg} alt="LogoImg" />
            </div>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section>
          <img src={adiImg} alt="adiImg" />
        </section>
        {/* //////////////////////////////////////////// */}
        <section className="p-5 d-md-flex gap-3 justify-content-between">
          <div className="w-100 w-md-50">
            <h1 className="h2 font-weight-bold text-danger">
              ADI Part 2 - Driving Ability
            </h1>
            <hr className="border-top border-danger my-2" />
            <p className="text-white">
              You can{" "}
              <a
                href="https://www.gov.uk/book-driving-test"
                className="text-danger text-decoration-underline"
              >
                book your approved driving instructor (ADI) part 2 test
              </a>{" "}
              when you’ve passed your{" "}
              <a
                href="https://www.gov.uk/adi-part-1-test"
                className="text-danger text-decoration-underline"
              >
                ADI part 1 test
              </a>
              . It’s the second of 3 tests you have to pass to qualify as an .
              It’s a test of your driving ability. To pass the test you must be
              able to:
            </p>
            <ul className="list-unstyled my-2 text-white">
              <li className="d-flex align-items-start">
                <span className="mr-2">&bull;</span>
                <span>
                  Drive safely in different road and traffic conditions.
                </span>
              </li>
              <li className="d-flex align-items-start mt-1">
                <span className="mr-2">&bull;</span>
                <span>
                  Show that you know{" "}
                  <a
                    href="https://www.gov.uk/guidance/the-highway-code"
                    className="text-danger text-decoration-underline"
                  >
                    The Highway Code
                  </a>{" "}
                  by the way you drive.
                </span>
              </li>
            </ul>
            <p className="text-white">
              The{" "}
              <a
                href="https://www.gov.uk/guidance/national-standard-for-driving-cars-and-light-vans-category-b"
                className="text-danger text-decoration-underline"
              >
                national standard for driving cars
              </a>{" "}
              tells you everything you must be able to do to pass the test. You
              should only take your test when you can do everything without
              instruction.
            </p>
          </div>
          <div className="w-100 w-md-50 mt-4 mt-md-0">
            <div
              className="embed-responsive embed-responsive-16by9"
              style={{
                maxWidth: "500px",
                width: "100%",
                maxHeight: "400px",
                height: "100%",
              }}
            >
              <iframe
                style={{
                  maxWidth: "500px",
                  width: "100%",
                  maxHeight: "400px",
                  height: "100%",
                }}
                className="embed-responsive-item "
                src="https://www.youtube.com/embed/FHPKcu3X1ro"
                allowFullScreen
                title="ADI Part 2 Video"
              ></iframe>
            </div>
          </div>
        </section>
        {/* ////////////////////////////////////// */}

        <section className={styles.AdiPtwoYoutubeSec}>
          <div className={styles.AdiPartTwoYtV}>
            <section>
              <h2>The DL25C Form and Common Mistakes</h2>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="100%"
                    height="600px"
                    src="https://www.youtube.com/embed/wCvK-mPfuJY"
                    title="YouTube Video"
                  ></iframe>
                </div>
              </div>
            </section>
            <section>
              <h2>ADI Part 2 Mock Test Example</h2>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="740"
                    height="416"
                    src="https://www.youtube.com/embed/5VrL6ZLZp9M"
                    title="ADI Part 2 - Mock Test"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ////////////////////////////////////////// */}
        <div className={styles.AdiParttwoVideo}>
          <h2>Manoeuvres Video Materials</h2>
          <div className={styles.hazardVideosGridContainer}>
            {videoURLs.map((url, index) => (
              <div className={styles.hazardGridItem} key={index}>
                <iframe
                  width="200"
                  height="120"
                  src={url}
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////// */}
        <section style={{ textAlign: "center" }}>
          <h2 style={{ color: "red", fontSize: "2rem" }}>
            Manoeuvres Visual Materials
          </h2>
          <p>
            Includes Emergency Stop, Forward/Reverse Bay Park, Parallel Park,
            and Park on the right. To download Click Here.
          </p>
        </section>
        {/* ////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Car Requirements</h2>
            <p>When you take a test, your car must:</p>
           
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" /> <p>Be taxed.</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be insured for a driving test (check with your insurance
                  company).
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be roadworthy and have a current MOT (if it’s over 3 years
                  old).
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be a saloon, hatchback or estate car in good working condition
                  - you cannot use a convertible.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have no warning lights showing, for example, the airbag
                  warning light.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have no tyre damage and the legal tread depth on each tyre -
                  you cannot have a space-saver spare tyre fitted.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be smoke-free - this means you cannot smoke in it just before
                  or during the test.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be able to reach at least 62 mph and have an mph speedometer.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have 4 wheels and a maximum authorised mass (MAM) of no more
                  than 3,500 kg.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////// */}
        
        <section className={styles.hazardTestWorkListSection}>
        <section className={styles.AdiParttwoDisplayFlex}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Car Requirements</h2>
            <p>When you take a test, your car must:</p>
           
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" /> <p>Be taxed.</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be insured for a driving test (check with your insurance
                  company).
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be roadworthy and have a current MOT (if it’s over 3 years
                  old).
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be a saloon, hatchback or estate car in good working condition
                  - you cannot use a convertible.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have no warning lights showing, for example, the airbag
                  warning light.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have no tyre damage and the legal tread depth on each tyre -
                  you cannot have a space-saver spare tyre fitted.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be smoke-free - this means you cannot smoke in it just before
                  or during the test.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be able to reach at least 62 mph and have an mph speedometer.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have 4 wheels and a maximum authorised mass (MAM) of no more
                  than 3,500 kg.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Car Requirements</h2>
            <p>When you take a test, your car must:</p>
           
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" /> <p>Be taxed.</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be insured for a driving test (check with your insurance
                  company).
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be roadworthy and have a current MOT (if it’s over 3 years
                  old).
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be a saloon, hatchback or estate car in good working condition
                  - you cannot use a convertible.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have no warning lights showing, for example, the airbag
                  warning light.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have no tyre damage and the legal tread depth on each tyre -
                  you cannot have a space-saver spare tyre fitted.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be smoke-free - this means you cannot smoke in it just before
                  or during the test.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be able to reach at least 62 mph and have an mph speedometer.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Have 4 wheels and a maximum authorised mass (MAM) of no more
                  than 3,500 kg.
                </p>
              </li>
            </ul>
          </div>
          </section>
        </section>
       {/* ////////////////////////////////////////////////// */}
       <section style={{textAlign:'center'}}>
        <h2 style={{color:"red",fontSize:'3rem'}}>Test - Part 2 - Summary</h2>
       </section>
      </div>
      <section className={styles.adiPortalFooterSection}>
        <div className={styles.adiPortalFooterInnerContainer}>
          <img src={smartlearnerLogo} alt="smartlearnerLogo" />
          <div className={styles.adiFooterContactInfo}>
            {" "}
            <a href="tel:+1234567890">
              <FaPhone id={styles.adiFaIcons}/> +1 (234) 567-890
            </a><br/>
            <a href="mailto:example@example.com">
              <FaEnvelope id={styles.adiFaIcons}/> example@example.com
            </a>
          </div>
          <div className={styles.adiFooterAddressInfo}>
            <FaLocationDot id={styles.adiFaIcons}/>
            <p>4 Wheel Wright Building, Hen Lane, Coventry, CV6 4LB</p>
          </div>
          <div className={styles.adiSocialIcons}>
            <a href="https://www.facebook.com">
              <FaFacebook id={styles.adiSocialFaIcons}/>
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter id={styles.adiSocialFaIcons}/>
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram id={styles.adiSocialFaIcons}/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
