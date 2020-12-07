import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import * as LoginAction from '../../../store/actions/toggleSession';
import './style.css';


function NavBar({dispatch}) {

  const history = useHistory();
  let user = '';
  let token = '';

  async function handleExit(){
    await localStorage.removeItem("token");
    await dispatch(LoginAction.toggleLogin(user,token))
    history.push('/');
  }
  return (
    <div>
      <aside className="asside-main">
        <Link to="/books">
          <div className="asside-content">
            Livros
          </div>
        </Link>
        <Link to="/users">
          <div className="asside-content">
            Usuários
          </div>
        </Link>
        <Link to="/createBook">
          <div className="asside-content">
            Adicionar livro
          </div>
        </Link>
        <div className="asside-content" onClick={handleExit}>
            Sair
        </div>
      </aside>
    </div>
  )
}

export default connect(state=>({}) )(NavBar);