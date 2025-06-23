import React, { useState, useEffect } from "react";
import styles from ".././css/LoginRegister.module.css";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword } from "../../redux/features/authSlice";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { forgotPassword } from "../../schemas/account/index";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import { Helmet } from "react-helmet-async";
export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [webLoading, setwebLoading] = useState(true);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPassword),
    defaultValues: {
      email: "",
    },
  });

  const handleForgotPassword = async (data) => {
    console.log("Form submitted with data:", data);
    dispatch(resetPassword(data.email, navigate));
  };

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setwebLoading(false);
    }, 500);
    return () => clearTimeout(timeout2);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ForgotPassword</title>
      </Helmet>
      {!webLoading ? (
        <div className={styles.loginRegisterPage}>
          <section className={styles.loginRegisterSection}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Link to="/">
                {" "}
                <img
                  src={smartlearnerLogo}
                  alt="logo"
                  style={{ maxWidth: "400px" }}
                />
              </Link>
            </div>
            <div className={styles.ImageDisplayFlex}>
              <div className={styles.loginformContainer}>
                <section className={styles.loginRegistration}>
                  <div className={styles.loginLogo}>
                    <iframe
                      style={{ height: "150px" }}
                      src="https://lottie.host/embed/804d6f1b-6e4a-47cd-aedb-37d125ce5e3d/pyEvumb4lL.lottie"
                    ></iframe>
                  </div>
                  <h2>Forgot</h2>
                  <form onSubmit={handleSubmit(handleForgotPassword)}>
                    <FaUser id={styles.loginFormsIcons} />
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address"
                        >
                          <Form.Control
                            type="email"
                            value={value}
                            onChange={onChange}
                            placeholder="Email Address"
                          />
                        </FloatingLabel>
                      )}
                    />

                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors?.email?.message}</p>
                    )}
                    <br />
                    <div className={styles.loginFormBtn}>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                  <div className={styles.formFooter}>
                    <p>
                      <button>
                        <Link to="/login">Back to Login</Link>
                      </button>
                    </p>
                  </div>
                </section>
              </div>
              <section className={styles.loginDisplayflexImage}>
                <iframe
                  style={{ maxWidth: "650px", width: "100%", height: "100%" }}
                  src="https://lottie.host/embed/dde9a026-a5f8-4b23-b124-9cd2c4493f84/ROc5lClLUP.lottie"
                ></iframe>
              </section>
            </div>
          </section>
        </div>
      ) : (
        <LoadingWeb />
      )}
    </>
  );
}
