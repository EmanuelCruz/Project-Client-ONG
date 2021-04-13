import React from 'react';
import AdminUsersListContent from './AdminUsersListContent';
import GetUsers from './GetUsers';
import './AdminUsersList.css';
import NoItemsComponent from '../NoItems/NoItemsComponent';
import { Box } from '@material-ui/core';

const AdminUsersListComponent = () => {
  const { usersList } = GetUsers()

  if (usersList?.length >= 1) {
    return (
      <Box>
        <AdminUsersListContent usersList={usersList} />
      </Box>
    )
  } else return (
    <NoItemsComponent item="usuarios" />
  )
}

export default AdminUsersListComponent