import React, { useEffect } from 'react';
import './style.css'

// import { Container } from './styles';

function Filter(props) {
  useEffect(() => {
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
    <div className="filter-container">
      <input type="text" id="filter" name={props.Name}
          className="filter" placeholder={props.Name} autofocus/>
    </div>
  );
}

export default Filter;