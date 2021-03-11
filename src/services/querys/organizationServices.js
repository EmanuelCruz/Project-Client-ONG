import apiServices from './apiServices';

const getOrganization = async (id) => {
  try {
    const response = await apiServices.get(`/organizations/${id}/public`);
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export { getOrganization };
