import React from "react";
import Lplateimg from "../../assets/images/L-Plate.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { FaMusic } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";

export default function Alertness() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Forget the rest, learn with the best!</h1>
              </div>

              <div className={styles.heading2}>
                <h2>Alertness</h2>
              </div>
              <div className={styles.btn}>
                <button id={styles.btn}>Contact Us</button>
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
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="610"
                    height="400"
                    src="https://www.youtube.com/embed/QoeSNbQJkTQ"
                    title="End Distracted Driving - Share this video and help make our roads safer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              {/* <ul type="none">
                  <h2>
                    Example: 2 triggers met (standards check is not triggered)
                  </h2>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      You took your pupils for 20 tests throughout the last 12
                      months.
                    </p>
                  </li>

                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      Across all 20 tests, your pupils made a combined total of
                      95 driving faults. This is an average of 4.75 per test (95
                      ÷ 20).
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      Across all 20 tests, your pupils made a combined total of
                      12 serious driving faults. This is an average of 0.6 per
                      test (12 ÷ 20).
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      Across all 20 tests, a driving examiner had to take
                      physical action in one test. This is 5% of tests (1 ÷ 20,
                      multiplied by 100).
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      You will not need to take a standards check because only 2
                      of the 4 triggers have been met.
                    </p>
                  </li> 
                </ul> */}
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <h2> What is alertness?</h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The first topic from the theory test is alertness. This
                    refers to how alert a driver is whilst behind the wheel. The
                    road can be an unpredictable place, so it’s important that a
                    driver does not get distracted by things such as: mobile
                    phones and music, is prepared for any potential hazard, and,
                    follows road signs and markings correctly.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    So, in this section, we have broken the content down into
                    various sections in order to make revision for the topic
                    easier. Additionally, it will also serve as a good way to
                    apply the knowledge to your own driving.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////// */}
        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2>Avoid Distractions!</h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaMusic id={styles.featuresIcon} />
                  </span>
                  <h3>Radio</h3>

                  <p>
                    Adjusting the radio is one of the most common forms of
                    distracted driving. At any given time, more than 600,000
                    drivers are manipulating electronic devices, like radios,
                    while driving, according to The National Highway Traffic
                    Safety Administration.
                  </p>
                </div>
                <div className={styles.column}>
                  <span>
                    <FaLocationDot id={styles.featuresIcon} />
                  </span>
                  <h3>Sat Nav</h3>

                  <p>
                    Vehicle navigation systems can be useful when driving on
                    unfamiliar routes. However, they can also distract you and
                    cause you to lose control if you try to adjust them while
                    driving. Park up in a convenient and safe place before
                    adjusting them.
                  </p>
                </div>
                <div className={styles.column}>
                  <span>
                    <FaCar id={styles.featuresIcon} />
                  </span>
                  <h3>Safety & Your Vehicle</h3>

                  <p>Topic 3</p>
                </div>
                <div className={styles.column}>
                 
                    <span>
                      <FaMobile id={styles.featuresIcon} />
                    </span>
                    <h3>Mobile</h3>
                
                  <p>
                    TUsing mobile phones can cause drivers to take their eyes
                    off the road, their hands off the steering wheel, and their
                    minds off the road and the surrounding situation. Studies
                    suggest that drivers using a mobile phone are approximately
                    four times more likely to be involved in a crash than a
                    driver who does not use a phone while driving.
                  </p>
                </div>
                
              </div>
            </section>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Clear instruction in good time</h2>
            <img style={{backgroundColor:'white'}} src={clearTiming} alt="clearTimeimg" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  When giving directions to a pupil, time must be allowed for
                  the pupil to understand what is being asked, identify where
                  they are about to go, and then start (and complete) the MSPSL
                  routine. Directions have to be given early (at least 12 car
                  lengths away).
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  They could include non moving objects as a rough guide on
                  where to start the routine.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>• “Take the second road on the left”</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Instructions are something different altogether! They can take
                  one of two forms; telling pupils precisely what to do (full or
                  guided talk through) or promoting the correct actions via open
                  Q&A technique.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  If there is time for a question, and the pupil can be expected
                  to deal with the developing hazard, then this form of
                  instruction is preferable as it promotes thought, is more
                  client centred and gives responsibility to pupil. However, if
                  in the instructor’s opinion the pupil might struggle with the
                  situation, direct talk through would be required to keep low
                  risk.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* //////////////////////////////////////// */}
      </div>
    </div>
  );
}
