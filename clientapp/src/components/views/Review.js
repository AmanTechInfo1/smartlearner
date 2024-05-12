import React from 'react'
import styles from './css/review.module.css';
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter, FaYoutube, } from "react-icons/fa";

function Review() {
    return (
        <>
            <section className={styles.facebookReviewsSection}>
                <div className={styles.facebookReviewsContainer}>
                    <h4 id={styles.heading1}>Our Reviews</h4>
                    <hr />
                    <div className={styles.reviewsList}></div>
                    <div className={styles.followUsLinks}>
                        <h4>Follow us!</h4>
                        <hr />
                        <div className={styles.socialFollowIcons}>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook id={styles.FollowIcons} />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram id={styles.FollowIcons} />
                            </a>
                            <a
                                href="https://www.snapchat.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaSnapchat id={styles.FollowIcons} />
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter id={styles.FollowIcons} />
                            </a>
                            <a
                                href="https://www.youtube.com/"
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
    )
}

export default Review