const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN' :
      return action
    // case 'REGISTER':
    //   return { data: action }
    default:
      return state
  }
}

export default user
