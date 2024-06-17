import React from 'react'
import {testimonialsData} from "../../assets/data/testimonials" 

import { useState, useEffect } from "react";
import styles from './Testemonial.module.css'

export default function Testemonial() {

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
            
            <div className={styles.testimonialContent}><span id={styles.comma1}>"</span>
            <p className={styles.testimonialName}>{currentTestimonial.name}</p>
              <p className={styles.testimonialComment}>{currentTestimonial.comment}</p>
              <img src={currentTestimonial.image} alt={currentTestimonial.name} className={styles.testimonialImage} />
              <p className={styles.testimonialimgName}>{currentTestimonial.name}</p><span  id={styles.comma2}>"</span>
            </div>
           
          </div>
        </div>
    </section>
  )
}