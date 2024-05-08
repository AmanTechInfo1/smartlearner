import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { enquiryData } from "../../features/enquirySlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquiryFormSchema } from "../../formSchemas/enquiryForm/enquiryFormSchema";

export default function EnquiryForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(enquiryFormSchema),
  });
  const handleEnquiryForm = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("message", data.message);

    dispatch(enquiryData({ requestData: data, reset }));
  };
  return (
    <div>
      <section className={styles.formContainer}>
        <section className={styles.innerFormSection}>
          <div className={styles.enquiryForm}>
            <h4>Enquiry Form</h4>
            <form onSubmit={handleSubmit(handleEnquiryForm)}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">
                  Full Name<span>*</span>
                </label>

                <Controller
                  name="name"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <input
                      id="fullName"
                      type="text"
                      value={value}
                      onChange={onChange}
                      placeholder="Enter Full Name"
                    />
                  )}
                  defaultValue={""}
                />
                {errors?.name && (
                  <p style={{ color: "red" }}>{errors?.name?.message}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>

                <Controller
                  name="email"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <input
                      id="email"
                      type="email"
                      value={value}
                      onChange={onChange}
                      placeholder="Email Address"
                    />
                  )}
                  defaultValue={""}
                />
                {errors?.email && (
                  <p style={{ color: "red" }}>{errors?.email?.message}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactNumber">
                  Contact Number<span>*</span>
                </label>

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <input
                      id="contactNumber"
                      type="tel"
                      value={value}
                      onChange={onChange}
                      placeholder="Mobile Number"
                    />
                  )}
                  defaultValue={""}
                />
                {errors?.phoneNumber && (
                  <p style={{ color: "red" }}>{errors?.phoneNumber?.message}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="additionalInfo">
                  Additional Information<span>*</span>
                </label>

                <Controller
                  name="message"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <textarea
                      id={styles.additionalInfo}
                      type="message"
                      value={value}
                      onChange={onChange}
                      placeholder="Message"
                      required
                    />
                  )}
                  defaultValue={""}
                />
                {errors?.message && (
                  <p style={{ color: "red" }}>{errors?.message?.message}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <ReCAPTCHA
                  id="recaptcha"
                  sitekey="your_site_key" // Replace 'your_site_key' with your actual reCAPTCHA site key
                />
              </div>
              <div className={styles.formBtn}>
                <button type="submit" id={styles.formBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
