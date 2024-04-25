// import React from 'react'
import styles from "./TheHonestTruth.module.css";
import CityDriverBro from "../../assets/images/City-driver-bro.svg";
import ThTruthLogoImg from "../../assets/images/THT_logo.png";
import { GoPlay } from "react-icons/go";
import {
  FaArrowRight,
  FaMusic,
  FaGlassCheers,
  FaTablets,
  FaMoneyBill,
  FaMobileAlt,
  FaUserInjured,
  FaCarCrash,
  FaTachometerAlt,
  FaBed,
  FaBicycle,
} from "react-icons/fa";

import { useEffect, useState } from "react";

export default function TheHonestTruth() {
  const [animatedValue1, setAnimatedValue1] = useState(0);
  const [animatedValue2, setAnimatedValue2] = useState(0);
  const [animatedValue3, setAnimatedValue3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 50 ? 50 : newValue;
      });
      setAnimatedValue2((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 20 ? 20 : newValue;
      });
      setAnimatedValue3((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 1500 ? 1500 : newValue;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>The Honest Truth</h1>
            </div>

            <div className={styles.heading2}>
              <p>
                SmartLearner have teamed up with First Car on their ‘The Honest
                Truth’ campaign to help deliver their road safety project across
                the West Midlands and Warwickshire!
              </p>
            </div>
          </div>
          <div className={styles.video}>
            <img src={CityDriverBro} alt="renewableEnergy" />
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////////////// */}

      <section className={styles.theHonestTruth2ndSection}>
        <div className={styles.theHonestTruth2nddiv}>
          <div className={styles.theHonestTruth2ndsectionDetails}>
            <h2>What is the 'The Honest Truth' campaign?</h2>
            <hr />
            <p>
              Each year over 825,000 people in the UK pass their driving test
              and enjoy the freedom and independence of being a driver. However,
              newly qualified young drivers are by far the highest risk road
              user group and road crashes are the number one killer of
              17-24-year-olds in the UK.
            </p>
            <p>
              The Honest Truth is a national road safety campaign delivered
              through collaboration with emergency services, road safety
              organisations, and driving instructors across the UK.
            </p>
            <p>
              Our mission is to deliver no-nonsense, straight-talking road
              safety education, hence “The Honest Truth”.
            </p>
            <button className={styles.ThTruthMoreInfoBtn}>More Info</button>
          </div>
          <div className={styles.theHonestTruthImgSection}>
            <a href="/">
              <img src={ThTruthLogoImg} alt="ThTruthLogoImg" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>
      {/* ////////////////////////smartlearner stats ///////////////////////////////// */}
      <div className={styles.smartleanerStats}>
        <section className={styles.smartleanerStatsSection}>
          <h3>The Statistics</h3>
          <hr />
          <div className={styles.statsContaier}>
            <div className={styles.numberContainer}>
              <span>{animatedValue1}%</span>
              <p id={styles.statslowerheading}>NEW DRIVERS PASS FIRST TIME</p>
            </div>
            <div className={styles.numberContainer}>
              <span>{animatedValue2}%</span>
              <p id={styles.statslowerheading}>
                CRASH WITHIN 1 YEAR OF PASSING
              </p>
            </div>
            <div className={styles.numberContainer}>
              <span>{animatedValue3}+</span>
              <p id={styles.statslowerheading}>YOUNG DRIVERS DIE EACH YEAR</p>
            </div>
          </div>
        </section>
      </div>
      {/* ///////////////////////////////////////////////////////////////////// */}
      <section className={styles.ourInvolmentSection}>
        <div className={styles.ourInvolmentDiv}>
          <h2>Our involvement in the 'Honest Truth'</h2>
          <hr />
          <p>
            As the leading driving school in the West Midlands and Warwickshire,
            we felt it was our duty to get involved and set an example to other
            driving schools and driving instructors in the local area. We are
            extremely excited to be getting involved in the project and feel
            this is a perfect way of ensuring driving lessons are used as a
            means to inform young people about the risks and dangers that
            surround them once they pass their test and are driving
            independently.
          </p>
          <p>
            SmartLearner has always had a vested interest in promoting road
            safety in our local communities. Over the past 15 years,
            SmartLearner Driving School has played a crucial role in promoting
            road safety by giving presentations in local schools, colleges, and
            universities across Coventry, Warwick, Rugby, and surrounding areas.
          </p>
          <p>
            In 2019, SmartLearner even helped to form the road safety charity
            ‘Because Your Life Counts’ also known as ‘BYLC’. Who delivers a wide
            range of road safety projects across the West Midlands and
            Warwickshire. They have previously worked on road safety projects
            with the West Midlands Police, West Midlands Fire Service, and even
            the Warwickshire Police and Crime Commissioner.
          </p>
        </div>
      </section>
      {/* /////////////////////////////////////////////////////////// */}
      <section className={styles.getInvolvedsection}>
        <div className={styles.getInvolvedDiv}>
          <div className={styles.getInvolvedHeading}>
            {" "}
            <h2>Get involved!</h2>
            <hr />
          </div>

          <div className={styles.getInvolvedDivFlex}>
            <div className={styles.getInvolvedDetailsDiv}>
              <h2>Book Your Lessons</h2>
              <hr />
              <p>
                The first step in getting involved in the ‘Honest Truth’ project
                is to get booked in with a SmartLearner Driving Instructor.
                <br />
                SmartLearner is an award-winning driving school in the West
                Midlands and Warwickshire. We will be able to find you a local
                driving instructor who is fully qualified and DVSA approved.
              </p>
              <button>Call Us</button>
            </div>
            <span>
              <FaArrowRight />
            </span>
            <div className={styles.getInvolvedDetailsDiv}>
              <h2>Finish The Training</h2>
              <hr />
              <p>
                When you start your lessons you will be given a Truth Card. This
                card will list the 10 truths (listed below) and upon completion
                of each topic your instructor will sign these off.
                <br /> The ‘Honest Truth’ campaign is formed around the central
                idea of telling young drivers the truth about safe driving,
                without patronising or sugar-coating. The Campaign hopes that
                this approach will cause a behavioural change in how young
                people approach driving.
              </p>
            </div>
            <span>
              <FaArrowRight />
            </span>
            <div className={styles.getInvolvedDetailsDiv}>
              <h2>Win A Prize!</h2>
              <hr />
              <p>
                If your driving instructor has signed off all 10 topics on your
                Truth Card, congratulations! You can now register to be in with
                a chance of winning some great prizes. Simply click the link
                below and you’ll be taken to the registration page.
                <br /> The prizes available for completing the course change
              </p>
              <button>Clear Here</button>
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////////////////////////////////////////// */}
      <section className={styles.features}>
        <h4>The 10 Truths</h4>
        <p>Click the ICON to find out more!</p>
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/distractions">
              <span>
                <FaMusic id={styles.featuresIcon} />
              </span>
              <h3>1. Distractions</h3>
            </a>
            <p>
              Music, mobiles, laughing and joking. All signs of a good time, but
              in a car these things all increase the risk of a collision.
              Inattention is the most common reason for car crashes and one of
              the biggest problems facing you as a new driver is carrying
              friends in your car.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/drink-driving">
              <span>
                <FaGlassCheers id={styles.featuresIcon} />
              </span>
              <h3>2. Drink Driving</h3>
            </a>
            <p>
              1 in five 5 deaths involve alcohol. Young men aged 16-24 are more
              likely to die from an alcohol related road traffic collision and
              are the cause of over 400 deaths each year.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/drugs">
              <span>
                <FaTablets id={styles.featuresIcon} />
              </span>
              <h3>3. Drugs</h3>
            </a>
            <p>
              Research by Transport Research Laboratory (TRL) found that 17% of
              drivers who die in road crashes (more than one in six) have traces
              of illegal drugs in their system, which may have affected their
              driving.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/insurance">
              <span>
                <FaMoneyBill id={styles.featuresIcon} />
              </span>
              <h3>4. Insurance</h3>
            </a>
            <p>
              Insurance can be expensive and the biggest factors that influence
              your premium are age and where you live. Of course these are
              things you can't really alter, but these are not the only factors
              that influence your premium. Using popular price comparison
              websites, you can easily save up to 35% of the cost of your
              insurance.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/using-a-mobile-phone">
              <span>
                <FaMobileAlt id={styles.featuresIcon} />
              </span>
              <h3>5. Mobile Phones</h3>
            </a>
            <p>
              A good driver is completely focused on the road. Always. Using a
              hand-held or hands-free mobile phone while driving is a
              distraction and increases the risk of a driver crashing.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/seatbelts">
              <span>
                <FaUserInjured id={styles.featuresIcon} />
              </span>
              <h3>6. Seatbelts</h3>
            </a>
            <p>
              In a crash, someone not wearing a seatbelt is twice as likely to
              die as someone who is using one. Research indicates that
              approximately one-third of those killed in collisions weren’t
              wearing a seatbelt. If you think you don’t need to wear a seatbelt
              because your car has airbags, think again. The proper term for an
              airbag is a Supplementary Restraint System (SRS) - supplementary
              meaning ‘in addition to’. That means in addition to the seatbelt!
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/showing-off">
              <span>
                <FaCarCrash id={styles.featuresIcon} />
              </span>
              <h3>7. Showing Off</h3>
            </a>
            <p>
              Fancy a £150 fine and a long walk home? The police have the power
              to seize your vehicle if, after receiving a warning, you drive of
              the ride carelessly or without reasonable consideration for other
              road users, and in a manner which causes alarm, distress or
              annoyance.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/speeding">
              <span>
                <FaTachometerAlt id={styles.featuresIcon} />
              </span>
              <h3>8. Speeding</h3>
            </a>
            <p>
              Excessive speed contributes to 12% of all injury-causing crashes,
              18% of crashes resulting in a serious injury and 28% of all fatal
              crashes. That means around 500 people are killed each year on
              Britain's roads because drivers and riders travel too fast.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/tiredness">
              <span>
                <FaBed id={styles.featuresIcon} />
              </span>
              <h3>9. Tiredness</h3>
            </a>
            <p>
              Young drivers are statistically more likely to crash because they
              are twice as likely to undertake a journey whilst feeling tired.
              One in four young drivers admit to continuing to drive while
              experiencing signs of fatigue, compared with one in eight of the
              rest of the population.
            </p>
          </div>
          <div className={styles.column}>
            <a href="https://thehonesttruth.co.uk/pages/passing">
              <span>
                <FaBicycle id={styles.featuresIcon} />
              </span>
              <h3>10. Road Users</h3>
            </a>
            <p>
              Almost everyone walks and most people, at some time, ride a
              bicycle. And yet, around 45,000 cyclists and pedestrians are
              killed or injured on Britain’s roads every year. The driver was
              found to be at fault in most collisions involving a cyclist and a
              car. Cyclists are 30 times more likely to be seriously injured in
              a collision than a car occupant.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
