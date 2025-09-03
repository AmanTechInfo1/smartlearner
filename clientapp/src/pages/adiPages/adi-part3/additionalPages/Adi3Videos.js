import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import backgroundImage from "../../../../assets/images/adi3videos.jpg";

export default function Adi3Videos() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Adi part 3 Videos"; // First part before "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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
        color: "#fd9235", // Change text color to red
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
        color: "#ff54d7", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  const videoURLs = [
    "https://www.youtube.com/embed/jC-WfuMn3lg",
    "https://www.youtube.com/embed/KAp_8tY8XlU",
    "https://www.youtube.com/embed/Gp67bz0h6CA",
    "https://www.youtube.com/embed/OqKph2W6NnU",
    "https://www.youtube.com/embed/bMquHCIV0VU",
    "https://www.youtube.com/embed/o1jVoJudh78",
    "https://www.youtube.com/embed/XOsU9zcT3Xo",
    "https://www.youtube.com/embed/xe5_s5RIi0k",
    "https://www.youtube.com/embed/AT2tDuTinHQ",
    "https://www.youtube.com/embed/ipWmNV7Ag2A",
    "https://www.youtube.com/embed/ef3H8_j23x4",
    "https://www.youtube.com/embed/MJtJE4KbsAo",
    "https://www.youtube.com/embed/Z50xcQf5sDs",
    "https://www.youtube.com/embed/s7m10uQXmfA",
    "https://www.youtube.com/embed/a6VzbbsI2SU",
    "https://www.youtube.com/embed/posgHcCZ2_o",
    "https://www.youtube.com/embed/8x81pNap9VY",
    "https://www.youtube.com/embed/E4lwWVDCeX4",
    "https://www.youtube.com/embed/_V-J0lKUiOI",
    "https://www.youtube.com/embed/jblrjOWx3X4",
    "https://www.youtube.com/embed/XM-3KcWW4NQ",
    "https://www.youtube.com/embed/hnlpqDPSONQ",
    "https://www.youtube.com/embed/MPwMHzIq8gY",
    "https://www.youtube.com/embed/ZcGHOd0dlPQ",
    "https://www.youtube.com/embed/sJYbPlMSMbg",
    "https://www.youtube.com/embed/4LLujhoI308",
    "https://www.youtube.com/embed/4pp9okPgHs8",
    "https://www.youtube.com/embed/VZBFmwv6qYk",
    "https://www.youtube.com/embed/GsuG9Y0otX8",
    "https://www.youtube.com/embed/tSfVRIXd3OA",
    "https://www.youtube.com/embed/7baN8EobcAw",
    "https://www.youtube.com/embed/Pa-zR6toI2E",
    "https://www.youtube.com/embed/hz86gIZqmqc",
    "https://www.youtube.com/embed/uXT2-5ymAjA",
  ];

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section
        className={styles.AdiModuleOneheader}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      <h2 className={styles.videotitle2}>Watch Our Video</h2>

      <div className={styles.videoContainer2}>
        {videoURLs.map((url, index) => (
          <div className={styles.videodesign2}>
            <iframe
              width="100%"
              height="270px"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
