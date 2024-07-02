// import React from 'react'
import styles from "./Communities.module.css";
import React from "react";
import handShaking from "../../assets/images/hand-shakes.png";
import communityChempionImg1 from "../../assets/images/community-champions/CChampion-1.jpg"
import communityChempionImg2 from "../../assets/images/community-champions/CChampion-2.jpg"
import communityChempionImg3 from "../../assets/images/community-champions/CChampion-3.jpg"
import communityChempionImg4 from "../../assets/images/community-champions/CChampion-4.jpg"
import communityChempionImg5 from "../../assets/images/community-champions/CChampion-5.jpg"
import communityChempionImg6 from "../../assets/images/community-champions/CChampion-6.jpg"
import communityChempionImg7 from "../../assets/images/community-champions/CChampion-7.jpg"
import communityChempionImg8 from "../../assets/images/community-champions/CChampion-8.jpg"
import communityChempionImg9 from "../../assets/images/community-champions/CChampion-9.jpg"
import communityChempionImg10 from "../../assets/images/community-champions/CChampion-10.jpg"
import communityChempionImg11 from "../../assets/images/community-champions/CChampion-11.jpg"
import communityChempionImg12 from "../../assets/images/community-champions/CChampion-12.jpg"
import communityChempionImg13 from "../../assets/images/community-champions/CChampion-13.jpg"
import communityChempionImg14 from "../../assets/images/community-champions/CChampion-14.jpg"
import communityChempionImg15 from "../../assets/images/community-champions/CChampion-15.jpg"

export default function CommunitiesChampions() {
  return (
    <div className={styles.OurOfficeGreenEfforts}>
      <div className={styles.eCsfront}>
        <section className={styles.eCSfrontSection}>
          <h2>COMMUNITY CHAMPIONS</h2>
          <hr />
          <h3>"The local school for local people"</h3>
          <p>
            Winners of Intelligent Instructors Awards 2023 & 2024 'Community
            Champion Of The Year'
          </p>
        </section>
        <section className={styles.cCSecondrySection}>
          <section id={styles.cCSecondrySection}>
            <div className={styles.cCSecondryHeadin}>
              <img src={handShaking} alt="handShake-Icon" />
              <h2>
                SUPPORTING OUR CITY <br />
                AND COMMUNITY
              </h2>
            </div>
            <hr></hr>
            <section className={styles.cCLists}>
              <p>
                <span>315 EASTER EGG Campaign:</span> We raised 500+ Easter
                Eggs support of Easter Eggs for Zoe's Place and Coventry and
                Warwickshire University Hospital.
              </p>
              <p>
                <span>SEND YOUR LOVE Campaign:</span> Donated essential food and
                items for vulnerable families through our local food bank. In
                partnership with Coventry City Council.
              </p>
              <p>
                <span>BIKEATHON Project:</span> Raised £300+ for speed of
                sight charity, as well as worked with NHS to provide free diabetes
                health checks.
              </p>
              <p>
                <span>CYCLE RECYCLER Competition:</span> Advocating green modes
                of transport and sustainability, we launched a competition for
                individuals to win 2 recycled bikes.
              </p>
            </section>
            <hr />
            {/* /////////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>315 EASTER EGG CAMPAIGN</h2>
                <p>
                  One of our most recognizable campaigns is the 315 EasterEgg
                  project, launched in spring 2022. Partnering with Zoe'sPlace
                  Baby Hospice and University Hospital Coventry &Warwickshire's
                  children's ward, our mission was to bring joy and Easter eggs
                  to the families, children, and staff of both establishments
                </p>
                <p>
                  Our goal was to raise 315 Easter eggs, but we surpassed this by
                  collecting over 500 eggs from instructors,
                  learners,individuals, and donors in the Coventry community.
                </p>
                <p>
                  Our success attracted local MP Taiwo's attention, and
                  the surplus donations allowed us to extend our reach to
                  various charities and homes across the West Midlands. We
                  donatedEaster eggs to care homes in Coventry,
                  Holbrook's Community Centre, and care homes in Nuneaton,
                  spreading the Easter spirit far and wide.
                </p>
              </div>
              <hr />
            </section>
            {/* /////////////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>
                  SEND YOUR LOVE:
                  <br />
                  CHRISTMAS FOOD BANK
                </h2>
                <p>
                  For years consecutively we collaborated with Coventry
                  CityCouncil and our local food bank to raise and
                  donate necessary food and items to vulnerable families. Last
                  year in2023, we were able to raise a total of £300+ worth
                  of donations for the local community, breaking our previous
                  year's record.
                </p>
                <p>
                  Through this, we were ecstatic to know that we were more than
                  capable in supporting and assisting as many families as we can
                  during the winter seasons. We could not have achieved this
                  without the sincere and kind support of our office staff,
                  instructors and the local individuals of our community.
                </p>
              </div>
              <hr />
            </section>
            {/* ////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>BIKEATHON £300 FOR SPEED OF SIGHT</h2>
                <p>
                  At the annual Intelligent Instructor Conference and Expo,
                  we partnered with the NHS to offer free health
                  checks,highlighting high blood pressure and diabetes
                  awareness.
                </p>
                <p>
                  Smartlearner also organized a Bikeathon, raising £1 per minute
                  for the Speed of Sight charity.
                </p>
                <p>
                  Instructors participated enthusiastically, and we raised£300
                  to support inclusive driving events for people of
                  all abilities. The charity empowers disabled individuals
                  to engage in unique activities and experiences.
                </p>
              </div>
              <hr />
            </section>

            {/* /////////////////////////////////////////////// */}
            <section className={styles.cCsContentSection}>
              <div id={styles.cCsContentSection}>
                <h2>CYCLE RECYCLER BIKE <br></br>COMPETITION</h2>
                <p>
                  In summer 2022, SmartLearner Driving School teamed up with The
                  Cycle Recycle to promote reusing materials and refurbishing
                  old bicycles.
                </p>
                <p>
                  Our goal was to raise 315 Easter eggs, but we surpassed this by
                  collecting over 500 eggs from instructors,
                  learners,individuals, and donors in the Coventry community.
                </p>
                <p>
                  Our campaign aimed to encourage our learners and community to
                  adopt sustainable transport. We held a summer-long competition,
                  attracting over 500 entries, with support from various
                  businesses. Two lucky winners were selected through an
                  automated raffle. Below are photos of the winners and one of
                  the supporting business owners!
                </p>
              </div>
              <hr />
            </section>
            {/* ////////////////////////////////////// */}
              <section className={styles.cCImagesSec}>
                  <div className={styles.cCImagesdiv}>
                      <img src={communityChempionImg1} alt="communityChempion-Images"/>
                      <img src={communityChempionImg2} alt="communityChempion-Images"/>
                      <img src={communityChempionImg3} alt="communityChempion-Images"/>
                      <img src={communityChempionImg4} alt="communityChempion-Images"/>
                      <img src={communityChempionImg5} alt="communityChempion-Images"/>
                      <img src={communityChempionImg6} alt="communityChempion-Images"/>
                      <img src={communityChempionImg7} alt="communityChempion-Images"/>
                      <img src={communityChempionImg8} alt="communityChempion-Images"/>
                      <img src={communityChempionImg9} alt="communityChempion-Images"/>
                      <img src={communityChempionImg10} alt="communityChempion-Images"/>
                      <img src={communityChempionImg11} alt="communityChempion-Images"/>
                      <img src={communityChempionImg12} alt="communityChempion-Images"/>
                      <img src={communityChempionImg13} alt="communityChempion-Images"/>
                      <img src={communityChempionImg14} alt="communityChempion-Images"/>
                      <img src={communityChempionImg15} alt="communityChempion-Images"/>

                  </div>
                  <div id={styles.schoolLocal}>
                    <p>"The local School for local people"</p>
                  </div>
              </section>
            {/* /////////////////////////////////// */}
          </section>
        </section>
      </div>
    </div>
  );
}
