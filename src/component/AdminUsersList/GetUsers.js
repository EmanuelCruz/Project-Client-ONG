import { useState, useEffect } from 'react'
import { userList } from '../../services/querys/userServices';

const GetUsers = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setUsersList([
      userList()
    ])
  }, [])

  return { usersList }
}

export default GetUsers