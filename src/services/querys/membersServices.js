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

export { getMembersList };
