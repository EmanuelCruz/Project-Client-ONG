import axios from "axios";
import { SERVER_URL_ACTIVITIES } from "../../const/const";

const createActivities = async (data) => {
  try {
    const response = await axios.post(
      SERVER_URL_ACTIVITIES + "/activities",
      data
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

const updateActivities = async (data, id) => {
  try {
    const response = await axios.patch(
      SERVER_URL_ACTIVITIES + "/activities/:id" + id,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export { createActivities, updateActivities };
