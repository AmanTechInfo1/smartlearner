import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import styles from ".././css/LoginRegister.module.css";
import { useDispatch } from "react-redux";
import { completePasswordReset } from "../../redux/features/authSlice"; // assuming you have this action to handle the password reset
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";

const ResetPasswordPage = () => {
  const { resetToken } = useParams(); // Get the reset token from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  useEffect(() => {
    if (!resetToken) {
      navigate("/login"); // Redirect if token is not present
    }
  }, [resetToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await dispatch(
        completePasswordReset({ resetToken, newPassword: password, navigate })
      );
      if (response.success) {
        navigate("/login"); // Redirect to login after successful password reset
      } // Redirect to login after successful password reset
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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
              <h2>Reset Password</h2>
              <form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingInput" label="New password">
                  {" "}
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New Password"
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

                <br />

                <FloatingLabel
                  controlId="floatingInput"
                  label="Confirm Password"
                >
                  {" "}
                  <Form.Control
                    type={confirmShowPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                  {confirmShowPassword ? (
                    <FaEyeSlash
                      onClick={() => setConfirmShowPassword(false)}
                      className={styles.loginFormsIcons}
                    />
                  ) : (
                    <FaEye
                      onClick={() => setConfirmShowPassword(true)}
                      className={styles.loginFormsIcons}
                    />
                  )}
                </FloatingLabel>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <br />
                <div className={styles.loginFormBtn}>
                  <button type="submit" disabled={loading}>
                    {loading ? "Resetting..." : "Reset Password"}
                  </button>
                </div>
              </form>
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
  );
};

export default ResetPasswordPage;
