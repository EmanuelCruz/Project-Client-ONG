import React from 'react';
import './ProfileScreen.css';
import ButtonComponent from '../../component/profile/ButtonComponent';
import { connect } from 'react-redux'

function ProfileScreen({ user }) {
    const user_data = user.user

    const onEditProfileClick = () => {
        window.alert('Profile edit not funcional.');
    };

    const onDeleteAccountClick = () => {
        if (window.confirm(`Delete Account (Not implemented yet)?`)) {
            window.alert('Account deletion not funcional.');
        }
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

export default connect(mapStateToProps)(ProfileScreen);