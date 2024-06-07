import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userSchema } from '../../../schemas/account';
import { editUser } from '../../../redux/features/userSlice';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Loader from '../../../components/loader/Loader';

function EditUserModal({ userObj, editUserModalOpen, toggleEditUserModal }) {
    const dispatch = useDispatch();
    const rolesList = useSelector(state => state.roles.rolesList);
    const roleLoading = useSelector(state => state.roles.loading);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        roleName: '',
        privacyPolicy: false,
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
    if (userObj) {
        setFormData({
            username: userObj.username || '',
            email: userObj.email || '',
            password: '',
            confirmPassword: '',
            phoneNumber: userObj.phoneNumber || '',
            roleName: userObj.roleName || '',
            privacyPolicy: userObj.privacyPolicy || false,
        });
    }
}, [userObj]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = async () => {
        try {
            await userSchema.validate(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (validationErrors) {
            const newErrors = {};
            validationErrors.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
            return false;
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (isValid) {
            const formDataToSend = new FormData();
            formDataToSend.append("username", formData.username);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("password", formData.password);
            formDataToSend.append("phoneNumber", formData.phoneNumber);
            formDataToSend.append("roleName", formData.roleName);
            formDataToSend.append("privacyPolicy", formData.privacyPolicy);
            dispatch(editUser(userObj._id, formDataToSend, toggleEditUserModal));
        }
    };

    return (
        <>
            {!roleLoading ? (
                <Modal isOpen={editUserModalOpen} toggle={toggleEditUserModal}>
                    <ModalHeader toggle={toggleEditUserModal}>Update User</ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input
                                    className={`form-control ${errors.username ? 'error-input' : ''}`}
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    autoComplete="false"
                                />
                                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-group">
                                    <input
                                        className={`form-control ${errors.password ? 'error-input' : ''}`}
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        autoComplete="false"
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </button>
                                </div>
                                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <div className="input-group">
                                    <input
                                        className={`form-control ${errors.confirmPassword ? 'error-input' : ''}`}
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        autoComplete="false"
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </button>
                                </div>
                                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    className={`form-control ${errors.email ? 'error-input' : ''}`}
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    autoComplete="false"
                                />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    className={`form-control ${errors.phoneNumber ? 'error-input' : ''}`}
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    autoComplete="false"
                                />
                                {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                            </div>
                            <div className="form-group">
                                <label>Account Type</label>
                                <select
                                    className={`form-control ${errors.roleName ? 'error-input' : ''}`}
                                    name="roleName"
                                    value={formData.roleName}
                                    onChange={handleInputChange}
                                >
                                    <option disabled value="">Select...</option>
                                    {rolesList.map((role) => (
                                        <option key={role._id} value={role.name}>{role.name}</option>
                                    ))}
                                </select>
                                {errors.roleName && <p style={{ color: 'red' }}>{errors.roleName}</p>}
                            </div>
                            <div className="form-group">
                                <label>Privacy Policy</label>
                                <input
                                    type="checkbox"
                                    name="privacyPolicy"
                                    checked={formData.privacyPolicy}
                                    onChange={handleInputChange}
                                />
                                {errors.privacyPolicy && <p style={{ color: 'red' }}>{errors.privacyPolicy}</p>}
                            </div>
                            <div className="form-group text-center mt-3">
                                <button className="btn btn-primary account-btn btn-lg" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            ) : (
                <Loader/>
            )}
        </>
    );
}

export default EditUserModal;
