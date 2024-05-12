import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editRole } from '../../../../features/rolesSlice';
import { createRoleSchema } from '../../../../formSchemas/account';

function EditRoleModal(props) {
    const dispatch = useDispatch();
    const { roleLoading, role } = useSelector((state) => state.roles);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(createRoleSchema),
  });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data?.name);
        dispatch(editRole(formData, reset, props.toggleAddRoleModal));
    };

    return (
        <>
            <Modal
                isOpen={props.editRoleModalOpen}
                toggle={() => props.toggleEditRoleModal()}>
                <ModalHeader
                    toggle={() => props.toggleEditRoleModal()}>
                    Update Role
                </ModalHeader>
                <ModalBody>
                    {!roleLoading ? (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label>Role Name</label>
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input
                                                className={`form-control  ${errors?.name ? "error-input" : ""}`}
                                                type="text"
                                                value={value}
                                                onChange={onChange}
                                                autoComplete="false"
                                            />
                                        )}
                                        defaultValue={role?.name}
                                    />
                                    {errors?.name?.message ? <p style={{ color: "red" }}>{errors?.name?.message}</p> : ""}
                                </div>
                                <div className="form-group text-center mt-3">
                                    <button
                                        className="btn btn-primary account-btn btn-lg"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        "Loading"
                    )}
                </ModalBody>
            </Modal>
        </>
    )
}

export default EditRoleModal;
