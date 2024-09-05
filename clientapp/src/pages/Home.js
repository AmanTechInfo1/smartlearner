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
import starImg from "../assets/images/goldstar.png";
import spiralImg from "../assets/images/pngtree-undulate-gray-wave-swirl-png-image_5082452.png";
import Carousel from "../components/ui/Carousel";
import Review from "../components/views/Review";
// import { Link } from "react-router-dom";
import hallOfFame1 from "../assets/images/halloffame1.png";
import hallOfFame2 from "../assets/images/halloffame2.png";
import hallOfFame3 from "../assets/images/halloffame3.png";
import hallOfFame4 from "../assets/images/halloffame4.png";

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
          <div className={styles.homeContent}>
            <img src={trustPilot} alt="trustPilot" />
          </div>
          <div className={styles.homeContainer}>
            <HomeDesign />
            {/* <div className={styles.innerHomeHeading}>
              <h2>START YOUR DRIVING JOURNEY</h2>
            </div> */}
            {/* <div className={styles.flexImagesHome}>
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
            </div> */}
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////// */}

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
            {/* ///////////////////////////////////////////////////Request callback////////////////// */}
            {/* <div className={styles.formContent}>
              <div className={styles.formContentHeading}>
                <h2>REQUEST A CALL BACK </h2>
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
                          <option value="service3">Become a Driving Instructor/Join Us</option>
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
            </div> */}
            {/* /////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////// */}
            <>
              <Carousel />
            </>
            {/* ///////////////////////////////////////////////////// */}
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////// */}
        <section>
          <div className={styles.carContent}>
            {/* <div className={styles.carContainer}>
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
            </div> */}
            <div className={styles.spiralImgContainer}>
              {/* <img src={spiralImg} alt="spiralImg" /> */}
              <hr style={{ opacity: "1", border: "2px solid silver" }} />
            </div>
          </div>
        </section>
        {/* //////////////carousel section///////////////// */}

        {/* //////////////////////////////////////////// */}
        <section className={styles.imageSliderContainer}>
          <div className={styles.whyChooseText}>
            <p>
              See why people choose SmartLearner to{" "}
              <span style={{ color: "green" }}>PASS</span> their driving test.{" "}
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
        </section>
        {/* /////////////////////////////////// */}
        <section>
          <div className={styles.starImgContainer}>
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
            <img src={starImg} alt="starImg" />
          </div>
        </section>
        {/* ////////////////////////Reviews section //////////////////////// */}
        <Review />
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
                {/* <img src={hallOfFame} alt="hallOfFame" /> */}
                <h2>
                  Award Winning <span>Driving School</span>{" "}
                </h2>
              </div>
              {/* <div className={styles.trophyImg}>
                <img src={tropfyImg} alt="tropfyImg" />
              </div> */}

              <div className={styles.trophyFrame}>
                <img src={hallOfFame1} alt="hallOfFame1" />
                <img src={hallOfFame2} alt="hallOfFame2" />
                <img src={hallOfFame3} alt="hallOfFame3" />
                <img src={hallOfFame4} alt="hallOfFame4" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
