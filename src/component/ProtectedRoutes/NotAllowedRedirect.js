import React from 'react';
import { Link } from 'react-router-dom';

const NotAllowedRedirect = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <p>No tienes los permisos para ver esta sección</p>
      <p>Serás redirigido al Home en 5 segundos...</p>
      <p>Si no eres redirigido, haz click <Link to="/">aquí.</Link></p>
    </div>
  )
}

export default NotAllowedRedirect;