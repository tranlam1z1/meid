import React from 'react';
import '../css/Button.css';
function Button({ text, onClick, className }) {
    return (
        <button className="custom-button">
            {text}
        </button>
    );
}

export default Button;
