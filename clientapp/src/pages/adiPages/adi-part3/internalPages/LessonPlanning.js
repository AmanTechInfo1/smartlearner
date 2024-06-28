import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import smartTargetsImg from "../../../../assets/images/smartImgLogo.png";
import learningGoals from "../../../../assets/images/learningGoals.png";
import pupilAbility from "../../../../assets/images/pupilAbility.png"
import practiceCar from "../../../../assets/images/practiceArea.png"
import adaptingImg from "../../../../assets/images/adaptingLesson.png"
export default function LessonPlanning() {
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
              <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button id={styles.btn}>Contact Us</button>
                </a>
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
            <h2>Lesson planning</h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
            <p style={{ textAlign: "center" }}>
              There are 4 key parts to lesson planning. We will cover these in
              the below topics.
            </p>
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

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Identifying the pupil’s learning goals and needs</h2>
            <img src={learningGoals} alt="learningStyleImg" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  There are two elements to this and both must be addressed in
                  the “Recap at the start” at the test centre. You should have
                  agreed with the pupil at the end of the previous lesson what
                  the lesson goals* would be next time. They should be confirmed
                  again with the pupil on the drive to the test centre, on
                  Standards Check day. The examiner is then briefed on these
                  goals by you prior to the lesson starting.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  In the “Recap at the Start”, you should confirm through Q&A
                  what the pupil’s goals are, to see if they have changed
                  (hopefully not!). You should be asking the pupil what they
                  want to practice and why. Actively listening and acting on any
                  concerns is important as is taking note of body language which
                  may betray pupil nerves or anxiety. Questions to check
                  theoretical knowledge of the topic(s) prior to driving away,
                  are recommended.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Appropriate lesson structure for pupil's ability</h2>
            <img src={pupilAbility} alt="learningStyleImg" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The lesson structure should have been provisionally agreed
                  prior to driving away from the test centre. The lesson should
                  reflect agreed goals and pupil progress, ideally from simple,
                  to more complex situations, in line with the pupil’s ability
                  to cope with each driving situation encountered.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The lesson might include a briefing (using a diagram) or an
                  instructor demonstration showing how to perform the exercises
                  being practiced. It might have neither of these but be simply
                  a development lesson in an attempt to improve agreed goals and
                  eliminated errors.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Suitable Practice Area</h2>
            <img src={practiceCar} alt="learningStyleImg" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Practicing in an area or on a route that the pupil can cope
                  with in order to achieve learning goals, is vital. A safe
                  learning environment in which the pupil might be stretched to
                  the edge of their comfort is preferable. However, pupils might
                  perceive instructor anxiety, may try too hard, or feel
                  stressed because an examiner is present.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Be ready if the pupil acts differently from normal or
                  struggles to reach their usual ability level. They may need
                  more support and instruction which might require them to move
                  to an area with fewer hazards and risks. Be flexible within
                  the training area and respond swiftly if the pupil isn’t
                  coping.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Adapting the lesson when appropriate</h2>
            <img src={adaptingImg} alt="learningStyleImg" />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  There are several reasons why a lesson may need to be adapted:
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • The pupil is struggling to drive at their usual level due to
                  an examiner being present.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • The Agreed route is busier than usual, presenting more
                  hazards and complex situations than the pupil can cope with.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • The pupil is committing basic errors which require
                  correction and they are undermining the original goals that
                  were agreed upon.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  A typical scenario might develop when, for instance, the goals
                  involve improving the pupil’s ability to roundabouts. On the
                  drive to the first roundabout, the pupil stalls the car twice
                  and struggles emerging at T junctions. The instructor should,
                  in agreement with the pupil, correct these driver errors
                  before attempting roundabouts. If confidence and ability are
                  restored and if time allows, a return to the original lesson
                  goals would be logical.
                </p>
              </li>
              
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}

        {/* //////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
