import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./css/footer.module.css";
import logo from "../../assets/images/smartlearnerLogo.png";
import { otherLinks, quickLinks } from "../../assets/data/quicklinks";
import paypal from "../../assets/images/pay-pal.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/Master-card.png";
import discover from "../../assets/images/Discover.png";
import americanExpress from "../../assets/images/American-express.png";
import ssl from "../../assets/images/ssl-logo.png";

function Footer() {
    return (
        <>
            <div className={styles.Footer}>
                <section className={styles.container}>
                    <div className={styles.footerContent}>
                        <div className={styles.col1}>
                            <a href="https://smartlearner.com">
                                <img src={logo} alt="" />
                            </a>
                            <p>
                                SmartLearner was founded in 2004. SmartLearner is the leading
                                independent driving school in the West Midlands. At SmartLearner
                                Driving School we use our carefully crafted training program, we
                                use the latest technology In Car (Ipads) including text alerts and
                                emailing lessons summary directly to you.
                            </p>
                        </div>
                        <div className={styles.col2}>
                            <h3>Blogs</h3>
                            <article>
                                <a href="/">
                                    <h4>Art of manual Driving</h4>
                                </a>
                                <p>
                                    In a world increasingly dominated by automatic transmissions,
                                    there`s a unique charm and...
                                </p>
                            </article>
                            <article>
                                <a href="/">
                                    <h4>The Art of Automatic Driving lessons</h4>
                                </a>
                                <p>
                                    In the ever-evolving world of automotive technology, automatic
                                    transmission cars have become the...
                                </p>
                            </article>
                        </div>
                        <div className={styles.col3}>
                            <h3>OPENING HOURS</h3>
                            <div className={styles.hoursLists}>
                                <table className={styles.tabel}>
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Open</th>
                                            <th>Close</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Monday</td>
                                            <td>9:00 AM</td>
                                            <td>7:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday</td>
                                            <td>9:00 AM</td>
                                            <td>7:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <td>9:00 AM</td>
                                            <td>7:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <td>9:00 AM</td>
                                            <td>7:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <td>9:00 AM</td>
                                            <td>7:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday</td>
                                            <td>10:00 AM</td>
                                            <td>4:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>10:00 AM</td>
                                            <td>4:00 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.lowerFooter}>
                    <div className={styles.container}>
                        <div className={styles.innerSection}>
                            <div className={styles.lowerCol1}>
                                <h3>Quick Links</h3>
                                <div className={styles.quicklinks}>
                                    {quickLinks.map((item, index) => (
                                        <a key={index} href={item.path}>
                                            {item.display}
                                            <span id={styles.arrowIcon}>
                                                <MdOutlineKeyboardDoubleArrowRight />
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.lowerCol2}>
                                <h3>Other Links</h3>
                                <div className={styles.quicklinks}>
                                    <ul type="none" id={styles.quicklinks}>
                                        {otherLinks.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.path}>
                                                    {item.display}
                                                    <span id={styles.arrowIcon}>
                                                        <MdOutlineKeyboardDoubleArrowRight />
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.lowerCol3}>
                                <ul type="none" className={styles.footerImg}>
                                    <li>
                                        <img src={paypal} alt="paypalimg" />
                                    </li>
                                    <li>
                                        <img src={visa} alt="visacardimg" />
                                    </li>
                                    <li>
                                        <img src={mastercard} alt="mastercardimg" />
                                    </li>
                                    <li>
                                        <img src={discover} alt="discoverimg" />
                                    </li>
                                    <li>
                                        <img src={americanExpress} alt="AmericanExpressimg" />
                                    </li>
                                </ul>
                                <img src={ssl} alt="sslLogo" id={styles.sslLogo} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className={styles.copyRight}>
                    <p>CopyRight @ 2024 | Managed By Savvytechguru.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer