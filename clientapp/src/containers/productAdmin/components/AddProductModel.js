import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { productSchema } from "../../../schemas/product/index";
import { createProductSuccess } from "../../../redux/features/productSlice";
import ReactSelect from "react-select";

function AddProductModel(props) {
  const dispatch = useDispatch();

  const {  areasList } = useSelector((state) => {

    
    return state.area
});
const {categoriesList} = useSelector((state)=>{ return state.category})


  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
  });

console.log(errors,"ajwsdfhxsdfgrt")

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("category",data?.category)
    formData.append("description", data?.description);
    formData.append("image", data?.image[0]);
    formData.append("price", data?.price);
    formData.append("transmission", data?.transmission);
    formData.append("experience", data?.experience);
    formData.append("postcode", data?.postcode);
    formData.append("areaIncluded", data?.areaIncluded);
    formData.append("rating", data?.rating);
    dispatch(
      createProductSuccess(formData, reset, props.toggleAddProductModal)
    );
  };

  return (
    <>
      <Modal
        isOpen={props.showAddProductModalOpen}
        toggle={() => props.toggleAddProductModal()}
      >
        <ModalHeader toggle={() => props.toggleAddProductModal()}>
          Create Product
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Product Name</label>
              <Controller
                name="name"
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
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
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
                    {categoriesList.map((category) => (
                      <option key={category._id} value={category.name}>
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
                      errors?.description ? "error-input" : ""
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
            <div className="form-group">
              <label>Upload Image</label>
              <Controller
                name="image"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    className={`form-control ${
                      errors?.image ? "error-input" : ""
                    }`}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                )}
                defaultValue={""}
              />

              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Price</label>
              <Controller
                name="price"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${
                      errors?.name ? "error-input" : ""
                    }`}
                    type="number"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                    placeholder="$"
                  />
                )}
                defaultValue={""}
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Transmissions</label>
              <Controller
                name="transmission"
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
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
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
              <label>Experience</label>
              <Controller
                name="transmission"
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
                    <option value="automatic">Beginner</option>
                    <option value="manual">Experience</option>
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
              <label>Postcode</label>
              <Controller
                name="postcode"
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
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>AreaIncluded</label>
              <Controller
                name="areaIncluded"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`form-control ${
                      errors.areaName ? "error-input" : ""
                    }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    {areasList.map((area) => (
                      <option key={area._id} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                )}
                defaultValue={""}
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Rating</label>
              <Controller
                name="rating"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${
                      errors?.name ? "error-input" : ""
                    }`}
                    type="number"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
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
}

export default AddProductModel;
