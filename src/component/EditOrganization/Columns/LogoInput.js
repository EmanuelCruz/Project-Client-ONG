import React, { useState, useEffect } from 'react'
import "../EditOrganization.css";

const LogoInput = ({ newLogo, setNewLogo }) => {

  return (
    <>
      <div className="form-group">
        <label htmlFor="companyLogo">
          Logo
              </label>
        <input id="file" name="file" type="file" className="form-control" onChange={(event) => {
          setNewLogo({ "file": event.currentTarget.files[0] });
        }} />
      </div>
    </>
  )
};

export default LogoInput
