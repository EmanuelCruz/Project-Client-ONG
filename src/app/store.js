import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/ducks/user";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
