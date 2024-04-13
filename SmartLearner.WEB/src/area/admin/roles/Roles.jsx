import React, { useState } from "react";
import styles from "../css/AdminApp.module.css";
import { BsSearch } from "react-icons/bs";

const Roles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className={styles.usersContainer}>
        <div className={styles.usersHeading}>
          <h2 className={styles.userHeading}>Users</h2>
          <button
            className={styles.addButton}
            onClick={() => setAddUserFormVisible(true)}
          >
            Add User
          </button>
        </div>
        <div className={styles.userTable}>
          <div className={styles.userTableHeading}>
            <BsSearch className={styles.usersSearchIcon} />
            <input
              type="text"
              className={styles.usersSearchInput}
              placeholder="Search users by email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.userTableDetails}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Roles</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
