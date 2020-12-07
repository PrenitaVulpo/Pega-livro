import React, { useEffect, useState } from 'react';
import NavBar from '../../assets/components/usernavbar/navbar';
import Card from '../../assets/components/card/card';
import {connect} from 'react-redux';
import Filter from '../../assets/components/filter/filter';
import Api from '../../services/api';


function MyBooks({username}) {
  const [rents, setRents] = useState([{
    "user_name": "loading",
    "date_rental": "loading",
    "id": 0
  }])
  const name = username

  async function apiCall(){
    await Api.get('rents').then(response=>{
      setRents(response.data)
    }).catch(error=>{
      alert(error.message)
    })
  }

  useEffect(() => {
    apiCall()
  },[])

  return  (
    <div className="main-container">
    <NavBar/>
    <div className="books-container">
      <Filter Name="Pesquisar reservas" Value={localStorage.getItem("user")}/>
      <div className="books-cards-container">
        {rents.map(rent=>{
          return(
            <div className="card-item" key={rent.id}>
              <Card>
                {rent.user_name !== 'loading' ?
                  <>
                  <p className="title">{rent.user_name}</p>
                  <p className="title">Livro: {rent.book_name}</p>
                  <p className="count">Reserva feita em: {rent.date_rental}</p>
                  </>
                : <p className="title">{rent.title}</p>}
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  </div>
  );
}

export default connect(state=>({username: state.user}))(MyBooks);