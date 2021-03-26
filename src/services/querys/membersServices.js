import apiServices from "./apiServices";
import { MAIN_URL, SERVER_URL_MEMBERS } from "../../const/const";

const getMembersList = async () => {
  try {
    const response = await apiServices.get(MAIN_URL + SERVER_URL_MEMBERS);
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export { getMembersList };
