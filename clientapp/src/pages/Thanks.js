import React from 'react';
import styles from "./css/LoginRegister.module.css";
import { Link } from 'react-router-dom';

const Thanks = () => {
    return (
        <>
            <div className={styles.loginRegisterPage}>
                <section className={styles.loginRegisterSection}>
                    <div className={styles.loginheading}>
                        <h1>{"Welcome"}</h1>
                        <p>Thanks for choosing SmartLearner Driving School.</p>
                    </div>
                    <div className={styles.loginformContainer}>
                        <section className={styles.loginRegistration}>
                            <h2>Thanks </h2>
                            <p>
                            Congratulations! You have successfully registered and are now a member of the SmartLearner Driving School. Thank you for your time.
                            </p>
                        </section>
                        <div className={styles.formFooter}>
                            <Link type='button' to={'/home'}>
                                Proceed to Home Page
                               
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Thanks