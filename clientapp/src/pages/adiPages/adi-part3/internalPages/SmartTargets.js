import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import smartTargetsImg from "../../../../assets/images/smartImgLogo.png";

export default function SmartTargets() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>AWARD-WINNING DRIVING LESSONS</h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  Forget the rest,
                  <br /> learn with the best!
                </h2>
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

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Smart targets</h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
            <img
              src={smartTargetsImg}
              alt="learningStyleImg"
              style={{ maxWidth: "600px", width: "100%" }}
            />
            {/* <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Learning styles are a popular concept in psychology and
                  education and are intended to identify how people learn best.
                  The VARK model of learning styles suggests that there are four
                  main types of learners: visual, auditory, reading/writing, and
                  kinaesthetic.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The idea that students learn best when teaching methods and
                  school activities match their learning styles, strengths, and
                  preferences grew in popularity in the 1970s and 1980s.
                  However, most evidence suggests that personal learning
                  preferences have little to no actual influence on learning
                  outcomes.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The 3rd level, goals, and context of driving, deal with
                  driver’s decisions relating to the purpose of their journey,
                  the influence of passengers, and the time the drive takes
                  place. The decisions taken by drivers at this level can have a
                  serious impact on driver risk.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  While the existing research has found that matching teaching
                  methods to learning styles has no influence on educational
                  outcomes, the concept of learning styles remains extremely
                  popular.
                </p>
              </li>
            </ul> */}
          </div>
        </section>
        {/* /////////////////////////////////////// */}
        <section
          style={{
            maxWidth: "1200px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="d-flex flex-wrap justify-content-center gap-3 p-4">
            <div className="col-12 col-md-2 text-center">
              <p>
                The ADI and pupil need to work as a team, to focus on specific
                goals to be achieved during the lesson. For example, signal in
                good time at every junction.
              </p>
            </div>
            <div className="col-12 col-md-2 text-center">
              <p>
                Both pupil and ADI need to know when the goal has been achieved,
                and have a measure for success, such as completing 5 turns
                unaided.
              </p>
            </div>
            <div className="col-12 col-md-2 text-center">
              <p>
                Goals must be realistic and attainable if the pupil is to be
                successful. If a goal is not achievable then the pupil may feel
                they are not progressing.
              </p>
            </div>
            <div className="col-12 col-md-2 text-center">
              <p>
                Goals should be relevant to the overall theme of improving the
                performance at junctions. For example, using and applying the
                MSPSL routine.
              </p>
            </div>
            <div className="col-12 col-md-2 text-center">
              <p>
                Can the goal be reached or at least advanced, within the lesson
                time frame? Think about using short term realistic goals rather
                than long term goals.
              </p>
            </div>
          </div>
          <p style={{ color: "red", fontSize: "1rem", textAlign: "center" }}>
            As a driving instructor, setting clear and achievable goals for your
            learners is essential for their progress and success. One effective
            method for goal setting is using SMART targets. SMART stands for
            Specific, Measurable, Achievable, Relevant, and Time-bound. This
            guide will help driving instructors understand how to use SMART
            targets with their learners and when it is appropriate to implement
            them.
          </p>
        </section>
        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>When to Empower Learners to Set Their Own SMART Targets:</h2>

            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  1. At the Beginning of Lessons: Why: Encourage learners to
                  express what specific skills they want to improve, fostering a
                  sense of ownership and motivation. -Example: “By the end of
                  this lesson, I aim to confidently navigate roundabouts with
                  proper signalling and lane positioning.”
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  2. After Assessing Previous Lessons: Why: Reflecting on past
                  performance empowers learners to identify areas for
                  improvement and set personalised targets. Example: “In the
                  next two sessions, I will work on smoother gear transitions
                  during city driving to enhance overall driving comfort.”
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  3. When Introducing a New Skill: – Why: Empowering learners to
                  set their own targets when learning a new skill fosters
                  engagement and allows them to break down the process into
                  manageable steps. -Example: “Over the next three lessons, I
                  will progressively build confidence in merging onto highways,
                  focusing on adjusting speed and using signals effectively.”
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  4. Before Advancing to a Higher Skill Level: Why: Learners can
                  take an active role in their progression by setting targets
                  that align with advancing to more complex driving scenarios.
                  Example: “Before attempting advanced city driving, I aim to
                  confidently handle moderate traffic situations on urban
                  roads.”
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  5. To Address Specific Weaknesses: Why: Learners can identify
                  their own challenges and set targets to overcome specific
                  weaknesses, promoting a personalized learning experience.
                  Example: “In the next two sessions, I will enhance my
                  awareness of traffic signs, specifically focusing on
                  understanding right-of-way and yielding.”
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>TASK:</h2>

            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>Write down a personal SMART target for yourself</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Now write down TWO example SMART targets a learner could set
                  during their lessons.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////// */}
      </div>
    </div>
  );
}
