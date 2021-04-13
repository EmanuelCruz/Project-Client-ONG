import React from 'react';
import { Link } from 'react-router-dom';

const NotRegisteredUser = () => {
  return (
    <div>
      <p>Si usted no tiene cuenta, puede hacer una <Link to="/signup">aquí.</Link></p>
    </div>
  )
}

export default NotRegisteredUser
