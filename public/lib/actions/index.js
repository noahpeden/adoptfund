import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'

export const signIn = (data) => {
  return {
    type: 'SIGN_IN',
    data: data[0],
  }
}

export const featured = (featured) => {
  return {
    type: 'FEATURED',
    featured,
  }
}

export const searched = (searchedFamily) => {
  return {
    type: 'SEARCHED',
    searchedFamily,
  }
}

export const storeSelected = (info) => {
  console.log(info)
  return {
    type: 'SELECTED',
    info,
  }
}

export const saveFamily = (familyId) => {
  return {
    type: 'DONATION-FAMILY',
    familyId,
  }
}

export const familyDonations = (donations) => {
  return {
    type: 'FAMILY-DONATIONS',
    donations,
  }
}

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(data => data.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
        } else {
          dispatch(signIn(data))
          browserHistory.push('/')
        }
      })
      .catch(err => alert('Email and Password do not match'))
  }
}

export const addUser = (firstName, lastName, email, password) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then(data => data.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
        } else {
          dispatch(signIn(data))
          browserHistory.push('/')
        }
      })
      .catch(err => console.log(err))
  }
}

export const createFamily = (title, location, name, expiration, story, links, cost) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/family', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, location, name, expiration, story, links, cost }),
    })
    .then(data => data.json())
    .then(data => dispatch(storeSelected(data[0])))
    .then(data => browserHistory.push('/profile'))
    .catch(err => console.log(err))
  }
}

export const featuredCampaigns = () => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/family?limit=6')
    .then(data => data.json())
    .then(data => {
      dispatch(featured(data))
    })
    .catch(err => console.log(err))
  }
}

export const searchCampaigns = (familyName) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/family/' + familyName)
    .then(data => data.json())
    .then(data => {
      dispatch(searched(data))
    })
    .catch(err => console.log(err))
  }
}

export const sendDonation = (first, last, email, donation, familyId) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/donation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first, last, email, donation, familyId }),
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
}

export const grabDonations = (familyId) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/donation/' + familyId)
    .then(donations => donations.json())
    .then(donations => dispatch(familyDonations(donations)))
    .catch(err => console.log(err))
  }
}
