import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '.././css/LoginRegister.module.css';
import { useDispatch } from 'react-redux';
import { completePasswordReset } from '../../redux/features/authSlice'; // assuming you have this action to handle the password reset

const ResetPasswordPage = () => {
  const { resetToken } = useParams(); // Get the reset token from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!resetToken) {
      navigate('/login'); // Redirect if token is not present
    }
  }, [resetToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await dispatch(completePasswordReset({ resetToken, password }));
      navigate('/login'); // Redirect to login after successful password reset
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New Password"
                />
              </label>
              <br />
              <label>
                Confirm Password:
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </label>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <br />
              <div className={styles.loginFormBtn}>
                <button type="submit" disabled={loading}>
                  {loading ? 'Resetting...' : 'Reset Password'}
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
