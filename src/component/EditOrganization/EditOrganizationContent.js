import React, { useEffect, useState } from 'react'
import "./EditOrganization.css";
import NameInput from './Columns/NameInput';
import LogoInput from './Columns/LogoInput';
import SubmitButton from './Columns/SubmitButton'

const EditOrganizationContent = () => {
  const [defaultName, setDefaultName] = useState('')
  const [newName, setNewName] = useState(defaultName)
  const [newLogo, setNewLogo] = useState({})

  useEffect(() => {
    setNewName(defaultName)
  }, [defaultName])

  useEffect(() => {
    setDefaultName('defaultName')
  }, [])

  return (
    <div className={"w-50 mx-auto"}>
      <h2>Edit Organization</h2>
      <div>
        <NameInput newName={newName} setNewName={setNewName}
        />
        <LogoInput newLogo={newLogo} setNewLogo={setNewLogo} />
        <SubmitButton newName={newName} newLogo={newLogo} />
      </div>
    </div >
  )
};

export default EditOrganizationContent
