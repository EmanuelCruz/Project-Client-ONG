import React from "react";
import { Route } from "react-router-dom";
import NotAllowedRedirect from "./NotAllowedRedirect";
import { connect } from 'react-redux'

const ProtectedAdminRoute = ({
  isAdmin,
  component: Component,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={() => {
        if (isAdmin.isAdmin) {
          return <Component />;
        } else {
          return (
            <>
              <NotAllowedRedirect pathname={'/backoffice'} />
            </>
          );
        }
      }}
    />
  );
};


function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin
  }
}

export default connect(mapStateToProps)(ProtectedAdminRoute);