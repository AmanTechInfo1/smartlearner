import React from "react";
import styles from "../css/home.module.css";
import HomeDesign from "../../components/ui/homeContent/HomeDesign";
import BookingSection from "../../components/ui/homeContent/BookingSection";
import { Helmet } from "react-helmet-async";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
      <div className={styles.homepageContainerDiv}>
        <section className={styles.homeSection}>
          <div className={styles.homeContainer}>
            <section className="homecontent-Sec">
              <div className="opicity"></div>
              <div className="home-banner-flex">
                <div className="home-content-D">
                  <h2 className="home-content-D-h2">
                    Your guide to learning to drive in Nuneaton.
                  </h2>
                  <p
                    className="home-content-D-p"
                    style={{ fontSize: "1.1rem" }}>
                    Our local driving instructors in Nuneaton know the area like
                    the back of their hand. Our instructors are well trusted
                    because of their combination of intricate local knowledge
                    and excellent training. They’ve been navigating the areas
                    highways and byways for years and will ensure you’re
                    prepared for everything that could be thrown at you. They’ll
                    pass on all of this knowledge and make sure you’re prepared
                    for everything and anything on test day. If you want to
                    boost your chances of success, there’s only one choice to
                    make.
                  </p>
                  <div className="home-bannerbnt-sec">
                    <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                      <button className="button-style">Contact Us</button>
                    </Link>
                    <span>
                      {" "}
                      <a
                        href="tel:+4402475092784"
                        style={{ textDecoration: "none" }}>
                        <IoCallSharp className="gradient-icon" /> 02475092784
                      </a>
                    </span>
                  </div>
                </div>

                <div className="banner-img">
                  <Link
                    to="/Theory-Support"
                    style={{ textDecoration: "none", padding: "8px" }}>
                    <p id="home-drivingImg-1">Pass Your Theory Test With Us</p>
                  </Link>
                  <a
                    href="https://www.gov.uk/apply-first-provisional-driving-licence"
                    style={{ textDecoration: "none", padding: "8px" }}>
                    <p id="home-drivingImg-2">Apply For Provisional Licence </p>
                  </a>
                  <Link
                    to="/home/our-courses"
                    style={{ textDecoration: "none", padding: "8px" }}>
                    <p id="home-drivingImg-3">Book Lessons With Us</p>
                  </Link>
                </div>
              </div>

              {/* ///////////////////////////// */}
            </section>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////// */}
        <section>
          <BookingSection />
        </section>
      </div>
    </div>
  );
}
