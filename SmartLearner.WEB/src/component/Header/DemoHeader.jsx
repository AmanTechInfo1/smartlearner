// Header.jsx
import React, { useState } from 'react';
import styles from './DemoHeader.module.css'; // Import your CSS module
import { Link } from 'react-router-dom';
const DemoHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerNavBarContainer}>
    <header className={styles.header}>
    
      <nav className={`${styles.headerMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li>
            <a href="#">Driving Lessons</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Theory</a>
            <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Join Our Team</a>
          <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            </div></li>
    
          <li><a href="#">CSR</a>
          <div className={styles.dropdown}>
              <ul>
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
              </ul>
            </div></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.toggle} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    </div>
  );
};

export default DemoHeader;
