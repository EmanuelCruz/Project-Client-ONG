import React from "react";
import { Route } from "react-router-dom";
import NotAllowedRedirect from "./NotAllowedRedirect";
import { connect } from 'react-redux'

const ProtectedUserRoute = ({
  isAuth,
  component: Component,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth.isAuth) {
          return <Component />;
        } else {
          return (
            <>
              <NotAllowedRedirect pathname={'/profile'} />
            </>
          );
        }
      }}
    />
  );
};


function mapStateToProps(state) {
  return {
    isAuth: state.isAuth
  }
}

export default connect(mapStateToProps)(ProtectedUserRoute);