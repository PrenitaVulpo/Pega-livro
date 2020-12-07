import React, { useState } from 'react';
import NavBar from '../../assets/components/navbar/navbar';
import Card from '../../assets/components/card/card';
import Button from '../../assets/components/button/button';
import Api from '../../services/api';
import './style.css';
import { Link, useHistory } from 'react-router-dom';


function AddBook() {
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [count, setCount] = useState(0);
  const history = useHistory();

  async function handleAddBook(){
    let date = new Date()
    let newBook = {
      "createdAt": `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      "title": title,
      "cover": cover,
      "count": count
    }
    Api.post(`books`, newBook).then(response=>{
      history.goBack()
    }).catch(error=>{
      alert(error.message)
    })
  }

  return (
    <div className="main-container">
      <NavBar/>
      <div className="books-container">
        <h1>Editar Livro</h1>
        <Card>
          <div className="form-container">
            <div className="input-edit">
                <label htmlFor="Título">Título:</label>
                <input type="text" placeholder="Nome do livro" 
                  onChange={(e)=>setTitle(e.target.value)}/>
              </div>
              <div className="input-edit">
                <label htmlFor="Capa">Capa:</label>
                <textarea type="text" placeholder="cole o link do arquivo aqui"
                  onChange={(e)=>setCover(e.target.value)}/>
              </div>
              <div className="input-edit">
                <label htmlFor="Quantidade disponível">Quantidade disponível:</label>
                <input type="number" min="0" onChange={(e)=>setCount(e.target.value)}/>
              </div>
          </div>
          <div className="buttons-container">
            <Button text="Salvar edições" onClick={handleAddBook}/>
            <Link to="/books">
              <Button text="Sair sem editar"/>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AddBook;