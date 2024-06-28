import React, { useState,useEffect } from "react";
import styles from ".././css/LoginRegister.module.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../redux/features/authSlice";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { loginformSchema } from "../../schemas/account/index";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginformSchema),
  });

  const handleLogin = async (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    dispatch(loginUser({ loginData: data, navigate }));
  };



  // ////////////////////////////////////
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
              <h1>Welcome</h1>
              <p>Please sign in to your account using the form below.</p>
            </div>
            <div className={styles.loginformContainer}>
              <section className={styles.loginRegistration}>
                <h2>Forgot</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                      defaultValue={""}
                    />
                  </label>
                  {errors?.email && (
                    <p style={{ color: "red" }}>{errors?.email?.message}</p>
                  )}
                  <br />
                  
                   
               
                 
                  <div className={styles.loginFormBtn}>
                    <button type="submit">Forgot</button>
                  </div>
                  <br />
                </form>
              </section>
              <div className={styles.formFooter}>
                <p>
                 
                  <button>
                    {" "}
                    <Link to="/login">Login</Link>
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
