import React from 'react';
import './style.css'


function Modal({show, close, book}) {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1':'0'
      }}
    >
      <div className="modal-header">
        <p>Editando um título</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h1>{book.title}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;