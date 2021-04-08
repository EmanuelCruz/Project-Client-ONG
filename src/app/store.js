import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/ducks/user";
import isAuthReducer from "../store/isAuth/reducer";

export default configureStore({
  reducer: {
    user: userReducer,
    isAuth: isAuthReducer,
  },
});
