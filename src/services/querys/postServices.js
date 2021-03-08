import apiServices from './apiServices';

export const postServices = async (postUrl, data) => {
  try {
    const res = await apiServices.post(postUrl, data);
    return res;
  } catch (error) {
    throw error;
  }
};
