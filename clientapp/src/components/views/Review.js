import React from "react";
import styles from "./css/review.module.css";
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Review() {
  return (
    <>
      <section className={styles.facebookReviewsSection}>
        <div className={styles.facebookReviewsContainer}>
          <h4 id={styles.heading1}>Our Reviews</h4>
          <hr />
          <div className={styles.reviewsList}>
          <iframe src='https://02d2282858a742f1bc8b078acf8f747a.elf.site' width='100%' height='550px' frameborder='0'></iframe>
           
          </div>
          <div className={styles.followUsLinks}>
            <h4>Follow us!</h4>
            <hr />
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
                <FaXTwitter id={styles.FollowIcons} />
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
      </section>
    </>
  );
}

export default Review;
