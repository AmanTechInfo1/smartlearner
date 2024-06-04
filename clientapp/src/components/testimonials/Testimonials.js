import React from 'react'
import {testimonialsData} from "../../assets/data/testimonials" 
import styles from "./Testimonials.modual.css"
import { useState, useEffect } from "react";


export default function Testimonials() {

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
      }, 2000); // Change the interval time (in milliseconds) as needed
  
      return () => clearInterval(interval);
    }, []);
  
    const currentTestimonial = testimonialsData[currentTestimonialIndex];
  


  return (
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
  )
}