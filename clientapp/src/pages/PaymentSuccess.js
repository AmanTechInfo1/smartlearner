import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./css/notfound.module.css";
import { removingCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import smartlearnerLogo from "../assets/images/smartlearnerLogo-removebg-preview.png";

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify({}));
      dispatch(removingCart());
    }
  });
  return (
    <section className={styles.page405}>
      <div style={{ textAlign: "center", padding: "3rem" }}>
        <img id={styles.whiteLogo} src={smartlearnerLogo} alt="logo" />
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colSm} ${styles.colSm12}`}>
            <div
              className={`${styles.colSm} ${styles.colSm10} ${styles.colSmOffset1} ${styles.textCenter}`}
            >
              <div className={styles.paymetSucces}>
                <h1 style={{fontSize:'3.2rem', textAlign:'center'}}>Payment Success</h1>
              </div>
              <div className={styles.contentBox404}>
                <h2 style={{fontSize:'3rem'}}>Congratulations</h2>
                <p style={{fontSize:'1.3rem'}}>
                  {" "}
                  Congratulations your payment has been successful. Please
                  contact us on +4402475092784 to get started
                </p>
              </div>
              <div className={styles.formFooter}>
                <Link type="button" to={"/home"}>
                  Proceed to Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
