const featured = (state = [], action) => {
  switch (action.type) {
    case 'FEATURED':
      return Object.assign({}, state, { featured: action })
    default:
      return state
  }
}

export default featured
