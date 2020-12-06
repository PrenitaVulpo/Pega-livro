import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../assets/components/card/card';
import NavBar from '../../assets/components/usernavbar/navbar';
import Button from '../../assets/components/button/button';
import Api from '../../services/api';
import './style.css';



function Checkout({match}) {
  const [book, setBook] = useState([{
    title: 'loading'
  }])

  const id = match.params.id

  useEffect(() => {
    Api.get(`books/${id}`).then(response=>{
      setBook(response.data)
    }).catch(error=>{
      alert(error.message)
    })
  },[id])

  function handleSubmit(){
  }
  return (
    <div className="main-container">
      <NavBar/>
      <div className="books-container">
        <h1>Alugando livro</h1>
        <Card>
          <div className="form-container">
            <div className="input-edit">
                <label htmlFor="Título">Título: {book.title}</label>
              <div className="input-edit">
                <label htmlFor="Capa">Capa:</label>
                <img alt="capa" src={book.cover} id="cover"/>
              </div>
              <div className="input-edit">
                <label htmlFor="Quantidade disponível">Quantidade disponível: {book.count}</label>
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <Button text="Alugar" onClick={handleSubmit}/>
            <Link to="/home">
              <Button text="Sair sem alugar"/>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Checkout;