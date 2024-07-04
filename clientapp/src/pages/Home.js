import styles from "./css/home.module.css";
import LplateImg from "..//assets/images/L-Plate.jpg";
import arrowImg from "../assets/images/arrow-img2.png";
import trustPilot from "..//assets/images/trustpilot-inline-white.png";
import homeUserHand from "..//assets/images/userHandImg.png";
import img1 from "..//assets/images/1 (1).png";
import img2 from "../assets/images/1 (2).png";
import img3 from "../assets/images/1 (3).png";
import tropfyImg from "../assets/images/grand-prize-transparent-trophy-free-png.png";
import userIdentificationImg from "../assets/images/userIndentification.png";
import hallOfFame from "../assets/images/hallOfFame.png";
import starImg from "../assets/images/star.png";
import spiralImg from "../assets/images/pngtree-undulate-gray-wave-swirl-png-image_5082452.png";
import Carousel from "../components/ui/Carousel";
import Review from "../components/views/Review";
import { Link } from "react-router-dom";
import hallOfFame1 from "../assets/images/halloffame1.png";
import hallOfFame2 from "../assets/images/halloffame2.png";
import hallOfFame3 from "../assets/images/halloffame3.png";
import hallOfFame4 from "../assets/images/halloffame4.png";
import passwithUs1 from "../assets/images/passwithUs1.jpg";
import passwithUs2 from "../assets/images/passwithus2.jpg";
import passwithus3 from "../assets/images/passwithus3.jpg";
import passwithUs4 from "../assets/images/passwithus4.jpg";

import OurPartners1 from "../assets/images/our partners/BYLC_Logo.png";
import OurPartners123 from "../assets/images/smartlearnerSupportImg.png";
import OurPartners2 from "../assets/images/our partners/gocv-1024x546.png";
import OurPartners3 from "../assets/images/our partners/Highways_England_logo.svg.png";
import OurPartners4 from "../assets/images/our partners/ii_Awards24_LOGO_acciDONT-long-1080x441.png";
import OurPartners5 from "../assets/images/our partners/JLR-Logo-2008 (1).png";

import OurPartners7 from "../assets/images/our partners/Screenshot 2024-05-02 at 13.51.33.png";
import OurPartners8 from "../assets/images/our partners/Screenshot 2024-05-02 at 13.55.26.png";
import OurPartners9 from "../assets/images/our partners/Screenshot 2024-05-02 at 14.05.12.png";
import OurPartners10 from "../assets/images/our partners/The-Tree-Council-Logo-1.png";
import OurPartners11 from "../assets/images/our partners/Sqa_logo.png";
import OurPartners12 from "../assets/images/our partners/THT_logo_1854x.png";
import OurPartners13 from "../assets/images/our partners/West_Midlands_Fire_Service_crest.svg.png";

// //////////////////
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
///////////////////
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { serviceFormSchema } from "../schemas/master";
import { enquiryData } from "../redux/features/enquirySlice";
import { FaLongArrowAltRight } from "react-icons/fa";
import HomeDesign from "../components/ui/homeContent/HomeDesign";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,

    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.homepageContainerDiv}>
        <section className={styles.homeSection}>
          <div className={styles.homeContent}>
            <img src={trustPilot} alt="trustPilot" />
          </div>
          <div className={styles.homeContainer}>
            <div className={styles.innerHomeHeading}>
              <h2>START YOUR DRIVING JOURNEY</h2>
            </div>
            <div className={styles.flexImagesHome}>
              <div className={styles.arrowImgSection}>
                <img
                  src={arrowImg}
                  className={`${styles.animate__animated} ${styles.animate__bounce}`}
                  alt="arrowImg"
                />
              </div>
              <div className={styles.imagesContainerSectionImg}>
                <div
                  className={styles.userIdentificationImg}
                  id={styles.flexDetailsDirection}
                >
                  <div className={styles.imageContainersSectionImg}>
                    <img
                      src={userIdentificationImg}
                      className={`${styles.animate__animated} ${styles.animate__fadeInUp}`}
                      alt="userIdentificationImg"
                    />
                    <div className={styles.overlayers}>
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                  <div className={styles.listContent}>
                    <ul type="none">
                      <li>
                        <span>
                          <img src={img1} alt="1" />
                        </span>
                        <a
                          href="https://www.gov.uk/apply-first-provisional-driving-licence"
                          target="_blank"
                        >
                          {" "}
                          Apply for your Provisional License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id={styles.flexDetailsDirection}>
                  <div className={styles.imageContainersSectionImg}>
                    <img
                      id={styles.userHand}
                      src={homeUserHand}
                      className={`${styles.animate__animated} ${styles.animate__fadeInLeft}`}
                      alt="homeUserHand"
                    />
                    <div className={styles.overlayers}>
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                  <div className={styles.listContent}>
                    <ul type="none">
                      <li>
                        <span>
                          <img src={img2} alt="2" />
                        </span>
                        <Link to="/Theory-Support">
                          Pass your Theory Test with Smartlearner
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id={styles.flexDetailsDirection}>
                  <div className={styles.imageContainersSectionImg}>
                    <img
                      id={styles.LplateImg}
                      src={LplateImg}
                      className={`${styles.animate__animated} ${styles.animate__fadeInRight}`}
                      alt="LplateImg"
                    />
                    <div className={styles.overlayers}>
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                  <div className={styles.listContent}>
                    <ul type="none">
                      <li>
                        <span>
                          <img src={img3} alt="3" />
                        </span>
                        <Link to="/Driving-Lessons">
                          Book Your lessons with Smartlearner
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////// */}
        <HomeDesign/>

        {/* ////////////////////////////////////////////////////////////////////////////////////// */}
        <section className={styles.homeSection}>
        <div className={styles.secondSectionContent}>
          {/* <div className={styles.listContent}>
            <ul type="none">
              <li>
                <span>
                  <img src={img1} alt="1" />
                </span>
                <a
                  href="https://www.gov.uk/apply-first-provisional-driving-licence "
                  target="_blank"
                >
                  {" "}
                  Apply for your Provisional License
                </a>
              </li>
              <li>
                <span>
                  <img src={img2} alt="2" />
                </span>
                <Link to="/Theory-Support">
                  Pass your Theory Test with Smartlearner
                </Link>
              </li>
              <li>
                <span>
                  <img src={img3} alt="3" />
                </span>
                <Link to="/Driving-Lessons">
                  Book Your lessons with Smartlearner
                </Link>
              </li>
            </ul>
          </div> */}
          <div className={styles.formContent}>
            <div className={styles.formContentHeading}>
              <h2>BOOK ME IN</h2>
              <p>Contact Form</p>
            </div>

            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit(handleServiceForm)}>
                <div className={styles.homeFormGroup}>
                  <label htmlFor="service">SERVICES</label>

                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className={styles.homeForminputField}
                        required
                      >
                        <option disabled value="">
                          Select a service
                        </option>
                        <option value="service1">Driving lessons</option>
                        <option value="service2">
                          Theory support / simulator
                        </option>
                        <option value="service3">Instructor</option>
                      </select>
                    )}
                    defaultValue=""
                  />
                </div>{" "}
                {errors?.postcode && (
                  <small style={{ color: "red" }}>
                    {errors?.service?.message}
                  </small>
                )}
                <div className={styles.homeFormGroup}>
                  <label htmlFor="name">NAME</label>

                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="text"
                        value={value}
                        className={styles.homeForminputField}
                        onChange={onChange}
                        placeholder="Name"
                      />
                    )}
                    defaultValue={""}
                  />
                </div>
                {errors?.postcode && (
                  <small style={{ color: "red" }}>
                    {errors?.name?.message}
                  </small>
                )}
                <div className={styles.homeFormGroup}>
                  <label htmlFor="email">EMAIL</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        type="email"
                        className={styles.homeForminputField}
                        value={value}
                        onChange={onChange}
                        placeholder="Email Address"
                      />
                    )}
                    defaultValue={""}
                  />
                </div>
                {errors?.postcode && (
                  <small style={{ color: "red" }}>
                    {errors?.email?.message}
                  </small>
                )}
                <div className={styles.homeFormGroup}>
                  <label htmlFor="message">MESSAGE</label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <textarea
                        type="message"
                        value={value}
                        onChange={onChange}
                        placeholder="Message"
                        className={styles.homeForminputField}
                        required
                      />
                    )}
                    defaultValue={""}
                  />
                </div>
                {errors?.postcode && (
                  <small style={{ color: "red" }}>
                    {errors?.message?.message}
                  </small>
                )}
                <div className={styles.homeFormGroup}>
                  <label htmlFor="postcode">POSTCODE</label>
                  <Controller
                    name="postcode"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <input
                        value={value}
                        onChange={onChange}
                        type="text"
                        placeholder="Postcode"
                        className={styles.homeForminputField}
                        required
                      />
                    )}
                    defaultValue={""}
                  />
                </div>
                {errors?.postcode && (
                  <small style={{ color: "red" }}>
                    {errors?.postcode?.message}
                  </small>
                )}
                <button type="submit" className={styles.homeFormSubmitButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className={styles.hallFameContent}>
            <div className={styles.semiCircle}>
              <img src={hallOfFame} alt="hallOfFame" />
            </div>
            <div className={styles.trophyImg}>
              <img src={tropfyImg} alt="tropfyImg" />
            </div>

            <div className={styles.trophyFrame}>
              <img src={hallOfFame1} alt="hallOfFame1" />
              <img src={hallOfFame2} alt="hallOfFame2" />
              <img src={hallOfFame3} alt="hallOfFame3" />
              <img src={hallOfFame4} alt="hallOfFame4" />
            </div>
          </div>
        </div>
      </section>
        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

        <section>
          <div className={styles.carContent}>
            <div className={styles.carContainer}>
              <h2>
                BOOK <br /> NOW WITH <br />
                SMARTLEARNER
              </h2>
            </div>
            <div className={styles.mainFeatures}>
              <div className={styles.column}>
                <h3>
                  Affordable <br />
                  Prices{" "}
                </h3>
                <p>
                  We are always looking at industry prices to ensure our
                  learners get the best valued lessons
                </p>
              </div>
              <div className={styles.column}>
                <h3>
                  Automated SMS <br /> Alerts
                </h3>
                <p>
                  You will receive SMS alerts on your phone to remind you of
                  your lessons
                </p>
              </div>
              <div className={styles.column}>
                <h3>
                  Unique Learning <br />
                  Plans
                </h3>
                <p>
                  Our Instructors cater to your unique learning styles and
                  create lesson plans around them
                </p>
              </div>
            </div>
            <div className={styles.spiralImgContainer}>
              <img src={spiralImg} alt="spiralImg" />
            </div>
            <div className={styles.whyChooseText}>
              <p>
                See why more than 10,000 people choose Smartlearner to Pass
                their Driving Test{" "}
              </p>
            </div>
            <div className={styles.starImgContainer}>
              <img src={starImg} alt="starImg" />
              <img src={starImg} alt="starImg" />
              <img src={starImg} alt="starImg" />
              <img src={starImg} alt="starImg" />
              <img src={starImg} alt="starImg" />
            </div>
          </div>
        </section>
        {/* //////////////carousel section///////////////// */}

        <>
          <Carousel />
        </>
        {/* ////////////////////////Reviews section //////////////////////// */}
        <Review />
        {/* ///////////////////////////////////////////pass with us ////////////////////////// */}
        <section className={styles.imageSliderContainer}>
          <h2>Pass With Us</h2>
          <div
            style={{
              maxWidth: "1200px",
              marginRight: "auto",
              marginLeft: "auto",
              padding: "4rem 2rem",
              width: "100%",
              margin: "2rem auto",
            }}
          >
            <Slider {...settings}>
              <div className={styles.imgSlider}>
                <img src={passwithUs1} alt="" />
              </div>
              <div className={styles.imgSlider}>
                {" "}
                <img src={passwithUs2} alt="" />
              </div>
              <div className={styles.imgSlider}>
                {" "}
                <img src={passwithus3} alt="" />
              </div>
              <div className={styles.imgSlider}>
                <img src={passwithUs4} alt="" />
              </div>
            </Slider>
          </div>
        </section>
        {/* /////////////////////////////////////Our Partners////////////////////////// */}

        <section className={styles.ourPartnersSection}>
          <h2>Our Partners</h2>
          <div className={styles.partnerSection}>
            <img src={OurPartners1} alt="" />
            <img src={OurPartners123} alt="" />
            <img src={OurPartners2} alt="" />
            <img src={OurPartners3} alt="" />
            <img src={OurPartners4} alt="" />
            <img src={OurPartners5} alt="" />

            <img src={OurPartners7} alt="" />
            <img src={OurPartners8} alt="" />
            <img src={OurPartners9} alt="" />
            <img src={OurPartners10} alt="" />
            <img src={OurPartners11} alt="" />
            <img src={OurPartners12} alt="" />
            <img src={OurPartners13} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
