import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import RadioButtons from './RadioButtons';
import { loginUser } from '../../actions';
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

  login() {
    const { email, password } = this.state;

    if ((!email, !password)) {
      this.handleError('Please enter your credentials');
      return;
    }

    fetch(`/api/v1/login`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(res => this.handleLogin(res))
      .catch(err => this.handleLogin(err));
  }

  signup() {
    const { password, retypePassword, email } = this.state;
    const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ((!password, !retypePassword, !email)) {
      this.handleError('Complete the form please');
      return;
    }

    if (password !== retypePassword) {
      this.handleError('Passwords not the same');
      return;
    }

    if (password.length < 5) {
      this.handleError('Username must be at least 5 characters');
      return;
    }

    if (!emailCheck.test(email)) {
      this.handleError('Must be a valid email address');
      return;
    }

    fetch('/api/v1/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, email })
    })
      .then(res => res.json())
      .then(data => this.handleSignup(data))
      .catch(err => this.handleSignup(err));
  }

  handleSignup(response) {
    console.log(response.message);
    if (response.message == 'Success') {
      this.scrollTop();
      this.scrollAfterSearch('home-container');
      // window.location('/home');
      this.props.history.replace('/');
      return;
    }

    if (response.message == 'Username Taken') {
      this.handleError('User or email already taken');
      return;
    }

    if (response.message == 'Something went wrong') {
      this.handleError('Something went wrong on our end');
      return;
    }
    this.handleError('Unknown error, sorry for the inconvience');
  }

  handleLogin(response) {
    console.log(response.message);

    if (response.message == 'Success') {
      this.scrollTop();
      this.scrollAfterSearch('home-container');
      this.props.handleLogin('chris');
      // window.location('/home');
      this.props.history.replace('/');
      return;
    }
    if (response.message == 'User not found') {
      this.handleError('User not found');
      return;
    }
    if (response.message == 'Bad Password') {
      this.handleError('Incorrect Password');
      return;
    }
    if (response.message == 'Something went wrong') {
      this.handleError('Something went wrong on our end');
      return;
    }
    this.handleError('Unknown error, sorry for the inconvience');
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
        email={this.state.email}
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

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: input => {
      dispatch(loginUser(input));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
