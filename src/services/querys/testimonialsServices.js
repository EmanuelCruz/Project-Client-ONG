import axios from "axios";
import { SERVER_URL } from "../../const/const";

function testimonialsServices() {
  return axios
    .get(SERVER_URL + "/testimonials")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function testimonialDelete(id) {
  return axios
    .delete(SERVER_URL + id)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export { testimonialsServices, testimonialDelete };
