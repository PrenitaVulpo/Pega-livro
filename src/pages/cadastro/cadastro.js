import React, {useState} from 'react';
import Api from '../../services/api.js'
import Card from '../../assets/components/card/card.js';
import Input from '../../assets/components/input/input.js';
import {Link, useHistory} from 'react-router-dom';
import './style.css';


function Cadastro() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [warning, setWarning] = useState('');
  const history = useHistory();


  async function handleSubmit(e){
    e.preventDefault()
    let data = `{
      "username": "${user}",
      "password": "${password}",
      "email": "${email}"
    }`
    if(warning === ''){
    await Api.post('/users', data).then(response=>{
      console.log(response.data);
    }).catch(error=>{
      setWarning(error.message)
    })
    } else{
      alert('Atenda aos requisitos pedidos')
    }
  }

  function handlePasswordComparison(pass){
    setPassword2(pass);
    let message = (password === pass) ?  '':'As senhas precisam ser iguais';
    setWarning(message)
  }

  return (
    <div className="cadastro-main">
      <h1>Cadastro</h1>
      <Card>
        <form >
          <Input inputName="usuário" label="Usuário" 
            autoFocus onChange={(e)=>setUser(e.target.value)}/>
          <Input inputName="Senha" label="Senha" 
            type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Input inputName="Confirme a senha" label="Confirme sua senha" 
            type="password" onChange={(e)=>handlePasswordComparison(e.target.value)}/>
          <Input inputName="email" label="E-mail"
            onChange={(e)=>setEmail(e.target.value)}/>
          <div className="warning">{warning}</div>
          <button id="cadastro-button" onClick={e=>handleSubmit(e)} 
            name="cadastrar">Cadastrar</button>
        </form>
        <Link to="/" id="link-text">Já tem conta? Faça login!</Link>
      </Card>
    </div>
  );
}

export default Cadastro;