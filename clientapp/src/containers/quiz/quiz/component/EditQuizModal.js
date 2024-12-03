import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { quizCategorySchema } from "../../../../schemas/quizCategory/index";
import {
  createQuizCategory,
  getQuizCategoryModuleById,
} from "../../../../redux/features/quizCategorySlice";

import { Controller, useForm } from "react-hook-form";
import { createQuiz, editQuiz } from "../../../../redux/features/quizSlice";

const EditQuizUpdatedModal = (props) => {
  const dispatch = useDispatch();
  const oneproduct = useSelector((state) => state.quiz.quiz);

  const [formData, setFormData] = useState({
    description: oneproduct?.description || "",
  });

  const [optionsData, setoptionsData] = useState({
    "optionone": oneproduct?.option ? oneproduct.option[0] : "",
        "optiontwo": oneproduct?.option ? oneproduct.option[1] : "",
        "optionthree": oneproduct?.option ? oneproduct.option[2] : "",
        "optionfour": oneproduct?.option ? oneproduct.option[3] : "",
        "answer": ""
  });
  const { quizCategoriesList, quizCategoryModule } = useSelector((state) => {
    return state.quizCategory;
  });
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
    setValue,
  } = useForm({
    // resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    let final_data = {};
    final_data["option"] = [
      optionsData.optionone,
      optionsData.optiontwo,
      optionsData.optionthree,
      optionsData.optionfour,
    ];
    const { answer, category, description, question, module } = data;

    const formDataToSend = new FormData();
    formDataToSend.append("answer", answer);
    formDataToSend.append("description", description);
    formDataToSend.append("category", category);
    formDataToSend.append("question", question);
    formDataToSend.append("option", final_data.option.join(","));

    dispatch(
      editQuiz(
        oneproduct.uId,
        formDataToSend,
        reset,
        props.toggleEditQuizCategoryModal,
        props.state
      )
    );
  };

  useEffect(() => {
    if (oneproduct) {
      setoptionsData({
       "optionone": oneproduct?.option ? oneproduct.option[0] : "",
                "optiontwo": oneproduct?.option ? oneproduct.option[1] : "",
                "optionthree": oneproduct?.option ? oneproduct.option[2] : "",
                "optionfour": oneproduct?.option ? oneproduct.option[3] : "",
                "answer": oneproduct?.answer || ""
      });

      dispatch(getQuizCategoryModuleById(oneproduct.category));

      reset({
        question: oneproduct ? oneproduct.question : "",
                answer: oneproduct ? oneproduct.answer : "",
                description: oneproduct ? oneproduct.description : "",
                category: oneproduct ? oneproduct.category : "",
                module: oneproduct ? oneproduct.module : "",
      });
    }
  }, [oneproduct, setValue, reset]);

  return (
    <>
      <Modal
        isOpen={props.showEditQuizCategoryModal}
        toggle={props.toggleEditQuizCategoryModal}
      >
        <ModalHeader toggle={props.toggleEditQuizCategoryModal}>
          Edit Quiz
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
                    className={`form-control  ${
                      errors?.question ? "error-input" : ""
                    }`}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
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
                    className={`form-control  ${
                      errors?.optionone ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optionone}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optionone: e.target.value,
                        };
                      });
                      onChange();
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
                    className={`form-control  ${
                      errors?.name ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optiontwo}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optiontwo: e.target.value,
                        };
                      });
                      onChange();
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
                    className={`form-control  ${
                      errors?.optionthree ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optionthree}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optionthree: e.target.value,
                        };
                      });
                      onChange();
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
                    className={`form-control  ${
                      errors?.optionfour ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optionfour}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optionfour: e.target.value,
                        };
                      });
                      onChange();
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
                                const selectedAnswer = e.target.value;
                                setValue("answer", selectedAnswer); // Update the form's "answer" value
                                setoptionsData((prev) => ({
                                    ...prev,
                                    answer: selectedAnswer, // Update local state for options
                                }));
                            }}
                            className={`form-control ${errors.answer ? "error-input" : ""}`}
                            value={optionsData.answer || ""}
                        >
                            <option disabled value="">
                                Select...
                            </option>
                            <option value="Option1">{optionsData.optionone}</option>
                            <option value="Option2">{optionsData.optiontwo}</option>
                            <option value="Option3">{optionsData.optionthree}</option>
                            <option value="Option4">{optionsData.optionfour}</option>
                        </select>

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
                    className={`form-control ${
                      errors.roleName ? "error-input" : ""
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
              <label>Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${
                      errors?.name ? "error-input" : ""
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
  );
};

export default EditQuizUpdatedModal;
