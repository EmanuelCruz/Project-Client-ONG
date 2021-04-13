import React from 'react'
import { useHistory } from 'react-router';

const EditButton = ({ userkey, id, handleEdit }) => {
  let history = useHistory();
  const handleClick = () => {
    const location = {
      pathname: '/backoffice/edit-user',
      state: { id }
    }
    history.push(location)
  }

  return (
    <button
      userkey={userkey}
      type="button"
      className="btn btn-secondary"
      onClick={handleClick}
    >Editar</button>
  )
}

export default EditButton;