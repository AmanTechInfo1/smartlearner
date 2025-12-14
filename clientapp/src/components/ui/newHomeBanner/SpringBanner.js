import React from "react";
import { motion } from "framer-motion";
import styles from "./SpringBanner.module.css";
import yellowBees from "../../../assets/images/SpringImg/yellowbees.png";
import logo from "../../../assets/images/White-Logo-Fixed-1024x174.webp";
import tokanImg from "../../../assets/images/bg1.webp";

export default function SpringBanner() {
  return (
    <div className={styles.containerSpring}>
      <div id={styles.logoImgBanner}>
        <img src={logo} alt="" className={styles.logoImgBanner} />
        <p>DRIVING SCHOOL</p>
      </div>

      <motion.div
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        id={styles.tokenImg}>
        <img src={tokanImg} className={styles.tokenImg} alt="tokanImg" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        id={styles.tokenImg2}>
        <img src={tokanImg} className={styles.tokenImg} alt="tokanImg" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        id={styles.tokenImg3}>
        <img src={tokanImg} className={styles.tokenImg} alt="tokanImg" />
      </motion.div>

      <motion.img
        src={yellowBees}
        className={styles.bee}
        animate={{
          x: ["120%", "80%", "50%", "20%", "-20%"],
          y: [0, 50, -30, 20, 0],
          rotate: [0, -6, 6, -4, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={styles.headingName}>
        <h1>
          READY, SET,
          <br /> SPRING!
        </h1>
      </div>
    </div>
  );
}
