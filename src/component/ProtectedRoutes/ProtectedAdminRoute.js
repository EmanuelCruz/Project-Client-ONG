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
      render={(props) => {
        if (isAdmin) {
          return <Component />;
        } else {
          return (
            <>
              {setTimeout(() => {
                if (props.history.location.pathname.includes('backoffice')) {
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

export default ProtectedAdminRoute;
