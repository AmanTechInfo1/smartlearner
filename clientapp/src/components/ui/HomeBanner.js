import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import carImg from "../../assets/view-3d-car.png";
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

  return (
    <section
      id="paddingId"
      className="relative overflow-hidden  text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Animated background lights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        id="bg-ImgHomeBnner"
        className="absolute top-0 left-0 w-full h-full z-0"></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-full h-full z-0"></motion.div>

      {/* Right side text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center md:text-left mt-10 md:mt-0 w-full md:w-1/2">
        <div className="home-content-D">
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
      </motion.div>

      {/* Left side Car */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        id="noneDisplay"
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex justify-center md:justify-start w-full md:w-1/2">
        <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,#ff000060,transparent_70%)] blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <motion.img
          src={carImg}
          alt="car"
          className="w-[90%] md:w-[110%] drop-shadow-2xl relative z-10"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </motion.div>
      <div className="absolute bottom-8  left-0 w-[120%] h-[200px] bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-inner overflow-hidden z-5 origin-bottom-left -rotate-6 md:-rotate-0 ">
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[45%] left-0 w-full flex justify-between px-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-2 bg-yellow-400 rounded-full opacity-80"></div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
