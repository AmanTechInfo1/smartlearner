// import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { callBackFormSchema } from "../../schemas/master";
import { enquiryData } from "../../redux/features/enquirySlice";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

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
    data.formType = "callbackForm";
    
    dispatch(enquiryData({ requestData: data, reset }));
  };

  return (
    <div className="callBackform">
      <div className="callBackform-Header"><h2>REQUEST A CALLBACK </h2><iframe src="https://lottie.host/embed/2eb66eb3-7d7a-4d53-9875-0dca3cc365a8/xGl8NXpytQ.lottie" width='100' height="100"></iframe></div>
      
      <form onSubmit={handleSubmit(handleCallBackForm)}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FloatingLabel
              controlId="floatingInput"
              label="Enter Full Name"
            >
              <Form.Control
               
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Enter Full Name"
              />
               </FloatingLabel>
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
              <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
            >
               <Form.Control
                id="email"
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
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>

          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FloatingLabel
              controlId="floatingInput"
              label="Mobile Number"
            >
               <Form.Control
                id="contactNumber"
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
            <p style={{ color: "red" }}>{errors?.phoneNumber?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Regarding:</label>

          <Controller
            name="message"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FloatingLabel
              controlId="floatingInput"
              label="Message"
            >
               <Form.Control
                 as="textarea"
                value={value}
                onChange={onChange}
                placeholder="Message"
                style={{ height: '100px' }}
                required
              />
              
              </FloatingLabel>
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
