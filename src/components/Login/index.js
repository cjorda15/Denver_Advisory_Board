import React, { Component } from 'react';
import Scroll from 'react-scroll';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import RadioButtons from './RadioButtons';
import './login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      show: 'signup',
      username: '',
      password: '',
      retypePassword: '',
      email: '',
      showError: false,
      errorMessage: '',
      loading: false
    };
  }

  scrollTop() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('landing-svg', {
        duration: 0,
        delay: 0,
        smooth: false
      });
    }, 0);
  }

  scrollAfterSearch(input) {
    setTimeout(() => {
      return Scroll.scroller.scrollTo(input, {
        duration: 1000,
        delay: 70,
        smooth: true
      });
    }, 100);
  }

  handleRadio(e) {
    this.setState({
      show: e.target.value,
      username: '',
      password: '',
      retypePassword: '',
      email: ''
    });
  }

  handleInput(e, type) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.show == 'signup' ? this.signup() : this.login();
  }

  signup() {
    const { username, password, retypePassword, email } = this.state;
    const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ((!username, !password, !retypePassword, !email)) {
      this.handleError('complete the form please');
      return;
    }

    if (password !== retypePassword) {
      this.handleError('passwords not the same');
      return;
    }

    if (username.length < 5) {
      this.handleError('username must be at least 5 characters');
      return;
    }

    if (password.length < 5) {
      this.handleError('username must be at least 5 characters');
      return;
    }

    if (!emailCheck.test(email)) {
      this.handleError('must be a valid email address');
      return;
    }

    fetch('/api/v1/user', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, retypePassword, email })
    })
      .then(res => res.json())
      .then(res => this.handleSignup(res))
      .catch(err => this.handleSignup(err));
  }

  handleSignup(message) {
    if (message == 'ALREADY TAKEN') {
      this.handleError('username already taken');
      return;
    }
    if (message !== 'CREATED USER') {
      this.handleError('server error during creation, please try again');
      return;
    }
    this.scrollTop();
    this.scrollAfterSearch('home-container');
    this.props.history.replace('/');
  }

  handleLogin(message) {
    if (message == 'LOGIN FAILURE') {
      this.handleError('username or the password not correct');
      return;
    }
    this.scrollTop();
    this.scrollAfterSearch('home-container');
    this.props.history.replace('/');
  }

  login() {
    const { username, password } = this.state;

    if ((!username, !password)) {
      this.handleError();
      return;
    }
    fetch(`/api/v1/user?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(res => this.handleLogin(res))
      .catch(err => this.handleLogin(err));
  }

  handleError(message) {
    this.setState({ showError: true, errorMessage: message });
    setTimeout(() => {
      this.setState({ showError: false });
    }, 3000);
    return;
  }

  showSignup() {
    return (
      <SignupForm
        username={this.state.username}
        password={this.state.password}
        retypePassword={this.state.retypePassword}
        email={this.state.email}
        handleInput={this.handleInput.bind(this)}
      />
    );
  }

  showLogin() {
    return (
      <LoginForm
        username={this.state.username}
        password={this.state.password}
        handleInput={this.handleInput.bind(this)}
      />
    );
  }

  render() {
    return (
      <section id="login-signup-container">
        <form>
          <RadioButtons
            handleRadio={this.handleRadio.bind(this)}
            show={this.state.show}
          />
          {this.state.show === 'signup' ? this.showSignup() : this.showLogin()}
          <button
            onClick={e => {
              this.handleSubmit(e);
            }}
          >
            Submit
          </button>
          {this.state.showError ? (
            <div id="error-message-login">{this.state.errorMessage}</div>
          ) : null}
        </form>
      </section>
    );
  }
}

export default Login;
