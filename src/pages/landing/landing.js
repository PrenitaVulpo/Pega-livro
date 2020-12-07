import React, { useState } from 'react';
import Card from '../../assets/components/card/card.js';
import Input from '../../assets/components/input/input.js';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import Api from '../../services/api';
import * as LoginAction from '../../store/actions/toggleSession';
import './style.css';


function Landing({username, header, dispatch}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSubmit(){
    let holder = null
    await Api.get(`users/?name=${login}`).then(response=>{
      holder = response.data[0]
    }).catch(error=>{
      alert(error.message)
    })
    if (holder.password === password){
      localStorage.setItem("token", holder.token);
      localStorage.setItem("user", holder.name);
      dispatch(LoginAction.toggleLogin(login,holder.token, holder.user_type));
      console.log(login)
      if(holder.user_type === 1){
        history.push('/books')
      } else{
        history.push('/home')
      }
    } else {
      alert("A senha não confere")
    }
  }

  return (
    <div className="landing-main">
      <h1>Login</h1>
      <Card>
        <Input inputName="user" label="Usuário" onChange={(e)=>setLogin(e.target.value)}/>
        <Input inputName="password" label="Senha" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button id="login-button" onClick={handleSubmit}>Logar</button>
        <Link to="/books">debug</Link>
        <Link to="/cadastro" id="link-text">Não tem conta? Casdastre-se!</Link>
      </Card>
    </div>
  );
}

export default connect(state=>({username: state.user, header: state.header}))(Landing);