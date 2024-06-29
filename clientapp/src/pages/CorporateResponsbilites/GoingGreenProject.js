// import React from 'react'
import styles from "./GoingGreen.module.css";
import treeImg from "../../assets/images/trees-img.png";
import goingGreenImg1 from "../../assets/images/going-green-img.jpg";
import goingGreenImg2 from "../../assets/images/going-green-img2.jpg";
import goingGreenImg3 from "../../assets/images/going-green-img3.jpg";
import goingGreenImg4 from "../../assets/images/going-green-img4.jpg";
import goingGreenImg5 from "../../assets/images/going-green-img5.jpg";
import goingGreenImg6 from "../../assets/images/going-green-img6.jpg";

import treeIcon from "../../assets/images/tree-Icon.png";
import handPlant from "../../assets/images/hand-plant.png";
import flower from "../../assets/images/flower-img.png";
import { IoCall } from "react-icons/io5";
import { HiMailOpen } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {useState, useEffect, useRef } from "react";

export default function GoingGreenProject() {
  const [animatedValue1, setAnimatedValue1] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 135 ? 135 : newValue;
      });
     
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.animation = `${styles.grow} 1s forwards infinite alternate`;
        bar.style.height = `${bar.dataset.value}px`;
      }, index * 500); // Delay each bar's animation
    });
  }, []);

  const data = [80, 120, 160, 200, 240];

  return (
    <div className={styles.goingGreenProject}>
      <div className={styles.mainGoingGreenProject}>
        <section className={styles.gGPFrontSection}>
          <h2>GOING GREEN PROJECT</h2>
          <hr />
          <section className={styles.gGpFrontSectionD}>
            <div className={styles.gGpFrontImgS}>
              <img src={treeImg} alt="treeImg" />
            </div>
            <div className={styles.gGpFrontListP}>
              <p>
                SmartLearner Driving School championsenvironmental
                sustainability.
              </p>
              <p>
                Through our Going Green Project, we inspireeco-conscious driving
                and advocate forenvironmental preservation through tree
                plantingand education.
              </p>
              <p>
                Committed to reducing our carbon footprint, wecontinuously
                strive to become a sustainable andeco-friendly
                company."Prevention is better than cure."
              </p>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////// */}
        <section className={styles.secondrySection}>
          <div className={styles.secondryHeading}>
            <h2>"Prevention is better then cure."</h2>
            <hr />
          </div>

          <div className={styles.secondryImgSection}>
            <img src={goingGreenImg1} alt="goingGreenImg" />
            <img src={goingGreenImg2} alt="goingGreenImg" />
            <img src={goingGreenImg3} alt="goingGreenImg" />
            <img src={goingGreenImg4} alt="goingGreenImg" />
            <img src={goingGreenImg5} alt="goingGreenImg" />
            <img src={goingGreenImg6} alt="goingGreenImg" />
          </div>
          <hr />
        </section>
        {/* ////////////////////////////////////////////// */}
        <section className={styles.prosConsSection}>
          <hr />
          <div className={styles.ourProsConsdiv}>
            <div className={styles.ourProsConsSection}>
              <h2>OUR ETHOS</h2>
              <p>
                As a driving school, we at SmartLearner acknowledge our role in
                CO2 emissions and take responsibility for reducing our
                environmental impact.{" "}
              </p>
              <p>
                We believe in environmental restoration and the importance of
                green spaces, advocating that even small actions can have a big
                positive impact on our community and our environment.
              </p>
            </div>
            <hr />
            <div className={styles.ourProsConsSection}>
              <h2>OUR PURPOSE</h2>
              <p>
                SmartLearner estimates that each of our 60 instructors releases
                about 10 tons of CO2e yearly, totaling 600 tons collectively.
              </p>
              <p>
                To offset this, we'll plant 10 trees per instructor, as each
                tree absorbs 1 tonne of CO2e in its lifetime. Join our Going
                Green Project to help create a better future for our community.
              </p>
            </div>
          </div>
          <div className={styles.chartBarImgSec}>
            <h2>GREEN PROJECT PROGRESS</h2>
            <div className={styles.chartContainer}>
              {data.map((value, index) => (
                <div
                  key={index}
                  ref={(el) => (barsRef.current[index] = el)}
                  className={styles.bar}
                  style={{ height: `${value}px` }}
                  data-value={value}
                />
              ))}
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////// */}

        <section className={styles.treePlantationSection}>
          <div className={styles.treePlantationDiv}>
            <h2>So far we have planted a total of...</h2>
          </div>
          <div className={styles.treeIconDiv}>
            <img src={treeIcon} alt="treeIcon" />
          </div>
          <section className={styles.treeIconImgSection}>
            <div className={styles.plantImgSection}>
              <span id={styles.handPlant1}>
                <img id={styles.handPlant} src={handPlant} alt="handPlant" />
              </span>
            </div>
            <div className={styles.headingtreeNo}>
              <h2>{animatedValue1}+</h2>
            </div>
            <div className={styles.plantImgSection}>
              <span className={styles.flowerPlant}>
                <img id={styles.flowerPlant} src={flower} alt="flower" />
              </span>
            </div>
          </section>
          <section className={styles.ggPListSection}>
            <div className={styles.ggOlSection}>
              <ul typeo="none">
                <li>
                  <span>3</span>
                  <p>Trees in Stretton Academy</p>
                </li>
                <li>
                  <span>20</span>
                  <p>Wild cherry trees in PK school</p>
                </li>
                <li>
                  <span>40</span>
                  <p>Trees in Everdon estates</p>
                </li>
                <li>
                  <span>20</span>
                  <p>Wild cherry trees in PK school</p>
                </li>
                <li>
                  <span>25</span>
                  <p>Brown beech trees for Park Gate Primary</p>
                </li>
                <li>
                  <span>1</span>
                  <p>Established living willow dome structure for Park Gate</p>
                </li>
                <li>
                  <span>7</span>
                  <p>Fruit apple trees for President Kenndedy</p>
                </li>
                <li>
                  <span>20</span>
                  <p>Fruit Bushes for President Kenndedy</p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section className={styles.callUsSectiongg}>
          <hr />
          <div className={styles.getInvolved}>
            <h2>GET INVOLVED</h2>
            <p>
              Do you have land, a business or want to support us in our Green
              mission?
            </p>
          </div>
          {/* /////////////// calling details ////////////////// */}

          <div className={styles.drivingLessonsCd}>
            <section className={styles.drivinglCall}>
            <a href="tel:+4402475092784" className={styles.drivinglCall}>
            <IoCall id={styles.IconsS} />
            <p>02475 092 784</p>
          </a>
            </section>
            <section>
            <a href="mailto:admin@smartlearner.com">
            <HiMailOpen id={styles.IconsS} />
            <p>Admin@Smartlearner.com</p>
          </a>
            </section>
          </div>
        </section>

        <div className={styles.socialFollowIcons}>
          <a
            href="https://www.facebook.com/smartlearnerdrivingschool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook id={styles.FollowIcons} />
          </a>
          <a
            href="https://www.instagram.com/smartlearnerdrivingschool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram id={styles.FollowIcons} />
          </a>
          <a
            href="https://www.snapchat.com/add/smartlearner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSnapchat id={styles.FollowIcons} />
          </a>
          <a
            href="https://twitter.com/smartlearner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter id={styles.FollowIcons} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCWqlTyiFfPNqgKeffuo68rghttp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube id={styles.FollowIcons} />
          </a>
        </div>
      </div>
    </div>
  );
}
