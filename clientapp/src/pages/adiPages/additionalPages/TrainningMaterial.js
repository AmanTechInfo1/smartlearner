import React, { useEffect } from "react";
import styles from "./css/TrainingMaterials.module.css";
import DrivingInstructorHandbook from "../../../assets/images/tmdimh.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

import gsap from "gsap";

const trainingMaterialsData = [
  {
    title: "National Standard",
    link: "https://www.gov.uk/government/publications/national-standard-for-driver-and-rider-training/national-standard-for-driver-and-rider-training",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHubgfRmLV-tic-TgN31dYaNhdrH8SjNgjpA&s",
    caption:
      "This national standard sets out the skills, knowledge and understanding needed to deliver a programme of driver/rider training.",
  },
  {
    title: "Highway Code",
    link: "https://www.safedrivingforlife.info/shop/official-dvsa-highway-code/",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/The_Highway_Code%2C_cover_to_2022_edition.jpg",
    caption:
      "A book that can help with answering questions in bands one, two, and some of the questions in band three.",
  },
  {
    title: "Practical Teaching Skills for Driving Instructors",
    link: "https://www.safedrivingforlife.info/shop/practical-teaching-skills-driving-instructors/",
    image:
      "https://cdn.koganpage.com/media/public/image/xxlarge_9781398607569.jpg",
    caption:
      "Improve your teaching and communication skills with this guide, recommended by DVSA for ADI exams.",
  },
  {
    title: "Driving the Essential Skills",
    link: "https://www.safedrivingforlife.info/shop/official-dvsa-guide-driving-essential-skills/",
    image:
      "https://the-road-ahead.co.uk/wp-content/uploads/2021/03/dvsa-driving-essential-skills.webp",
    caption:
      "A book that can help with answering questions in bands one, two, and some in band three.",
  },
  {
    title: "Driving Instructor Handbook",
    link: "https://www.safedrivingforlife.info/shop/driving-instructors-guide/",
    image: DrivingInstructorHandbook,
    caption:
      "Covers every aspect of being a driving instructor, including preparation for the ADI exams.",
  },
  {
    title: "Know your Traffic Signs",
    link: "https://www.safedrivingforlife.info/shop/know-your-traffic-signs/",
    image:
      "https://m.media-amazon.com/images/I/71nsk6w2ZWL._AC_UF894,1000_QL80_.jpg",
    caption:
      "This guide explains all road signs anyone using the UK roads is likely to encounter.",
  },
];

export default function TrainningMaterial() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = " Forget the rest,"; // First part before "Driving"
    const secondPart = "learn with the best!"; // Second part after "Driving"

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

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1 ref={textRef}>{splitText()}</h1>
              </div>
              <div className={styles.gGpFrontListP}>
                <p>
                  Unlock your driving potential with Smartlearner Learn from
                  certified instructors in a safe, supportive environment. Start
                  your journey to becoming a confident, skilled driver today!
                </p>
              </div>
              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
                <Link
                  to="/part-1-trainning-material"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <button id={styles.btn}>Back To Portal</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazarddivsectionmanner}>
        <div className={styles.TMcontainer}>
          {trainingMaterialsData.map((material, index) => (
            <div
              className={`${styles.materialCard} ${
                index % 2 === 0 ? styles.Tmeven : styles.Tmodd
              }`}
              key={index}
            >
              <a href={material.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={material.image}
                  alt={material.title}
                  className={styles.materialImage}
                />
              </a>
              <div className={styles.materialDetails}>
                <h3>{material.title}</h3>
                <p>{material.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.bgColorList3322}>
            <ul type="none">
              <li>
                <p>
                  Reading the recommended books for the ADI Part 1 exam is
                  crucial for your success, as they provide comprehensive
                  coverage of the key topics you'll be tested on. These
                  resources are specifically designed to deepen your
                  understanding of road safety, driving laws, and instructional
                  techniques, ensuring you're fully prepared for both the
                  multiple-choice questions and the hazard perception test. The
                  material in these books is often aligned with the official
                  DVSA syllabus, offering insights that go beyond basic
                  knowledge and helping you tackle more challenging questions
                  with confidence. By thoroughly studying these books, you'll be
                  better equipped to master each section of the exam, avoid
                  common pitfalls, and approach the test with the depth of
                  knowledge needed to excel.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* <div className={styles.TMnextPage}>
          <Link to="/band-1-Road-Procedure">
            {" "}
            <button className={styles.TMnextButton}>NEXT PAGE Band - 1</button>
          </Link>
        </div> */}
        </section>
      </div>
    </div>
  );
}
