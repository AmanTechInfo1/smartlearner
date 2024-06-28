import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import learningStyleImg from "../../../../assets/images/learningStyleImg.png";
export default function LearningStyles() {
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
            <h2>
              Learning styles / VARK questionnaire / Client-centered learning
            </h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
            <h2>
              The part 3 exam and Standards Check exam are the same format
            </h2>
            <ul type="none">
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
            </ul>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>The VARK model / Questionnaire</h2>

            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  There are many different ways of categorising learning styles,
                  but Neil Fleming’s VARK model is one of the most popular.
                  Fleming introduced an inventory in 1987 that was designed to
                  help students and others learn more about their individual
                  learning preferences.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  According to the VARK model, learners are identified by
                  whether they have a preference for:
                </p>
              </li>
            </ul>
            <img
              src={learningStyleImg}
              alt="learningStyleImg"
              style={{ maxWidth: "600px", width: "100%" }}
            />
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////// */}
        <section
          style={{
            maxWidth: "1200px",
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <div className="container mx-auto p-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 text-center mb-4">
                <p className="mb-4">
                  Visual learners prefer the use of images, diagrams, and
                  graphics to access and understand new information and
                  techniques.
                </p>
                <h3 className="font-weight-bold mb-2 text-danger">
                  Visual Strategies for Teaching
                </h3>
                <ul className="list-unstyled text-left">
                  <li className="mb-2">
                    Utilize graphic organizers such as charts, graphs, and
                    diagrams.
                  </li>
                  <li className="mb-2">Redraw pages from memory.</li>
                  <li className="mb-2">
                    Replace important words with symbols or initials.
                  </li>
                  <li>
                    Highlight important key terms in corresponding colours.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center mb-4">
                <p className="mb-4">
                  These learners prefer to learn through listening and speaking.
                  They learn best through repetition of instructions and the use
                  of mnemonic devices.
                </p>
                <h3 className="font-weight-bold mb-2 text-danger">
                  Aural Strategies for Teaching
                </h3>
                <ul className="list-unstyled text-left">
                  <li className="mb-2">
                    Record summarized notes and listen to them on tape.
                  </li>
                  <li>
                    Talk it out. Have a discussion with others to expand upon
                    the understanding of a topic.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center mb-4">
                <p className="mb-4">
                  These Learners prefer traditional methods, such as reading or
                  writing. They learn best by taking notes and written learning
                  materials.
                </p>
                <h3 className="font-weight-bold mb-2 text-danger">
                  Read/Write Strategies for Teaching
                </h3>
                <ul className="list-unstyled text-left">
                  <li className="mb-2">
                    Write, write and rewrite words and notes.
                  </li>
                  <li className="mb-2">
                    Reword main ideas and principles to gain a deeper
                    understanding.
                  </li>
                  <li>
                    Organize diagrams, charts, and graphic organizers into
                    statements.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center mb-4">
                <p className="mb-4">
                  Kinesthetic learners best understand information through doing
                  and seeing. They are hands-on learners and enjoy figuring
                  things out themselves.
                </p>
                <h3 className="font-weight-bold mb-2 text-danger">
                  Kinaesthetic Strategies for Teaching
                </h3>
                <ul className="list-unstyled text-left">
                  <li className="mb-2">
                    Use real-life examples, applications, and case studies in
                    your summary to help with abstract concepts.
                  </li>
                  <li className="mb-2">Redo lab experiments or projects.</li>
                  <li>
                    Utilize pictures and photographs that illustrate your idea.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        
        {/* /////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>TASK:</h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Complete the vark questionnaire on yourself, use your results
                  to help you through your training.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Please bring this with you to your first lesson with your
                  trainer{" "}
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  <a
                    style={{ color: "red", textDecoration: "none" }}
                    href="https://drive.google.com/file/d/12pPWyL6VMW_HTvT9IfrDRzlrPrtjQ-we/view"
                  >
                    CLICK HERE TO SEE THE FULL VARK QUESTIONNAIRE
                  </a>
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  You should ask every student prior to their first lesson to
                  complete a Vark questionnaire, this helps you understand in
                  advance the best way to deliver lesson material.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Client centered learning</h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  People learn in different ways and at different speeds. If
                  someone who likes time to reflect on their learning is forced
                  to move on to the next thing too quickly it could slow down
                  their progress. Or if someone who likes to learn by trying
                  things out is made to watch too many demonstrations without a
                  go, they will get frustrated.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Client centered learning is an approach to learning that takes
                  into account how the learner prefers to learn. When people
                  learn in this way they are more likely to retain information
                  and skills. People are also more likely to keep learning if
                  they are encouraged to take responsibility for their learning
                  at an early stage – this is the second aim of client-centred
                  learning, the first aim is to raise self–awareness.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Actively listen to what your pupil is telling you is getting
                  in the way of their learning, so you’ll be well-equipped to
                  help them achieve their learning goals
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Work together with your pupil to help them to set their own
                  goals to learn and develop practical skills and knowledge via
                  experience based learning.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Show your pupils trust and respect that they’re trying to be
                  constructive and find solutions. Your pupils will be much more
                  likely to take your advice and guidance if you accept and
                  respect who they are.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Encourage your pupils to self-evaluate their progress and
                  become a more responsible and safe driver.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The greater the use of client-centred learning, the more
                  effective your instruction is likely to be.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
