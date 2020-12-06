import React from 'react';
import './style.css';

function button({text,...rest}) {
  return <button className="general-button" {...rest}>{text}</button>;
}

export default button;