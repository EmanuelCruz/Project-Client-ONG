import React from 'react';
import './ProfileScreen.css';
import ButtonComponent from '../../component/profile/ButtonComponent';

function ProfileScreen() {
    const user_data = {
        name: 'Usuario',
        last_name: 'Apellido',
        email: 'sample@mail.com'
    };

    const onEditProfileClick = () => {
        window.alert('Profile edit not funcional.');
    };

    const onDeleteAccountClick = () => {
        if (window.confirm(`Delete Account (Not implemented yet)?`)) {
            window.alert('Account deletion not funcional.');
        }
    };

    return(
        <div>
            <h3>{user_data.name}'s Profile</h3>
            <ul className="container list">
                <li>{user_data.name} {user_data.last_name}</li>
                <li>{user_data.email}</li>
            </ul>
            <div className="flex-row">
                <ButtonComponent buttonText={"Edit Profile"}
                    buttonType={"primary"} onClickAction={onEditProfileClick} />
                <ButtonComponent buttonText={"Delete Account"}
                    buttonType={"danger"} onClickAction={onDeleteAccountClick} />
            </div>
        </div>
    )
}

export default ProfileScreen;