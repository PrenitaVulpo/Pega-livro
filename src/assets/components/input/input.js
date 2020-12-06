import React from 'react';
import './style.css'

const Input = ({label, inputName, ...rest}) =>{
    return(
        <div className="input-block">
            <label htmlFor={inputName}>{label}</label>
            <input id={inputName} {...rest}/>
        </div>
    );
}

export default Input;