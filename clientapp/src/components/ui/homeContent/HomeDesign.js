// import React from "react";
import React from "react";
import "./HomeDesign.css";
import userIndentification from "../../../assets/images/userIndentification.png";
import homeUserHand from "../../../assets/images/userHandImg.png";
import LplateImg from "../../../assets/images/L-Plate.jpg";

import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import drivingbannerImages1 from "../../../assets/images/hover1.png";
import drivingbannerImages2 from "../../../assets/images/hover2.png";

import drivingbannerImages3 from "../../../assets/images/hover3.png";
import gsap from "gsap";

export default function HomeDesign() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Start your Driving"; // First part before "Driving"
    const secondPart = " Journey"; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

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
    <div>
      <div>
        <section className="homecontent-Sec">
          <div className="opicity"></div>
          <div className="home-banner-flex">
            <div className="home-content-D">
              <h1 ref={textRef}>{splitText()}</h1>
              <p>
                Starting your driving journey is an exciting step toward
                independence. Whether you're a teen or an adult, learning to
                drive opens up new opportunities. With the right guidance and
                practice, you’ll build the skills and confidence needed to
                become a safe and responsible driver. Stay focused, and enjoy
                the road ahead!
              </p>
              <div className="home-bannerbnt-sec">
                {" "}
                <button className="button-style">EXPLORE NOW</button>
                <span>
                  {" "}
                  <IoCallSharp className="gradient-icon" /> 02475092784
                </span>
              </div>
            </div>

            <div className="banner-img">
              <a href="https://www.gov.uk/apply-first-provisional-driving-licence" style={{textDecoration:'none'}}>
                <img
                  src={drivingbannerImages3}
                  alt="driving-car"
                  id="home-drivingImg-1"
                />
              </a>
              <Link to="/Theory-Support" style={{textDecoration:'none'}}>
                <img
                  src={drivingbannerImages2}
                  alt="driving-car"
                  id="home-drivingImg-2"
                />
              </Link>
              <Link to="/Driving-Lessons" style={{textDecoration:'none'}}>
                <img
                  src={drivingbannerImages1}
                  alt="driving-car"
                  id="home-drivingImg-3"
                />
              </Link>
            </div>
          </div>

          {/* ///////////////////////////// */}
        </section>

        {/* ////////////////////////////////////////////////// */}
        {/* <div className="designMain">
          <div className="designMainContent">
            <div className="dGrid-content">
              <div className="flex-Content1">
                <section className="single-map-block card-1">
                  <div className="img-area">
                    <div className="number">1</div>
                    <img
                      src={userIndentification}
                      alt=""
                      width="300"
                      height="298"
                    />
                  </div>
                  <div className="content-area">
                    <h4>Apply for your provisional licence</h4>
                    <p>
                      A simple guide to getting your first provisional driving
                      licence.
                    </p>
                    <a href="https://www.gov.uk/apply-first-provisional-driving-licence">
                      {" "}
                      <button className="hBookNowBtn">Apply Now</button>
                    </a>
                  </div>
                </section>
                <div className="flexdivs"></div>
              </div>

              <div className="flex-Content2">
                <section className="single-map-block card-4">
                  <div className="img-area">
                    <div className="number">2</div>
                    <img src={homeUserHand} alt="" width="230" height="298" />
                  </div>
                  <div className="content-area">
                    <h4> Pass your Theory Test with Us </h4>
                    <p>Pass your Theory Test with SmartLearner</p>
                    <Link to="/Theory-Support">
                      <button className="hBookNowBtn">Visit Now</button>
                    </Link>
                  </div>
                </section>
                <div className="flexdivs"></div>
              </div>

              <div className="flex-Content3">
                <section className="single-map-block card-3">
                  <div className="img-area">
                    <div className="number">3</div>
                    <img
                      src={LplateImg}
                      alt="LplateImg"
                      width="200"
                      height="298"
                    />
                  </div>
                  <div className="content-area">
                    <h4>Book Lessons With us</h4>
                    <p>Book Your lessons with Smartlearner</p>
                    <Link to="/Driving-Lessons">
                      <button className="hBookNowBtn">Book Now</button>
                    </Link>
                  </div>
                </section>
                <div className="flexdivs"></div>
              </div>
            </div>
          </div>
        </div> */}

        
      </div>
    </div>
  );
}
