import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./homeContent/BookingSectio.module.css"; // We'll style it here
import { ArrowLeft, ArrowRight } from "lucide-react";
import banner1 from "../../assets/images/banner7.png";
import banner2 from "../../assets/images/banner4.png";
import banner3 from "../../assets/images/banner6.png";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Want to try a new driving adventure?",
    subtitle: "new driving adventure",
    description:
      "Experience a thrilling treasure-hunt-style driving adventure designed to take you and your team across scenic routes within the UK. Discover hidden clues, complete fun challenges, and enjoy a memorable journey that mixes learning, excitement, and teamwork — perfect for both new and experienced drivers.",
    image: banner1,
    link: "/home/our-courses",
  },
  {
    id: 2,
    title: "Learn with expert instructors",
    subtitle: "driving excellence",
    description:
      "Train under the guidance of our highly qualified and friendly instructors who make every session engaging and confidence-boosting. From mastering vehicle control to understanding road safety and advanced maneuvers, our lessons are structured to help you become a responsible and skilled driver.",
    image: banner2,
    link: "/driving-instructor-packages/instructor-packages",
  },
  {
    id: 3,
    title: "Your journey to confidence starts here",
    subtitle: "drive with confidence",
    description:
      "Whether you’re preparing for your first test or refining your skills, we provide personalized driving sessions tailored to your comfort and progress. Our modern teaching approach, combined with real-world practice, helps you build confidence, stay safe, and enjoy the freedom of the open road.",
    image: banner3,
    link: "/Theory-Support/Theory-package",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      <div
        className={styles.mobileBackground}
        style={{ backgroundImage: `url(${slides[current].image})` }}></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className={styles.slide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}>
          <div className={styles.textSection}>
            <p className={styles.subtitle} style={{ marginBottom: "0px" }}>
              {slides[current].subtitle}
            </p>
            <h1 className={styles.title}>{slides[current].title}</h1>
            <p className={styles.description}>{slides[current].description}</p>
            <Link to={slides[current].link}>
              <button className={styles.exploreBtn}>
                <span className={styles.text}>Explore Now</span>
                <span className={styles.arrow}>→</span>
              </button>
            </Link>
          </div>

          <div className={styles.imageSection}>
            <motion.img
              key={slides[current].image}
              src={slides[current].image}
              alt="Driving Adventure"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div className={styles.arrows}>
        <button onClick={prevSlide}>
          <ArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <ArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(i)}></button>
        ))}
      </div>
    </div>
  );
}
