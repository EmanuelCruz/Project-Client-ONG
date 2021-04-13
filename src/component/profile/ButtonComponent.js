import React from 'react';
import { Link } from 'react-router-dom';

function ButtonComponent({buttonText, buttonType, onClickAction}){

    return (
            <button
                type="button"
                className={"mr-2 btn btn-" + buttonType}
                onClick={onClickAction}
            >
                {buttonText}
            </button>
    );
}

export default ButtonComponent;