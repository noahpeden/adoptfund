import fetch from 'isomorphic-fetch'
import { Link, browserHistory } from 'react-router'

export const signIn = (email, password, userName) => {
  return {
    type: 'SIGN_IN',
    email,
    password,
    userName,
  }
}

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    return fetch('/api/v1/users', {
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

export const addUser = (userName, email, password) => {
  return (dispatch) => {
    return fetch('/api/v1/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, password }),
    })
  }
}
