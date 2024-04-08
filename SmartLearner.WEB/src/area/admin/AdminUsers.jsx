import React, { useState } from "react";
import AddUserForm from "./AddUserForm"; // Importing the AddUserForm component
import SingleUser from "./SingleUser"; // Importing the SingleUser component
import styles from './css/AdminApp.module.css';
import { BsSearch } from 'react-icons/bs';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [addUserFormVisible, setAddUserFormVisible] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
    setAddUserFormVisible(false); // Hide the form after adding user
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const editUser = (user) => {
    setSelectedUser(user);
  };

  const closeSingleUser = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.email.toLowerCase().includes(searchTerm.toLowerCase())
);
  const handleSave = (editedUser) => {
    setUsers(users.map(user => (user.id === editedUser.id ? editedUser : user)));
  };

  return (
    <div className={styles.usersContainer}>
      {selectedUser ? (
        <SingleUser user={selectedUser} closeSingleUser={closeSingleUser} onSave={handleSave}  />
      ) : (
        <>
          <div className={styles.usersHeading}>
            <h2 className={styles.userHeading}>Users</h2> 
            <button className={styles.addButton} onClick={() => setAddUserFormVisible(true)}>Add User</button>
          </div>
          <div className={styles.userTable}>
            <div className={styles.userTableHeading}>
              <BsSearch className={styles.usersSearchIcon} />
              <input
                type="text"
                className={styles.usersSearchInput}
                placeholder="Search users by email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className={styles.userTableDetails}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Roles</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td data-label="id">{user.id}</td>
                      <td data-label="Avatar">
                        {user.avatar && (
                          <img
                            src={URL.createObjectURL(user.avatar)}
                            alt="Avatar"
                            className={styles.userAvatar}
                            height='35px'
                            width='40px'
                          />
                        )}
                      </td>
                      <td data-label="Name">{user.name}</td>
                      <td data-label="Email">{user.email}</td>
                      <td data-label="Phone">{user.phone}</td>
                      <td data-label="Roles">{user.roles}</td>
                      <td>
                        <button className={styles.editButton} onClick={() => editUser(user)}>Edit</button>
                        <button className={styles.removeButton} onClick={() => removeUser(user.id)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Conditional rendering of AddUserForm */}
            {addUserFormVisible && <AddUserForm handleAddUser={handleAddUser} closeForm={() => setAddUserFormVisible(false)} />}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminUsers;
