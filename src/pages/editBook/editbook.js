import React, { useEffect, useState } from 'react';
import NavBar from '../../assets/components/navbar/navbar';
import Card from '../../assets/components/card/card';
import Button from '../../assets/components/button/button';
import Api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';


function EditBook({match}) {
  const [book, setBook] = useState({
    title: 'loading'
  })
  var id = match.params.id;

  function handleSubmit(){
    alert('submit')
  }


  useEffect(()=>{
    Api.get(`books/${id}`).then(response=>{
      setBook(response.data)
    }).catch(error=>{
      alert(error.message)
    })
  },[id])

  return (
    <div className="main-container">
      <NavBar/>
      <div className="books-container">
        <h1>Editar Livro</h1>
        <Card>
          <div className="form-container">
            <div className="input-edit">
                <label htmlFor="Título">Título:</label>
                <input type="text" value={book.title}/>
              </div>
              <div className="input-edit">
                <label htmlFor="Capa">Capa:</label>
                <textarea type="text" value={book.cover}/>
              </div>
              <div className="input-edit">
                <label htmlFor="Quantidade disponível">Quantidade disponível:</label>
                <input type="number" min="0" value={book.count}/>
              </div>
          </div>
          <div className="buttons-container">
            <Button text="Salvar edições" onClick={handleSubmit}/>
            <Link to="/books">
              <Button text="Sair sem editar"/>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default EditBook;