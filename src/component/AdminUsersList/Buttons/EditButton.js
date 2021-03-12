import React from 'react'

const EditButton = ({ userkey }) => {

  const handleEditButtonClick = () => {
    return false // TODO: Edit User Functionality
  }

  return (
    <button
      userkey={userkey}
      type="button"
      className="btn btn-secondary"
      onClick={handleEditButtonClick}
    >Editar</button>
  )
}

export default EditButton;