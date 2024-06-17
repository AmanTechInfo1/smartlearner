import React from "react";
import styles from "../../assets/css/admin.module.css";
import { Link } from "react-router-dom";
import { BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from "react-icons/bs";
import { LiaUserCogSolid } from "react-icons/lia";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

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
                    <Link to="/admin/categories">
                        <li className={styles.adminSidebarListItem}>
                            <BsFillGrid3X3GapFill className={styles.adminIcon} />
                            Product Category
                        </li>
                    </Link>
                    <Link to="/admin/postcodes">
                        <li className={styles.adminSidebarListItem}>
                            {" "}
                            <BsFillArchiveFill className={styles.adminIcon} />
                            Product Post Code
                        </li>
                    </Link>
                    <Link to="/admin/product-area">
                        <li className={styles.adminSidebarListItem}>
                            {" "}
                            <BsFillArchiveFill className={styles.adminIcon} />
                            Product Area
                        </li>
                    </Link>
                    <Link to="/admin/products">
                        <li className={styles.adminSidebarListItem}>
                            {" "}
                            <BsFillArchiveFill className={styles.adminIcon} />
                            Products
                        </li>
                    </Link>

                    <Link to="/admin/quiz-category">
                        <li className={styles.adminSidebarListItem}>
                            <BsListCheck className={styles.adminIcon} />
                            Quiz Category
                        </li>
                    </Link>

                    <Link to="/admin/quiz-module">
                        <li className={styles.adminSidebarListItem}>
                            <BsListCheck className={styles.adminIcon} />
                            Quiz Module
                        </li>
                    </Link>


                    <Link to="/admin/quiz">
                        <li className={styles.adminSidebarListItem}>
                            <BsMenuButtonWideFill className={styles.adminIcon} />
                            Quizes
                        </li>
                    </Link>
                    <Link to="/admin/quizViewResult">
                        <li className={styles.adminSidebarListItem}>
                            <BsMenuButtonWideFill className={styles.adminIcon} />
                            Quiz Result
                        </li>
                    </Link>

                    

                    <Link to="/admin/order">
                        <li className={styles.adminSidebarListItem}>
                            <MdOutlineProductionQuantityLimits className={styles.adminIcon} />
                            Orders
                        </li>
                    </Link>

                </ul>
            </aside>
        </>
    )
}

export default AdminSidebar