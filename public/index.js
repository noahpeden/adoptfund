const React = require('react')
const ReactDOM = require('react-dom')
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import LoginContainer from './lib/containers/LoginContainer'
import RegisterContainer from './lib/containers/RegisterContainer'
import AppContainer from './lib/containers/AppContainer'
import HomeContainer from './lib/containers/HomeContainer'
import FamilyListContainer from './lib/containers/FamilyListContainer'
import FamilyProfileContainer from './lib/containers/FamilyProfileContainer'
import BasicsContainer from './lib/containers/BasicsContainer'

import About from './lib/components/About'

import user from './lib/reducers/user-reducer'
import family from './lib/reducers/family-reducer'

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
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'))
