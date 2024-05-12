import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={styles.barIcon}>
                            <FaBars id={styles.barIcon} />
                        </span>
                    </div>
                    <ul
                        className={
                            menuOpen ? `${styles.menuList} ${styles.open}` : styles.menuList
                        }>
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
                                    <Link to="/about">About Us</Link>
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
                </nav>
            </div>
        </>
    )
}

export default Header