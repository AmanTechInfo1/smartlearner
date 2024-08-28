import React, { useEffect } from "react";
import styles from "./DrivingLesson.module.css";
import passImg from "../../assets/images/drivingLessonbanner.jpg";
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
import ImagesCarousel from "../../components/imageCarousel/ImagesCarousel";
import OurPartners1 from "../../assets/images/our partners/BYLC_Logo.png";

import OurPartners2 from "../../assets/images/our partners/gocv-1024x546.png";
import OurPartners3 from "../../assets/images/our partners/Highways_England_logo.svg.png";
import OurPartners4 from "../../assets/images/our partners/ii_Awards24_LOGO_acciDONT-long-1080x441.png";
import OurPartners5 from "../../assets/images/our partners/JLR-Logo-2008 (1).png";

import OurPartners7 from "../../assets/images/our partners/Screenshot 2024-05-02 at 13.51.33.png";
import OurPartners8 from "../../assets/images/our partners/Screenshot 2024-05-02 at 13.55.26.png";
import OurPartners9 from "../../assets/images/our partners/Screenshot 2024-05-02 at 14.05.12.png";
import OurPartners10 from "../../assets/images/our partners/The-Tree-Council-Logo-1.png";
import OurPartners11 from "../../assets/images/our partners/Sqa_logo.png";
import OurPartners12 from "../../assets/images/our partners/THT_logo_1854x.png";
import OurPartners13 from "../../assets/images/our partners/West_Midlands_Fire_Service_crest.svg.png";



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

  return (
    <div className={styles.drivingLessonsPage}>
      <div className={styles.DrivingLessonsPagedivFront}>
        <section className={styles.DrivingLessonsSectionFront}>
          <div id={styles.dLFrontHeading}>
            <h2>
              <span> "Learners of today, </span>
              <br />
              <span>Drivers of tomorrow"</span>
              <br /> <span>"86% first time pass rate!".</span>
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
          <h2>Why Choose Smartlearner?</h2>
        </div>
        <div className={styles.whyChooseSmlListdiv}>
          <section className={styles.whyChooseSmlLists}>
            <p>
              We are the highest-rated and fastest-growing independent driving
              school in the West Midlands. We offer everything you could need to
              get yourself on the road. We take into consideration your
              availability, your work schedule, and any other requirements you
              may have.
            </p>
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
          <ImagesCarousel />
        </div>
        <hr></hr>
      </section>
      {/* ///////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="manual-section">
          <section className={styles.dManualSections}>
            {" "}
            <div className={styles.dManualDiv}>
              <h2>MANUAL</h2>
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
                Experience the ease and convenience of automatic driving with
                our comprehensive lessons. Our skilled instructors will help you
                navigate the road smoothly, focusing on essential techniques and
                safe driving practices. Whether you’re a beginner or looking to
                refine your skills, we’ll empower you to drive confidently in
                any situation.
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
                Designed for those eager to learn quickly and efficiently, our
                immersive programmes offer focused instruction and hands-on
                experience to help you become a confident driver in no time. Get
                behind the wheel and fast-track your path to driving
                independence with our intensive driving courses.
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
                Designed for those eager to learn quickly and efficiently, our
                immersive programmes offer focused instruction and hands-on
                experience to help you become a confident driver in no time.
              </p>
              <p>
                Get behind the wheel and fast-track your path to driving
                independence with our intensive driving courses.
              </p>
            </div>
            <section>
              <PassPlusCorousel />
            </section>
          </section>

          {/* <hr /> */}
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
      {/* /////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////Our Partners////////////////////////// */}

      <section className={styles.ourPartnersSection}>
          <h2>Our Partners</h2>
          <div className={styles.partnerSection}>
            <img src={OurPartners1} alt="" />
          
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
  );
}
