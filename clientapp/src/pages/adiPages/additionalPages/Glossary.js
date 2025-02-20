import React, { useEffect } from "react";
import styles from "./Glossary.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

import gsap from "gsap";

const Glossary = () => {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Glossary of "; // First part before "Driving"
    const secondPart = "Terms"; // Second part after "Driving"

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
    <div className={styles.glossaryglossaryPage}>
      <div className={styles.glossarycontainerImage}>
        <div className={styles.opicity}></div>
        <div className={styles.opticitySticky}>
          <div className={styles.glossarycontenthead}>
            <h1 ref={textRef}>{splitText()}</h1>
          </div>
          <div className={styles.gGpFrontListP}>
            <p>
              Explore our comprehensive Glossary of Terms to understand key
              driving concepts and terminology. Whether you're a beginner or
              brushing up on your knowledge, this guide helps you master the
              language of the road with ease
            </p>
          </div>
          <div className={styles.alertBtn}>
            <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
              {" "}
              <button id={styles.btn}>Contact Us</button>
            </Link>
            <Link
              to="/part-1-trainning-material"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <button id={styles.btn}>Back To Portal</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.glossarycontainer}>
        <p className={styles.glossaryintroduction}>
          It is common for all types of trades / industries to have a set of
          phrases that make no sense to anyone who is not in that trade /
          industry. This is commonly known as “Jargon”. To that effect, we have
          included many of the phrases  and abbreviations that get used on within
          driving instruction. You should take your time to familiarise yourself
          with as many as possible, they will help you when giving instruction
          and have a better knowledge, understanding of the industry.
        </p>
        <p className={styles.glossaryintroduction}>
          The following terms are ones that you will encounter throughout your
          teaching career. These may not be familiar to you unless you have the
          experience of teaching or training, so therefore these may seem
          difficult terms to remember or understand. It would be wise to
          remember that “it's not difficult, it's just new”, in the same way
          that it is difficult to remember the names of everyone you work with,
          until you have heard their names a few times and you become more
          familiar with them.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Client-centered learning (CCL) :
        </h2>
        <p className={styles.glossarytext}>
          Lessons should be CCL and should be planned to meet the needs of the
          pupil. Always find out what your pupil wants to achieve, design a
          lesson with this in mind. CCL requires you to understand the pupil’s
          needs, the more you include your pupil in decision making, for e.g.
          asking them what and where they would like to learn and by using
          teaching methods that match the learners preferred learning style, the
          more client-centered you will be. It's important to listen to your
          pupils responses.
        </p>

        <h2 className={styles.glossarysubTitle}>
          There are several levels of listening:
        </h2>
        <ul className={styles.glossarylist}>
          <li>
            <strong>Cosmetic:</strong> It seems like we’re listening, but we’re
            not really.
          </li>
          <li>
            <strong>Conversational:</strong> We’re listening, but also talking
            and thinking about our own situation.
          </li>
          <li>
            <strong>Active:</strong> We are generally focused on what the other
            person is saying.
          </li>
          <li>
            <strong>Deep:</strong> We are much more focused, particularly on
            what the other person means.
          </li>
        </ul>

        <h2 className={styles.glossarysubTitle}>
          The GROW technique consists of four stages:
        </h2>
        <ol className={styles.glossarylist}>
          <li>
            <strong>Goal:</strong> What do we want to achieve?
          </li>
          <li>
            <strong>Reality:</strong> Where are we now?
          </li>
          <li>
            <strong>Options:</strong> What are our alternative strategies?
          </li>
          <li>
            <strong>Way forward:</strong> How are we going to achieve our goals?
          </li>
        </ol>
        <h2 className={styles.glossarysubTitle}>
          Rote: Learning by repetition.
        </h2>
        <p className={styles.glossarytext}>
          In a teaching sense it could be used in the early stages of learning
          to drive, when instructions are repeated over and over again, for
          example to familiarize the pupil with the use of the controls. It's
          also a method of learning facts and figures, such as stopping
          distances.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Gestalt: Learning by understanding.
        </h2>
        <p className={styles.glossarytext}>
          Once a pupil is familiar with the basic principles of driving they
          must learn to apply these themselves. If they understand the meaning
          of what has been taught, then this will be possible.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Transfer of Learning: Previously acquired skills and knowledge.
        </h2>
        <p className={styles.glossarytext}>
          By using a familiar example of a skill known to the pupil, a new skill
          may be taught. For example, you could explain that the pupil should
          use the brakes gently and progressively by relating how they use the
          brakes on their push bike. This idea of progressing from the known to
          the unknown should be used throughout a course of tuition.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Negative Transfer: When old learning conflicts with new learning.
        </h2>
        <p className={styles.glossarytext}>
          When old learning conflicts with new learning. For example, you will
          commonly hear the words “.....my last instructor didn't say that”.
          Such situations must be handled with care so as not to confuse the
          pupil altogether.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Learning Plateau: A temporary lull in the learning process.{" "}
        </h2>
        <p className={styles.glossarytext}>
          In the initial stages, the pupil's learning can be rapid. However, at
          a certain point, a level will be reached where progress is slowed or
          even halted, before improving again. This is quite normal and to be
          expected. For the instructor, it is the point that the instructor
          should change the way they present a subject or change the subject
          completely to do something fresh. This is important to prevent the
          pupil losing confidence.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Open Questions: Those with several possible answers.
        </h2>
        <p className={styles.glossarytext}>
          Generally, any question starting with “who”, “what”, “where”, “when”,
          “why” or “how” is an open question. The advantage of this type of
          question are twofold:
        </p>
        <ul className={styles.glossarylist}>
          <li>It makes the pupil think of a fuller answer to the question.</li>
          <li>
            It means that you don't have to ask as many questions to achieve the
            same result.
          </li>
        </ul>

        <h2 className={styles.glossarysubTitle}>
          Closed Questions: Those with only one correct answer.
        </h2>
        <p className={styles.glossarytext}>
          Usually, these can be answered with a simple yes or no. They are not
          much use to you as an instructor, because they tell you very little
          about a pupil's knowledge. For example, you could ask two pupils the
          same question - “Do you know how the clutch works?” and get the same
          answer - “Yes”. But one of those pupils may only have a basic
          knowledge that needs to be expanded, whilst the other could have a
          degree in mechanical engineering.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Rhetorical Questions: Not requiring an answer.
        </h2>
        <p className={styles.glossarytext}>
          An example could be saying to a pupil who has failed their test - “I
          bet you're a bit upset, aren't you?”
        </p>

        <h2 className={styles.glossarysubTitle}>Communication:</h2>
        <p className={styles.glossarytext}>
          The art of conveying meaning by an interchange of ideas or experience.
          Good communication skills are a must for a driving instructor.
          Communication can be defined as: the ability to impart knowledge and
          ideas to cause a change in behavior or attitude.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Communication: Profoundly deaf pupil
        </h2>
        <p className={styles.glossarytext}>
          Ask the pupil how they would like you to communicate with them, as
          they will already have some strategies.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Dutch Reach: Opening the door
        </h2>
        <p className={styles.glossarytext}>
          Open the car door safely, instead of using the hand closest to the
          door, it means you reaching across to open the door with the hand
          furthest away from the door, to avoid the door swinging out and facing
          the traffic, which is considered safer.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Emergency Refuge Area: Stopped in an area before re-joining.
        </h2>
        <p className={styles.glossarytext}>
          Use the emergency telephone as you may be on a smart motorway where
          you have stopped in an emergency before rejoining, the services will
          close a lane in order to rejoin as they will have a reduced speed
          limit also in operation.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Motorways: broken down walking distance
        </h2>
        <p className={styles.glossarytext}>
          You have emergency telephone connected to emergency control centres,
          so would need to walk a maximum distance of ½ mile if between two
          phones and can walk either side of ½ mile.
        </p>

        <h2 className={styles.glossarysubTitle}>Overtaking on the left:</h2>
        <p className={styles.glossarytext}>
          Traffic in queues, not if someone is moving slower, i.e. lane hogging.
          When others are making you slow down or stop, so you can do this in
          one-way systems.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Psychomotor Domain: Physical skills.
        </h2>
        <p className={styles.glossarytext}>
          The sphere of the brain that is concerned with physical skills. For
          example: a pupil has a problem in this area if they keep putting on
          the windscreen wipers instead of the indicators.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Cognitive Domain: Knowledge.
        </h2>
        <p className={styles.glossarytext}>
          That part of the brain that deals with memory, understanding and the
          acquisition of factual knowledge.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Affective Domain: Attitudes.
        </h2>
        <p className={styles.glossarytext}>
          The part of the brain that deals with emotions and attitudes is known
          as the affective domain. It takes more than knowledge and physical
          ability to carry out a task properly – an individual's attitude must
          also be correct. For example: a speeding pupil may know, when asked,
          that the speed limit is 30mph, he may be able to physically get the
          car to abide by the limit – but does he want to and how would he feel
          if he ran over a child?
        </p>

        <h2 className={styles.glossarysubTitle}>
          Skill: Ability or expertise.
        </h2>
        <p className={styles.glossarytext}>Often acquired by training.</p>

        <h2 className={styles.glossarysubTitle}>Skills analysis:</h2>
        <p className={styles.glossarytext}>
          The technique of breaking down a skill into its component parts, to
          understand how and why it is done.
        </p>

        <h2 className={styles.glossarysubTitle}>Objective: Goal or aim.</h2>
        <p className={styles.glossarytext}>
          These must be set at the beginning of any session of tuition, so that
          the pupil clearly understands what is expected of them.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Aim: A broad statement of intent.
        </h2>
        <p className={styles.glossarytext}>
          This appears to be the same as above, but used in an instructional
          sense, it is not so well defined. For example: an objective may be
          that a pupil is able to reverse into a limited opening. The aim is to
          do it perfectly. The objective should and indeed will be reached, but
          the aim may not be, as the pupil may need a lot more practice than
          there is time for in that lesson.
        </p>
        <p className={styles.glossarytext}>
          Kinaesthetic: Feedback to the brain from muscles and limbs. For
          example: the pupil's ability to feel the bite point of the clutch
          during a hill start.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Teaching Systems: “Explanation, Demonstration, Practice.”
        </h2>
        <p className={styles.glossarytext}>
          A skill must first be explained verbally, then an example shown,
          possibly by demonstration, and finally practised to assess if
          understanding has been achieved. Note that demonstration does not
          necessarily mean actually doing it yourself; often the use of diagrams
          or other material will be sufficient.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Learning: A change of behavior.
        </h2>
        <p className={styles.glossarytext}>
          The ultimate aim of teaching and the final link in the educational
          chain.
        </p>
        <p className={styles.glossarytext}>
          Lessons: Periods of educational training. These must be structured,
          progress from what is unknown to what is known, have a clearly defined
          objective, and be tailored to suit the individual.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Perception: The interpretation of information collected by the senses.
        </h2>
        <p className={styles.glossarytext}>
          The brain gives meaning to sensory information by comparing it to
          previous experience or knowledge.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Sight: 75% of knowledge is received visually.
        </h2>
        <p className={styles.glossarytext}>
          Use visual aids wherever appropriate.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Hearing: Verbal information is the hardest to learn.
        </h2>
        <p className={styles.glossarytext}>
          Only 10% of what a pupil is told will be remembered. I hear and I
          forget; I see and I remember; I do and I understand.
        </p>
        <h2 className={styles.glossarysubTitle}>Barriers to communication:</h2>
        <p className={styles.glossarytext}>
          Barriers to communication stop you from communicating effectively with
          your pupil. They may be intrinsic or extrinsic, but you need to be
          aware of them and overcome or avoid them wherever possible. The
          biggest single barrier is usually the environment – the place you
          choose to conduct a lesson can be more important to the pupil's
          ability to learn than anything else.
        </p>

        <h2 className={styles.glossarysubTitle}>Extrinsic: External</h2>
        <p className={styles.glossarytext}>
          Any outside influence on a pupil's ability to pay attention – such as
          traffic flow, noise, weather conditions etc.
        </p>

        <h2 className={styles.glossarysubTitle}>Intrinsic: Internal</h2>
        <p className={styles.glossarytext}>
          The opposite of extrinsic, these are internal influences, such as the
          state of the pupil's health, anxiety, fear and so on.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Learning: Isn’t always a continuous process – can reach the learning
          plateau
        </h2>
        <p className={styles.glossarytext}>
          If a pupil stops making progress, discuss blocks to progress and
          develop strategies to overcome them. Sometimes, pupils need time to
          consolidate before moving on, as something may be blocking their
          progress.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Learning Goals: Taking time to establish and have an effective plan
        </h2>
        <p className={styles.glossarytext}>
          This involves you being provided with the information you need to make
          an effective plan and having the pupil in the planning process so you
          have both agreed to something together.
        </p>

        <h2 className={styles.glossarysubTitle}>Feedback:</h2>
        <p className={styles.glossarytext}>
          Feedback is an exchange between the pupil and instructor to assess
          whether satisfactory understanding and progress are taking place. It
          is best carried out at the earliest opportunity to aid learning and
          understanding of their progress.
        </p>

        <h2 className={styles.glossarysubTitle}>
          ALERT – DIRECT – INFORM (ADI):
        </h2>
        <p className={styles.glossarytext}>
          This is the recommended way of directing a pupil during a driving
          lesson:
        </p>
        <ul className={styles.glossarylist}>
          <li>
            <strong>Alert:</strong> "I would like you to"
          </li>
          <li>
            <strong>Direct:</strong> "Turn right"
          </li>
          <li>
            <strong>Identify:</strong> "At the junction ahead"
          </li>
          <li>
            <strong>Alert:</strong> "At the roundabout ahead"
          </li>
          <li>
            <strong>Direct:</strong> "Take the road to the right"
          </li>
          <li>
            <strong>Identify:</strong> "It's the third exit"
          </li>
        </ul>

        <h2 className={styles.glossarysubTitle}>
          Mechanical: The Four-Stroke Cycle
        </h2>
        <p className={styles.glossarytext}>
          The four-stroke cycle of an engine includes: Induction, Compression,
          Ignition/Power, and Exhaust.
        </p>

        <h2 className={styles.glossarysubTitle}>Differential:</h2>
        <p className={styles.glossarytext}>
          The differential unit is part of the transmission system and allows
          the inside driven wheel to turn slower when cornering. This helps
          accommodate the fact that the outside wheel has further to travel,
          allowing the vehicle to corner smoothly.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Dual (or Divided Line) Braking System:
        </h2>
        <p className={styles.glossarytext}>
          Modern cars are fitted with a dual braking system. By having a second,
          separate hydraulic brake line and master cylinder, the likelihood of
          complete brake failure is vastly reduced should a loss of brake fluid
          occur in part of the system. This system ensures that one front wheel
          and its diagonally opposite rear wheel can still be used to stop the
          vehicle.
        </p>

        <h2 className={styles.glossarysubTitle}>Four-Wheel Drive:</h2>
        <p className={styles.glossarytext}>
          The main advantage of four-wheel drive is increased traction,
          particularly on loose or slippery surfaces. Improved traction reduces
          the possibility of a vehicle's wheels sliding in some circumstances,
          thus enhancing road holding.
        </p>

        <h2 className={styles.glossarysubTitle}>Brake Fade:</h2>
        <p className={styles.glossarytext}>
          The term is used to describe the condition when the brakes of a
          vehicle lose their efficiency due to overheating. Disc brakes are less
          susceptible to brake fade than drum brakes because their brake pads
          are not as enclosed and therefore cool more efficiently. If a
          vehicle's brakes are applied for long periods of time, such as during
          a hill descent, the heat generated by friction between brake pad and
          disc or drum can cause the hydraulic fluid in the braking system to
          get extremely hot. This can lead to gas bubbles forming in the fluid,
          making the brake pedal feel spongy as it compresses the gas instead of
          the hydraulic fluid.
        </p>

        <h2 className={styles.glossarysubTitle}>
          ABS – Anti-lock Braking System – Harsh Braking:
        </h2>
        <p className={styles.glossarytext}>
          Prevents brakes from locking as they apply and reapply and reduces the
          chance of skidding and you can hear this when activated and keep the
          pressure applied, they can be ineffective on surface water as there is
          less grip on the road and can cause aquaplaning
        </p>

        <h2 className={styles.glossarysubTitle}>Spongy Footbrake:</h2>
        <p className={styles.glossarytext}>
          if there was air in the hydraulic braking system
        </p>

        <h2 className={styles.glossarysubTitle}>Heavy Steering:</h2>
        <p className={styles.glossarytext}>
          Under inflated tyres cause heavy steering.
        </p>

        <h2 className={styles.glossarysubTitle}>Catalytic Converter:</h2>
        <p className={styles.glossarytext}>
          The catalytic converter, if fitted, is part of the exhaust system and
          is fitted in order to reduce harmful emissions.
        </p>

        <h2 className={styles.glossarysubTitle}>Colour Blind Drivers:</h2>
        <p className={styles.glossarytext}>
          Distinguish between red or flashing amber at level crossings Level
          crossings flashing red lights side to side means unable to go,
          flashing up and down would mean amber and can go with caution.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Disability Assessment Centres:
        </h2>
        <p className={styles.glossarytext}>
          Listed in Driving Instructors Handbook It is listed in the Driving
          Instructors Handbook by QEF on page 335-336
        </p>

        <h2 className={styles.glossarysubTitle}>
          Tunnels – What distance to leave from vehicle in front when stopping :
        </h2>
        <p className={styles.glossarytext}>
          Leave a 5 metre gap from vehicle in front in tunnels
        </p>

        <h2 className={styles.glossarysubTitle}>
          ADI Disqualified from Driving:
        </h2>
        <p className={styles.glossarytext}>
          If an ADI (Approved Driving Instructor) is disqualified from driving,
          the DVSA will consider their application only after the
          disqualification period and 4 years have passed. When applying to
          become an ADI, you must disclose any driving offences in the last 4
          years.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Disabilities: Blue Badge Holders:
        </h2>
        <p className={styles.glossarytext}>
          These are people who are diagnosed as severely disabled and qualify
          for parking concessions. The qualifying disability would usually be
          one that in some way caused a difficulty for a person when walking. A
          blue badge may be held by a non-driver but can be used on their behalf
          by someone driving them. Someone with walking difficulties who is also
          blind would qualify for a Blue Badge but could not hold a driving
          licence.
        </p>
        {/* //////////////////////////////////////////////////////////////// */}
        <h2 className={styles.glossarysubTitle}>
          Parking: A parking bay is marked for disabled use:
        </h2>
        <p className={styles.glossarytext}>
          This means it has been reserved for Blue Badge holders only. The term
          “Blue Badge holder” is sometimes used instead of disabled. A
          preliminary assessment may be appropriate for people diagnosed with:
          stroke, hydrocephalus, cerebral palsy, head injuries, or learning
          difficulties.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Driving Test: Special Considerations
        </h2>
        <p className={styles.glossarytext}>
          When booking a driving test, a disabled person should let the DVSA
          know if they have severe hearing difficulties, are restricted in their
          movements, or have any physical disability. If the driver has a right
          leg disability, the left foot may be used for both the accelerator and
          brake, but the vehicle may need to be suitably converted (e.g., a left
          foot accelerator could be fitted).
        </p>

        <h2 className={styles.glossarysubTitle}>Deafness and Driving</h2>
        <p className={styles.glossarytext}>
          Deafness is not classed as a driver disability. No restrictions are
          placed on a full driving licence when someone with a hearing
          impairment passes their driving test. A deaf person may drive any type
          of vehicle. If you have a deaf pupil wanting to apply for a driving
          test, advise them to declare their deafness on the application form.
        </p>

        <h2 className={styles.glossarysubTitle}>Diplopia: Double Vision</h2>
        <p className={styles.glossarytext}>
          Diplopia is the technical term for double vision. This condition can
          affect a person’s ability to drive safely, and special considerations
          may need to be made for individuals experiencing it.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Coasting: How’s it Marked on a Driving Test?
        </h2>
        <p className={styles.glossarytext}>
          It is marked under gears on a driving test.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Gear Changes: When Stopping a Car
        </h2>
        <p className={styles.glossarytext}>
          When stopping a car, a gear change is often not needed, modern cars
          have powerful brakes and tyres with good grip, which makes it not
          necessary to change gears.
        </p>

        <h2 className={styles.glossarysubTitle}>Extended Test: Difference</h2>
        <p className={styles.glossarytext}>
          If someone has lost their licence and the judge will decide if this is
          needed. It is longer than the normal tests and last around 70 minutes,
          so it is 30 minutes longer than a normal standard test.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Dual Accelerator: Not Fitted in Driving School Cars
        </h2>
        <p className={styles.glossarytext}>
          A dual accelerator is not allowed in a car for a driving test. The car
          must be fitted with standard controls to ensure fairness and safety
          during the test.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Driving Test – Standard Test
        </h2>
        <p className={styles.glossarytext}>
          A standard driving test lasts around 40 minutes. When applying for the
          test, any factors that might affect the running of the test, such as a
          disability, should be declared. This allows the examiner to make any
          necessary adjustments to the procedure.
        </p>

        <h2 className={styles.glossarysubTitle}>
          Adapted Vehicles for the Driving Test
        </h2>
        <p className={styles.glossarytext}>
          If a candidate passes the test using a specially adapted vehicle, the
          examiner will note the adaptations on the Pass Certificate (D10).
          Adaptations may include:
        </p>
        <ul className={styles.glossarylist}>
          <li>Steering ball for one-handed operation of the steering wheel</li>
          <li>Hand operated (push-pull T-bar) brake and accelerator</li>
          <li>Left side accelerator pedal</li>
          <li>
            Infrared remote control for indicators, wipers, lights, and horn
          </li>
          <li>
            Extra mirrors if the driver cannot observe through the rear window
            when reversing
          </li>
        </ul>

        <p className={styles.glossarytext}>
          The vehicle may also be adapted in certain ways, such as power
          steering made ultra-light or brake pedal effort reduced. Manual
          gearbox cars can be adapted to semi-automatic mode so that gears can
          be changed using a gear lever without operating the clutch.
        </p>
      </div>
    </div>
  );
};

export default Glossary;
