import { combineReducers } from "redux";
import authSlice from "../../features/authSlice";
import userSlice from "../../features/userSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
});

export default rootReducer;
