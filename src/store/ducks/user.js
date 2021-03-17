// Actions
const LOGIN = "t17-client/user/login";
const LOGOUT = "t17-client/user/logout";

// Setup the initial state
const initialState = {
  user: null,
};

// Reducer
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

// Actions creators
export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
