<<<<<<< HEAD
import React from "react";

function ProtectedUserRoute() {
  return <div></div>;
}

export default ProtectedUserRoute;
=======
import React from 'react';
import { Route } from 'react-router-dom';
import NotAllowedRedirect from './NotAllowedRedirect';

const ProtectedUserRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if (isAuth) {
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

export default ProtectedUserRoute;
>>>>>>> 78d3ac1593586f8536f6bb39c53393556546ffb8
