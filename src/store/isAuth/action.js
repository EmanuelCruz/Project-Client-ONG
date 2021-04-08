const updateIsAuth = (isAuth) => {
  return {
    type: 'LOGIN',
    payload: isAuth
  }
};

export default updateIsAuth;