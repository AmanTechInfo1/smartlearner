import { combineReducers } from "redux";
import authSlice from "../../features/authSlice";
import userSlice from "../../features/userSlice";
import rolesSlice from "../../features/rolesSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    roles: rolesSlice
});

export default rootReducer;
