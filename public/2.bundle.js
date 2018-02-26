webpackJsonp([2],{

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(320);

__webpack_require__(321);

var _reactScrollParallax = __webpack_require__(323);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function Landing() {
  return _react2.default.createElement(
    _reactScrollParallax.ParallaxProvider,
    null,
    _react2.default.createElement(
      'div',
      { className: 'video-wrapper' },
      _react2.default.createElement(
        _reactScrollParallax.Parallax,
        {
          offsetYMax: 20,
          offsetYMin: -20,
          slowerScrollRate: true,
          tag: 'figure'
        },
        _react2.default.createElement('img', {
          width: '100%',
          src: 'https://res.cloudinary.com/hdfmst19a/image/upload/v1518751751/pexels-photo-221502_1_ppqftz.jpg'
        })
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
        _react2.default.createElement('rect', {
          className: 'landing-svg',
          x: '0',
          y: '0',
          width: '100%',
          height: '100%'
        })
      )
    )
  );
};

exports.default = Landing;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(302);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * -------------------------------------------------------
 * Parallax Controller
 * -------------------------------------------------------
 *
 * The global controller for setting up window scroll/resize
 * listeners, managing and caching parallax element positions,
 * determining which elements are inside the viewport based on
 * scroll position, and then updating parallax element styles
 * based on min/max offsets and current scroll position.
 *
 */
function ParallaxController() {
    // All parallax elements to be updated
    var elements = [];

    // Tracks current scroll y distance
    var scrollY = 0;

    // Window inner height
    var windowHeight = 0;

    // ID to increment for elements
    var id = 0;

    // Ticking
    var ticking = false;

    // Scroll direction
    // let scrollDown = null;

    // Passive support
    var supportsPassive = (0, _index.testForPassiveScroll)();

    function _addListeners() {
        window.addEventListener('scroll', _handleScroll, supportsPassive ? { passive: true } : false);
        window.addEventListener('resize', _handleResize, false);
    }

    function _removeListeners() {
        window.removeEventListener('scroll', _handleScroll, supportsPassive ? { passive: true } : false);
        window.removeEventListener('resize', _handleResize, false);
    }

    _addListeners();

    /**
     * Window scroll handler. Sets the 'scrollY'
     * and then calls '_updateElementPositions()'.
     */
    function _handleScroll() {
        // reference to prev scroll y
        // const prevScrollY = scrollY;

        // Save current scroll
        scrollY = window.pageYOffset; // Supports IE 9 and up.

        // direction
        // scrollDown = scrollY > prevScrollY;

        // Only called if the last animation request has been
        // completed and there are parallax elements to update
        if (!ticking && elements.length > 0) {
            ticking = true;
            window.requestAnimationFrame(_updateElementPositions);
        }
    }

    /**
     * Window resize handler. Sets the new window inner height
     * then updates parallax element attributes and positions.
     */
    function _handleResize() {
        _setWindowHeight();
        _updateElementAttributes();
        _updateElementPositions();
    }

    /**
     * Creates a unique id to distinguish parallax elements.
     * @return {Number}
     */
    function _createID() {
        ++id;
        return id;
    }

    /**
     * Update element positions.
     * Determines if the element is in view based on the cached
     * attributes, if so set the elements parallax styles.
     */
    function _updateElementPositions() {
        elements.forEach(function (element) {
            if (element.props.disabled) return;

            // check if the element is in view then
            var isInView = (0, _index.isElementInView)(element, windowHeight, scrollY);

            // set styles if it is
            if (isInView) _setParallaxStyles(element);

            // reset ticking so more animations can be called
            ticking = false;
        });
    }

    /**
     * Update element attributes.
     * Sets up the elements offsets based on the props passed from
     * the component then caches the elements current position and
     * other important attributes.
     */
    function _updateElementAttributes() {
        elements.forEach(function (element) {
            if (element.props.disabled) return;

            _setupOffsets(element);

            _cacheAttributes(element);
        });
    }

    /**
     * Remove parallax styles from all elements.
     */
    function _removeParallaxStyles() {
        elements.forEach(function (element) {
            _resetStyles(element);
        });
    }

    /**
     * Cache the window height.
     */
    function _setWindowHeight() {
        var html = document.documentElement;
        windowHeight = window.innerHeight || html.clientHeight;
    }

    /**
     * Takes a parallax element and caches important values that
     * cause layout reflow and paints. Stores the values as an
     * attribute object accesible on the parallax element.
     * @param {object} element
     */
    function _cacheAttributes(element) {
        var _element$offsets = element.offsets,
            yMin = _element$offsets.yMin,
            yMax = _element$offsets.yMax,
            xMax = _element$offsets.xMax,
            xMin = _element$offsets.xMin;
        var slowerScrollRate = element.props.slowerScrollRate;

        // NOTE: Many of these cause layout and reflow so we're not
        // calculating them on every frame -- instead these values
        // are cached on the element to access later when determining
        // the element's position and offset.

        var el = element.elOuter;
        var rect = el.getBoundingClientRect();
        var elHeight = el.offsetHeight;
        var elWidth = el.offsetWidth;
        var scrollY = window.pageYOffset;

        // NOTE: offsetYMax and offsetYMin are percents
        // based of the height of the element. They must be
        // calculated as px to correctly determine whether
        // the element is in the viewport.
        var yPercent = yMax.unit === '%' || yMin.unit === '%';
        var xPercent = xMax.unit === '%' || xMin.unit === '%';

        // X offsets
        var yMinPx = yMin.value;
        var yMaxPx = yMax.value;

        if (yPercent) {
            var h100 = elHeight / 100;
            yMaxPx = yMax.value * h100;
            yMinPx = yMin.value * h100; // negative value
        }

        // Y offsets
        var xMinPx = xMax.value;
        var xMaxPx = xMin.value;

        if (xPercent) {
            var w100 = elWidth / 100;
            xMaxPx = xMax.value * w100;
            xMinPx = xMin.value * w100; // negative value
        }

        // NOTE: must add the current scroll position when the
        // element is checked so that we get its absolute position
        // relative to the document and not the viewport then
        // add the min/max offsets calculated above.
        var top = 0;
        var bottom = 0;

        if (slowerScrollRate) {
            top = rect.top + scrollY + yMinPx;
            bottom = rect.bottom + scrollY + yMaxPx;
        } else {
            top = rect.top + scrollY + yMaxPx * -1;
            bottom = rect.bottom + scrollY + yMinPx * -1;
        }

        // NOTE: Total distance the element will move from when
        // the top enters the view to the bottom leaving
        // accounting for elements height and max/min offsets.
        var totalDist = windowHeight + (elHeight + Math.abs(yMinPx) + yMaxPx);

        element.attributes = {
            top: top,
            bottom: bottom,
            elHeight: elHeight,
            elWidth: elWidth,
            yMaxPx: yMaxPx,
            yMinPx: yMinPx,
            xMaxPx: xMaxPx,
            xMinPx: xMinPx,
            totalDist: totalDist
        };
    }

    /**
     * Takes a parallax element and parses the offset props to get the value
     * and unit. Sets these values as offset object accessible on the element.
     * @param {object} element
     */
    function _setupOffsets(element) {
        var _element$props = element.props,
            offsetYMin = _element$props.offsetYMin,
            offsetYMax = _element$props.offsetYMax,
            offsetXMax = _element$props.offsetXMax,
            offsetXMin = _element$props.offsetXMin;


        var yMin = (0, _index.parseValueAndUnit)(offsetYMin);
        var yMax = (0, _index.parseValueAndUnit)(offsetYMax);
        var xMin = (0, _index.parseValueAndUnit)(offsetXMax);
        var xMax = (0, _index.parseValueAndUnit)(offsetXMin);

        if (xMin.unit !== xMax.unit || yMin.unit !== yMax.unit) {
            throw new Error('Must provide matching units for the min and max offset values of each axis.');
        }

        var xUnit = xMin.unit || '%';
        var yUnit = yMin.unit || '%';

        element.offsets = {
            xUnit: xUnit,
            yUnit: yUnit,
            yMin: yMin,
            yMax: yMax,
            xMin: xMin,
            xMax: xMax
        };
    }

    /**
     * Takes a parallax element and set the styles based on the
     * offsets and percent the element has moved though the viewport.
     * @param {object} element
     */
    function _setParallaxStyles(element) {
        var top = element.attributes.top - scrollY;
        var totalDist = element.attributes.totalDist;

        // Percent the element has moved based on current and total distance to move

        var percentMoved = (top * -1 + windowHeight) / totalDist * 100;

        // Scale percentMoved to min/max percent determined by offset props
        var slowerScrollRate = element.props.slowerScrollRate;

        // Get the parallax X and Y offsets

        var offsets = (0, _index.getParallaxOffsets)(element.offsets, percentMoved, slowerScrollRate);

        // Apply styles
        var el = element.elInner;

        // prettier-ignore
        el.style.transform = 'translate3d(' + offsets.x.value + offsets.x.unit + ', ' + offsets.y.value + offsets.y.unit + ', 0)';
    }

    /**
     * Takes a parallax element and removes parallax offset styles.
     * @param {object} element
     */
    function _resetStyles(element) {
        var el = element.elInner;
        el.style.transform = '';
    }

    /**
     * -------------------------------------------------------
     * Public methods
     * -------------------------------------------------------
     */

    /**
     * Gets the parallax elements in the controller
     * @return {array} parallax elements
     */
    this.getElements = function () {
        return elements;
    };

    /**
     * Creates a new parallax element object with new id
     * and options to store in the 'elements' array.
     * @param {object} options
     * @return {object} element
     */
    this.createElement = function (options) {
        var id = _createID();
        var newElement = _extends({
            id: id
        }, options);

        var updatedElements = [].concat(_toConsumableArray(elements), [newElement]);
        elements = updatedElements;
        this.update();

        return newElement;
    };

    /**
     * Creates a new parallax element object with new id
     * and options to store in the 'elements' array.
     * @param {object} element
     */
    this.removeElement = function (element) {
        var updatedElements = elements.filter(function (el) {
            return el.id !== element.id;
        });
        elements = updatedElements;
    };

    /**
     * Updates an existing parallax element object with new options.
     * @param {object} element
     * @param {object} options
     */
    this.updateElement = function (element, options) {
        var updatedElements = elements.map(function (el) {
            // create element with new options and replaces the old
            if (el.id === element.id) {
                // update props
                el.props = options.props;
            }
            return el;
        });

        elements = updatedElements;

        // call update to set attributes and positions based on the new options
        this.update();
    };

    /**
     * Remove element styles.
     * @param {object} element
     */
    this.resetElementStyles = function (element) {
        _resetStyles(element);
    };

    /**
     * Updates all parallax element attributes and postitions.
     */
    this.update = function () {
        _setWindowHeight();
        _updateElementAttributes();
        _updateElementPositions();
    };

    /**
     * Removes listeners, reset all styles then nullifies the global ParallaxController.
     */
    this.destroy = function () {
        _removeListeners();
        _removeParallaxStyles();
        window.ParallaxController = null;
    };
}

/**
 * Static method to instantiate the ParallaxController.
 * Returns a new or existing instance of the ParallaxController.
 * @returns {Object} ParallaxController
 */
ParallaxController.init = function () {
    var hasWindow = typeof window !== 'undefined';

    if (!hasWindow) {
        throw new Error('Looks like ParallaxController.init() was called on the server. This method must be called on the client.');
    }

    var controller = new ParallaxController();

    // Keep global reference for legacy versions <= 1.1.0
    if (hasWindow && !window.ParallaxController) {
        window.ParallaxController = controller;
    }

    return controller;
};

exports.default = ParallaxController;
module.exports = exports['default'];

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propValidation = __webpack_require__(301);

var _ParallaxController = __webpack_require__(295);

var _ParallaxController2 = _interopRequireDefault(_ParallaxController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parallax = function (_Component) {
    _inherits(Parallax, _Component);

    function Parallax() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Parallax);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call.apply(_ref, [this].concat(args))), _this), _this.mapRefOuter = function (ref) {
            _this._outer = ref;
        }, _this.mapRefInner = function (ref) {
            _this._inner = ref;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Parallax, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Make sure the provided controller is an instance of the Parallax Controller
            var isInstance = this.controller instanceof _ParallaxController2.default;

            // Throw if neither context or global is available
            if (!this.controller && !isInstance) {
                throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            }

            // Deprecation warning for <=1.0.0
            // If no context is available but the window global is then warn
            if (!this.context.parallaxController && window.ParallaxController) {
                console.log('Calling ParallaxController.init() has been deprecated in favor of using the <ParallaxProvider /> component. For usage details see: https://github.com/jscottsmith/react-scroll-parallax/tree/v1.1.0#usage');
            }

            // create a new parallax element and save the reference
            this.element = this.controller.createElement({
                elInner: this._inner,
                elOuter: this._outer,
                props: {
                    disabled: this.props.disabled,
                    offsetXMax: this.props.offsetXMax,
                    offsetXMin: this.props.offsetXMin,
                    offsetYMax: this.props.offsetYMax,
                    offsetYMin: this.props.offsetYMin,
                    slowerScrollRate: this.props.slowerScrollRate
                }
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // updates the elements props when relevant parallax props change
            if (this.props.disabled !== nextProps.disabled || this.props.offsetXMax !== nextProps.offsetXMax || this.props.offsetXMin !== nextProps.offsetXMin || this.props.offsetYMax !== nextProps.offsetYMax || this.props.offsetYMin !== nextProps.offsetYMin || this.props.slowerScrollRate !== nextProps.slowerScrollRate) {
                this.controller.updateElement(this.element, {
                    props: {
                        disabled: nextProps.disabled,
                        offsetXMax: nextProps.offsetXMax,
                        offsetXMin: nextProps.offsetXMin,
                        offsetYMax: nextProps.offsetYMax,
                        offsetYMin: nextProps.offsetYMin,
                        slowerScrollRate: nextProps.slowerScrollRate
                    }
                });
            }
            // resets element styles when disabled
            if (this.props.disabled !== nextProps.disabled && nextProps.disabled) {
                this.controller.resetElementStyles(this.element);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.controller.removeElement(this.element);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                Tag = _props.tag,
                styleOuter = _props.styleOuter,
                styleInner = _props.styleInner;


            var rootClass = 'parallax-outer' + (className ? ' ' + className : '');

            return _react2.default.createElement(
                Tag,
                {
                    className: rootClass,
                    ref: this.mapRefOuter,
                    style: styleOuter
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'parallax-inner',
                        ref: this.mapRefInner,
                        style: styleInner
                    },
                    children
                )
            );
        }
    }, {
        key: 'controller',
        get: function get() {
            // Legacy versions may use the global, not context
            return this.context.parallaxController || window.ParallaxController;
        }

        // refs

    }]);

    return Parallax;
}(_react.Component);

Parallax.defaultProps = {
    disabled: false,
    offsetYMax: 0,
    offsetYMin: 0,
    offsetXMax: 0,
    offsetXMin: 0,
    slowerScrollRate: false, // determines whether scroll rate is faster or slower than standard scroll
    tag: 'div'
};
Parallax.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool.isRequired,
    offsetXMax: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    offsetXMin: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    offsetYMax: _propValidation.offsetMax,
    offsetYMin: _propValidation.offsetMin,
    slowerScrollRate: _propTypes2.default.bool.isRequired,
    styleOuter: _propTypes2.default.object,
    styleInner: _propTypes2.default.object,
    tag: _propTypes2.default.string.isRequired
};
Parallax.contextTypes = {
    parallaxController: _propTypes2.default.object // not required because this could be rendered on the server.
};
exports.default = Parallax;
module.exports = exports['default'];

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.offsetMin = offsetMin;
exports.offsetMax = offsetMax;
function offsetMin(props, propName) {
    var componentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ANONYMOUS';

    var value = props[propName];
    var isValid = typeof value === 'string' || typeof value === 'number';

    if (!isValid) {
        return new Error('[' + propName + '] in ' + componentName + ' must be a string with with "%"" or "px" units or number.');
    }

    if (props[propName]) {
        if (typeof value === 'string') {
            value = parseInt(value, 10);
        }
        return value <= 0 ? null : new Error('[' + propName + '] in ' + componentName + ' is greater than zero. [' + propName + '] must be less than or equal to zero.');
    }
    return null;
}

function offsetMax(props, propName) {
    var componentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ANONYMOUS';

    var value = props[propName];
    var isValid = typeof value === 'string' || typeof value === 'number';

    if (!isValid) {
        return new Error('[' + propName + '] in ' + componentName + ' must be a string with with "%"" or "px" units or number.');
    }

    if (props[propName]) {
        if (typeof value === 'string') {
            value = parseInt(value, 10);
        }
        return value >= 0 ? null : new Error('[' + propName + '] in ' + componentName + ' is less than zero. [' + propName + '] must be greater than or equal to zero.');
    }
    return null;
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testForPassiveScroll = exports.scaleBetween = exports.parseValueAndUnit = exports.isElementInView = exports.getParallaxOffsets = exports.clamp = undefined;

var _clamp2 = __webpack_require__(324);

var _clamp3 = _interopRequireDefault(_clamp2);

var _getParallaxOffsets2 = __webpack_require__(325);

var _getParallaxOffsets3 = _interopRequireDefault(_getParallaxOffsets2);

var _isElementInView2 = __webpack_require__(326);

var _isElementInView3 = _interopRequireDefault(_isElementInView2);

var _parseValueAndUnit2 = __webpack_require__(327);

var _parseValueAndUnit3 = _interopRequireDefault(_parseValueAndUnit2);

var _scaleBetween2 = __webpack_require__(328);

var _scaleBetween3 = _interopRequireDefault(_scaleBetween2);

var _testForPassiveScroll2 = __webpack_require__(329);

var _testForPassiveScroll3 = _interopRequireDefault(_testForPassiveScroll2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.clamp = _clamp3.default;
exports.getParallaxOffsets = _getParallaxOffsets3.default;
exports.isElementInView = _isElementInView3.default;
exports.parseValueAndUnit = _parseValueAndUnit3.default;
exports.scaleBetween = _scaleBetween3.default;
exports.testForPassiveScroll = _testForPassiveScroll3.default;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var video = document.querySelector('video');
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute('autoplay');
  video.pause();
}

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Biko;\n  src: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff\"); }\n\n.video-wrapper {\n  margin: 100px auto 0px;\n  max-width: 1200px;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n  .video-wrapper svg {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%; }\n  .video-wrapper svg text {\n    font-family: Biko, sans-serif;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 1.5em; }\n  .video-wrapper mask {\n    height: 100vh;\n    width: 100vw; }\n\n.video-wrapper video {\n  width: 100%; }\n\n.landing-svg {\n  width: 100%;\n  fill: white;\n  -webkit-mask: url(#mask);\n  mask: url(#mask); }\n", ""]);

// exports


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParallaxController = exports.ParallaxBanner = exports.ParallaxProvider = exports.Parallax = undefined;

var _Parallax2 = __webpack_require__(300);

var _Parallax3 = _interopRequireDefault(_Parallax2);

var _ParallaxProvider2 = __webpack_require__(330);

var _ParallaxProvider3 = _interopRequireDefault(_ParallaxProvider2);

var _ParallaxBanner2 = __webpack_require__(331);

var _ParallaxBanner3 = _interopRequireDefault(_ParallaxBanner2);

var _ParallaxController2 = __webpack_require__(295);

var _ParallaxController3 = _interopRequireDefault(_ParallaxController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Parallax = _Parallax3.default;
exports.ParallaxProvider = _ParallaxProvider3.default;
exports.ParallaxBanner = _ParallaxBanner3.default;
exports.ParallaxController = _ParallaxController3.default;

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clamp;
function clamp(number, lower, upper) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
    return number;
}
module.exports = exports["default"];

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getParallaxOffsets;

var _index = __webpack_require__(302);

/**
 * Gets the parallax X and Y offsets to be applied to an element
 * based upon the percent the element has moved in the viewport
 * and the min/max offsets
 * @returns {Object}
 */

function getParallaxOffsets(offsets, percentMoved, slowerScrollRate) {
    var yMin = offsets.yMin,
        yMax = offsets.yMax,
        xMin = offsets.xMin,
        xMax = offsets.xMax;


    var yUnit = yMax.unit;
    var xUnit = xMax.unit;

    // sets parallax to faster or slower than the rate of scroll
    var x = 0;
    var y = 0;

    if (slowerScrollRate) {
        x = (0, _index.scaleBetween)(percentMoved, xMin.value, xMax.value, 0, 100);
        y = (0, _index.scaleBetween)(percentMoved, yMin.value, yMax.value, 0, 100);
    } else {
        // flipped max/min
        x = (0, _index.scaleBetween)(percentMoved, xMax.value, xMin.value, 0, 100);
        y = (0, _index.scaleBetween)(percentMoved, yMax.value, yMin.value, 0, 100);
    }

    return {
        x: {
            value: x,
            unit: xUnit
        },
        y: {
            value: y,
            unit: yUnit
        }
    };
}
module.exports = exports['default'];

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isElementInView;
/**
 * Takes a parallax element and returns whether the element
 * is in view based on the cached position of the element,
 * current scroll position and the window height.
 * @param {object} element
 * @return {boolean} isInView
 */
function isElementInView(element, windowHeight, scrollY) {
    var top = element.attributes.top - scrollY;
    var bottom = element.attributes.bottom - scrollY;

    var topInView = top >= 0 && top <= windowHeight;
    var bottomInView = bottom >= 0 && bottom <= windowHeight;
    var covering = top <= 0 && bottom >= windowHeight;

    var isInView = topInView || bottomInView || covering;

    return isInView;
}
module.exports = exports["default"];

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseValueAndUnit;
/**
 * Determines the unit of a string and parses the value
 *
 * @param {string} str
 * @param {object} out
 * @return {object} The parsed value and the unit if any
 */
function parseValueAndUnit(str) {
    var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { value: 0, unit: 'px' };

    var isValid = typeof str === 'number' || typeof str === 'string';

    if (!isValid) {
        throw new Error('Invalid value provided. Must provide a value as a string or number');
    }

    str = String(str);
    out.value = parseFloat(str, 10);
    out.unit = str.match(/[\d.\-\+]*\s*(.*)/)[1] || '%'; // default to percent

    var validUnits = ['px', '%'];
    var isValidUnit = validUnits.find(function (unit) {
        return unit === out.unit;
    });

    if (!isValidUnit) {
        throw new Error('Invalid unit provided. Must provide a unit of px in or %');
    }

    return out;
}
module.exports = exports['default'];

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = scaleBetween;
// Scale between AKA normalize
function scaleBetween(value, newMin, newMax, oldMin, oldMax) {
    return (newMax - newMin) * (value - oldMin) / (oldMax - oldMin) + newMin;
}
module.exports = exports["default"];

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = testForPassiveScroll;
function testForPassiveScroll() {
    var supportsPassiveOption = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
                supportsPassiveOption = true;
            }
        });
        window.addEventListener('test', null, opts);
        window.removeEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
}
module.exports = exports['default'];

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ParallaxController = __webpack_require__(295);

var _ParallaxController2 = _interopRequireDefault(_ParallaxController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParallaxProvider = function (_Component) {
    _inherits(ParallaxProvider, _Component);

    function ParallaxProvider() {
        _classCallCheck(this, ParallaxProvider);

        return _possibleConstructorReturn(this, (ParallaxProvider.__proto__ || Object.getPrototypeOf(ParallaxProvider)).apply(this, arguments));
    }

    _createClass(ParallaxProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            // Passes down the reference to the controller
            var parallaxController = this.parallaxController;

            return { parallaxController: parallaxController };
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            // Don't initialize on the server
            var isServer = typeof window === 'undefined';

            if (!isServer) {
                // Must not be the server so kick it off...
                this.parallaxController = _ParallaxController2.default.init();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.parallaxController = this.parallaxController.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return children;
        }
    }]);

    return ParallaxProvider;
}(_react.Component);

ParallaxProvider.propTypes = {
    children: _propTypes2.default.node.isRequired
};
ParallaxProvider.childContextTypes = {
    parallaxController: _propTypes2.default.object
};
exports.default = ParallaxProvider;
module.exports = exports['default'];

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Parallax = __webpack_require__(300);

var _Parallax2 = _interopRequireDefault(_Parallax);

var _propValidation = __webpack_require__(301);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '50vh'
};

var absolute = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};

var ParallaxBanner = function ParallaxBanner(_ref) {
    var children = _ref.children,
        className = _ref.className,
        layers = _ref.layers,
        style = _ref.style,
        disabled = _ref.disabled;

    return _react2.default.createElement(
        'div',
        {
            style: _extends({}, constainerStyle, style),
            className: 'parallax-banner' + (className ? ' ' + className : '')
        },
        layers.map(function (layer, i) {
            return _react2.default.createElement(
                _Parallax2.default,
                {
                    key: 'layer-' + i,
                    offsetYMax: layer.amount * 100 + '%',
                    offsetYMin: layer.amount * -1 * 100 + '%',
                    slowerScrollRate: layer.slowerScrollRate,
                    styleInner: absolute,
                    styleOuter: absolute,
                    disabled: disabled
                },
                _react2.default.createElement('div', {
                    className: 'parallax-banner-layer-' + i,
                    style: _extends({
                        backgroundImage: 'url(' + layer.image + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }, absolute, {
                        top: layer.amount * 100 * -1 + '%',
                        bottom: layer.amount * 100 * -1 + '%'
                    })
                })
            );
        }),
        children
    );
};

ParallaxBanner.defaultProps = {
    disabled: false
};

ParallaxBanner.propTypes = {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    disabled: _propTypes2.default.bool.isRequired,
    layers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        amount: _propTypes2.default.number.isRequired,
        image: _propTypes2.default.string.isRequired,
        slowerScrollRate: _propTypes2.default.bool
    })),
    style: _propTypes2.default.object
};

exports.default = ParallaxBanner;
module.exports = exports['default'];

/***/ })

});