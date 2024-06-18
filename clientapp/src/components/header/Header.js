import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/header.module.css";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.headerContainer}>
        <nav>
          <div
            className={`${styles.menu} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.barIcon}>
              <FaBars id={styles.barIcon} />
            </span>
          </div>
          <ul
            className={
              menuOpen ? `${styles.menuList} ${styles.open}` : styles.menuList
            }
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li id={styles.dropDownNav}>
              <NavLink to="/Driving-Lessons">Driving Lesson</NavLink>
              <ul className={styles.dropdownContent}>
                <li style={{ color: "white", cursor: "pointer" }}>
                  <NavLink to="/Driving-Lessons/manual"> Manual</NavLink>
                </li>
                <li style={{ color: "white", cursor: "pointer" }}>
                  <NavLink to="/Driving-Lessons/automatic"> Automatic</NavLink>
                </li>
                <li style={{ color: "white", cursor: "pointer" }}>
                  <NavLink to="/Driving-Lessons/Intensive">Intensive</NavLink>
                </li>
                <li style={{ color: "white", cursor: "pointer" }}>
                  <NavLink to="/Driving-Lessons/Pass-Plus">Pass Plus</NavLink>
                </li>
              </ul>
            </li>
            <li id={styles.dropDownNav}>
              <NavLink to="/Theory-Support">Theory Support</NavLink>
              <ul className={styles.dropdownContent}>
                <li style={{ color: "white", cursor: "pointer" }}>
                  <NavLink to="/Theory-Support/Theory-package">
                    Theory Package
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Theory-Portal">Theory Portal</NavLink>
                </li>
                <li>
                  <NavLink to="/Theory-Subscription">
                    Theory Subscription
                  </NavLink>
                </li>
              </ul>
            </li>
            <li id={styles.dropDownNav}>
              Join Our Team
              <ul className={styles.dropdownContent}>
                <li>
                  <NavLink to="/Driving-Instructor-Training">
                    Driving Instructor Training
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Driving-Instructor-Franchise">
                    Driving Instructor Franchise
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Stantard-Check-Test">
                    Stantard Check Test
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ADI-Training-Portal">
                    ADI Training Portal
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
              </ul>
            </li>
            <li id={styles.dropDownNav}>
              <NavLink to="/Corporate-Responsbilities">CSR</NavLink>

              <ul className={styles.dropdownContent}>
                <li>
                  <NavLink to="/Electric-Car-Scheme">
                    Electric Car Scheme
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Going-Green-Project">
                    Going Green Project
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Communities-Champions">
                    Community Champions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/We-Proudly-Support">Partnerships</NavLink>
                </li>
                <li>
                  <NavLink to="/Go-Cv">Go CV</NavLink>
                </li>
                <li>
                  <NavLink to="/Our-Office-Green-Efforts">
                    Our Office Green Efforts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/The-Honest-Truth">The Honest Truth</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/Contact-Us">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
