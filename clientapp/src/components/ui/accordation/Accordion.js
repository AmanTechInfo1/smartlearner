import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { BiSolidTagAlt } from "react-icons/bi";

const AccordionItem = ({ title, content, defaultActive }) => {
  const [isActive, setIsActive] = useState(defaultActive || false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionHeader} ${isActive ? styles.active : ""}`}
        onClick={toggleAccordion}
      >
        <BiSolidTagAlt id={styles.RightFilled} /> {title}
      </button>
      <div
        className={`${styles.accordionContent} ${
          isActive ? styles.active : ""
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <AccordionItem
        title="SEND YOUR LOVE DONATIONS"
        content="In December 2021, SmartLearner Driving School supported theCoventry Food Network's 'Send Your Love' campaign,sanctioned by Coventry City Council, to provide food forvulnerable families. Our Hen Lane (Holbrooks) office became afood drop-off point, enabling donations.For those unable to drop off food, our instructors collecteddonations across Coventry. Every Christmas, we participate indonating food to the food bank."
        defaultActive={true} // Set the first accordion item to be open by default
      />
      <AccordionItem
        title="FAMILY TICKETS TO DINNER & THEATER"
        content="In December 2021, SmartLearner Driving School supported theCoventry Food Network's 'Send Your Love' campaign,sanctioned by Coventry City Council, to provide food forvulnerable families. Our Hen Lane (Holbrooks) office became afood drop-off point, enabling donations.For those unable to drop off food, our instructors collecteddonations across Coventry. Every Christmas, we participate indonating food to the food bank."
      />
      <AccordionItem
        title="FAMILY TICKETS FOR FIRE DISPLAYS"
        content="In light of the Bonfire night, In November 2021, SmartLearnerDriving School sponsored tickets for a family of 4, in thecelebration of sports and community, followed by annualfireworks display at Coventry Rugby Club.All Go CV registered card users had the opportunity to winthese free tickets through the Go CV Facebook page."
      />
    </div>
  );
};

export default Accordion;
