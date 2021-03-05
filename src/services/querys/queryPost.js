import queryFinder from './queryFinder';

export const postUser = async (data) => {
  try {
    const res = await queryFinder.post('/users', data);
    return res;
  } catch (error) {
    throw error;
  }
};

export const postOrganization = async () => {
  try {
    const res = await queryFinder.post(`/organizations`);
    return res;
  } catch (error) {
    throw error;
  }
};
