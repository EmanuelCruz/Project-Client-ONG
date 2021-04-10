const updateIsAdmin = (isAdmin) => {
  return {
    type: 'AUTH',
    payload: isAdmin
  }
};

export default updateIsAdmin;