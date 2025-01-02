// import React from 'react'
import styles from "./css/TheorySupport.module.css";
import poster from "../assets/images/video-poster-img.jpg";

import CallBackForm from "../components/forms/CallBackForm";

import Testemonial from "../components/testimonials/Testemonial";
import TheoryCorousel from "../components/ui/TheorySupportCarousel";
import starImg from "../assets/images/yellowStar.png";
import { Element, scroller } from "react-scroll";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import video from "../assets/videos/Video-1886-041219-B.mp4";

import { IoCallSharp } from "react-icons/io5";
import manualround1 from "../assets/images/theorySupportbanner.png";
import manualround2 from "../assets/images/theorySupportRound1.jpg";
import { gsap } from "gsap";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";

export default function TheorySupport() {
  const { section } = useParams();
  useEffect(() => {
    if (section) {
      scroller.scrollTo(`${section}-section`, {
        duration: 400,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "Theory Support";

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

  return (
    <div className={styles.theorySupportPage}>
      <section className={styles.manualBanner}>
        <div className="opicity"></div>
        <div className="home-banner-flex">
          <div className="home-content-D">
            <h1 ref={textRef}>{splitText()}</h1>

            <div className="home-bannerbnt-sec">
              {" "}
              <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                {" "}
                <button className="button-style">CONTACT US</button>
              </Link>
              <span>
                {" "}
                <IoCallSharp className="gradient-icon" /> 02475092784
              </span>
            </div>
          </div>

          <div className={styles.bannerImg}>
            <img
                    src={manualround1}
                    alt="driving-car"
                    id={styles.homeDrivingImg1}
                  />
                  <img
                    src={manualround2}
                    alt="driving-car"
                    id={styles.homeDrivingImg2}
                  />
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////////////// CONTENT SECTION //////////////////////////////// */}
      <section className={styles.innerTheorySupportSection}>
        {/* /////////////////////////////////  //////////////////*/}
        <section className={styles.dManualSection}>
          <hr />
          <Element name="Theory-package-section">
            <section className={styles.dManualSections} id="automatic-section1">
              {" "}
              <div className={styles.dManualDiv}>
                <h2>Theory Support</h2>
                <span>
                  {" "}
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                  <img src={starImg} alt="starImg" />
                </span>
              </div>
              <div className={styles.manualPList}>
                <p>
                  Need support on passing your theory test? We offer 1-2-1 in
                  house, from the comfort of your house on Zoom, or if you want
                  to touch up you driving skills, get ahead or have fun, we have
                  a driving simulator in office!
                </p>
              </div>
              <section>
                <TheoryCorousel />
              </section>
            </section>

            <hr />
          </Element>
        </section>
        {/* //////////CallBack Form section///////////// */}
        <section className={styles.callbackFormSection}>
          <div className={styles.callbackFormContent}>
            <div className={styles.callbackFormContentPG}>
              <p>
                We launched our 1-2-1 theory sessions in 2019 and since then we
                have helped many people pass who thought they never could. Our
                theory sessions focus on building your knowledge from the ground
                up to ensure you don’t just know the answers but understand
                them. We have had people from all over the country coming to us
                looking for help in preparing for their exam. Currently we have
                a 90% pass rate which is 41.5% higher than the national average!
              </p>
            </div>
            <CallBackForm />
          </div>
          <div className={styles.productTab}>{/* <ProductTab /> */}</div>
        </section>
      </section>

      {/* ///////////////////////////////////////////////////// */}

    
      {/* ///////////////Testimonials////// */}
      <section>
        <StaticTestimonial/>
      </section>

      {/* ///////////////////////Reviews//////// */}
    
    </div>
  );
}
