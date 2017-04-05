const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Routes from './routes';
import rootReducer from './reducers';
import './styles.css';

ReactDOM.render(
  <App />,
  document.querySelector('.application'),
);
