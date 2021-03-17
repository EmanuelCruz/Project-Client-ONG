import React from 'react'
import "./EditOrganization.css";
import NameInput from './Columns/NameInput';
import LogoInput from './Columns/LogoInput';
import SubmitButton from './Columns/SubmitButton'

const EditOrganizationContent = ({ newName, setNewName, nameInputOutlineColor, newLogo, setNewLogo, logoInputOutlineColor, defaultLogo, setNameInputOutlineColor, setLogoInputOutlineColor }) => {

  return (
    <div className={"w-50 mx-auto"}>
      <h2>Edit Organization</h2>
      <div>
        <NameInput newName={newName} setNewName={setNewName} nameInputOutlineColor={nameInputOutlineColor}
        />
        <LogoInput newLogo={newLogo} setNewLogo={setNewLogo} logoInputOutlineColor={logoInputOutlineColor}
          defaultLogo={defaultLogo} />
        <SubmitButton newName={newName} newLogo={newLogo}
          setNameInputOutlineColor={setNameInputOutlineColor} setLogoInputOutlineColor={setLogoInputOutlineColor} />
      </div>
    </div >
  )
};

export default EditOrganizationContent
