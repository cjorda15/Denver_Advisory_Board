import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Burger from './Burger';
import Menu from './Menu';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import LrgNav from './LrgNav';
import Footer from './Footer';
import Login from './Login';
import '../styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <LrgNav />
        <Burger />
        <Landing />
        <Menu />
        <Switch>
          <Route path="/login" render={({ history }) => <Login />} />
          <Route path="/about" render={({ history }) => <About />} />
          <Route path="/contact" render={({ history }) => <Contact />} />
          <Route path="/" render={({ history }) => <Home />} />
          <Route path="/*" render={({ history }) => <Home />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
