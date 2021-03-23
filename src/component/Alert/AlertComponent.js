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
  DELETE_CONFIRM_TITLE,
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

export const ConfirmAlertDeleteActivtyComponent = () => {
  return Swal.fire({
    title: DELETE_CONFIRM_TITLE,
    text: CONFIRM_PARAGRAPH,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: CONFIRM_BUTTON,
    cancelButtonText: CONFIRM_BUTTON_CANCEL,
  });
};
