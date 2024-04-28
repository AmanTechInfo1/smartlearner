// import React from 'react'
import styles from "./css/TheorySupport.module.css";
import { products } from "../assets/data/Products";
import { FaStar, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import poster from "../assets/images/video-poster-img.jpg";
import ProductTab from "./shop/ProductTab";
import CallBackForm from "../component/forms/CallBackForm";
import chooseUsImg from "../assets/images/choose-img.jpg";
import DrivenForm from "../component/forms/DrivenForm";
import { FaArrowRight } from "react-icons/fa";
import Testimonials from "../component/testemonials/Testimonials";
import Review from "../component/Reviews/Review";
import ShortFaqs from "../component/shortFaqs/ShortFaqs";

export default function TheorySupport() {
  const theoryProducts = products.filter(
    (product) => product.category === "Theory"
  );

  return (
    <div className={styles.theorySupportPage}>
      <section className={styles.theorySupportHeadingContent}>
        <div className={styles.TSfirstContent}>
          <h2>THEORY SUPPORT </h2>
        </div>
      </section>
      {/* //////////////////////////////////////////////// CONTENT SECTION //////////////////////////////// */}
      <section className={styles.innerTheorySupportSection}>
        <div className={styles.innerTheorySupportContent}>
          <div className={styles.theorySupportContentVideo}>
            <iframe
              width="100%"
              height="600px"
              src="src\assets\videos\Video-1886-041219-B.mp4"></iframe>
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className={styles.chooseProductSection}>
          <div className={styles.productGrid}>
            {theoryProducts.map(
              ({
                id,
                name,
                image,
                price,
                duration,
                experience,
                Transmission,
                postcode,
                inCart,
                quantity,
                rating,
              }) => (
                <div key={id} className={styles.productCard}>
                  <img src={image} alt={name} />
                  <div className={styles.productDetails}>
                    <h3>{name}</h3>
                    <div className={styles.ratingAndPrice}>
                      <div className={styles.rating}>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={index < rating ? styles.filled : ""}>
                            <FaStar />
                          </span>
                        ))}
                      </div>
                      <p className={styles.price}>${price}</p>
                    </div>
                    <ul type="none" className={styles.cardDetails}>
                      <li>
                        <p>
                          Course Duration{" "}
                          <span id={styles.arrowIcon}>
                            {" "}
                            <FaAngleDoubleRight
                              id={styles.productmenuArrowIcon}
                            />
                          </span>
                        </p>{" "}
                        <p className={styles.duration}>{duration}</p>
                      </li>
                      <li>
                        <p>
                          Experience{" "}
                          <span id={styles.arrowIcon}>
                            {" "}
                            <FaAngleDoubleRight
                              id={styles.productmenuArrowIcon}
                            />
                          </span>
                        </p>{" "}
                        <p className={styles.duration}>{experience}</p>
                      </li>
                      <li>
                        <p>
                          Transmission{" "}
                          <span id={styles.arrowIcon}>
                            {" "}
                            <FaAngleDoubleRight
                              id={styles.productmenuArrowIcon}
                            />
                          </span>
                        </p>{" "}
                        <p className={styles.duration}>{Transmission}</p>
                      </li>
                    </ul>

                    <div className={styles.buttons}>
                      <button
                        className={styles.bookNow}
                        disabled={inCart}
                        onClick={() =>
                          addToCart({ id, name, price }, quantity)
                        }>
                        {inCart === true ? (
                          <span>In Cart</span>
                        ) : (
                          <span>Book Now</span>
                        )}
                      </button>
                      <NavLink to={`/product/${id}`}>
                        <button className={styles.more}>More Info</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* //////////CallBack Form section///////////// */}
        <section className={styles.callbackFormSection}>
          <div className={styles.callbackFormContent}>
            <div className={styles.callbackFormContentPG}>
              <p>
                We launched our 1-2-1 theory sessions in 2019 and since then we
                have helped many people pass who thought they never could. Our
                theory sessions focus on building your knowledge from the ground
                up to ensure you don’t just know the answers but understand
                them. We have had people from all over the country coming to us
                looking for help in preparing for their exam. Currently we have
                a 90% pass rate which is 41.5% higher than the national average!
              </p>
            </div>
            <CallBackForm />
          </div>
          <div className={styles.productTab}>
            <ProductTab />
          </div>
        </section>
      </section>
      {/* /////////////////////////////////////////////// */}
      <section className={styles.TSvideosContanierSection}>
        <div className={styles.theorySupportContentVideosec}>
          <video controls poster={poster} preload="none">
            <source
              src="src/assets/videos/Video-1smartlearner-B.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      {/* ////////////////////////// */}
      <section className={styles.whyChooseshortSection}>
        <div className={styles.whyChooseshortSectionContent}>
          <div className={styles.whyChooseshortSectionImage}>
            <img src={chooseUsImg} alt="Image" />
          </div>
          <div className={styles.whyChooseshortSectionText}>
            <h2>
              WHY CHOOSE <span>SMARTLEARNER ?</span>
            </h2>
            <p>
              We are the highest-rated and fastest-growing independent driving
              school in the West Midlands. We offer everything you could ever
              need to get yourself on the road. We take into consideration your
              times requirements, lesson location and anything else you require
              then choose the perfect instructor for you. We even offer 1-2-1
              theory and simulator training with a tutor for those who feel need
              additional support to pass their exams. So, forget the rest and
              learn with the best! Call us today on{" "}
              <a href="">
                {" "}
                <span>0800 118 2001</span>{" "}
              </a>
              to get yourself booked in.
            </p>
            <div className={styles.whyChooseshortSectionButtons}>
              <button className={styles.whyChooseshortSectionReadmore}>
                Read More
              </button>
              <button className={styles.whyChooseshortSectionCallus}>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////////////////// */}
      <section className={styles.drivenBefore}>
        <h2>Search for driving lessons in your area</h2>
        <DrivenForm />
      </section>
      {/* ////////////////////////////////// */}
      <section className={styles.nextFormSection}>
        <div className={styles.nextFormContainer}>
          <div className={styles.nextFormDetailsContainer}>
            <div className={styles.nextFormDetailsContainerHeading}>
              {" "}
              <h3>REQUEST FOR A CALLBACK</h3>
              <span>
                <FaArrowRight id={styles.rightArow} />
              </span>
            </div>

            <ul type="none">
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Highest-rated Independent driving
                school in the West Midlands
              </li>
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Manual and Automatic tuition
              </li>
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Over 40 instructors both male and
                female
              </li>
            </ul>
          </div>
          <div className={styles.nextFormContainer}>
            <CallBackForm />
          </div>
        </div>
      </section>
      {/* ///////////////Testimonials////// */}
      <section>
        <Testimonials />
      </section>

      {/* ///////////////////////Reviews//////// */}
      <section>
        <Review />
      </section>
      {/* //////////////faqs//////////////////////// */}
      <section>
        <ShortFaqs />
      </section>
    </div>
  );
}
