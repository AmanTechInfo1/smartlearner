import React from "react";
import { motion } from "framer-motion";
import style from "./NewHomeBanner.module.css";
import { FaTrophy } from "react-icons/fa";

import trophy1 from "../../../assets/images/goldTrophyImg.jpg"; // replace with your trophy image
import logo from "../../../assets/images/White-Logo-Fixed-1024x174.png";
import trophy2 from "../../../assets/images/goldTrophyImg.jpg";
import trophy3 from "../../../assets/images/silverTrophyImg.jpg";
import tokanImg from "../../../assets/images/bg1.PNG";
import roadsafty1 from "../../../assets/images/bg2.PNG";
import roadsafty2 from "../../../assets/images/bg3.PNG";
import roadsafty3 from "../../../assets/images/bg4.PNG";
import roadsafty4 from "../../../assets/images/bg6.PNG";
import roadsafty5 from "../../../assets/images/bg7.PNG";

export default function NewHomeBanner() {
  const rules = [
    { id: 1, img: roadsafty1, title: "Careless Driving" },
    { id: 2, img: roadsafty2, title: "Distracted" },
    { id: 3, img: roadsafty3, title: "Not Wearing a Seatbelt" },
    {
      id: 4,
      img: roadsafty4,
      title: "Speeding",
    },
    { id: 5, img: roadsafty5, title: "Drink/Drug Driving" },
  ];

  return (
    <div className={style.bannersnewdiv}>
      <section className={style.bannersnewSection}>
        <motion.div
          animate={{
            x: [0, 15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          id={style.tokenImg}>
          <img src={tokanImg} className={style.tokenImg} />
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
          id={style.tokenImg2}>
          <img src={tokanImg} className={style.tokenImg} />
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
          id={style.tokenImg3}>
          <img src={tokanImg} className={style.tokenImg} />
        </motion.div>
        <section className={style.bannerSections}>
          <motion.div
            className={style.headingtextbanner}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <div>
              <img src={logo} alt="" className={style.logoImgBanner} />
            </div>
            <div className={style.bannerHeadingtext}>
              <h2>
                Road and <span>Safety Month</span>
              </h2>
            </div>
            <section className={style.gridBox}>
              <div className={style.gridSection}>
                {rules.map((rule) => (
                  <div key={rule.id} className="">
                    <div className="relative">
                      <img
                        src={rule.img}
                        alt={rule.title}
                        className={style.gridImgs}
                      />
                      <span className="absolute -top-1 -left-1 bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                        {rule.id}
                      </span>
                    </div>
                    <p className={style.gridImgsTitle}>{rule.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Right Car Image Section */}
        </section>
      </section>
    </div>
  );
}
