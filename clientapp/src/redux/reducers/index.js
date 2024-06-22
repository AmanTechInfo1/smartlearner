import { combineReducers } from "redux";
import authSlice from "../features/authSlice";
import userSlice from "../features/userSlice";
import rolesSlice from "../features/roleSlice";
import categorySlice from "../features/categorySlice";
import servicesSlice from "../features/servicesSlice";
import callbackSlice from "../features/callbackSlice";
import enquiryForm from "../features/enquirySlice";
import contactUsSlice from "../features/contactUsSlice";
import drivenformSlice from "../features/drivenformSlice";
import productSlice from "../features/productSlice";
import postcodeSlice from "../features/postcodeSlice";
import areaSlice from "../features/areaSlice";
import quizCategorySlice from "../features/quizCategorySlice";
import quizSlice from "../features/quizSlice";
import dashboardSlice from "../features/dashboardSlice";
import cartSlice from "../features/cartSlice";
import orderSlice from "../features/orderSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  user: userSlice,
  roles: rolesSlice,
  category: categorySlice,
  services: servicesSlice,
  callback: callbackSlice,
  enquiryForm: enquiryForm,
  contactForm: contactUsSlice,
  drivenForm: drivenformSlice,
  quiz: quizSlice,
  dashboard: dashboardSlice,
  postcode: postcodeSlice,
  product: productSlice,
  area: areaSlice,
  quizCategory: quizCategorySlice,
});

export default rootReducer;
