export function toggleLogin(user, token, user_type){
  return{
    type: 'TOGGLE_LOGIN',
    user, 
    token,
    user_type

  }
}

export function toggleLogout(user, token){
  return{
    type: 'TOGGLE_LOGOUT',
    user, 
    token
  }
}