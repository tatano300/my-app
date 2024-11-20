import React from 'react';
import '../stylesheets/Button.css';

function Button({text, buttonclick, clickOnTheHandle}){
    return (
        <button
        className={buttonclick ? 'button-click' : 'button-restart'}
        onClick={clickOnTheHandle}>
          {text}
        </button>
    );
}

export default Button;