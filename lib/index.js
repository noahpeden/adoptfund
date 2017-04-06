const React = require('react')
const ReactDOM = require('react-dom')
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import rootReducer from './reducers'
import './styles.scss'

import App from './components/App'
import HeroSection from './components/HeroSection'
import About from './components/About'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HeroSection} />
      </Route>
      <Route path='/about' component={About} />
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.application'))
