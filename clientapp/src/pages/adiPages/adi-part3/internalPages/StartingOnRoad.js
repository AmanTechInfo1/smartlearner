import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import EnquiryForm from "../../../../components/forms/EnquiryForm";

export default function StartingOnRoad() {
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
            <h2>Using Our Online Diary System</h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
          </div>
        </section>

        {/* //////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>Login and & pupils</h2>
              <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="700"
                    height="394"
                    src="https://www.youtube.com/embed/2sIL_Rmk21w"
                    title="How to Login and add pupils"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>Accept Lessons & Block Diary</h2>
              <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="700"
                    height="394"
                    src="https://www.youtube.com/embed/SmIzhPydWCQ"
                    title="Accept Lessons and block off your diary"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>Login and & pupils</h2>
              <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="700"
                    height="394"
                    src="https://www.youtube.com/embed/qEqj7WyToWQ"
                    title="How to Book, Cancel, Rearrange and Mark Complete Lessons"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.hazardTestWorkListDiv}>
              <h2>Accept Lessons & Block Diary</h2>
              <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="700"
                    height="394"
                    src="https://www.youtube.com/embed/69JjmWjTH2Y"
                    title="Delete, restore, payments and notes"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Prior to your first lesson:</h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The office will have begun booking in customers for you, it is
                  important you log onto the diary and CONFIRM these bookings so
                  that your pupils receive their confirmation texts.{" "}
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  During this process it is important to contact each learner
                  directly so that you are prepared for their first lesson. You
                  will have watched the videos above and received a log in to
                  the dairy upon completing your 40 hours training and applying
                  for your trainee badge. The videos will help guide you on how
                  to input learner information.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  This is an example of what your first phone call with your
                  students should sound like:
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Hi there,<br></br> This is Joe calling, your assigned driving
                  instructor from Smartlearner. How are you doing today? I
                  wanted to touch base about our upcoming lesson scheduled for X
                  time on X date. We’ve allocated X hours for it. Is that still
                  convenient for you?
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Before we get started, I’d like to learn a bit about your
                  driving background. Have you had any previous experience
                  behind the wheel? Have you taken any driving tests, or do you
                  have any upcoming ones scheduled?
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Depending on your experience level, we can tailor our first
                  lesson accordingly. If you’re new to driving, we’ll start with
                  the basics, perhaps getting acquainted with the cockpit. If
                  you’ve driven before, I’d love to hear what you’d like to
                  focus on during our initial session.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Could I also grab your emergency contact details? It’s always
                  good to have them on hand just in case. Feel free to provide
                  me with the details of your mum, dad, partner, friend, or any
                  family member you prefer.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Before our lesson, I’ll be sending you a license check code,
                  which you can find on the government website. It’s a quick
                  formality to ensure your provisional license is in order.
                  Additionally, I’ll send you a link to the VARK questionnaire,
                  which helps me understand your preferred learning style.
                  Please fill that out and bring it along with your provisional
                  license to our session.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The office should have made you aware but just to double
                  check, we do hold a 24 hour cancellation policy so please let
                  me know outside of this if you need to rearrange any sessions.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>To confirm, the address I have to pick you up is X</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Do you have any questions or concerns ahead of our first
                  lesson?
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>Great, looking forward to meeting you on X date!</p>
              </li>
              <h2
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                How to do a license check code:
              </h2>
              <li>
                <IoMdArrowDropright id="listrightIcon" />
                <p>Send this link to your learners :</p>
              </li>
            </ul>
            <li>
              <IoMdArrowDropright id="listrightIcon" />
              <p>https://www.gov.uk/view-driving-licence </p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />
              <p>You can then check this here: </p>
            </li>
            <li>
              <IoMdArrowDropright id="listrightIcon" />
              <p>https://www.gov.uk/check-driving-information</p>
            </li>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Adding notes to system after lessons</h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>

            <div className={styles.innerTheorySupportContent}>
              <div className={styles.theorySupportContentVideo}>
                <iframe
                  width="1120"
                  height="631"
                  src="https://www.youtube.com/embed/tkosXE8LSyk"
                  title="Marking Lessons Complete - Standards Check Support"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////// */}
        <section>
            <EnquiryForm/>
        </section>

        {/* ////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
