webpackJsonp([12],{

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Members = function (_Component) {
  _inherits(Members, _Component);

  function Members(props) {
    _classCallCheck(this, Members);

    var _this = _possibleConstructorReturn(this, (Members.__proto__ || Object.getPrototypeOf(Members)).call(this, props));

    _this.state = {
      loading: false,
      members: []
    };
    return _this;
  }

  _createClass(Members, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      fetch('/api/v1/members', {
        method: 'GET'
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        console.log(json);
        _this2.setState({ members: json });
      }).catch(function (err) {
        return console.log('Error loading members: ', err);
      });
    }
  }, {
    key: 'renderMembers',
    value: function renderMembers() {
      if (!this.state.members.length) return;
      return this.state.members.map(function (member, i) {
        if (!member.name || !member.image) return;
        return _react2.default.createElement(
          'div',
          { key: i, 'class': 'member' },
          _react2.default.createElement('img', { src: member.image.url }),
          _react2.default.createElement(
            'p',
            null,
            member.name
          ),
          _react2.default.createElement(
            'p',
            null,
            member.title
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'members' },
        this.renderMembers()
      );
    }
  }]);

  return Members;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    events: state.personalEvents
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handleImage: input => {
//       dispatch(loadImage(input));
//     },
//     handleUser: input => {
//       dispatch(updateUser(input));
//     },
//     handleGeneratePersonalEvents: input => {
//       dispatch(generatePersonalEvents(input));
//     },
//     handleUpdateParticipant: input => {
//       dispatch(updatePersonalEvents(input));
//     }
//   };
// };


exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Members);

/***/ })

});