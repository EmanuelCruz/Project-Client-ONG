<<<<<<< HEAD
import React from "react";

function ProtectedAdminRoute() {
  return <div></div>;
}

export default ProtectedAdminRoute;
=======
import React from 'react';
import { Route } from 'react-router-dom';
import NotAllowedRedirect from './NotAllowedRedirect';

const ProtectedAdminRoute = ({ isAdmin: isAdmin, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if (isAdmin) {
        return <Component />
      } else {
        return (
          <>
            {setTimeout(() => {
              props.history.push('/');
            }, 5000)}
            <NotAllowedRedirect />
          </>
        )
      }
    }} />
  )
}

export default ProtectedAdminRoute;
>>>>>>> 78d3ac1593586f8536f6bb39c53393556546ffb8
