import React, { useState } from "react";
import styles from "./css/LoginRegister.module.css";
import { FaUser, FaLock, FaMobile, FaEye, FaEyeSlash } from "react-icons/fa"; // Import necessary icons
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../features/authSlice";
import Loader from "../component/loader/Loader";

export default function LoginRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });


  const navigate = useNavigate();
  const [registrationFormData, setRegistrationFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
    accountType: "",
    privacyPolicyChecked: false,
  });

  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false); // Track registration status

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

      console.log(`Login Form data`,response);

      if(response.ok){
        alert("Login Successfull")
        setLoginFormData({
          email: "",
          password: "",
          })
          navigate("/")

      }else{
        alert("invalid credential")
        console.log("invalid Cradentials")
      }

    } catch (error) {
      console.log(error);
    }

    // Implement login functionality
    console.log(loginFormData);
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setRegistrationFormData({ ...registrationFormData, [name]: newValue });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Extracting necessary fields from registrationFormData
    const { username, password, email, mobile, accountType } =
      registrationFormData;

    // Perform basic validation
    if (!username || !password || !email || !mobile || !accountType) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!registrationFormData.privacyPolicyChecked) {
      setErrorMessage("Please accept the privacy policy.");
      return;
    }

    if (password !== registrationFormData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Constructing the data object to be sent in the request body
    const requestData = {
      username,
      password,
      email,
      mobile,
      accountType,
    };
    dispatch(registerUser({ requestData, navigate }));
    // Attempt to send registration data to backend API
    // try {
    //   const response = await fetch(`http://localhost:5000/api/auth/register`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(requestData),
    //   });


      if (response.ok) {
        setRegistrationFormData({
          username: "",
          email: "",
          mobile: "",
          password: "",
          accountType: "",
        });
        setRegistered(true); // Set registered status to true
      }

    //   console.log(response);
    // } catch (error) {
    //   // Handle fetch error
    //   console.error("Error registering user:", error);
    // }
    // Implement registration functionality
    console.log(requestData);
  };

  const handleSignInClick = () => {
    setIsLogin(true); // Switch to login mode
    setRegistered(false); // Reset registration status
  };

  return (
    <>
      {!loading ? (
        <div className={styles.loginRegisterPage}>
          <section className={styles.loginRegisterSection}>
            <div className={styles.loginheading}>
              <h1>{isLogin ? "Welcome" : "Hi There,"}</h1>
              <p>
                {isLogin
                  ? "Please sign in to your account using the form on the right side."
                  : "Thanks for choosing SmartLearner Driving School. Fill out the form on the right to create an account and access all our instructor training materials!"}
              </p>
            </div>
            <div className={styles.loginformContainer}>
              <section className={styles.loginRegistration}>
                <h2>{isLogin ? "Login" : "Create Account"}</h2>
                {!registered ? (
                  <form onSubmit={isLogin ? handleLogin : handleRegistration}>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                    <label>
                      <FaUser id={styles.loginFormsIcons} />
                      <input
                        type="text"
                        name="username"
                        value={
                          isLogin
                            ? loginFormData.username
                            : registrationFormData.username
                        }
                        onChange={
                          isLogin
                            ? handleLoginInputChange
                            : handleRegistrationInputChange
                        }
                        placeholder="Username"
                      />
                    </label>

                    <br />
                    <label>
                      <FaLock id={styles.loginFormsIcons} />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={
                          isLogin
                            ? loginFormData.password
                            : registrationFormData.password
                        }
                        onChange={
                          isLogin
                            ? handleLoginInputChange
                            : handleRegistrationInputChange
                        }
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
                    {!isLogin && (
                      <>
                        <br />
                        <label>
                          <FaLock id={styles.loginFormsIcons} />
                          <input
                            type={confirmShowPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={registrationFormData.confirmPassword}
                            onChange={handleRegistrationInputChange}
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
                        <br />
                        <label>
                          <MdEmail id={styles.loginFormsIcons} />
                          <input
                            type="email"
                            name="email"
                            value={registrationFormData.email}
                            onChange={handleRegistrationInputChange}
                            placeholder="Email"
                          />
                        </label>
                        <br />
                        <label>
                          <FaMobile id={styles.loginFormsIcons} />
                          <input
                            type="tel"
                            name="mobile"
                            value={registrationFormData.mobile}
                            onChange={handleRegistrationInputChange}
                            placeholder="Mobile Number"
                          />
                        </label>
                        <br />
                        <div id={styles.registerAccount}>
                          <FaUser id={styles.loginFormsIcons} />
                          <select
                            name="accountType"
                            value={registrationFormData.accountType}
                            onChange={handleRegistrationInputChange}
                          >
                            <option disabled value="">
                              Account Type
                            </option>
                            <option value="trainee instructor">
                              Trainee Instructor
                            </option>
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
                        checked={registrationFormData.privacyPolicyChecked}
                        onChange={handleRegistrationInputChange}
                      />
                      <p>
                        {isLogin
                          ? "Keep me signed in"
                          : "I agree to the privacy policy"}
                      </p>
                    </div>
                    <br />
                    <div className={styles.loginFormBtn}>
                      <button type="submit">
                        {isLogin ? "Login" : "Create Account"}
                      </button>
                    </div>
                    <br />
                  </form>
                ) : (

                  <p>
                    Thank you for applying for membership to our site. We will
                    review your details and send you an email letting you know
                    whether your application has been successful or not.
                  </p>
                )}
              </section>
              <div className={styles.formFooter}>
                <p>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin); // Toggle isLogin state
                      if (!isLogin) handleSignInClick(); // Call handleSignInClick only if switching to sign in mode
                    }}
                  >
                    {isLogin ? "Register" : "Sign In"}
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
