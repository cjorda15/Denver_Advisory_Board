import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import RadioButtons from './RadioButtons';
import { updateUser } from '../../actions';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
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

  componentWillMount() {
    let options = {
      delay: '0',
      duration: '0'
    };
    Scroll.animateScroll.scrollToTop(options);
  }

  componentDidMount() {
    this.scrollAfterLoad();
  }

  scrollAfterLoad() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('login-signup-container', {
        duration: 600,
        delay: 0,
        smooth: true
      });
    }, 500);
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
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
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
      this.handleError('Password must be at least 5 characters');
      return;
    }

    if (!emailCheck.test(email)) {
      this.handleError('Must be a valid email address');
      return;
    }

    fetch('/api/v1/signup', {
      method: 'post',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, email })
    })
      .then(res => res.json())
      .then(data => this.handleSignup(data))
      .catch(err => this.handleSignup(err));
  }

  handleSignup(response) {
    if (response.message == 'Success') {
      this.props.handleLogin(response.user);
      this.scrollAfterSearch('profile-container');
      this.props.history.replace('/profile');
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
    if (response.message == 'Success') {
      this.props.handleLogin(response.user);
      this.scrollAfterSearch('profile-container');
      this.props.history.replace('/profile');
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
            SUBMIT
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
      dispatch(updateUser(input));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
