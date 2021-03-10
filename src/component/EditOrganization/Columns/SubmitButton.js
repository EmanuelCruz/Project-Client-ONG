import React from 'react'
import "../EditOrganization.css";
import validateSubmit from '../Validations/validateSubmit'

const NameInput = ({ newName, newLogo }) => {

  return (
    <>
      <button type="submit" className="btn btn-primary d-block w-100" onClick={() => validateSubmit(newName, newLogo)}>
        Submit
          </button>
    </>
  )
};

export default NameInput
