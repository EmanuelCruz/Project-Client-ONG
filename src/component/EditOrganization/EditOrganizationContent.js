import React, { useEffect, useState } from 'react'
import "./EditOrganization.css";
import NameInput from './Columns/NameInput';
import LogoInput from './Columns/LogoInput';
import SubmitButton from './Columns/SubmitButton'

const EditOrganizationContent = () => {
  const [defaultName, setDefaultName] = useState('')
  const [defaultLogo, setDefaultLogo] = useState('')

  const [newName, setNewName] = useState(defaultName)
  const [newLogo, setNewLogo] = useState('')

  const [nameInputOutlineColor, setNameInputOutlineColor] = useState('')
  const [logoInputOutlineColor, setLogoInputOutlineColor] = useState('')

  useEffect(() => {
    setNewName(defaultName)
  }, [defaultName])

  useEffect(() => {
    setDefaultName('defaultName')
    setDefaultLogo('https://www.freepnglogos.com/uploads/vodafone-png-logo/vodafone-logo-clarify-business-development-16.png')
  }, [])

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
