import React, { useState } from "react";
import styles from "../../assets/css/admin.module.css";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/authSlice";

function AdminHeader({ OpenSidebar }) {
  const [searchQuery, setSearchQuery] = useState("");

  const performSearch = () => {
    console.log("Search initiated for:", searchQuery);
    // Perform actual search operation here
  };
  const dispatch = useDispatch();
const navigate = useNavigate();
  return (
    <>
      <header className={styles.adminHeader}>
        <div className={styles.adminMenuIcon}>
          <BsJustify className={styles.adminIcon} onClick={OpenSidebar} />
        </div>
        {/* <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') performSearch(); }}
                        className={styles.searchInput}
                    />
                    <BsSearch className={styles.searchIcon} onClick={performSearch} />
                </div> */}
        <div
          className={styles.adminHeaderRight}
          style={{ textAlign: "right", width: "100%" }}
        >
          <span
            onClick={() => {
              dispatch(logoutUser());
              navigate('/');
            }}
          >
            <BsPersonCircle className={styles.adminIcon1} />
            LogOut
          </span>
        </div>
      </header>
    </>
  );
}

export default AdminHeader;
