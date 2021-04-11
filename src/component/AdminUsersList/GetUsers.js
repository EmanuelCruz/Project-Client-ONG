import { useState, useEffect } from 'react'
import { userList } from "../../services/querys/userServices";

const GetUsers = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await userList();
      setUsersList(users);
  };
  fetchUsers();
  }, [])

  return { usersList }
}

export default GetUsers