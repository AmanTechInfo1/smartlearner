
import styles from "./AdiModuletwo.module.css";

import  { useEffect,useRef } from 'react'
import gsap from "gsap";


export default function AdiModuleTwo() {

 const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => { 
    const firstPart = "Vehicle Checks to Perform Before the Test"; // First part before "Driving"
 
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
      {" "}
      <div className={styles.AdiModuleOnecontainer}>
        <section className={styles.AdiModuleOneheader}>
        <h1 ref={textRef}>{splitText()}</h1>
        </section>
        <section className={styles.AdiModuleOneintroduction}>
          <h2>Roadworthiness Checks:</h2>
          <p>
            A great way to remember your own and vehicle checks is the POWDER
            Model
          </p>
        </section>
        <div className={styles.AdiModuleOnecheckList}>
          <h2>'Roadcraft', the Police Drivers' Handbook</h2>
          <ul>
            <li>
              <strong>Petrol :</strong> Ensure that you have sufficient fuel for
              your journey
            </li>
            <li>
              <strong>Oil :</strong> Oil level. Secure oil filler cap and
              dipstick
            </li>
            <li>
              <strong>Water :</strong> Radiator (and screen wash) water levels,
              including coolant/antifreeze mixture
            </li>
            <li>
              <strong>Damage :</strong> Visual inspection of exterior looking
              for insecure items and/or damage
            </li>
            <li>
              <strong>Electrics :</strong> Verify operation of electrical
              systems , Lights mandatory running lights (main and dipped beam)
              Brake and reversing lights , Indicators and hazard warning lights
              , Number plate light (rear), High intensity lights, Emergency
              warning lights (blue, headlight flash, rear red) Interior
              instrument warning lights, Audible warning systems (horn/two tone
              horns), Audible warning systems (horn/two tone horns)
            </li>
            <li>
              <strong>Rubber :</strong> Wheels - wheel nuts secured to correct
              torque setting Tyres - tread depth/free from cuts, bulges,
              tears/pressure/compatibility, Peddle Rubbers
            </li>
            <li>
              <strong>You :</strong> Not tired/under influence of drink or
              drugs, wearing any spectacles prescribed
            </li>
          </ul>
        </div>

        <section className={styles.AdiModuleOneintroduction}>
          <h2>Familiarising Yourself with Vehicle Technology</h2>
          <p>
            Modern vehicles often come equipped with advanced technology that
            can aid your driving. You must be confident in operating these
            systems, as the examiner may expect you to use them during the test.
          </p>
        </section>

        <section className={styles.AdiModuleOnechecks}>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>1. Dashboard Controls:</h3>
            <ul>
              <li>
                Know the location and function of key controls, including
                lights, wipers, and hazard lights.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>2. Electronic Parking Brake</h3>
            <ul>
              <li>
                If applicable, ensure you can operate the electronic parking
                brake confidently, including hill starts.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>3. Sat-Nav :</h3>
            <ul>
              <li>
                Be comfortable programming and following directions from the
                sat-nav, as this may be required during the test.
              </li>
            </ul>
          </div>

          <div className={styles.AdiModuleOnecheckList}>
            <h3>4. Eco-Driving Features :</h3>
            <ul>
              <li>
                Understand how to use start-stop systems and fuel-efficiency
                indicators if available.
              </li>
              <li>
                Understand when and how you should use speed limiters or cruise
                control if applicable
              </li>
            </ul>
          </div>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>5. Air Conditioning/Demisters :</h3>
            <ul>
              <li>
                Know how to adjust temperature settings and clear windscreen fog
                quickly and efficiently.{" "}
              </li>
            </ul>
          </div>
          <div className={styles.AdiModuleOnecheckList}>
            <h3>6. Reversing Aids :</h3>
            <ul>
              <li>
                Familiarise yourself with reversing cameras or sensors and
                understand their limitations.{" "}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
