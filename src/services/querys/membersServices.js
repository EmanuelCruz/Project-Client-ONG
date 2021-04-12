import apiServices from "./apiServices";
import { SERVER_URL_MEMBERS } from "../../const/const";

const getMembersList = async () => {
  try {
    const response = await apiServices.get(SERVER_URL_MEMBERS);
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

const createMembers = async (data) => {
  try {
    const response = await apiServices.post(SERVER_URL_MEMBERS, data);
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

const deleteMember = async (id) => {
  try {
    const response = await apiServices.delete(`${SERVER_URL_MEMBERS}/${id}`);
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export { getMembersList, createMembers, deleteMember };
