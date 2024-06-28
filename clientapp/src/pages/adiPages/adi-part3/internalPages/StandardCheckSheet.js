import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";

export default function StandardCheckSheet() {
  return (
    <div>
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
              <h2>Introduction to part 3</h2>
              <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
              <h2>
                The part 3 exam and Standards Check exam are the same format
              </h2>
              <p>
                <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1122510/adi-part-3-test-report-form.pdf">
                  Click here to see the full standards check sheet{" "}
                </a>
              </p>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="1120"
                    height="631"
                    src="https://www.youtube.com/embed/Oaz4yJYh_8U"
                    title="SmartLearner - Instructor Training - Understanding the standards check sheet"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          {/* //////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>What the DVSA Monitors</h2>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The Driver and Vehicle Standards Agency (DVSA) monitors 4
                    indicators about approved driving instructors (ADIs).
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The indicators use data from the driving tests your pupils
                    have taken in the last 12 months on a rolling basis.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The data is for pupils you brought for a car driving test
                    and It will include every driving test centre you’ve used.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    DVSA records your ADI number from your badge at the start of
                    the driving test. This links the test to you.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Many falsely believe that taking your badge out of the
                    window for a pupil who is not test ready, means that the
                    test will not be recorded against you. This is NOT true, the
                    driving examiners see you often at the test centre, and know
                    your vehicle and vehicle registration.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    There are trigger points for each of the 4 indicators. If
                    you reach the trigger point for 3 or more of the indicators,
                    DVSA will write to ask you to book a standards check.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* //////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>What the indicators are</h2>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    DVSA looks at this data for the rolling 12-month period:
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>The average number of driving faults per test</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>The average number of serious faults per test</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The percentage of tests where the driving examiner had to
                    take physical action in the interests of public safety
                    Overall pass rate
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* ////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <h2 style={{ textAlign: "center" }}>The Trigger Points</h2>
            <p style={{ textAlign: "center" }}>
              Each of the 4 indicators has a trigger point.
            </p>
            <section className={styles.AdiParttwoDisplayFlex}>
              <div className={styles.hazardTestWorkListDiv}>
                <ul type="none">
                  <h2>Indicator</h2>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>Average number of driving faults per test</p>
                  </li> 

                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      % of driving tests where the examiner had to take physical
                      action
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      Be a saloon, hatchback or estate car in good working
                      condition - you cannot use a convertible.
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>Driving test pass rate</p>
                  </li>
                </ul>
              </div>
              <div className={styles.hazardTestWorkListDiv}>
                <ul type="none">
                  <h2> Trigger</h2>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p> 6 or greater</p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>0.55 or greater</p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>10% or higher</p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>55% or lower</p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          {/* //////////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    If you reach the trigger point for 3 or more of the
                    indicators, DVSA will write to ask you to book a standards
                    check.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    If you reach the trigger point for fewer than 3 of the
                    indicators, you’re less likely to be asked to take a
                    standards check. However, you might still be asked to book a
                    standards check during each 4-year registration period.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    You can request
                    <a
                      style={{ color: "red", textDecoration: "none" }}
                      href="https://www.gov.uk/guidance/request-your-approved-driving-instructor-adi-driving-test-data-report"
                    >
                      {" "}
                      a report from DVSA that shows your data.
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* ///////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>
                If you bring fewer than 5 pupils for driving tests or you do not
                teach learners
              </h2>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The indicators are used if you bring 5 or more learners to
                    the test within a 12 month period.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    If you bring fewer than 5 pupils, or you do not teach
                    learners, you will have to take one standards check once
                    during each 4-year period you’re registered as an ADI.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    You can also request a standards check test early You can
                    book this online. It does not cost anything.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    You’ll need your: driving licence number ADI personal
                    reference number
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    You can be removed from the ADI register if you do not book
                    or go to your standards check.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    A DVSA examiner will call to ask if you want to schedule a
                    30-minute phone call before your standards check. During the
                    30-minute call, the examiner will talk to you about:
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– How your pupils perform when they take driving tests</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– Where you can get support or find more information</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>– What will happen when you take your standards check</p>
                </li>
              </ul>
            </div>
          </section>

          {/* ////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <h2 style={{ textAlign: "center" }}>Examples of Trigger Scoring</h2>

            <section className={styles.AdiParttwoDisplayFlex}>
              <div className={styles.hazardTestWorkListDiv}>
                <ul type="none">
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
                </ul>
              </div>
              <div className={styles.hazardTestWorkListDiv}>
                <ul type="none">
                  <h2>
                    {" "}
                    Example: 3 triggers met (standards check is triggered)
                  </h2>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      {" "}
                      You took your pupils for 30 tests throughout the last 12
                      months.
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      Across all 30 tests, your pupils made a combined total of
                      255 driving faults. This is an average of 8.5 per test
                      (255 ÷ 30).
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      Across all 30 tests, your pupils made a combined total of
                      17 serious driving faults. This is an average of 0.57 per
                      test (17 ÷ 30).
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      Across all 30 tests, driving examiners had to take
                      physical action in 3 tests. This is 10% of tests (3 ÷ 30,
                      multiplied by 100).
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      In total, 18 of the 30 tests were passes and 12 were
                      fails. This is a pass rate of 60% (18 ÷ 30, multiplied by
                      100).
                    </p>
                  </li>
                  <li>
                    <IoMdArrowDropright id="listrightIcon" />{" "}
                    <p>
                      You will need to take a standards check because 3 of the 4
                      triggers have been met.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </section>

          {/* /////////////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>How is the Standards Check marked / part 3 graded ?</h2>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>The standards check is marked as follows:</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>There are 3 possible grades</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    The test has a maximum possible score of 51 you must score
                    at least 31 to pass.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Grade A: A high standard of instruction to obtain a grade A
                    you will need 43 or higher.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Grade B: A satisfactory result. Anything between 31 and 42
                    will achieve this grade.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    FAIL Unsatisfactory. If your marks are 30 or below then this
                    would be deemed as a failure.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Lets have a closer look at the marking sheet
                </h2>
                <h2
                  style={{
                    color: "red",
                    fontSize: "2rem",
                    textAlign: "center",
                  }}
                >
                  Lesson Planning
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>Did you identify the pupil’s learning goals and needs?</p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Obviously without getting this right it would be difficult
                    to achieve a good lesson.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was the agreed lesson structure appropriate for the pupil’s
                  experience and ability?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Both you and the pupil must agree the lesson structure, but
                    ultimately it is your responsibility to ensure that the
                    lesson is suitable to the students needs, and that it is
                    neither too difficult or to easy, your aim here is to ensure
                    that learning takes place.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Were the practice areas suitable?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    You must ensure that the route you choose is suitable,
                    obviously safety is the main issue but you must choose a
                    route which will provide enough of a challenge for your
                    pupil to learn and progress.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was the lesson plan adapted, when appropriate, to help the
                  pupil work towards their learning goals?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Adapt your lesson where necessary, for instance if your
                    original plan is Dual carriageways and your pupil misses
                    door mirror checks on route to the dual carriageway you need
                    to change tact and correct this fault before going down the
                    slip road.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>Total marks available for this section = 12</p>
                </li>
              </ul>
            </div>
          </section>
          {/* //////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>Risk Management</h2>
              <ul type="none">
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Did the trainer ensure that the pupil fully understood how the
                  responsibility for risk would be shared?
                </h2>

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    You should explain to your pupil what each of your
                    responsibilities are , and also explain about dual controls
                    and that you will use them if necessary.
                  </p>
                </li>

                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Were directions and instructions given to the pupil clear and
                  given in good time?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Obviously you need to speak clearly and give any directions
                    at the appropriate time.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was the trainer aware of the surroundings and the pupil’s
                  actions?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    This means you must be planning ahead for events on the
                    road, you must see them in time to then ensure your pupil is
                    reacting in the appropriate way.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was any verbal or physical intervention by the trainer timely
                  and appropriate?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    If you need to intervene either verbally or physically then
                    the timing of your intervention is of the utmost importance,
                    too soon and you are not really giving the pupil chance to
                    react or too late which could be safety critical.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was sufficient feedback given to help the pupil understand any
                  potential safety critical incidents?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Any safety critical incidents must be addressed correctly
                    and also it is your responsibility to ensure that the pupil
                    understands what went wrong and why it was safety critical.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>Total marks available for this section = 15 </p>
                </li>
              </ul>
            </div>
          </section>
          {/* //////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>Teaching and Learning Strategies</h2>
              <ul type="none">
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was the teaching style suited to the pupil’s learning style
                  and current ability?
                </h2>

                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Similar to choosing the lesson plan, you need to teach it at
                    the correct level, and adapt to your pupils abilities.
                  </p>
                </li>

                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was the pupil encouraged to analyse problems and take
                  responsibility for their learning?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Ask questions which make your pupil think and reason things
                    out.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Were opportunities and examples used to clarify learning
                  outcomes?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Don’t miss these opportunities, lots of things happen around
                    you whilst on the road, many times these can be used as
                    learning opportunities.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was the technical information given comprehensive, appropriate
                  and accurate?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Any information which you give should be appropriate and
                    correct.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Was the pupil given appropriate and timely feedback during the
                  session?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Praise your pupil when appropriate, If your pupil makes a
                    mistake then question why it was done.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Were the pupils queries followed up and answered?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Make sure that you answer any questions your pupil asks, if
                    you are asked an awkward or technical question which you are
                    unsure of the answer then just say I am not certain but I
                    will find out for you.
                  </p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Did the trainer maintain an appropriate non-discriminatory
                  manner throughout the session?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>You can score 3 points here just for being yourself!</p>
                </li>
                <h2
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  At the end of the session – was the pupil encouraged to
                  reflect on their own performance?
                </h2>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    At the end of the lesson you should allow a few minutes for
                    a recap, and discuss with your pupil what went well, what
                    went not so well, and what they feel they have achieved.
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>Total marks available for this section = 24 </p>
                </li>
              </ul>
            </div>
          </section>
          {/* /////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>What are the top 5 reasons for failing</h2>
              <ul type="none">
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    These 5 compentences are often overlooked by many PDIs’ or
                    ADI’s taking the exam causing them to fail their test:
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Adapted the lesson plan, when appropriate, to help the pupil
                    work towards their learning goals
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Taught the lesson in a style suited to the pupil’s learning
                    style and current ability
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Encouraged the pupil to analyse problems and take
                    responsibility for their learning
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Given the pupil appropriate and timely feedback during the
                    session
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    Given enough feedback to help the pupil understand any
                    potentially safety-critical incidents
                  </p>
                </li>
                <li>
                  <IoMdArrowDropright id="listrightIcon" />{" "}
                  <p>
                    It is important to go through these areas in depth with your
                    trainer to ensure you are hitting all points
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* //////////////////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
}
