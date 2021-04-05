import React from "react";
import { Route } from "react-router-dom";
import NotAllowedRedirect from "./NotAllowedRedirect";

const ProtectedUserRoute = ({
  isAuth: isAuth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <>
              {setTimeout(() => {
                if (props.history.location.pathname.includes('profile')) {
                  props.history.push("/")
                }
              }, 5000)}
              <NotAllowedRedirect />
            </>
          );
        }
      }}
    />
  );
};

export default ProtectedUserRoute;
