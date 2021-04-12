import React from 'react';

function ButtonComponent({buttonText, buttonType, onClickAction}){

    return(
        <button type="button" className={"mr-2 btn btn-" + buttonType} onClick={onClickAction}>
            {buttonText}
        </button>
    )
}

export default ButtonComponent;