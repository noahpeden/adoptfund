const React = require('react')
const ReactDOM = require('react-dom')
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './styles/homeStyles'
import './styles/profileStyles'
import './styles/loginStyles'

import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import AppContainer from './containers/AppContainer'
import HomeContainer from './containers/HomeContainer'
import FamilyListContainer from './containers/FamilyListContainer'
import FamilyProfileContainer from './containers/FamilyProfileContainer'
import BasicsContainer from './containers/BasicsContainer'
import DonationContainer from './containers/DonationContainer'

import About from './components/About'

import user from './reducers/user-reducer'
import family from './reducers/family-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({ user, family }),
  {
    user: {},
    family: {
      featured: [],
      searched: [],
      selected: null,
      donationFamily: null,
    },
  },
composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='/about' component={About} />
        <Route path='/basics' component={BasicsContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/register' component={RegisterContainer} />
        <Route path='/list' component={FamilyListContainer} />
        <Route path='/profile' component={FamilyProfileContainer} />
        <Route path='/donation' component={DonationContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'))
