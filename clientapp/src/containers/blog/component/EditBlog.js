import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editBlog } from "../../../redux/features/blogSlice"; // Ensure your slice has this action
import { blogsSchema } from "../../../schemas/blog/index"; // Adjust this path according to your structure
import Loader from "../../../components/loader/Loader";

function EditBlog(props) {
  const dispatch = useDispatch();
  const { loading, blog } = useSelector((state) => state.blog);
  const [image, setImage] = useState();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(blogsSchema),
  });

  const onSubmit = async (data) => {
    const formDataToSend = new FormData();
    formDataToSend.append("email", data.email);
    formDataToSend.append("blogName", data.blogName);
    formDataToSend.append("description", data.description);
    formDataToSend.append("content", data.content);
    formDataToSend.append("shortContent", data.shortContent);

    if (image) {
      formDataToSend.append("image", image);
    }

    dispatch(editBlog(blog._id, formDataToSend, props.toggleEditBlogModal));
  };

  useEffect(() => {
    if (blog) {
      reset({
        email: blog.email,
        blogName: blog.blogName,
        description: blog.description,
        content: blog.content,
        shortContent: blog.shortContent,
      });
    }
  }, [blog, reset]);

  return (
    <>
      {!loading ? (
        <Modal
          isOpen={props.showEditBlogModal}
          toggle={props.toggleEditBlogModal}>
          <ModalHeader toggle={props.toggleEditBlogModal}>
            Update Blog
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`form-control ${
                        errors.email ? "error-input" : ""
                      }`}
                      type="email"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
              </div>

              <div className="form-group">
                <label>Blog Name</label>
                <Controller
                  name="blogName"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`form-control ${
                        errors.blogName ? "error-input" : ""
                      }`}
                      type="text"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                />
                {errors.blogName && (
                  <p style={{ color: "red" }}>{errors.blogName.message}</p>
                )}
              </div>

              <div className="form-group">
                <label>Description</label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`form-control ${
                        errors.description ? "error-input" : ""
                      }`}
                      type="text"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                />
                {errors.description && (
                  <p style={{ color: "red" }}>{errors.description.message}</p>
                )}
              </div>

              <div className="form-group">
                <label>Content</label>
                <Controller
                  name="content"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      className={`form-control ${
                        errors.content ? "error-input" : ""
                      }`}
                      rows={4}
                      autoComplete="off"
                      {...field}
                    />
                  )}
                />
                {errors.content && (
                  <p style={{ color: "red" }}>{errors.content.message}</p>
                )}
              </div>

              <div className="form-group">
                <label>Short Content</label>
                <Controller
                  name="shortContent"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`form-control ${
                        errors.shortContent ? "error-input" : ""
                      }`}
                      type="text"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                />
                {errors.shortContent && (
                  <p style={{ color: "red" }}>{errors.shortContent.message}</p>
                )}
              </div>

              <div className="form-group">
                <label>Blog Image</label>
                <Controller
                  name="blogImage"
                  control={control}
                  render={({ field }) => (
                    <input
                      className="form-control"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setImage(file);
                        field.onChange(file);
                      }}
                    />
                  )}
                />
                {errors.blogImage && (
                  <p style={{ color: "red" }}>{errors.blogImage.message}</p>
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
      ) : (
        <Loader />
      )}
    </>
  );
}

export default EditBlog;
