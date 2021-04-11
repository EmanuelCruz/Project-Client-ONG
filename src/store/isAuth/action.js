const updateIsAuth = (isAuth) => {
  return {
    type: 'AUTH',
    payload: isAuth
  }
};

export default updateIsAuth;