import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Burger from './Burger';
// import Menu from './Menu';
// import Landing from './Landing';
// import About from './About';
// import Contact from './Contact';
// import Home from './Home';
// import LrgNav from './LrgNav';
// import Footer from './Footer';
// import Login from './Login';
// import Events from './Events';
import Loadable from 'react-loadable';
import '../styles/index.scss';

const Loading = () => <div />;

const LoadLrgNav = Loadable({
  loader: () => import('./LrgNav'),
  loading: Loading
});

const LoadLanding = Loadable({
  loader: () => import('./Landing'),
  loading: Loading
});

const LoadBurger = Loadable({
  loader: () => import('./Burger'),
  loading: Loading
});

const LoadMenu = Loadable({
  loader: () => import('./Menu'),
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

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <LoadLrgNav />
        <LoadBurger />
        <LoadLanding />
        <LoadMenu />
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
