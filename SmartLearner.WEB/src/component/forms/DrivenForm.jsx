import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { drivenFormData } from "../../features/drivenformSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { drivenBeforeFormSchema } from "../../formSchemas";

export default function DrivenForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(drivenBeforeFormSchema),
  });

  const handleDrivenBeforeForm = async (data) => {
    const formData = new FormData();

    formData.append("drivenBefore", data.drivenBefore);
    formData.append("preferredType", data.preferredType);
    formData.append("postcode", data.postcode);

    dispatch(drivenFormData({ requestData: data, reset }));
  };

  return (
    <section className="driverSection">
      <div className="innerFormSection">
        <div className="search-Form">
          <form
            onSubmit={handleSubmit(handleDrivenBeforeForm)}
            id="locationForm">
            <div className="infoDetails">
              <div className="redio-box">
                <h3>Have you driven before?</h3>
                <Controller
                  name="drivenBefore"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="yes"
                          checked={field.value === "yes"}
                          onChange={() => field.onChange("yes")}
                          required
                        />
                        <span className="checkmark"></span>
                        Yes
                      </label>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="no"
                          checked={field.value === "no"}
                          onChange={() => field.onChange("no")}
                          required
                        />
                        <span className="checkmark"></span>
                        No
                      </label>
                    </>
                  )}
                />
              </div>
              <div className="redio-box">
                <h3>What do you prefer?</h3>
                <Controller
                  name="preferredType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="manual"
                          checked={field.value === "manual"}
                          onChange={() => field.onChange("manual")}
                          required
                        />
                        <span className="checkmark"></span>
                        Manual
                      </label>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="auto"
                          checked={field.value === "auto"}
                          onChange={() => field.onChange("auto")}
                          required
                        />
                        <span className="checkmark"></span>
                        Auto
                      </label>
                    </>
                  )}
                />
              </div>
            </div>
            <div className="submitFleid">
              <p>
                <FaLocationDot />
              </p>
              <Controller
                name="location"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="ENTER POSTCODE PREFIX E.G. CV6"
                    className="your-class"
                    required
                  />
                )}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
