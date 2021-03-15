import { useState, useEffect } from 'react'

const GetUsers = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setUsersList([
      // TODO: Fetch Users List
      { name: 'John', surname: 'Smith', email: 'johnsmith@gmail.com' },
      { name: 'Tom', surname: 'Taylor', email: 'tomtaylor@gmail.com' },
      { name: 'Mike', surname: 'Thompson', email: 'mikethompson@gmail.com' },
    ])
  }, [])

  return { usersList }
}

export default GetUsers