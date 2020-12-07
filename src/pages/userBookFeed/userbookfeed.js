import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../assets/components/usernavbar/navbar';
import Card from '../../assets/components/card/card';
import Filter from '../../assets/components/filter/filter';
import Api from '../../services/api';
import Button from '../../assets/components/button/button';
import './style.css';


function UserBookFeed() {
  const [books, setBooks] = useState([{
    title: 'loading'
  }])

  useEffect(() => {
    Api.get('books').then(response=>{
      setBooks(response.data)
    }).catch(error=>{
      alert(error.message)
    })
  },[])

  return (
    <div className="main-container">
      <NavBar/>
      <div className="books-container">
        <Filter Name="Pesquisar livros"/>
        <div className="books-cards-container">
          {books.map(book=>{
            return(
              <div className="card-item" key={book.id}>
                <Card>
                  {book.title !== 'loading' && book.count > 0 ?
                    <>
                    <img src={book.cover} alt="capa"/>
                    <p className="title">{book.title}</p>
                    <p className="count">Unidades disponíveis: {book.count}</p>
                    <div className="icon-container">
                      <Link to={`checkout/${book.id}`}>
                        <Button text="Alugar esse livro" id="button"/>
                      </Link>
                    </div>
                    </>
                  : <p className="title">{book.title}</p>}
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserBookFeed;