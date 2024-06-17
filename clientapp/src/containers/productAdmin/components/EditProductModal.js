import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { productSchema } from "../../../schemas/product/index";
import { createProductSuccess, editProduct } from "../../../redux/features/productSlice";
import ReactSelect from "react-select";

function EditProductModal(props) {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const oneproduct = useSelector((state) => state.product.oneproduct);
  const { categoriesList } = useSelector((state) => { return state.category })
  const { postcodesList } = useSelector((state) => { return state.postcode })
  const { areasList } = useSelector((state) => {
    return state.area
  });
  const [formData, setFormData] = useState({
    name: oneproduct ? oneproduct.name : "",
    category: oneproduct ? oneproduct.category : "",
    description: oneproduct ? oneproduct.description : "",
    duration: oneproduct ? oneproduct.duration : "",
    price: oneproduct ? oneproduct.price : "",
    transmission: oneproduct ? oneproduct.transmission : "",
    experience: oneproduct ? oneproduct.experience : "",
    postcode: oneproduct ? oneproduct.postcode : "",
    areaIncluded: oneproduct ? oneproduct.areaIncluded : "",
    rating: oneproduct ? oneproduct.rating : "",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    const newformData = new FormData();
    newformData.append("name", formData?.name);
    newformData.append("description", formData?.description);
    newformData.append("duration", formData?.duration);
    if(image){
      newformData.append("image", image);

    }
    newformData.append("price", formData?.price);
    newformData.append("transmission", formData?.transmission);
    newformData.append("experience", formData?.experience);
    newformData.append("postcode", formData?.postcode);
    newformData.append("areaIncluded", formData?.areaIncluded);
    newformData.append("rating", formData?.rating);
    dispatch(
      editProduct(oneproduct._id,newformData, reset, props.toggleEditProductModal,props.state)
    );
  };


  console.log(errors, "errorserrorserrors")


  useEffect(() => {
    if (oneproduct) {
      setFormData({
        name: oneproduct ? oneproduct.name : "",
        description: oneproduct ? oneproduct.description : "",
        duration: oneproduct ? oneproduct.duration : "",
        price: oneproduct ? oneproduct.price : "",
        transmission: oneproduct ? oneproduct.transmission : "",
        experience: oneproduct ? oneproduct.experience : "",
        postcode: oneproduct ? oneproduct.postcode : "",
        areaIncluded: oneproduct ? oneproduct.areaIncluded : "",
        rating: oneproduct ? oneproduct.rating : "",
        category: oneproduct ? oneproduct.category : "",
      });

      reset({
        name: oneproduct ? oneproduct.name : "",
        description: oneproduct ? oneproduct.description : "",
        duration: oneproduct ? oneproduct.duration : "",
        price: oneproduct ? oneproduct.price : "",
        transmission: oneproduct ? oneproduct.transmission : "",
        experience: oneproduct ? oneproduct.experience : "",
        postcode: oneproduct ? oneproduct.postcode : "",
        areaIncluded: oneproduct ? oneproduct.areaIncluded : "",
        rating: oneproduct ? oneproduct.rating : "",
        category: oneproduct ? oneproduct.category : "",
      })
    }
  }, [oneproduct]);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    console.log(e.target.name, e.target, "e.targete.target")
    setFormData({
      ...formData,
      [name]: value,
    });

  };


  console.log(errors, "Dasasdasddasda")


  return (
    <>
      <Modal
        isOpen={props.showEditProductModalOpen}
        toggle={() => props.toggleEditProductModal()}
      >
        <ModalHeader toggle={() => props.toggleEditProductModal()}>
          Edit Product
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
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    {...field}
                    className={`form-control ${errors.roleName ? "error-input" : ""
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

              {errors?.category?.message ? (
                <p style={{ color: "red" }}>{errors?.category?.message}</p>
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
                    className={`form-control  ${errors?.description ? "error-input" : ""
                      }`}
                    type="text"
                    value={formData.description}
                    onChange={handleInputChange}
                    name="description"
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
              <label>Duration (in Weeks)</label>
              <Controller
                name="duration"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.duration ? "error-input" : ""
                      }`}
                    type="number"
                    value={formData.duration}
                    onChange={handleInputChange}
                    name="duration"
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.duration?.message ? (
                <p style={{ color: "red" }}>{errors?.duration?.message}</p>
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
                    className={`form-control ${errors?.image ? "error-input" : ""
                      }`}
                    type="file"
                    name="image"
                    onChange={(e) => {
                      const file = e.target.files;
                      setImage(file[0])
                      console.log(file, "filefilefilefilefilefile")
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                )}
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
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="number"
                    name="price"

                    value={formData.price}
                    onChange={handleInputChange}
                    autoComplete="false"
                    placeholder="$"
                  />
                )}
                defaultValue={""}
              />
              {errors?.price?.message ? (
                <p style={{ color: "red" }}>{errors?.price?.message}</p>
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
                    name="transmission"
                    {...field}
                    value={formData.transmission}
                    onChange={handleInputChange}
                    className={`form-control ${errors.roleName ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                )}
                defaultValue=""
              />

              {errors?.transmission?.message ? (
                <p style={{ color: "red" }}>{errors?.transmission?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label>Experience</label>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    {...field}
                    className={`form-control ${errors.roleName ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Experience">Experience</option>
                  </select>
                )}
                defaultValue=""
              />
              {errors?.experience?.message ? (
                <p style={{ color: "red" }}>{errors?.experience?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label>Postcode</label>
              <Controller
                name="postcode"
                control={control}
                render={({ field }) => (
                  <select
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    className={`form-control ${errors.roleName ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    {postcodesList.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.postcode}
                      </option>
                    ))}
                  </select>
                )}
                defaultValue=""
              />

              {errors?.postcode?.message ? (
                <p style={{ color: "red" }}>{errors?.postcode?.message}</p>
              ) : (
                ""
              )}
            </div>
            {/* 
            <div className="form-group">
              <label>Postcode</label>
              <Controller
                name="postcode"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    value={formData.postcode}
                    onChange={handleInputChange}
                    name="postcode"
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="text"
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.postcode?.message ? (
                <p style={{ color: "red" }}>{errors?.postcode?.message}</p>
              ) : (
                ""
              )}
            </div> */}



            <div className="form-group">
              <label>AreaIncluded</label>
              {/* <Controller
                name="areaIncluded"
                control={control}
                render={({ field }) => (
                  <select
                    name="areaIncluded"
                    value={formData.areaIncluded}
                    onChange={handleInputChange}
                    className={`form-control ${errors.areaIncluded ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    {areasList.map((area) => (
                      <option key={area._id} value={area._id}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                )}
                defaultValue={""}
              /> */}
              <Controller
                name="areaIncluded"
                control={control}
                render={({ field }) => (
                  <select
                    name="areaIncluded"
                    value={formData.areaIncluded}
                    onChange={handleInputChange}
                    className={`form-control ${errors.areaIncluded ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    {areasList.map((area) => (
                      <option key={area._id} value={area._id}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                )}
                defaultValue=""
              />
              {errors?.areaIncluded?.message ? (
                <p style={{ color: "red" }}>{errors?.areaIncluded?.message}</p>
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
                    name="rating"
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="number"
                    value={formData.rating}
                    onChange={handleInputChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.rating?.message ? (
                <p style={{ color: "red" }}>{errors?.rating?.message}</p>
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

  return (
    <>
      <Modal
        isOpen={props.showEditProductModalOpen}
        toggle={() => props.toggleEditProductModal()}>
        <ModalHeader
          toggle={() => props.toggleEditProductModal()}>
          Edit Product
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
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
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
              <label>Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.description ? "error-input" : ""
                      }`}
                    type="text"
                    defaultValue={formData.description}
                    onChange={handleInputChange}
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
                    className={`form-control ${errors?.image ? "error-input" : ""
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

              {errors?.image?.message ? (
                <p style={{ color: "red" }}>{errors?.image?.message}</p>
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
                    className={`form-control  ${errors?.price ? "error-input" : ""
                      }`}
                    type="number"
                    defaultValue={formData.price}
                    onChange={handleInputChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.price?.message ? (
                <p style={{ color: "red" }}>{errors?.price?.message}</p>
              ) : (
                ""
              )}
            </div>
            {/* <div className="form-group">
              <label>Transmissions</label>
              <Controller
                name="transmission"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="text"
                    value={formData.transmission}
                    onChange={onChange}
                    autoComplete="false"
                  />
                  //   <ReactSelect
                  //     options={TransmissionOptions}
                  //     value={companyOptions.find(
                  //       (option) => option.value === value
                  //     )}
                  //     onChange={(selected) => onChange(selected?.value)}
                  //     isClearable
                  //     isSearchable
                  //   />
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
                name="experience"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="text"
                    value={formData.experience}
                    onChange={onChange}
                    autoComplete="false"
                  />
                  //   <ReactSelect
                  //     options={experienceOptions}
                  //     value={experienceOptions.find(
                  //       (option) => option.value === value
                  //     )}
                  //     onChange={(selected) => onChange(selected?.value)}
                  //     isClearable
                  //     isSearchable
                  //   />
                )}
                defaultValue=""
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div> */}


            <div className="form-group">
              <label>Transmissions</label>
              <Controller
                name="transmission"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <select
                    defaultValue={formData.transmission}
                    onChange={handleInputChange}
                    className={`form-control ${errors.roleName ? "error-input" : ""
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

              {errors?.roleName?.message ? (
                <p style={{ color: "red" }}>{errors?.roleName?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label>Experience</label>
              <Controller
                name="experience"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <select
                    defaultValue={formData.experience}
                    onChange={handleInputChange}
                    className={`form-control ${errors.experience ? "error-input" : ""
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
              {errors?.experience?.message ? (
                <p style={{ color: "red" }}>{errors?.experience?.message}</p>
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
                    className={`form-control  ${errors?.postcode ? "error-input" : ""
                      }`}
                    type="number"
                    defaultValue={formData.postcode}
                    onChange={handleInputChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.postcode?.message ? (
                <p style={{ color: "red" }}>{errors?.postcode?.message}</p>
              ) : (
                ""
              )}
            </div>
            {/* <div className="form-group">
              <label>AreaIncluded</label>
              <Controller
                name="areaIncluded"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="text"
                    defaultValue={formData.areaIncluded}
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
            </div> */}


            <div className="form-group">
              <label>AreaIncluded</label>
              <Controller
                name="areaIncluded"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <select
                    onChange={handleInputChange}
                    defaultValue={formData.areaIncluded}
                    className={`form-control ${errors.areaName ? "error-input" : ""
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
              {errors?.areaName?.message ? (
                <p style={{ color: "red" }}>{errors?.areaName?.message}</p>
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
                    className={`form-control  ${errors?.rating ? "error-input" : ""
                      }`}
                    type="number"
                    value={formData.rating}
                    defaultValue={formData.rating}
                    onChange={handleInputChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={formData.rating}
              />
              {errors?.rating?.message ? (
                <p style={{ color: "red" }}>{errors?.rating?.message}</p>
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
}

export default EditProductModal