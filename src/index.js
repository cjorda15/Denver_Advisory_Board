import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/App.js';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Route to="/" component={App} />
  </Router>,
  document.getElementById('root')
);
