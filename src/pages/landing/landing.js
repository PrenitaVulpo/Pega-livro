import React from 'react';
import Card from '../../assets/components/card/card.js';
import Input from '../../assets/components/input/input.js';
import {Link, useHistory} from 'react-router-dom';
import './style.css';


function landing() {
  return (
    <div className="landing-main">
      <h1>Login</h1>
      <Card>
        <Input inputName="user" label="Usuário"/>
        <Input inputName="password" label="Senha" type="password"/>
        <button id="login-button">Logar</button>
        <Link to="/books">debug</Link>
        <Link to="/cadastro" id="link-text">Não tem conta? Casdastre-se!</Link>
      </Card>
    </div>
  );
}

export default landing;