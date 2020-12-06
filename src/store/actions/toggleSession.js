export function toggleLogin(user, token){
  return{
    type: 'TOGGLE_LOGIN',
    user, 
    token

  }
}

export function toggleLogout(user, token){
  return{
    type: 'TOGGLE_LOGOUT',
    user, 
    token
  }
}