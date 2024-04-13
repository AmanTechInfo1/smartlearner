import React from "react";
import styles from './css/AdminApp.module.css';

const SingleUser = () => {
  return (
    <div className={styles.singleUserContainer}>
      <div className={styles.singleUserMainBody}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className={styles.singleUserMainBreadcrumb}>
          <ol className={`breadcrumb ${styles.singleUserBreadcrumb}`}>
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
        {/* /Breadcrumb */}
        <div className={styles.singleUserRowGuttersSm}>
          <div className="col-md-4 mb-3">
            <div className={`card ${styles.singleUserCard}`}>
              <div className={`card-body ${styles.singleUserCardBody}`}>
                <div className={`d-flex flex-column align-items-center text-center ${styles.singleUserTextCenter}`}>
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className={`rounded-circle ${styles.singleUserAvatar}`} width="150" />
                  <div className={styles.singleUserMt3}>
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    <button className={`btn btn-primary ${styles.singleUserBtnPrimary}`}>Follow</button>
                    <button className={`btn btn-outline-primary ${styles.singleUserBtnOutlinePrimary}`}>Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card mt-3 ${styles.singleUserCardMt3}`}>
              {/* User details */}
              <ul className={`list-group list-group-flush ${styles.singleUserListGroup}`}>
                <li className={`list-group-item d-flex justify-content-between align-items-center flex-wrap ${styles.singleUserListGroupItem}`}>
                  <h6 className={`mb-0 ${styles.singleUserListItem}`}>Full Name</h6>
                  <span className={`text-secondary ${styles.singleUserListItemTextSecondary}`}>Kenneth Valdez</span>
                </li>
                {/* Add more user details here */}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className={`card mb-3 ${styles.singleUserCardMb3}`}>
              {/* User details */}
              <div className={`card-body ${styles.singleUserCardBody}`}>
                <div className="row">
                  <div className={`col-sm-3 ${styles.singleUserColSm3}`}>
                    <h6 className={`mb-0 ${styles.singleUserListItem}`}>Full Name</h6>
                  </div>
                  <div className={`col-sm-9 text-secondary ${styles.singleUserColSm9}`}>
                    Kenneth Valdez
                  </div>
                </div>
                {/* Add more user details here */}
              </div>
            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className={`card h-100 ${styles.singleUserCardH100}`}>
                  {/* Project status */}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className={`card h-100 ${styles.singleUserCardH100}`}>
                  {/* Project status */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
