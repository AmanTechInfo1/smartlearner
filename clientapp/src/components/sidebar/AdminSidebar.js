import React from "react";
import styles from "../../assets/css/admin.module.css";
import { Link } from "react-router-dom";
import {
  BsFillArchiveFill,
  BsGrid1X2Fill,
  BsMenuButtonWideFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import { VscFileSubmodule } from "react-icons/vsc";
import { TbCategoryFilled } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { MdQuiz } from "react-icons/md";

import { LiaUserCogSolid } from "react-icons/lia";
import { FaUserTie } from "react-icons/fa";
import {
  MdArrowDropDownCircle,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

function AdminSidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <>
      <aside
        id={styles.adminSidebar}
        className={openSidebarToggle ? styles.sidebarResponsive : ""}
      >
        <div className={styles.adminSidebarTitle}>
          <div className={styles.adminSidebarBrand}>
            <FaUserTie
              className={`${styles.adminIcon} ${styles.adminIconHeader}`}
            />{" "}
            Admin
          </div>
          <span
            className={`${styles.adminIcon} ${styles.adminCloseIcon}`}
            onClick={OpenSidebar}
          >
            X
          </span>
        </div>

        <ul className={styles.adminSidebarList}>
          <Link to="/admin/dashboard">
            {" "}
            <li className={styles.adminSidebarListItem}>
              <BsGrid1X2Fill className={styles.adminIcon} />
              Dashboard
            </li>{" "}
          </Link>

          {/* ///////////////////////////////////////// */}
          <li className={styles.adminSidebarListItem}>
            <div className={styles.addropdown}>
              <Link
                to="/admin/users"
                className={`${styles.link} ${styles.admainLink}`}
              >
                <BsPeopleFill className={styles.adminIcon} />
                <span id={styles.DodownSpan}>
                  Users
                  <MdArrowDropDownCircle className={styles.addropdownIcon} />
                </span>
              </Link>
              <div className={styles.addropdownContent}>
                <Link to="/admin/roles" className={styles.link}>
                  <LiaUserCogSolid className={styles.addropdownIcon} />
                  Add Roles
                </Link>
              </div>
            </div>
          </li>

          {/* /////////////////////////////////////////////////// */}

          <li className={styles.adminSidebarListItem}>
            <div className={styles.addropdown}>
              <Link
                to="/admin/products"
                className={`${styles.link} ${styles.admainLink}`}
              >
                <AiOutlineProduct className={styles.adminIcon} />
                <span id={styles.DodownSpan}>
                  Products
                  <MdArrowDropDownCircle className={styles.addropdownIcon} />
                </span>
              </Link>
              <div className={styles.addropdownContent}>
                <Link to="/admin/categories" className={styles.link}>
                  <TbCategoryFilled className={styles.addropdownIcon} />
                  Add Category
                </Link>
                <Link to="/admin/postcodes" className={styles.link}>
                  <FaSignsPost className={styles.addropdownIcon} />
                  Add PostCode
                </Link>
                <Link to="/admin/product-area" className={styles.link}>
                  {" "}
                  <FaExternalLinkSquareAlt className={styles.addropdownIcon} />
                  Add Area
                </Link>
              </div>
            </div>
          </li>

          {/* //////////////////////////////////////////////////////////////////// */}
          <li className={styles.adminSidebarListItem}>
            <div className={styles.addropdown}>
              <Link
                to="/admin/quiz"
                className={`${styles.link} ${styles.admainLink}`}
              >
                <MdQuiz className={styles.adminIcon} />
                <span id={styles.DodownSpan}>
                  Quizes
                  <MdArrowDropDownCircle className={styles.addropdownIcon} />
                </span>
              </Link>
              <div className={styles.addropdownContent}>
                <Link to="/admin/quiz-category" className={styles.link}>
                  <TbCategoryFilled className={styles.addropdownIcon} />
                  Add Category
                </Link>
                <Link to="/admin/quiz-module" className={styles.link}>
                  <VscFileSubmodule className={styles.addropdownIcon} />
                  Quiz Bands
                </Link>
                <Link to="/admin/quizViewResult" className={styles.link}>
                  {" "}
                  <IoIosPaper className={styles.addropdownIcon} />
                  Results
                </Link>
              </div>
            </div>
          </li>

          {/* ///////////////////////////////// */}
          <Link to="/admin/order">
            <li className={styles.adminSidebarListItem}>
              <MdOutlineProductionQuantityLimits className={styles.adminIcon} />
              Orders
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
}

export default AdminSidebar;
