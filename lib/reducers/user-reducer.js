const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN' :
      return {
        email: action.email,
        password: action.password,
        userName: action.userName,
      }
    case 'REGISTER' :
      return {
        newUserFirstName: action.newUserFirstName,
        newUserLastName: action.newUserLastName,
        newUserEmail: action.newUserEmail,
        newUserPassword: action.newUserPassword,
      }
    default:
      return state
  }
}

export default user
