import React from "react";
import { motion } from "framer-motion";
import style from "./velentine.module.css";
import bigheart from "../ "
export default function VelentineBanner() {
  return (
    <div>
      {" "}
      <div className={style.valentineContainer}>
        {/* BIG HEART – Pumping Animation */}
        <motion.img
          src={bigheart} // replace with your big heart image
          alt="Big Heart"
          className={style.bigHeart}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* SMALL HEARTS – Fade Up Vapor Animation */}
        <div className={style.smallHeartsWrapper}>
          {/* Heart 1 */}
          <motion.img
            src={smallheart1}
            className={style.smallHeart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          {/* Heart 2 */}
          <motion.img
            src={smallHeart2}
            className={style.smallHeart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          {/* Heart 3 */}
          <motion.img
            src={smallheart3}
            className={style.smallHeart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
}
