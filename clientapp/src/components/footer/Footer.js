import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./css/footer.module.css";
import logo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import { otherLinks, quickLinks } from "../../assets/data/quicklinks";
import paypal from "../../assets/images/pay-pal.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/Master-card.png";
import discover from "../../assets/images/Discover.png";
import americanExpress from "../../assets/images/American-express.png";
import ssl from "../../assets/images/ssl-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <section className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.col1}>
              <Link href="Link">
                <img src={logo} alt="" />
              </Link>
              <p>
                SmartLearner was founded in 2004. SmartLearner is the leading
                independent driving school in the West Midlands. At SmartLearner
                Driving School we use our carefully crafted training program, we
                use the latest technology In Car (Ipads) including text alerts
                and emailing lessons summary directly to you.
              </p>
            </div>
            <div className={styles.col2}>
              <Link to="/blogs">
                <h3>Blogs</h3>
              </Link>
              <article>
                <h4>Art of manual Driving</h4>

                <p>
                  In a world increasingly dominated by automatic transmissions,
                  there`s a unique charm and...
                </p>
              </article>
              <article>
                <h4>The Art of Automatic Driving lessons</h4>

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
                      <td>Mon - Fri</td>
                      <td>9:00 AM</td>
                      <td>7:00 PM</td>
                    </tr>

                    <tr>
                      <td>Sat - Sun</td>
                      <td>10:00 AM</td>
                      <td>4:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <section>
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
              </section>
            </div>
          </div>
        </section>
        <section className={styles.lowerFooter}>
          <div className={styles.container}>
            <div className={styles.innerSection}>
              {/* <div className={styles.lowerCol1}>
                                <h3>Quick Links</h3>
                                <div className={styles.quicklinks}>
                                    {quickLinks.map((item, index) => (
                                        <Link key={index} to={item.path}>
                                            {item.display}
                                            <span id={styles.arrowIcon}>
                                                <MdOutlineKeyboardDoubleArrowRight />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div> */}
              {/* <div className={styles.lowerCol2}>
                                <h3>Other Links</h3>
                                <div className={styles.quicklinks}>
                                    <ul type="none" id={styles.quicklinks}>
                                        {otherLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                    <span id={styles.arrowIcon}>
                                                        <MdOutlineKeyboardDoubleArrowRight />
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div> */}
            </div>
          </div>
        </section>
        <div className={styles.copyRight}>
          <p>
            CopyRight @ 2024 | Managed By{" "}
            <a
              href="https://savvytechguru.com"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "700",
              }}>
              Savvytechguru.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
