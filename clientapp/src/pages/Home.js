import styles from "./css/home.module.css";
// import LplateImg from "..//assets/images/L-Plate.jpg";
// import arrowImg from "../assets/images/arrow-img2.png";
import trustPilot from "..//assets/images/trustpilot-inline-white.png";
// import homeUserHand from "..//assets/images/userHandImg.png";
// import img1 from "..//assets/images/1 (1).png";
// import img2 from "../assets/images/1 (2).png";
// import img3 from "../assets/images/1 (3).png";
import tropfyImg from "../assets/images/grand-prize-transparent-trophy-free-png.png";
// import userIdentificationImg from "../assets/images/userIndentification.png";
import hallOfFame from "../assets/images/hallOfFame.png";
import starImg from "../assets/images/yellowStar.png";
import spiralImg from "../assets/images/pngtree-undulate-gray-wave-swirl-png-image_5082452.png";
import Carousel from "../components/ui/Carousel";
import Review from "../components/views/Review";
// import { Link } from "react-router-dom";
import hallOfFame1 from "../assets/images/halloffame1.png";
import hallOfFame2 from "../assets/images/halloffame2.png";
import hallOfFame3 from "../assets/images/halloffame3.png";
import hallOfFame4 from "../assets/images/halloffame4.png";
import callbackimg from "../assets/images/callbacksupportimage.jpg";
// //////////////////
import Slider from "react-slick";

///////////////////
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { serviceFormSchema } from "../schemas/master";
import { enquiryData } from "../redux/features/enquirySlice";
// import { FaLongArrowAltRight } from "react-icons/fa";
import HomeDesign from "../components/ui/homeContent/HomeDesign";
import ImagesCarousel from "../components/imageCarousel/ImagesCarousel";
import frontImg from "../assets/images/WhatsApp Image 2024-08-13 at 6.00.38 PM.jpeg";
import CallBackForm from "../components/forms/CallBackForm";
import BookingSection from "../components/ui/homeContent/BookingSection";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";
import logoImage from "../assets/images/1200px-Lplate.svg.png";
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
            <p>
              See Why People Choose SmartLearner to{" "}
              <span style={{ color: "#66ffbd" }}>PASS Their Driving Test.</span>
            </p>
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
                        src={logoImage}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p>REGIONAL, DRIVING SCHOOL OF THE YEAR</p>
                </div>

                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame2} alt="hallOfFame2" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={logoImage}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p>COMMUNITY CHAMPION OF THE YEAR</p>
                </div>

                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame3} alt="hallOfFame3" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={logoImage}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p>NATIONAL INSTRUCTOR AWARDS</p>
                </div>

                <div className={styles.cardtrophyFrame}>
                  <div className={styles.cardInnertrophyFrame}>
                    <div className={styles.cardFronttrophyFrame}>
                      <img src={hallOfFame4} alt="hallOfFame4" />
                    </div>
                    <div className={styles.cardBacktrophyFrame}>
                      <img
                        src={logoImage}
                        alt="Logo"
                        className={styles.logotrophyFrame}
                      />
                    </div>
                  </div>
                  <p>GREEN DRIVING SCHOOL OF THE YEAR</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
