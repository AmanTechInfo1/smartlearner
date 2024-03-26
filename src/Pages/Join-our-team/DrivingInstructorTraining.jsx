// import React from 'react'
import Lplateimg from "../../assets/images/L-Plate.jpg";
import { GoPlay } from "react-icons/go";
import {
  FaUserTie,
  FaRegMoneyBillAlt,
  FaBusinessTime,
  FaUserClock,
  FaCarSide,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import styles from "./Drivinginstructortraining.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import  { useState, useEffect } from 'react';
import {testimonialsData} from "../../assets/data/testimonials"
export default function DrivingInstructorTraining() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
    }, 2000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonialsData[currentTestimonialIndex];


  return (
    <div className={styles.drivingInstructorTraining}>
      <section className={styles.imageSection}>
        <div className={styles.overlay}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>DRIVING INSTRUCTOR TRAINING</h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                Forget The Rest,
                <br /> Learn With The Best!
              </h2>
            </div>
            <div className={styles.btn}>
              <button id={styles.btn}>Contact Us</button>
            </div>
          </div>
          <div className={styles.video}>
            <a href="/">
              <img src={Lplateimg} alt="LogoImg" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>
      {/* //////////////////////////// Why choose section */}
      <section className={styles.features}>
        <h4>Why choose SmartLearner?</h4>
        <p>
          SmartLearner Driving School are dedicated to making sure they make
          driving instructor training high-quality and affordable!
        </p>
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <span>
              <FaRegMoneyBillAlt id={styles.featuresIcon} />
            </span>

            <h3>Earn Over £30,000</h3>
            <p>An average full-time instructor will earn over £30K per year!</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaUserTie id={styles.featuresIcon} />
            </span>

            <h3>Be Your Own Boss</h3>
            <p>When you are an instructor you`re the boss.</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaBusinessTime id={styles.featuresIcon} />
            </span>

            <h3>Flexible Working Hours</h3>
            <p>Work hours that suit you and your family.</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaUserClock id={styles.featuresIcon} />
            </span>

            <h3>Full Office Support</h3>
            <p>We offer full office support to help ensure you succeed.</p>
          </div>
        </div>
      </section>
      {/* ////////////////////////////Book now section ///////////////////// */}
      <section className={styles.sectionContainer}>
        <div className={styles.iconDiv}>
          <FaCarSide className={styles.iconCar} />
        </div>
        <div className={styles.headingDiv}>
          <h1>Become a Driving Instructor!</h1>
        </div>
        <div className={styles.buttonDiv}>
          <a href="tel:+123456789">
            <button id={styles.buttonDiv}>Call Us</button>
          </a>
        </div>
      </section>

      {/* ////////////////How to become a Driving Instructor//////////////// */}
      <section className={styles.instructorContainer}>
        <div className={styles.innerInstructorContainer}>
          <h4>How to become a Driving Instructor</h4>
          <p>Driving Instructor Training with SmartLearner Driving School.</p>
          <div className={styles.detailsContainer}>
            <div className={styles.trainingDetails}>
              <h3>Step 1 - Preparation</h3>
              <hr />
              <p>
                The first step is making sure your eligible to become an
                instructor. To become an instructor you must be over 21 and have
                held a full driving license for 3+ years. You will be required
                to have a Criminal Record Check (CRB). There are 3 parts/exams
                you must pass before you become a fully qualified driving
                instructor. However, before you apply for these tests we will
                need to apply and receive your unique PRN number.
              </p>
            </div>
            <div className={styles.trainingDetails}>
              <h3>Step 2 - ADI Theory Test</h3>
              <hr />
              <p>
                Part 1 of ADI training is all about ensuring you have a thorough
                knowledge of the highway code and hazard perception. The test
                consists of 100 multiple choice questions with you needing to
                achieve a score of 85+ to pass. You will also need to pass the
                Hazard Perception test by achieving a score of 57 out of 75.{" "}
                <br />
                Note: You have unlimited attempts, however, each test you need
                to take will cost £81.00
              </p>
            </div>
            <div className={styles.trainingDetails}>
              <h3>Step 3 - Driving Ability Test</h3>
              <hr />
              <p>
                Part 2 of the ADI training focuses on your driving ability,
                similar to the original test you would have sat to get your full
                driving license. To ensure you’re prepared, if you train with
                us, we provide 10 hours of lessons with an ORDIT Approved
                Trainer.
                <br /> Note: You have a maximum of 3 attempts. Each test attempt
                costs £111.00
              </p>
            </div>
            <div className={styles.trainingDetails}>
              <h3>Step 4 - Learn And Earn</h3>
              <hr />
              <p>
                After passing your driving ability test, you are required to
                take 40 hours of training with a qualified trainer. This allows
                you to apply for a “pink badge” which means you to provisionally
                teach learners and earn for 6 months. If you decided to go down
                the “pink badge” route you will be able to take a pupil you are
                currently teaching. This route requires you to pay for 20 hours
                of additional training, however, this cost is easily covered by
                the money you will be earning from lessons.
              </p>
            </div>
            <div className={styles.trainingDetails}>
              <h3>Step 5 - Teaching Ability Test</h3>
              <hr />
              <p>
                Alternatively, once you complete your 40 hours of training you
                can apply to take your final test (also known as part 3.) This
                exam is all about your ability to teach a pupils. If you decide
                to go straight for the exam you would be required to find a full
                license holder who owns their own car. Note: You have a maximum
                of 3 attempts. Each test will cost £111.00
              </p>
            </div>
            <div className={styles.trainingDetails}>
              <h3>Step 6 - Celebrate!</h3>
              <hr />
              <p>
                All your hard work, perseverance, and commitment have paid off!
                You can now proudly say you are a fully qualified driving
                instructor (ADI).
              </p>
            </div>
          </div>
        </div>
        <div className={styles.instructorfooter}>
          <p>
            For more information on Driving instructor Training
            <strong>
              <a href="/">Click Me</a>
            </strong>
          </p>
        </div>
      </section>
      {/*///////////////////////////////// Enquire Form/////////////////////////// */}
      <section className={styles.formContainer}>
        <section className={styles.innerFormSection}>
          <div className={styles.enquiryForm}>
            <h4>Enquiry Form</h4>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">
                  Full Name<span>*</span>
                </label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactNumber">
                  Contact Number<span>*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="additionalInfo">
                  Additional Information<span>*</span>
                </label>
                <textarea
                  id={styles.additionalInfo}
                  name="additionalInfo"
                  rows="4"
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <ReCAPTCHA
                  id="recaptcha"
                  sitekey="your_site_key" // Replace 'your_site_key' with your actual reCAPTCHA site key
                />
              </div>
              <div className={styles.formBtn}>
                <button type="submit" id={styles.formBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
      {/* /////////////////////////////////////Info Text ///////////////////////////////// */}

      <section className={styles.infoTextContainer}>
        <div className={styles.infoTextHeading}>
          <h1>Award-Winning Driving Instructor Training with SmartLearner</h1>
        </div>
        <div className={styles.infoTextHeading2}>
          <h3>Call us today. Full package prices starting from just £999!</h3>
        </div>
      </section>
{/*//////////////////////////////////////// testimonial////////////////////////////////////// */}
<section className={styles.testimonialsContainer}>
<div className={styles.tmcontainer}>
      <h4>Testimonials</h4>
      <div className={styles.testimonial}>
        
        <div className={styles.testimonialContent}>
        <p className={styles.testimonialName}>{currentTestimonial.name}</p>
          <p className={styles.testimonialComment}>{currentTestimonial.comment}</p>
          <img src={currentTestimonial.image} alt={currentTestimonial.name} className={styles.testimonialImage} />
          <p className={styles.testimonialimgName}>{currentTestimonial.name}</p>
        </div>
       
      </div>
    </div>
</section>
 {/* /////////////////// Reviews section /////////////////*/}

 <section className={styles.facebookReviewsSection}>
        
        <div className={styles.facebookReviewsContainer}>
        <h4 id={styles.heading1}>Our Reviews</h4>
        <hr />
          <div className={styles.reviewsList}>

          </div>
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
                <FaInstagram id={styles.FollowIcons}  />
              </a>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat id={styles.FollowIcons}  />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter id={styles.FollowIcons}  />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube id={styles.FollowIcons}  />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
