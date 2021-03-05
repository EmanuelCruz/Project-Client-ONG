import queryFinder from './queryFinder';

export const getUsers = async () => {
  try {
    const res = await queryFinder.get('/users');
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};

export const getOrganizations = async (id) => {
  try {
    const res = await queryFinder.get(`/organizations/${id}/public`);
    return res;
  } catch (error) {
    throw error;
  }
};
