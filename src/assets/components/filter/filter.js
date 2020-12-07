import React, { useEffect } from 'react';
import './style.css'

// import { Container } from './styles';

function Filter(props,{...rest}) {
  useEffect(() => {
    const filterInput = document.querySelector('#filter')
    filterInput.addEventListener('input', event =>{
      const inputValue = event.target.value.toLowerCase()
      const posts = document.querySelectorAll('.card-item')
    
      posts.forEach(post => {
        const postTitle = post.querySelector('.title').textContent.toLowerCase()  
        const postBody = post.querySelector('.count').textContent.toLowerCase()  
        if (postTitle.includes(inputValue) || postBody.includes(inputValue)){
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
          className="filter" placeholder={props.Name} autoFocus value={props.Value}/>
    </div>
  );
}

export default Filter;