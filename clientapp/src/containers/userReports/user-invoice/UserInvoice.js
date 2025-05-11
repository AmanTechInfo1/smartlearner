import React from 'react';
import styles from './UserInvoice.module.css';

const UserInvoice = () => {
   const socialLinks = [
    { label: 'Website', value: 'https://bootdey.com' },
    { label: 'Github', value: 'bootdey' },
    { label: 'Twitter', value: '@bootdey' },
    { label: 'Instagram', value: 'bootdey' },
    { label: 'Facebook', value: 'bootdey' }
  ];

  const projectStatus = [
    { title: 'Web Design', percent: 70 },
    { title: 'Website Markup', percent: 60 },
    { title: 'One Page', percent: 85 },
    { title: 'Mobile Template', percent: 40 },
    { title: 'Backend API', percent: 50 }
  ];

  return (
    <div className={styles.userReportInvoicecontainer}>
    <div className={styles.userReportInvoiceleftCard}>
      <div className={styles.userReportInvoiceprofileCard}>
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" className={styles.userReportInvoiceavatar} />
        <h2>John Doe</h2>
        <p>Full Stack Developer</p>
        <p>Bay Area, San Francisco, CA</p>
        <div className={styles.userReportInvoicebuttons}>
          <button className={styles.userReportInvoicefollow}>Follow</button>
          <button className={styles.userReportInvoicemessage}>Message</button>
        </div>
      </div>
      <div className={styles.userReportInvoicesocialCard}>
        {socialLinks.map(link => (
          <div key={link.label}>
            <strong>{link.label}</strong>: <span>{link.value}</span>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.userReportInvoicerightCard}>
      <div className={styles.userReportInvoiceinfoCard}>
        <div><strong>Full Name</strong><p>Kenneth Valdez</p></div>
        <div><strong>Email</strong><p>fip@jukmuh.al</p></div>
        <div><strong>Phone</strong><p>(239) 816-9029</p></div>
        <div><strong>Mobile</strong><p>(320) 380-4539</p></div>  
        <div><strong>Address</strong><p>Bay Area, San Francisco, CA</p></div>
       
      </div>
      <div className={styles.userReportInvoiceprojectCard}>
        <h4>Project Status</h4>
        {projectStatus.map(proj => (
          <div key={proj.title}>
            <p>{proj.title}</p>
            <div className={styles.userReportInvoiceprogressBar}>
              <div className={styles.userReportInvoiceprogress} style={{ width: `${proj.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default UserInvoice;
