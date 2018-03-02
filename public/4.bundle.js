webpackJsonp([4],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactScroll = __webpack_require__(67);

var _reactScroll2 = _interopRequireDefault(_reactScroll);

var _reactRedux = __webpack_require__(14);

var _SignupForm = __webpack_require__(324);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

var _LoginForm = __webpack_require__(325);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _RadioButtons = __webpack_require__(326);

var _RadioButtons2 = _interopRequireDefault(_RadioButtons);

var _actions = __webpack_require__(21);

__webpack_require__(327);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      show: 'signup',
      username: '',
      password: '',
      retypePassword: '',
      email: '',
      showError: false,
      errorMessage: '',
      loading: false
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var options = {
        delay: '0',
        duration: '0'
      };
      _reactScroll2.default.animateScroll.scrollToTop(options);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollAfterLoad();
    }
  }, {
    key: 'scrollAfterLoad',
    value: function scrollAfterLoad() {
      setTimeout(function () {
        return _reactScroll2.default.scroller.scrollTo('login-signup-container', {
          duration: 600,
          delay: 0,
          smooth: true
        });
      }, 500);
    }
  }, {
    key: 'scrollAfterSearch',
    value: function scrollAfterSearch(input) {
      setTimeout(function () {
        return _reactScroll2.default.scroller.scrollTo(input, {
          duration: 1000,
          delay: 70,
          smooth: true
        });
      }, 100);
    }
  }, {
    key: 'handleRadio',
    value: function handleRadio(e) {
      this.setState({
        show: e.target.value,
        username: '',
        password: '',
        retypePassword: '',
        email: ''
      });
    }
  }, {
    key: 'handleInput',
    value: function handleInput(e, type) {
      this.setState(_defineProperty({}, type, e.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.state.show == 'signup' ? this.signup() : this.login();
    }
  }, {
    key: 'login',
    value: function login() {
      var _this2 = this;

      var _state = this.state,
          email = _state.email,
          password = _state.password;


      if (!email, !password) {
        this.handleError('Please enter your credentials');
        return;
      }

      fetch('/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: email, password: password })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this2.handleLogin(res);
      }).catch(function (err) {
        return _this2.handleLogin(err);
      });
    }
  }, {
    key: 'signup',
    value: function signup() {
      var _this3 = this;

      var _state2 = this.state,
          password = _state2.password,
          retypePassword = _state2.retypePassword,
          email = _state2.email;

      var emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!password, !retypePassword, !email) {
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
        body: JSON.stringify({ password: password, email: email })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        return _this3.handleSignup(data);
      }).catch(function (err) {
        return _this3.handleSignup(err);
      });
    }
  }, {
    key: 'handleSignup',
    value: function handleSignup(response) {
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
  }, {
    key: 'handleLogin',
    value: function handleLogin(response) {
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
  }, {
    key: 'handleError',
    value: function handleError(message) {
      var _this4 = this;

      this.setState({ showError: true, errorMessage: message });
      setTimeout(function () {
        _this4.setState({ showError: false });
      }, 3000);
      return;
    }
  }, {
    key: 'showSignup',
    value: function showSignup() {
      return _react2.default.createElement(_SignupForm2.default, {
        password: this.state.password,
        retypePassword: this.state.retypePassword,
        email: this.state.email,
        handleInput: this.handleInput.bind(this)
      });
    }
  }, {
    key: 'showLogin',
    value: function showLogin() {
      return _react2.default.createElement(_LoginForm2.default, {
        email: this.state.email,
        password: this.state.password,
        handleInput: this.handleInput.bind(this)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'section',
        { id: 'login-signup-container' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_RadioButtons2.default, {
            handleRadio: this.handleRadio.bind(this),
            show: this.state.show
          }),
          this.state.show === 'signup' ? this.showSignup() : this.showLogin(),
          _react2.default.createElement(
            'button',
            {
              onClick: function onClick(e) {
                _this5.handleSubmit(e);
              }
            },
            'SUBMIT'
          ),
          this.state.showError ? _react2.default.createElement(
            'div',
            { id: 'error-message-login' },
            this.state.errorMessage
          ) : null
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogin: function handleLogin(input) {
      dispatch((0, _actions.updateUser)(input));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Login);

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignupForm = function SignupForm(_ref) {
  var password = _ref.password,
      retypePassword = _ref.retypePassword,
      email = _ref.email,
      handleInput = _ref.handleInput;

  return _react2.default.createElement(
    "div",
    { className: "signup-container" },
    _react2.default.createElement(
      "a",
      { href: "/signup/linkedin" },
      "SIGN UP WITH LinkedIn"
    ),
    _react2.default.createElement("input", {
      onChange: function onChange(e) {
        handleInput(e, 'email');
      },
      type: "input",
      value: email,
      placeholder: "email"
    }),
    _react2.default.createElement("input", {
      type: "password",
      onChange: function onChange(e) {
        handleInput(e, 'password');
      },
      value: password,
      placeholder: "password"
    }),
    _react2.default.createElement("input", {
      type: "password",
      onChange: function onChange(e) {
        handleInput(e, 'retypePassword');
      },
      value: retypePassword,
      placeholder: "retype-password"
    })
  );
};

exports.default = SignupForm;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
  var email = _ref.email,
      password = _ref.password,
      handleInput = _ref.handleInput;

  return _react2.default.createElement(
    "div",
    { className: "login-container" },
    _react2.default.createElement(
      "a",
      { href: "/login/linkedin" },
      "Login With LinkedIn"
    ),
    _react2.default.createElement("input", {
      onChange: function onChange(e) {
        handleInput(e, 'email');
      },
      type: "input",
      value: email,
      placeholder: "Email"
    }),
    _react2.default.createElement("input", {
      onChange: function onChange(e) {
        handleInput(e, 'password');
      },
      type: "password",
      value: password,
      placeholder: "Password"
    })
  );
};

exports.default = LoginForm;

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtons = function RadioButtons(_ref) {
  var show = _ref.show,
      handleRadio = _ref.handleRadio;

  return _react2.default.createElement(
    "div",
    { className: "radio-buttons-container" },
    _react2.default.createElement("input", {
      type: "radio",
      id: "signup",
      name: "sign-login",
      checked: show === 'signup',
      value: "signup",
      onChange: function onChange(e) {
        handleRadio(e);
      }
    }),
    _react2.default.createElement(
      "label",
      { htmlFor: "signup" },
      "SIGN UP"
    ),
    _react2.default.createElement("input", {
      type: "radio",
      id: "login",
      name: "sign-login",
      checked: show === 'login',
      value: "login",
      onChange: function onChange(e) {
        handleRadio(e);
      }
    }),
    _react2.default.createElement(
      "label",
      { htmlFor: "login" },
      "LOGIN"
    )
  );
};

exports.default = RadioButtons;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./login.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./login.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Fredoka+One|Nunito|Comfortaa|Maven+Pro);", ""]);

// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n#login-signup-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 70vh;\n  max-width: 300px;\n  margin: 50px auto;\n  padding-top: 35px;\n  width: 90%; }\n  #login-signup-container form {\n    margin: 0px auto; }\n  #login-signup-container label {\n    font-family: \"Comfortaa\", serif;\n    margin-bottom: 25px;\n    display: inline-block; }\n  #login-signup-container input[type='radio'] {\n    margin-left: 15px; }\n  #login-signup-container button,\n  #login-signup-container a {\n    border: 2px solid #33f5e7;\n    background: #33f5e7;\n    color: #fff;\n    font-size: 1em;\n    font-family: \"Comfortaa\", serif;\n    line-height: 1.3;\n    margin-bottom: 10px;\n    padding: 14px;\n    outline: none;\n    text-align: center;\n    text-decoration: none;\n    transition: all 0.8s;\n    width: 100%; }\n    #login-signup-container button:hover, #login-signup-container button:focus,\n    #login-signup-container a:hover,\n    #login-signup-container a:focus {\n      background-color: #fff;\n      color: #33f5e7; }\n    #login-signup-container button:active,\n    #login-signup-container a:active {\n      background: red;\n      color: #fff; }\n\n.signup-container,\n.login-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-width: 200px;\n  width: 100%; }\n  .signup-container input,\n  .login-container input {\n    border: 2px solid #33f5e7;\n    font-family: \"Comfortaa\", serif;\n    font-size: 1em;\n    height: 48px;\n    margin-bottom: 9px;\n    padding-left: 10px;\n    outline: none;\n    transition: all 0.8s; }\n    .signup-container input:focus,\n    .login-container input:focus {\n      border: 2px solid #4286f4;\n      color: #4286f4; }\n\n#error-message-login {\n  background: red;\n  font-family: \"Comfortaa\", serif;\n  max-width: 200px;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 20px;\n  margin-top: 15px; }\n", ""]);

// exports


/***/ })

});