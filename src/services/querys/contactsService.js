import axios from "axios";
import { SERVER_URL_CONTACTS } from "../../const/const";

const createNewContact = async (data) => {
  try {
    const response = await axios.post(SERVER_URL_CONTACTS, data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { createNewContact };
