import axios from "axios";
import { SERVER_URL } from "../../const/const";
import apiServices from "./apiServices";

function CreateNews(data) {
  axios
    .post(SERVER_URL + "/news", data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
function UpgradeNews(data, id) {
  axios
    .patch(SERVER_URL + "/news/" + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.log(err);
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

export { CreateNews, UpgradeNews, getNews, deleteNews };
