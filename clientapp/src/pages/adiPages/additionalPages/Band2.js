import styles from "../AdiPartOne.module.css";

import { Link } from "react-router-dom";

export default function Band2() {
  return (
   <div className={styles.AdiPartOne}>
         <div className={styles.AdiPortalPartOne}>
          
           {/* ////////////////////////////////////////// */}
           <div className={styles.quizStartDiv}>
             <section className={styles.startQuizSection}>
               <h1>Start Quiz</h1>
               <h3>All  Questions</h3>
               <p>
               The Band Two Practice Questions focus on Traffic Signs and Signals, Car Control, Pedestrians, and Mechanical Knowledge. With over 300 multiple-choice questions available, you can choose to practice 50, 100, or work through all of them at once.               </p>
               <Link to="/takequizCatName/Band-2---Traffic-Signs-and-Signals--Car-Control--Pedestrians-and-Mechanical-Knowledge">
                 {" "}
                 <button>Start Quiz</button>
               </Link>
             </section>
           </div>
          
         </div>
       </div>
  )
}
