import React from 'react'
import "../EditOrganization.css";
import validateSubmit from '../Validations/validateSubmit'

const NameInput = ({ newName, newLogo, setNameInputOutlineColor, setLogoInputOutlineColor }) => {

  const handleSubmit = (objectToValidateOne, objectToValidateTwo) => {
    if (validateSubmit(objectToValidateOne, objectToValidateTwo) === true) {
      console.log(newName, newLogo)
    } else {
      setNameInputOutlineColor('red')
      setLogoInputOutlineColor('red')
    }
  }

  return (
    <>
      <button type="submit" className="btn btn-primary d-block w-100"
        onClick={() => handleSubmit(newName, newLogo)}>
        Submit
          </button>
    </>
  )
};

export default NameInput
