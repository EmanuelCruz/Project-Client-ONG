const updateUser = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
};

export default updateUser;