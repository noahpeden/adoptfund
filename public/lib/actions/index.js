import fetch from 'isomorphic-fetch'
import { Link, browserHistory } from 'react-router'

export const signIn = (email, password) => {
  return {
    type: 'SIGN_IN',
    email,
    password,
  }
}

export const register = (newUserFirstName, newUserLastName, newUserEmail, newUserPassword) => {
  return {
    type: 'REGISTER',
    newUserFirstName,
    newUserLastName,
    newUserEmail,
    newUserPassword,
  }
}
export const featured = (featured) => {
  return {
    type: 'FEATURED',
    featured
  }
}

export const searched = (searchedFamily) => {
  return {
    type: 'SEARCHED',
    searchedFamily
  }
}

export const storeSelected = (info) => {
  return {
    type: 'SELECTED',
    info
  }
}

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(data => data.json())
      .then(data => dispatch(signIn(email, password, data.data)))
      .then(data => browserHistory.push('/'))
      .catch(err => alert('Email and Password do not match'))
  }
}

export const addUser = (firstName, lastName, email, password) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    })
      .then(data => data.json())
      .then(data => dispatch(register( firstName, lastName, email, password, data.data)))
      .then(data => browserHistory.push('/'))
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
    .then(data => console.log(data))
  }
}

export const featuredCampaigns = () => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/family?limit=6')
    .then(data => data.json())
    .then(data => {
      dispatch(featured(data))})
    .catch(err => console.log(err))
  }
}

export const searchCampaigns = (familyName) => {
  return (dispatch) => {
    return fetch('https://adoptfund-api.herokuapp.com/api/v1/family/' + familyName)
    .then(data => data.json())
    .then(data => {
      dispatch(searched(data))})
    .catch(err => console.log(err))
  }
}
