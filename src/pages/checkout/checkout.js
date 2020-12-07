import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../assets/components/card/card';
import NavBar from '../../assets/components/usernavbar/navbar';
import Button from '../../assets/components/button/button';
import Api from '../../services/api';
import {connect} from 'react-redux';
import './style.css';



function Checkout({username, match}) {
  const [book, setBook] = useState({
    title: 'loading'
  })
  const [date,setDate] = useState('')

  const id = match.params.id
  const name = username
  const history = useHistory();

  useEffect(() => {
    Api.get(`books/${id}`).then(response=>{
      console.log(response.data)
      setBook(response.data)
    }).catch(error=>{
      alert(error.message)
    })
  },[id])

  async function handleSubmit(){
    console.log("livro",book)

    let data = {
      "user_name": name,
      "book_name": book.title,
      "date_rental": date
    }
    await Api.post('rents', data)
    history.push('/home')
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
              <input type="date" onChange={(e)=>setDate(e.target.value)}/>
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

export default connect(state=>({username: state.user}))(Checkout);