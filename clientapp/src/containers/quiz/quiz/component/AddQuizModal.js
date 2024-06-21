import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { quizCategorySchema } from "../../../../schemas/quizCategory/index";
import { createQuizCategory, getQuizCategoryModuleById } from '../../../../redux/features/quizCategorySlice';

import { Controller, useForm } from "react-hook-form";
import { createQuiz } from '../../../../redux/features/quizSlice';

const AddQuizUpdatedModal = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });


    const [optionsData, setoptionsData] = useState({
        "optionone": "",
        "optiontwo": "",
        "optionthree": "",
        "optionfour": ""
    });






    const { quizCategoriesList,quizCategoryModule } = useSelector((state) => { return state.quizCategory })
    // const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        // resolver: yupResolver(productSchema),
    });

    // const validateForm = async () => {
    //     try {
    //         await quizCategorySchema.validate(formData, { abortEarly: false });
    //         setErrors({});
    //         return true;
    //     } catch (validationErrors) {
    //         const newErrors = {};
    //         validationErrors.inner.forEach((error) => {
    //             newErrors[error.path] = error.message;
    //         });
    //         setErrors(newErrors);
    //         return false;
    //     }
    // };

    const getListAllCategoryById = (id) => {
        setValue("category",id)
        dispatch(getQuizCategoryModuleById(id));
    };
    console.log(errors, "errorserrorserrorserrors")
    const onSubmit = async (data) => {

        console.log(data, "datadatadata")

        let final_data = {}
        final_data["option"] = [
            optionsData.optionone,
            optionsData.optiontwo,
            optionsData.optionthree,
            optionsData.optionfour,
        ]

        // 

        const { answer, category, description, question, module } = data


        const formDataToSend = new FormData();
        formDataToSend.append('answer', answer);
        formDataToSend.append('description', description);
     
        formDataToSend.append('category', category);
        formDataToSend.append('question', question);
        formDataToSend.append('module', module);
        formDataToSend.append('option', final_data.option.join(","));
        // final_data={
        //     ...final_data,
        //     answer,
        //     category,
        //     description,
        //     question
        // }
        // console.log(final_data,"final_datafinal_datafinal_datafinal_data")

        // // const isValid = await validateForm();
        // // if (isValid) {
        // setLoading(true);

        dispatch(createQuiz(formDataToSend, reset, props.toggleAddQuizCategoryModal, props.state));
        // setLoading(false);
        // // }
    };

    return (
        <>
            <Modal
                isOpen={props.showAddQuizCategoryModal}
                toggle={props.toggleAddQuizCategoryModal}>
                <ModalHeader
                    toggle={props.toggleAddQuizCategoryModal}>
                    Add Quiz
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Question</label>
                            <Controller
                                name="question"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.question ? "error-input" : ""
                                            }`}
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.question?.message ? (
                                <p style={{ color: "red" }}>{errors?.question?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Option 1</label>
                            <Controller
                                name="optionone"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.optionone ? "error-input" : ""
                                            }`}
                                        type="text"
                                        value={optionsData.optionone}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optionone: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optionone?.message ? (
                                <p style={{ color: "red" }}>{errors?.optionone?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Option 2</label>
                            <Controller
                                name="optiontwo"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.name ? "error-input" : ""
                                            }`}
                                        type="text"

                                        value={optionsData.optiontwo}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optiontwo: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optiontwo?.message ? (
                                <p style={{ color: "red" }}>{errors?.optiontwo?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Option 3</label>
                            <Controller
                                name="optionthree"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.optionthree ? "error-input" : ""
                                            }`}
                                        type="text"
                                        value={optionsData.optionthree}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optionthree: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optionthree?.message ? (
                                <p style={{ color: "red" }}>{errors?.optionthree?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Option 4</label>
                            <Controller
                                name="optionfour"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.optionfour ? "error-input" : ""
                                            }`}
                                        type="text"

                                        value={optionsData.optionfour}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optionfour: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optionfour?.message ? (
                                <p style={{ color: "red" }}>{errors?.optionfour?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className="form-group">
                            <label>Answer</label>
                            <select

                                onChange={(e) => {
                                    setValue("answer", e.target.value)
                                }}
                                className={`form-control ${errors.roleName ? "error-input" : ""
                                    }`}
                            >
                                <option disabled value="">
                                    Select...
                                </option>
                                {console.log(Object.entries(optionsData).map((category) => { return category[1] }), "Object.entries(optionsData)")}
                                {Object.entries(optionsData).map((option, index) => (
                                    <option key={index} value={option[1]}>
                                        {option[1]}
                                    </option>
                                ))}
                            </select><p style={{color:'red'}}>please select answer </p>

                            {errors?.answer?.message ? (
                                <p style={{ color: "red" }}>{errors?.answer?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>



                        <div className="form-group">
                            <label>Category</label>
                            <Controller
                                name="category"
                                control={control}
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        onChange={(e)=>{
                                            getListAllCategoryById(e.target.value)
                                        }}
                                        className={`form-control ${errors.roleName ? "error-input" : ""
                                            }`}
                                    >
                                        <option disabled value="">
                                            Select...
                                        </option>
                                        {quizCategoriesList.map((category) => (
                                            <option key={category._id} value={category._id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                defaultValue=""
                            />

                            {errors?.name?.message ? (
                                <p style={{ color: "red" }}>{errors?.name?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className="form-group">
                            <label>Module</label>
                            <Controller
                                name="module"
                                control={control}
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        className={`form-control ${errors.roleName ? "error-input" : ""
                                            }`}
                                    >
                                        <option disabled value="">
                                            Select...
                                        </option>
                                        {quizCategoryModule.map((category) => (
                                            <option key={category.uId} value={category.uId}>
                                                {category.moduleName}                                                                                                                                           
                                            </option>
                                        ))}
                                    </select>
                                )}
                                defaultValue=""
                            />

                            {errors?.name?.message ? (
                                <p style={{ color: "red" }}>{errors?.name?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <Controller
                                name="description"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.name ? "error-input" : ""
                                            }`}
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.description?.message ? (
                                <p style={{ color: "red" }}>{errors?.description?.message}</p>
                            ) : (
                                ""
                            )}
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
};

export default AddQuizUpdatedModal;
