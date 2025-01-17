import React from "react";
import styles from "./ElectricCar.module.css";
import electricCar from "../../assets/images/electric-Car.png";
import electricCarScheme from "../../assets/images/electric carScheme.png";

import treesImgs from "../../assets/images/trees-img.png";
import BuildingImg from "../../assets/images/buliding img.png";
import treeImg from "../../assets/images/tree img.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ElectricCarScheme() {
  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "ELECTRIC CAR ";
    const secondPart = "SCHEME"; // Second part after "Driving"

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
    const letters = text2Ref.current.querySelectorAll("span");

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
        color: "rgb(3, 154, 136)", // Change text color to red
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
        color: "rgb(3, 154, 3)", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  return (
    <div className={styles.ElectricCarScheme}>
      {/* /////////////////// frontc ///////////////////// */}
      <div className={styles.eCsfront}>
        <section className={styles.eCSfrontSection}>
          <div className={styles.csrPageFront}>
            <div className="opicity"></div>
            <section className={styles.ecsheder}>
              <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>

              <div className={styles.csrPagesLd}>
                <p>
                  Here at SmartLearner Driving school we are committed to
                  reducing our carbon footprint! Throughout 2024 and the future,
                  we continuously strive to become an even more sustainable and
                  eco-friendly company.
                </p>
              </div>
            </section>
          </div>
        </section>
        <section className={styles.eCs2ndSectiondiv}>
          <section className={styles.eCs2ndSectionhead}>
            <h2>
              {" "}
              <span>SKY BLUE CITY</span>{" "}
              <span style={{ color: "rgb(6, 169, 88)"}}>TURNS GREEN</span>
            </h2>
            <section className={styles.csrPagesLd2}>
              {" "}
              <p>In Partnership with Coventry City Council</p>
            </section>
          </section>
          <section className={styles.electricCarSchemeSection}>
            <div className={styles.ecs2ndimgSection}>
              <img src={electricCar} alt="electricCar" />
              <img src={electricCarScheme} alt="electricCar-Scheme" />
            </div>
            <div className={styles.csrPagesLd22}>
              <p>
                As a driving school, we're committed to reducing our CO2
                emissions. SmartLearner is partnering with Coventry city council
                to offer electric cars for our instructors and students.
              </p>
             
            </div>
            <div className={styles.csrPagesLd22}>
             
              <p>
                This initiative sets a green example for our community and
                promotes eco-conscious driving choices. With this change, we aim
                to raise awareness about CO2 emissions and their impact on air
                quality.
              </p>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////// */}
        <section className={styles.textMainSection}>
          <section className={styles.textEscsection}>
            <div className={styles.csrPagesLd232}>
            <p>
              Thanks to Coventry city council's support we're leading the way
              towards a healthier environment.
              <span>
                {" "}
                SmartLearner is proud to be the first driving school in the West
                Midlands with an electric car.
              </span>
            </p>
            </div>
           
          </section>
          <section className={styles.treeImgsSection}>
            <img src={treesImgs} alt="trees-Img" />
            <img src={treesImgs} alt="trees-Img" />
            <img src={treesImgs} alt="trees-Img" />
          </section>
          
        </section>

        {/* ////////////////////////////////////// */}
        <section className={styles.escBDSection}>
          <div className={styles.escBdHeading}>
            <h2>ELECTRIC <span   style={{ color: "rgb(6, 169, 88)"}}>ENGINES</span></h2>
          </div>
          <section className={styles.escBenifits}>
            <div className={styles.escBDDiv} id={styles.escBDDivcd}>
              <section>
                <h2>BENEFITS</h2>
                <p>
                  Electrically powered - electricity can be renewable resource
                  gasoline cannot.
                </p>
                <p>Electric engines do not release co2 emissions.</p>
                <p>
                  Annual tax and maintenance costs (including MOTs and
                  servicing) for electric vehicles are 49% lower than for petrol
                  models.
                </p>
              </section>
            </div>
            <div className={styles.escBDDiv} id={styles.escBDDivdc}>
              <div>
                {" "}
                <h2>DISADVANTAGES</h2>
                <p>Recharging the battery takes times.</p>
                <p>It can sometimes difficult to find a charging station.</p>
                <p>
                  Insurance costs are on average 25% higher for electric
                  vehicles.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////// */}
        <section className={styles.escBDSection}>
          <div className={styles.escBdHeading}>
            <h2>COMBUSTION <span   style={{ color: "rgb(6, 169, 88)"}}>ENGINES</span></h2>
          
          </div>
          <section className={styles.escBenifits}>
            <div className={styles.escBDDiv} id={styles.escBDDivcd}>
              <section>
                <h2>BENEFITS</h2>
                <p>Gas powered cars have more power.</p>
                <p>Have better agility in terms of acceleration and speed.</p>
                <p>Can be refilled quickly.</p>
              </section>
            </div>
            <div className={styles.escBDDiv} id={styles.escBDDivdc}>
              <div>
                {" "}
                <h2>DISADVANTAGES</h2>
                <p>
                  Gas powered vehicles emit harmful emissions causing pollution
                  to our atmosphere.
                </p>
                <p>
                  The cost of fuel is expensive. For an electric car to travel
                  100 miles would cost around 4p per mile in comparison to gas
                  powered car costing 9p per mile. fuel costing fuel costing £5
                  more.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////// */}
        <section className={styles.escBDSection}>
          <div className={styles.escBdHeading}>
            <h2>OUR OTHER <span  style={{ color: "rgb(6, 169, 88)"}}>PROJECTS</span> </h2>
           
          </div>
          <section className={styles.csr3rdDivSecLinks}>
            <Link to="/Going-Green-Project" id={styles.escBDDivcd}>
              <img src={treeImg} alt="eclectric-Img" />
              <p>Going Green Project</p>
            </Link>
            <Link to="/Our-Office-Green-Efforts" id={styles.escBDDivdc}>
              <img src={BuildingImg} alt="eclectric-Img" />
              <p>Our Office Efforts</p>
            </Link>
          </section>
        </section>
      </div>
    </div>
  );
}
