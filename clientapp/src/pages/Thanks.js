import React from "react";
import styles from "./css/LoginRegister.module.css";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Thanks = () => {
  return (
    <>
      <div className={styles.loginRegisterPage}>
        <div className="opicity"></div>
        <div
          style={{
            maxWidth: "1500px",
            margin: "0px auto",
            paddingTop: "4rem",
            paddingBottom: "2rem",
            position: 'sticky',
            minHeight: '100vh',
            textAlign:'center'
          }}
        >
          <section className={styles.loginRegisterSection2}>
            <div
              className={styles.loginformContainer}
              style={{ paddingTop: "4rem" }}
            >
              <section className={styles.loginRegistration}>
                <div className={styles.loginheading}>
                  <h1>{"Welcome"}</h1>
                  <p>Thanks for choosing SmartLearner Driving School.</p>
                </div>
                <h2>Thanks </h2>
                <p style={{color:'white'}}>
                  Congratulations! You have successfully registered and are now
                  a member of the SmartLearner Driving School. Thank you for
                  your time.
                </p>
              </section>
              <div className={styles.formFooter}>
                <Link type="button" to={"/home"}>
                  Proceed to Home Page
                </Link>
              </div>
            </div>
          </section>
          <div className={styles.allbtns}>
            <Link to="/Theory-Portal" style={{ textDecoration: "none" }}>
              {" "}
              <button id={styles.btn}>
                 Proceed to TheoryPortal <MdKeyboardDoubleArrowRight />
              </button>
            </Link>
            <Link
              to="/ADI-Training-Portal"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <button id={styles.btn}>Proceed to PDI Portal <MdKeyboardDoubleArrowRight /></button>
            </Link>
            <Link to="/driving-Lessons" style={{ textDecoration: "none" }}>
              {" "}
              <button id={styles.btn}>
                Book a lesson <MdKeyboardDoubleArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thanks;
