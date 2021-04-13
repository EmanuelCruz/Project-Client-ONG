import React from 'react'
import { useHistory } from 'react-router';

const EditButton = ({ userkey, dataUser, handleEdit }) => {
  let history = useHistory();
  const handleClick = () => {
    console.log(dataUser)
    const location = {
      pathname: '/backoffice/edit-user',
      state: dataUser
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