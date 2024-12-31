import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './StaticTestimonial.module.css';

const testimonials = [
  {
    text: 'This service has changed my life! The support is unmatched, and I feel more productive every day.',
    author: 'Jane Doe',
  },
  {
    text: 'An absolute game-changer for my business. The team is always there to help and their tools are intuitive!',
    author: 'John Smith',
  },
  {
    text: 'I can’t imagine working without this service now. It has increased my efficiency 10x!',
    author: 'Sarah Lee',
  },
];

const StaticTestimonial= () => {
  const testimonialRefs = useRef([]);

  useEffect(() => {
    // GSAP animation for each testimonial
    gsap.fromTo(
      testimonialRefs.current,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className={styles.testimonialContainer}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={styles.testimonialCard}
          ref={(el) => (testimonialRefs.current[index] = el)}
        >
          <div className={styles.testimonialContent}>
            <p className={styles.quote}>"{testimonial.text}"</p>
            <p className={styles.author}>- {testimonial.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticTestimonial;
