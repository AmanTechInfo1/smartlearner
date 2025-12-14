import React from "react";
import { motion } from "framer-motion";
import styles from "./RabbitBanner.module.css";

import logo from "../../../assets/images/White-Logo-Fixed-1024x174.webp";
import tokanImg from "../../../assets/images/bg1.webp";
import rabbitEar from "../../../assets/images/rabit/rabitEar.png";
import rabbits from "../../../assets/images/rabit/rabits.png";

export default function RabbitBanner() {
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

      <div className={styles.headingName}>
        <img id={styles.rabbitEar} src={rabbitEar} alt="rabbit-ear" />

        <h1>
          HOPPING <br /> INTO <br /> SUCCESS
        </h1>
        <img id={styles.rabbits} src={rabbits} alt="rabbits" />
      </div>
    </div>
  );
}
