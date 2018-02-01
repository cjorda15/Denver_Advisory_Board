import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/App.js';
import registerServiceWorker from './register_service_worker';
import { configureStore } from './config_store';
import { Provider } from 'react-redux';

const history = createHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
