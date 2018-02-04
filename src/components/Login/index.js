import React, { Component } from 'react';
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

  handleSignup(message) {}

  login() {
    const { username, password } = this.state;

    if ((!username, !password)) {
      this.handleError();
      return;
    }
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
      <div className="signup-container">
        <input
          onChange={e => {
            this.handleInput(e, 'username');
          }}
          type="input"
          value={this.state.username}
          placeholder="username"
        />
        <input
          onChange={e => {
            this.handleInput(e, 'password');
          }}
          type="input"
          value={this.state.password}
          placeholder="password"
        />
        <input
          onChange={e => {
            this.handleInput(e, 'retypePassword');
          }}
          type="input"
          value={this.state.retypePassword}
          placeholder="retype-password"
        />
        <input
          onChange={e => {
            this.handleInput(e, 'email');
          }}
          type="input"
          value={this.state.email}
          placeholder="email"
        />
      </div>
    );
  }

  showLogin() {
    return (
      <div className="login-container">
        <input
          onChange={e => {
            this.handleInput(e, 'username');
          }}
          type="input"
          value={this.state.username}
          placeholder="username"
        />
        <input
          onChange={e => {
            this.handleInput(e, 'password');
          }}
          type="input"
          value={this.state.password}
          placeholder="password"
        />
      </div>
    );
  }

  render() {
    return (
      <section id="login-signup-container">
        <form>
          <input
            type="radio"
            id="signup"
            name="sign-login"
            checked={this.state.show === 'signup'}
            value="signup"
            onChange={e => {
              this.handleRadio(e);
            }}
          />
          <label htmlFor="signup">SIGN UP</label>
          <input
            type="radio"
            id="login"
            name="sign-login"
            checked={this.state.show === 'login'}
            value="login"
            onChange={e => {
              this.handleRadio(e);
            }}
          />
          <label htmlFor="login">LOGIN</label>
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
