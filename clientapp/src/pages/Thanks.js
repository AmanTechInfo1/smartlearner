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
                                Thank you for applying for membership to our site. We will
                                review your details and send you an email letting you know
                                whether your application has been successful or not.
                            </p>
                        </section>
                        <div className={styles.formFooter}>
                            <Link type='button' to={'/home'}>
                                Proceed to Home Page
                                {/* Don't have an account?
                                <button
                                    onClick={() => {
                                        setIsLogin(!isLogin);
                                        if (!isLogin) handleSignInClick();
                                    }}
                                >
                                    Register
                                </button> */}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Thanks