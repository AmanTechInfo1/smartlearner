import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./AdiPartOne.module.css";
import prizeTrophy from "../../assets/images/prize-imgj.png";
import docsList from "../../assets/images/list-Docs.png";
import Qostion from "../../assets/images/qestion-img.png";
import { Link } from "react-router-dom";
import {
  getMyDashboard,
  fetchUserSubscriptions,
} from "../../redux/features/subscriptionSlice";
export default function AdiPartOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription
  );

  useEffect(() => {
    if (!userDetails || Object.keys(userDetails).length === 0) {
      navigate("/login"); // Redirect to login if user is not logged in
    } else if (userDetails.role === "admin") {
      // Allow admin to access the portal
      return;
    } else {
      // User is not admin, check for subscription
      dispatch(fetchUserSubscriptions()).then(() => {
        if (!userSubscription || !userSubscription.active) {
          // Redirect to subscription page if no active subscription
          navigate("/part-one-subscription");
        }
      });
    }
  }, [userDetails, userSubscription, dispatch, navigate]);
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest, <span>learn with the best!</span>
                </h1>
              </div>
              <div className={styles.alertBtn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////////////*/}

        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            The job of an ADI is very demanding but can also be extremely
            rewarding.{" "}
            <span>
              It’s a very important role, which extends beyond teaching the
              mechanical skills of driving a car. As well as these skills, an
              ADI is responsible for developing:
            </span>
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={prizeTrophy} alt="prizeTrophy" />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • – The knowledge and understanding that will help a novice
                    driver make sense of the roads as they start to drive on
                    their own.
                  </p>
                </li>
                <li>
                  <p>
                    • The understanding that learning to drive is a process that
                    doesn’t stop when a learner passes their test.
                  </p>
                </li>
                <li>
                  <p>
                    • To develop these skills and attitudes in learner drivers,
                    an ADI will be expected to demonstrate:
                  </p>
                </li>
                <li>
                  <p>•– A high regard for all aspects of road safety.</p>
                </li>
                <li>
                  <p>
                    •– A high standard of driving and instructional ability.
                  </p>
                </li>
                <li>
                  <p>•– A professional approach to customers.</p>
                </li>
                <li>
                  <p>•– A responsible attitude to pupils and the profession.</p>
                </li>
                <li>
                  <p>•– That they’re a fit and proper person.</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* ///////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            To see what the national standard for driver and rider training is
            <span> click HERE</span>
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={docsList}
                alt="List"
              />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The national standard for driver and rider training sets
                    out everything that a driver or rider trainer should be able
                    to do (skills), and the knowledge and understanding that
                    they need to perform their role competently. We recommend
                    that you read through the standard before you decide to
                    proceed with your application.
                  </p>
                </li>
                <li>
                  <p>
                    • The test for optential driving instructor’s requires a
                    higher standard of knowledge than that expected of a learner
                    driver. The test, which is conducted on a computer, is
                    carried out in two parts: a multiple choice part and a
                    hazard perception part. Both parts are taken at the same
                    sitting. The test isavailable in English and Welsh.
                  </p>
                </li>
                <li>
                  <p>
                    • The multiple choice questions test your knowledge of: –
                    The highway code. -The rules of the road. -Instructional
                    techniques.
                  </p>
                </li>
                <li>
                  <p>
                    • You’ll have 90 minutes to answer 100 questions, which are
                    split into four bands of 25 questions each.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    • The four bands cover the whole syllabus to make sure that
                    candidates have a complete understanding of theory. They
                    are:
                  </p>
                </li>
                <li>
                  <p>
                    • – Road procedure. -Traffic signs and signals, car control,
                    pedestrians, mechanical knowledge. -Driving test,
                    disabilities, law. -Publications, instructional techniques
                  </p>
                </li>
                <li>
                  <p>
                    • The questions are multiple choice and you’ll be asked to
                    select the correct option for each. You do this by clicking
                    a mouse.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    • After a break up of up to three minutes, the hazard
                    perception part of the test will start. This is designed to
                    test your ability to identify hazards that develop while
                    you’re driving. You’ll watch a video first, which will show
                    you how to complete the test. This uses a sample clip with a
                    soundtrack, which you’ll listen to through headphones. You
                    may watch this video once more if you wish.{" "}
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            The hazard perception<span> Test Explained:</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={Qostion}
                alt="List"
              />
            </div>
            <section className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Each clip contains one or more developing hazards, such as
                    vehicles, pedestrians and road conditions. You should
                    respond by clicking the mouse as soon as you see a hazard
                    developing that may result in you, the driver, having to
                    take some action, such as changing speed or direction. The
                    earlier you notice a developing hazard and make a response,
                    the higher your score. However, you must wait until the
                    hazard actually starts to develop and not click too early.
                    Your response won’t cause the scene in the video to change
                    in any way. However, a red flag will appear at the bottom of
                    the screen to show that your response has been noted. Before
                    each clip starts, there’ll be a 10-second pause so that you
                    can see the new road situation. The hazard perception tests
                    lasts about 20 minutes. There are 15 scoreable hazards in
                    total. You can score up to five marks on each. The total
                    available score is 75.
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH23}>
            Why is the hazard perception{" "}
            <span>Test included in the ADI theory test?</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • Just as in theory test for learner drivers and riders, the
                  hazard perception test is included in the ADI part 1 theory
                  test to assess your skills in: -Anticipation. -Scanning.
                  -Hazard recognition.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH23}>
            How does it differ from the hazard perception{" "}
            <span>Test that learner drivers and riders take?</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • Although all car and motorcycle candidates are shown 14
                  clips, the ADI hazards perception test is different because
                  the pass mark is higher. To pass:
                </p>
              </li>
              <li>
                <p>
                  • – Learner drivers and riders must achieve a score of 44 our
                  of 75.
                </p>
              </li>
              <li>
                <p>
                  • – Potential driving instructors must achieve 57 out of 75.
                </p>
              </li>
              <li>
                <p>
                  • This is because ADIs are expected to have a higher standard
                  of knowledge and better reactions than a learner, so you’ll
                  need to prepare thoroughly.
                </p>
              </li>
              <li>
                <p>
                  • You need to pass both parts of the theory test in the same
                  sitting to get an overall pass result. The overall pass mark
                  for the multiple choice part of the test is 85% (85% questions
                  answered correctly). However, you must reach a minimum mark of
                  80% (20 correct questions) in each of the four bands given
                  above. So, it’s possible for you to get an overall mark of 85%
                  or higher but still fail the test because you haven’ gained
                  the minimum of 80% in one or more of the four bands. For the
                  hazard perception test, the pass mark is 57 out of a possible
                  75. The results of your theory test are usually given to you
                  before you leave the test centre, along with details on
                  applying for the test of driving ability if you’re successful.
                  If you fail, you’ll be told which bands contained wrong
                  answers. You won’t, however, be given details of the actual
                  questions.
                </p>
              </li>
              <li>
                <p>
                  • If you have special needs, it’s important to say so when you
                  book your test so that the necessary adjustments can be made.
                  If you have dyslexia or other reading difficulties, you can
                  hear the test through the headphones. You can also ask for
                  extra time to take the multiple choice part of the test. If
                  you do have these needs, DVSA will need to see a letter about
                  your reading ability from any of these people:
                </p>
              </li>
              <li>
                <p>•-Teacher. -Educationalist. -Psychologist. -Doctor.</p>
              </li>
              <li>
                <p>
                  • It may not be possible for you to get a relevant
                  professional person to write this letter; if this is the case,
                  The DVSA will consider a letter from an independent person who
                  knows about your reading ability, such as an employer.{" "}
                </p>
              </li>
            </ul>
            <div className={styles.linkBtnSec}>
              <Link to="/hazard-preception-part-2">
                <button>Hazard Perception</button>
              </Link>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="400"
                    height="226"
                    src="https://www.youtube.com/embed/-bsLPF0Q35Y"
                    title="Road Safety: Joining the Motorway"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>•The part 1 test is based off of: – The highway code</p>
                </li>
                <li>
                  <p>
                    • – Know your traffic signs – Driving – the essential skills
                    – The driving instructors handbook
                  </p>
                </li>
                <li>
                  <p>
                    • The practise and mock test questions alone do not contain
                    all of the possible questions you could be asked on the test
                    date, these are purely just sample questions to practise
                    with.
                  </p>
                </li>
                <li>
                  <p>
                    • Below are the online PDF versions of the highway code and
                    know your traffic signs, we recommend you read these and
                    learn them like the back of your hand.
                  </p>
                </li>
                <li>
                  <p>
                    • We recommend reading just one page/two pages or small
                    sections per day to ensure you retain the most amount of
                    knowledge. You can also purchase a physical copy of these
                    books for your convenience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////// */}

        <div id={styles.btnDiv}>
          <a href="https://www.highwaycodeuk.co.uk/" id={styles.hazzardBtn}>
            {" "}
            The Highway Code
          </a>
          <a
            href="https://assets.publishing.service.gov.uk/media/656ef4271104cf0013fa74ef/know-your-traffic-signs-dft.pdf"
            id={styles.hazzardBtn}
            className={styles.hazzardBtn}>
            {" "}
            Traffic Signs
          </a>
          <a
            href="https://books.google.com.bz/books?id=indItQEACAAJ&printsec=copyright&hl=en#v=onepage&q&f=false"
            id={styles.hazzardBtn}>
            {" "}
            DSA Guide
          </a>
          <a
            href="https://www.rsa.ie/docs/default-source/services/s3.2-adi/21-driving-instructor-handbook-2019-(1).pdf?sfvrsn=b4be5476_5"
            id={styles.hazzardBtn}
            className={styles.hazzardBtn}>
            {" "}
            Instructor Handbook
          </a>
        </div>
        <ul type="none">
          <li className="text-center mt-2 text-danger">
            <p>
              • Click the buttons below to visit each category of the multiple
              choice test.
            </p>
          </li>
        </ul>
        <div id={styles.btnDiv}>
          <Link to="/band-1-Road-Procedure">
            <button id={styles.hazzardBtn}>Part 1 Band 1</button>
          </Link>
          <Link to="/band-2-traffic-signs-and-signals">
            <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
              Part 1 Band 2
            </button>
          </Link>
          <Link to="/band-3-driving-tests-disabilities-and-the-law">
            <button id={styles.hazzardBtn}>Part 1 Band 3</button>
          </Link>
          <Link to="/band-4-publications-techniques">
            <button id={styles.hazzardBtn} className={styles.hazzardBtn}>
              Part 1 Band 4
            </button>
          </Link>
          <Link to="/Adi-part-1-MockTest">
            <button id={styles.hazzardBtn}>Bonus Quiz</button>
          </Link>
          <Link to="/Adi-part-1-MockTest">
            <button id={styles.hazzardBtn}>Mock Test</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
