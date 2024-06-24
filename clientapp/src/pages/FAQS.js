import React from "react";
import styles from "./css/Faqs.module.css";
import Accordion from "react-bootstrap/Accordion";
import { faqs } from "../assets/data/Faqs";

import { FaStar } from "react-icons/fa";
import poster from "../assets/images/video-poster-img.jpg";
import ProductTab from "./shop/ProductTab";
import CallBackForm from "../components/forms/CallBackForm";
import chooseUsImg from "../assets/images/choose-img.jpg";
import DrivenForm from "../components/forms/DrivenForm";
import { FaArrowRight } from "react-icons/fa";

import Review from "../components/views/Review";
import Testemonial from "../components/testimonials/Testemonial";
export default function FAQS() {
  return (
    <>
      <section style={{backgroundColor:'black', color:'white'}}>
        <section className={styles.theorySupportHeadingContent}>
          <div className={styles.TSfirstContent}>
            <h2>FAQS</h2>
          </div>
        </section>
        <section className={styles.faqsAccordion}>
          <section className={styles.faqsAccordionIndex}>
            <h2>FAQS</h2>
            <Accordion defaultActiveKey="0">
              {faqs.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>
                    <h5>{item.question}</h5>
                  </Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </section>
        </section>
        <section>
          {" "}
          {/* //////////CallBack Form section///////////// */}
          <section className={styles.callbackFormSection}>
            <div className={styles.callbackFormContent}>
              <div className={styles.callbackFormContentPG}>
                <p>
                  We launched our 1-2-1 theory sessions in 2019 and since then
                  we have helped many people pass who thought they never could.
                  Our theory sessions focus on building your knowledge from the
                  ground up to ensure you don’t just know the answers but
                  understand them. We have had people from all over the country
                  coming to us looking for help in preparing for their exam.
                  Currently we have a 90% pass rate which is 41.5% higher than
                  the national average!
                </p>
              </div>
              <CallBackForm />
            </div>
            <div className={styles.productTab}>
              <ProductTab />
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////// */}
        <section className={styles.TSvideosContanierSection}>
          <div className={styles.theorySupportContentVideosec}>
            <video controls poster={poster} preload="none">
              <source
                src="src/assets/videos/Video-1smartlearner-B.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        {/* ////////////////////////// */}
        <section className={styles.whyChooseshortSection}>
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
                need to get yourself on the road. We take into consideration
                your times requirements, lesson location and anything else you
                require then choose the perfect instructor for you. We even
                offer 1-2-1 theory and simulator training with a tutor for those
                who feel need additional support to pass their exams. So, forget
                the rest and learn with the best! Call us today on{" "}
                <a href="">
                  {" "}
                  <span>0800 118 2001</span>{" "}
                </a>
                to get yourself booked in.
              </p>
              <div className={styles.whyChooseshortSectionButtons}>
                <button className={styles.whyChooseshortSectionReadmore}>
                  Read More
                </button>
                <button className={styles.whyChooseshortSectionCallus}>
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* //////////////////////////////// */}
        <section className={styles.drivenBefore}>
          <h2>Search for driving lessons in your area</h2>
          <DrivenForm />
        </section>
        {/* ////////////////////////////////// */}
        <section className={styles.nextFormSection}>
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
                  <FaStar id={styles.redStar} /> Highest-rated Independent
                  driving school in the West Midlands
                </li>
                <li>
                  {" "}
                  <FaStar id={styles.redStar} /> Manual and Automatic tuition
                </li>
                <li>
                  {" "}
                  <FaStar id={styles.redStar} /> Over 40 instructors both male
                  and female
                </li>
              </ul>
            </div>
            <div className={styles.nextFormContainer}>
              <CallBackForm />
            </div>
          </div>
        </section>
        {/* ///////////////Testimonials////// */}
        <section>
          <Testemonial/>
        </section>

        {/* ///////////////////////Reviews//////// */}
        <section>
          <Review />
        </section>
        {/* //////////////faqs//////////////////////// */}
      </section>
    </>
  );
}
