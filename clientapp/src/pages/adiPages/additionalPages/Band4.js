import styles from "../AdiPartOne.module.css";

import { Link } from "react-router-dom";

export default function Band1() {
  return (
   <div className={styles.AdiPartOne}>
         <div className={styles.AdiPortalPartOne}>
          
           {/* ////////////////////////////////////////// */}
           <div className={styles.quizStartDiv}>
             <section className={styles.startQuizSection}>
               <h1>Start Quiz</h1>
               <h3>All  Questions</h3>
               <p>
               The band four practice questions cover publications and instructional techniques . With over 100 multiple-choice questions to choose from, you can practice 50, 100, or complete all of them at once.               </p>
               <Link to="/takequizCatName/Band-4---Publications-and-Instructional-Techniques">
                 {" "}
                 <button>Start Quiz</button>
               </Link>
             </section>
           </div>
          
         </div>
       </div>
  )
}
