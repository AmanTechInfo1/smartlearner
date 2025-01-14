import styles from "./css/home.module.css";
// import LplateImg from "..//assets/images/L-Plate.jpg";
// import arrowImg from "../assets/images/arrow-img2.png";
// import trustPilot from "..//assets/images/trustpilot-inline-white.png";
// import homeUserHand from "..//assets/images/userHandImg.png";
// import img1 from "..//assets/images/1 (1).png";
// import img2 from "../assets/images/1 (2).png";
// import img3 from "../assets/images/1 (3).png";
// import tropfyImg from "../assets/images/grand-prize-transparent-trophy-free-png.png";
// import userIdentificationImg from "../assets/images/userIndentification.png";
// import hallOfFame from "../assets/images/hallOfFame.png";
// import starImg from "../assets/images/yellowStar.png";
// import spiralImg from "../assets/images/pngtree-undulate-gray-wave-swirl-png-image_5082452.png";
// import Carousel from "../components/ui/Carousel";
// import Review from "../components/views/Review";
// import { Link } from "react-router-dom";
import hallOfFame1 from "../assets/images/halloffame11.png";
import hallOfFame2 from "../assets/images/halloffame22.png";
import hallOfFame3 from "../assets/images/halloffame33.png";
import hallOfFame4 from "../assets/images/halloffame44.png";
import hallOfFame5 from "../assets/images/halloffame5.png";
import hallOfFame6 from "../assets/images/halloffame6.png";
import hallOfFame7 from "../assets/images/halloffame7.png";
import callbackimg from "../assets/images/callbacksupportimage.jpg";

import GoldTrophyImg from "../assets/images/goldTrophyImg.jpg";
import silverTrophyImg from "../assets/images/silverTrophyImg.jpg";
// import Slider from "react-slick";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { serviceFormSchema } from "../schemas/master";
import { enquiryData } from "../redux/features/enquirySlice";
// import { FaLongArrowAltRight } from "react-icons/fa";
import HomeDesign from "../components/ui/homeContent/HomeDesign";
import ImagesCarousel from "../components/imageCarousel/ImagesCarousel";
// import frontImg from "../assets/images/WhatsApp Image 2024-08-13 at 6.00.38 PM.jpeg";
import CallBackForm from "../components/forms/CallBackForm";
import BookingSection from "../components/ui/homeContent/BookingSection";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";
// import logoImage from "../assets/images/1200px-Lplate.svg.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(serviceFormSchema),
  });

  const handleServiceForm = async (data) => {
    const formData = new FormData();
    formData.append("service", data.service);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("postcode", data.postcode);
    formData.append("message", data.message);
    formData.append("formType", "ServiceForm");
    dispatch(enquiryData({ requestData: data, reset }));
  };

  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart =
      "See Why People Choose SmartLearner to PASS Their Driving Test.";
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
    <div className={styles.homepage}>
      <div className={styles.homepageContainerDiv}>
        <section className={styles.homeSection}>
          <div className={styles.homeContainer}>
            <HomeDesign />
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////// */}
        <section>
          <BookingSection />
        </section>
        {/* ////////////////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.homeSection}>
          <div className={styles.secondSectionContent}>
            {/* /////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////// */}

            {/* <section className={styles.BookNowSec}>
              <h2>Book Online Now!</h2>
            </section>
            <>
              <Carousel />
            </> */}
            {/* ///////////////////////////////////////////////////// */}
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////// */}
        {/* //////////////carousel section///////////////// */}
        <div className={styles.callbackformflex}>
          <section>
            <CallBackForm />
          </section>

          <section>
            <img src={callbackimg} alt="callbackimg" />
          </section>
        </div>
        {/* //////////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////// */}
        <section className={styles.imageSliderContainer}>
          <div className={styles.whyChooseText}>
            <p ref={text2Ref}>{splitTextPartTwo()}</p>
          </div>
          <div
            style={{
              maxWidth: "1400px",
              marginRight: "auto",
              marginLeft: "auto",
              padding: "4rem 2rem",
              width: "100%",
              margin: "2rem auto",
            }}>
            <ImagesCarousel />
          </div>
          <div className={styles.spiralImgContainer}>
            {/* <img src={spiralImg} alt="spiralImg" /> */}
          </div>
        </section>

        {/* /////////////////////////////////// */}
        {/* <section>
          <div className={styles.starImgContainer}>
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
          </div>
        </section> */}
        {/* ////////////////////////Reviews section //////////////////////// */}
        <section>
          <StaticTestimonial />
        </section>

        {/* ///////////////////////////////////////////pass with us ////////////////////////// */}

        {/* ///////////////////////////////////////// */}

        {/* <div className={styles.starImgContainer}>
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
          <img src={starImg} alt="starImg" />
        </div> */}
        <section className={styles.homeSection}>
          <div className={styles.secondSectionContent}>
            <div className={styles.hallFameContent}>
              <div className={styles.semiCircle}>
                <h2>Award Winning Driving School</h2>
              </div>

              <div className={styles.trophyFrame}>
                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame1} alt="hallOfFame1" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={GoldTrophyImg}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p style={{ color: "gold" }}>
                    REGIONAL, DRIVING SCHOOL OF THE YEAR 2022
                  </p>
                </div>

                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame2} alt="hallOfFame2" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={GoldTrophyImg}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p style={{ color: "gold" }}>
                    COMMUNITY CHAMPION OF THE YEAR 2023
                  </p>
                </div>

                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame3} alt="hallOfFame3" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={GoldTrophyImg}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p style={{ color: "gold" }}>
                    NATIONAL INSTRUCTOR AWARDS 2024
                  </p>
                </div>

                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame4} alt="hallOfFame4" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={silverTrophyImg}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p style={{ color: "#d9d9d9" }}>
                    GREEN DRIVING SCHOOL OF THE YEAR 2023
                  </p>
                </div>
                {/* //////////////////////////////////////////// */}
               
              </div>
              <div className={styles.trophyFrame2}>
              <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame5} alt="hallOfFame5" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={GoldTrophyImg}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p style={{ color: "gold" }}>Prestige Awards Year 2024</p>
                </div>
                {/* /////////////////////////////////////////////////////// */}
                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame6} alt="hallOfFame6" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={GoldTrophyImg}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p style={{ color: "gold" }}>
                    COMMUNITY CHAMPION OF THE YEAR 2024
                  </p>
                </div>
                {/* ////////////////////////////////////////////////////////////// */}
                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame7} alt="hallOfFame7" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={GoldTrophyImg}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p style={{ color: "gold" }}>Global Award 2024 / 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
