import React, { useEffect } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createRoleSchema } from '../../../schemas/account';
import { editRole } from '../../../redux/features/roleSlice';
import Loader from '../../../components/loader/Loader';

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
        dispatch(editRole(role._id, formData, props.toggleEditRoleModal));
    };
    useEffect(() => {
        console.log(role);
    }, [])

    return (
        <>
            {!roleLoading ? (
                <Modal
                    isOpen={props.editRoleModalOpen}
                    toggle={() => props.toggleEditRoleModal()}>
                    <ModalHeader
                        toggle={() => props.toggleEditRoleModal()}>
                        Update Role
                    </ModalHeader>
                    <ModalBody>
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
                                            defaultValue={role?.name}
                                        />
                                    )}
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
                    </ModalBody>
                </Modal >
            ) : ""
            }
        </>
    )
}

export default EditRoleModal;
