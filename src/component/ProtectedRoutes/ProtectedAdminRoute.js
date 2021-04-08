import React from "react";
import { Route } from "react-router-dom";
import NotAllowedRedirect from "./NotAllowedRedirect";

const ProtectedAdminRoute = ({
  isAdmin: isAdmin,
  component: Component,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={() => {
        if (isAdmin) {
          return <Component />;
        } else {
          return (
            <>
              <NotAllowedRedirect />
            </>
          );
        }
      }}
    />
  );
};

export default ProtectedAdminRoute;
