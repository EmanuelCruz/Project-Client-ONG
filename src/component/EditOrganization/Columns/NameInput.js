import React from 'react'
import "../EditOrganization.css";

const NameInput = ({ newName, setNewName }) => {

  return (
    <>
      <div className="form-group">
        <label htmlFor="companyName" />
          Name
        <input name="companyName" value={newName} className="form-control" style={{ borderColor: '' }} onChange={
          (e) => setNewName(e.target.value)}
        />
      </div>
    </>
  )
};

export default NameInput
