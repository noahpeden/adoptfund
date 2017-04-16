const React = require('react')
const ReactDOM = require('react-dom')
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router'
import rootReducer from './reducers'

import './styles/homeStyles'
import './styles/profileStyles'
import './styles/loginStyles'
import './styles/registerStyles'

import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import AppContainer from './containers/AppContainer'
import Home from './containers/HomeContainer'

import About from './components/About'
import Basics from './components/Basics'

import user from './reducers/user-reducer'
import family from './reducers/family-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({ user, family }),
  {
    user: {},
    family: {
      featured: [],
      searched: [],
    },
  },
composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/basics' component={Basics} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/register' component={RegisterContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'))
