import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill, 
} from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import styles from "./css/AdminApp.module.css";
import { Link } from "react-router-dom";
import { LiaUserCogSolid } from "react-icons/lia";

export default function AdminSidebar({ openSidebarToggle, OpenSidebar }) {
  return (
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
        <Link to="/admin/users" className={styles.link}>
          <li className={styles.adminSidebarListItem}>
            <BsPeopleFill className={styles.adminIcon} />
            Users
          </li>
        </Link>
        <Link to="/admin/roles" className={styles.link}>
          <li className={styles.adminSidebarListItem}>
            <LiaUserCogSolid className={styles.adminIcon} />
            Roles
          </li>
        </Link>
        <Link to="/admin/products">
          <li className={styles.adminSidebarListItem}>
            {" "}
            <BsFillArchiveFill className={styles.adminIcon} />
            Products
          </li>
        </Link>
        <li className={styles.adminSidebarListItem}>
          <a href="">
            <BsFillGrid3X3GapFill className={styles.adminIcon} />
            Categories
          </a>
        </li>

        <li className={styles.adminSidebarListItem}>
          <a href="">
            <BsListCheck className={styles.adminIcon} />
            Inventory
          </a>
        </li>
        <li className={styles.adminSidebarListItem}>
          <a href="">
            <BsMenuButtonWideFill className={styles.adminIcon} />
            Reports
          </a>
        </li>
        <li className={styles.adminSidebarListItem}>
          <a href="">
            <BsFillGearFill className={styles.adminIcon} />
            Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}
