import {createStore} from 'redux';

const INITIAL_STATE = {
  user_type: 0,
  user: 'No user',
  header: 'No token'
}


function reducer(state = INITIAL_STATE, action){

  return {
    ...state,
    user: action.user, 
    header: action.token
  }
}

const store = createStore(reducer);

export default store;