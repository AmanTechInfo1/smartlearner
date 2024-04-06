import React, { useState } from "react";
import styles from "./css/AdminApp.module.css";
import { IoMdCloseCircle } from "react-icons/io";

const AddUserForm = ({ handleAddUser, closeForm }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    roles: "",
    avatar: null, // Added avatar field to store file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, avatar: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add additional logic for handling file upload and obtaining the URL
    // Here you can use FormData to send the file to the server
    handleAddUser(user);
  };

  return (
    <div className={styles.addNewUser}>
      <div className={styles.userModel}>
        <span className={styles.userFormCloseIcon} onClick={closeForm}>
          <IoMdCloseCircle id={styles.userFormCloseIcon} onClick={closeForm} />
        </span>
        <h1 className={styles.userFormHeading}>Add New User</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInputFeilds}>
            <label>
              ID
            </label>
            <input
              type="text"
              name="id"
              placeholder="Enter ID"
              value={user.id}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formInputFeilds}>
            <label>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formInputFeilds}>
            {" "}
            <label>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formInputFeilds}>
            {" "}
            <label>
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formInputFeilds}>
            {" "}
            <label>
              Roles
            </label>
            <input
              type="text"
              name="roles"
              placeholder="Enter Roles"
              value={user.roles}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formInputFeilds}>
            {" "}
            <label>
              Avatar
            </label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
