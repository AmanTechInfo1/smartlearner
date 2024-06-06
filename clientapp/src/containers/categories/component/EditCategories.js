import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../../redux/features/categorySlice';
import { categorySchema } from '../../../schemas/category/index';

function EditCategories(props) {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(categorySchema),
    });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("description", data?.description);
        dispatch(updateCategory(props?.categoryObj?._id, formData, reset, props.toggleEditCategoryModal));
    };

    return (
        <>
            <Modal
                isOpen={props.showEditCategoryModal}
                toggle={() => props.toggleEditCategoryModal()}>
                <ModalHeader
                    toggle={() => props.toggleEditCategoryModal()}>
                    Update Category
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Category Name</label>
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
                                defaultValue={props?.categoryObj?.name}
                            />
                            {errors?.name?.message ? <p style={{ color: "red" }}>{errors?.name?.message}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <Controller
                                name="description"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.description ? "error-input" : ""}`}
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={props?.categoryObj?.description}
                            />
                            {errors?.description?.message ? <p style={{ color: "red" }}>{errors?.description?.message}</p> : ""}
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
            </Modal>
        </>
    )
}

export default EditCategories;