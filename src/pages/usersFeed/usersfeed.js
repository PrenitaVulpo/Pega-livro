import React, { useEffect, useState } from 'react';
import Card from '../../assets/components/card/card';
import Filter from '../../assets/components/filter/filter';
import NavBar from '../../assets/components/navbar/navbar';
import Api from '../../services/api';
import Edit from '../../assets/images/edit.svg';
import Delete from '../../assets/images/delete.svg';
import './style.css'


function UsersFeed() {
  const [users, setUsers] = useState([{
    name: 'loading',
    email: 'loading',
  }])

  useEffect(() => {
    Api.get('users').then(response=>{
      setUsers(response.data)
    }).catch(error=>{
      alert(error.message)
    })
  },[])

  return (
    <div className="main-container">
      <NavBar/>
      <div className="users-container">
        <Filter Name="Pesquisar usuário"/>
        <div className="users-cards-container">
          {users.map(user=>{
            return(
              <div className="card-item" key={user.id}>
                <Card>
                  <p className="title">Nome de usuário: {user.name}</p>
                  <p className="count">email: {user.email}</p>
                  {user.email !== 'loading' ? <div className="icon-container">
                    <img src={Edit} alt="editar" className="edit"/>
                    <img src={Delete} alt="deletar" className="delete"/>
                  </div> 
                  : null}
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UsersFeed;