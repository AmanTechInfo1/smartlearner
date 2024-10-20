import React from 'react'

import styles from './css/AdminApp.module.css'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import LoadingWeb from '../../Layouts/loaderWeb/LoadingWeb'

export default function AdminLayout() {
  const [loading, setLoading] = useState(true);
  const [webLoading, setwebLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
   
    const timeout = setTimeout(() => {
     
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [location]); 

  useEffect(() => {
   
    const timeout2 = setTimeout(() => {
      setwebLoading(false);
    }, 1000);

    return () => clearTimeout(timeout2);
  }, []);


////////////////////////////////////

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (
    <>
     {webLoading ? (
        <LoadingWeb />
      ) : (
    <div className={styles.adminAppPanel}>
      <div className={styles.gridContainer}>
     
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
   
        
          <main className={styles.mainContainer}>
               {loading ? (
        <LoadingWeb />
      ) : (
          <Outlet />
            )}
          </main>
          
      </div>
    </div>
     )}
    </>
  )
}
