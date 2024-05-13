// import React from 'react'
import styles from "./GoCv.module.css";
import goCv from "../../assets/images/goCVwhiteLogo.png";
import coventryCityCouncil from "../../assets/images/coventryCityCouncil.png";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import smartlearner2ndLogo from "../../assets/images/smartlearnerLogo.png";
import Accordion from "react-bootstrap/Accordion";

export default function GoCv() {
  return (
    <div>
      <div className={styles.goCvFirstdiv}>
        <section className={styles.goCvFirstSection}>
          <div className={styles.goCvFirstSectionHeading}>
            <h2>Go CV PARTNERSHIP</h2>
            <hr />
          </div>
          <div className={styles.goCvFirstSectionHeadingImg}>
            <img src={goCv} alt="goCv" id={styles.goCvImg} />
            <img
              src={smartlearnerLogo}
              alt="smartlearnerLogo"
              id={styles.smartlearnerLogo}
            />
            <img
              src={coventryCityCouncil}
              alt="coventryCityCouncil"
              id={styles.coventryCityCouncil}
            />
          </div>
        </section>
      </div>

      {/* /////////////////////////////////////// */}
      <section className={styles.goCv2ndSection}>
        <h2>IN COLLABORATION WITH</h2>
        <img src={smartlearner2ndLogo} alt="smartlearnerLogo" />
        <p>
          SmartLearner Driving School extends regular sponsorship and
          partnership offers for the Go CV membership.
        </p>
        <p>
          Through this collaboration, it allows SmartLearner to support and fund
          events and attractions for local individuals and families who may be
          underprivileged.
        </p>
        <p>
          SmartLearner Driving School aims and focuses on how we can support and
          help better the local Coventry community as a whole. Supporting Go CV
          allows us to support local businesses and projects. As well as to
          provide free to low costs tickets to local events, shows and
          destinations for families less financially able.{" "}
        </p>
        <p>
          Go CV and SmartLearner Driving School both work hand in hand to
          provide
        </p>
        <p>
          the best deals to the residents of Coventry. Helping aid the community
          to strive, together with the businesses, individuals and families
          living within the city
        </p>
      </section>
      {/* ///////////////////////////// */}

      <section className={styles.goCvListsSection}>
        <h2>SMARTLEARNER SPONSORSHIPS</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>SEND YOUR LOVE DONATIONS</Accordion.Header>
            <Accordion.Body>
              For December 2021, SmartLearner Driving School had the honour in
              supporting the Coventry Food Network ‘Send Your Love’ campaign
              sanctioned by Coventry City Council; which provided food to the
              most vulnerable families within the community.
              <br />
              The office also was converted on Hen Lane (Holbrooks) into a food
              drop-off point, which gave the opportunity for individuals and
              supporters to donate any food for the cause.
              <br />
              For people wanting to donate, yet not having the transportation to
              get to the office, SmartLearner had a fleet of instructors
              collecting food to distribute across Coventry. Individuals had the
              choice to contact SmartLearner office for the instructors to
              collect the donations.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              FAMILY TICKETS TO DINNER & THEATRE
            </Accordion.Header>
            <Accordion.Body>
              SmartLearner Driving School in support and in partnership of Go
              CV, sponsored a £50 dinner voucher at The Mulberry Coventry,
              followed by a family ticket of 4 seats for the spectacular magical
              panto ‘Beauty & the Beast’ donated by Belgrade Theatre, Coventry.
              <br />
              Go CV registered followers, audience and card users had the chance
              to win free dinner and tickets to the theatre, through the
              facebook competition set by the Go CV page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              FAMILY TICKETS TO DINNER & THEATRE
            </Accordion.Header>
            <Accordion.Body>
              In light of the Bonfire night last November 2021, SmartLearner
              Driving School sponsored tickets for a family of 4, in the
              celebration of sports and community, followed by annual fireworks
              display at Coventry Rugby Club.
              <br />
              All Go CV registered card users had the opportunity to win these
              free tickets through the Go CV Facebook page.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  );
}
