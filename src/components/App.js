import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Burger from './Burger';
import Menu from './Menu';
import LrgNav from './LrgNav';
import Loadable from 'react-loadable';
import '../styles/index.scss';

const Loading = () => <div />;

const LoadLanding = Loadable({
  loader: () => import('./Landing'),
  loading: Loading
});

const LoadFooter = Loadable({
  loader: () => import('./Footer'),
  loading: Loading
});

const LoadLogin = Loadable({
  loader: () => import('./Login'),
  loading: Loading
});

const LoadEvents = Loadable({
  loader: () => import('./Events'),
  loading: Loading
});

const LoadAbout = Loadable({
  loader: () => import('./About'),
  loading: Loading
});

const LoadContact = Loadable({
  loader: () => import('./Contact'),
  loading: Loading
});

const LoadHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});

const LoadProfile = Loadable({
  loader: () => import('./Profile'),
  loading: Loading
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <LrgNav />
        <Burger />
        <LoadLanding />
        <Menu />
        <Switch>
          <Route
            path="/login"
            render={({ history }) => <LoadLogin history={history} />}
          />
          <Route
            path="/events"
            render={({ history }) => <LoadEvents history={history} />}
          />
          <Route
            path="/about"
            render={({ history }) => <LoadAbout history={history} />}
          />
          <Route
            path="/contact"
            render={({ history }) => <LoadContact history={history} />}
          />
          <Route
            path="/profile"
            render={({ history }) => <LoadProfile history={history} />}
          />
          <Route
            path="/"
            render={({ history }) => <LoadHome history={history} />}
          />
          <Route
            path="/*"
            render={({ history }) => <LoadHome history={history} />}
          />
        </Switch>
        <LoadFooter />
      </div>
    );
  }
}

export default App;
