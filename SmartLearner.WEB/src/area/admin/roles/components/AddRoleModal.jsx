import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRoleSchema } from "../../../../formSchemas";
import { createRole } from "../../../../features/rolesSlice";

function AddRoleModal(props) {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createRoleSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data?.name);
    dispatch(createRole(formData, reset, props.toggleAddRoleModal));
  };

  return (
    <>
      <Modal
        isOpen={props.addRoleModalOpen}
        toggle={() => props.toggleAddRoleModal()}>
        <ModalHeader toggle={() => props.toggleAddRoleModal()}>
          Create Role
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Role Name</label>
              <Controller
                name="name"
                control={control}
                defaultValue=" "
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control ${
                      errors?.name ? "error-input" : ""
                    }`}
                    type="text"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                  />
                )}
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group text-center mt-3">
              <button
                className="btn btn-primary account-btn btn-lg"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default AddRoleModal;
