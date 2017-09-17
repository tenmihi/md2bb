(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleParser = __webpack_require__(1);

var _simpleParser2 = _interopRequireDefault(_simpleParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Md2bb = function (_Parser) {
  _inherits(Md2bb, _Parser);

  function Md2bb() {
    _classCallCheck(this, Md2bb);

    var _this = _possibleConstructorReturn(this, (Md2bb.__proto__ || Object.getPrototypeOf(Md2bb)).call(this));

    _this.setRules([{
      name: 'bold',
      regex: /\*\*(.*?)\*\*/g,
      replacement: '[b]$1[/b]'
    }, {
      name: 'italic',
      regex: /\*(.*?)\*/g,
      replacement: '[i]$1[/i]'
    }, {
      name: 'under_line',
      regex: /\_(.*?)\_/g,
      replacement: '[u]$1[/u]'
    }, {
      name: 'spoiler',
      regex: /~~((.|\n)*?)~~/g,
      replacement: '[spoiler]$1[/spoiler]'
    }, {
      name: 'strike',
      regex: /~(.*?)~/g,
      replacement: '[strike]$1[/strike]'
    }, {
      name: 'header',
      regex: /(\n|^)(#{1})[ ](.*)/g,
      replacement: '$1[h1]$3[/h1]'
    }, {
      name: 'link',
      regex: /\[([^\[]+)\]\(([^\)]+)\)/g,
      replacement: "[url=$2]$1[/url]"
    }, {
      name: 'noparse',
      regex: /``((.|\n)*?)``/g,
      replacement: '[noparse]$1[/noparse]'
    }, {
      name: 'code',
      regex: /`((.|\n)*?)`/g,
      replacement: '[code]$1[/code]'
    }, {
      name: 'quote',
      regex: /(\n|^)\>[ ](.*)/g,
      replacement: '$1[quote]$2[/quote]'
    }, {
      name: 'quote_with_author',
      regex: /(\n|^)\>\[(.*)\][ ](.*)/g,
      replacement: '$1[quote=$2]$3[/quote]'
    }, {
      name: 'quote_fix',
      regex: /\[\/quote\]\n\[quote\]/,
      replacement: "\n"
    }, {
      name: 'ol_list',
      regex: /(\n|^)[ ]*[0-9]+\.[ ](.*)/g,
      replacement: '$1[olist]\n[*]$2\n[/olist]'
    }, {
      name: 'ol_list_fix',
      regex: /\n\[\/olist\]\n\[olist\]/g,
      replacement: ''
    }, {
      name: 'ulist',
      regex: /(\n|^)[ ]*[\*\-\+][ ](.*)/g,
      replacement: '$1[ulist]\n[*]$2\n[/ulist]'
    }, {
      name: 'ul_list_fix',
      regex: /\n\[\/ulist\]\n\[ulist\]/g,
      replacement: ''
    }]);
    return _this;
  }

  return Md2bb;
}(_simpleParser2.default);

exports.default = Md2bb;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(){r(this,e),this.rules=[]}return o(e,[{key:"setRules",value:function(e){this.rules=e}},{key:"reg_match",value:function(e,t){return new RegExp(e).exec(t)}},{key:"parse",value:function(e){return this.rules.forEach(function(t){var n=t.regex,r=t.replacement;e=e.replace(n,r)}),e}}]),e}();t.default=u}])});

/***/ })
/******/ ]);
});