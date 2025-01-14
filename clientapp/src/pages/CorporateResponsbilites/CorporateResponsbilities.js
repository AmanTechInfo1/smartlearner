import React from "react";
import styles from "./CorporateResponsbilities.module.css";
import earthImg from "../../assets/images/earthImg.png";
import eclectricImg from "../../assets/images/electric wave.png";
import BuildingImg from "../../assets/images/buliding img.png";
import treeImg from "../../assets/images/tree img.png";
import { Link } from "react-router-dom";
import handShake from "../../assets/images/hand shake.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CorporateResponsbilities() {


  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart =
      "CORPORATE SOCIAL";
      const secondPart = "RESPONSIBILITY"; // Second part after "Driving"

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
        color: "#FF5733", // Change text color to red
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
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);
// ///////////////////////////////////////////////////////////////////////////
const textRef = useRef(null);

  const splitText = () => {
    const firstPart =
      "OUR PLANET";
      const secondPart = "OUR RESPONSIBILITY"; // Second part after "Driving"

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
        color: "#00bb42", // Change text color to red
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
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  // /////////////////////////////////////////////////////////////////
  const text3Ref = useRef(null);

  const splitText3 = () => {
    const firstPart =
      "SL SAVING THE PLANET";
      
      // Split both parts into individual characters and map them to <span>
      const firstLine = firstPart
        .split("")
        .map((char, index) => <span key={`first-${index}`}>{char}</span>);
  
      
  
      // Return the first line, a <br>, and then the second line
      return (
        <>
          {firstLine}
        
        </>
      );
    };

  useEffect(() => {
    const letters = text3Ref.current.querySelectorAll("span");

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
        color: "#FF5733", // Change text color to red
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
        color: "#ee0063", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  
  return (
    <div className={styles.csrPages}>
      <div className={styles.csrpages}>
        <div className={styles.csrPageFront}>
          <div className="opicity"></div>
          <section className={styles.csrSectionFornt}>
            <h2 ref={text2Ref}>{splitTextPartTwo()}
            </h2>
            <div className={styles.csrPagesLd}>
          <p>
            Here at SmartLearner driving school it is our social responsibility
            to reducing our carbon footprint!
          </p>
          <p>
            Throughout 2024 and the future we plan to take steps towards
            becoming a sustainable and eco-friendly company.
          </p>
        </div>
          </section>
      
        </div>
        {/* ///////////////////////////////////////////////// */}
     

        <div className={styles.csr2ndDiv}>
          <section className={styles.csr2ndDivHS}>
            <div className={styles.csr2ndDivHeading}>
              <h2 ref={textRef}>{splitText()} 
              </h2>
            </div>
            <div className={styles.csr2ndDivImg}>
              <img src={earthImg} alt="earth Img" />
            </div>
          </section>
          <div className={styles.csr2ndListDiv}>
            <p>
              Lockdown due to coronavirus (COVID-19) was a hard time for the
              world, however, it has it's benefits. One of the major positive
              impacts COVID had was on our environment.
            </p>
            <p>
              There us no doubt that carbon emissions have sharply fallen in the
              recent year and this has had a instant effect on our planet.
            </p>
            <p>
              Clear water in the Venice canals, blue skies over Delhi and wild
              animals are roaming in locked-down cities.
            </p>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}
        <div className={styles.csr3rddiv}>
          <hr />
          <section className={styles.csr3rdDivSec}>
            <h2 ref={text3Ref}>{splitText3()}</h2>
            <p>
              Click the <span>icons</span> icons below to find out more about
              SmartLearners current efforts to save our planet
            </p>
          </section>
          <section className={styles.csr3rdDivSecLinks}>
            <Link to='/Electric-Car-Scheme'>
              <img src={eclectricImg} alt="eclectric-Img" />
              <p>Electric Car Scheme</p>
            </Link>
            <Link to='/Going-Green-Project'>
              <img src={treeImg} alt="eclectric-Img" />
              <p>Going Green Project</p>
            </Link>
            <Link to='/Our-Office-Green-Efforts'>
              <img src={BuildingImg} alt="eclectric-Img" />
              <p>Our Office Efforts</p>
            </Link>
          </section>
        </div>

        {/* ////////////////////////////////////////////////////// */}
        <div className={styles.smartlearnerPladgesSection}>
          <section id={styles.smartlearnerPladges}>
            <img src={handShake} alt="hand-Shake" />
            
          </section>
          <div className={styles.smartlearnerPladgesheading}>
          <h2>SMARTLEARNER <span>PLEDGES</span></h2>
          <hr />
          </div>
          <section className={styles.smartlearnerPlListSection}>
            <div className={styles.smartlearnerPlLists}>
              <img src={eclectricImg} alt="eclectric-Img" />
              <p>
                By 2025, 35% of our fleet will be fully electric, with hopes of
                all vehicles being 100% electric by 2030{" "}
              </p>
            </div>
            <div className={styles.smartlearnerPlLists}>
              <img src={treeImg} alt="tree-Img" />
              <p>
                By the end of 2024, we will have planted over 200 trees
                Coventry's community and residential areas. Collaborating and
                partnering up with multiple schools & colleges to plant trees
                within the West Midlands and Warwickshire.
              </p>
            </div >
            <div className={styles.smartlearnerPlLists}>
              <img src={BuildingImg} alt="building-Img" />
              <p>
                Our office will engage focus on becoming more environmentally
                friendly and focus on being sustainable.
              </p>
            </div> 
          </section>
        </div>
        {/* /////////////////////////////////////////////////// */}
        

      </div>
    </div>
  );
}
