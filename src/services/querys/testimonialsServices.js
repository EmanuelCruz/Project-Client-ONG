import axios from "axios";
import { SERVER_URL } from "../../const/const";

function testimonialsServices() {
  return axios
    .get(SERVER_URL + "/testimonials")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function testimonialDelete(id) {
  return axios
    .delete(SERVER_URL + "/testimonials/" + id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function testimonialCreate(data) {
  return axios
    .post(SERVER_URL + "/testimonials", data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function testimonialUpdate(data, id) {
  return axios
    .patch(SERVER_URL + "/testimonials/" + id, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getATestimonial(id) {
  return axios
    .get(SERVER_URL + "/testimonials/" + id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

export {
  testimonialsServices,
  testimonialDelete,
  testimonialCreate,
  testimonialUpdate,
  getATestimonial,
};
