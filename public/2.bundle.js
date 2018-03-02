webpackJsonp([2],{157:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),f=n(9),d=n(163),p=r(d),h=n(55),v=r(h),m=n(32),y=r(m),g=n(453),b=r(g),w=n(15),_=n(471),O=r(_);n(477);var x=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={date:new Date,activeEvents:[],eventDates:[],loading:!1,edit:!1,imageLoaded:"",name:"",organization:"",title:"",summary:""},n}return l(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){if(e.events){var t=e.events.map(function(e){return{date:new Date(e.date),id:e._id}});this.setState({eventDates:t,id:event._id})}}},{key:"componentWillMount",value:function(){var e=this,t={delay:"0",duration:"0"};v.default.animateScroll.scrollToTop(t),fetch("/api/v1/user",{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(t){if("JsonWebTokenError"===t.name)return void(window.location.href="/");var n=t.name,r=t.title,a=t.organization,o=t.summary;n=n||"",r=r||"",a=a||"",o=o||"",e.setState({name:n,organization:a,title:r,summary:o}),e.props.handleUser(t)}).catch(function(e){return console.log(e)}),fetch("/api/v1/events/"+this.props.user.userID._id,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.props.handleGeneratePersonalEvents(t)}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.scrollAfterLoad()}},{key:"scrollAfterLoad",value:function(){setTimeout(function(){return v.default.scroller.scrollTo("profile-container",{duration:600,delay:0,smooth:!0})},500)}},{key:"handleImageLoad",value:function(e){var t=this;e.preventDefault();var n=new FormData,r=document.querySelector(".file-field").files[0];this.setState({loading:!0}),n.append("file",r),fetch("/api/v1/cloudload",{method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){t.closeEdit(),t.setState({loading:!1}),t.props.handleImage(e),fetch("/api/v1/updateImage",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.props.user.userID._id,image:e})}).then(function(e){return e.json()}).then(function(e){if("Success"==e)return void console.log(e);console.log("ERRORWITHMONGO")}).catch(function(e){console.log(e,"ERRROR")})}).catch(function(e){return console.log(e)})}},{key:"determineImage",value:function(){return this.props.user.userID.image?this.props.user.userID.image.url:"https://res.cloudinary.com/hdfmst19a/image/upload/v1519598001/rp2tjf5ftdpmfhetgoyf.png"}},{key:"profileBasicDetails",value:function(){return c.default.createElement("div",{className:"account-profile-basic-details"},c.default.createElement("p",null,this.props.user.userID.name||"add your name"),c.default.createElement("p",null,this.props.user.userID.organization||"add your organization"),c.default.createElement("p",null,this.props.user.userID.title||"add your title"))}},{key:"profileSummaryDetails",value:function(){return c.default.createElement("pre",{className:"account-profile-summary"},this.props.user.userID.summary||"add a summary")}},{key:"handleEditBasicInfo",value:function(e){var t=this;e.preventDefault();var n=this.state,r=n.name,a=n.organization,o=n.title,i=n.summary,l=this.props.user.userID._id;fetch("/api/v1/user/update",{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:r,organization:a,title:o,summary:i,id:l})}).then(function(e){return e.json()}).then(function(e){return t.handleUserUpdate(e)}).catch(function(e){return console.log(e,"ERROR")})}},{key:"handleUserUpdate",value:function(e){if("Success"===e.message)return this.props.handleUser(e.user),void this.closeEdit()}},{key:"handleImagePath",value:function(e){var t=e.target.value.split(""),n=t.splice(t.indexOf("h")+2,t.length).join("");this.setState({imageLoaded:n})}},{key:"determineImageFile",value:function(){return this.state.imageLoaded?c.default.createElement("span",null,this.state.imageLoaded):null}},{key:"showEditProfile",value:function(){var e=this;return this.state.edit?c.default.createElement("div",{className:"edit-profile-container"},c.default.createElement("button",{className:"edit-profile-details-btn",onClick:function(){e.closeEdit()}},"cancel"),c.default.createElement("div",{className:"edit-image-form-container"},c.default.createElement("form",{className:"edit-image-form",onSubmit:function(t){e.handleImageLoad(t)},action:"/api/v1/image",method:"post",encType:"multipart/form-data"},c.default.createElement("div",null,"Load Image"),c.default.createElement("label",{htmlFor:"upload-photo"},"Choose Image"),c.default.createElement("input",{onChange:function(t){e.handleImagePath(t)},className:"file-field",name:"recfile",type:"file",id:"upload-photo"}),c.default.createElement("button",{type:"submit"},"Submit"),c.default.createElement("div",{className:"edit-image-bottom-container"},c.default.createElement("div",{className:"image-file-name-container"},this.determineImageFile()),c.default.createElement("div",{className:"image-loading-svg-container"},this.state.loading?c.default.createElement(p.default,{className:"image-loading-svg",path:"loading.svg",style:{width:200}}):null)))),c.default.createElement("div",{className:"edit-basic-form-container"},c.default.createElement("div",null,"Basic Info"),c.default.createElement("input",{placeholder:"name",value:this.state.name,onChange:function(t){e.editBasicInfo(t,"name")}}),c.default.createElement("input",{placeholder:"organization",value:this.state.organization,onChange:function(t){e.editBasicInfo(t,"organization")}}),c.default.createElement("input",{placeholder:"title",value:this.state.title,onChange:function(t){e.editBasicInfo(t,"title")}}),c.default.createElement("textarea",{placeholder:"summary",value:this.state.summary,onChange:function(t){e.editBasicInfo(t,"summary")}}),c.default.createElement("button",{onClick:function(t){e.handleEditBasicInfo(t)}},"Submit"))):null}},{key:"editProfile",value:function(e){e.preventDefault(),(0,y.default)("body").addClass("no-scroll"),this.setState({edit:!0})}},{key:"closeEdit",value:function(){this.setState({imageLoaded:""}),(0,y.default)("body").removeClass("no-scroll"),this.setState({edit:!1})}},{key:"editBasicInfo",value:function(e,t){this.setState(a({},t,e.target.value))}},{key:"checkCalendarDay",value:function(e,t){var n=!1;if(this.state.eventDates.length){var r=new Date(e),a=r.getDate(),o=r.getMonth(),i=r.getYear();this.state.eventDates.forEach(function(e){var t=new Date(e.date),r=t.getDate(),l=t.getMonth(),u=t.getYear();r==a&&l==o&&u==i&&(n=!0)})}return n?"active-calendar-day":"not-active-calendar-day"}},{key:"handleEventUpdate",value:function(){this.setState({eventsDate:this.props.events})}},{key:"handleCalendarClick",value:function(e){var t=new Date(e),n=t.getDate(),r=t.getMonth(),a=t.getYear(),o=this.props.events.filter(function(e){e=new Date(e.date);var t=e.getDate(),o=e.getMonth(),i=e.getYear();return t==n&&o==r&&i==a});this.setState({activeEvents:o})}},{key:"render",value:function(){var e=this,t=this;return c.default.createElement("div",{id:"profile-container"},c.default.createElement("section",{className:"account-profile-card-container"},c.default.createElement("div",{className:"account-profile-card-top"},c.default.createElement("button",{onClick:function(t){e.editProfile(t)},className:"edit-profile-details-btn"},"edit profile"),c.default.createElement("div",{className:"profile-image-wrapper"},c.default.createElement("div",{className:"profile-image",style:{backgroundImage:"url("+this.determineImage()+")"}}))),c.default.createElement("div",{className:"account-profile-bottom-card"},this.profileBasicDetails(),this.profileSummaryDetails()),this.showEditProfile()),c.default.createElement("section",{className:"profile-events-list-wrapper"},c.default.createElement(b.default,{onChange:function(e){t.handleCalendarClick(e)},tileClassName:function(e){var n=e.date,r=e.view;return t.checkCalendarDay(n,r)},value:this.state.date}),c.default.createElement(O.default,{setParentState:this.setState.bind(this),handleUpdateParticipant:this.props.handleUpdateParticipant,user:this.props.user,events:this.state.activeEvents})))}}]),t}(s.Component),k=function(e){return{user:e.user,events:e.personalEvents}},D=function(e){return{handleImage:function(t){e((0,w.loadImage)(t))},handleUser:function(t){e((0,w.updateUser)(t))},handleGeneratePersonalEvents:function(t){e((0,w.generatePersonalEvents)(t))},handleUpdateParticipant:function(t){e((0,w.updatePersonalEvents)(t))}}};t.default=(0,f.connect)(k,D)(x)},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tileProps=t.tileGroupProps=t.isView=t.isClassName=t.isViews=t.isValue=t.isMaxDate=t.isMinDate=t.isCalendarType=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),i=["ISO 8601","US"],l=["century","decade","year","month"],u=(t.isCalendarType=o.default.oneOf(i),t.isMinDate=function(e,t,n){var a=e[t];if(a){if(!(a instanceof Date))return new Error("Invalid prop `"+t+"` of type `"+(void 0===a?"undefined":r(a))+"` supplied to `"+n+"`, expected instance of `Date`.");var o=e.maxDate;if(o&&a>o)return new Error("Invalid prop `"+t+"` of type `"+(void 0===a?"undefined":r(a))+"` supplied to `"+n+"`, minDate cannot be larger than maxDate.")}return null}),s=t.isMaxDate=function(e,t,n){var a=e[t];if(a){if(!(a instanceof Date))return new Error("Invalid prop `"+t+"` of type `"+(void 0===a?"undefined":r(a))+"` supplied to `"+n+"`, expected instance of `Date`.");var o=e.minDate;if(o&&a<o)return new Error("Invalid prop `"+t+"` of type `"+(void 0===a?"undefined":r(a))+"` supplied to `"+n+"`, maxDate cannot be smaller than minDate.")}return null},c=t.isValue=o.default.oneOfType([o.default.instanceOf(Date),o.default.arrayOf(o.default.instanceOf(Date))]),f=(t.isViews=o.default.arrayOf(o.default.oneOf(l)),t.isClassName=o.default.oneOfType([o.default.string,o.default.arrayOf(o.default.string)])),d=t.isView=function(e,t,n){var r=e[t];return-1===(e.views||l).indexOf(r)?new Error("Invalid prop `"+t+"` of value `"+r+"` supplied to `"+n+"`, expected one of ["+["a","b","c","d","e"].map(function(e){return'"'+e+'"'}).join(", ")+"]."):null};d.isRequired=function(e,t,n){var r=e[t];return r?d(e,t,n):new Error("The prop `"+t+"` is marked as required in `"+n+"`, but its value is `"+r+"`.")};t.tileGroupProps={activeStartDate:o.default.instanceOf(Date).isRequired,hover:o.default.instanceOf(Date),maxDate:s,minDate:u,onClick:o.default.func,onMouseOver:o.default.func,tileClassName:o.default.oneOfType([o.default.func,f]),tileContent:o.default.oneOfType([o.default.func,o.default.node]),value:c,valueType:o.default.string},t.tileProps={classes:o.default.arrayOf(o.default.string).isRequired,date:o.default.instanceOf(Date).isRequired,maxDate:s,minDate:u,onClick:o.default.func,onMouseOver:o.default.func,style:o.default.objectOf(o.default.oneOfType([o.default.string,o.default.number])),tileClassName:o.default.oneOfType([o.default.func,f]),tileContent:o.default.oneOfType([o.default.func,o.default.node]),tileDisabled:o.default.func}},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=t.getYear=function(e){if(e instanceof Date)return e.getFullYear();if("number"==typeof e)return e;var t=parseInt(e,10);if("string"==typeof e&&!isNaN(t))return t;throw new Error("Failed to get year from date: "+e+".")},o=t.getMonth=function(e){return e.getMonth()+1},i=t.getMonthIndex=function(e){return e.getMonth()},l=t.getDay=function(e){return e.getDate()},u=t.getDayOfWeek=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ISO 8601",n=e.getDay();switch(t){case"ISO 8601":return(n+6)%7;case"US":return n;default:throw new Error("Unsupported calendar type.")}},s=t.getBeginOfCenturyYear=function(e){var t=a(e)-1;return t+-t%100+1},c=t.getBeginOfCentury=function(e){var t=s(e);return new Date(t,0,1)},f=t.getEndOfCentury=function(e){var t=s(e);return new Date(t+100,0,1,0,0,0,-1)},d=t.getCenturyRange=function(e){return[c(e),f(e)]},p=t.getBeginOfPreviousCentury=function(e){var t=a(e)-100;return c(t)},h=t.getEndOfPreviousCentury=function(e){var t=a(e)-100;return f(t)},v=t.getBeginOfNextCentury=function(e){var t=a(e)+100;return c(t)},m=t.getBeginOfDecadeYear=function(e){var t=a(e)-1;return t+-t%10+1},y=t.getBeginOfDecade=function(e){var t=m(e);return new Date(t,0,1)},g=t.getEndOfDecade=function(e){var t=m(e);return new Date(t+10,0,1,0,0,0,-1)},b=t.getDecadeRange=function(e){return[y(e),g(e)]},w=t.getBeginOfPreviousDecade=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=m(e)-t;return y(n)},_=t.getEndOfPreviousDecade=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=m(e)-t;return g(n)},O=t.getBeginOfNextDecade=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=m(e)+t;return y(n)},x=t.getBeginOfYear=function(e){var t=a(e);return new Date(t,0,1)},k=t.getEndOfYear=function(e){var t=a(e);return new Date(t+1,0,1,0,0,0,-1)},D=t.getYearRange=function(e){return[x(e),k(e)]},E=t.getBeginOfPreviousYear=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a(e)-t;return x(n)},S=t.getEndOfPreviousYear=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a(e)-t;return k(n)},T=t.getBeginOfNextYear=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a(e)+t;return x(n)},P=t.getBeginOfMonth=function(e){var t=a(e),n=i(e);return new Date(t,n,1)},C=t.getEndOfMonth=function(e){var t=a(e),n=i(e);return new Date(t,n+1,1,0,0,0,-1)},M=t.getBeginOfWeek=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ISO 8601",n=a(e),r=i(e),o=e.getDate()-u(e,t);return new Date(n,r,o)},N=t.getMonthRange=function(e){return[P(e),C(e)]},j=function(e,t){var n=a(e),r=i(e)+t;return new Date(n,r,1)},A=t.getBeginOfPreviousMonth=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=j(e,-t);return P(n)},I=t.getEndOfPreviousMonth=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=j(e,-t);return C(n)},R=t.getBeginOfNextMonth=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=j(e,t);return P(n)},V=t.getBeginOfDay=function(e){var t=a(e),n=i(e),r=l(e);return new Date(t,n,r)},L=t.getEndOfDay=function(e){var t=a(e),n=i(e),r=l(e);return new Date(t,n,r+1,0,0,0,-1)},B=t.getDayRange=function(e){return[V(e),L(e)]},F=(t.getWeekNumber=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ISO 8601",n=M(e,t),r=a(e)+1,o=void 0,i=void 0;do{o=new Date(r,0,"ISO 8601"===t?4:1),i=M(o,t),r-=1}while(e-i<0);return Math.round((n-i)/6048e5)+1},t.getBegin=function(e,t){switch(e){case"century":return c(t);case"decade":return y(t);case"year":return x(t);case"month":return P(t);case"day":return V(t);default:throw new Error("Invalid rangeType: "+e)}}),W=(t.getBeginPrevious=function(e,t){switch(e){case"century":return p(t);case"decade":return w(t);case"year":return E(t);case"month":return A(t);default:throw new Error("Invalid rangeType: "+e)}},t.getBeginNext=function(e,t){switch(e){case"century":return v(t);case"decade":return O(t);case"year":return T(t);case"month":return R(t);default:throw new Error("Invalid rangeType: "+e)}},t.getBeginPrevious2=function(e,t){switch(e){case"decade":return w(t,100);case"year":return E(t,10);case"month":return A(t,12);default:throw new Error("Invalid rangeType: "+e)}},t.getBeginNext2=function(e,t){switch(e){case"decade":return O(t,100);case"year":return T(t,10);case"month":return R(t,12);default:throw new Error("Invalid rangeType: "+e)}},t.getEnd=function(e,t){switch(e){case"century":return f(t);case"decade":return g(t);case"year":return k(t);case"month":return C(t);case"day":return L(t);default:throw new Error("Invalid rangeType: "+e)}}),U=(t.getEndPrevious=function(e,t){switch(e){case"century":return h(t);case"decade":return _(t);case"year":return S(t);case"month":return I(t);default:throw new Error("Invalid rangeType: "+e)}},t.getEndPrevious2=function(e,t){switch(e){case"decade":return _(t,100);case"year":return S(t,10);case"month":return I(t,12);default:throw new Error("Invalid rangeType: "+e)}},t.getRange=function(e,t){switch(e){case"century":return d(t);case"decade":return b(t);case"year":return D(t);case"month":return N(t);case"day":return B(t);default:throw new Error("Invalid rangeType: "+e)}},t.getValueRange=function(e,t,n){var r=[t,n].sort(function(e,t){return e.getTime()>t.getTime()});return[F(e,r[0]),W(e,r[1])]},t.getDaysInMonth=function(e){var t=a(e),n=i(e);return new Date(t,n+1,0).getDate()},function(e){var t=r(e,2),n=t[0],o=t[1];return a(n)+" – "+a(o)});t.getCenturyLabel=function(e){return U(d(e))},t.getDecadeLabel=function(e){return U(b(e))},t.isWeekend=function(e){return u(e)>=5},t.getISOLocalMonth=function(e){if(!e)return e;var t=new Date(e);if(isNaN(t.getTime()))throw new Error("Invalid date: "+e);return a(t)+"-"+("0"+o(t)).slice(-2)},t.getISOLocalDate=function(e){if(!e)return e;var t=new Date(e);if(isNaN(t.getTime()))throw new Error("Invalid date: "+e);return a(t)+"-"+("0"+o(t)).slice(-2)+"-"+("0"+l(t)).slice(-2)}},163:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),c=n(0),f=r(c),d=n(164),p=r(d),h="undefined"!=typeof window,v=h?n(169):void 0,m=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.refCallback=function(e){if(!e)return void r.removeSVG();r.container=e,r.renderSVG()},i=n,o(r,i)}return i(t,e),l(t,[{key:"renderSVG",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.callback,n=e.className,r=e.evalScripts,a=e.path,o=e.style,i=document.createElement("div");i.innerHTML=p.default.renderToStaticMarkup(f.default.createElement("div",null,f.default.createElement("div",{className:n,"data-src":a,style:o})));var l=this.container.appendChild(i.firstChild);v(l.firstChild,{evalScripts:r,each:t})}},{key:"removeSVG",value:function(){this.container instanceof Node&&this.container.firstChild instanceof Node&&this.container.removeChild(this.container.firstChild)}},{key:"componentWillReceiveProps",value:function(e){this.removeSVG(),this.renderSVG(e)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return f.default.createElement("div",{ref:this.refCallback,className:this.props.wrapperClassName})}}]),t}(f.default.Component);m.defaultProps={callback:function(){},className:null,evalScripts:"once",style:{},wrapperClassName:null},m.propTypes={callback:s.default.func,className:s.default.string,evalScripts:s.default.oneOf(["always","once","never"]),path:s.default.string.isRequired,style:s.default.object,wrapperClassName:s.default.string},t.default=m,e.exports=t.default},164:function(e,t,n){"use strict";e.exports=n(165)},165:function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function a(e,t){return(e&t)===t}function o(e,t){if(k.hasOwnProperty(e)||2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))return!1;if(null===t)return!0;switch(typeof t){case"boolean":return l(e);case"undefined":case"number":case"string":case"object":return!0;default:return!1}}function i(e){return E.hasOwnProperty(e)?E[e]:null}function l(e){if(k.hasOwnProperty(e))return!0;var t=i(e);return t?t.hasBooleanValue||t.hasStringBooleanValue||t.hasOverloadedBooleanValue:"data-"===(e=e.toLowerCase().slice(0,5))||"aria-"===e}function u(e){return e[1].toUpperCase()}function s(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=F.exec(e);if(t){var n,r="",a=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}a!==n&&(r+=e.substring(a,n)),a=n+1,r+=t}e=a!==n?r+e.substring(a,n):r}return e}function c(e){return!!q.hasOwnProperty(e)||!U.hasOwnProperty(e)&&(W.test(e)?q[e]=!0:(U[e]=!0,!1))}function f(e,t){var n=i(e);if(n){if(null==t||n.hasBooleanValue&&!t||n.hasNumericValue&&isNaN(t)||n.hasPositiveNumericValue&&1>t||n.hasOverloadedBooleanValue&&!1===t)return"";var r=n.attributeName;if(n.hasBooleanValue||n.hasOverloadedBooleanValue&&!0===t)return r+'=""';if("boolean"!=typeof t||l(e))return r+'="'+s(t)+'"'}else if(o(e,t))return null==t?"":e+'="'+s(t)+'"';return null}function d(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function p(e){return"string"==typeof e?e:"function"==typeof e?e.displayName||e.name:null}function h(e){var t="";return b.Children.forEach(e,function(e){null==e||"string"!=typeof e&&"number"!=typeof e||(t+=e)}),t}function v(e,t){if(e=e.contextTypes){var n,r={};for(n in e)r[n]=t[n];t=r}else t=_;return t}function m(e,t){void 0===e&&r("152",p(t)||"Component")}function y(e,t){for(;b.isValidElement(e);){var n=e,a=n.type;if("function"!=typeof a)break;e=v(a,t);var o=[],i=!1,l={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===o)return null},enqueueReplaceState:function(e,t){i=!0,o=[t]},enqueueSetState:function(e,t){if(null===o)return null;o.push(t)}};if(a.prototype&&a.prototype.isReactComponent)var u=new a(n.props,e,l);else if(null==(u=a(n.props,e,l))||null==u.render){e=u,m(e,a);continue}if(u.props=n.props,u.context=e,u.updater=l,l=u.state,void 0===l&&(u.state=l=null),u.componentWillMount)if(u.componentWillMount(),o.length){l=o;var s=i;if(o=null,i=!1,s&&1===l.length)u.state=l[0];else{var c=s?l[0]:u.state,f=!0;for(s=s?1:0;s<l.length;s++){var d=l[s];(d="function"==typeof d?d.call(u,c,n.props,e):d)&&(f?(f=!1,c=g({},c,d)):g(c,d))}u.state=c}}else o=null;if(e=u.render(),m(e,a),"function"==typeof u.getChildContext&&"object"==typeof(n=a.childContextTypes)){var h=u.getChildContext();for(var y in h)y in n||r("108",p(a)||"Unknown",y)}h&&(t=g({},t,h))}return{child:e,context:t}}/** @license React v16.2.0
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g=n(30),b=n(0),w=n(10),_=n(31),O=n(166),x=n(168),k={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0},D={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=D,n=e.Properties||{},o=e.DOMAttributeNamespaces||{},i=e.DOMAttributeNames||{};e=e.DOMMutationMethods||{};for(var l in n){E.hasOwnProperty(l)&&r("48",l);var u=l.toLowerCase(),s=n[l];u={attributeName:u,attributeNamespace:null,propertyName:l,mutationMethod:null,mustUseProperty:a(s,t.MUST_USE_PROPERTY),hasBooleanValue:a(s,t.HAS_BOOLEAN_VALUE),hasNumericValue:a(s,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:a(s,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:a(s,t.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:a(s,t.HAS_STRING_BOOLEAN_VALUE)},1>=u.hasBooleanValue+u.hasNumericValue+u.hasOverloadedBooleanValue||r("50",l),i.hasOwnProperty(l)&&(u.attributeName=i[l]),o.hasOwnProperty(l)&&(u.attributeNamespace=o[l]),e.hasOwnProperty(l)&&(u.mutationMethod=e[l]),E[l]=u}}},E={},S=D,T=S.MUST_USE_PROPERTY,P=S.HAS_BOOLEAN_VALUE,C=S.HAS_NUMERIC_VALUE,M=S.HAS_POSITIVE_NUMERIC_VALUE,N=S.HAS_OVERLOADED_BOOLEAN_VALUE,j=S.HAS_STRING_BOOLEAN_VALUE,A={Properties:{allowFullScreen:P,async:P,autoFocus:P,autoPlay:P,capture:N,checked:T|P,cols:M,contentEditable:j,controls:P,default:P,defer:P,disabled:P,download:N,draggable:j,formNoValidate:P,hidden:P,loop:P,multiple:T|P,muted:T|P,noValidate:P,open:P,playsInline:P,readOnly:P,required:P,reversed:P,rows:M,rowSpan:C,scoped:P,seamless:P,selected:T|P,size:M,start:C,span:M,spellCheck:j,style:0,tabIndex:0,itemScope:P,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:j},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(e,t){if(null==t)return e.removeAttribute("value");"number"!==e.type||!1===e.hasAttribute("value")?e.setAttribute("value",""+t):e.validity&&!e.validity.badInput&&e.ownerDocument.activeElement!==e&&e.setAttribute("value",""+t)}}},I=S.HAS_STRING_BOOLEAN_VALUE,R={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},V={Properties:{autoReverse:I,externalResourcesRequired:I,preserveAlpha:I},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:R.xlink,xlinkArcrole:R.xlink,xlinkHref:R.xlink,xlinkRole:R.xlink,xlinkShow:R.xlink,xlinkTitle:R.xlink,xlinkType:R.xlink,xmlBase:R.xml,xmlLang:R.xml,xmlSpace:R.xml}},L=/[\-\:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(e){var t=e.replace(L,u);V.Properties[t]=0,V.DOMAttributeNames[t]=e}),S.injectDOMPropertyConfig(A),S.injectDOMPropertyConfig(V);var B="function"==typeof Symbol&&Symbol.for?Symbol.for("react.fragment"):60107,F=/["'&<>]/,W=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U={},q={},Y={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},z={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},G=g({menuitem:!0},z),H={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$=["Webkit","ms","Moz","O"];Object.keys(H).forEach(function(e){$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),H[t]=H[e]})});var X=b.Children.toArray,J=w.thatReturns(""),Z={listing:!0,pre:!0,textarea:!0},K=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Q={},ee=x(function(e){return O(e)}),te={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null},ne=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");b.isValidElement(t)?t.type!==B?t=[t]:(t=t.props.children,t=b.isValidElement(t)?[t]:X(t)):t=X(t),this.stack=[{domNamespace:Y.html,children:t,childIndex:0,context:_,footer:""}],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n}return e.prototype.read=function(e){if(this.exhausted)return null;for(var t="";t.length<e;){if(0===this.stack.length){this.exhausted=!0;break}var n=this.stack[this.stack.length-1];if(n.childIndex>=n.children.length){var r=n.footer;t+=r,""!==r&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===n.tag&&(this.currentSelectValue=null)}else r=n.children[n.childIndex++],t+=this.render(r,n.context,n.domNamespace)}return t},e.prototype.render=function(e,t,n){return"string"==typeof e||"number"==typeof e?""===(n=""+e)?"":this.makeStaticMarkup?s(n):this.previousWasTextNode?"\x3c!-- --\x3e"+s(n):(this.previousWasTextNode=!0,s(n)):(t=y(e,t),e=t.child,t=t.context,null===e||!1===e?"":b.isValidElement(e)?e.type===B?(e=X(e.props.children),this.stack.push({domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""):this.renderDOM(e,t,n):(e=X(e),this.stack.push({domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""))},e.prototype.renderDOM=function(e,t,n){var a=e.type.toLowerCase();n===Y.html&&d(a),Q.hasOwnProperty(a)||(K.test(a)||r("65",a),Q[a]=!0);var o=e.props;if("input"===a)o=g({type:void 0},o,{defaultChecked:void 0,defaultValue:void 0,value:null!=o.value?o.value:o.defaultValue,checked:null!=o.checked?o.checked:o.defaultChecked});else if("textarea"===a){var i=o.value;if(null==i){i=o.defaultValue;var l=o.children;null!=l&&(null!=i&&r("92"),Array.isArray(l)&&(1>=l.length||r("93"),l=l[0]),i=""+l),null==i&&(i="")}o=g({},o,{value:void 0,children:""+i})}else if("select"===a)this.currentSelectValue=null!=o.value?o.value:o.defaultValue,o=g({},o,{value:void 0});else if("option"===a){l=this.currentSelectValue;var u=h(o.children);if(null!=l){var p=null!=o.value?o.value+"":u;if(i=!1,Array.isArray(l)){for(var v=0;v<l.length;v++)if(""+l[v]===p){i=!0;break}}else i=""+l===p;o=g({selected:void 0,children:void 0},o,{selected:i,children:u})}}(i=o)&&(G[a]&&(null!=i.children||null!=i.dangerouslySetInnerHTML)&&r("137",a,J()),null!=i.dangerouslySetInnerHTML&&(null!=i.children&&r("60"),"object"==typeof i.dangerouslySetInnerHTML&&"__html"in i.dangerouslySetInnerHTML||r("61")),null!=i.style&&"object"!=typeof i.style&&r("62",J())),i=o,l=this.makeStaticMarkup,u=1===this.stack.length,p="<"+e.type;for(O in i)if(i.hasOwnProperty(O)){var m=i[O];if(null!=m){if("style"===O){v=void 0;var y="",b="";for(v in m)if(m.hasOwnProperty(v)){var w=0===v.indexOf("--"),_=m[v];null!=_&&(y+=b+ee(v)+":",b=v,w=null==_||"boolean"==typeof _||""===_?"":w||"number"!=typeof _||0===_||H.hasOwnProperty(b)&&H[b]?(""+_).trim():_+"px",y+=w,b=";")}m=y||null}v=null;e:if(w=a,_=i,-1===w.indexOf("-"))w="string"==typeof _.is;else switch(w){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":w=!1;break e;default:w=!0}w?te.hasOwnProperty(O)||(v=O,v=c(v)&&null!=m?v+'="'+s(m)+'"':""):v=f(O,m),v&&(p+=" "+v)}}l||u&&(p+=' data-reactroot=""');var O=p;i="",z.hasOwnProperty(a)?O+="/>":(O+=">",i="</"+e.type+">");e:{if(null!=(l=o.dangerouslySetInnerHTML)){if(null!=l.__html){l=l.__html;break e}}else if("string"==typeof(l=o.children)||"number"==typeof l){l=s(l);break e}l=null}return null!=l?(o=[],Z[a]&&"\n"===l.charAt(0)&&(O+="\n"),O+=l):o=X(o.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?d(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,tag:a,children:o,childIndex:0,context:t,footer:i}),this.previousWasTextNode=!1,O},e}(),re={renderToString:function(e){return new ne(e,!1).read(1/0)},renderToStaticMarkup:function(e){return new ne(e,!0).read(1/0)},renderToNodeStream:function(){r("207")},renderToStaticNodeStream:function(){r("208")},version:"16.2.0"},ae=Object.freeze({default:re}),oe=ae&&re||ae;e.exports=oe.default?oe.default:oe},166:function(e,t,n){"use strict";function r(e){return a(e).replace(o,"-ms-")}var a=n(167),o=/^ms-/;e.exports=r},167:function(e,t,n){"use strict";function r(e){return e.replace(a,"-$1").toLowerCase()}var a=/([A-Z])/g;e.exports=r},168:function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}e.exports=r},169:function(e,t,n){var r;/**
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
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

/***/ 318:
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

/***/ 319:
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

/***/ 320:
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

var _ParallaxController = __webpack_require__(179);

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

/***/ 321:
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

var _Parallax = __webpack_require__(182);

var _Parallax2 = _interopRequireDefault(_Parallax);

var _propValidation = __webpack_require__(183);

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
