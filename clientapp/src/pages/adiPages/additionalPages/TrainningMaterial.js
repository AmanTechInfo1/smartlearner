import React from "react";
import styles from "../AdiPartOne.module.css";
import DrivingInstructorHandbook from "../../../assets/images/tmdimh.png";
import { Link } from "react-router-dom";

const trainingMaterialsData = [
  {
    title: "National Standard",
    link: "https://www.gov.uk/government/publications/national-standard-for-driver-and-rider-training/national-standard-for-driver-and-rider-training",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHubgfRmLV-tic-TgN31dYaNhdrH8SjNgjpA&s",
    caption:
      "This national standard sets out the skills, knowledge and understanding needed to deliver a programme of driver/rider training.",
  },
  {
    title: "Highway Code",
    link: "https://www.safedrivingforlife.info/shop/official-dvsa-highway-code/",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/The_Highway_Code%2C_cover_to_2022_edition.jpg",
    caption:
      "A book that can help with answering questions in bands one, two, and some of the questions in band three.",
  },
  {
    title: "Practical Teaching Skills for Driving Instructors",
    link: "https://www.safedrivingforlife.info/shop/practical-teaching-skills-driving-instructors/",
    image:
      "https://cdn.koganpage.com/media/public/image/xxlarge_9781398607569.jpg",
    caption:
      "Improve your teaching and communication skills with this guide, recommended by DVSA for ADI exams.",
  },
  {
    title: "Driving the Essential Skills",
    link: "https://www.safedrivingforlife.info/shop/official-dvsa-guide-driving-essential-skills/",
    image:
      "https://the-road-ahead.co.uk/wp-content/uploads/2021/03/dvsa-driving-essential-skills.webp",
    caption:
      "A book that can help with answering questions in bands one, two, and some in band three.",
  },
  {
    title: "Driving Instructor Handbook",
    link: "https://www.safedrivingforlife.info/shop/driving-instructors-guide/",
    image: DrivingInstructorHandbook,
    caption:
      "Covers every aspect of being a driving instructor, including preparation for the ADI exams.",
  },
  {
    title: "Know your Traffic Signs",
    link: "https://www.safedrivingforlife.info/shop/know-your-traffic-signs/",
    image:
      "https://m.media-amazon.com/images/I/71nsk6w2ZWL._AC_UF894,1000_QL80_.jpg",
    caption:
      "This guide explains all road signs anyone using the UK roads is likely to encounter.",
  },
];

export default function TrainningMaterial() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest, <span>learn with the best!</span>
                </h1>
              </div>
              <div className={styles.alertBtn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <div className={styles.TMcontainer}>
          {trainingMaterialsData.map((material, index) => (
            <div
              className={`${styles.materialCard} ${
                index % 2 === 0 ? styles.Tmeven : styles.Tmodd
              }`}
              key={index}
            >
              <a href={material.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={material.image}
                  alt={material.title}
                  className={styles.materialImage}
                />
              </a>
              <div className={styles.materialDetails}>
                <h3>{material.title}</h3>
                <p>{material.caption}</p>
              </div>
            </div>
          ))}

          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.bgColorList33}>
              <ul type="none">
                <li>
                  <p>
                    Reading the recommended books for the ADI Part 1 exam is
                    crucial for your success, as they provide comprehensive
                    coverage of the key topics you'll be tested on. These
                    resources are specifically designed to deepen your
                    understanding of road safety, driving laws, and
                    instructional techniques, ensuring you're fully prepared for
                    both the multiple-choice questions and the hazard perception
                    test. The material in these books is often aligned with the
                    official DVSA syllabus, offering insights that go beyond
                    basic knowledge and helping you tackle more challenging
                    questions with confidence. By thoroughly studying these
                    books, you'll be better equipped to master each section of
                    the exam, avoid common pitfalls, and approach the test with
                    the depth of knowledge needed to excel.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <div className={styles.TMnextPage}>
            <Link to="/band-1-Road-Procedure">
              {" "}
              <button className={styles.TMnextButton}>
                NEXT PAGE Band - 1
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
