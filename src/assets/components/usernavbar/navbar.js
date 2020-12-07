import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as LoginAction from '../../../store/actions/toggleSession';
import {connect} from 'react-redux';
import './style.css';


function NavBar({dispatch}) {
  const history = useHistory();
  let user = '';
  let token = '';

  async function handleExit(){
    await localStorage.removeItem("token");
    await localStorage.removeItem("user");
    await dispatch(LoginAction.toggleLogin(user,token))
    history.push('/');
  }
  return (
    <div>
      <aside className="asside-main">
        <Link to="/home">
          <div className="asside-content">
            Livros
          </div>
        </Link>
        <Link to="/mybooks">
          <div className="asside-content">
            Locações
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