import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";

import {
  FaCheckCircle,
} from "react-icons/fa";
import trailerLarge from "../../../assets/images/trailer-large-1024x492.jpg";
import roofRack from "../../../assets/images/Roof-Racks-20-1024x683.jpg";
import CarryingPassenger from "../../../assets/images/carryingPassenger.jpg"
import { Link } from "react-router-dom";



export default function VehicleLoading() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "purple" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Vehicle Loading </h2>
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
              <img src={trailerLarge} alt="trailerLarge" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "purple", fontSize: "2rem" }}>
                  What is vehicle loading?
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    The 14th topic is Vehicle Loading. The vehicle loading
                    section of the driving theory test contains questions about
                    how to load your vehicle, towing trailers and caravans, and
                    the use of roof racks, etc. The questions in this section
                    are all to do with the safety of yourself and other road
                    users, minimizing environmental impact and costs of fuel, as
                    well as staying within the law.
                  </p>
                </li>
                <p style={{ fontWeight: "700" }}>
                  Effects of vehicle loading on fuel consumption.
                </p>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    It is important to note that the extra weight you’re
                    carrying will increase your vehicle’s fuel consumption. This
                    will increase even more if you’re carrying a load on a roof
                    rack due to the increased wind resistance and drag this
                    creates.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center" }}>Loading your vehicle safely.</h2>

          <div className={styles.hazardTestWorkListDiv}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Before attempting to load your vehicles with people or goods,
                  you should ensure that you know how to do so safely and the
                  effects that carrying loads may have.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  There may be a tendency to think that as long as you have
                  space in your car, it is safe to fill it. However, this would
                  be incorrect and unsafe as you’d be putting yourself at risk
                  of overloading your car. Overloading can seriously affect the
                  vehicle’s handling, especially the steering and braking, and
                  therefore makes it much harder to drive smoothly, and respond
                  to road conditions and hazards in a safe and timely manner.
                </p>
              </li>
              <p style={{ fontWeight: "700" }}>
                Once you have ensured that you have a suitable amount to load
                into your vehicle without overloading, you need to make sure
                that you load your vehicle carefully to avoid upsetting its
                stability. You can do this by:
              </p>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Making sure that the load is securely fastened, with rope,
                  bungee cord or a seatbelt, so that it can’t move when you’re
                  cornering or braking.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>
                  Ensuring that your load doesn’t obstruct your view when you’re
                  driving, or stick out where it could be dangerous or
                  obstructive to other road users.
                </p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>Distributing the weight evenly.</p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={roofRack} alt="roofRack" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "purple", fontSize: "2rem" }}>
                  Car Handling when carrying a heavy load.
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Carrying a load may affect how your car handles, even if
                    it’s not overloaded. For example, carrying goods on a roof
                    rack will increase wind resistance which may make your
                    vehicle less stable. If you are using a roof rack, you need
                    to be aware of the fact that the load is exposed to the
                    elements, and you may therefore need to protect it from
                    rain, sleet or snow by covering it. Specially-designed roof
                    boxes are available, which cut down the wind resistance and
                    help to ensure that loads are kept secure and dry.
                  </p>
                </li>
                <p style={{ fontWeight: "700" }}>
                  The effect of carrying goods on your car’s handling and
                  suspension mean that, when you’re carrying or towing a heavy
                  load, you may need to make adjustments to your vehicle, such
                  as:
                </p>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Increasing the air pressure of your tires.</p>
                </li>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>Adjusting the aim of your headlights.</p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {/* <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2> */}

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <img src={CarryingPassenger} alt="CarryingPassenger" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "purple", fontSize: "2rem" }}>
                  Carrying Passengers safely.
                </h2>
                <li>
                  <FaCheckCircle id="listrightIcon" />{" "}
                  <p>
                    Carrying goods can be tricky, but ensuring the safety of
                    passengers is vital. All passengers MUST wear seat belts,
                    provided they are fitted. This is the responsibility of you
                    as the driver, regardless of the passenger’s age. If the
                    passenger is under 14 years of age, they must wear a
                    suitable restraint when travelling in your vehicle. The type
                    of restraint varies with the age of the child and may be a
                    baby carrier, child seat or booster seat (and can be front
                    or rear facing) but it MUST be suitable for the child’s
                    weight and size.
                  </p>
                </li>
                
              </ul>
            </div>
          </section>
        </section>

        <section className={styles.mockTestContainerSection}>
          <div className={styles.mockTestHeadingContainerDIv}>
            <h2 style={{ textAlign: "center", color: "red" }}>Test YourSelf</h2>
          </div>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Vehicle-Loading">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
