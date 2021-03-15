import React from 'react'
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';

const User = ({ userkey, userName, userSurname, userEmail }) => {
  return (
    <tbody>
      <tr>
        <th scope="row" className="username">{userName}</th>
        <td>
          {userSurname}
        </td>
        <td>
          {userEmail}
        </td>
        <td>
          <EditButton userkey={userkey} />
          <DeleteButton userkey={userkey} />
        </td>
      </tr>
    </tbody>
  )
}

export default User;