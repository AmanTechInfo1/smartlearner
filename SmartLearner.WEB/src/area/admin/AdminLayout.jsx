import React from 'react'

import styles from './css/AdminApp.module.css'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminHome from './AdminHome'
import AdminUsers from './AdminUsers'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (
    <div className={styles.adminAppPanel}>
      <div className={styles.gridContainer}>
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <main className={styles.mainContainer}>
      <Outlet/>
      </main>
  
      </div>
    </div>
  )
}
