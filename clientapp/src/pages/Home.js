import styles from "./css/home.module.css";
import hallOfFame1 from "../assets/images/halloffame11.png";
import hallOfFame2 from "../assets/images/halloffame22.png";
import hallOfFame3 from "../assets/images/halloffame33.png";
import hallOfFame4 from "../assets/images/halloffame44.png";
import hallOfFame5 from "../assets/images/halloffame5.png";
import hallOfFame6 from "../assets/images/halloffame6.png";
import hallOfFame7 from "../assets/images/halloffame7.png";
import callbackimg from "../assets/images/callbacksupportimage.jpg";

import { motion, AnimatePresence } from "framer-motion";

import { Sparkles, Calendar, BookOpenText } from "lucide-react";

import GoldTrophyImg from "../assets/images/goldTrophyImg.jpg";
import silverTrophyImg from "../assets/images/silverTrophyImg.jpg";

import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { serviceFormSchema } from "../schemas/master";
import { enquiryData } from "../redux/features/enquirySlice";

import HomeDesign from "../components/ui/homeContent/HomeDesign";
import ImagesCarousel from "../components/imageCarousel/ImagesCarousel";
import CallBackForm from "../components/forms/CallBackForm";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";
import ProductShowcase from "../components/ui/productShowCase/Productshowcase";
import SubscriptionPdi from "../components/ui/productShowCase/SubscriptionPdi";
import { useState } from "react";
import HomeBanner from "../components/ui/HomeBanner";
import TheoryProductShowCase from "../components/ui/productShowCase/TheoryProductShowCase";
import DrivingLessonsCarousel from "../components/ui/drivingLesson/DrivingLessonsCarousel";
import { Element, scroller } from "react-scroll";
import { useParams } from "react-router-dom";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToRef = (ref) => {
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };
  const lessonsRefCallback = (node) => {
    if (node && activeSection === "lessons") {
      scrollToRef(node);
    }
  };

  const pdiRefCallback = (node) => {
    if (node && activeSection === "pdi") {
      scrollToRef(node);
    }
  };

  const theoryRefCallback = (node) => {
    if (node && activeSection === "theory") {
      scrollToRef(node);
    }
  };

  const handleShow = (section) => {
    setActiveSection(section); // Scroll will happen when section mounts
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  };

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
    <div className={styles.homepage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smartlearner driving school in coventry Driving lessons</title>
        <meta
          name="description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the West Midlands with advanced technology. "
        />
        <meta
          property="og:title"
          content="Smartlearner driving school in coventry"
        />
        <meta
          property="og:description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the West Midlands with advanced technology. "
        />
      </Helmet>
      <section>
        <HomeBanner />
      </section>

      <div className={styles.homepageContainerDiv}>
        {/* ///////////////////////////////////////////////////////////////// */}
        <Element name="our-courses-section">
          <section className="relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
            {/* Animated Background Orbs */}
            <motion.div className="absolute -top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
            <motion.div className="absolute bottom-0 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-center z-10">
              Ready to Elevate Your Skills?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-10 text-center max-w-2xl z-10">
              Choose your path below — whether you’re booking personalized
              lessons or a PDI session, we’ve got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center items-center z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}>
                <button
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                  onClick={() => handleShow("lessons")}
                  className={`flex flex-col items-center justify-center w-64 sm:w-auto font-bold rounded-2xl px-8 py-6 text-lg shadow-lg transition-all duration-300
        ${
          activeSection === "lessons"
            ? "bg-yellow-400 text-black shadow-yellow-300 shadow-xl scale-105"
            : "bg-white text-black hover:bg-yellow-200"
        }`}>
                  <Calendar className="w-6 h-6 " />
                  Book Lessons
                </button>
              </motion.div>

              {/* BOOK PDI BUTTON */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}>
                <button
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                  onClick={() => handleShow("pdi")}
                  className={`flex flex-col items-center justify-center w-64 sm:w-auto font-bold rounded-2xl px-8 py-6 text-lg shadow-lg transition-all duration-300
        ${
          activeSection === "pdi"
            ? "bg-yellow-400 text-black shadow-yellow-300 shadow-xl scale-105"
            : "bg-white text-black hover:bg-yellow-200"
        }`}>
                  <Sparkles className="w-6 h-6" />
                  Become an instructor
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}>
                <button
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                  onClick={() => handleShow("theory")}
                  className={`flex flex-col items-center justify-center w-64 sm:w-auto font-bold rounded-2xl px-8 py-6 text-lg shadow-lg transition-all duration-300
        ${
          activeSection === "theory"
            ? "bg-yellow-400 text-black shadow-yellow-300 shadow-xl scale-105"
            : "bg-white text-black hover:bg-yellow-200"
        }`}>
                  <BookOpenText className="w-6 h-6 " />
                  Book Theory
                </button>
              </motion.div>
            </motion.div>
          </section>
        </Element>
        {/* //////////////////////////////////////////////////////////// */}
        <AnimatePresence mode="wait">
          {activeSection === "lessons" && (
            <motion.section
              key="lessons"
              ref={lessonsRefCallback}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full">
              <ProductShowcase />
            </motion.section>
          )}

          {activeSection === "pdi" && (
            <motion.section
              key="pdi"
              ref={pdiRefCallback}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full">
              <SubscriptionPdi />
            </motion.section>
          )}

          {activeSection === "theory" && (
            <motion.section
              key="theory"
              ref={theoryRefCallback}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full">
              <TheoryProductShowCase />
            </motion.section>
          )}
        </AnimatePresence>

  

        <section>
          <DrivingLessonsCarousel />
        </section>

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
              See Why People Choose SmartLearner to PASS Their Driving Test.
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

        {/* ////////////////////////Reviews section //////////////////////// */}
        <section>
          <StaticTestimonial />
        </section>

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
