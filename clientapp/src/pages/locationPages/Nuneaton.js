import React from "react";
import styles from "../css/home.module.css";
import HomeDesign from "../../components/ui/homeContent/HomeDesign";
import BookingSection from "../../components/ui/homeContent/BookingSection";
import { Helmet } from "react-helmet-async";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ChristmasBanner from "../../components/ui/newHomeBanner/ChristmasBanner";

export default function Nuneaton() {
  return (
    <div className={styles.homepage}>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          driving school in Nuneaton | driving lessons in Nuneaton{" "}
        </title>
        <meta
          name="description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the Nuneaton with advanced technology. "
        />
        <meta
          property="og:title"
          content=" Smartlearner driving school in Nuneaton, driving lessons in Nuneaton"
        />
        <meta
          property="og:description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the Nuneaton with advanced technology. "
        />
        <link rel="canonical" href="https://smartlearner.com/nuneaton" />
      </Helmet>
      <section>
              <ChristmasBanner />
            </section>
    </div>
  );
}
