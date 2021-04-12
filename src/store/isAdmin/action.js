const updateIsAdmin = (isAdmin) => {
  return {
    type: 'IS_ADMIN',
    payload: isAdmin
  }
};

export default updateIsAdmin;