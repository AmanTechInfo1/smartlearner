import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StaticTestimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const StaticTestimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonialRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonialsContainer",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "Student",
      text: "As a first-time driver, I was really nervous about getting behind the wheel, but my instructor made me feel so comfortable from the first lesson. ",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      text: "After failing my driving test a couple of times, I was really starting to lose confidence. But then I found Smartlearner, and everything changed. Definitely recommended!",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Designer, Company Z",
      text: "As someone who had driven before but had been away from the roads for a few years, I needed a refresher course to get my confidence back.",
    },
    {
        id: 4,
        name: "Sarah M",
        position: "London",
        text: "Choosing smartlearner was the best decision I made in my journey to becoming a confident driver. Highly recommend this driving school to anyone looking to learn safely and efficiently!",
      },
      {
        id: 5,
        name: "James T.",
        position: "Manchester",
        text: "I can't thank Smartlearner enough for the amazing experience! From my first lesson to passing my driving test. Definitely recommend to those who's looking learn to drive!",
      },
  ];

  return (
    <>
      <div className={styles.staticTestimonialPage}>
        <div className={styles.staticTestimonialheading}>
          {" "}
          <h2>See What Our Client Says About Us</h2>
        </div>

        <div className={styles.swiperContent}>
          <Swiper
            slidesPerView={3} // Display 3 slides at a time
            spaceBetween={30} // Space between slides
            loop={true} // Make it loop infinitely
            autoplay={{
              delay: 100, // Time between slide transitions
              disableOnInteraction: false, // Don't stop autoplay when interacting
            }}
            centeredSlides={true} // Keep the active slide centered
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            speed={6000} // Add navigation buttons (next/prev)
            modules={[Pagination, Navigation, Autoplay]} // Enable Pagination, Navigation, and Autoplay modules
            className="mySwiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            style={{ padding: "2rem 1rem" }}
            breakpoints={{
              320: {
                slidesPerView: 1, // 1 slide at a time for small screens
                spaceBetween: 10, // Less space on small screens
              },
              768: {
                slidesPerView: 2, // 2 slides at a time for medium screens
                spaceBetween: 20, // Slightly more space
              },
              1024: {
                slidesPerView: 3, // 3 slides for large screens
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={testimonial.id}
                className={styles.testimonialCard}
                ref={(el) => (testimonialRef.current[index] = el)}
              >
                <div className={styles.quote}>“</div>
                <p className={styles.text}>{testimonial.text}</p>
                
              </SwiperSlide>
            ))}

            {/* Add more slides as needed */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default StaticTestimonial;
