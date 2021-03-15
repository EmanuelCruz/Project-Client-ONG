import React from 'react';
import User from './User';

const AdminUsersListContent = ({ usersList }) => {

  return (
    <div>
      <h1 className="title">Listado de usuarios:</h1>
      <div>
        <table className="table table-bordered mb-5">
          <thead>
            <tr className="thead">
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th scope="col">Administrar</th>
            </tr>
          </thead>
          {usersList.map((user, index) => (
            <User key={`user-${index}`} userkey={`user-${index}`} userName={user.name}
              userSurname={user.surname} userEmail={user.email} />
          ))}
        </table>
      </div>
    </div>
  )
}

export default AdminUsersListContent