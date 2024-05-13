import React from "react";
import styles from "../css/TheorySupport.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../../assets/data/Products";
import { FaStar, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ProductSlider() {
  const theoryProducts = products.filter(
    (product) => product.category === "Theory"
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section
      style={{
        backgroundColor: "rgba(211, 211, 211, 0.705)",
        padding: "2rem 0px",
        margin: "2rem 0px",
      }}>
      <div
        style={{
          maxWidth: "1200px",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "0px 2rem",
          width: "100%",
          margin: "2rem auto",
        }}>
        {" "}
        <Slider {...settings}>
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
                      onClick={() => addToCart({ id, name, price }, quantity)}>
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
        </Slider>
      </div>
    </section>
  );
}
