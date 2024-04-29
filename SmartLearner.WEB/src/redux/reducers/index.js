import { combineReducers } from "redux";
import authSlice from "../../features/authSlice";
import userSlice from "../../features/userSlice";
import rolesSlice from "../../features/rolesSlice";
import categorySlice from "../../features/categorySlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    roles: rolesSlice,
    category: categorySlice,
});

export default rootReducer;
