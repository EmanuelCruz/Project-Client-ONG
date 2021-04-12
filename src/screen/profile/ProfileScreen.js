import React from 'react';
import './ProfileScreen.css';
import ButtonComponent from '../../component/profile/ButtonComponent';
import Swal from 'sweetalert2';
import { CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS, DELETE_CONFIRM_TITLE_PROFILE } from '../../const/const';
import { useHistory } from 'react-router';
import { ConfirmAlertDeleteButtonComponent } from '../../component/Alert/AlertComponent';
import { deleteUser } from '../../services/querys/userServices';
import { connect } from 'react-redux';
import updateIsAuth from "../../store/isAuth/action";
import updateIsAdmin from "../../store/isAdmin/action";
import updateUser from '../../store/user/action';

function ProfileScreen(props) {
    const user_data = props.user.user
    let history = useHistory();

    const onEditProfileClick = () => {
        // window.alert('Profile edit not funcional.');
        // history.push("/edit-profile")
    };
    const onDeleteAccountClick = () => {
        ConfirmAlertDeleteButtonComponent(DELETE_CONFIRM_TITLE_PROFILE).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(CONFIRM, CONFIRM_IS_CONFIRMED, CONFIRM_SUCCESS);
                deleteUser(user_data.id);
                props.updateIsAdmin(false)
                props.updateIsAuth(false)
                history.push("/");
            }
        });
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <h3>{`Perfil de ${user_data.firstName}`}</h3>
            <ul className="container list">
                <li>{user_data.firstName} {user_data.lastName}</li>
                <li>{user_data.email}</li>
            </ul>
            <div className="flex-row">
                <ButtonComponent buttonText={"Editar perfil"}
                    buttonType={"primary"} onClickAction={onEditProfileClick} />
                <ButtonComponent buttonText={"Borrar cuenta"}
                    buttonType={"danger"} onClickAction={onDeleteAccountClick} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{updateIsAdmin,updateIsAuth,updateUser})(ProfileScreen);