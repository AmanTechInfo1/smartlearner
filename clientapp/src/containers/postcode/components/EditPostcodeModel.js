import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { updatePostcode } from '../../../redux/features/postcodeSlice';
import { postcodeSchema } from '../../../schemas/postcode/index';


function EditPostcodeModel(props) {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(postcodeSchema),
    });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("postcode", data?.postcode);
        formData.append("city", data?.city);
        formData.append("country", data?.country);
        dispatch(updatePostcode(props?.postcodeObj?._id, formData, reset, props.toggleEditPostcodeModal));
    };

    return (
        <>
            <Modal
                isOpen={props.showEditPostcodeModal}
                toggle={() => props.toggleEditPostcodeModal()}>
                <ModalHeader
                    toggle={() => props.toggleEditPostcodeModal()}>
                    Update Postcode
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Postcode</label>
                            <Controller
                                name="postcode"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.postcode ? "error-input" : ""}`}
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={props?.postcodeObj?.postcode}
                            />
                            {errors?.postcode?.message ? <p style={{ color: "red" }}>{errors?.postcode?.message}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.city ? "error-input" : ""}`}
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={props?.postcodeObj?.city}
                            />
                            {errors?.city?.message ? <p style={{ color: "red" }}>{errors?.city?.message}</p> : ""}
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <Controller
                                name="country"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.country ? "error-input" : ""}`}
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={props?.postcodeObj?.country}
                            />
                            {errors?.country?.message ? <p style={{ color: "red" }}>{errors?.country?.message}</p> : ""}
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

export default EditPostcodeModel