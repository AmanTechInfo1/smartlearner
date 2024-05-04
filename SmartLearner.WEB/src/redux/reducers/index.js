import { combineReducers } from "redux";
import authSlice from "../../features/authSlice";
import userSlice from "../../features/userSlice";
import rolesSlice from "../../features/rolesSlice";
import categorySlice from "../../features/categorySlice";
import productSlice from "../../features/productSlice";
import postcodeSlice from "../../features/postcodeSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    roles: rolesSlice,
    category: categorySlice,
    postcode: postcodeSlice,
    product: productSlice,
});

export default rootReducer;
