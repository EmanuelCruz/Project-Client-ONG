const userLogout = (initialState) => {

  // Actions
  const LOGOUT = "t17-client/user/logout";

  // Setup the initial state
  initialState = {
    user: { loggedIn: true },
  };

  // Actions creators
  const logoutAction = () => ({
    type: LOGOUT,
  });

  // Reducer
  const logout = (state = initialState, action) => {
    switch (action.type) {
      case LOGOUT:
        state.user.loggedIn = false;
        localStorage.setItem('loggedIn', false);
        return state;
      default:
        return state;
    }
  }
}

export default userLogout;