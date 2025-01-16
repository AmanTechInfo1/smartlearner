import React from "react";
import styles from "./css/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/1200px-Lplate.svg.png";
import logo2 from "../../assets/images/White-Logo-Fixed-1024x174.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/authSlice";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Button, Dropdown, Space } from "antd";
import Header from "./Header";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.auth.userDetails);

  const items = userDetails.username
    ? [
        {
          label: (
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() => navigate("/my-account")}>
              <CgProfile style={{ fontSize: "1.5rem" }} /> My Account
            </span>
          ),
          key: "my-account",
        },
        {
          label: (
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() => {
                dispatch(logoutUser());
                navigate("/");
              }}>
              Logout
            </span>
          ),
          key: "logout",
        },
      ]
    : [
        {
          label: (
            <Link
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
              to="/login">
              LOGIN / REGISTER
            </Link>
          ),
          key: "login-register",
        },
      ];

  return (
    <div id={styles.navContainer}>
      <div className={styles.headerContainer}>
        <section className={styles.imgLogoSection}>
          <div className={styles.imgLogoSection2}>
            {" "}
           <Link to="/"> <img src={logo2} alt="logo" /></Link>
          </div>
        </section>
        <section className={styles.headerLinksSection}>
          <div className={styles.navLinks}>
            <ul type="none" id={styles.navLinksUl}>
              <div className={styles.contactInfo}>
                <a href="tel:+4402475092784">02475092784</a>
                <span>|</span>
                <a href="mailto:admin@smartlearner.com">
                  admin@smartlearner.com
                </a>
              </div>

              <Space direction="vertical">
                <Space wrap className={styles.navDropdown}>
                  <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    arrow={{ pointAtCenter: true }}
                    className="custom-dropdown">
                    <button>
                      Account <MdOutlineKeyboardArrowDown />
                    </button>
                  </Dropdown>
                </Space>
              </Space>

              <div className={styles.navShoppingCart}>
                <Link to="/cart">
                  <FaShoppingCart id={styles.shoppincartIcon} />
                </Link>
              </div>
            </ul>
          </div>
          <div className={styles.headerLinks}>
            <Header />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
{
  /* <div className={styles.navbar}>
<div className={styles.navbarContentImg}>
  <div className={styles.contactInfo}>
    <a href="tel:+4402475092784">02475092784</a> <span>/</span> 
    <a href="mailto:admin@smartlearner.com">Admin@Smartlearner.com</a>
  </div>
  <div className={styles.logo}>
    <Link to="/">
      <img src={logo} alt="smartlearnerLogo" />
    </Link>
  </div>
</div>
<div className={styles.navLinks}>
  <ul type="none" id={styles.navLinksUl}>
    <li>
      <Link to="/about">ABOUT</Link>
    </li>
    
    <li>
      <Link to="/blogs">BLOGS</Link>
    </li>
    
    <li>
      <Link to="/faqs">FAQs</Link>
    </li>
    
    <li>
      <Link to="/term-and-condition">T&C</Link>
    </li>
    

    {userDetails.username ? (
      <>
        <li
          style={{ cursor: 'pointer' }}
          onClick={() => navigate("/my-account")}
        >
          {userDetails.username}
        </li>
        <li style={{ cursor: 'pointer' }}>
          <span onClick={() => dispatch(logoutUser())}>Logout</span>
        </li>
      </>
    ) : (
      <li>
        <Link to="/login">LOGIN / REGISTER</Link>
      </li>
    )}
  </ul>
 
    <div className={styles.navShoppingCart}>
      <Link to="/cart">
        <FaShoppingCart  id={styles.shoppincartIcon}/>
      </Link>
    </div>
  
</div>
</div> */
}
