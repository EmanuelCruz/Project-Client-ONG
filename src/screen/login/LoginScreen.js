import React from 'react'
import { connect } from 'react-redux'
import LoginFormComponent from '../../component/login/LoginFormComponent'
import updateIsAuth from "../../store/isAuth/action";

const LoginScreen = (props) => {
  console.log(props)
  return (
    <div>
      <LoginFormComponent />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.isAuth
  }
}

export default connect(mapStateToProps)(LoginScreen);
