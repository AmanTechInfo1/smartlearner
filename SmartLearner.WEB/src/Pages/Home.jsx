import styles from "./css/Home.module.css";
import { useState } from "react";
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
import Carousel from "./Carousel";
import Review from "../component/Reviews/Review";
// //////////////////
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
///////////////////
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { serviceFormSchema } from "../formSchemas/index";
import { servicesData } from "../features/servicesSlice";
import { yupResolver } from "@hookform/resolvers/yup";

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

    dispatch(servicesData({ requestData: data, reset }));
  };

  const images = [
    "src/assets/images/xain-img-150x150.jpg",
    "src/assets/images/kevin-img-150x150.jpg",
    "src/assets/images/xain-img-150x150.jpg",
    "src/assets/images/kevin-img-150x150.jpg",
    "src/assets/images/xain-img-150x150.jpg",
    "src/assets/images/kevin-img-150x150.jpg",
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,

    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      <section className={styles.homeSection}>
        <div className={styles.homeContent}>
          <img src={trustPilot} alt="trustPilot" />
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.innerHomeHeading}>
            <h2>
              START YOUR
              <br /> DRIVING <br /> JOURNEY
            </h2>
          </div>

          <div className={styles.arrowImgSection}>
            <img src={arrowImg} alt="arrowImg" />
          </div>
          <div className={styles.userIdentificationImg}>
            <img src={userIdentificationImg} alt="userIdentificationImg" />
          </div>

          <div className={styles.homeUserHand}>
            <img id={styles.userHand} src={homeUserHand} alt="homeUserHand" />
            <img id={styles.LplateImg} src={LplateImg} alt="LplateImg" />
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <section className={styles.homeSection}>
        <div className={styles.secondSectionContent}>
          <div className={styles.listContent}>
            <ul type="none">
              <li>
                <span>
                  <img src={img1} alt="1" />
                </span>
                Apply for your Provisonal License
              </li>
              <li>
                <span>
                  <img src={img2} alt="2" />
                </span>
                Pass your Theory Test with Smartlearner
              </li>
              <li>
                <span>
                  <img src={img3} alt="3" />
                </span>
                Book Your lessons with Smartlearner
              </li>
            </ul>
          </div>
          <div className={styles.formContent}>
            <h2>BOOK ME IN</h2>
            <p>Contact Form</p>
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
                        required>
                        <option disabled value="">
                          Select a service
                        </option>
                        <option value="service1">Driving lessons</option>
                        <option value="service2">Theory support</option>
                        <option value="service3">Instructor enquiry</option>
                      </select>
                    )}
                    defaultValue=""
                  />
                  {errors?.service && (
                    <p style={{ color: "red" }}>{errors?.service?.message}</p>
                  )}
                </div>

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
                  {errors?.name && (
                    <p style={{ color: "red" }}>{errors?.name?.message}</p>
                  )}
                </div>

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
                  {errors?.email && (
                    <p style={{ color: "red" }}>{errors?.email?.message}</p>
                  )}
                </div>
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
                  {errors?.message && (
                    <p style={{ color: "red" }}>{errors?.message?.message}</p>
                  )}
                </div>
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
                  {errors?.postcode && (
                    <p style={{ color: "red" }}>{errors?.postcode?.message}</p>
                  )}
                </div>
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
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
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
                Afordable <br />
                Prices{" "}
              </h3>
              <p>
                We are always looking at industry prices to ensure our learners
                get the best valued lessons
              </p>
            </div>
            <div className={styles.column}>
              <h3>
                Automated SMS <br /> Alerts
              </h3>
              <p>
                You will receive SMS alerts on your phoine to remind you of your
                lessons
              </p>
            </div>
            <div className={styles.column}>
              <h3>
                Unique Learning <br />
                Plans
              </h3>
              <p>
                Our Instructor cater to your unique learning styles and create
                lesson plans around them
              </p>
            </div>
          </div>
          <div className={styles.spiralImgContainer}>
            <img src={spiralImg} alt="spiralImg" />
          </div>
          <div className={styles.whyChooseText}>
            <p>
              See why more than 10,000 people choose Smartlearner to Pass their
              Driving Test{" "}
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
          }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div className={styles.imgSlider}>
                <img key={index} src={image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
