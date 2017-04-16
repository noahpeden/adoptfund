const featured = (state = [], action) => {
  switch (action.type) {
    case 'FEATURED':
      return Object.assign({}, state, { featured: action })
    case 'SEARCHED':
      return Object.assign({}, state, { searched: action })
    case 'SELECTED':
      return Object.assign({}, state, { selected: action })
    case 'DONATION-FAMILY':
      return Object.assign({}, state, { donationFamily: action })
    default:
      return state
  }
}

export default featured
