const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN' :
      return {
        email: action.email,
        password: action.password,
        userName: action.userName,
      }
    default:
      return state;
  }
}

export default user;
