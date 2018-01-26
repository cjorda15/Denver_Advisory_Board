import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Burger from './Burger';
import Menu from './Menu';
import Landing from './Landing';
import Projects from './Projects';
import About from './About';

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
          <Route path="/" render={({ history }) => <div> </div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
