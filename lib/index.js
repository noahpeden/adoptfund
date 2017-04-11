const React = require('react')
const ReactDOM = require('react-dom')
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router'
import rootReducer from './reducers'
import './styles.scss'

import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Basics from './components/Basics'
import Story from './components/Story'
import Expenses from './components/Expenses'

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
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/basics' component={Basics} />
        <Route path='/story' component={Story} />
        <Route path='/expenses' component={Expenses} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/register' component={RegisterContainer} />

      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'))
