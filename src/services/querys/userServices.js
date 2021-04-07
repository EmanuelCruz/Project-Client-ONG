import apiServices from './apiServices';

const userList = async () => {
  try {
    const response = await apiServices.get('/users');
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

const userAuth = async () => {
  try {
    const response = await apiServices.get('/users/auth/me');
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

const getUsers = async () => {
  try {
    const response = await apiServices.get("/users");
    const { data } = response;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { userList, userAuth, getUsers };
