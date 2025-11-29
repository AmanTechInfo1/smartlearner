import React from "react";
import styles from "../css/home.module.css";
import HomeDesign from "../../components/ui/homeContent/HomeDesign";
import BookingSection from "../../components/ui/homeContent/BookingSection";
import { Helmet } from "react-helmet-async";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ChristmasBanner from "../../components/ui/newHomeBanner/ChristmasBanner";

export default function Solihull() {
  return (
    <div className={styles.homepage}>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>driving school in solihull | driving lessons in solihull</title>
        <meta
          name="description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the Solihull with advanced technology. "
        />
        <meta
          property="og:title"
          content="  driving school in solihull | driving lessons in solihull"
        />
        <meta
          property="og:description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the Solihull with advanced technology. "
        />
        <link rel="canonical" href="https://smartlearner.com/solihull" />
      </Helmet>
      <section>
              <ChristmasBanner />
            </section>
    </div>
  );
}
