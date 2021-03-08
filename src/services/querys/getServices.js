import apiServices from './apiServices';

export const getServices = async (getUrl) => {
  try {
    const res = await apiServices.get(getUrl);
    return res;
  } catch (error) {
    throw error;
  }
};
