webpackJsonp([4],{153:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(9),f=n(15),p=n(156),h=r(p),m=n(32),g=r(m);n(436);var v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loading:!1,edit:!1,imageLoaded:"",name:"",organization:"",title:"",summary:""},n}return l(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/api/v1/user",{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(t){if("JsonWebTokenError"===t.name)return void(window.location.href="/");var n=t.name,r=t.title,a=t.organization,o=t.summary;n=n||"",r=r||"",a=a||"",o=o||"",e.setState({name:n,organization:a,title:r,summary:o}),e.props.handleUser(t)}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){fetch("/api/v1/events/"+this.props.user.userID._id,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e,"!!!!!")}).catch(function(e){return console.log(e)})}},{key:"handleImageLoad",value:function(e){var t=this;e.preventDefault();var n=new FormData,r=document.querySelector(".file-field").files[0];this.setState({loading:!0}),n.append("file",r),fetch("/api/v1/cloudload",{method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){t.closeEdit(),t.setState({loading:!1}),t.props.handleImage(e),fetch("/api/v1/updateImage",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.props.user.userID._id,image:e})}).then(function(e){return e.json()}).then(function(e){if("Success"==e)return void console.log(e);console.log("ERRORWITHMONGO")}).catch(function(e){console.log(e,"ERRROR")})}).catch(function(e){return console.log(e)})}},{key:"determineImage",value:function(){return this.props.user.userID.image||"https://res.cloudinary.com/hdfmst19a/image/upload/v1518358978/placeholder_image_logo_jjtrzu.png"}},{key:"profileBasicDetails",value:function(){return c.default.createElement("div",{className:"account-profile-basic-details"},c.default.createElement("p",null,this.props.user.userID.name||"add your name"),c.default.createElement("p",null,this.props.user.userID.organization||"add your organization"),c.default.createElement("p",null,this.props.user.userID.title||"add your title"))}},{key:"profileSummaryDetails",value:function(){return c.default.createElement("pre",{className:"account-profile-summary"},this.props.user.userID.summary||"add a summary")}},{key:"handleEditBasicInfo",value:function(e){var t=this;e.preventDefault();var n=this.state,r=n.name,a=n.organization,o=n.title,i=n.summary,l=this.props.user.userID._id;fetch("/api/v1/user/update",{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:r,organization:a,title:o,summary:i,id:l})}).then(function(e){return e.json()}).then(function(e){return t.handleUserUpdate(e)}).catch(function(e){return console.log(e,"ERROR")})}},{key:"handleUserUpdate",value:function(e){if("Success"===e.message)return this.props.handleUser(e.user),void this.closeEdit()}},{key:"handleImagePath",value:function(e){var t=e.target.value.split(""),n=t.splice(t.indexOf("h")+2,t.length).join("");this.setState({imageLoaded:n})}},{key:"determineImageFile",value:function(){return this.state.imageLoaded?c.default.createElement("span",null,this.state.imageLoaded):null}},{key:"showEditProfile",value:function(){var e=this;return this.state.edit?c.default.createElement("div",{className:"edit-profile-container"},c.default.createElement("button",{className:"edit-profile-details-btn",onClick:function(){e.closeEdit()}},"cancel"),c.default.createElement("div",{className:"edit-image-form-container"},c.default.createElement("form",{className:"edit-image-form",onSubmit:function(t){e.handleImageLoad(t)},action:"/api/v1/image",method:"post",encType:"multipart/form-data"},c.default.createElement("div",null,"Load Image"),c.default.createElement("label",{htmlFor:"upload-photo"},"Choose Image"),c.default.createElement("input",{onChange:function(t){e.handleImagePath(t)},className:"file-field",name:"recfile",type:"file",id:"upload-photo"}),c.default.createElement("button",{type:"submit"},"Submit"),c.default.createElement("div",{className:"edit-image-bottom-container"},c.default.createElement("div",{className:"image-file-name-container"},this.determineImageFile()),c.default.createElement("div",{className:"image-loading-svg-container"},this.state.loading?c.default.createElement(h.default,{className:"image-loading-svg",path:"loading.svg",style:{width:200}}):null)))),c.default.createElement("div",{className:"edit-basic-form-container"},c.default.createElement("div",null,"Basic Info"),c.default.createElement("input",{placeholder:"name",value:this.state.name,onChange:function(t){e.editBasicInfo(t,"name")}}),c.default.createElement("input",{placeholder:"organization",value:this.state.organization,onChange:function(t){e.editBasicInfo(t,"organization")}}),c.default.createElement("input",{placeholder:"title",value:this.state.title,onChange:function(t){e.editBasicInfo(t,"title")}}),c.default.createElement("textarea",{placeholder:"summary",value:this.state.summary,onChange:function(t){e.editBasicInfo(t,"summary")}}),c.default.createElement("button",{onClick:function(t){e.handleEditBasicInfo(t)}},"Submit"))):null}},{key:"editProfile",value:function(e){e.preventDefault(),(0,g.default)("body").addClass("no-scroll"),this.setState({edit:!0})}},{key:"closeEdit",value:function(){this.setState({imageLoaded:""}),(0,g.default)("body").removeClass("no-scroll"),this.setState({edit:!1})}},{key:"editBasicInfo",value:function(e,t){this.setState(a({},t,e.target.value))}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{id:"profile-container"},c.default.createElement("section",{className:"account-profile-card-container"},c.default.createElement("div",{className:"account-profile-card-top"},c.default.createElement("button",{onClick:function(t){e.editProfile(t)},className:"edit-profile-details-btn"},"edit profile"),c.default.createElement("div",{className:"profile-image-wrapper"},c.default.createElement("div",{className:"profile-image",style:{backgroundImage:"url("+this.determineImage()+")"}}))),c.default.createElement("div",{className:"account-profile-bottom-card"},this.profileBasicDetails(),this.profileSummaryDetails()),this.showEditProfile()))}}]),t}(u.Component),y=function(e){return{user:e.user,events:e.events}},b=function(e){return{handleImage:function(t){e((0,f.loadImage)(t))},handleUser:function(t){e((0,f.updateUser)(t))},handleGatherEvents:function(t){e((0,f.gatherEvents)(t))},handleUpdateParticipant:function(t){e((0,f.updateParticipant)(t))}}};t.default=(0,d.connect)(y,b)(v)},156:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),u=r(s),c=n(0),d=r(c),f=n(277),p=r(f),h="undefined"!=typeof window,m=h?n(282):void 0,g=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.refCallback=function(e){if(!e)return void r.removeSVG();r.container=e,r.renderSVG()},i=n,o(r,i)}return i(t,e),l(t,[{key:"renderSVG",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.callback,n=e.className,r=e.evalScripts,a=e.path,o=e.style,i=document.createElement("div");i.innerHTML=p.default.renderToStaticMarkup(d.default.createElement("div",null,d.default.createElement("div",{className:n,"data-src":a,style:o})));var l=this.container.appendChild(i.firstChild);m(l.firstChild,{evalScripts:r,each:t})}},{key:"removeSVG",value:function(){this.container instanceof Node&&this.container.firstChild instanceof Node&&this.container.removeChild(this.container.firstChild)}},{key:"componentWillReceiveProps",value:function(e){this.removeSVG(),this.renderSVG(e)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return d.default.createElement("div",{ref:this.refCallback,className:this.props.wrapperClassName})}}]),t}(d.default.Component);g.defaultProps={callback:function(){},className:null,evalScripts:"once",style:{},wrapperClassName:null},g.propTypes={callback:u.default.func,className:u.default.string,evalScripts:u.default.oneOf(["always","once","never"]),path:u.default.string.isRequired,style:u.default.object,wrapperClassName:u.default.string},t.default=g,e.exports=t.default},277:function(e,t,n){"use strict";e.exports=n(278)},278:function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function a(e,t){return(e&t)===t}function o(e,t){if(O.hasOwnProperty(e)||2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))return!1;if(null===t)return!0;switch(typeof t){case"boolean":return l(e);case"undefined":case"number":case"string":case"object":return!0;default:return!1}}function i(e){return A.hasOwnProperty(e)?A[e]:null}function l(e){if(O.hasOwnProperty(e))return!0;var t=i(e);return t?t.hasBooleanValue||t.hasStringBooleanValue||t.hasOverloadedBooleanValue:"data-"===(e=e.toLowerCase().slice(0,5))||"aria-"===e}function s(e){return e[1].toUpperCase()}function u(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=U.exec(e);if(t){var n,r="",a=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}function c(e){return!!H.hasOwnProperty(e)||!B.hasOwnProperty(e)&&(z.test(e)?H[e]=!0:(B[e]=!0,!1))}function d(e,t){var n=i(e);if(n){if(null==t||n.hasBooleanValue&&!t||n.hasNumericValue&&isNaN(t)||n.hasPositiveNumericValue&&1>t||n.hasOverloadedBooleanValue&&!1===t)return"";var r=n.attributeName;if(n.hasBooleanValue||n.hasOverloadedBooleanValue&&!0===t)return r+'=""';if("boolean"!=typeof t||l(e))return r+'="'+u(t)+'"'}else if(o(e,t))return null==t?"":e+'="'+u(t)+'"';return null}function f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function p(e){return"string"==typeof e?e:"function"==typeof e?e.displayName||e.name:null}function h(e){var t="";return b.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}function m(e,t){if(e=e.contextTypes){var n,r={};for(n in e)r[n]=t[n];t=r}else t=w;return t}function g(e,t){void 0===e&&r("152",p(t)||"Component")}function v(e,t){for(;b.isValidElement(e);){var n=e,a=n.type;if("function"!=typeof a)break;e=m(a,t);var o=[],i=!1,l={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===o)return null},enqueueReplaceState:function(e,t){i=!0,o=[t]},enqueueSetState:function(e,t){if(null===o)return null;o.push(t)}};if(a.prototype&&a.prototype.isReactComponent)var s=new a(n.props,e,l);else if(null==(s=a(n.props,e,l))||null==s.render){e=s,g(e,a);continue}if(s.props=n.props,s.context=e,s.updater=l,l=s.state,void 0===l&&(s.state=l=null),s.componentWillMount)if(s.componentWillMount(),o.length){l=o;var u=i;if(o=null,i=!1,u&&1===l.length)s.state=l[0];else{var c=u?l[0]:s.state,d=!0;for(u=u?1:0;u<l.length;u++){var f=l[u];(f="function"==typeof f?f.call(s,c,n.props,e):f)&&(d?(d=!1,c=y({},c,f)):y(c,f))}s.state=c}}else o=null;if(e=s.render(),g(e,a),"function"==typeof s.getChildContext&&"object"==typeof(n=a.childContextTypes)){var h=s.getChildContext();for(var v in h)v in n||r("108",p(a)||"Unknown",v)}h&&(t=y({},t,h))}return{child:e,context:t}}/** @license React v16.2.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y=n(30),b=n(0),x=n(10),w=n(31),k=n(279),E=n(281),O={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0},S={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=S,n=e.Properties||{},o=e.DOMAttributeNamespaces||{},i=e.DOMAttributeNames||{};e=e.DOMMutationMethods||{};for(var l in n){A.hasOwnProperty(l)&&r("48",l);var s=l.toLowerCase(),u=n[l];s={attributeName:s,attributeNamespace:null,propertyName:l,mutationMethod:null,mustUseProperty:a(u,t.MUST_USE_PROPERTY),hasBooleanValue:a(u,t.HAS_BOOLEAN_VALUE),hasNumericValue:a(u,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:a(u,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:a(u,t.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:a(u,t.HAS_STRING_BOOLEAN_VALUE)},1>=s.hasBooleanValue+s.hasNumericValue+s.hasOverloadedBooleanValue||r("50",l),i.hasOwnProperty(l)&&(s.attributeName=i[l]),o.hasOwnProperty(l)&&(s.attributeNamespace=o[l]),e.hasOwnProperty(l)&&(s.mutationMethod=e[l]),A[l]=s}}},A={},N=S,C=N.MUST_USE_PROPERTY,_=N.HAS_BOOLEAN_VALUE,M=N.HAS_NUMERIC_VALUE,I=N.HAS_POSITIVE_NUMERIC_VALUE,P=N.HAS_OVERLOADED_BOOLEAN_VALUE,V=N.HAS_STRING_BOOLEAN_VALUE,T={Properties:{allowFullScreen:_,async:_,autoFocus:_,autoPlay:_,capture:P,checked:C|_,cols:I,contentEditable:V,controls:_,default:_,defer:_,disabled:_,download:P,draggable:V,formNoValidate:_,hidden:_,loop:_,multiple:C|_,muted:C|_,noValidate:_,open:_,playsInline:_,readOnly:_,required:_,reversed:_,rows:I,rowSpan:M,scoped:_,seamless:_,selected:C|_,size:I,start:M,span:I,spellCheck:V,style:0,tabIndex:0,itemScope:_,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:V},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&e.setAttribute("value",""+t)}}},F=N.HAS_STRING_BOOLEAN_VALUE,L={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},D={Properties:{autoReverse:F,externalResourcesRequired:F,preserveAlpha:F},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:L.xlink,xlinkArcrole:L.xlink,xlinkHref:L.xlink,xlinkRole:L.xlink,xlinkShow:L.xlink,xlinkTitle:L.xlink,xlinkType:L.xlink,xmlBase:L.xml,xmlLang:L.xml,xmlSpace:L.xml}},R=/[\-\:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(e){var t=e.replace(R,s);D.Properties[t]=0,D.DOMAttributeNames[t]=e}),N.injectDOMPropertyConfig(T),N.injectDOMPropertyConfig(D);var j="function"==typeof Symbol&&Symbol.for?Symbol.for("react.fragment"):60107,U=/["'&<>]/,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B={},H={},G={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},q={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},W=y({menuitem:!0},q),X={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z=["Webkit","ms","Moz","O"];Object.keys(X).forEach(function(e){Z.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),X[t]=X[e]})});var J=b.Children.toArray,$=x.thatReturns(""),Y={listing:!0,pre:!0,textarea:!0},K=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Q={},ee=E(function(e){return k(e)}),te={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null},ne=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");b.isValidElement(t)?t.type!==j?t=[t]:(t=t.props.children,t=b.isValidElement(t)?[t]:J(t)):t=J(t),this.stack=[{domNamespace:G.html,children:t,childIndex:0,context:w,footer:""}],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n}return e.prototype.read=function(e){if(this.exhausted)return null;for(var t="";t.length<e;){if(0===this.stack.length){this.exhausted=!0;break}var n=this.stack[this.stack.length-1];if(n.childIndex>=n.children.length){var r=n.footer;t+=r,""!==r&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===n.tag&&(this.currentSelectValue=null)}else r=n.children[n.childIndex++],t+=this.render(r,n.context,n.domNamespace)}return t},e.prototype.render=function(e,t,n){return"string"==typeof e||"number"==typeof e?""===(n=""+e)?"":this.makeStaticMarkup?u(n):this.previousWasTextNode?"\x3c!-- --\x3e"+u(n):(this.previousWasTextNode=!0,u(n)):(t=v(e,t),e=t.child,t=t.context,null===e||!1===e?"":b.isValidElement(e)?e.type===j?(e=J(e.props.children),this.stack.push({domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""):this.renderDOM(e,t,n):(e=J(e),this.stack.push({domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""))},e.prototype.renderDOM=function(e,t,n){var a=e.type.toLowerCase();n===G.html&&f(a),Q.hasOwnProperty(a)||(K.test(a)||r("65",a),Q[a]=!0);var o=e.props;if("input"===a)o=y({type:void 0},o,{defaultChecked:void 0,defaultValue:void 0,value:null!=o.value?o.value:o.defaultValue,checked:null!=o.checked?o.checked:o.defaultChecked});else if("textarea"===a){var i=o.value;if(null==i){i=o.defaultValue;var l=o.children;null!=l&&(null!=i&&r("92"),Array.isArray(l)&&(1>=l.length||r("93"),l=l[0]),i=""+l),null==i&&(i="")}o=y({},o,{value:void 0,children:""+i})}else if("select"===a)this.currentSelectValue=null!=o.value?o.value:o.defaultValue,o=y({},o,{value:void 0});else if("option"===a){l=this.currentSelectValue;var s=h(o.children);if(null!=l){var p=null!=o.value?o.value+"":s;if(i=!1,Array.isArray(l)){for(var m=0;m<l.length;m++)if(""+l[m]===p){i=!0;break}}else i=""+l===p;o=y({selected:void 0,children:void 0},o,{selected:i,children:s})}}(i=o)&&(W[a]&&(null!=i.children||null!=i.dangerouslySetInnerHTML)&&r("137",a,$()),null!=i.dangerouslySetInnerHTML&&(null!=i.children&&r("60"),"object"==typeof i.dangerouslySetInnerHTML&&"__html"in i.dangerouslySetInnerHTML||r("61")),null!=i.style&&"object"!=typeof i.style&&r("62",$())),i=o,l=this.makeStaticMarkup,s=1===this.stack.length,p="<"+e.type;for(k in i)if(i.hasOwnProperty(k)){var g=i[k];if(null!=g){if("style"===k){m=void 0;var v="",b="";for(m in g)if(g.hasOwnProperty(m)){var x=0===m.indexOf("--"),w=g[m];null!=w&&(v+=b+ee(m)+":",b=m,x=null==w||"boolean"==typeof w||""===w?"":x||"number"!=typeof w||0===w||X.hasOwnProperty(b)&&X[b]?(""+w).trim():w+"px",v+=x,b=";")}g=v||null}m=null;e:if(x=a,w=i,-1===x.indexOf("-"))x="string"==typeof w.is;else switch(x){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":x=!1;break e;default:x=!0}x?te.hasOwnProperty(k)||(m=k,m=c(m)&&null!=g?m+'="'+u(g)+'"':""):m=d(k,g),m&&(p+=" "+m)}}l||s&&(p+=' data-reactroot=""');var k=p;i="",q.hasOwnProperty(a)?k+="/>":(k+=">",i="</"+e.type+">");e:{if(null!=(l=o.dangerouslySetInnerHTML)){if(null!=l.__html){l=l.__html;break e}}else if("string"==typeof(l=o.children)||"number"==typeof l){l=u(l);break e}l=null}return null!=l?(o=[],Y[a]&&"\n"===l.charAt(0)&&(k+="\n"),k+=l):o=J(o.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?f(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,tag:a,children:o,childIndex:0,context:t,footer:i}),this.previousWasTextNode=!1,k},e}(),re={renderToString:function(e){return new ne(e,!1).read(1/0)},renderToStaticMarkup:function(e){return new ne(e,!0).read(1/0)},renderToNodeStream:function(){r("207")},renderToStaticNodeStream:function(){r("208")},version:"16.2.0"},ae=Object.freeze({default:re}),oe=ae&&re||ae;e.exports=oe.default?oe.default:oe},279:function(e,t,n){"use strict";function r(e){return a(e).replace(o,"-ms-")}var a=n(280),o=/^ms-/;e.exports=r},280:function(e,t,n){"use strict";function r(e){return e.replace(a,"-$1").toLowerCase()}var a=/([A-Z])/g;e.exports=r},281:function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}e.exports=r},282:function(e,t,n){var r;/**
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 */
!function(a,o){"use strict";function i(e){e=e.split(" ");for(var t={},n=e.length,r=[];n--;)t.hasOwnProperty(e[n])||(t[e[n]]=1,r.unshift(e[n]));return r.join(" ")}var l="file:"===a.location.protocol,s=o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),u=Array.prototype.forEach||function(e,t){if(void 0===this||null===this||"function"!=typeof e)throw new TypeError;var n,r=this.length>>>0;for(n=0;n<r;++n)n in this&&e.call(t,this[n],n,this)},c={},d=0,f=[],p=[],h={},m=function(e){return e.cloneNode(!0)},g=function(e,t){p[e]=p[e]||[],p[e].push(t)},v=function(e){for(var t=0,n=p[e].length;t<n;t++)!function(t){setTimeout(function(){p[e][t](m(c[e]))},0)}(t)},y=function(e,t){if(void 0!==c[e])c[e]instanceof SVGSVGElement?t(m(c[e])):g(e,t);else{if(!a.XMLHttpRequest)return t("Browser does not support XMLHttpRequest"),!1;c[e]={},g(e,t);var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){if(404===n.status||null===n.responseXML)return t("Unable to load SVG file: "+e),l&&t("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),t(),!1;if(!(200===n.status||l&&0===n.status))return t("There was a problem injecting the SVG: "+n.status+" "+n.statusText),!1;if(n.responseXML instanceof Document)c[e]=n.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var r;try{var a=new DOMParser;r=a.parseFromString(n.responseText,"text/xml")}catch(e){r=void 0}if(!r||r.getElementsByTagName("parsererror").length)return t("Unable to parse SVG file: "+e),!1;c[e]=r.documentElement}v(e)}},n.open("GET",e),n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()}},b=function(e,t,n,r){var o=e.getAttribute("data-src")||e.getAttribute("src");if(!/\.svg/i.test(o))return void r("Attempted to inject a file with a non-svg extension: "+o);if(!s){var l=e.getAttribute("data-fallback")||e.getAttribute("data-png");return void(l?(e.setAttribute("src",l),r(null)):n?(e.setAttribute("src",n+"/"+o.split("/").pop().replace(".svg",".png")),r(null)):r("This browser does not support SVG and no PNG fallback was defined."))}-1===f.indexOf(e)&&(f.push(e),e.setAttribute("src",""),y(o,function(n){if(void 0===n||"string"==typeof n)return r(n),!1;var l=e.getAttribute("id");l&&n.setAttribute("id",l);var s=e.getAttribute("title");s&&n.setAttribute("title",s);var c=[].concat(n.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");n.setAttribute("class",i(c));var p=e.getAttribute("style");p&&n.setAttribute("style",p);var m=[].filter.call(e.attributes,function(e){return/^data-\w[\w\-]*$/.test(e.name)});u.call(m,function(e){e.name&&e.value&&n.setAttribute(e.name,e.value)});var g,v,y,b,x,w={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(w).forEach(function(e){g=e,y=w[e],v=n.querySelectorAll("defs "+g+"[id]");for(var t=0,r=v.length;t<r;t++){b=v[t].id,x=b+"-"+d;var a;u.call(y,function(e){a=n.querySelectorAll("["+e+'*="'+b+'"]');for(var t=0,r=a.length;t<r;t++)a[t].setAttribute(e,"url(#"+x+")")}),v[t].id=x}}),n.removeAttribute("xmlns:a");for(var k,E,O=n.querySelectorAll("script"),S=[],A=0,N=O.length;A<N;A++)(E=O[A].getAttribute("type"))&&"application/ecmascript"!==E&&"application/javascript"!==E||(k=O[A].innerText||O[A].textContent,S.push(k),n.removeChild(O[A]));if(S.length>0&&("always"===t||"once"===t&&!h[o])){for(var C=0,_=S.length;C<_;C++)new Function(S[C])(a);h[o]=!0}var M=n.querySelectorAll("style");u.call(M,function(e){e.textContent+=""}),e.parentNode.replaceChild(n,e),delete f[f.indexOf(e)],e=null,d++,r(n)}))},x=function(e,t,n){t=t||{};var r=t.evalScripts||"always",a=t.pngFallback||!1,o=t.each;if(void 0!==e.length){var i=0;u.call(e,function(t){b(t,r,a,function(t){o&&"function"==typeof o&&o(t),n&&e.length===++i&&n(i)})})}else e?b(e,r,a,function(t){o&&"function"==typeof o&&o(t),n&&n(1),e=null}):n&&n(0)};"object"==typeof e&&"object"==typeof e.exports?e.exports=t=x:void 0!==(r=function(){return x}.call(t,n,t,e))&&(e.exports=r)}(window,document)},436:function(e,t,n){var r=n(437);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;n(8)(r,a);r.locals&&(e.exports=r.locals)},437:function(e,t,n){t=e.exports=n(7)(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Fredoka+One|Nunito|Comfortaa|Maven+Pro);",""]),t.push([e.i,'* {\n  box-sizing: border-box; }\n\n#profile-container {\n  padding-top: 100px; }\n\n.account-profile-card-container {\n  border: 2px solid #84c1eb;\n  margin: 0px auto;\n  max-width: 400px;\n  min-width: 320px;\n  width: 100%; }\n\n.account-profile-card-top {\n  background: linear-gradient(to bottom right, #22c1c3, #a8c0ff);\n  height: 160px;\n  position: relative; }\n\n.profile-image-wrapper {\n  bottom: -85px;\n  position: absolute;\n  width: 100%; }\n\n.profile-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 100%;\n  height: 175px;\n  margin: 0px auto;\n  width: 175px; }\n\n.edit-profile-details-btn,\n.edit-image-form button {\n  background: #fff;\n  border-radius: 64px;\n  border: #dd7782 3px solid;\n  color: #dd7782;\n  font-family: "Comfortaa", serif;\n  font-size: 1.1em;\n  margin: 10px;\n  padding: 14px;\n  outline: none;\n  text-decoration: none;\n  text-align: center;\n  transition: all 0.8s;\n  width: 140px; }\n  .edit-profile-details-btn:hover,\n  .edit-image-form button:hover {\n    background: #dd7782;\n    color: #fff; }\n\n.edit-profile-details-btn {\n  float: right; }\n\n.account-profile-bottom-card {\n  padding-top: 110px; }\n\n.account-profile-basic-details {\n  border-bottom: 3px solid cyan;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin: 0px auto;\n  width: 90%; }\n  .account-profile-basic-details p {\n    background: #fff;\n    border: #dd7782 3px solid;\n    color: #dd7782;\n    font-family: "Comfortaa", serif;\n    font-size: 1.1em;\n    margin: 10px;\n    padding: 14px;\n    outline: none;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.8s; }\n\n.account-profile-summary {\n  color: #dd7782;\n  font-family: "Comfortaa", serif;\n  font-size: 1em;\n  margin: 0px auto;\n  padding: 20px 0px;\n  width: 90%; }\n\n.edit-profile-container {\n  background: rgba(0, 0, 0, 0.9);\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 50;\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll; }\n\n.edit-image-form-container {\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0px auto;\n  text-align: center;\n  width: 100%; }\n\n.edit-image-form {\n  background: #fff;\n  margin: 75px auto 10px;\n  width: 100%; }\n  .edit-image-form div {\n    color: #dd7782;\n    font-family: "Comfortaa", serif;\n    padding-top: 20px;\n    text-align: center; }\n  .edit-image-form input {\n    height: 0px;\n    opacity: 0;\n    width: 0px; }\n  .edit-image-form label {\n    background: #fff;\n    border: #dd7782 3px solid;\n    border-radius: 64px;\n    color: #dd7782;\n    font-family: "Comfortaa", serif;\n    font-size: 1.1em;\n    margin: 10px;\n    padding: 14px;\n    outline: none;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.8s;\n    width: 270px; }\n    .edit-image-form label:hover {\n      background: #dd7782;\n      color: #fff; }\n\n.edit-image-bottom-container {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 165px; }\n\n.image-loading-svg-container {\n  height: 100px;\n  padding-top: 0px;\n  padding-bottom: 15px;\n  margin: 0px auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 50px; }\n\n.edit-basic-form-container {\n  -ms-flex-align: center;\n      align-items: center;\n  background: #fff;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 100%; }\n  .edit-basic-form-container div {\n    color: #dd7782;\n    font-family: "Comfortaa", serif;\n    margin-bottom: 10px;\n    padding-top: 20px;\n    text-align: center; }\n  .edit-basic-form-container input,\n  .edit-basic-form-container textarea {\n    border: 2px solid #dd7782;\n    color: #dd7782;\n    font-size: 1em;\n    height: 50px;\n    margin-bottom: 10px;\n    outline: none;\n    padding-left: 10px;\n    resize: vertical;\n    transition: all 0.5s;\n    width: 270px; }\n    .edit-basic-form-container input:focus,\n    .edit-basic-form-container textarea:focus {\n      border: 2px solid #19f6e8; }\n  .edit-basic-form-container textarea {\n    padding-top: 14px; }\n  .edit-basic-form-container button {\n    background: #fff;\n    border: #dd7782 3px solid;\n    border-radius: 64px;\n    color: #dd7782;\n    font-family: "Comfortaa", serif;\n    font-size: 1.1em;\n    margin: 10px;\n    padding: 14px;\n    outline: none;\n    text-decoration: none;\n    text-align: center;\n    transition: all 0.8s;\n    width: 270px; }\n    .edit-basic-form-container button:hover {\n      background: #dd7782;\n      color: #fff; }\n\n.no-scroll {\n  overflow: hidden; }\n',""])}});