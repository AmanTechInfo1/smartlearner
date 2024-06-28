import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import adaptingImg from "../../../../assets/images/adapted teaching.png";
import EncourageImg from "../../../../assets/images/encouragingImg.png";
import TechnicalInfo from "../../../../assets/images/TechnicalInfo.png";
import ExampleImg from "../../../../assets/images/example.png";
import apropriateTime from "../../../../assets/images/apropriateTime.png";
import pupilImg from "../../../../assets/images/pupilQuestion.png";
import nodiscrimination from "../../../../assets/images/noDiscrimination.png";

export default function InstructionFeedBack() {
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
            <h2>Giving instruction and feedback</h2>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  There has been much debate about driving instructors having to
                  become coaches, otherwise, they will fail their standards
                  check, this is not the case! What is important is that
                  instructors should be helping their pupils in an active way,
                  placing their pupils at the center of proceedings.{" "}
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  This client-centered approach has proven to be more beneficial
                  in helping pupils take responsibility for their learning and
                  help them become more self-aware. Knowing how thoughts and
                  feelings motivate behaviour when driving are the essential
                  ingredients for a proactive, safety-conscious driver.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Driving lessons should be client-centered not instructor-led
                  employing the following skills will help:
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>• Engendering and maintain a good rapport with the pupil</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>• Effective questioning using simple, open questions</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Actively listening to what the pupil say on a deeper,
                  conscious level
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Encouraging (eliciting) feedback from the pupil about their
                  performance
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Adapting Your Teaching Style & Giving Feedback</h2>
            <img
              style={{ backgroundColor: "white" }}
              src={adaptingImg}
              alt="Adapting"
            />
            <h2>Adapted Teaching Style</h2>
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  It is generally accepted that all people differ in how they
                  best learn new skills. Driving instructors should be aware of
                  learning models, three of which are:
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>• David Kolbs experimental learning (learning cycle)</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Honey and Mumfords adaptation of Kolbs theory (Activist,
                  reflector, theorist and pragmatist styles)
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Neil Flemings VARK model (visual, auditory, red/write and
                  kinaesthetic learning)
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Adapting your teaching style and methods will best support
                  your pupils’ learning. For instance, you will have noticed
                  that some pupils appear to ‘switch off’ mentally if they are
                  shown diagrams and pictures.{" "}
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  They may even appear to be disinterested and would probably
                  prefer to just practice the skills you are introducing. Taking
                  a pupil, you didn’t know well to a standards check would be
                  ill-advised. Knowing how best your pupils take in information
                  and being able to modify your approach to help them is
                  important.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Encourage Self Assessment</h2>
            <img
              style={{ backgroundColor: "white" }}
              src={EncourageImg}
              alt="EncourageImg"
            />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The use of open questions (starting with what, where, when,
                  who, which, how, and why), both on the move and when pulled
                  in, helps pupils to understand problems that arose and how
                  they might overcome them.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  This, in turn, helps develop the acceptance of responsibility
                  and raises pupils’ awareness of their own actions, thoughts,
                  and feelings. In this way, they are more likely to achieve a
                  behavioural change.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2> Use examples</h2>
            <img
              style={{ backgroundColor: "white" }}
              src={ExampleImg}
              alt="ExampleImg"
            />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Using real-world situations during a lesson to help with pupil
                  understanding is an important tool in the instructors’
                  toolbox.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  An example might be when dealing safely with ‘tailgaters’. If
                  a pupil expressed concern about someone following too closely,
                  explaining how gradually reducing speed should make the
                  tailgater ease back, should help to understand and ease any
                  concerns.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  This action might also encourage an aggressive tailgater to
                  overtake thereby allowing pupils to concentrate on the road
                  ahead.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Instructors should always be looking for opportunities to link
                  theory to practice by selecting appropriate situations to
                  expand upon.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Another example might be a pupil who hasn’t grasped why
                  cutting a corner is rarely acceptable when suddenly another
                  driver forces the pupil to slow down as a direct result of
                  cutting a corner. Pulling in to discuss what happened and what
                  sense the pupil made of the incident should clarify learning
                  outcomes.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Use Technical Information​</h2>
            <img
              style={{ backgroundColor: "white" }}
              src={TechnicalInfo}
              alt="TechnicalInfo"
            />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Instructors are best advised to update their knowledge of the
                  highway code and DVSAs driving essential skills on a regular
                  basis.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The driving instructor handbook is also a useful resource
                  containing the answers to commonplace questions in the driver
                  training industry. Keep them in your training vehicle.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Naturally, pupils will ask their instructors questions from
                  time to time. No one is expected to know everything so access
                  to up-to-date technical information is better than guessing.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Asking pupils to carry out their own research is perfectly
                  acceptable and helps build responsibility for their own
                  learning.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Appropriately Timed Feedback​</h2>
            <img
              style={{ backgroundColor: "white" }}
              src={apropriateTime}
              alt="apropriateTime"
            />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  In this criterion, we evaluate feedback as one of the four
                  cornerstones of coaching for driver development. Feedback is a
                  critical part of the learning process. It should not be
                  restricted to instruc tors giving their opinions of how the
                  pupil is progressing.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Obtaining feedback from the pupil, known as eliciting
                  feedback, allows ADI to gauge how the pupil perceives their
                  own actions and overall development.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Learner drivers like to know how they are doing from time to
                  time and will invariably value their learner’s opinions. When
                  giving feedback, instructors must be positive, honest and link
                  comments to goals for the lesson whenever appropriate.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Sometimes the feedback will be given as a response to a
                  pupil’s need to know how they are performing. At other times
                  it should be freely offered as a comment on an improvement
                  made by the pupil.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Good examples of feedback would include, “your mirror checks
                  were well-timed at the roundabout” or “that was good clutch
                  control as we moved away”. Both these examples are short, to
                  the point, make sense and help the pupil feel encouraged to
                  continue doing well.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Gaining feedback from the pupil, about what they did and why,
                  allows an assessment of the pupil’s thought processes. Using a
                  scale of 1-10, where 1 is poor and 10 is excellent, for a
                  pupil to rate their achievement allows the ADI to check the
                  pupil’s perception of their own performance.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The score given by the pupil is almost irrelevant, it is just
                  a starting point for meaningful discussion about fine-tuning
                  goals and building pupil responsibility.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Clearly stating what the feedback refers to is important.
                  Using phrases like, “that was good”, “well done” or “much
                  better that time” is vague and can be easily misunderstood.
                  Good feedback leaves the pupil in no doubt as to exactly what
                  part of their driving is being referred to.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2> Answer Pupil Questions​</h2>
            <img
              style={{ backgroundColor: "white" }}
              src={pupilImg}
              alt="pupilImg"
            />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The most important aspect here is that the pupil feels valued
                  and relaxed enough to ask direct questions. By establishing
                  and maintaining a good rapport, the pupil will feel encouraged
                  to search for more information.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Whenever possible, an ADI should turn the original question
                  into a dialogue especially if the instructor suspects the
                  pupil knows the answer.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>The discussion might develop as follows:</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Pupil – “Is the Max speed 40mph sign we’ve just passed
                  mandatory?”
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>You – “was it in a red circle?”</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>Pupil – “No, a rectangle, Aren’t they information signs?”</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  You – “Yes, well done. It was advising an appropriate speed.
                  What was the last speed limit we passed?”
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>Pupil – “Oh yes it was the National Speed Limit”</p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>No Discrimination or Prejudice​</h2>
            <img
              style={{ backgroundColor: "white" }}
              src={nodiscrimination}
              alt="nodiscrimination"
            />
            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  The Equality Act 2010, lays down anti-discrimination
                  legislation which provides a legal framework protecting the
                  rights of individuals in education and the workplace.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Equality is ensuring individuals are not treated differently
                  or less favorably on the basis of their Race, Gender, Age,
                  Religion, disability, Sexual Orientation, or Beliefs.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Diversity aims to recognise, respect, and value people’s
                  difference to contribute and reach their full potential.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>How does this Act apply to driving instructors?</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Instructors must promote equality and diversity in their
                  day-to-day dealings with their pupils by creating an inclusive
                  culture with equal access and opportunities to learn to drive.
                  This should encompass as wide a range of student as
                  realistically possible, allowing for the limitations of modern
                  vehicles and the specialist training instructors may or may
                  not have received.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  For instance, some instructors may have actively sought and
                  received training and adapted their vehicles in order to teach
                  pupils with specific disabilities. ADIs are not expected to
                  diversify to this extent in the provision of their services.
                  However, with a little thought and prior planning, they are
                  expected to take reasonable steps to ensure pupils with
                  diverse needs can use their services to learn to drive
                  whenever possible.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Asking a disabled driver what you can do to help them achieve
                  their goal, taking into account their condition, is all that
                  is necessary.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  Actively discriminating against your pupil or any other road
                  user you encounter, is unacceptable. Similarly, colluding with
                  your pupil if they are derogatory towards other road users is
                  plainly wrong and sets a negative example.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  If a pupil expresses a belief which is an improper or sweeping
                  statement about another road user, it is reasonable to
                  challenge that viewpoint. The pupil may not understand fully
                  the demands on other road users who drive/ride for leisure or
                  for a living.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <h2>Reflective Debrief</h2>

            <ul type="none">
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  A positive finish to a lesson that encourages the pupil to
                  reflect accurately on what was achieved and which aspects of
                  their driving require further development is essential.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>• A five-minute discussion should include:</p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • What the pupil thought overall, about their progress during
                  the lesson.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Reflection on the original goals that were agreed at the
                  start and to what extent each goal had been practiced and
                  achieved.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Any safety-critical incidents that occurred requiring
                  further practice and development.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Identifying and agreeing on what should be practiced during
                  private sessions and in the next driving lesson. Setting any
                  theory practice/revision.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  • Asking the pupil if they have any final questions for you
                  prior to confirming the next appointment.
                </p>
              </li>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  At the end of the lesson, the examiner will return to the test
                  center to complete the marking form which usually takes around
                  ten minutes. The debrief on the whole lesson will take around
                  ten to fifteen minutes to complete.
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
