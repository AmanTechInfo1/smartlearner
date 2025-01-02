import React, { useState } from "react";
import styles from "./BookingSectio.module.css";
import Accordion from "react-bootstrap/Accordion";
import manual from "./manual1.jpg";
import automatic from "./automatic1.jpg";
import manual2 from "./manual2.jpg";
import automatic2 from "./automatic2.jpg";
import manual3 from "./manual3.jpg";
import automatic3 from "./automatic3.jpg";
import manual4 from "./manual4.jpg";
import automatic4 from "./automatic4.jpg";
import theoryImg1 from "../../../assets/images/theory1.jpg"
import theoryImg2 from "../../../assets/images/theorySupportRound1.jpg"
import theoryImg3 from "../../../assets/images/theory-Img-banner.png"
import passplus1 from "../../../pages/Transmission/passplusbanner.png"
import passplus2 from "../../../pages/Transmission/passplusbanner2.jpg"
import passplus3 from "../../../pages/Transmission/passplusround.jpg"
import passplus4 from "../../../pages/Transmission/passplusround2.jpg"

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function BookingSection() {
  const [transmissionType, setTransmissionType] = useState("manual");

  // Function to update the transmission type based on the active Accordion item
  const handleAccordionChange = (eventKey) => {
    switch (eventKey) {
      case "0":
        setTransmissionType("manual");
        break;
      case "1":
        setTransmissionType("automatic");
        break;
      case "2":
        setTransmissionType("theory");
        break;
      case "3":
        setTransmissionType("passplus");
        break;
        case "4":
          setTransmissionType("intensive");
          break;
      default:
        setTransmissionType("manual"); // Handle other cases if needed
    }
  };

  // Render images based on the selected transmission type
  const renderImages = () => {
    if (transmissionType === "manual") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={manual} alt="Manual Transmission 1" id={styles.imges1} />
            <img src={manual2} alt="Manual Transmission 2" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={manual3} alt="Manual Transmission 3" id={styles.imges3} />
            <img src={manual4} alt="Manual Transmission 4" id={styles.imges4} />
          </div>
        </>
      );
    } else if (transmissionType === "automatic") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img
              src={automatic}
              alt="Automatic Transmission 1"
              id={styles.imges1}
            />
            <img
              src={automatic2}
              alt="Automatic Transmission 2"
              id={styles.imges2}
            />
          </div>
          <div className={styles.imgesdiv2}>
            <img
              src={automatic3}
              alt="Automatic Transmission 3"
              id={styles.imges3}
            />
            <img
              src={automatic4}
              alt="Automatic Transmission 4"
              id={styles.imges4}
            />
          </div>
        </>
      );
    } else if (transmissionType === "theory") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={theoryImg1} alt="Theory 1" id={styles.imges1} />
            <img src={theoryImg2} alt="Theory 2" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={theoryImg3} alt="Theory 3" id={styles.imges3} />
            <img src={automatic} alt="Theory 4" id={styles.imges4} />
          </div>
        </>
      );
    } else if (transmissionType === "passplus") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={passplus1} alt="Pass Plus 1" id={styles.imges1} />
            <img src={passplus2} alt="Pass Plus 2" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={passplus3} alt="Pass Plus 3" id={styles.imges3} />
            <img src={manual4} alt="Pass Plus 4" id={styles.imges4} />
          </div>
        </>
      );
    }
    else if (transmissionType === "intensive") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={automatic3} alt="Intensive" id={styles.imges1} />
            <img src={theoryImg2} alt="Intensive" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={passplus2} alt="Intensive" id={styles.imges3} />
            <img src={passplus4} alt="Intensive" id={styles.imges4} />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div>
      <div className={styles.BookingSectionPage}>
        <div className={styles.bookingheading}>
          <h2>Our Courses</h2> <p>Start Your Journey with us Today!</p>
        </div>
        <div className={styles.BookingSectionContainer}>
          <section className={styles.BookingSectionImgs}>
            {renderImages()}
          </section>
          <section className={styles.bookingSectionAccordaion}>
            <Accordion defaultActiveKey="0" onSelect={handleAccordionChange}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div>
                    <h3
                      style={{
                        color: "rgb(0, 5, 162)",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Manual
                    </h3>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6c757d",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Discover the thrill of hands-on control with our manual
                      driving lessons.
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body>
                  From mastering the clutch to shifting gears seamlessly, our
                  expert instructors will guide you through the art of manual
                  driving, empowering you with the skills and confidence to
                  navigate any road with finesse and precision.
                  <br />
                  <Link to="/manual">
                    <Button variant="outline-primary">
                      Explore more{" "}
                      <MdKeyboardDoubleArrowRight
                        className={styles.gradientIcon}
                      />
                    </Button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div>
                    <h3
                      style={{
                        color: "rgb(0, 5, 162)",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Automatic
                    </h3>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6c757d",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Experience the ease and convenience of automatic driving
                      with our comprehensive lessons.
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Our skilled instructors will help you navigate the road
                  smoothly, focusing on essential techniques and safe driving
                  practices. Whether you’re a beginner or looking to refine your
                  skills, we’ll empower you to drive confidently in any
                  situation.
                  <br />
                  <Link to="/automatic-transmisson">
                    <Button variant="outline-primary">
                      Explore more{" "}
                      <MdKeyboardDoubleArrowRight
                        className={styles.gradientIcon}
                      />
                    </Button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div>
                    <h3
                      style={{
                        color: "rgb(0, 5, 162)",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      {" "}
                      Theory
                    </h3>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6c757d",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Need support on passing your theory test?
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  We offer 1-2-1 in house, from the comfort of your house on
                  Zoom, or if you want to touch up you driving skills, get ahead
                  or have fun, we have a driving simulator in office!
                  <br />
                  <Link to="/Theory-Support/Theory-package">
                    <Button variant="outline-primary">
                      Explore more{" "}
                      <MdKeyboardDoubleArrowRight
                        className={styles.gradientIcon}
                      />
                    </Button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div>
                    <h3
                      style={{
                        color: "rgb(0, 5, 162)",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Pass Plus
                    </h3>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6c757d",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Designed specifically for newly qualified drivers.
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Pass Plus is an advanced driving course that helps you
                  maintain and improve the skills you've learned while gaining
                  valuable experience on the road. Whether you're looking to
                  build confidence in new driving conditions, or simply want to
                  become a safer, more skilled driver, Pass Plus is the ideal
                  next step.
                  <br />
                  <Link to="/pass-plus">
                    <Button variant="outline-primary">
                      Explore more{" "}
                      <MdKeyboardDoubleArrowRight
                        className={styles.gradientIcon}
                      />
                    </Button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <div>
                    <h3
                      style={{
                        color: "rgb(0, 5, 162)",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Intensive
                    </h3>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6c757d",
                        fontFamily:
                          "'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                     Designed for those eager to learn quickly and efficiently
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  our immersive programmes offer focused instruction and
                  hands-on experience to help you become a confident driver in
                  no time. Get behind the wheel and fast-track your path to
                  driving independence with our intensive driving courses.
                  <br />
                  <Link to="/intensive">
                    <Button variant="outline-primary">
                      Explore more{" "}
                      <MdKeyboardDoubleArrowRight
                        className={styles.gradientIcon}
                      />
                    </Button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}
