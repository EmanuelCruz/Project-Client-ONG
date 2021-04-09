import axios from "axios";
import { SERVER_URL } from "../../const/const";
import apiServices from "./apiServices";

function newsServices() {
  return axios
    .get(SERVER_URL + "/news")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function CreateNews(data) {
  return axios.post(SERVER_URL + "/news", data, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
}
function UpgradeNews(data, id) {
  return axios.patch(SERVER_URL + "/news/" + id, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

const getNews = async () => {
  try {
    const response = await apiServices.get("/news");
    const { data } = response;
    return data;
  } catch (err) {
    console.log(err);
  }
};

const deleteNews = (id) => {
  apiServices
    .delete(`/news/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      err.response ? console.log(err.response.data) : console.log(err.message);
    });
};

export { CreateNews, UpgradeNews, getNews, deleteNews, newsServices };
