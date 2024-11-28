import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import styles from ".././css/LoginRegister.module.css";
import { useDispatch } from "react-redux";
import { completePasswordReset } from "../../redux/features/authSlice"; // assuming you have this action to handle the password reset

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
      const response = await dispatch(completePasswordReset({ resetToken, newPassword: password, navigate }));
      if (response.success) {
        navigate("/login"); // Redirect to login after successful password reset
      }// Redirect to login after successful password reset
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginRegisterPage}>
      <section className={styles.loginRegisterSection}>
        <div className={styles.loginheading}>
          <h1>Reset Your Password</h1>
        </div>
        <div className={styles.loginformContainer}>
          <section className={styles.loginRegistration}>
            <form onSubmit={handleSubmit}>
              <label>
                New Password:
                <input
                 type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New Password"
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
              <label>
                Confirm Password:
                <input
                  type={confirmShowPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
                {confirmShowPassword ? (
                      <FaEyeSlash
                        onClick={() => setConfirmShowPassword(false)}
                        id={styles.loginFormsIcons}
                      />
                    ) : (
                      <FaEye
                        onClick={() => setConfirmShowPassword(true)}
                        id={styles.loginFormsIcons}
                      />
                    )}
              </label>
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
      </section>
    </div>
  );
};

export default ResetPasswordPage;
