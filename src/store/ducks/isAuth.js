// Actions
const LOGIN = "t17-client/user/login";
const LOGOUT = "t17-client/user/logout";

// Setup the initial state
const initialState = {
  isAuth: false,
};

// Reducer
/*
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
*/

// Actions creators
const updateIsAuth = (isAuth) => {
  console.log(isAuth)
  return {
    type: 'LOGIN',
    payload: isAuth
  }
};

export default updateIsAuth;