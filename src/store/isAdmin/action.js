const updateIsAdmin = (isAdmin) => {
  return {
    type: 'LOGIN',
    payload: isAdmin
  }
};

export default updateIsAdmin;