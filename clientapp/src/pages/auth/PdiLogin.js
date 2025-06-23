import React, { useState, useEffect, useRef } from "react";
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

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import gsap from "gsap";
import { FaHome } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Helmet } from "react-helmet-async";

export default function PdiLogin() {
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
    formData.append("usernameOremail", data.usernameOremail);
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

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const text = "WelCome Back To PDI PORTAL";
    return text.split("").map((char, index) => <span key={index}>{char}</span>);
  };

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll("span");

      // GSAP Timeline for the text animation
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.from(letters, {
        opacity: 0.6,
        y: 100,
        ease: "bounce.out", // Start from below
        stagger: 0.1, // Stagger the animation for each letter
        rotationX: 90, // Initial rotation effect
        transformOrigin: "bottom center", // Center for rotation
        scale: 0.5,
        // Start small
      })
        .to(letters, {
          scale: 1, // Scale to normal size
          opacity: 1, // Fade in to full opacity
          rotationX: 0, // Reset rotation
          y: 0, // Move to original position
          stagger: 0.1, // Slight stagger for each letter
          duration: 0.8, // Smooth transition duration
        })
        .to(letters, {
          color: "#FF5733", // Change text color to red
          rotationY: 360, // Apply rotation on the Y-axis
          stagger: 0.1,
          duration: 1, // Rotate each letter over 1 second
        })
        .to(letters, {
          scale: 1.2, // Slightly enlarge text
          opacity: 0.8, // Reduce opacity slightly
          rotationX: -10, // Slight tilt effect
          stagger: 0.1, // Stagger the scaling
          duration: 1, // Animation duration
        })
        .to(letters, {
          scale: 1, // Return to original scale
          opacity: 1, // Full opacity
          rotationX: 0, // Reset rotation
          color: "#04fad4", // Reset color to black
          stagger: 0.1, // Maintain stagger effect
          duration: 1, // Final duration
        })
        .to(letters, {
          rotation: 10, // Add shake effect
          x: -5, // Horizontal shake
          yoyo: true, // Yoyo effect for shake (goes back and forth)
          repeat: 2, // Repeat the shake twice
          duration: 0.1, // Short shake duration
          stagger: 0.05, // Stagger shake on each letter
        })
        .to(letters, {
          scale: 1.3, // Increase size slightly for bounce effect
          opacity: 1, // Ensure opacity stays full
          ease: "bounce.out", // Bounce easing for effect
          stagger: 0.05, // Stagger bounce
          duration: 1, // Bounce duration
        })
        .to(letters, {
          scale: 1, // Reset scale
          opacity: 1, // Reset opacity
          y: -30, // Vertical movement for final bounce
          duration: 0.5, // Short duration for final bounce
        })
        // Infinite color change with loop
        .to(letters, {
          color: "#FF1493", // Change color to a pinkish hue
          duration: 2, // Duration of color change
          repeat: -1, // Repeat infinitely
          yoyo: true, // Reverse color change for alternating effect
          stagger: 0.1, // Stagger the color change for each letter
        });
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login/Register</title>
      </Helmet>
      {!loading ? (
        <div className={styles.loginRegisterPage}>
          <div className="opicity"></div>
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
            {/* <div className={styles.buttonsGrid}>
              <Link to="/ADI-Training-Portal">
                <button>
                  PDI Portal{" "}
                  <MdKeyboardDoubleArrowRight className={styles.gradientIcon} />
                </button>
              </Link>
              <Link to="/">
                {" "}
                <button>
                  <FaHome className={styles.gradientIcon} />
                </button>
              </Link>
              <Link to="/Theory-Portal">
                {" "}
                <button>
                  Theory Portal{" "}
                  <MdKeyboardDoubleArrowRight className={styles.gradientIcon} />
                </button>
              </Link>
            </div> */}

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
                      name="usernameOremail"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email or username"
                        >
                          <Form.Control
                            type="text"
                            value={value}
                            onChange={onChange}
                            placeholder="Email or username"
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
                      style={{
                        textAlign: "right",
                        margin: "1rem 0px 6px 0px",
                      }}
                    >
                      <Link
                        to="/forgot-password"
                        style={{
                          textDecoration: "none",
                          fontWeight: "500",
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
                    <br />{" "}
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
                  {/* <div className={styles.formFooter}>
                    <p>
                      Don't have an account?{" "}
                      <button>
                        {" "}
                        <Link to="/register">Register</Link>
                      </button>
                    </p>
                  </div> */}
                </section>
              </div>
              <section className={styles.loginDisplayflexImage}>
                <h2 ref={textRef}>{splitText()}</h2>
                <section className={styles.loginDisplayflextext}>
                  <p>You have to buy packages to visit these pages</p>
                  <Link to="/driving-instructor-packages/instructor-packages">
                    Visit Now
                  </Link>
                </section>
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
