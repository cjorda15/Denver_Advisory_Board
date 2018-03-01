webpackJsonp([18],{

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

__webpack_require__(457);

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
          { key: i, className: 'member' },
          _react2.default.createElement('img', { src: member.image.url, className: 'member-img' }),
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

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./members.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./members.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "#members {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 25% 25% 25% 25%;\n      grid-template-columns: 25% 25% 25% 25%;\n  -ms-grid-rows: 20% 20% 20% 20%;\n      grid-template-rows: 20% 20% 20% 20%;\n  margin-bottom: 100px; }\n\n.member {\n  padding: 12px;\n  border: 2px solid #dd7782;\n  text-align: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  justify-self: center;\n  height: 200px; }\n\n.member-img {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%; }\n", ""]);

// exports


/***/ })

});