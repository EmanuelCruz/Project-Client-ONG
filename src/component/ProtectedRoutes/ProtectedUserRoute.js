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
      render={(props) => {
        if (isAuth.isAuth) {
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


function mapStateToProps(state) {
  return {
    isAuth: state.isAuth
  }
}

export default connect(mapStateToProps)(ProtectedUserRoute);