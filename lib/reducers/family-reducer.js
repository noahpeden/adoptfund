const featured = (state = [], action) => {
  switch (action.type) {
    case 'FEATURED':
      return action
    default:
      return state
  }
}

export default featured
