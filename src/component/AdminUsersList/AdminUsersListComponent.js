import React from 'react';
import AdminUsersListContent from './AdminUsersListContent';
import GetUsers from './GetUsers';
import './AdminUsersList.css';

const AdminUsersListComponent = () => {
  const { usersList } = GetUsers()
  return <AdminUsersListContent usersList={usersList} />;
}

export default AdminUsersListComponent