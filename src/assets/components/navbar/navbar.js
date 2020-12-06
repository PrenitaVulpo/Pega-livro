import React from 'react';
import './style.css';


function NavBar() {
  return (
    <div>
      <aside className="asside-main">
        <div className="asside-content">Livros</div>
        <div className="asside-content">Usuários</div>
        <div className="asside-content">Locações</div>
      </aside>
    </div>
  )
}

export default NavBar;