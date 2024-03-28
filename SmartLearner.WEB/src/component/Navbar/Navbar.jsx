// styles.js
// import React from 'react';
import styles from './Navbar.module.css'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const navLinks = [
  {
    path: "/About",
    display: "About",
  },
  {
    path: "/FAQS",
    display: "FAQS",
  },
  {
    path: "/Login-Register",
    display: "Login/Register",
  },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.leftRow}>
          <div className={styles.topContact}>
            <p>
              <span>
                <IoCall size={20} />
              </span>
              <a href="tel:+44 02475092784">+44 02475092784</a>/
              <a href="tel:+44 785 980 0382">+44 785 980 0382</a>
            </p>
            <p>
              <span>
                <MdEmail size={20} />
              </span>
              <a href="mailto:admin@smartlearner.com">admin@smartlearner.com</a>
            </p>
          </div>
        </div>
        <div className={styles.rightRow}>
          <div className={styles.socialLinks}>
            <ul className={styles.socialIcons} type="none">
              <li>
                <a
                  href="https://www.facebook.com/smartlearnerdrivingschool"
                  target="_blank"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/smartlearner" target="_blank">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/smartlearnerdrivingschool"
                  target="_blank"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.quickLinks}>
            <ul id={styles.quickLinksMenu} type="none">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className={styles.navLinks}>
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={styles.shoppingCart}>
            <NavLink to={'/cart'}> <FaShoppingCart size={20} /></NavLink> 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
