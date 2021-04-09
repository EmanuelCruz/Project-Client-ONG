import React from 'react';
import { Link } from 'react-router-dom';
import HighlightOff from '@material-ui/icons/HighlightOff';

const NotAllowedRedirect = ({ pathname }) => {
  setTimeout(function () {
    if (window.location.pathname === pathname) {
      window.location.replace('/');
    }
  }, 5000);
  return (
    <div style={{ marginTop: '20px' }}>
      <HighlightOff color="secondary" style={{ fontSize: '80px', marginBottom: '20px' }} />
      <p>No tienes los permisos para ver esta sección</p>
      <p>Serás redirigido al Home en 5 segundos...</p>
      <p>Si no eres redirigido, haz click <Link to="/">aquí.</Link></p>
    </div>
  )
}

export default NotAllowedRedirect;