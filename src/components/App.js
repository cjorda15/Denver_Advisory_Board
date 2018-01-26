import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Burger from './Burger';
import Menu from './Menu';
import Landing from './Landing';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import '../styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Burger />
        <Landing />
        <Menu />
        <Switch>
          <Route path="/projects" render={({ history }) => <Projects />} />
          <Route path="/about" render={({ history }) => <About />} />
          <Route path="/contact" render={({ history }) => <Contact />} />
          <Route path="/" render={({ history }) => <Home />} />
          <Route path="/*" render={({ history }) => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
