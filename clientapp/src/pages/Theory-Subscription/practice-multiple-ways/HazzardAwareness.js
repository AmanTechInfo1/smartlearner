import React from "react";
import styles from "./PracticeMultiple.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FaChess,
  FaBed,
  FaExclamation,
  FaUserClock,
  FaBeer,
  FaCarCrash,
  FaTachometerAlt,
  FaArrowCircleRight,
  FaDizzy,
  FaMobileAlt,
  FaMotorcycle,
  FaBiking,
  FaWalking,
} from "react-icons/fa";
import hazardAwareness from "../../../assets/images/Hazard-awarenessExclamantion.png";
import schoolBusStop from "../../../assets/images/school-bus-300x300.jpg";
import redYellowLorry from "../../../assets/images/red-yellow-lorry-sign-300x183.jpg";
import haltedVehicle from "../../../assets/images/halted-vehicle.jpg";
import deviation from "../../../assets/images/deviation.jpg";
import { Link } from "react-router-dom";



export default function HazzardAwareness() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section
          className={styles.imageSection}
          style={{ backgroundColor: "Orange" }}
        >
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Hazard Awareness</h2>
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
              <img src={hazardAwareness} alt="hazardAwareness" />
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2 style={{ color: "Orange" }}>What is Hazard Awareness?</h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The 5th topic from the multiple-choice section of the theory
                    test is hazard awareness. As with many of the theory test
                    topics, it’s rather straightforward to grasp. Hazards are
                    things on the road that can force you to slow down, change
                    your direction or come to a stop. It’s important that you’re
                    able to identify these hazards early on so that you can make
                    your observations and reduce your speed accordingly.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* //////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2
            style={{
              color: "Orange",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Important Terms
          </h2>
          <hr style={{ opacity: "1", border: "1px solid Orange" }}></hr>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img
                  src={schoolBusStop}
                  alt="schoolBusStop"
                  style={{
                    maxWidth: "200px",
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "contain",
                  }}
                />
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    This sign on a vehicle indicates that the vehicle is a
                    school bus.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img
                  src={redYellowLorry}
                  alt="redYellowLorry-img"
                  style={{
                    maxWidth: "200px",
                    width: "100%",
                    aspectRatio: "1/1",
                  }}
                />

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    These warning markers are fitted to vehicles over 13 metres
                    long, large goods vehicles and rubbish skips placed in the
                    road.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img
                  src={haltedVehicle}
                  alt="haltedVehicle-img"
                  style={{
                    maxWidth: "200px",
                    width: "100%",
                    aspectRatio: "1/1",
                  }}
                />

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    This sign is found on slow-moving or stationary works
                    vehicles. Overtake on the left, as indicated by the arrow.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <img
                  src={deviation}
                  alt="deviation"
                  style={{
                    maxWidth: "200px",
                    width: "100%",
                    aspectRatio: "1/1",
                  }}
                />

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    This sign means a sharp deviation to the left. (right if the
                    arrows face right)
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 style={{ textAlign: "center", color: "orange" }}>
            Key Terms to learn.
          </h2>
          <hr style={{ opacity: "1", border: "2px solid orange" }}></hr>
          <p style={{ textAlign: "center" }}>
            Here are the key terms you will need to know in order to pass the
            multiple-choice section: Hazard Awareness
          </p>
          <p style={{ textAlign: "center" }}>
            Whenever you drive towards a hazard you should reduce your speed.
            Hazards are anything that may make you slow down, change direction,
            or stop. Again, if you’re stuck for an answer always select the
            safest option.
          </p>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}></div>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          {/* <div className={styles.thMultipleChioceHeader}>
            <h2 style={{ color: "orange" }}>Vehicle Safety</h2>
          </div> */}
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaChess id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Anticipation</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Definition: The action of anticipating something;
                          expectation or prediction.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Anticipation in driving is crucial to keeping yourself
                          and others safe. Think about how your actions will
                          affect those around you.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBed id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Tiredness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Definition: The state of needing to sleep or rest.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Being tired while driving is extremely dangerous,
                          especially on a motorway. You should always ensure you
                          are well-rested before driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaExclamation id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Attention</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Definition: The action of dealing with or taking
                          special care of someone or something.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Driving always requires your full attention. You
                          should always try to limit distractions when driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaUserClock id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Reaction Time</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Definition: The interval between a situation and the
                          response.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          When driving you should be aware of both your own and
                          others’ reaction times. Older people usually have
                          slower reaction times.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBeer id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Drink/Drug Driving</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Definition: Driving under the influence of alcohol or
                          drugs.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Alcohol and drugs affect your reaction time by making
                          you drowsy. This is the same for some medications.
                          Always check the label or with your doctor before
                          driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaCarCrash id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Hazard Awareness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Definition: To ensure that you are alert to the
                          possibility of hazardous situations, and know what
                          steps to take.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          The behaviour of other vehicles, cyclists, and
                          pedestrians can forewarn you of potentially hazardous
                          scenarios.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaTachometerAlt id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Speeding</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Definition: The act of breaking the speed limit while
                          driving.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Inappropriate speed doesn’t always mean breaking the
                          speed limit. It can mean driving too fast for your
                          conditions, such as near schools or in wet/icy
                          conditions.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////////////////// */}
        <section>
          <div className="d-flex flex-column flex-md-row bg-warning p-4">
            <div className="w-100 w-md-50">
              <iframe
                width="680"
                height="383"
                src="https://www.youtube.com/embed/OxOiZ7kXh2k"
                title="Drinking &amp; Driving - How Alcohol Affects Your Body?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="w-100 w-md-50 p-4">
              <h2 className="h4 font-weight-bold mb-2">
                The affects of alcohol on driving
              </h2>
              <hr
                className="border-top border-light mb-4"
                style={{ opacity: "1" }}
              />
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Less control.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />A false sense of confidence.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Poor judgment of speed.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Reduced co-ordination.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Reduced concentration.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Poor judgment.
                </li>
                <li className="d-flex align-items-center mb-2 gap-2">
                  <FaArrowCircleRight />
                  Get a conviction for driving whilst unfit through drink or
                  drugs and your car insurance premium will rise significantly.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          {/* <div className={styles.thMultipleChioceHeader}>
            <h2 style={{ color: "orange" }}>Vehicle Safety</h2>
          </div> */}
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBed id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Tiredness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          When driving, if you start to feel tired you should
                          always find a safe, convenient place to stop and rest.
                          If no such place is immediately available you should
                          open a window and allow a good supply of fresh air
                          into the car.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Top tip: On a long journey always take regular rest
                          breaks. Regular stops help maintain concentration.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaDizzy id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Illness</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          If you have any current illness that is likely to
                          negatively affect your driving ability then you should
                          not drive. You should also avoid driving if you are
                          taking medication that makes you tired or drowsy.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Note: If you start to suffer from an illness, which
                          affects your driving, you should inform the licensing
                          authority.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaMobileAlt id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Distractions</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Maintaining high levels of concentration is essential
                          for road safety. Whenever your concentration levels
                          dip you should stop and rest until you are capable of
                          maintaining the high levels of concentration needed to
                          drive safely.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Top Tip: Avoid looking at maps, touching your radio,
                          or using mobile phones while driving.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          {/* <div className={styles.thMultipleChioceHeader}>
            <h2 style={{ color: "orange" }}>Vehicle Safety</h2>
          </div> */}
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaMotorcycle id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Motorbike</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          When emerging from a junction you should be extra
                          cautious, as your windscreen pillars can easily hide a
                          motorbike.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          When making a u-turn or turning right you should look
                          over your shoulder to check for motorbikes.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          When hanging lanes or moving out to overtake always be
                          careful incase a motorbike is on your right.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaBiking id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Cyclist</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Give cyclists plenty of room. They may wobble or
                          swerve to avoid drains or potholes.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          When travelling in slow traffic, before you turn left,
                          check for cyclists filtering through the traffic on
                          your left.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          At junctions or traffic lights give them time to turn
                          or pull away.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.column}>
                  <span style={{ backgroundColor: "orange" }}>
                    <FaWalking id={styles.featuresIcon} />
                  </span>
                  <h3 style={{ color: "orange" }}>Pedestrians</h3>
                  <div className={styles.hazardTestWorkListDiv}>
                    <ul type="none">
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Where there is no pavement you should be looking out
                          for pedestrians walking on the road.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          In residential roads with parked cars you should be
                          cautious of small children running out or crossing.
                        </p>
                      </li>
                      <li>
                        <IoMdArrowDropright id="listrightIcon" />{" "}
                        <p>
                          Children and older people are more likely to misjudge
                          your speed and attempt to cross. You should always
                          take extra care when approaching these types of road
                          users
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* /////////////////////////////////////// */}
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
            <Link to="/takequizCatName/Hazard-Awareness">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </section>

        {/* ////////////////////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
