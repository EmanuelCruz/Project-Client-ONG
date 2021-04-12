import React from 'react';
import { useHistory } from "react-router-dom";
import updateIsAuth from "../../store/isAuth/action";
import updateIsAdmin from "../../store/isAdmin/action";
import updateUser from "../../store/user/action";
import { connect } from 'react-redux';

const LogoutScreen = (props) => {
  let history = useHistory();
  const logout = () => {
    if (window.confirm('Deseas cerrar sesión?')) {
      props.updateIsAuth(false);
      props.updateIsAdmin(false);
      props.updateUser([])
      history.push("/");
    }
  }
  return (
    <div>
      <h3 style={{ margin: '30px' }}>Cerrar sesión</h3>
      <button className="btn btn-primary" onClick={() => logout()}>Deslogear</button>
    </div>
  )
}


export default connect(null, { updateIsAuth, updateIsAdmin, updateUser })(LogoutScreen);

