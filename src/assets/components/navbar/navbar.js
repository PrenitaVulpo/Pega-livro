import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function NavBar() {
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
        <Link to="/books">
          <div className="asside-content">
            Locações
          </div>
        </Link>
      </aside>
    </div>
  )
}

export default NavBar;