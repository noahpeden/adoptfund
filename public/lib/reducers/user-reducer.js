const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN' :
      return action
    case 'SIGN_OUT':
      return Object.assign({}, state, action)
    default:
      return state
  }
}

export default user
