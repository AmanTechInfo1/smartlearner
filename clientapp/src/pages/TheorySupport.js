// import React from 'react'
import styles from "./css/TheorySupport.module.css";
import poster from "../assets/images/video-poster-img.jpg";

import CallBackForm from "../components/forms/CallBackForm";

import Testemonial from "../components/testimonials/Testemonial";
import TheoryCorousel from "../components/ui/TheorySupportCarousel";
import starImg from "../assets/images/yellowStar.png";
import { Element, scroller } from "react-scroll";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import video from "../assets/videos/Video-1886-041219-B.mp4";

export default function TheorySupport() {
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
    <div className={styles.theorySupportPage}>
      <section className={styles.theorySupportHeadingContent}>
        <div className={styles.TSfirstContent}>
          <div className="opicity"></div>
          <div className={styles.TSfirstContentHeading}>
          <h2>THEORY SUPPORT </h2>
          </div>
         
        </div>
      </section>
      {/* //////////////////////////////////////////////// CONTENT SECTION //////////////////////////////// */}
      <section className={styles.innerTheorySupportSection}>
        {/* <section className={styles.videosFramesSec}>
          <div className={styles.innerTheorySupportContent}>
            <div className={styles.theorySupportContentVideo}>
              <video
                autoPlay={false}
                width="100%"
                height="600px"
                src={video}
                title="YouTube Video"
                poster={poster}
                controls={true}></video>
            </div>
          </div>
        </section> */}
        {/* /////////////////////////////////  //////////////////*/}
        <section className={styles.dManualSection}>
          <hr />
          <Element name="Theory-package-section">
            <section className={styles.dManualSections} id="automatic-section1">
              {" "}
              <div className={styles.dManualDiv}>
                <h2>THEORY SUPPORT</h2>
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
                  Need support on passing your theory test? We offer 1-2-1 in
                  house, from the comfort of your house on Zoom, or if you want
                  to touch up you driving skills, get ahead or have fun, we have
                  a driving simulator in office!
                </p>
              </div>
              <section>
                <TheoryCorousel />
              </section>
            </section>

            <hr />
          </Element>
        </section>
        {/* //////////CallBack Form section///////////// */}
        <section className={styles.callbackFormSection}>
          <div className={styles.callbackFormContent}>
            <div className={styles.callbackFormContentPG}>
              <p>
                We launched our 1-2-1 theory sessions in 2019 and since then we
                have helped many people pass who thought they never could. Our
                theory sessions focus on building your knowledge from the ground
                up to ensure you don’t just know the answers but understand
                them. We have had people from all over the country coming to us
                looking for help in preparing for their exam. Currently we have
                a 90% pass rate which is 41.5% higher than the national average!
              </p>
            </div>
            <CallBackForm />
          </div>
          <div className={styles.productTab}>{/* <ProductTab /> */}</div>
        </section>
      </section>

      {/* ///////////////////////////////////////////////////// */}

      {/* /////////////////////////////////////////////// */}
      {/* <section className={styles.TSvideosContanierSection}>
        <div className={styles.theorySupportContentVideosec}>
          <div className={styles.innerTheorySupportContent}>
            <div className={styles.theorySupportContentVideo}>
              <video
                autoPlay={false}
                width="100%"
                height="600px"
                src={video2}
                poster={poster}
                title="YouTube Video"
                controls={true}
              ></video>
            </div>
          </div>
        </div>
      </section> */}
      {/* ////////////////////////// */}
      {/* <section className={styles.whyChooseshortSection}>
        <div className={styles.whyChooseshortSectionContent}>
          <div className={styles.whyChooseshortSectionImage}>
            <img src={chooseUsImg} alt="Image" />
          </div>
          <div className={styles.whyChooseshortSectionText}>
            <h2>
              WHY CHOOSE <span>SMARTLEARNER ?</span>
            </h2>
            <p>
              We are the highest-rated and fastest-growing independent driving
              school in the West Midlands. We offer everything you could ever
              need to get yourself on the road. We take into consideration your
              times requirements, lesson location and anything else you require
              then choose the perfect instructor for you. We even offer 1-2-1
              theory and simulator training with a tutor for those who feel need
              additional support to pass their exams. So, forget the rest and
              learn with the best! Call us today on{" "}
              <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                {" "}
                <span>0800 118 2001</span>{" "}
              </a>
              to get yourself booked in.
            </p>
            <div className={styles.whyChooseshortSectionButtons}>
              <Link to="/about">
                {" "}
                <button className={styles.whyChooseshortSectionReadmore}>
                  Read More
                </button>
              </Link>

              <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                <button className={styles.whyChooseshortSectionCallus}>
                  Call Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* //////////////////////////////// */}
      {/* <section className={styles.drivenBefore}>
        <h2>Search for driving lessons in your area</h2>
        <DrivenForm />
      </section> */}
      {/* /////////////////////////////////////////////// */}

      {/* ////////////////////////////////// */}
      {/* <section className={styles.nextFormSection}>
        <div className={styles.nextFormContainer}>
          <div className={styles.nextFormDetailsContainer}>
            <div className={styles.nextFormDetailsContainerHeading}>
              {" "}
              <h3>REQUEST FOR A CALLBACK</h3>
              <span>
                <FaArrowRight id={styles.rightArow} />
              </span>
            </div>

            <ul type="none">
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Highest-rated Independent driving
                school in the West Midlands
              </li>
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Manual and Automatic tuition
              </li>
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Over 40 instructors both male and
                female
              </li>
            </ul>
          </div>
          <div className={styles.nextFormContainer}>
            <CallBackForm />
          </div>
        </div>
      </section> */}
      {/* ///////////////Testimonials////// */}
      <section>
        <Testemonial />
      </section>

      {/* ///////////////////////Reviews//////// */}
      {/* <section>
        <Review />
      </section> */}
      {/* //////////////faqs//////////////////////// */}
      {/* <section>
        <ShortFaqs />
      </section> */}
      {/* ////////////////////////////////////// */}
      {/* /////////////////////////////////////Our Partners////////////////////////// */}
      {/* 
      <section className={styles.ourPartnersSection}>
      <div className={styles.bgOverlay}></div>
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
        </section> */}
    </div>
  );
}
