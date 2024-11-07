import React, { useState, useEffect } from "react";
import styles from ".././css/LoginRegister.module.css";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword } from "../../redux/features/authSlice";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { forgotPassword } from "../../schemas/account/index";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [webLoading, setwebLoading] = useState(true);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPassword),
    defaultValues: {
      email: "", 
    },
  });

  const handleForgotPassword = async (data) => {
    console.log("Form submitted with data:", data);
    dispatch(resetPassword(data.email, navigate));
  };
  
  

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
              <h1>Forgot Password</h1>
              <p>Please enter your email</p>
            </div>
            <div className={styles.loginformContainer}>
              <section className={styles.loginRegistration}>
                <h2>Forgot</h2>
                <form onSubmit={handleSubmit(handleForgotPassword)}>
                  <label>
                    <FaUser id={styles.loginFormsIcons} />
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
                    />
                  </label>
                  {errors?.email && (
                    <p style={{ color: "red" }}>{errors?.email?.message}</p>
                  )}
<br/>
                  <div className={styles.loginFormBtn}>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </section>
              <div className={styles.formFooter}>
                <p>
                  <button>
                    <Link to="/login">Back to Login</Link>
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
