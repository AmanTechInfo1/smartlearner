import React from "react";
import styles from "./DemoNavbar.module.css"; // Import CSS module
import logo from "../../assets/images/smartlearnerLogo.png";

import {
  FaShoppingCart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function DemoNavbar() {
  return (
    <div className={styles.demoNavbar}> 
      <div className={styles.navbar}>
        <div className={styles.navbarContentImg}>
        <div className={styles.contactInfo}>
          <a href="tel:+44 02475092784">02475092784</a>/   
           <a href="mailto:admin@smartlearner.com"> Admin@Smartlearner.com</a>
        </div>
        <div className={styles.logo}>
        <a href="https://smartlearner.com">
              <img src={logo} alt="smartlearnerLogo" />
            </a>
        </div>
        </div>
        <div className={styles.navLinks}>
          <ul type="none" id={styles.navLinksUl}>
            <li><Link to="/about">ABOUT</Link></li><span>|</span>
            <li><Link to="/faqs">FAQS</Link></li><span>|</span>
            <li><Link to="/login">LOGIN / REGISTER</Link></li>
          </ul>
          <div className={styles.navShoppingCart}><Link to='/cart'> <FaShoppingCart size={20} /></Link></div>
        </div>
      </div>
    </div>
  );
}