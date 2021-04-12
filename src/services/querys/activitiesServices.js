import axios from "axios";
import {
  SERVER_URL_ACTIVITIES,
  ERROR_PARAGRAPH,
  MAIN_URL,
  SERVER_URL,
} from "../../const/const";

const createActivities = async (data) => {
  try {
    const response = await axios.post(
      `${MAIN_URL}${SERVER_URL_ACTIVITIES}`,
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

const updateActivities = async (data, id) => {
  try {
    const response = await axios.patch(`${SERVER_URL_ACTIVITIES}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

const getActivityById = async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}${SERVER_URL_ACTIVITIES}/${id}`
    );
    return response.data;
  } catch (err) {
    return ERROR_PARAGRAPH;
  }
};

const getAllActivities = async () => {
  try {
    const response = await axios.get(`${MAIN_URL}${SERVER_URL_ACTIVITIES}`);
    return response.data;
  } catch (err) {
    return ERROR_PARAGRAPH;
  }
};

const deleteActivity = async (id) => {
  try {
    const response = await axios.delete(
      `${MAIN_URL}${SERVER_URL_ACTIVITIES}/${id}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

function activitiesServices() {
  return axios
    .get(SERVER_URL + "/activities")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export {
  createActivities,
  updateActivities,
  getActivityById,
  deleteActivity,
  getAllActivities,
  activitiesServices,
};
