import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/ducks/user";
import isAuthReducer from "../store/isAuth/reducer";
import isAdminReducer from "../store/isAdmin/reducer";

export default configureStore({
  reducer: {
    user: userReducer,
    isAuth: isAuthReducer,
    isAdmin: isAdminReducer,
  },
});
