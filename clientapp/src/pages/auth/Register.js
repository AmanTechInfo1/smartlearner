import React, { useState, useEffect } from "react";
import styles from ".././css/LoginRegister.module.css";
import { FaUser, FaLock, FaMobile, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { AccountTypes } from "../../constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../redux/features/authSlice";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { registerformSchema } from "../../schemas/account/index";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerformSchema),
  });

  const handleRegistration = async (data) => {

    const formData = new FormData();
    formData.append("username", data.username);

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("roleName", data.roleName);
    dispatch(registerUser({ requestData: data, reset, navigate }));
  };

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
                    <p style={{ color: "red" }}>{errors?.username?.message}</p>
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
                    <p style={{ color: "red" }}>{errors?.password?.message}</p>
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
                    <p style={{ color: "red" }}>{errors?.email?.message}</p>
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
                  {errors?.phoneNumber && (
                    <p style={{ color: "red" }}>
                      {errors?.phoneNumber?.message}
                    </p>
                  )}
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
                  {errors?.roleName && (
                    <p style={{ color: "red" }}>{errors?.roleName?.message}</p>
                  )}
                  <br />
                  <div className={styles.formPrivacyPolicies}>
                    <input type="checkbox" />

                    <p>I agree to the privacy policy</p>
                  </div>

                  <br />
                  <div className={styles.loginFormBtn}>
                    <button type="submit">Create Account</button>
                  </div>
                  <br />
                </form>
              </section>
              <div className={styles.formFooter}>
                <p>
                  Already have an account?{" "}
                  <button>
                    {" "}
                    <Link to="/login">Sign In</Link>
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <LoadingWeb />
      )}
    </>
  );
}
