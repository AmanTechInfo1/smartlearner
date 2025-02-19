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
               The part 1 practice questions are a quick sample of what you’ve revised, there is 25 questions, you will need at least 20/25 to pass, you get 15 minutes to complete these questions.
               </p>
               <Link to="/takequizCatName/Band-1---Road-Procedure">
                 {" "}
                 <button>Start Quiz</button>
               </Link>
             </section>
           </div>
          
         </div>
       </div>
  )
}
