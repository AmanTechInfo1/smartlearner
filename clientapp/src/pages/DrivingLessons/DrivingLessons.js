import React, { useEffect } from "react";
import styles from "./DrivingLesson.module.css";
import passImg from "../../assets/images/passImg.png";
import passwithUs1 from "../../assets/images/passwithUs1.jpg";
import passwithUs2 from "../../assets/images/passwithus2.jpg";
import passwithus3 from "../../assets/images/passwithus3.jpg";
import passwithUs4 from "../../assets/images/passwithus4.jpg";
import starImg from "../../assets/images/star.png";
import { IoCall } from "react-icons/io5";
import { HiMailOpen } from "react-icons/hi";
// ///////////////////////
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntensiveCorousel from "../../components/ui/IntensiveCorousel";
import ManualCorousel from "../../components/ui/ManualCarousel";
import AutomaticCorousel from "../../components/ui/AutomaticCarousel";
import PassPlusCorousel from "../../components/ui/PassPlusCarousel";
import { Element, scroller } from "react-scroll";
import { useParams } from "react-router-dom";

export default function DrivingLessons() {
  const { section } = useParams();
  useEffect(() => {
    if (section) {
      scroller.scrollTo(`${section}-section`, {
        duration: 400,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

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
    <div className={styles.drivingLessonsPage}>
      <div className={styles.DrivingLessonsPagedivFront}>
        <section className={styles.DrivingLessonsSectionFront}>
          <div id={styles.dLFrontHeading}>
            <h2>
              <span> 86% PASS </span>
              <br />
              <span>RATE FOR FIRST</span>
              <br /> <span>TIME PASSES</span>
            </h2>
          </div>
          <div id={styles.dLFrontImg}>
            <img src={passImg} alt="Pass Img" />
          </div>
        </section>
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
      {/* /////////////////////////////////////////// */}

      <div className={styles.whyChooseSml}>
        <div className={styles.whyChooseSmlGHeading}>
          <h2>Why Choose Smartlearner</h2>
        </div>
        <div className={styles.whyChooseSmlListdiv}>
          <section className={styles.whyChooseSmlLists}>
            <p>
              We are the highest-rated and fast-growing independent driving
              school in the West Midlands
            </p>
            <p>
              We offer everything you could ever need to get yourself on the
              road
            </p>
            <p>
              We take into consideration your availability, requirements lesson
              location, and anything else you may require
            </p>
            <p>We then choose the perfect instructor for you</p>
          </section>
        </div>
      </div>
      {/* ////////////////////////////////////////////// */}

      <section className={styles.imageSliderContainer}>
        <div
          style={{
            maxWidth: "1200px",
            marginRight: "auto",
            marginLeft: "auto",
            padding: "2rem 2rem",
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
        <hr></hr>
      </section>
      {/* ///////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="manual-section">
          <section className={styles.dManualSections}>
            {" "}
            <div className={styles.dManualDiv}>
              <h2>Manual</h2>
              <span>
                {" "}
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Discover the thrill of hands-on control with our manual driving
                lessons.
              </p>
              <p>
                From mastering the clutch to shifting gears seamlessly, our
                expert instructors will guide you through the art of manual
                driving, empowering you with the skills and confidence to
                navigate any road with finesse and precision.
              </p>
            </div>
            <section>
              <ManualCorousel />
            </section>
          </section>

          <hr />
        </Element>
      </section>
      {/* ////////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="automatic-section">
          <section className={styles.dManualSections}>
            {" "}
            <div className={styles.dManualDiv}>
              <h2>AUTOMATIC</h2>
              <span>
                {" "}
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Experience the ease and convenience of automatic drivingwith our
                comprehensive lessons.
              </p>
              <p>
                Our skilled instructors will help you navigate the roadsmoothly,
                focusing on essential techniques and safe drivingpractices.
                Whether you're a beginner or looking to refineyour skills, we'll
                empower you to drive confidently in anysituation.
              </p>
            </div>
            <section>
              <AutomaticCorousel />
            </section>
          </section>

          <hr />
        </Element>
      </section>
      {/* ////////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="Intensive-section">
          <section className={styles.dManualSections}>
            {" "}
            <div className={styles.dManualDiv}>
              <h2>INTENSIVE</h2>
              <span>
                {" "}
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Designed for those eager to learn quickly and efficiently,
                our immersive programmes offer focused instruction and
                hands-onexperience to help you become a confident driver in no
                time.
              </p>
              <p>
                Get behind the wheel and fast-track your path to
                driving independence with our intensive driving courses
              </p>
            </div>
            <section>
              <IntensiveCorousel />
            </section>
          </section>

          <hr />
        </Element>
      </section>
      {/* ////////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="Pass-Plus-section">
          <section className={styles.dManualSections} id="automatic-section4">
            {" "}
            <div className={styles.dManualDiv}>
              <h2>PASS PLUS</h2>
              <span>
                {" "}
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Pass Plus is a short driving course totalling to six
                hours,designed to help newly qualified drivers improve their
                skillsand safety.
              </p>
              <p>
                You can take it any time after you've passed your
                practicaldriving test but it's usually most beneficial in your
                first year ofdriving as most road accidents occur within the
                first 12months of a new driver getting their license.
              </p>
            </div>
            <section>
              <PassPlusCorousel />
            </section>
          </section>

          <hr />
        </Element>
      </section>
      {/* /////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <div
          className=" text-white p-4 "
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2 className="text-center display-4 mb-4">What's included?</h2>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">TOWN DRIVING</h3>
            <p>
              You'll learn how to navigate complex junctions, underpasses,
              trams, bus and cycle lanes.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">
              ALL WEATHER DRIVING
            </h3>
            <p>
              It can be advantageous to learn how to cope with heavy rain, snow,
              ice, fog and dazzling sunshine.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">RURAL ROADS</h3>
            <p>
              This section looks at safe passing places and what to do when you
              encounter sharp corners, horse riders, cyclists, farm vehicles and
              debris in the road.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">
              DRIVING ON MOTORWAYS
            </h3>
            <p>
              In this module you'll learn how to drive at a safe speed in
              different conditions, deal with motorway fatigue, handle a
              breakdown, use lanes correctly and follow signs.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">NIGHT DRIVING</h3>
            <p>
              This module can help boost your confidence when taking to the
              roads after dark. It deals with the correct use of headlamps,
              adjusting to different light levels, getting used to being dazzled
              and judging speeds and distance.
            </p>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
}
