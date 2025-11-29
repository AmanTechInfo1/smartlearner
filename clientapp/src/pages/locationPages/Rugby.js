import React from "react";
import styles from "../css/home.module.css";
import HomeDesign from "../../components/ui/homeContent/HomeDesign";
import BookingSection from "../../components/ui/homeContent/BookingSection";
import { Helmet } from "react-helmet-async";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ChristmasBanner from "../../components/ui/newHomeBanner/ChristmasBanner";

export default function Rugby() {
  return (
    <div className={styles.homepage}>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>driving school in Rugby | driving lessons in Rugby</title>
        <meta
          name="description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the Rugby with advanced technology. "
        />
        <meta
          property="og:title"
          content="driving school in Rugby | driving lessons in Rugby"
        />
        <meta
          property="og:description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the Rugby with advanced technology. "
        />
        <link rel="canonical" href="https://smartlearner.com/rugby" />
      </Helmet>
      <section>
              <ChristmasBanner />
            </section>
    </div>
  );
}
