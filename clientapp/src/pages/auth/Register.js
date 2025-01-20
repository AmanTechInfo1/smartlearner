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
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

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
      {!loading  ? (
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
            <div className={styles.ImageDisplayFlex}>
              <div className={styles.loginformContainer}>
                <section className={styles.loginRegistration}>
                  <div className={styles.loginLogo}>
                    <iframe
                      style={{ height: "150px" }}
                      src="https://lottie.host/embed/804d6f1b-6e4a-47cd-aedb-37d125ce5e3d/pyEvumb4lL.lottie"></iframe>
                  </div>

                  <h2>Create Account</h2>
                  <form onSubmit={handleSubmit(handleRegistration)}>
                    <Controller
                      name="username"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <FloatingLabel
                          controlId="floatingInput"
                          label="username">
                          <Form.Control
                            type="text"
                            value={value}
                            onChange={onChange}
                            placeholder="username"
                          />
                        </FloatingLabel>
                      )}
                      defaultValue={""}
                    />

                    {errors?.username && (
                      <p style={{ color: "red" }}>
                        {errors?.username?.message}
                      </p>
                    )}
                    <br />
                    <div id={styles.level}>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className={styles.formControlWithIcon}>
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
                    <div id={styles.level}>
                      <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <FloatingLabel
                            controlId="floatingInput"
                            label="confirm password"
                            className={styles.formControlWithIcon}>
                            <Form.Control
                              type={confirmShowPassword ? "text" : "password"}
                              value={value}
                              onChange={onChange}
                              placeholder="Confirm Password"
                            />
                            {confirmShowPassword ? (
                              <FaEyeSlash
                                className={styles.loginFormsIcons}
                                onClick={() => setConfirmShowPassword(false)}
                              />
                            ) : (
                              <FaEye
                                className={styles.loginFormsIcons}
                                onClick={() => setConfirmShowPassword(true)}
                              />
                            )}
                          </FloatingLabel>
                        )}
                        defaultValue={""}
                      />
                    </div>
                    {errors?.confirmPassword && (
                      <p style={{ color: "red" }}>
                        {errors?.confirmPassword?.message}
                      </p>
                    )}
                    <br />

                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email Address"
                          className={styles.formControlWithIcon}>
                          <Form.Control
                            type="email"
                            value={value}
                            onChange={onChange}
                            placeholder="Email Address"
                          />
                        </FloatingLabel>
                      )}
                      defaultValue={""}
                    />

                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors?.email?.message}</p>
                    )}
                    <br />

                    <Controller
                      name="phoneNumber"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Mobile Number"
                          className={styles.formControlWithIcon}>
                          <Form.Control
                            type="tel"
                            value={value}
                            onChange={onChange}
                            placeholder="Mobile Number"
                          />
                        </FloatingLabel>
                      )}
                      defaultValue={""}
                    />

                    {errors?.phoneNumber && (
                      <p style={{ color: "red" }}>
                        {errors?.phoneNumber?.message}
                      </p>
                    )}
                    <br />
                    <div id={styles.registerAccount}>
                      <Controller
                        name="roleName"
                        control={control}
                        render={({ field }) => (
                          <Form.Select style={{ cursor: "pointer" }} {...field}>
                            <option disabled value="">
                              Account Type
                            </option>
                            {AccountTypes.map((accountType) => (
                              <option
                                key={accountType.value}
                                value={accountType.value}>
                                {accountType.label}
                              </option>
                            ))}
                          </Form.Select>
                        )}
                        defaultValue=""
                      />
                    </div>
                    {errors?.roleName && (
                      <p style={{ color: "red" }}>
                        {errors?.roleName?.message}
                      </p>
                    )}
                    <br />
                    <div className={styles.formPrivacyPolicies}>
                      <Form.Check type="switch" id="custom-switch" />

                      <p>I agree to the privacy policy</p>
                    </div>

                    <div className={styles.loginFormBtn}>
                      <button type="submit">Create Account</button>
                    </div>
                  </form>
                  <div className={styles.formFooter}>
                    <p>
                      Already have an account?{" "}
                      <button>
                        {" "}
                        <Link to="/login">Sign In</Link>
                      </button>
                    </p>
                  </div>
                </section>
              </div>
              <section className={styles.loginDisplayflexImage}>
                <h2>Benifits to Join SmartLearner</h2>

                <div className={styles.registerBenefitsfeature}>
                  <div className={styles.registerBenefitsfeatureicon}>🎓</div>
                  <div className={styles.registerBenefitsfeaturecontent}>
                    <h3 className={styles.registerBenefitsfeaturetitle}>
                      Practice multiple choice and hazard perception tests
                    </h3>
                    <p className={styles.registerBenefitsfeaturedescription}>
                      Theory Test Pro has everything you need to pass first
                      time. You can practice multiple choice questions by topic,
                      hazard perception tests with feedback, or alternatively
                      revise the highway code. When you're ready, you can put
                      all of this together and see how you fare with our mock
                      test.
                    </p>
                  </div>
                </div>

                <div className={styles.registerBenefitsfeature}>
                  <div className={styles.registerBenefitsfeatureicon}>⭐</div>
                  <div className={styles.registerBenefitsfeaturecontent}>
                    <h3 className={styles.registerBenefitsfeaturetitle}>
                      82% of our students pass first time (UK average is 41%)
                    </h3>
                    <p className={styles.registerBenefitsfeaturedescription}>
                      We've gotten some great feedback about Theory Test Pro
                      over the years. Last year we decided to find out exactly
                      how good our students performed vs. the UK average pass
                      rate - see the results here.
                    </p>
                  </div>
                </div>

                <div className={styles.registerBenefitsfeature}>
                  <div className={styles.registerBenefitsfeatureicon}>📄</div>
                  <div className={styles.registerBenefitsfeaturecontent}>
                    <h3 className={styles.registerBenefitsfeaturetitle}>
                      Official, up-to-date question bank directly from the DVSA
                    </h3>
                    <p className={styles.registerBenefitsfeaturedescription}>
                      Don't settle for cheap books or CDs from unofficial
                      vendors - Theory Test Pro uses official content directly
                      from the DVSA. We update our question bank automatically
                      whenever the DVSA issues a new set of questions, too.
                    </p>
                  </div>
                </div>

                <div className={styles.registerBenefitsfeature}>
                  <div className={styles.registerBenefitsfeatureicon}>💻</div>
                  <div className={styles.registerBenefitsfeaturecontent}>
                    <h3 className={styles.registerBenefitsfeaturetitle}>
                      Easy to use online interface, no software required
                    </h3>
                    <p className={styles.registerBenefitsfeaturedescription}>
                      Access Theory Test Pro from anywhere with an internet
                      connection, PC or phone, no software required. Forget
                      about unusable software, too - we're constantly talking to
                      our users to make sure that our product is as easy to use
                      as possible.
                    </p>
                  </div>
                </div>
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
