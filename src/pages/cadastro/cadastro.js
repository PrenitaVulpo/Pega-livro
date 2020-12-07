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

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function checkFields(){
    const notEmpty = (user && password && email)
    if (notEmpty && (password === password2)){
      return true
    }
    return false
  }

  async function handleSubmit(e){
    e.preventDefault()
    let date = new Date();
    let data = {
      "createdAt": `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T${date.getHours()}`+
      `:${date.getMinutes()}:${date.getSeconds()}`,
      "name": `${user}`,
      "password": `${password}`,
      "email": `${email}`,
      "token": `${makeid(8)}-${makeid(4)}-${makeid(4)}-${makeid(4)}-c7b6ee95561e`
    }
    if(checkFields()){
    await Api.post('/users', data).then(response=>{
      history.push('/')
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