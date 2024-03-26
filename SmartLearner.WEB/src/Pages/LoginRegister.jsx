import { useState } from 'react';
import styles from './css/LoginRegister.module.css';
import { FaUser, FaLock, FaMobile, FaEye, FaEyeSlash } from "react-icons/fa"; // Import necessary icons
import { MdEmail } from "react-icons/md";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('user');
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false); // State for privacy policy checkbox
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'mobile') setMobile(value);
    else if (name === 'role') setRole(value);
    else if (name === 'privacyPolicyChecked') setPrivacyPolicyChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Perform basic validation
    if (!username || !password || !email || !mobile) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!privacyPolicyChecked) {
      setErrorMessage('Please accept the privacy policy.');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (isLogin) {
      // Implement login functionality
      console.log('Logging in with:', username, password);
    } else {
      // Implement registration functionality
      console.log('Registering with:', username, password, email, mobile, role);
    }
  };

  return (
    <div className={styles.loginRegisterPage}>
      <section className={styles.loginRegisterSection}>
        <div className={styles.loginheading}>
          <h1>{isLogin ? 'Welcome' : 'Hi There,'}</h1>
          <p>{isLogin ? 'Please sign in to your account using the form on the right side.' : 'Thanks for choosing SmartLearner Driving School. Fill out the form on the right to create an account and access all our instructor training materials!'}</p>
        </div>
        <div className={styles.loginformContainer}>
          <section className={styles.loginRegistration}>
            <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
            <form onSubmit={handleSubmit}>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <label>
                <FaUser id={styles.loginFormsIcons}/>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  placeholder="Username"
                />
              </label>
              <br />
              <label>
                <FaLock id={styles.loginFormsIcons}/>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash id={styles.loginFormsIcons} onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye id={styles.loginFormsIcons} onClick={() => setShowPassword(true)} />
                )}
              </label>
              {!isLogin && (
                <>
                  <br />
                  <label>
                    <FaLock id={styles.loginFormsIcons}/>
                    <input
                      type={confirmShowPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm Password"
                    />
                    {confirmShowPassword ? (
                      <FaEyeSlash onClick={() => setConfirmShowPassword(false)} id={styles.loginFormsIcons} />
                    ) : (
                      <FaEye onClick={() => setConfirmShowPassword(true)} id={styles.loginFormsIcons} />
                    )}
                  </label>
                  <br />
                  <label>
                    <MdEmail id={styles.loginFormsIcons}/>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </label>
                  <br />
                  <label>
                    <FaMobile id={styles.loginFormsIcons} />
                    <input
                      type="tel"
                      name="mobile"
                      value={mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                    />
                  </label>
                  <br />
                  <div id={styles.registerAccount}>
                    <FaUser id={styles.loginFormsIcons}/>
                    <select name="role" value={role} onChange={handleInputChange}>
                      <option value="trainee instructor">Trainee Instructor</option>
                      <option value="theory learner">Theory Learner</option>
                      <option value="customer">Customer</option>
                    </select>
                  </div>
                </>
              )}
              <br />
              <div className={styles.formPrivacyPolicies}>
                <input
                  type="checkbox"
                  name="privacyPolicyChecked"
                  checked={privacyPolicyChecked}
                  onChange={handleInputChange}
                />
                <p> {isLogin ? 'Keep me signed in' : 'I agree to the privacy policy'} </p>
              </div>
              <br />
              <div className={styles.loginFormBtn}>
                <button type="submit">
                  {isLogin ? 'Login' : 'Create Account'}
                </button>
              </div>
              <br />
            </form>
          </section>
          <div className={styles.formFooter}>
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Register' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
