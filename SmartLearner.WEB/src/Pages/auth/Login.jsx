import React, { useState } from "react";
import styles from '.././css/LoginRegister.module.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import Loader from "../../component/loader/Loader";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Perform basic validation
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      console.log(`Login Form data`, response);

      if (response.ok) {
        alert("Login Successful");
        setLoginFormData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        setErrorMessage("Invalid credentials");
        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }

    // Implement login functionality
    console.log(loginFormData);
  };

  return (
    <>
      {!loading ? (
        <div className={styles.loginRegisterPage}>
          <section className={styles.loginRegisterSection}>
            <div className={styles.loginheading}>
              <h1>Welcome</h1>
              <p>Please sign in to your account using the form below.</p>
            </div>
            <div className={styles.loginformContainer}>
              <section className={styles.loginRegistration}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                  <label>
                    <FaUser id={styles.loginFormsIcons} />
                    <input
                      type="text"
                      name="email"
                      value={loginFormData.email}
                      onChange={handleLoginInputChange}
                      placeholder="Email"
                    />
                  </label>
                  <br />
                  <label>
                    <FaLock id={styles.loginFormsIcons} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={loginFormData.password}
                      onChange={handleLoginInputChange}
                      placeholder="Password"
                    />
                    {showPassword ? (
                      <FaEyeSlash
                        id={styles.loginFormsIcons}
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <FaEye
                        id={styles.loginFormsIcons}
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </label>
                  <br />
                  <div className={styles.formPrivacyPolicies}>
                    <input type="checkbox" name="signInChecked" />
                    <p>Keep me signed in</p>
                  </div>
                  <div className={styles.loginFormBtn}>
                    <button type="submit">Login</button>
                  </div>
                  <br />
                </form>
              </section>
              <div className={styles.formFooter}>
                <p>
                  Don't have an account?{" "}
                  <button>
                    {" "}
                    <Link to="/register">Register</Link>
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
