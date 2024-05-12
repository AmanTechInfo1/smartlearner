import React, { useState } from 'react';
import styles from "../../assets/css/admin.module.css";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function AdminHeader({ OpenSidebar }) {
    const [searchQuery, setSearchQuery] = useState('');

    const performSearch = () => {
        console.log('Search initiated for:', searchQuery);
        // Perform actual search operation here
    };

    return (
        <>
            <header className={styles.adminHeader}>
                <div className={styles.adminMenuIcon}>
                    <BsJustify className={styles.adminIcon} onClick={OpenSidebar} />
                </div>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') performSearch(); }}
                        className={styles.searchInput}
                    />
                    <BsSearch className={styles.searchIcon} onClick={performSearch} />
                </div>
                <div className={styles.adminHeaderRight}>
                    <BsFillBellFill className={styles.adminIcon1} />
                    <BsFillEnvelopeFill className={styles.adminIcon1} />
                    <Link to='/login'><BsPersonCircle className={styles.adminIcon1} /></Link>
                </div>
            </header>
        </>
    )
}

export default AdminHeader