import React from 'react';
import { useHistory } from "react-router-dom";
import updateIsAuth from "../../store/isAuth/action";
import { connect } from 'react-redux';

const LogoutScreen = (props) => {
  let history = useHistory();
  const logout = () => {
    props.updateIsAuth(false)
    history.push("/");
  }
  return (
    <div>
      <button onClick={() => logout()}>Deslogear</button>
    </div>
  )
}


export default connect(null, { updateIsAuth })(LogoutScreen);

