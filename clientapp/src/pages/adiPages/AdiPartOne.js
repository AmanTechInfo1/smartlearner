import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./AdiPartOne.module.css";
import prizeTrophy from "../../assets/images/pdiTrophi.png";
import docsList from "../../assets/images/docsList.png";
import Qostion from "../../assets/images/hazzard-png.png";
import { Link } from "react-router-dom";
import {
  getMyDashboard,
  fetchUserSubscriptions,
} from "../../redux/features/subscriptionSlice";

import { useRef } from "react";

import gsap from "gsap";

export default function AdiPartOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userId = userDetails?._id;

  const [subscriptionLoaded, setSubscriptionLoaded] = useState(false); // Track when subscription data is loaded

  useEffect(() => {
    // If user is logged in and userId exists, fetch subscription data
    if (userId) {
      dispatch(fetchUserSubscriptions(userId))
        .then(() => setSubscriptionLoaded(true)) // Set subscriptionLoaded to true once data is fetched
        .catch(() => setSubscriptionLoaded(true)); // Handle error and set subscriptionLoaded to true
    }
  }, [dispatch, userId]);

  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription
  );

  useEffect(() => {
    //

    if (!userDetails || Object.keys(userDetails).length === 0) {
      navigate("/pdi-login"); // Redirect to login if user is not logged in
    } else if (userDetails.role === "admin") {
      // Allow admin to access the portal
      return;
    } else if (userDetails.role === "instructortrainee") {
      // Allow admin to access the portal
      return;
    } else if (subscriptionLoaded) {
      const hasAccess =
        Array.isArray(userSubscription) &&
        userSubscription.some((subscription) => {
          const { planCategory } = subscription.subscriptionId || {};
          const { couponApplied } = subscription; // Assuming couponApplied is part of the subscription object

          return (
            subscription.isActive &&
            (planCategory === "pdi-part-one packages" ||
              planCategory === "Complete packages")
          );
        });
      if (!hasAccess) {
        navigate("/driving-instructor-packages/instructor-packages"); // Redirect to subscription page if no valid plan found
      }
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);

  // //////////////////////////////////////////////////////////////////////////////////////

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Welcome to PDI "; // First part before "Driving"
    const secondPart = "Part One"; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    // GSAP Timeline for the text animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out", // Start from below
      stagger: 0.1, // Stagger the animation for each letter
      rotationX: 90, // Initial rotation effect
      transformOrigin: "bottom center", // Center for rotation
      scale: 0.5,
    })
      .to(letters, {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade in to full opacity
        rotationX: 0, // Reset rotation
        y: 0, // Move to original position
        stagger: 0.1, // Slight stagger for each letter
        duration: 0.8, // Smooth transition duration
      })
      .to(letters, {
        color: "#fd9235", // Change text color to red
        rotationY: 360, // Apply rotation on the Y-axis
        stagger: 0.1,
        duration: 1, // Rotate each letter over 1 second
      })
      .to(letters, {
        scale: 1.2, // Slightly enlarge text
        opacity: 0.8, // Reduce opacity slightly
        rotationX: -10, // Slight tilt effect
        stagger: 0.1, // Stagger the scaling
        duration: 1, // Animation duration
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#ff54d7", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1 ref={textRef}>{splitText()}</h1>
              </div>
              {/* <div className={styles.gGpFrontListP}>
                <p>
                  Unlock your driving potential with Smartlearner Learn from
                  certified instructors in a safe, supportive environment. Start
                  your journey to becoming a confident, skilled driver today!
                </p>
              </div> */}
              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button>Contact Us</button>
                </Link>
                {/* <Link
                  to="/part-1-trainning-material"
                  style={{ textDecoration: "none" }}
                >
                  <button>NEXT PAGE</button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////////////*/}

        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            The job of an ADI is very demanding but can also be extremely
            rewarding. It’s a very important role, which extends beyond teaching
            the mechanical skills of driving a car. As well as these skills, an
            ADI is responsible for developing:
          </p>
          
          {/* <section className={styles.AdiParttwoDisplayFlex}>
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
          </section> */}
        </section>
        {/* ///////////////////////////////////////// */}

        {/* <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            To see what the national standard for driver and rider training is
            <a href="https://www.gov.uk/government/publications/national-standard-for-driver-and-rider-training">
              {" "}
              <span> click HERE</span>
            </a>
          </p>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                src={docsList}
                alt="List"
                style={{ maxWidth: "650px", aspectRatio: "1/1" }}
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
        </section> */}

        {/* //////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.pdiContainer}>
            <h2>
              Create a Strong <span style={{color:'#cb6205'}}>Study Plan</span>
            </h2>
            <div className={styles.pdiTwo}>
              <h3>Multiple-Choice Questions</h3>
              <p>
                The Multiple-Choice section includes 100 questions spread across
                four key areas (bands). To pass, you must answer at least 85
                questions correctly, with a minimum score of 20 out of 25 in
                each band. Even if you score 85 overall, you’ll fail if you
                don’t meet the band-specific requirements, so it’s essential not
                to neglect any section.
              </p>
            </div>

            <div className={styles.pdiThree}>
              <h3>Daily Study Routine</h3>
              <p>
                Focus on one band per day. This approach ensures balanced
                coverage without overwhelming yourself. Regular, consistent
                study sessions are far more effective than last-minute cramming.
              </p>
            </div>
            <section className={styles.hazardTestWorkListSection}>
              <h2 className={styles.hazardTestH23}>
                Breakdown of <span> the Bands</span>
              </h2>
              <div className={styles.pdiBands}>
                <div className={styles.pdiBandItem}>
                  <h3>Band 1: Road Procedure</h3>
                  <p>
                    <strong>What It Covers:</strong> Rules of the road,
                    including lane discipline, right-of-way, and how to handle
                    various intersections and driving conditions.
                  </p>
                  <p>
                    <strong>Why It Matters:</strong> Road procedure is the
                    foundation of safe driving, and as an instructor, you need
                    to teach these rules clearly.
                  </p>
                  <p>
                    <strong>Study Tips:</strong> Familiarize yourself with the
                    Highway Code, especially tricky scenarios like roundabouts
                    and pedestrian crossings. Practice with mock questions based
                    on real-world situations.
                  </p>
                </div>

                <div className={styles.pdiBandItem}>
                  <h3>
                    Band 2: Traffic Signs, Signals, Car Control, Pedestrians,
                    and Mechanical Knowledge
                  </h3>
                  <p>
                    <strong>What It Covers:</strong> This band includes traffic
                    signs, vehicle control, pedestrian safety, and basic car
                    mechanics.
                  </p>
                  <p>
                    <strong>Why It Matters:</strong> Understanding traffic signs
                    and basic mechanics is critical for safe driving and
                    effective teaching.
                  </p>
                  <p>
                    <strong>Study Tips:</strong> Use flashcards to memorize
                    traffic signs. For mechanical knowledge, focus on the
                    basics—how brakes, tires, and the engine work. Practice
                    interpreting signs in context.
                  </p>
                </div>

                <div className={styles.pdiBandItem}>
                  <h3>Band 3: Driving Test, Disabilities, and the Law</h3>
                  <p>
                    <strong>What It Covers:</strong> This section focuses on the
                    driving test process, disabilities, and legal aspects of
                    driving.
                  </p>
                  <p>
                    <strong>Why It Matters:</strong> You’ll need to guide
                    students through the driving test process, including
                    accommodations for drivers with disabilities.
                  </p>
                  <p>
                    <strong>Study Tips:</strong> Review DVSA guidelines on the
                    driving test. Learn how to adjust your teaching for students
                    with disabilities, and study the laws that apply to both
                    drivers and instructors.
                  </p>
                </div>

                <div className={styles.pdiBandItem}>
                  <h3>Band 4: Publications and Instructional Techniques</h3>
                  <p>
                    <strong>What It Covers:</strong> This band is all about
                    teaching—how to effectively communicate driving techniques
                    and safety information.
                  </p>
                  <p>
                    <strong>Why It Matters:</strong> Being knowledgeable isn’t
                    enough—you need to communicate clearly and adapt to
                    different learning styles.
                  </p>
                  <p>
                    <strong>Study Tips:</strong> Study different teaching
                    techniques. Practice explaining complex concepts in simple
                    terms, and create sample lesson plans to refine your
                    instructional approach.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 >
            The hazard perception<span> Test Explained:</span>
          </h2>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={Qostion} alt="List" />
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
          <div className={styles.linkBtnSec}>
              <Link to="/hazard-preception-part-2">
                <button>Hazard Perception</button>
              </Link>
            </div>
        </section>
        {/* /////////////////////////////////////////////////////////////////// */}
        {/* <section className={styles.hazardTestWorkListSection2}>
          <h2 className={styles.hazardTestH234}>
            Why is the hazard perception{" "}
           Test included in the ADI theory test?
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
        </section> */}
        {/* /////////////////////////////////////////////////////// */}
        {/* <section className={styles.hazardTestWorkListSection2}>
          <h2 className={styles.hazardTestH234}>
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
            
          </div>
        </section> */}
        
        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <div className={styles.innerTheorySupportContent}>
              <div className={styles.theorySupportContentVideo}>
                <iframe

                  width="900"
                  height="500"
                  src="https://www.youtube.com/embed/-bsLPF0Q35Y"
                  title="Road Safety: Joining the Motorway"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            
          </div>
         
        </section>

        {/* ////////////////////////////////////////////////////////////////////// */}

        <div className={styles.tipsContainer}>
          <section className={styles.hazardTips}>
            <h2 className={styles.pdiTipsSectionTitle}>
              Tips for the Hazard Perception Test
            </h2>
            <ul>
              <li className={styles.pdiTipsOne}>
                <strong>Practice Makes Perfect:</strong> Use online resources to
                practice with mock clips.
              </li>
              <li className={styles.pdiTipsTwo}>
                <strong>The Click-Click Technique:</strong> Click twice in quick
                succession when you see a potential hazard.
              </li>
              <li className={styles.pdiTipsThree}>
                <strong>Stay Alert: </strong>Hazards can appear at any moment,
                so don’t lose focus.
              </li>
              <li className={styles.pdiTipsFour}>
                <strong>Watch for Dual Hazards:</strong> Keep your attention
                sharp until each video ends.
              </li>
            </ul>
          </section>

          <section className={styles.generalTips}>
            <h2 className={styles.pdiTipsSectionTitle}>
              General Tips for Success
            </h2>
            <ul>
              <li className={styles.pdiTipsFive}>
                <strong>Consistency is Key:</strong> Regular study and practice
                are crucial.
              </li>
              <li className={styles.pdiTipsSix}>
                <strong>Avoid Over-clicking:</strong> Focus on identifying
                hazards early.
              </li>
              <li className={styles.pdiTipsSeven}>
                <strong>Stay Calm and Focused:</strong> Perform better under
                pressure by staying calm.
              </li>
            </ul>
          </section>
        </div>

        {/* ////////////////////////////////////////// */}
        <div className={styles.TMnextPage}>
          <Link to="/part-1-trainning-material">
            <button className={styles.TMnextButton}>NEXT PAGE</button>
          </Link>
        </div>

        {/* /////////////////////////////////////////////////////// */}

        {/* <div id={styles.btnDiv}>
          <a href="https://www.highwaycodeuk.co.uk/" id={styles.hazzardBtn}>
            {" "}
            The Highway Code
          </a>
          <a
            href="https://assets.publishing.service.gov.uk/media/656ef4271104cf0013fa74ef/know-your-traffic-signs-dft.pdf"
            id={styles.hazzardBtn}
            className={styles.hazzardBtn}
          >
            {" "}
            Traffic Signs
          </a>
          <a
            href="https://books.google.com.bz/books?id=indItQEACAAJ&printsec=copyright&hl=en#v=onepage&q&f=false"
            id={styles.hazzardBtn}
          >
            {" "}
            DSA Guide
          </a>
          <a
            href="https://www.rsa.ie/docs/default-source/services/s3.2-adi/21-driving-instructor-handbook-2019-(1).pdf?sfvrsn=b4be5476_5"
            id={styles.hazzardBtn}
            className={styles.hazzardBtn}
          >
            {" "}
            Instructor Handbook
          </a>
        </div> */}
        {/* <ul type="none">
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
        </div> */}
      </div>
    </div>
  );
}
