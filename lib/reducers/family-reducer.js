const featured = (state = [], action) => {
  switch (action.type) {
    case 'FEATURED':
      return Object.assign({}, state, { featured: action })
    case 'SEARCHED':
      return Object.assign({}, state, { searched: action })
    default:
      return state
  }
}

export default featured
