import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/header.module.css";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
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
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li id={styles.dropDownNav}>
            <NavLink to="/Driving-Lessons">
              <span>Driving Lesson</span>
            </NavLink>
            <ul className={styles.dropdownContent}>
              <NavLink
                to="/Driving-Lessons/manual"
                className={styles.activeLink}
              >
                <li>Manual</li>
              </NavLink>

              <NavLink
                to="/Driving-Lessons/automatic"
                className={styles.activeLink}
              >
                {" "}
                <li>Automatic</li>
              </NavLink>

              <NavLink
                to="/Driving-Lessons/Intensive"
                className={styles.activeLink}
              >
                <li>Intensive</li>
              </NavLink>

              <NavLink
                to="/Driving-Lessons/Pass-Plus"
                className={styles.activeLink}
              >
                <li>Pass Plus</li>
              </NavLink>
            </ul>
          </li>
          <li id={styles.dropDownNav}>
            <NavLink to="/Theory-Support" className={styles.activeLink}>
              Theory Support
            </NavLink>
            <ul className={styles.dropdownContent}>
              <NavLink
                to="/Theory-Support/Theory-package"
                className={styles.activeLink}
              >
                {" "}
                <li>Theory Package</li>
              </NavLink>

              <NavLink to="/Theory-Portal" className={styles.activeLink}>
                {" "}
                <li>Theory Portal </li>
              </NavLink>

              <NavLink to="/Theory-Subscription" className={styles.activeLink}>
                {" "}
                <li>Theory Subscription</li>
              </NavLink>
            </ul>
          </li>
          <li id={styles.dropDownNav}>
            Join Our Team
            <ul className={styles.dropdownContent}>
              <NavLink
                to="/Driving-Instructor-Training"
                className={styles.activeLink}
              >
                <li>Driving Instructor Training</li>
              </NavLink>

              <NavLink
                to="/Driving-Instructor-Franchise"
                className={styles.activeLink}
              >
                {" "}
                <li>Driving Instructor Franchise </li>
              </NavLink>

              <NavLink to="/Stantard-Check-Test" className={styles.activeLink}>
                {" "}
                <li>Stantard Check Test</li>
              </NavLink>

              <NavLink to="/ADI-Training-Portal" className={styles.activeLink}>
                {" "}
                <li>ADI Training Portal </li>
              </NavLink>

              <NavLink to="/about" className={styles.activeLink}>
                <li> About Us</li>
              </NavLink>
            </ul>
          </li>
          <li id={styles.dropDownNav}>
            <NavLink
              to="/Corporate-Responsbilities"
              className={styles.activeLink}
            >
              CSR
            </NavLink>
            <ul className={styles.dropdownContent}>
              <NavLink to="/Electric-Car-Scheme" className={styles.activeLink}>
                <li>Electric Car Scheme </li>
              </NavLink>

              <NavLink to="/Going-Green-Project" className={styles.activeLink}>
                {" "}
                <li>Going Green Project</li>
              </NavLink>

              <NavLink
                to="/Communities-Champions"
                className={styles.activeLink}
              >
                {" "}
                <li>Community Champions</li>
              </NavLink>

              <NavLink to="/We-Proudly-Support" className={styles.activeLink}>
                {" "}
                <li>Partnerships</li>
              </NavLink>

              <NavLink to="/Go-Cv" className={styles.activeLink}>
                <li> Go CV</li>
              </NavLink>

              <NavLink
                to="/Our-Office-Green-Efforts"
                className={styles.activeLink}
              >
                {" "}
                <li>Our Office Green Efforts</li>
              </NavLink>

              <NavLink to="/The-Honest-Truth" className={styles.activeLink}>
                {" "}
                <li>The Honest Truth </li>
              </NavLink>
            </ul>
          </li>
          <li>
            <NavLink to="/Contact-Us" className={styles.activeLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
