webpackJsonp([4],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(143);

__webpack_require__(145);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function Landing() {
  return _react2.default.createElement(
    'div',
    { className: 'video-wrapper' },
    _react2.default.createElement(
      'video',
      { autoPlay: true, playsInline: true, muted: true, loop: true, preload: 'true' },
      _react2.default.createElement('source', { src: 'https://res.cloudinary.com/hdfmst19a/video/upload/v1517535883/people_1_v2epal.mp4' })
    ),
    _react2.default.createElement(
      'svg',
      {
        id: 'landing-svg',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 285 80',
        preserveAspectRatio: 'xMidYMid slice'
      },
      _react2.default.createElement(
        'defs',
        null,
        _react2.default.createElement(
          'mask',
          { id: 'mask', x: '0', y: '0' },
          _react2.default.createElement('rect', {
            style: {
              width: '100%',
              fill: 'white',
              mask: 'url(/add#mask)',
              WebkitMask: 'url(/add#mask)'
            },
            className: 'landing-svg',
            x: '0',
            y: '0',
            width: '100%',
            height: '100%'
          }),
          _react2.default.createElement(
            'text',
            { x: '75', y: '28' },
            'Denver'
          ),
          _react2.default.createElement(
            'text',
            { x: '74', y: '48' },
            'Advisory'
          ),
          _react2.default.createElement(
            'text',
            { x: '75', y: '68' },
            'Board'
          )
        )
      ),
      _react2.default.createElement('rect', { className: 'landing-svg', x: '0', y: '0', width: '100%', height: '100%' })
    )
  );
};

exports.default = Landing;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./landing.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./landing.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Biko;\n  src: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff\"); }\n\n.video-wrapper {\n  width: 100%;\n  margin: 100px auto 0px;\n  position: relative;\n  max-width: 1200px; }\n  .video-wrapper svg {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%; }\n  .video-wrapper svg text {\n    font-family: Biko, sans-serif;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 1.5em; }\n  .video-wrapper mask {\n    height: 100vh;\n    width: 100vw; }\n\n.video-wrapper video {\n  width: 100%; }\n\n.landing-svg {\n  width: 100%;\n  fill: white;\n  -webkit-mask: url(#mask);\n  mask: url(#mask); }\n", ""]);

// exports


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var video = document.querySelector('video');
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute('autoplay');
  video.pause();
}

/***/ })

});