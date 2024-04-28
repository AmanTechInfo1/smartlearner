import React, { useState, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const menuRef = useRef(null); // Ref for menu element

  const toggleMenu = () => {
    const menuList = menuRef.current;
    if (menuList.style.maxHeight === "0px") {
      menuList.style.maxHeight = "500px";
    } else {
      menuList.style.maxHeight = "0px";
    }
    setMenuOpen(isMenuOpen); // Toggle menu visibility
  };

  return (
    <div id={styles.navContainer}>
      <nav className={styles.nav}>
        <ul
          id={styles.firstUl}
          ref={menuRef}
          className={`${styles.menuList} ${isMenuOpen ? styles.open : ""}`}
          style={{ maxHeight: isMenuOpen ? "500px" : "0px" }} // Set initial maxHeight
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li id={styles.dropDownNav}>
            <Link to="/Driving-Lessons">Driving Lesson</Link>
            <ul className={styles.dropdownContent}>
              <li>
                <Link to="/Intensive-Driving-Courses">Intensive</Link>
              </li>
              <li>
                <Link to="/Pass-Plus">Pass Plus</Link>
              </li>
            </ul>
          </li>
          <li id={styles.dropDownNav}>
            <Link to="/Theory-Support">Theory</Link>
            <ul className={styles.dropdownContent}>
              <li>
                <Link to="/Theory-Support">Theory Support</Link>
              </li>
              <li>
                <Link to="/Theory-Portal">Theory Portal</Link>
              </li>
              <li>
                <Link to="/">Theory Subscription</Link>
              </li>
            </ul>
          </li>
          <li id={styles.dropDownNav}>
            Join Our Team
            <ul className={styles.dropdownContent}>
              <li>
                <Link to="/Driving-Instructor-Training">
                  Driving Instructor Training
                </Link>
              </li>
              <li>
                <Link to="/Driving-Instructor-Franchise">
                  Driving Instructor Franchise
                </Link>
              </li>
              <li>
                <Link to="/Stantard-Check-Test">Stantard Check Test</Link>
              </li>
              <li>
                <Link to="/ADI-Training-Portal">ADI Training Portal</Link>
              </li>
              <li>
                <Link to="https://smartlearner.com/about/">About Us</Link>
              </li>
            </ul>
          </li>
          <li id={styles.dropDownNav}>
            <Link to="/Corporate-Responsbilities">CSR</Link>

            <ul className={styles.dropdownContent}>
              <li>
                <Link to="/Electric-Car-Scheme">Electric Car Scheme</Link>
              </li>
              <li>
                <Link to="/Going-Green-Project">Going Green Project</Link>
              </li>
              <li>
                <Link to="/Communities-Champions">Community Champions</Link>
              </li>
              <li>
                <Link to="/We-Proudly-Support">Partnerships</Link>
              </li>
              <li>
                <Link to="/Go-Cv">Go CV</Link>
              </li>
              <li>
                <Link to="/Our-Office-Green-Efforts">
                  Our Office Green Efforts
                </Link>
              </li>
              <li>
                <Link to="/The-Honest-Truth">The Honest Truth</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Contact-Us">Contact</Link>
          </li>
        </ul>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {" "}
          <FaBars />
        </div>
      </nav>
    </div>
  );
}

export default Header;
