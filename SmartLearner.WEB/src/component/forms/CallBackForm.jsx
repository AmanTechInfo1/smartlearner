// import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { servicesData } from "../../features/servicesSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { callBackFormSchema } from "../../formSchemas";


export default function CallBackForm() {


  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(callBackFormSchema),
  });
  const handleCallBackForm = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("message", data.message);

    dispatch(servicesData({ requestData: data, reset }));
  };

  return (
    <div className="callBackform">
      <h2>REQUEST A CALLBACK</h2>
      <form onSubmit={handleSubmit(handleCallBackForm)}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <input
                id="name"
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
        <div>
          <label htmlFor="email">Email Address:</label>

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
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>

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
        <div>
          <label htmlFor="message">Regarding:</label>

          <Controller
            name="message"
            control={control}
            render={({ field: { value, onChange } }) => (
              <textarea
                id="message"
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
        <button id="btn" type="submit">
          SEND CALLBACK REQUEST
        </button>
      </form>
    </div>
  );
}
