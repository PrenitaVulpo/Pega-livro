import React, { useEffect, useState } from 'react';
import NavBar from '../../assets/components/navbar/navbar';
import Card from '../../assets/components/card/card';
import Api from '../../services/api';
import Edit from '../../assets/images/edit.svg';
import Delete from '../../assets/images/delete.svg';
import './style.css';

// import { Container } from './styles';

function BooksFeed() {
  const [books, setBooks] = useState([])
  


  useEffect(() => {
    Api.get('books').then(response=>{
      setBooks(response.data)
    }).catch(error=>{
      alert(error.message)
    })

    const filterInput = document.querySelector('#filter')
    filterInput.addEventListener('input', event =>{
      const inputValue = event.target.value.toLowerCase()
      const posts = document.querySelectorAll('.card-item')
    
      posts.forEach(post => {
        const postTitle = post.querySelector('.title').textContent.toLowerCase()  
        if (postTitle.includes(inputValue)){
          post.style.display = 'flex'
          return
        }
        post.style.display = 'none'
      })
    })
  },[])

  return (
    <div className="main-container">
      <NavBar/>
      <div className="books-container">
        <div className="filter-container">
          <input type="text" id="filter"
              className="filter" placeholder="Pesquisar livros" autofocus/>
        </div>
        <div className="books-cards-container">
          {books.map(book=>{
            console.log(book)
            return(
              <div className="card-item" key={book.id}>
                <Card>
                  <img src={book.cover} alt="capa"/>
                  <p className="title">{book.title}</p>
                  <p className="count">Unidades disponíveis: {book.count}</p>
                  <div className="icon-container">
                    <img src={Edit} alt="editar" className="edit"/>
                    <img src={Delete} alt="deletar" className="delete"/>
                  </div>
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