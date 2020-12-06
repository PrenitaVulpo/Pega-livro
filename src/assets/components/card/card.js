import React from 'react';
import './style.css'

// import { Container } from './styles';

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

export default Card;