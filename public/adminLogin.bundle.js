!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=144)}({144:function(e,n,t){"use strict";var o=console.log;document.getElementById("login").addEventListener("click",function(){var e=document.getElementById("email").value,n=document.getElementById("password").value;fetch("/api/v1/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:n})}).then(function(e){return e.json()}).then(function(e){return window.location.reload()}).catch(function(e){return o("Error ",e)})})}});