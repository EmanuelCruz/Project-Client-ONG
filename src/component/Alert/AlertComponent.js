import Swal from "sweetalert2";
import {
  CONFIRM_BUTTON_CANCEL,
  CONFIRM_BUTTON,
  CONFIRM_PARAGRAPH,
  CONFIRM_TITLE,
  ERROR_PARAGRAPH,
  ERROR_TITLE,
  INFO_BUTTON,
  INFO_TITLE,
  TESTIMONIAL_UPDATE_SUCCESS,
  TESTIMONIAL_CREATE_SUCCESS,
  TESTIMONIAL_DELETE_SUCCESS,
  TESTIMONIAL_CREATE_TITLE,
  TESTIMONIAL_UPDATE_TITLE,
  TESTIMONIAL_DELETE_TITLE,
  CATEGORIE_CREATE_TITLE,
  CATEGORIE_UPDATE_TITLE,
  CATEGORIE_UPDATE_SUCCESS,
  CATEGORIE_CREATE_SUCCESS,
  SUCCESS_TITLE,
  SUCCESS_PARAGRAPH,
  ACTIVITY_CREATE_TITLE,
  ACTIVITY_CREATE_SUCCESS,
  ACTIVITY_DELETE_TITLE,
  ACTIVITY_DELETE_SUCCESS,
} from "../../const/const";

export const InfoAlertComponent = () => {
  return Swal.fire({
    title: "<strong>Info</strong>",
    icon: "info",
    html: INFO_TITLE,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: INFO_BUTTON,
  });
};

export const ErrorAlertComponent = () => {
  return Swal.fire({
    icon: "error",
    title: ERROR_TITLE,
    text: ERROR_PARAGRAPH,
  });
};

export const SuccessAlertComponent = () => {
  return Swal.fire({
    icon: "success",
    title: SUCCESS_TITLE,
    text: SUCCESS_PARAGRAPH,
  });
};

export const ConfirmAlertComponent = () => {
  return Swal.fire({
    title: CONFIRM_TITLE,
    text: CONFIRM_PARAGRAPH,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: CONFIRM_BUTTON,
    cancelButtonText: CONFIRM_BUTTON_CANCEL,
  });
};

export const ConfirmAlertDeleteButtonComponent = (title) => {
  return Swal.fire({
    title: title,
    text: CONFIRM_PARAGRAPH,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: CONFIRM_BUTTON,
    cancelButtonText: CONFIRM_BUTTON_CANCEL,
  });
};

export const UpdateTestimonialSuccess = () => {
  return Swal.fire({
    title: TESTIMONIAL_UPDATE_TITLE,
    text: TESTIMONIAL_UPDATE_SUCCESS,
    icon: "success",
  });
};

export const CreateTestimonialSuccess = () => {
  return Swal.fire({
    title: TESTIMONIAL_CREATE_TITLE,
    text: TESTIMONIAL_CREATE_SUCCESS,
    icon: "success",
  });
};

export const DeleteTestimonialSucces = () => {
  return Swal.fire({
    title: TESTIMONIAL_DELETE_TITLE,
    text: TESTIMONIAL_DELETE_SUCCESS,
    icon: "success",
  });
};

export const CreateActivitiesSuccess = () => {
  return Swal.fire({
    title: ACTIVITY_CREATE_TITLE,
    text: ACTIVITY_CREATE_SUCCESS,
    icon: "success",
  });
};
export const CreateCategorieSuccess = () => {
  return Swal.fire({
    title: CATEGORIE_CREATE_TITLE,
    text: CATEGORIE_CREATE_SUCCESS,
    icon: "success",
  });
};

export const UpdateCategorieSuccess = () => {
  return Swal.fire({
    title: CATEGORIE_UPDATE_TITLE,
    text: CATEGORIE_UPDATE_SUCCESS,
    icon: "success",
  });
};



export const DeleteActitivySucces = () => {
  return Swal.fire({
    title: ACTIVITY_DELETE_TITLE,
    text: ACTIVITY_DELETE_SUCCESS,
    icon: "success",
  });
};
