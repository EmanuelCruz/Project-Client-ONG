import React from "react";
import "../EditOrganization.css";

const LogoInput = ({
  newLogo,
  setNewLogo,
  logoInputOutlineColor,
  defaultLogo,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="companyLogo">Logo</label>
        <input
          id="file"
          name="file"
          type="file"
          className="form-control"
          accept="image/*"
          style={{ borderColor: logoInputOutlineColor }}
          onChange={(event) => {
            setNewLogo(URL.createObjectURL(event.target.files[0]));
            {
              /* TO DO: TRANSFORM UPLOADED IMAGE TO URL */
            }
          }}
        />
        {newLogo ? (
          <img className="logo" src={newLogo} title="Nuevo logo" alt=""></img>
        ) : (
          <img
            className="logo"
            src={defaultLogo}
            title="Logo actual"
            alt=""></img>
        )}
      </div>
    </>
  );
};

export default LogoInput;
