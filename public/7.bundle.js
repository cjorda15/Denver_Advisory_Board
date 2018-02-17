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

var _reactDropzoneComponent = __webpack_require__(291);

var _reactDropzoneComponent2 = _interopRequireDefault(_reactDropzoneComponent);

__webpack_require__(292);

__webpack_require__(294);

__webpack_require__(283);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddEvent = function (_Component) {
  _inherits(AddEvent, _Component);

  function AddEvent(props) {
    _classCallCheck(this, AddEvent);

    var _this = _possibleConstructorReturn(this, (AddEvent.__proto__ || Object.getPrototypeOf(AddEvent)).call(this, props));

    _this.state = {
      title: '',
      location: '',
      date: '',
      summary: '',
      fileLoaded: false,
      loading: false
    };

    _this.userFiles = [];

    _this.componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif', '.webm', '.mp4'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };

    _this.djsConfig = { autoProcessQueue: false };
    //
    // this.eventHandlers = {
    //   // This one receives the dropzone object as the first parameter
    //   // and can be used to additional work with the dropzone.js
    //   // object
    //   init: null,
    //   // All of these receive the event as first parameter:
    //   drop: this.userFiles,
    //   dragstart: null,
    //   dragend: null,
    //   dragenter: null,
    //   dragover: null,
    //   dragleave: null,
    //   // All of these receive the file as first parameter:
    //   addedfile: this.simpleCallBack,
    //   removedfile: null,
    //   thumbnail: null,
    //   error: null,
    //   processing: null,
    //   uploadprogress: null,
    //   sending: null,
    //   success: null,
    //   complete: null,
    //   canceled: null,
    //   maxfilesreached: null,
    //   maxfilesexceeded: null,
    //   // All of these receive a list of files as first parameter
    //   // and are only called if the uploadMultiple option
    //   // in djsConfig is true:
    //   processingmultiple: null,
    //   sendingmultiple: null,
    //   successmultiple: null,
    //   completemultiple: null,
    //   canceledmultiple: null,
    //   // Special Events
    //   totaluploadprogress: null,
    //   reset: null,
    //   queuecomplete: null
    // };
    _this.handleDrop = _this.handleDrop.bind(_this);
    return _this;
  }

  _createClass(AddEvent, [{
    key: 'handleInputChange',
    value: function handleInputChange(e, type) {
      e.preventDefault();
      this.setState(_defineProperty({}, type, e.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();

      console.log(document.querySelector('#add-event-file').value);
      // let formData = new FormData();
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(file) {
      console.log(file, '!#$!@#$');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { id: 'add-event-container' },
        _react2.default.createElement(
          'form',
          {
            onSubmit: function onSubmit(e) {
              _this2.handleSubmit(e);
            },
            id: 'testForm',
            encType: 'multipart/form-data'
          },
          _react2.default.createElement('input', {
            type: 'input',
            value: this.state.title,
            className: 'add-event-input',
            onChange: function onChange(e) {
              _this2.handleInputChange(e, 'title');
            }
          }),
          _react2.default.createElement('input', {
            type: 'input',
            value: this.state.location,
            className: 'add-event-input',
            onChange: function onChange(e) {
              _this2.handleInputChange(e, 'location');
            }
          }),
          _react2.default.createElement('input', {
            type: 'date',
            value: this.state.date,
            className: 'add-event-input',
            onChange: function onChange(e) {
              _this2.handleInputChange(e, 'date');
            }
          }),
          _react2.default.createElement('input', {
            type: 'input',
            value: this.state.summary,
            className: 'add-event-input',
            onChange: function onChange(e) {
              _this2.handleInputChange(e, 'summary');
            }
          }),
          _react2.default.createElement(_reactDropzoneComponent2.default, {
            config: this.componentConfig,
            djsConfig: this.djsConfig,
            onDrop: function onDrop(e) {
              _this2.handleDrop(e);
            }
          }),
          _react2.default.createElement(
            'button',
            null,
            'submit'
          )
        )
      );
    }
  }]);

  return AddEvent;
}(_react.Component);

exports.default = AddEvent;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(284);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./add_event.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./add_event.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Fredoka+One|Nunito|Comfortaa);", ""]);

// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n", ""]);

// exports


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(0),__webpack_require__(16)):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.ReactDropzone=t(require("react"),require("react-dom")):e.ReactDropzone=t(e.React,e.ReactDOM)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DropzoneComponent=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=i(n(0)),s=i(n(2)),a=i(n(3)),l=n(4),u=null,c=t.DropzoneComponent=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={files:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"getDjsConfig",value:function(){var e={url:this.props.config.postUrl?this.props.config.postUrl:null};return this.props.djsConfig?(0,a.default)(!0,{},e,this.props.djsConfig):e}},{key:"componentDidMount",value:function(){var e=this.getDjsConfig();(u=u||n(5)).autoDiscover=!1,this.props.config.postUrl||this.props.eventHandlers.drop||console.info('Neither postUrl nor a "drop" eventHandler specified, the React-Dropzone component might misbehave.');var t=this.props.config.dropzoneSelector||s.default.findDOMNode(this);this.dropzone=new u(t,e),this.setupEvents()}},{key:"componentWillUnmount",value:function(){var e=this;if(this.dropzone)if(this.dropzone.getActiveFiles().length>0){this.queueDestroy=!0;var t=window.setInterval(function(){return!1===e.queueDestroy?window.clearInterval(t):0===e.dropzone.getActiveFiles().length?(e.dropzone=e.destroy(e.dropzone),window.clearInterval(t)):void 0},500)}else this.dropzone=this.destroy(this.dropzone)}},{key:"componentDidUpdate",value:function(){if(this.queueDestroy=!1,!this.dropzone){var e=this.props.config.dropzoneSelector||s.default.findDOMNode(this);this.dropzone=new u(e,this.getDjsConfig())}}},{key:"componentWillUpdate",value:function(){var e,t=void 0;e=this.props.djsConfig?this.props.djsConfig:{};try{t=this.props.config.postUrl?{url:this.props.config.postUrl}:{}}catch(e){t={}}this.dropzone.options=(0,a.default)(!0,{},this.dropzone.options,e,t)}},{key:"render",value:function(){var e=[],t=this.state.files,n=this.props.config,i=this.props.className?"filepicker dropzone "+this.props.className:"filepicker dropzone";if(n.showFiletypeIcon&&n.iconFiletypes&&(!t||t.length<1))for(var r=0;r<this.props.config.iconFiletypes.length;r+=1)e.push(o.default.createElement(l.Icon,{filetype:n.iconFiletypes[r],key:"icon-component"+r}));return!this.props.config.postUrl&&this.props.action?o.default.createElement("form",{action:this.props.action,className:i},e,this.props.children):o.default.createElement("div",{className:i}," ",e," ",this.props.children," ")}},{key:"setupEvents",value:function(){var e=this,t=this.props.eventHandlers;if(this.dropzone&&t){for(var n in t)if(t.hasOwnProperty(n)&&t[n])if("[object Array]"===Object.prototype.toString.call(t[n]))for(var i=0;i<t[n].length;i+=1)"init"===n?t[n][i](this.dropzone):this.dropzone.on(n,t[n][i]);else"init"===n?t[n](this.dropzone):this.dropzone.on(n,t[n]);this.dropzone.on("addedfile",function(t){if(t){var n=e.state.files||[];n.push(t),e.setState({files:n})}}),this.dropzone.on("removedfile",function(t){if(t){var n=e.state.files||[];n.forEach(function(e,i){e.name===t.name&&e.size===t.size&&n.splice(i,1)}),e.setState({files:n})}})}}},{key:"destroy",value:function(e){return e.off(),e.destroy()}}]),t}();c.defaultProps={djsConfig:{},config:{},eventHandlers:{}},t.default=c},function(e,n){e.exports=t},function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},s=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t,n=i.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&i.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!o)return!1;for(t in e);return void 0===t||i.call(e,t)};e.exports=function e(){var t,n,i,r,a,l,u=arguments[0],c=1,d=arguments.length,p=!1;for("boolean"==typeof u&&(p=u,u=arguments[1]||{},c=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});c<d;++c)if(null!=(t=arguments[c]))for(n in t)i=u[n],u!==(r=t[n])&&(p&&r&&(s(r)||(a=o(r)))?(a?(a=!1,l=i&&o(i)?i:[]):l=i&&s(i)?i:{},u[n]=e(p,l,r)):void 0!==r&&(u[n]=r));return u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i};t.Icon=function(e){return o.default.createElement("div",{"data-filetype":e.filetype,className:"filepicker-file-icon"})}},function(e,t,n){"use strict";(function(e){function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){n(this,e)}return i(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{};var t=this._callbacks[e];if(t){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];for(var o=0,s=s=t;!(o>=s.length);)s[o++].apply(this,i)}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var n=this._callbacks[e];if(!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var i=0;i<n.length;i++)if(n[i]===t){n.splice(i,1);break}return this}}]),e}(),o=function(e){function o(e,i){n(this,o);var r,s=t(this,(o.__proto__||Object.getPrototypeOf(o)).call(this)),a=void 0;if(s.element=e,s.version=o.version,s.defaultOptions.previewTemplate=s.defaultOptions.previewTemplate.replace(/\n*/g,""),s.clickableElements=[],s.listeners=[],s.files=[],"string"==typeof s.element&&(s.element=document.querySelector(s.element)),!s.element||null==s.element.nodeType)throw new Error("Invalid dropzone element.");if(s.element.dropzone)throw new Error("Dropzone already attached.");o.instances.push(s),s.element.dropzone=s;var l,u=null!=(r=o.optionsForElement(s.element))?r:{};if(s.options=o.extend({},s.defaultOptions,u,null!=i?i:{}),s.options.forceFallback||!o.isBrowserSupported())return l=s.options.fallback.call(s),t(s,l);if(null==s.options.url&&(s.options.url=s.element.getAttribute("action")),!s.options.url)throw new Error("No URL provided.");if(s.options.acceptedFiles&&s.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(s.options.uploadMultiple&&s.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return s.options.acceptedMimeTypes&&(s.options.acceptedFiles=s.options.acceptedMimeTypes,delete s.options.acceptedMimeTypes),null!=s.options.renameFilename&&(s.options.renameFile=function(e){return s.options.renameFilename.call(s,e.name,e)}),s.options.method=s.options.method.toUpperCase(),(a=s.getExistingFallback())&&a.parentNode&&a.parentNode.removeChild(a),!1!==s.options.previewsContainer&&(s.options.previewsContainer?s.previewsContainer=o.getElement(s.options.previewsContainer,"previewsContainer"):s.previewsContainer=s.element),s.options.clickable&&(!0===s.options.clickable?s.clickableElements=[s.element]:s.clickableElements=o.getElements(s.options.clickable,"clickable")),s.init(),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,r),i(o,null,[{key:"initClass",value:function(){this.prototype.Emitter=r,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,n){if(n)return{dzuuid:n.file.upload.uuid,dzchunkindex:n.index,dztotalfilesize:n.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:n.file.upload.totalChunkCount,dzchunkbyteoffset:n.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e=void 0;this.element.className=this.element.className+" dz-browser-not-supported";for(var t=0,n=n=this.element.getElementsByTagName("div");!(t>=n.length);){var i=n[t++];if(/(^| )dz-message($| )/.test(i.className)){e=i,i.className="dz-message";break}}e||(e=o.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var r=e.getElementsByTagName("span")[0];return r&&(null!=r.textContent?r.textContent=this.options.dictFallbackMessage:null!=r.innerText&&(r.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,n,i){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height;null==t&&null==n?(t=r.srcWidth,n=r.srcHeight):null==t?t=n*o:null==n&&(n=t/o);var s=(t=Math.min(t,r.srcWidth))/(n=Math.min(n,r.srcHeight));if(r.srcWidth>t||r.srcHeight>n)if("crop"===i)o>s?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*s):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/s);else{if("contain"!==i)throw new Error("Unknown resizeMethod '"+i+"'");o>s?n=t/o:t=n*o}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=n,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){e.previewElement=o.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement);for(var n=0,i=i=e.previewElement.querySelectorAll("[data-dz-name]");!(n>=i.length);){var r=i[n++];r.textContent=e.name}for(var s=0,a=a=e.previewElement.querySelectorAll("[data-dz-size]");!(s>=a.length);)(r=a[s++]).innerHTML=this.filesize(e.size);this.options.addRemoveLinks&&(e._removeLink=o.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink));for(var l=function(n){return n.preventDefault(),n.stopPropagation(),e.status===o.UPLOADING?o.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?o.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)},u=0,c=c=e.previewElement.querySelectorAll("[data-dz-remove]");!(u>=c.length);)c[u++].addEventListener("click",l)}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(var n=0,i=i=e.previewElement.querySelectorAll("[data-dz-thumbnail]");!(n>=i.length);){var r=i[n++];r.alt=e.name,r.src=t}return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error);for(var n=0,i=i=e.previewElement.querySelectorAll("[data-dz-errormessage]");!(n>=i.length);)i[n++].textContent=t}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,n){if(e.previewElement)for(var i=0,r=r=e.previewElement.querySelectorAll("[data-dz-uploadprogress]");!(i>=r.length);){var o=r[i++];"PROGRESS"===o.nodeName?o.value=t:o.style.width=t+"%"}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];for(var r=0,o=o=n;!(r>=o.length);){var s=o[r++];for(var a in s){var l=s[a];e[a]=l}}return e}}]),i(o,[{key:"getAcceptedFiles",value:function(){return this.files.filter(function(e){return e.accepted}).map(function(e){return e})}},{key:"getRejectedFiles",value:function(){return this.files.filter(function(e){return!e.accepted}).map(function(e){return e})}},{key:"getFilesWithStatus",value:function(e){return this.files.filter(function(t){return t.status===e}).map(function(e){return e})}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(o.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(o.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(o.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter(function(e){return e.status===o.UPLOADING||e.status===o.QUEUED}).map(function(e){return e})}},{key:"init",value:function(){var e=this;"form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(o.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&function t(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null===e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!==e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!==e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var n=e.hiddenFileInput.files;if(n.length)for(var i=0,r=r=n;!(i>=r.length);){var o=r[i++];e.addFile(o)}return e.emit("addedfiles",n),t()})}(),this.URL=null!==window.URL?window.URL:window.webkitURL;for(var t=0,n=n=this.events;!(t>=n.length);){var i=n[t++];this.on(i,this.options[i])}this.on("uploadprogress",function(){return e.updateTotalUploadProgress()}),this.on("removedfile",function(){return e.updateTotalUploadProgress()}),this.on("canceled",function(t){return e.emit("complete",t)}),this.on("complete",function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)});var r=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(t){return e.emit("dragstart",t)},dragenter:function(t){return r(t),e.emit("dragenter",t)},dragover:function(t){var n=void 0;try{n=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",r(t),e.emit("dragover",t)},dragleave:function(t){return e.emit("dragleave",t)},drop:function(t){return r(t),e.drop(t)},dragend:function(t){return e.emit("dragend",t)}}}],this.clickableElements.forEach(function(t){return e.listeners.push({element:t,events:{click:function(n){return(t!==e.element||n.target===e.element||o.elementInside(n.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,o.instances.splice(o.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e=void 0,t=0,n=0;if(this.getActiveFiles().length){for(var i=0,r=r=this.getActiveFiles();!(i>=r.length);){var o=r[i++];t+=o.upload.bytesSent,n+=o.upload.total}e=100*t/n}else e=100;return this.emit("totaluploadprogress",e,n,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t=void 0;if(e=this.getExistingFallback())return e;var n='<div class="dz-fallback">';this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>';var i=o.createElement(n);return"FORM"!==this.element.tagName?(t=o.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(i):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:i}},{key:"getExistingFallback",value:function(){for(var e=["div","form"],t=0;t<e.length;t++){var n,i=e[t];if(n=function(e){for(var t=0,n=n=e;!(t>=n.length);){var i=n[t++];if(/(^| )fallback($| )/.test(i.className))return i}}(this.element.getElementsByTagName(i)))return n}}},{key:"setupEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var n in e.events){var i=e.events[n];t.push(e.element.addEventListener(n,i,!1))}return t}()})}},{key:"removeEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var n in e.events){var i=e.events[n];t.push(e.element.removeEventListener(n,i,!1))}return t}()})}},{key:"disable",value:function(){var e=this;return this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),this.files.map(function(t){return e.cancelUpload(t)})}},{key:"enable",value:function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,n="b";if(e>0){for(var i=["tb","gb","mb","kb","b"],r=0;r<i.length;r++){var o=i[r];if(e>=Math.pow(this.options.filesizeBase,4-r)/10){t=e/Math.pow(this.options.filesizeBase,4-r),n=o;break}}t=Math.round(10*t)/10}return"<strong>"+t+"</strong> "+this.options.dictFileSizeUnits[n]}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);var t=e.dataTransfer.files;if(this.emit("addedfiles",t),t.length){var n=e.dataTransfer.items;n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)}}}},{key:"paste",value:function(e){if(null!=(void 0!==(t=null!=e?e.clipboardData:void 0)&&null!==t?function(e){return e.items}(t):void 0)){var t;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){var t=this;return e.map(function(e){return t.addFile(e)})}},{key:"_addFilesFromItems",value:function(e){var t=this;return function(){for(var n=[],i=0,r=r=e;!(i>=r.length);){var o,s=r[i++];null!=s.webkitGetAsEntry&&(o=s.webkitGetAsEntry())?o.isFile?n.push(t.addFile(s.getAsFile())):o.isDirectory?n.push(t._addFilesFromDirectory(o,o.name)):n.push(void 0):null==s.getAsFile||null!=s.kind&&"file"!==s.kind?n.push(void 0):n.push(t.addFile(s.getAsFile()))}return n}()}},{key:"_addFilesFromDirectory",value:function(e,t){var n=this,i=e.createReader(),r=function(e){return t=console,n="log",i=function(t){return t.log(e)},void 0!==t&&null!==t&&"function"==typeof t[n]?i(t,n):void 0;var t,n,i};return function e(){return i.readEntries(function(i){if(i.length>0){for(var r=0,o=o=i;!(r>=o.length);){var s=o[r++];s.isFile?s.file(function(e){if(!n.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=t+"/"+e.name,n.addFile(e)}):s.isDirectory&&n._addFilesFromDirectory(s,t+"/"+s.name)}e()}return null},r)}()}},{key:"accept",value:function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):o.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var t=this;return e.upload={uuid:o.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e),chunked:this.options.chunking&&(this.options.forceChunking||e.size>this.options.chunkSize),totalChunkCount:Math.ceil(e.size/this.options.chunkSize)},this.files.push(e),e.status=o.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(n){return n?(e.accepted=!1,t._errorProcessing([e],n)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()})}},{key:"enqueueFiles",value:function(e){for(var t=0,n=n=e;!(t>=n.length);){var i=n[t++];this.enqueueFile(i)}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==o.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=o.QUEUED,this.options.autoProcessQueue)return setTimeout(function(){return t.processQueue()},0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(){return t._processThumbnailQueue()},0)}},{key:"_processThumbnailQueue",value:function(){var e=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var t=this._thumbnailQueue.shift();return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(n){return e.emit("thumbnail",t,n),e._processingThumbnail=!1,e._processThumbnailQueue()})}}},{key:"removeFile",value:function(e){if(e.status===o.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);for(var t=0,n=n=this.files.slice();!(t>=n.length);){var i=n[t++];(i.status!==o.UPLOADING||e)&&this.removeFile(i)}return null}},{key:"resizeImage",value:function(e,t,n,i,r){var s=this;return this.createThumbnail(e,t,n,i,!1,function(t,n){if(null===n)return r(e);var i=s.options.resizeMimeType;null==i&&(i=e.type);var a=n.toDataURL(i,s.options.resizeQuality);return"image/jpeg"!==i&&"image/jpg"!==i||(a=u.restore(e.dataURL,a)),r(o.dataURItoBlob(a))})}},{key:"createThumbnail",value:function(e,t,n,i,r,o){var s=this,a=new FileReader;return a.onload=function(){if(e.dataURL=a.result,"image/svg+xml"!==e.type)return s.createThumbnailFromUrl(e,t,n,i,r,o);null!=o&&o(a.result)},a.readAsDataURL(e)}},{key:"createThumbnailFromUrl",value:function(e,t,n,i,r,o,s){var a=this,u=document.createElement("img");return s&&(u.crossOrigin=s),u.onload=function(){var s=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&r&&(s=function(e){return EXIF.getData(u,function(){return e(EXIF.getTag(this,"Orientation"))})}),s(function(r){e.width=u.width,e.height=u.height;var s=a.options.resize.call(a,e,t,n,i),c=document.createElement("canvas"),d=c.getContext("2d");switch(c.width=s.trgWidth,c.height=s.trgHeight,r>4&&(c.width=s.trgHeight,c.height=s.trgWidth),r){case 2:d.translate(c.width,0),d.scale(-1,1);break;case 3:d.translate(c.width,c.height),d.rotate(Math.PI);break;case 4:d.translate(0,c.height),d.scale(1,-1);break;case 5:d.rotate(.5*Math.PI),d.scale(1,-1);break;case 6:d.rotate(.5*Math.PI),d.translate(0,-c.height);break;case 7:d.rotate(.5*Math.PI),d.translate(c.width,-c.height),d.scale(-1,1);break;case 8:d.rotate(-.5*Math.PI),d.translate(-c.width,0)}l(d,u,null!=s.srcX?s.srcX:0,null!=s.srcY?s.srcY:0,s.srcWidth,s.srcHeight,null!=s.trgX?s.trgX:0,null!=s.trgY?s.trgY:0,s.trgWidth,s.trgHeight);var p=c.toDataURL("image/png");if(null!=o)return o(p,c)})},null!=o&&(u.onerror=o),u.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,n=t;if(!(t>=e)){var i=this.getQueuedFiles();if(i.length>0){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,e-t));for(;n<e;){if(!i.length)return;this.processFile(i.shift()),n++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){for(var t=0,n=n=e;!(t>=n.length);){var i=n[t++];i.processing=!0,i.status=o.UPLOADING,this.emit("processing",i)}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter(function(t){return t.xhr===e}).map(function(e){return e})}},{key:"cancelUpload",value:function(e){if(e.status===o.UPLOADING){for(var t=this._getFilesWithXhr(e.xhr),n=0,i=i=t;!(n>=i.length);)i[n++].status=o.CANCELED;void 0!==e.xhr&&e.xhr.abort();for(var r=0,s=s=t;!(r>=s.length);){var a=s[r++];this.emit("canceled",a)}this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==o.ADDED&&e.status!==o.QUEUED||(e.status=o.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"==typeof e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e.apply(this,n)}return e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var t=this;this._transformFiles(e,function(n){if(e[0].upload.chunked){var i=e[0],r=n[0];i.upload.chunks=[];var s=function(){for(var n=0;void 0!==i.upload.chunks[n];)n++;if(!(n>=i.upload.totalChunkCount)){var s=n*t.options.chunkSize,a=Math.min(s+t.options.chunkSize,i.size),l={name:t._getParamName(0),data:r.webkitSlice?r.webkitSlice(s,a):r.slice(s,a),filename:i.upload.filename,chunkIndex:n};i.upload.chunks[n]={file:i,index:n,dataBlock:l,status:o.UPLOADING,progress:0,retries:0},t._uploadData(e,[l])}};if(i.upload.finishedChunkUpload=function(n){var r=!0;n.status=o.SUCCESS,n.dataBlock=null;for(var a=0;a<i.upload.totalChunkCount;a++){if(void 0===i.upload.chunks[a])return s();i.upload.chunks[a].status!==o.SUCCESS&&(r=!1)}r&&t.options.chunksUploaded(i,function(){t._finished(e,"",null)})},t.options.parallelChunkUploads)for(var a=0;a<i.upload.totalChunkCount;a++)s();else s()}else{for(var l=[],u=0;u<e.length;u++)l[u]={name:t._getParamName(u),data:n[u],filename:e[u].upload.filename};t._uploadData(e,l)}})}},{key:"_getChunk",value:function(e,t){for(var n=0;n<e.upload.totalChunkCount;n++)if(void 0!==e.upload.chunks[n]&&e.upload.chunks[n].xhr===t)return e.upload.chunks[n]}},{key:"_uploadData",value:function(e,t){for(var n=this,i=new XMLHttpRequest,r=0,s=s=e;!(r>=s.length);)s[r++].xhr=i;e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=i);var a=this.resolveOption(this.options.method,e),l=this.resolveOption(this.options.url,e);i.open(a,l,!0),i.timeout=this.resolveOption(this.options.timeout,e),i.withCredentials=!!this.options.withCredentials,i.onload=function(t){n._finishedUploading(e,i,t)},i.onerror=function(){n._handleUploadError(e,i)},(null!=i.upload?i.upload:i).onprogress=function(t){return n._updateFilesUploadProgress(e,i,t)};var u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var c in this.options.headers&&o.extend(u,this.options.headers),u){var d=u[c];d&&i.setRequestHeader(c,d)}var p=new FormData;if(this.options.params){var h=this.options.params;for(var f in"function"==typeof h&&(h=h.call(this,e,i,e[0].upload.chunked?this._getChunk(e[0],i):null)),h){var m=h[f];p.append(f,m)}}for(var v=0,g=g=e;!(v>=g.length);){var y=g[v++];this.emit("sending",y,i,p)}this.options.uploadMultiple&&this.emit("sendingmultiple",e,i,p),this._addFormElementData(p);for(var k=0;k<t.length;k++){var b=t[k];p.append(b.name,b.data,b.filename)}this.submitRequest(i,p,e)}},{key:"_transformFiles",value:function(e,t){for(var n=this,i=[],r=0,o=0;o<e.length;o++)!function(o){n.options.transformFile.call(n,e[o],function(n){i[o]=n,++r===e.length&&t(i)})}(o)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName)for(var t=0,n=n=this.element.querySelectorAll("input, textarea, select, button");!(t>=n.length);){var i=n[t++],r=i.getAttribute("name"),o=i.getAttribute("type");if(o&&(o=o.toLowerCase()),void 0!==r&&null!==r)if("SELECT"===i.tagName&&i.hasAttribute("multiple"))for(var s=0,a=a=i.options;!(s>=a.length);){var l=a[s++];l.selected&&e.append(r,l.value)}else(!o||"checkbox"!==o&&"radio"!==o||i.checked)&&e.append(r,i.value)}}},{key:"_updateFilesUploadProgress",value:function(e,t,n){var i=void 0;if(void 0!==n){if(i=100*n.loaded/n.total,e[0].upload.chunked){var r=e[0],o=this._getChunk(r,t);o.progress=i,o.total=n.total,o.bytesSent=n.loaded,r.upload.progress=0,r.upload.total=0,r.upload.bytesSent=0;for(var s=0;s<r.upload.totalChunkCount;s++)void 0!==r.upload.chunks[s]&&void 0!==r.upload.chunks[s].progress&&(r.upload.progress+=r.upload.chunks[s].progress,r.upload.total+=r.upload.chunks[s].total,r.upload.bytesSent+=r.upload.chunks[s].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else for(var a=0,l=l=e;!(a>=l.length);){var u=l[a++];u.upload.progress=i,u.upload.total=n.total,u.upload.bytesSent=n.loaded}for(var c=0,d=d=e;!(c>=d.length);){var p=d[c++];this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}else{var h=!0;i=100;for(var f=0,m=m=e;!(f>=m.length);){var v=m[f++];100===v.upload.progress&&v.upload.bytesSent===v.upload.total||(h=!1),v.upload.progress=i,v.upload.bytesSent=v.upload.total}if(h)return;for(var g=0,y=y=e;!(g>=y.length);){var k=y[g++];this.emit("uploadprogress",k,i,k.upload.bytesSent)}}}},{key:"_finishedUploading",value:function(e,t,n){var i=void 0;if(e[0].status!==o.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(i=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{i=JSON.parse(i)}catch(e){n=e,i="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t)):this._finished(e,i,n):this._handleUploadError(e,t,i)}}},{key:"_handleUploadError",value:function(e,t,n){if(e[0].status!==o.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var i=this._getChunk(e[0],t);if(i.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[i.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}for(var r=0,s=s=e;!(r>=s.length);)s[r++],this._errorProcessing(e,n||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}},{key:"submitRequest",value:function(e,t,n){e.send(t)}},{key:"_finished",value:function(e,t,n){for(var i=0,r=r=e;!(i>=r.length);){var s=r[i++];s.status=o.SUCCESS,this.emit("success",s,t,n),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,n){for(var i=0,r=r=e;!(i>=r.length);){var s=r[i++];s.status=o.ERROR,this.emit("error",s,t,n),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}]),o}();o.initClass(),o.version="5.2.0",o.options={},o.optionsForElement=function(e){return e.getAttribute("id")?o.options[a(e.getAttribute("id"))]:void 0},o.instances=[],o.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},o.autoDiscover=!0,o.discover=function(){var e=void 0;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];var t=function(t){return function(){for(var n=[],i=0,r=r=t;!(i>=r.length);){var o=r[i++];/(^| )dropzone($| )/.test(o.className)?n.push(e.push(o)):n.push(void 0)}return n}()};t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){for(var t=[],n=0,i=i=e;!(n>=i.length);){var r=i[n++];!1!==o.optionsForElement(r)?t.push(new o(r)):t.push(void 0)}return t}()},o.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],o.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(var t=0,n=n=o.blacklistedBrowsers;!(t>=n.length);)n[t++].test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},o.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(t.length),r=new Uint8Array(i),o=0,s=t.length,a=0<=s;a?o<=s:o>=s;a?o++:o--)r[o]=t.charCodeAt(o);return new Blob([i],{type:n})};var s=function(e,t){return e.filter(function(e){return e!==t}).map(function(e){return e})},a=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})};o.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},o.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},o.getElement=function(e,t){var n=void 0;if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return n},o.getElements=function(e,t){var n=void 0,i=void 0;if(e instanceof Array){i=[];try{for(var r=0,o=o=e;!(r>=o.length);)n=o[r++],i.push(this.getElement(n,t))}catch(e){i=null}}else if("string"==typeof e){i=[];for(var s=0,a=a=document.querySelectorAll(e);!(s>=a.length);)n=a[s++],i.push(n)}else null!=e.nodeType&&(i=[e]);if(null==i||!i.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return i},o.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},o.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");for(var n=e.type,i=n.replace(/\/.*$/,""),r=0,o=o=t;!(r>=o.length);){var s=o[r++];if("."===(s=s.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(n===s)return!0}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new o(this,e)})}),void 0!==e&&null!==e?e.exports=o:window.Dropzone=o,o.ADDED="added",o.QUEUED="queued",o.ACCEPTED=o.QUEUED,o.UPLOADING="uploading",o.PROCESSING=o.UPLOADING,o.CANCELED="canceled",o.ERROR="error",o.SUCCESS="success";var l=function(e,t,n,i,r,o,s,a,l,u){var c=function(e){e.naturalWidth;var t=e.naturalHeight,n=document.createElement("canvas");n.width=1,n.height=t;var i=n.getContext("2d");i.drawImage(e,0,0);for(var r=i.getImageData(1,0,1,t).data,o=0,s=t,a=t;a>o;)0===r[4*(a-1)+3]?s=a:o=a,a=s+o>>1;var l=a/t;return 0===l?1:l}(t);return e.drawImage(t,n,i,r,o,s,a,l,u/c)},u=function(){function e(){n(this,e)}return i(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",n=void 0,i=void 0,r="",o=void 0,s=void 0,a=void 0,l="",u=0;o=(n=e[u++])>>2,s=(3&n)<<4|(i=e[u++])>>4,a=(15&i)<<2|(r=e[u++])>>6,l=63&r,isNaN(i)?a=l=64:isNaN(r)&&(l=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(l),n=i=r="",o=s=a=l="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var n=this.decode64(e.replace("data:image/jpeg;base64,","")),i=this.slice2Segments(n),r=this.exifManipulation(t,i);return"data:image/jpeg;base64,"+this.encode64(r)}},{key:"exifManipulation",value:function(e,t){var n=this.getExifArray(t),i=this.insertExif(e,n);return new Uint8Array(i)}},{key:"getExifArray",value:function(e){for(var t=void 0,n=0;n<e.length;){if(255===(t=e[n])[0]&225===t[1])return t;n++}return[]}},{key:"insertExif",value:function(e,t){var n=e.replace("data:image/jpeg;base64,",""),i=this.decode64(n),r=i.indexOf(255,3),o=i.slice(0,r),s=i.slice(r),a=o;return a=(a=a.concat(t)).concat(s)}},{key:"slice2Segments",value:function(e){for(var t=0,n=[];!(255===e[t]&218===e[t+1]);){if(255===e[t]&216===e[t+1])t+=2;else{var i=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,i);n.push(r),t=i}if(t>e.length)break}return n}},{key:"decode64",value:function(e){var t=void 0,n=void 0,i="",r=void 0,o=void 0,s="",a=0,l=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(a++))<<2|(r=this.KEY_STR.indexOf(e.charAt(a++)))>>4,n=(15&r)<<4|(o=this.KEY_STR.indexOf(e.charAt(a++)))>>2,i=(3&o)<<6|(s=this.KEY_STR.indexOf(e.charAt(a++))),l.push(t),64!==o&&l.push(n),64!==s&&l.push(i),t=n=i="",r=o=s="",a<e.length;);return l}}]),e}();u.initClass(),o._autoDiscoverFunction=function(){if(o.autoDiscover)return o.discover()},function(e,t){var n=!1,i=!0,r=e.document,o=r.documentElement,s=r.addEventListener?"addEventListener":"attachEvent",a=r.addEventListener?"removeEventListener":"detachEvent",l=r.addEventListener?"":"on",u=function i(o){if("readystatechange"!==o.type||"complete"===r.readyState)return("load"===o.type?e:r)[a](l+o.type,i,!1),!n&&(n=!0)?t.call(e,o.type||o):void 0};if("complete"!==r.readyState){if(r.createEventObject&&o.doScroll){try{i=!e.frameElement}catch(e){}i&&function e(){try{o.doScroll("left")}catch(t){return void setTimeout(e,50)}return u("poll")}()}r[s](l+"DOMContentLoaded",u,!1),r[s](l+"readystatechange",u,!1),e[s](l+"load",u,!1)}}(window,o._autoDiscoverFunction)}).call(t,n(6)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}])});
//# sourceMappingURL=react-dropzone.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!../../autoprefixer-loader/index.js!../../sass-loader/lib/loader.js!./filepicker.css", function() {
			var newContent = require("!!../../css-loader/index.js!../../autoprefixer-loader/index.js!../../sass-loader/lib/loader.js!./filepicker.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "/* Filepicker CSS */\n.filepicker {\n  font-family: sans-serif; }\n\ndiv.filepicker {\n  text-align: center;\n  padding: 5px;\n  background-color: #E1E1E1;\n  border-radius: 5px;\n  min-height: 60px;\n  border: 2px dashed #C7C7C7; }\n\n/* Icon */\n.filepicker-file-icon {\n  position: relative;\n  display: inline-block;\n  margin: 1.5em 0 2.5em 0;\n  padding-left: 45px;\n  color: black; }\n\n.filepicker-file-icon::before {\n  position: absolute;\n  top: -7px;\n  left: 0;\n  width: 29px;\n  height: 34px;\n  content: '';\n  border: solid 2px #7F7F7F;\n  border-radius: 2px; }\n\n.filepicker-file-icon::after {\n  font-size: 11px;\n  line-height: 1.3;\n  position: absolute;\n  top: 9px;\n  left: -4px;\n  padding: 0 2px;\n  content: 'file';\n  content: attr(data-filetype);\n  text-align: right;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #000; }\n\n.filepicker-file-icon .fileCorner {\n  position: absolute;\n  top: -7px;\n  left: 22px;\n  width: 0;\n  height: 0;\n  border-width: 11px 0 0 11px;\n  border-style: solid;\n  border-color: white transparent transparent #920035; }\n", ""]);

// exports


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!../../../autoprefixer-loader/index.js!../../../sass-loader/lib/loader.js!./dropzone.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js!../../../autoprefixer-loader/index.js!../../../sass-loader/lib/loader.js!./dropzone.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.dropzone, .dropzone * {\n  box-sizing: border-box; }\n\n.dropzone {\n  min-height: 150px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  background: white;\n  padding: 20px 20px; }\n\n.dropzone.dz-clickable {\n  cursor: pointer; }\n\n.dropzone.dz-clickable * {\n  cursor: default; }\n\n.dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n  cursor: pointer; }\n\n.dropzone.dz-started .dz-message {\n  display: none; }\n\n.dropzone.dz-drag-hover {\n  border-style: solid; }\n\n.dropzone.dz-drag-hover .dz-message {\n  opacity: 0.5; }\n\n.dropzone .dz-message {\n  text-align: center;\n  margin: 2em 0; }\n\n.dropzone .dz-preview {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  margin: 16px;\n  min-height: 100px; }\n\n.dropzone .dz-preview:hover {\n  z-index: 1000; }\n\n.dropzone .dz-preview:hover .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview.dz-file-preview .dz-image {\n  border-radius: 20px;\n  background: #999;\n  background: linear-gradient(to bottom, #eee, #ddd); }\n\n.dropzone .dz-preview.dz-file-preview .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview.dz-image-preview {\n  background: white; }\n\n.dropzone .dz-preview.dz-image-preview .dz-details {\n  transition: opacity 0.2s linear; }\n\n.dropzone .dz-preview .dz-remove {\n  font-size: 14px;\n  text-align: center;\n  display: block;\n  cursor: pointer;\n  border: none; }\n\n.dropzone .dz-preview .dz-remove:hover {\n  text-decoration: underline; }\n\n.dropzone .dz-preview:hover .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview .dz-details {\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  font-size: 13px;\n  min-width: 100%;\n  max-width: 100%;\n  padding: 2em 1em;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.9);\n  line-height: 150%; }\n\n.dropzone .dz-preview .dz-details .dz-size {\n  margin-bottom: 1em;\n  font-size: 16px; }\n\n.dropzone .dz-preview .dz-details .dz-filename {\n  white-space: nowrap; }\n\n.dropzone .dz-preview .dz-details .dz-filename:hover span {\n  border: 1px solid rgba(200, 200, 200, 0.8);\n  background-color: rgba(255, 255, 255, 0.8); }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n  border: 1px solid transparent; }\n\n.dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 0 0.4em;\n  border-radius: 3px; }\n\n.dropzone .dz-preview:hover .dz-image img {\n  -webkit-transform: scale(1.05, 1.05);\n  transform: scale(1.05, 1.05);\n  -webkit-filter: blur(8px);\n  filter: blur(8px); }\n\n.dropzone .dz-preview .dz-image {\n  border-radius: 20px;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  display: block;\n  z-index: 10; }\n\n.dropzone .dz-preview .dz-image img {\n  display: block; }\n\n.dropzone .dz-preview.dz-success .dz-success-mark {\n  -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n  animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview.dz-error .dz-error-mark {\n  opacity: 1;\n  -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n  animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n  pointer-events: none;\n  opacity: 0;\n  z-index: 500;\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  margin-left: -27px;\n  margin-top: -27px; }\n\n.dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n  display: block;\n  width: 54px;\n  height: 54px; }\n\n.dropzone .dz-preview.dz-processing .dz-progress {\n  opacity: 1;\n  transition: all 0.2s linear; }\n\n.dropzone .dz-preview.dz-complete .dz-progress {\n  opacity: 0;\n  transition: opacity 0.4s ease-in; }\n\n.dropzone .dz-preview:not(.dz-processing) .dz-progress {\n  -webkit-animation: pulse 6s ease infinite;\n  animation: pulse 6s ease infinite; }\n\n.dropzone .dz-preview .dz-progress {\n  opacity: 1;\n  z-index: 1000;\n  pointer-events: none;\n  position: absolute;\n  height: 16px;\n  left: 50%;\n  top: 50%;\n  margin-top: -8px;\n  width: 80px;\n  margin-left: -40px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-transform: scale(1);\n  border-radius: 8px;\n  overflow: hidden; }\n\n.dropzone .dz-preview .dz-progress .dz-upload {\n  background: #333;\n  background: linear-gradient(to bottom, #666, #444);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  transition: width 300ms ease-in-out; }\n\n.dropzone .dz-preview.dz-error .dz-error-message {\n  display: block; }\n\n.dropzone .dz-preview.dz-error:hover .dz-error-message {\n  opacity: 1;\n  pointer-events: auto; }\n\n.dropzone .dz-preview .dz-error-message {\n  pointer-events: none;\n  z-index: 1000;\n  position: absolute;\n  display: block;\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  border-radius: 8px;\n  font-size: 13px;\n  top: 130px;\n  left: -10px;\n  width: 140px;\n  background: #be2626;\n  background: linear-gradient(to bottom, #be2626, #a92222);\n  padding: 0.5em 1.2em;\n  color: white; }\n\n.dropzone .dz-preview .dz-error-message:after {\n  content: '';\n  position: absolute;\n  top: -6px;\n  left: 64px;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #be2626; }\n", ""]);

// exports


/***/ })

});