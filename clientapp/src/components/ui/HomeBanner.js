import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./homeContent/BookingSectio.module.css"; // We'll style it here
import { ArrowLeft, ArrowRight } from "lucide-react";
import banner1 from "../../assets/images/clockCheck.png";
import banner2 from "../../assets/images/quizAttempt.png";
import banner3 from "../../assets/images/banner6.png";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Theory support gets you test ready",
    subtitle: "Everything You Need to Pass Your Driving Theory Test",
    description:
      "Access powerful theory learning products built to boost your knowledge, improve accuracy, and build real test confidence. Study at your own pace with interactive content, practice questions, and clear explanations tailored for learner drivers.",
    image: banner3,
    link: "/home/our-courses",
  },
  {
    id: 2,
    title: "Practice real theory test questions with our quizes",
    subtitle: "Attempt Theory Quizzes & Track Progress",
    description:
      "Test your knowledge with carefully designed driving theory quizzes based on real exam standards. Each quiz attempt helps you understand your strengths and identify areas that need improvement.",
    image: banner2,
    link: "/driving-instructor-packages/instructor-packages",
  },
  {
    id: 3,
    title: "Book Your Driving Test Time",
    subtitle: "Plan Smart. Test Ready.",
    description:
      "Select your preferred time and stay prepared for your driving test with ease.",
    image: banner1,
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
