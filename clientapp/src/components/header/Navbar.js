import React from 'react'
import styles from "./css/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';

function Navbar() {


    const dispatch=useDispatch()

    const navigate = useNavigate()
    let userDetails = useSelector((state) => {
        console.log(state, "statestatestate")

        return state.auth.userDetails
    })


    return (
        <>
            <div id={styles.navContainer}>
                <div className={styles.navbar}>
                    <div className={styles.navbarContentImg}>
                        <div className={styles.contactInfo}>
                            <a href="tel:+4402475092784">02475092784</a>/
                            <a href="mailto:admin@smartlearner.com"> Admin@Smartlearner.com</a>
                        </div>
                        <div className={styles.logo}>
                            <Link to="/">
                                <img src={logo} alt="smartlearnerLogo" />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.navLinks}>
                        <ul type="none" id={styles.navLinksUl}>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <span>|</span>
                            <li>
                                <Link to="/faqs">FAQS</Link>
                            </li>
                            <span>|</span>

                            {
                                userDetails.username ? <>
                                    <li style={{cursor:'pointer'}} onClick={()=>{
                                        navigate("/my-account")
                                    }}>
                                        Welcome {userDetails.username}
                                    </li>
                                    
                                    <li>
                                        <span onClick={()=>{
                                            dispatch(logoutUser())
                                        }}>Logout</span>
                                    </li>
                                </> : <li>
                                    <Link to="/login">LOGIN / REGISTER</Link>
                                </li>
                            }

                        </ul>
                        {
                            userDetails.username && <div className={styles.navShoppingCart}>
                                <Link to="/cart">
                                    {" "}
                                    <FaShoppingCart size={20} />
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar