import apiServices from './apiServices';

const authLogin = async (data) => {
  try {
    const response = await apiServices.post(
      '/auth/login',
      JSON.stringify(data)
    );
    return response;
  } catch (error) {
    throw error.response;
  }
};

const authSignUp = async (data) => {
  try {
    const response = await apiServices.post(
      '/auth/signup',
      JSON.stringify(data)
    );
    return response;
  } catch (error) {
    throw error.response;
  }
};

export { authLogin, authSignUp };
