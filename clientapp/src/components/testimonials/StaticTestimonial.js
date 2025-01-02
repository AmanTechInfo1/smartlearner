import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StaticTestimonial.module.css";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const StaticTestimonial = () => {
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
      text: "After failing my driving test a couple of times, I was really starting to lose confidence. But then I found Smartlearner, and everything changed. My instructor was patient, understanding, and really focused on helping me overcome my weaknesses. ",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Designer, Company Z",
      text: "As someone who had driven before but had been away from the roads for a few years, I needed a refresher course to get my confidence back.",
    },
  ];

  return (
    <div className={styles.testimonialsContainer}>
        <h2>See What Our Client Says About Us</h2>
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={styles.testimonialCard}
          ref={(el) => (testimonialRef.current[index] = el)}
        >
          <div className={styles.quote}>“</div>
          <p className={styles.text}>{testimonial.text}</p>
          <div className={styles.author}>
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.position}>{testimonial.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticTestimonial;
