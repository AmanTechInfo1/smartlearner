import React from "react";
import styles from "./PrivledgeCards.module.css";
import frontPrivledge from "../../assets/images/privcard.png";
import backPrivledge from "../../assets/images/backprivcard.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  padding: 20px;
  max-width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  min-width: 900px;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 18px; /* Increase the font size for better readability */
`;

const TableHead = styled.th`
  background: rgba(1, 0, 70, 0.91);
  color: white;
  padding: 15px;
  border: 1px solid #ddd; /* Add border to table header */
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

const TableCell = styled.td`
  background: rgba(58, 0, 70, 0.91);
  color: white;
  padding: 22px;
  font-size: 20px;

  border: 1px solid #ddd; /* Add border to table cells */
  word-wrap: break-word;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #555;
  }

  &:hover {
    background-color: #666;
  }
`;

const Link = styled.a`
  color: rgb(212, 2, 2); /* Link color */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: blue; /* Underline link on hover */
  }
`;

export default function PrivledgeCards() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Our Privilege Cards"; // First part before "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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

  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "Privilege Cards"; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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
  const data = [
    {
      name: "Merrys Garage",
      discount: "10% off the final bill for any work in the garage",
      contact:
        "Pritt – 02476225172  https://www.facebook.com/profile.php?id=100057298884921",
    },
    {
      name: "Muny Luxe",
      discount: "£50 off any training courses, 10% off any services",
      contact: "https://www.instagram.com/munyluxe?igsh=MWo0ZHVpMmU2bXU0",
    },
    {
      name: "VV Phones",
      discount: "10% discount on any final bill over £50",
      contact: "Manager – 07507182962 https://www.facebook.com/vvphonerepairs",
    },
    {
      name: "Dean’s Dessert",
      discount: "Free ‘simple me’ when you spend over £15",
      contact:
        "Dean – 07944554680 https://www.facebook.com/profile.php?id=100063886427482",
    },
    {
      name: "Tropic Vegan Products",
      discount: "Free hand cream for all orders over £40",
      contact: "Alison – 07547944157 https://www.facebook.com/tropicbyalison",
    },
    {
      name: "SAY Stylists",
      discount: "50% off first services, inc – nails, hair & beauty",
      contact:
        "General Phone – 07823758690 https://www.instagram.com/saystylists",
    },
    {
      name: "Tays Bespoke Treats",
      discount: "10% off any order over £30",
      contact:
        "Facebook Page – Tays Bespoke Treats https://www.facebook.com/profile.php?id=100086359977403",
    },

    {
      name: "Becka’s Aesthetics",
      discount: "10% off all treatments",
      contact:
        "Facebook Page – Becka’s Aesthetics https://www.facebook.com/Beckalashes",
    },
    {
      name: "Adams Eye Test",
      discount: "Free eye test on your first visit",
      contact:
        "Facebook Page – Adams Eye Heath Opticians https://www.facebook.com/profile.php?id=100054542856588",
    },
    {
      name: "Cafe 101",
      discount: "10% off orders over £30",
      contact: "Cafe 101 - 07956793727",
    },
  ];

  return (
    <div className={styles.CardPage}>
      <div className={styles.Cardcontainer}>
        <div className={styles.CardHomeBanner}>
          <div className={styles.opicity}></div>
          <section>
            <div className={styles.Cardheader}>
              <h2 ref={textRef}>{splitText()}</h2>
            </div>
          </section>
        </div>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.Card2ndContainer}>
          <div className={styles.PrivledgeCardsHeader}>
            <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>
          </div>
          <div className={styles.PrivledgeCards}>
            <div className={styles.PrivledgeCardsDiv}>
              <img src={frontPrivledge} alt="Privledge-card" />
            </div>
            <div className={styles.PrivledgeCardsDiv}>
              <img src={backPrivledge} alt="Privledge-card" />
            </div>
          </div>

          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <TableHead>Business Name</TableHead>
                  <TableHead>Discount Confirmed</TableHead>
                  <TableHead>Contact Details</TableHead>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.discount}</TableCell>
                    <TableCell>
                      {item.contact.split(" ").map((text, idx) => {
                        // Check if it's a URL and render it as a clickable link
                        return /^(https?:\/\/)/.test(text) ? (
                          <Link href={text} target="_blank" key={idx}>
                            {text}
                          </Link>
                        ) : (
                          <span key={idx}>{text} </span>
                        );
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </section>
      </div>
    </div>
  );
}
