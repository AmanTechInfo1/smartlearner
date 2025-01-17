// import React from 'react'
import styles from "./GoingGreen.module.css";
import treeImg from "../../assets/images/trees-img.png";
import goingGreenImg1 from "../../assets/images/going-green-img.jpg";
import goingGreenImg2 from "../../assets/images/going-green-img2.jpg";
import goingGreenImg3 from "../../assets/images/going-green-img3.jpg";
import goingGreenImg4 from "../../assets/images/going-green-img4.jpg";
import goingGreenImg5 from "../../assets/images/going-green-img5.jpg";
import goingGreenImg6 from "../../assets/images/going-green-img6.jpg";

import treeIcon from "../../assets/images/tree-Icon.png";
import handPlant from "../../assets/images/hand-plant.png";
import flower from "../../assets/images/flower-img.png";
import { IoCall } from "react-icons/io5";
import { HiMailOpen } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function GoingGreenProject() {
  const [activeSlide, setActiveSlide] = useState(0);

  const [animatedValue1, setAnimatedValue1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 135 ? 135 : newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.animation = `${styles.grow} 1s forwards infinite alternate`;
        bar.style.height = `${bar.dataset.value}px`;
      }, index * 500); // Delay each bar's animation
    });
  }, []);

  const data = [80, 120, 160, 200, 240];

  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "  GOING GREEN ";
    const secondPart = "PROJECT"; // Second part after "Driving"

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
    const letters = text2Ref.current.querySelectorAll("span");

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
        color: "rgb(2, 111, 51)", // Change text color to red
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
        color: "rgb(0, 167, 139)", // Reset color to black
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
        color: "rgb(150, 142, 0)", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  // /////////////////////////////////////////////
  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "Prevention is better then cure";
    // Second part after "Driving"

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
        color: "#00bb42", // Change text color to red
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
    <div className={styles.goingGreenProject}>
      <div>
        <div className={styles.csrPageFront}>
          <div className="opicity"></div>

          <section className={styles.gGPFrontSection}>
            <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>

            <section className={styles.gGpFrontSectionD}>
              <div className={styles.gGpFrontListP}>
                <p>
                  SmartLearner Driving School champions environmental
                  sustainability.
                </p>
                <p>
                  Through our Going Green Project, we inspire eco-conscious
                  driving and advocate for environmental preservation through
                  tree planting and education.
                </p>
                <p>
                  Committed to reducing our carbon footprint, we continuously
                  strive to become a sustainable and eco-friendly
                  company."Prevention is better than cure."
                </p>
              </div>
            </section>
          </section>
        </div>

        <div className={styles.mainGoingGreenProject}>
          {/* ////////////////////////////////////////////// */}
          <section className={styles.secondrySection}>
            <div className={styles.secondryHeading}>
              <h2 ref={textRef}>"{splitText()}"</h2>
            </div>
            <div>
              <Swiper
                slidesPerView={4} // Display 4 slides at a time
                spaceBetween={30} // Space between slides
                loop={true} // Make it loop infinitely
                autoplay={{
                  delay: 1000, // Time between slide transitions (set to 3 seconds for smoother experience)
                  disableOnInteraction: false, // Don't stop autoplay when interacting
                }}
                centeredSlides={true} // Keep the active slide centered
                pagination={{
                  type: "fraction", // Display slide number like '1/5'
                }}
                navigation={true} // Add navigation buttons (next/prev)
                speed={3000} // Transition speed in ms
                modules={[Pagination, Navigation, Autoplay]} // Enable Pagination, Navigation, and Autoplay modules
                className="mySwiper"
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                style={{
                  padding: "2rem 1rem",
                  maxWidth: "1640px",
                  margin: "0px auto",
                  width: "100%",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1, // 1 slide at a time for small screens
                    spaceBetween: 10, // Less space on small screens
                  },
                  768: {
                    slidesPerView: 2, // 2 slides at a time for medium screens
                    spaceBetween: 20, // Slightly more space
                  },
                  1024: {
                    slidesPerView: 3, // 3 slides for large screens
                    spaceBetween: 30,
                  },
                  1440: {
                    slidesPerView: 4, // 4 slides for extra large screens
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <img src={goingGreenImg1} alt="goingGreenImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={goingGreenImg2} alt="goingGreenImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={goingGreenImg3} alt="goingGreenImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={goingGreenImg4} alt="goingGreenImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={goingGreenImg5} alt="goingGreenImg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={goingGreenImg6} alt="goingGreenImg" />
                </SwiperSlide>
                {/* Add more slides as needed */}
              </Swiper>
            </div>
          </section>
          {/* ////////////////////////////////////////////// */}
          <section className={styles.prosConsSection}>
            <div className={styles.ourProsConsdiv}>
              <div className={styles.ourProsConsSection}>
                <h2>OUR ETHOS</h2>
                <p>
                  As a driving school, we at SmartLearner acknowledge our role
                  in CO2 emissions and take responsibility for reducing our
                  environmental impact.{" "}
                </p>
                <p>
                  We believe in environmental restoration and the importance of
                  green spaces, advocating that even small actions can have a
                  big positive impact on our community and our environment.
                </p>
              </div>
              <hr />
              <div
                className={styles.ourProsConsSection}
                id={styles.ourProsConsSection}
              >
                <h2>OUR PURPOSE</h2>
                <p>
                  SmartLearner estimates that each of our 60 instructors
                  releases about 10 tons of CO2e yearly, totaling 600 tons
                  collectively.
                </p>
                <p>
                  To offset this, we'll plant 10 trees per instructor, as each
                  tree absorbs 1 tonne of CO2e in its lifetime. Join our Going
                  Green Project to help create a better future for our
                  community.
                </p>
              </div>
            </div>
            <div className={styles.chartBarImgSec}>
              <h2>
                GREEN PROJECT{" "}
                <span style={{ color: "rgb(6, 240, 154)" }}>PROGRESS</span>
              </h2>
              <div className={styles.chartContainer}>
                {data.map((value, index) => (
                  <div
                    key={index}
                    ref={(el) => (barsRef.current[index] = el)}
                    className={styles.bar}
                    style={{ height: `${value}px` }}
                    data-value={value}
                  />
                ))}
              </div>
            </div>
          </section>
          {/* /////////////////////////////////////////// */}

          <section className={styles.treePlantationSection}>
            <div className={styles.treePlantationDiv}>
              <h2>So far we have planted a total of...</h2>
            </div>
            <div className={styles.treeIconDiv}>
              <img src={treeIcon} alt="treeIcon" />
            </div>
            <section className={styles.treeIconImgSection}>
              <div className={styles.plantImgSection}>
                <span id={styles.handPlant1}>
                  <img id={styles.handPlant} src={handPlant} alt="handPlant" />
                </span>
              </div>
              <div className={styles.headingtreeNo}>
                <h2>{animatedValue1}+</h2>
              </div>
              <div className={styles.plantImgSection}>
                <span className={styles.flowerPlant}>
                  <img id={styles.flowerPlant} src={flower} alt="flower" />
                </span>
              </div>
            </section>
            <section className={styles.ggPListSection}>
              <div className={styles.ggOlSection}>
                <ul typeo="none">
                  <li>
                    <span>3</span>
                    <p>Trees in Stretton Academy</p>
                  </li>
                  <li>
                    <span>20</span>
                    <p>Wild cherry trees in President Kennedy school</p>
                  </li>
                  <li>
                    <span>40</span>
                    <p>Trees in Everdon estates</p>
                  </li>

                  <li>
                    <span>25</span>
                    <p>Brown beech trees for Park Gate Primary</p>
                  </li>
                  <li>
                    <span>1</span>
                    <p>
                      Established living willow dome structure for Park Gate
                    </p>
                  </li>
                  <li>
                    <span>7</span>
                    <p>Fruit apple trees for President Kennedy</p>
                  </li>
                  <li>
                    <span>20</span>
                    <p>Fruit Bushes for President Kennedy</p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          <section className={styles.callUsSectiongg}>
            <div className={styles.getInvolved}>
              <h2>
                GET <span style={{ color: "rgb(6, 240, 150)" }}>INVOLVED</span>
              </h2>
              <p>
                Do you have land, a business or want to support us in our Green
                mission?
              </p>
            </div>
            {/* /////////////// calling details ////////////////// */}

            <div className={styles.drivingLessonsCd}>
              <section className={styles.drivinglCall}>
                <a href="tel:+4402475092784" className={styles.drivinglCall}>
                  <IoCall id={styles.IconsS} />
                  <p>02475 092 784</p>
                </a>
              </section>
              <section>
                <a href="mailto:admin@smartlearner.com">
                  <HiMailOpen id={styles.IconsS} />
                  <p>Admin@Smartlearner.com</p>
                </a>
              </section>
            </div>
          </section>

          <div className={styles.socialFollowIcons}>
            <a
              href="https://www.facebook.com/smartlearnerdrivingschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook id={styles.FollowIcons} />
            </a>
            <a
              href="https://www.instagram.com/smartlearnerdrivingschool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram id={styles.FollowIcons} />
            </a>
            <a
              href="https://www.snapchat.com/add/smartlearner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSnapchat id={styles.FollowIcons} />
            </a>
            <a
              href="https://twitter.com/smartlearner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter id={styles.FollowIcons} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCWqlTyiFfPNqgKeffuo68rghttp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube id={styles.FollowIcons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
