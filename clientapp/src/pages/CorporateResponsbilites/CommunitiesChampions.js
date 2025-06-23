// import React from 'react'
import styles from "./Communities.module.css";
import React, { useState } from "react";
import handShaking from "../../assets/images/hand-shakes.png";
import communityChempionImg1 from "../../assets/images/community-champions/CChampion-1.jpg";
import communityChempionImg2 from "../../assets/images/community-champions/CChampion-2.jpg";
import communityChempionImg3 from "../../assets/images/community-champions/CChampion-3.jpg";
import communityChempionImg4 from "../../assets/images/community-champions/CChampion-4.jpg";
import communityChempionImg5 from "../../assets/images/community-champions/CChampion-5.jpg";
import communityChempionImg6 from "../../assets/images/community-champions/CChampion-6.jpg";
import communityChempionImg7 from "../../assets/images/community-champions/CChampion-7.jpg";
import communityChempionImg8 from "../../assets/images/community-champions/CChampion-8.jpg";
import communityChempionImg9 from "../../assets/images/community-champions/CChampion-9.jpg";
import communityChempionImg10 from "../../assets/images/community-champions/CChampion-10.jpg";
import communityChempionImg11 from "../../assets/images/community-champions/CChampion-11.jpg";
import communityChempionImg12 from "../../assets/images/community-champions/CChampion-12.jpg";
import communityChempionImg13 from "../../assets/images/community-champions/CChampion-13.jpg";
import communityChempionImg14 from "../../assets/images/community-champions/CChampion-14.jpg";
import communityChempionImg15 from "../../assets/images/community-champions/CChampion-15.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet-async";

export default function CommunitiesChampions() {
  const [activeSlide, setActiveSlide] = useState(0);
  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "COMMUNITY CHAMPIONS";
    // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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
        color: "rgb(255, 24, 121)", // Change text color to red
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
        color: "rgb(0, 235, 168)", // Reset color to black
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
        color: "rgb(196, 199, 0)", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);
  ///////////////////////////////////////////////////////
  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = " SUPPORTING OUR CITY";
    const secondPart = "AND COMMUNITY"; // Second part after "Driving"

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
        color: "rgb(1, 231, 204)", // Change text color to red
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
        color: "rgb(119, 3, 154)", // Reset color to black
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
        color: "rgb(154, 3, 101)", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  return (
    <div className={styles.OurOfficeGreenEfforts}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Communities Champions</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/Communities-Champions"
        />
        <meta
          name="description"
          content="Discover how SmartLearner supports local heroes and drives positive change through our Communities Champions initiative. Empowering individuals and making a difference together."
        />
      </Helmet>

      <div className={styles.eCsfront}>
        <div className={styles.csrPageFront}>
          <div className="opicity"></div>
          <section className={styles.eCSfrontSection}>
            <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>

            <div className={styles.gGpFrontListP}>
              <p>"The local school for local people"</p>
              <p>
                Winners of Intelligent Instructors Awards 2023 & 2024 'Community
                Champion Of The Year'
              </p>
            </div>
          </section>
        </div>
        <section className={styles.cCSecondrySection}>
          <section id={styles.cCSecondrySection}>
            <div className={styles.cCSecondryHeadin}>
              <img src={handShaking} alt="handShake-Icon" />
              <h2 ref={textRef}>{splitText()}</h2>
            </div>

            <section className={styles.cCLists}>
              <p>
                <span>315 EASTER EGG Campaign:</span> We raised 500+ Easter Eggs
                support of Easter Eggs for Zoe's Place and Coventry and
                Warwickshire University Hospital.
              </p>
              <p>
                <span>SEND YOUR LOVE Campaign:</span> Donated essential food and
                items for vulnerable families through our local food bank. In
                partnership with Coventry City Council.
              </p>
              <p>
                <span>BIKEATHON Project:</span> Raised £300+ for speed of sight
                charity, as well as worked with NHS to provide free diabetes
                health checks.
              </p>
              <p>
                <span>CYCLE RECYCLER Competition:</span> Advocating green modes
                of transport and sustainability, we launched a competition for
                individuals to win 2 recycled bikes.
              </p>
            </section>
            <hr />
            {/* /////////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>315 EASTER EGG CAMPAIGN</h2>
                <p>
                  One of our most recognizable campaigns is the 315 EasterEgg
                  project, launched in spring 2022. Partnering with Zoe's Place
                  Baby Hospice and University Hospital Coventry & Warwickshire's
                  children's ward, our mission was to bring joy and Easter eggs
                  to the families, children, and staff of both establishments
                </p>
                <p>
                  Our goal was to raise 315 Easter eggs, but we surpassed this
                  by collecting over 500 eggs from instructors, learners,
                  individuals, and donors in the Coventry community.
                </p>
                <p>
                  Our success attracted local MP Taiwo's attention, and the
                  surplus donations allowed us to extend our reach to various
                  charities and homes across the West Midlands. We donated
                  Easter eggs to care homes in Coventry, Holbrook's Community
                  Centre, and care homes in Nuneaton, spreading the Easter
                  spirit far and wide.
                </p>
              </div>
              <hr />
            </section>
            {/* /////////////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>
                  SEND YOUR LOVE:
                  <br />
                  CHRISTMAS FOOD BANK
                </h2>
                <p>
                  For years consecutively we collaborated with Coventry City
                  Council and our local food bank to raise and donate necessary
                  food and items to vulnerable families. Last year in 2023, we
                  were able to raise a total of £300+ worth of donations for the
                  local community, breaking our previous year's record.
                </p>
                <p>
                  Through this, we were ecstatic to know that we were more than
                  capable in supporting and assisting as many families as we can
                  during the winter seasons. We could not have achieved this
                  without the sincere and kind support of our office staff,
                  instructors and the local individuals of our community.
                </p>
              </div>
              <hr />
            </section>
            {/* ////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>BIKEATHON £300 FOR SPEED OF SIGHT</h2>
                <p>
                  At the annual Intelligent Instructor Conference and Expo, we
                  partnered with the NHS to offer free health checks,
                  highlighting high blood pressure and diabetes awareness.
                </p>
                <p>
                  Smartlearner also organized a Bikeathon, raising £1 per minute
                  for the Speed of Sight charity.
                </p>
                <p>
                  Instructors participated enthusiastically, and we raised £300
                  to support inclusive driving events for people of all
                  abilities. The charity empowers disabled individuals to engage
                  in unique activities and experiences.
                </p>
              </div>
              <hr />
            </section>

            {/* /////////////////////////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>
                  CYCLE RECYCLER BIKE <br></br>COMPETITION
                </h2>
                <p>
                  In summer 2022, SmartLearner Driving School teamed up with The
                  Cycle Recycle to promote reusing materials and refurbishing
                  old bicycles.
                </p>
                <p>
                  In summer 2022, SmartLearner Driving School teamed up with the
                  Cycle Recycle to promote reusing materials and refurbishing
                  old bicycles. Our campaign aimed to encourage our learners and
                  community to adopt sustainable transport, in hand supporting
                  Coventry City Council’s new bike lanes in parts of Coventry.
                  We held a summer-long competition attracting over 500 entries,
                  with support from various businesses. Two lucky winners were
                  selected through an automated raffle. Below are photos of the
                  winners and one of the supporting business owners!
                </p>
                <p>
                  Our campaign aimed to encourage our learners and community to
                  adopt sustainable transport. We held a summer-long
                  competition, attracting over 500 entries, with support from
                  various businesses. Two lucky winners were selected through an
                  automated raffle. Below are photos of the winners and one of
                  the supporting business owners!
                </p>
              </div>
            </section>
            {/* ////////////////////////////////////// */}
            <section className={styles.cCImagesSec}>
              <div className={styles.cCImagesdiv}>
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
                    <img
                      src={communityChempionImg1}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg2}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg3}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg4}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg5}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg6}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg7}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg8}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg9}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg10}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg11}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg12}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg13}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg14}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={communityChempionImg15}
                      alt="communityChempion-Images"
                    />
                  </SwiperSlide>
                  {/* Add more slides as needed */}
                </Swiper>
              </div>
              <div id={styles.schoolLocal}>
                <p>"The local School for local people"</p>
              </div>
            </section>
            {/* /////////////////////////////////// */}
          </section>
        </section>
      </div>
    </div>
  );
}
