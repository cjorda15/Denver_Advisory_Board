webpackJsonp([7],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   const data = new FormData();
  //   const input = document.querySelector('.file-field').files[0];
  //
  //   data.append('file', input);
  //
  //   fetch('/api/v1/image', {
  //     method: 'POST',
  //     body: data
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }
  //
  // profileImgDisplay() {
  //   return this.state.profileImg ? (
  //     <div className="account-profile-image" />
  //   ) : (
  //     <div className="account-profile-image-placeholder">
  //       <form
  //         onSubmit={e => {
  //           this.handleClick(e);
  //         }}
  //         action="/api/v1/image"
  //         method="post"
  //         encType="multipart/form-data"
  //         className="ui form"
  //       >
  //         <input className="file-field" name="recfile" type="file" />
  //         <button type="submit">post</button>
  //       </form>
  //     </div>
  //   );
  // }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "profile-container" },
        _react2.default.createElement(
          "div",
          null,
          "profile"
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ })

});