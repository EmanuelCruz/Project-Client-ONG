import React from 'react'

const DeleteButton = ({ userkey }) => {

  const handleDeleteButtonClick = () => {
    return false // TODO: Delete User Functionality
  }

  return (
    <button
      userkey={userkey}
      type="button"
      className="btn btn-delete"
      onClick={handleDeleteButtonClick}
    >Eliminar</button>
  )
}

export default DeleteButton;