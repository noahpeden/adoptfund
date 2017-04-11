const featured = (state = [], action) => {
  switch (action.type) {
    case 'FEATURED':
      return Object.assign({}, state, { featured: action })

    case 'NEW_BASICS':
      return {
        title: action.title,
        location: action.location,
        expiration: action.expiration,
      }
    default:
      return state
  }
}

export default featured
