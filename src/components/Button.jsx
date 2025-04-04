import React from 'react';
import '../asset/css/Button.css';
function Button({ text, className }) {
    return (
        <button className={`custom-button ${className}`} >
            {text}
        </button>
    );
}

export default Button;
