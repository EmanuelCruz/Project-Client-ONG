import React from 'react';
import AdminUsersListContent from './AdminUsersListContent';
import GetUsers from './GetUsers';
import './AdminUsersList.css';
import NoItemsComponent from '../NoItems/NoItemsComponent';

const AdminUsersListComponent = () => {
  const { usersList } = GetUsers()

  if (usersList?.length >= 1) {
    return (
      <AdminUsersListContent usersList={usersList} />
    )
  } else return (
    <NoItemsComponent item="usuarios" />
  )
}

export default AdminUsersListComponent