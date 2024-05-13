// import React from 'react'
import styles from "./Communities.module.css";
import Champion from "../../assets/images/communityChempionImg.png";
import { FaHandshake, FaTrophy, FaStar } from "react-icons/fa";

export default function CommunitiesChampions() {
  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Community Champions</h1>
            </div>

            <div className={styles.heading2}>
              <p>“The local school for local people”</p>
              <p>
                Winners of Intelligent Instructor Awards 2023 ‘ Community
                Champion Of The Year’{" "}
              </p>
            </div>
          </div>
          <div className={styles.video}>
            <img src={Champion} alt="Champion" />
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////// */}

      <section className={styles.supportingOurCommunity}>
        <span>
          <FaHandshake id={styles.featuresIcon2} />
        </span>
        <h2>SUPPORTING OUR CITY AND COMMUNITY</h2>
      </section>
      {/* /////////////////////////////////////////// */}

      <section className={styles.communitySection}>
        <div className={styles.communitySectiondiv}>
          <ul type="none">
            <h2>So Far</h2>
            <li>
              <FaTrophy id={styles.communityIcons} />
              <p>
                1. 315 EASTER EGG Campaign: We raised 500+ Easter Eggs in
                support of Easter Eggs for Zoe's Place and Coventry and
                Warwickshire Univerity Hospital.
              </p>
            </li>
            <li>
              <FaTrophy id={styles.communityIcons} />
              <p>
                2. SEND YOUR LOVE Campaign: Donated essential food and items for
                vulnerable families through our local food bank. In partnership
                with Coventry City Council.
              </p>
            </li>
            <li>
              <FaTrophy id={styles.communityIcons} />
              <p>
                3. BIKEATHON Project: Raised £300+ for Seed of Sight charity, as
                well as worked with NHS to provide free diabetes health checks.
              </p>
            </li>
            <li>
              <FaTrophy id={styles.communityIcons} />
              <p>
                4. CYCLE RECYCLER Competition: Advocating green modes of
                transport and sustainability, we launched a competition for
                individuals to win 2 recycled bikes.
              </p>
            </li>
          </ul>
          <ul type="none">
            <h2>The Future</h2>
            <li>
              <FaStar id={styles.communityIcons} />
              <p>
                SmartLearner strives to consistently support, help and aid
                individuals within our local community and city. If you would
                like to be a part of our campaigns or have a recommendation in
                regard to what charity or cause you may want us to support, feel
                free to contact us via email at Admin@smartlearner.com or call
                us on 02475092784
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* //////////////////////////////////////////// */}

      <section className={styles.communityChempionContentDetails}>
        <div className={styles.communityChempionContentDetailsdiv}>
          {" "}
          <h2>315 EASTER EGG CAMPAIGN</h2>
          <p>
            One of our most recognisable campaigns is the 315 Easter Egg project
            that we launched within the spring season in 2022.
          </p>
          <p>
            In partnership with Zoe’s Place Baby Hospice and University Hospital
            Coventry & Warwickshire’s children’s ward; our mission was to make a
            difference by bringing in more joy and more eggs to the families,
            children and staff of both establishments!
          </p>
          <p>
            The goal was to raise 315 Easter eggs to be distributed among these
            foundations, we successfully exceeded our goal by raising 500+
            Easter eggs from our instructors, learners, individuals and kind
            donors within the Coventry community.
          </p>
          <p>
            Gaining notoriety, we caught the attention of our local MP Taiwo;
            and with the overflowing and surplus of donations we were able to
            reach out to different charities and homes within the West Midlands
            and spread the Easter spirit to more doors than we can imagine;
            donating to care homes in coventry, Holbrooks’ community centre as
            well as care homes situated in Nuneaton!{" "}
          </p>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////// */}

      <section className={styles.communityChempionContentDetails}>
        <div className={styles.communityChempionContentDetailsdiv}>
          {" "}
          <h2>SEND YOUR LOVE: CHRISTMAS FOOD BANK</h2>
          <p>
            For 2 years consecutively we collaborated with Coventry City Council
            and our local food bank to raise and donate necessary food and items
            to vulnerable families. Last year in 2022, we were able to raise a
            total of £300+ worth of donations for the local community, breaking
            our previous year’s record.
          </p>
          <p>
            Through this, we were ecstatic to know that we were more than
            capable in supporting and assisting as many families as we can
            during the winter seasons. We could not have achieved this without
            the sincere and kind support of our office staff, instructors and
            the local individuals of our community.
          </p>
        </div>
      </section>
      {/* //////////////////////////////////////////////////////////////////// */}
      <section className={styles.communityChempionContentDetails}>
        <div className={styles.communityChempionContentDetailsdiv}>
          <h2>BIKEATHON £300 FOR SPEED OF SIGHT</h2>
          <p>
            In attendance to the annual intelligent’s instructor conference and
            expo, we worked hand in hand with NHS to provide free health checks
            for instructors and individuals, raising awareness to high blood
            pressure and diabetes. During the event, Smartlearner also held a
            Bikeathon to raise money for the Speed of Sight charity. Instructors
            came to participate in the bikeathon.
          </p>
          <p>
            For every minute spent on the bike, £1 was raised and donated to the
            charity. At the very end of the day we were able to raise a total of
            £300 for the charity! This went to support driving track events for
            people of all ages regardless of ability or disability.
          </p>
          <p>
            The charity empowers disabled people of all ages and allows them to
            participate in unique activities and experiences!
          </p>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////////////// */}

      <section className={styles.communityChempionContentDetails}>
        <div className={styles.communityChempionContentDetailsdiv}>
          {" "}
          <h2>THE CYCLE RECYCLER BIKE COMPETITION</h2>
          <p>
            Summer 2022, SmartLearner Driving School collaborated with The Cycle
            Recycler; a business that advocated reusing materials and revamping
            old bicycles.
          </p>
          <p>
            Through this competition and campaign, we wanted to shed more light
            and encourage our learners and people within our community to try
            alternative modes of transport as heavy representatives of
            sustainability.
          </p>
          <p>
            We held this competition through out the summer for 2 lucky
            individuals to win. We reached many different businesses to support
            our campaign and successfully gained as much as 500+ entries, which
            was then added onto an automated raffle.
          </p>
          <p>
            Below are pictures of two winners of our competition and one of the
            business owners that support the project!
          </p>
        </div>
      </section>
    </div>
  );
}
