import { combineReducers } from "redux";
import authSlice from "../../features/authSlice";
import userSlice from "../../features/userSlice";
import rolesSlice from "../../features/rolesSlice";
import categorySlice from "../../features/categorySlice";
import servicesSlice from "../../features/servicesSlice";
import callbackSlice from "../../features/callbackSlice";
import enquiryForm from "../../features/enquirySlice";
import contactUsSlice from "../../features/contactUsSlice";
import drivenformSlice from "../../features/drivenformSlice";
import productSlice from "../../features/productSlice";
import postcodeSlice from "../../features/postcodeSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  roles: rolesSlice,
  category: categorySlice,
  services: servicesSlice,
  callback: callbackSlice,
  enquiryForm: enquiryForm,
  contactForm: contactUsSlice,
  drivenForm: drivenformSlice,
    auth: authSlice,
    user: userSlice,
    roles: rolesSlice,
    category: categorySlice,
    postcode: postcodeSlice,
    product: productSlice,
});

export default rootReducer;
