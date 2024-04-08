import React, { useState } from "react";
import styles from ".././css/LoginRegister.module.css";
import { FaUser, FaLock, FaMobile, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../features/authSlice";
import Loader from "../../component/loader/Loader";
import { registerformSchema } from "../../formSchemas";
import { Controller, useForm } from "react-hook-form";
import { AccountTypes } from "../../constants";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerformSchema),
  });

  // const [registrationFormData, setRegistrationFormData] = useState({
  //   username: "",
  //   password: "",
  //   confirmPassword: "",
  //   email: "",
  //   mobile: "",
  //   accountType: "",
  //   privacyPolicyChecked: false,
  // });
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleRegistrationInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   const newValue = type === "checkbox" ? checked : value;
  //   setRegistrationFormData({ ...registrationFormData, [name]: newValue });
  // };

  const handleRegistration = async (data) => {
    console.log(data);
    // const { username, password, email, mobile, accountType } =
    //   registrationFormData;

    // // Perform basic validation
    // if (!username || !password || !email || !mobile || !accountType) {
    //   setErrorMessage("All fields are required.");
    //   return;
    // }

    // if (!registrationFormData.privacyPolicyChecked) {
    //   setErrorMessage("Please accept the privacy policy.");
    //   return;
    // }

    // if (password !== registrationFormData.confirmPassword) {
    //   setErrorMessage("Passwords do not match.");
    //   return;
    // }

    // // Constructing the data object to be sent in the request body
    // const requestData = {
    //   username,
    //   password,
    //   email,
    //   mobile,
    //   accountType,
    // };

    // Dispatch registerUser action
    //dispatch(registerUser({ requestData, navigate }));

    // Implement registration functionality
    //console.log(requestData);
  };

  const handleSignInClick = () => {
    setRegistered(false); // Reset registration status
  };

  return (
    <>
      {!loading ? (
        <div className={styles.loginRegisterPage}>
          <section className={styles.loginRegisterSection}>
            <div className={styles.loginheading}>
              <h1>Hi There,</h1>
              <p>
                Thanks for choosing SmartLearner Driving School. Fill out the
                form on the right to create an account and access all our
                instructor training materials!
              </p>
            </div>
            <div className={styles.loginformContainer}>
              <section className={styles.loginRegistration}>
                <h2>Create Account</h2>
                {!registered ? (
                  <form onSubmit={handleSubmit(handleRegistration)}>
                    <label>
                      <FaUser id={styles.loginFormsIcons} />
                      <Controller
                        name="username"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type="text"
                            value={value}
                            onChange={onChange}
                            placeholder="Username"
                          />
                        )}
                        defaultValue={""}
                      />
                    </label>
                    {errors?.username && (
                      <p style={{ color: "red" }}>
                        {errors?.username?.message}
                      </p>
                    )}
                    <br />
                    <label>
                      <FaLock id={styles.loginFormsIcons} />
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type={showPassword ? "text" : "password"}
                            value={value}
                            onChange={onChange}
                            placeholder="Password"
                          />
                        )}
                        defaultValue={""}
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
                    {errors?.password && (
                      <p style={{ color: "red" }}>
                        {errors?.password?.message}
                      </p>
                    )}
                    <br />
                    <label>
                      <FaLock id={styles.loginFormsIcons} />
                      <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type={confirmShowPassword ? "text" : "password"}
                            value={value}
                            onChange={onChange}
                            placeholder="Confirm Password"
                          />
                        )}
                        defaultValue={""}
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
                    {errors?.confirmPassword && (
                      <p style={{ color: "red" }}>
                        {errors?.confirmPassword?.message}
                      </p>
                    )}
                    <br />
                    <label>
                      <MdEmail id={styles.loginFormsIcons} />
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type="email"
                            value={value}
                            onChange={onChange}
                            placeholder="Email Address"
                          />
                        )}
                        defaultValue={""}
                      />
                    </label>
                    {errors?.email && (
                      <p style={{ color: "red" }}>
                        {errors?.email?.message}
                      </p>
                    )}
                    <br />
                    <label>
                      <FaMobile id={styles.loginFormsIcons} />
                      <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type="tel"
                            value={value}
                            onChange={onChange}
                            placeholder="Mobile Number"
                          />
                        )}
                        defaultValue={""}
                      />
                    </label>
                    <br />
                    <div id={styles.registerAccount}>
                      <FaUser id={styles.loginFormsIcons} />
                      <Controller
                        name="roleName"
                        control={control}
                        render={({ field }) => (
                          <select {...field}>
                            <option disabled value="">
                              Account Type
                            </option>
                            {AccountTypes.map((accountType) => (
                              <option
                                key={accountType.value}
                                value={accountType.value}
                              >
                                {accountType.label}
                              </option>
                            ))}
                          </select>
                        )}
                        defaultValue=""
                      />
                    </div>
                    <br />
                    <div className={styles.formPrivacyPolicies}>
                      <Controller
                        name="privacyPolicy"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <input
                            type="checkbox"
                            value={value}
                            onChange={onChange}
                            placeholder="Mobile Number"
                          />
                        )}
                        defaultValue={""}
                      />
                      <p>I agree to the privacy policy</p>
                    </div>
                    <br />
                    <div className={styles.loginFormBtn}>
                      <button type="submit">Create Account</button>
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
                  Already have an account?{" "}
                  <button onClick={handleSignInClick}>
                    {" "}
                    <Link to="/login">Sign In</Link>
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
