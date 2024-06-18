import React from "react";

import styles from "./Shop.module.css";
import { FaAngleDoubleRight, FaStar, FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

import ProductTab from "./ProductTab";
import poster from "../../assets/images/video-poster-img.jpg";
import chooseUsImg from "../../assets/images/choose-img.jpg";
import CallBackForm from "../../components/forms/CallBackForm";

import Review from "../../components/views/Review";
import ShortFaqs from "../../components/shortFaqs/ShortFaqs";
import DrivenForm from "../../components/forms/DrivenForm";
import ProductSlider from "./ProductSlider";
import Testemonial from "../../components/testimonials/Testemonial";
import { useDispatch, useSelector } from "react-redux";
import { imageBaseUrl } from "../../utils/constants";
import { getAddToCart, getDecreaseCart, getIncreaseCart } from "../../redux/features/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
   
  const product = useSelector((state) => state.product.oneproduct);
  if (!product) return <p>Product not found</p>; 

  const {
    _id,
    name,
    image,
    price,
    duration,
    rating,
    postcode,
    areaIncluded,
    experience,
    transmission,
    category,
  } = product;

  const addToCart = () => {
    dispatch(getAddToCart({ _id, count: 1, service: name, price }));
  };

  const handleIncrease = () => {
    dispatch(getIncreaseCart(id, 1));
  };

  const handleDecrease = () => {
    dispatch(getDecreaseCart(id, 1));
  };
 

  return (
    <div>
      <div className={styles.ProductDetailsPage}>
        <section className={styles.productDetailsPageSection}>
          <div className={styles.productDetailsPageImage}>
            <img src={imageBaseUrl+image} alt={name} />
          </div>
          <div className={styles.productDetailsPageDetails}>
            <div className={styles.productDetailsPagetNamePrice}>
              <h1>{name}</h1>
              <p>${price}</p>
            </div>
            <div className={styles.productDetailsPageCard}>
              <ul type="none" className={styles.productDetailsPageCardMenu}>
                <li>
                  <p>
                    Course Duration{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{duration}</p>
                </li>
                <li>
                  <p>
                    Experience{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{experience}</p>
                </li>
                <li>
                  <p>
                    Transmission{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{transmission}</p>
                </li>
              </ul>
            </div>
            {/* <div className={styles.postCodeBlock}>
              <p className={styles.postcodes}>Postcodes Included</p>
              <ul type="none" className={styles.postcodeList}>
                {postcode.map((postcodeItem, index) => (
                  <li key={index}>{postcodeItem}</li>
                ))}
              </ul>
            </div> */}
            {/* <div className={styles.areaIncludedBlock}>
              <p className={styles.areaIncluded}>Areas Included</p>
              <ul type="none" className={styles.areaIncludedList}>
                {areaIncluded.map((areaIncludedItem, index) => (
                  <li key={index}>{areaIncludedItem}</li>
                ))}
              </ul>
            </div> */}

            
                  <div id={styles.cartTableBtn}>
                    {" "}
                    <div className={styles.quantityControl}>
                      <button
                        onClick={handleDecrease}
                        className={styles.decreaseButton}
                        disabled={product.count <= 1}
                      >
                        -
                      </button>
                      <span>{product.count}</span>
                      <button
                         onClick={handleIncrease}
                        className={styles.increaseButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                  className={styles.bookNow}
                  // disabled={inCart}
                  onClick={addToCart}>
                  Book Now
                </button>
                
            <div className={styles.productDetailsCategoryDiv}>
              <p>
                Category: <span>{category}</span>{" "}
              </p>
            </div>
          </div>
        </section>
        <div className={styles.productDetailsDiscriptionSection}>
          <div className={styles.productDetailsContainer}>
            <div className={styles.discriptionHeadingTop}>
              <h2 id={styles.thIdDiscription}>Discription</h2>
            </div>
            <div className={styles.productDetailsContent}>
              <h2>Discription Manual</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eveniet sint sunt facere sed in, pariatur dolorem
                dignissimos tenetur nihil ipsa vero eos maxime dolor, explicabo
                officiis expedita adipisci molestias?
              </p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ProductSlider />
      </section>
      <section className={styles.productDetailsProductTab}>
        <ProductTab></ProductTab>
      </section>
      {/* //////////////////////////////////////////////////////// */}
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
       <Testemonial/>
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
