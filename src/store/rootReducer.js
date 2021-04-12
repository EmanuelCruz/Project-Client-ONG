import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import isAuthReducer from './isAuth/reducer';
import isAdminReducer from './isAdmin/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  isAuth: isAuthReducer,
  isAdmin: isAdminReducer
})

export default rootReducer;