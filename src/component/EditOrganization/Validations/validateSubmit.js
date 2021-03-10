import {
  NAME_MIN_LENGTH_WARNING,
  NAME_MIN_LENGTH_NUMBER,
  objectIsEmpty,
  LOGO_MIN_LENGTH_WARNING,
} from "../../../const/const";

const validateSubmit = (objectToValidateOne, objectToValidateTwo) => {
  if (objectToValidateOne.length < NAME_MIN_LENGTH_NUMBER) {
    alert(NAME_MIN_LENGTH_WARNING)
  } else if (objectIsEmpty(objectToValidateTwo)) {
    alert(LOGO_MIN_LENGTH_WARNING)
  } return true
}

export default validateSubmit