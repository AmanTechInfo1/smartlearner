import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import carImage from "../../assets/view-3d-car.png";
import gsap from "gsap";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function HomeBanner() {
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

  const backgroundStyle = {
    background:
      "radial-gradient(circle, rgba(255, 0, 76, 0.42), rgba(0, 0, 0, 1))",
    filter: "blur(10px)", // Blur effect to match the image's look
    width: "100vw",
    borderRadius: "50%",
    marginTop: "4rem",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1, // Ensures that this gradient stays in the background
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    color: "white",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
    zIndex: 1, // Ensures that the text appears above the background
  };

  return (
    <section
      style={{
        maxWidth: "1940px",
        width: "100%",
        height: "700px",
      }}
      className="relative  overflow-hidden rounded-2xl shadow-2xl mx-auto  my-12 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
      {/* ==== LEFT CONTENT ==== */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 z-20 space-y-6">
        {/* Logo */}

        <div
          className="home-content-D"
          style={{ maxWidth: "90%", width: "100%", marginTop: "1rem" }}>
          <h1 ref={textRef}>{splitText()}</h1>
          <p>
            Starting your driving journey is an exciting step toward
            independence. Whether you're a teen or an adult, learning to drive
            opens up new opportunities. With the right guidance and practice,
            you’ll build the skills and confidence needed to become a safe and
            responsible driver. Stay focused, and enjoy the road ahead!
          </p>
          <div className="home-bannerbnt-sec">
            <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
              <button className="button-style">Contact Us</button>
            </Link>
            <span>
              {" "}
              <a
                href="tel:+4402475092784"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                <IoCallSharp className="gradient-icon" /> 02475092784
              </a>
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all">
            Book a Test Drive <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* ==== RIGHT IMAGE ==== */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full md:w-1/2 mt-10 md:mt-0">
        {/* Red Overlay Shape */}
        <div
          style={backgroundStyle}
          className="absolute top-0 right-0 w-[97%] z-0 overflow-hidden"></div>

        {/* Image */}
        <img
          src={carImage}
          alt="Car"
          className="relative z-10 rounded-2xl w-full object-cover"
        />
      </motion.div>

      {/* Soft Shadow at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/10 to-transparent"></div>
    </section>
  );
}
