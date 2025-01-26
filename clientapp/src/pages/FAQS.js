import React from "react";
import styles from "./css/Faqs.module.css";
import Accordion from "react-bootstrap/Accordion";
import { faqs } from "../assets/data/Faqs";

import { FaStar } from "react-icons/fa";
// import poster from "../assets/images/video-poster-img.jpg";
// import ProductTab from "./shop/ProductTab";
import CallBackForm from "../components/forms/CallBackForm";
import chooseUsImg from "../assets/images/choose-img.jpg";
import DrivenForm from "../components/forms/DrivenForm";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

import Review from "../components/views/Review";
import Testemonial from "../components/testimonials/Testemonial";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";
export default function FAQS() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const text = "FAQS";
    return text.split("").map((char, index) => <span key={index}>{char}</span>);
  };

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll("span");

      // GSAP Timeline for the text animation
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.from(letters, {
        opacity: 0.6,
        y: 100,
        ease: "bounce.out", // Start from below
        stagger: 0.1, // Stagger the animation for each letter
        rotationX: 90, // Initial rotation effect
        transformOrigin: "bottom center", // Center for rotation
        scale: 0.5,
        // Start small
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
    }
  }, []);

  return (
    <>
      <section
        style={{
          backgroundColor: "black",
          color: "white",
          paddingBottom: "4rem",
        }}>
        <section className={styles.theorySupportHeadingContent}>
          <div className={styles.TSfirstContent}>
            <div className="opicity"></div>
            <div className={styles.ecsheder}>
              {" "}
              <h2 ref={textRef}>{splitText()}</h2>
              <div className={styles.csrPagesLd}>
                <p>
                  Welcome to our FAQ page! Here, you'll find answers to the most
                  common questions about our driving school. Whether you're a
                  first-time driver or looking to brush up on your skills, we’re
                  here to help.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.faqsAccordion}>
          <section className={styles.faqsAccordionIndex}>
            <h2>FAQS</h2>
            <Accordion defaultActiveKey="0">
              {faqs.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>
                    <h5>{item.question}</h5>
                  </Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </section>
        </section>
        <section>
          {" "}
          {/* //////////CallBack Form section///////////// */}
          {/* <section className={styles.callbackFormSection}>
            <div className={styles.callbackFormContent}>
              <div className={styles.callbackFormContentPG}>
                <p>
                  We launched our 1-2-1 theory sessions in 2019 and since then
                  we have helped many people pass who thought they never could.
                  Our theory sessions focus on building your knowledge from the
                  ground up to ensure you don’t just know the answers but
                  understand them. We have had people from all over the country
                  coming to us looking for help in preparing for their exam.
                  Currently we have a 90% pass rate which is 41.5% higher than
                  the national average!
                </p>
              </div>
              <CallBackForm />
            </div>
           
          </section> */}
        </section>
        {/* /////////////////////////////////////////////// */}

        {/* ////////////////////////// */}
        <section className={styles.whyChooseshortSection}>
          <div className={styles.whyChooseshortSectionContent}>
            <div className={styles.whyChooseshortSectionImage}>
              <img src={chooseUsImg} alt="Image" />
            </div>
            <div className={styles.whyChooseshortSectionText}>
              <h2>
                WHY CHOOSE <span>SMARTLEARNER ?</span>
              </h2>
              <p>
                We are the highest-rated and fastest-growing independent driving
                school in the West Midlands. We offer everything you could ever
                need to get yourself on the road. We take into consideration
                your times requirements, lesson location and anything else you
                require then choose the perfect instructor for you. We even
                offer 1-2-1 theory and simulator training with a tutor for those
                who feel need additional support to pass their exams. So, forget
                the rest and learn with the best! Call us today on{" "}
                <a href="">
                  {" "}
                  <span>0800 118 2001</span>{" "}
                </a>
                to get yourself booked in.
              </p>
              <div className={styles.whyChooseshortSectionButtons}>
                <button className={styles.whyChooseshortSectionReadmore}>
                  Read More
                </button>
                <button className={styles.whyChooseshortSectionCallus}>
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* //////////////////////////////// */}
        {/* <section className={styles.drivenBefore}>
          <h2>Search for driving lessons in your area</h2>
          <DrivenForm />
        </section> */}
        {/* ////////////////////////////////// */}
        <section className={styles.nextFormSection}>
          <div className={styles.nextFormContainer}>
            <div className={styles.nextFormDetailsContainer}>
              <div className={styles.nextFormDetailsContainerHeading}>
                {" "}
                <h3>REQUEST FOR A CALLBACK</h3>
                <span>
                  <FaArrowRight id={styles.rightArow} />
                </span>
              </div>

              <ul type="none">
                <li>
                  {" "}
                  <FaStar id={styles.redStar} /> Highest-rated Independent
                  driving school in the West Midlands
                </li>
                <li>
                  {" "}
                  <FaStar id={styles.redStar} /> Manual and Automatic tuition
                </li>
                <li>
                  {" "}
                  <FaStar id={styles.redStar} /> Over 40 instructors both male
                  and female
                </li>
              </ul>
            </div>
            <div className={styles.nextFormContainer}>
              <CallBackForm />
            </div>
          </div>
        </section>
        {/* ///////////////Testimonials////// */}
        {/* <section>
          <StaticTestimonial />
        </section> */}

        {/* ///////////////////////Reviews//////// */}
        <section>
          <Review />
        </section>
        {/* //////////////faqs//////////////////////// */}
      </section>
    </>
  );
}
