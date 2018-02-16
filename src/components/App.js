import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Burger from './Burger';
import Menu from './Menu';
import LrgNav from './LrgNav';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
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

const LoadAddEvent = Loadable({
  loader: () => import('./AddEvent'),
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

  componentWillMount() {
    fetch('/api/v1/user', {
      method: 'GET',
      credentials: 'include'
    })
      .then(data => data.json())
      .then(data => {
        if (data.name === 'JsonWebTokenError') {
          return;
        }
        this.props.handleUser(data);
      })
      .catch(err => console.log(err));
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
            path="/addevent"
            render={({ history }) => <LoadAddEvent history={history} />}
          />
          <Route
            path="/profile"
            render={({ history }) => {
              return this.props.user ? (
                <LoadProfile history={history} />
              ) : (
                <Redirect to="/" />
              );
            }}
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

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUser: input => {
      dispatch(updateUser(input));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
