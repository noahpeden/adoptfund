const React = require('react')
const ReactDOM = require('react-dom')
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router'
import rootReducer from './reducers'
import './styles.scss'

import LoginContainer from './containers/LoginContainer'
import App from './components/App'
import Home from './components/Home'

import user from './reducers/user-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({ user }),
{
  user: {},
},
composeEnhancers(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LoginContainer} />
        {/* <IndexRoute component={Home} /> */}
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'))
