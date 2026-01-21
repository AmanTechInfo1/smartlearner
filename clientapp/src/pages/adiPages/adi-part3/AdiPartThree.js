import React, { useEffect, useState } from "react";
import styles from "./AdiPartThree.module.css";

import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux"; // Import useSelector

import { fetchUserSubscriptions } from "./../../../redux/features/subscriptionSlice";
import { useRef } from "react";

import gsap from "gsap";
import { motion } from "framer-motion";
import { Sparkles, BookOpenCheck, Lightbulb, Timer } from "lucide-react";
import LessonModules from "./additionalPages/LessonModules";
import { Helmet } from "react-helmet-async";
import httpHandler from "../../../utils/httpHandler";

export default function AdiPartThree() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription
  );
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

  useEffect(() => {
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
            (planCategory === "pdi-part-three packages" ||
              planCategory === "Complete packages")
          );
        });
      if (!hasAccess) {
        navigate("/driving-instructor-packages/instructor-packages"); // Redirect to subscription page if no valid plan found
      }
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);
  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    const verifyPayment = async () => {
      const subscriptionData2 = localStorage.getItem("PdiPartThreeSubsBuy");

      if (!subscriptionData2) return;

      try {
        const parsedData = JSON.parse(subscriptionData2);
        const res = await httpHandler.post(
          "/api/subscription/revolut-payment-success",
          
            parsedData,
          
        );

        if (res.data.success) {
          localStorage.removeItem("PdiPartThreeSubsBuy"); // clean up
        } else {
          console.error("Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
      }
    };

    verifyPayment();
  }, []);

  // ////////////////////////////////////////////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Congratulations on Passing"; // First part before "Driving"
    const secondPart = "Your Part 2 ADI Exam!"; // Second part after "Driving"

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
    <>
      <div className={styles.AdiPartOne}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Driving instructor training in Rugby</title>
          <meta
            name="description"
            content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test. "
          />
          <meta
            property="og:title"
            content="Driving instructor training in Rugby "
          />
          <meta
            property="og:description"
            content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test."
          />
          <link
            rel="canonical"
            href="https://smartlearner.com/part-three-theory-questions"
          />
        </Helmet>
        <div className={styles.AdiPortalPartOne}>
          <section className={styles.imageSection}>
            <div className={styles.opicity}></div>
            <div className={styles.maincontent}>
              <div className={styles.content}>
                <div className={styles.heading1}>
                  <h1 ref={textRef}>{splitText()}</h1>
                </div>

                <div className={styles.gGpFrontListP}>
                  <p>
                    {" "}
                    <strong>Well done!</strong>
                    <br />
                    You've successfully completed Part 2 of the Approved Driving
                    Instructor (ADI) exam, and you've demonstrated the skills
                    and professionalism required to advance to the next step in
                    your journey toward becoming a fully qualified ADI.
                  </p>
                </div>
                <div className={styles.gGpFrontListP}>
                  <p>
                    Your hard work, dedication, and attention to detail have
                    paid off, and now you're ready to move on to Part 3 of the
                    ADI exam!
                  </p>
                </div>
                <div className={styles.alertBtn}>
                  <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                    {" "}
                    <button>Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* /////////////////////////////////////////////////// */}
          <div className={styles.adiPart3secondcontainer}>
            <div className={styles.adiPart3secondglowBorder}>
              <h1 className={styles.adiPart3secondheading}>
                Good Luck on Your Journey to Part 3!
              </h1>
              <p className={styles.adiPart3secondparagraph}>
                You're one step closer to achieving your goal of becoming a
                fully qualified ADI. The skills you're developing now will serve
                you throughout your career, as you help learners become safe and
                confident drivers.
              </p>
              <p className={styles.adiPart3secondparagraph}>
                Stay focused, keep practicing, and continue refining your
                teaching techniques. Best of luck in your preparation for Part 3
                – you’ve got this!
              </p>
              <p className={styles.adiPart3secondsuccess}>
                We look forward to hearing about your success!
              </p>
            </div>
          </div>

          {/* /////////////////////////////////////////////////////// */}
          <div className={styles.adiPart3firstcontainer}>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.adiPart3firstheading}>
              What's Next? The Part 3 ADI Exam
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={styles.adiPart3firstintro}>
              The Part 3 exam is your opportunity to showcase your ability to
              teach others, not just drive. This is the instructional phase of
              the ADI exam, where you will be assessed on how well you can
              convey your driving knowledge, skills, and techniques to a learner
              driver.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className={styles.adiPart3firstsubheading}>
              What to Expect in Part 3:
            </motion.h2>

            <div className={styles.adiPart3firstcardsWrapper}>
              <motion.div
                className={styles.adiPart3firstcard}
                whileHover={{ scale: 1.05 }}>
                <BookOpenCheck className={styles.adiPart3firsticon} />
                <h3>Instructing a Learner Driver</h3>
                <p>
                  Teach a learner driver in a real or simulated scenario,
                  breaking down complex driving tasks and giving clear,
                  effective instructions.
                </p>
              </motion.div>

              <motion.div
                className={styles.adiPart3firstcard}
                whileHover={{ scale: 1.05 }}>
                <Lightbulb className={styles.adiPart3firsticon} />
                <h3>Assessment Areas</h3>
                <p>
                  Be evaluated on your planning, communication, feedback,
                  observation, correction skills, and overall professionalism.
                </p>
              </motion.div>

              <motion.div
                className={styles.adiPart3firstcard}
                whileHover={{ scale: 1.05 }}>
                <Timer className={styles.adiPart3firsticon} />
                <h3>Duration</h3>
                <p>
                  The exam lasts about an hour, during which you will conduct a
                  full lesson just like a real-world teaching experience.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////////////////////////////// */}
          <section style={{ padding: "1rem", backgroundColor: "#0b0b0b" }}>
            <LessonModules />
          </section>
        </div>
      </div>
    </>
  );
}
