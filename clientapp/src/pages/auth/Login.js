import React, { useState, useEffect } from "react";
import styles from ".././css/LoginRegister.module.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../redux/features/authSlice";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { loginformSchema } from "../../schemas/account/index";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import supportimage from "../../assets/images/loginsupport.gif";
import llogo from "../../assets/images/L-Plate.jpg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginformSchema),
  });

  const handleLogin = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    dispatch(loginUser({ loginData: data, navigate }));
  };

  // ////////////////////////////////////
  const [webLoading, setwebLoading] = useState(true);
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setwebLoading(false);
    }, 500);

    return () => clearTimeout(timeout2);
  }, []);

  return (
    <>
      {!webLoading ? (
        <div className={styles.loginRegisterPage}>
          <div className="opicity"></div>
          <section className={styles.loginRegisterSection}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
               <Link to='/' >  <img
                             src={smartlearnerLogo}
                             alt="logo"
                             style={{ maxWidth: "400px" }}
                           /></Link>
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

                  <h2>Sign in</h2>
                  <form onSubmit={handleSubmit(handleLogin)}>
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
                            className={styles.formControlWithIcon}
                          />
                        </FloatingLabel>
                      )}
                      defaultValue={""}
                    />

                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors?.email?.message}</p>
                    )}
                  
                    <div
                        style={{ textAlign: "right", margin:'1rem 0px 6px 0px'}}
                      >
                        <Link
                          to="/forgot-password"
                          style={{
                            textDecoration: "none",
                           fontWeight:'500',
                            fontSize: "18px",
                          }}
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    <div id={styles.level}>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className={styles.formControlWithIcon}
                          >
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              value={value}
                              onChange={onChange}
                              placeholder="Password"
                            />
                            {showPassword ? (
                              <FaEyeSlash
                                className={styles.loginFormsIcons}
                                onClick={() => setShowPassword(false)}
                              />
                            ) : (
                              <FaEye
                                className={styles.loginFormsIcons}
                                onClick={() => setShowPassword(true)}
                              />
                            )}
                          </FloatingLabel>
                        )}
                        defaultValue={""}
                      />
                    </div>
                    {errors?.password && (
                      <p style={{ color: "red" }}>
                        {errors?.password?.message}
                      </p>
                    )}
                    <br />
                   
                      {" "}
                      <div className={styles.formPrivacyPolicies}>
                      
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          name="signInChecked"
                        
                        />
                        <p>Remember Me</p>
                      
                      </div>{" "}
                     
                  

                    <div className={styles.loginFormBtn}>
                      <button type="submit">Login</button>
                    </div>
                  </form>
                  <div className={styles.formFooter}>
                    <p>
                      Don't have an account?{" "}
                      <button>
                        {" "}
                        <Link to="/register">Register</Link>
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
