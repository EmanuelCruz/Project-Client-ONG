import axios from "axios";
import { SERVER_URL_CONTACTS } from "../../const/const";
import apiServices from './apiServices'

const createNewContact = async (data) => {
  try {
    const response = await axios.post(SERVER_URL_CONTACTS, data);
    return response.data;
  } catch (err) {
    return err;
  }
};

const getContacts = async () => {
  try {
    const response = await apiServices.get("/contacts");
    return response.data;
  } catch (err) {
    return err;
  }
};

export { createNewContact, getContacts };
