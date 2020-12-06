import React from 'react';

// import { Container } from './styles';

function UsersFeed() {
  const [users, setUsers] = useState([{
    name: 'loading'
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
        <Filter Name="Pesquisar livros"/>
        <div className="users-cards-container">
          {users.map(user=>{
            console.log(user)
            return(
              <div className="card-item" key={user.id}>
                <Card>
                  <img src={user.cover} alt="capa"/>
                  <p className="title">{user.title}</p>
                  <p className="count">Unidades disponíveis: {user.count}</p>
                  {user.name !== 'loading' ? <div className="icon-container">
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