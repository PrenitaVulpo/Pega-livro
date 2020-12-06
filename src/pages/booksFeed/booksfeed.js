import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../assets/components/navbar/navbar';
import Card from '../../assets/components/card/card';
import Filter from '../../assets/components/filter/filter';
import Api from '../../services/api';
import Edit from '../../assets/images/edit.svg';
import Delete from '../../assets/images/delete.svg';
import './style.css';


function BooksFeed() {
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
            console.log(book)
            return(
              <div className="card-item" key={book.id}>
                <Card>
                  {book.title !== 'loading' ?
                    <>
                    <img src={book.cover} alt="capa"/>
                    <p className="title">{book.title}</p>
                    <p className="count">Unidades disponíveis: {book.count}</p>
                    <div className="icon-container">
                      <Link to={`/books/${book.id}`}>
                        <img src={Edit} alt="editar" className="edit"/>
                      </Link>
                      <img src={Delete} alt="deletar" className="delete"/>
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

export default BooksFeed;