import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaPlus,
  FaFileAlt,
  FaCar,
  FaTools,
  FaCarCrash,
  FaCheckCircle,
} from "react-icons/fa";
import essentialDocs from "../../../assets/images/essential-documents-logo.png";
import MotorCertificates from "../../../assets/images/certificateOfMotor.jpg";
import motCertificate from "../../../assets/images/motCertificate.gif";
import certificate2 from "../../../assets/images/CERTIFICATE2.png";
import { Link } from "react-router-dom";




export default function EssentialDocuments() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "red" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Essential Documents</h2>
              </div>
              <div className={styles.btn}>
              <a style={{textDecoration:"none"}} href="tel:+4402475092784"><button id={styles.btn}>Contact Us</button></a>
              </div>
            </div>
            <div className={styles.video}>
              <img src={Lplateimg} alt="LogoImg" />
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={essentialDocs} alt="essentialDocs" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "red", fontSize: "2rem" }}>
                  What are your essential documents?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The 12th topic is essential documents, it’s a pretty
                    self-explanatory topic. It revolves entirely around the
                    documents, paperwork and legal requirements that car owners
                    have. This includes things like your MOT certificate,
                    driving licence and vehicle registration certificate. If you
                    want to pass the theory test, and also make sure that you’re
                    legally allowed to be on the road, you will need to know
                    this topic inside and out.
                  </p>
                </li>
              </ul>
              <ul type="none">
                <h2 style={{ color: "red", fontSize: "2rem" }}>
                  What are your essential documents?
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Licence - knowing what type of driving licenses you need.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Insurance - car insurance cover types and what you need to
                    drive legally.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    MOT Certificate - know the legal requirements for vehicle
                    testing and what the test covers.
                  </p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Vehicle Excise Duty (tax disc).</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Vehicle Registration Document/Certificate.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////// */}
        <section className={styles.faIconsSection}>
          <span>
            <FaCarCrash id={styles.faIconsSection} />
          </span>

          <h2>Car Insurance</h2>
        </section>

        {/* ///////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center" }}>
            Laws and requirments for road insurance
          </h2>

          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  You must have a valid insurance cover that covers you for at
                  least third party liability.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Third Party Car Insurance covers - injury to another person,
                  damage to someone's property, damage to other vehicles. This
                  is the minimum level of insurance you need to drive on public
                  roads
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Third Party Fire and Theft Car Insurance covers the above plus
                  damage to your vehicle through fire and theft.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  A cover note is a document issued before you receive your
                  insurance certificate.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  You cannot pay road tax for your vehicle without having valid
                  car insurance.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  The maximum specified fine for driving without insurance is
                  £5000.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={MotorCertificates} alt="MotorCertificates" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    A certificate of motor insurance is proof that you hold the
                    minimum 3rd party insurance for your vehicle, as required by
                    law. It is a one- or two-page document that you can get from
                    your insurance company or broker, if you used one.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////////// */}

        <section className={styles.faIconsSection}>
          <span>
            <FaTools id={styles.faIconsSection} />
          </span>

          <h2>MOT</h2>
        </section>
        {/* /////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  An MOT involves dozens of checks on your car, ranging from the
                  brakes and fuel system to lights, mirrors, seatbelts,
                  windscreen wipers, and exhaust systems. It doesn’t cover the
                  condition of the engine, clutch, and gearbox.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  All cars over three years old need a MOT certificate. The only
                  time you can drive a car without an MOT certificate is when
                  driving to an MOT test centre for an pre-arranged appointment.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  An MOT test checks your car is roadworthy, that all parts work
                  properly and the car is safe to drive, and that it keeps to
                  the legal limits for exhaust emissions.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  If you drive a car without an MOT certificate you will
                  invalidate your insurance.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={motCertificate} alt="motCertificate" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The MOT certificate confirms that your vehicle at the time
                    of its test met the minimum acceptable environmental and
                    road safety standards required by law. It doesn’t mean that
                    the vehicle is roadworthy for the life of the certificate
                    and isn’t a substitute for regular maintenance.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* //////////////////////////////////////////////// */}
        <section className={styles.faIconsSection}>
          <span>
            <FaCar id={styles.faIconsSection} />
          </span>

          <h2>Vehicle Exise Duty (Road Tax)</h2>
        </section>
        {/* /////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <p style={{ textAlign: "center" }}>
            An MOT involves dozens of checks on your car, ranging from the
            brakes and fuel system to lights, mirrors, seatbelts, windscreen
            wipers, and exhaust systems. It doesn’t cover the condition of the
            engine, clutch, and gearbox.
          </p>
          <p style={{ textAlign: "center", fontWeight: "700" }}>
            To prove to a police officer your vehicle is taxed you are required
            to present the following documents:
          </p>
          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>Current certificate of insurance (COI).</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>A valid driving license.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>A valid MOT certificate.</p>
              </li>
              <p style={{ textAlign: "center" }}>
                A police officer has the right to ask that you produce driving
                documents, and if you are unable to do so there and then, you
                will be required to produce them at a police station within
                seven days. All documents must be in your name and not anyone
                else’s.
              </p>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.faIconsSection}>
          <span>
            <FaFileAlt id={styles.faIconsSection} />
          </span>

          <h2>Vehicle Registration Document (V5C)</h2>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <p style={{ textAlign: "center" }}>
            Vehicle Registration Document (V5C) The V5C is a paper document
            issued by the DVLA to the registered keeper of a vehicle and is used
            to confirm proof of ownership and the specific details of a vehicle.
          </p>
          <p style={{ textAlign: "center", fontWeight: "700" }}>
            Important details about the Vehicle Registration Certificate:
          </p>
          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  This lists all the important details about the vehicle and the
                  registered keeper of the vehicle.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  You must update your Vehicle Registration Certificate when you
                  move house.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  The registered vehicle keeper is legally responsible for
                  ensuring that a Vehicle Registration Certificate (V5C) is kept
                  up to date.
                </p>
              </li>
              <p style={{ textAlign: "center", fontWeight: "700" }}>
                You should contact the vehicle licensing authority when:
              </p>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You change your vehicle.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>You change your name.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>Your permanent address changes.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>Your health affects your driving.</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>Your eyesight does not meet the required standards.</p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={certificate2} alt="certificate2" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The V5C logbook (also known as the V5 form or document)
                    records the Registered Keeper (or Keepers) of the vehicle.
                    When you have performed that check, and when you actually
                    buy a car (and take possession of it), the owner must
                    legally give you the green ‘new keeper’s details’ slip
                    (V5C/2) of their V5 form.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////// */}
        <section className={styles.faIconsSection}>
          <span>
            <FaPlus id={styles.faIconsSection} />
          </span>

          <h2>Vehicle Registration Document (V5C)</h2>
        </section>

        {/* ///////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  To supervise a learner driver you must be 21 years of age and
                  have held a full licence for more than 3 years in that
                  category.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  If you get six penalty points on your licence within two years
                  of passing your practical driving test your driving licence
                  will be revoked. You will have to take and pass the theory and
                  practical tests again.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  You must tell the DVLA if your health is likely to affect your
                  driving or if your eyesight doesn't meet the required
                  standard.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  If a police officer ask to see your documents but you don't
                  have them with you, you must take them to a police station
                  within 7 days.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  If your vehicle is unused or off the road it must have either
                  a SORN declaration or valid insurance.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  The Pass Plus scheme is to help new drivers improve their
                  basic driving skills. Taking it can reduce the cost of car
                  insurance.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////// */}
        <section className={styles.mockTestContainerSection}>
        <div className={styles.mockTestHeadingContainerDIv}>
          <h2 style={{textAlign:'center',color:'red'}}>Test YourSelf</h2>
        </div>
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Documents">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </section>
        {/* ///////////////////////////////// */}
      </div>
    </div>
  );
}
