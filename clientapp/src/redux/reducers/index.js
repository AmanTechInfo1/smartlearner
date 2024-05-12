import { combineReducers } from "redux";
import roleSlice from "../features/roleSlice";

const rootReducer = combineReducers({
    //   auth: authSlice,
    //   user: userSlice,
    roles: roleSlice,
    //   category: categorySlice,
    //   services: servicesSlice,
    //   callback: callbackSlice,
    //   enquiryForm: enquiryForm,
    //   contactForm: contactUsSlice,
    //   drivenForm: drivenformSlice,
    //     auth: authSlice,
    //     user: userSlice,
    //     roles: rolesSlice,
    //     category: categorySlice,
    //     postcode: postcodeSlice,
    //     product: productSlice,
});

export default rootReducer;
