const donations = (state = {}, action) => {
  switch (action.type) {
    case 'FAMILY-DONATIONS':
      return Object.assign({}, { donations: action })
    default:
      return state
  }
}

export default donations
