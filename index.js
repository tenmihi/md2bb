(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["md2steam-bbcode"] = factory();
	else
		root["md2steam-bbcode"] = factory();
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _replacer = __webpack_require__(2);

var _replacer2 = _interopRequireDefault(_replacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Md2bb = function (_Replacer) {
  _inherits(Md2bb, _Replacer);

  function Md2bb() {
    _classCallCheck(this, Md2bb);

    var _this = _possibleConstructorReturn(this, (Md2bb.__proto__ || Object.getPrototypeOf(Md2bb)).call(this));

    var rules = [{
      name: 'bold',
      regex: /(\*\*)(.*?)\1/g,
      replacement: '[b]$2[/b]'
    }, {
      name: 'emphasis',
      regex: /(\*)(.*?)\1/g,
      replacement: '[i]$2[/i]'
    }, {
      name: 'under_line',
      regex: /(\_)(.*?)\1/g,
      replacement: '[u]$2[/u]'
    }, {
      name: 'spoiler',
      regex: /\~\~(.*?)\~\~/g,
      replacement: '[spoiler]$1[/spoiler]'
    }, {
      name: 'strike',
      regex: /\~{1}(.*?)\~{1}/g, // TODO: 2個以上並んだ記号にもマッチするので直す必要あり
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
      regex: /``(.*?)``/g,
      replacement: '[noparse]$1[/noparse]'
    }, {
      name: 'code',
      regex: /`(.*?)`{1}/g, // TODO: 2個以上並んだ記号にもマッチするので直す必要あり
      replacement: '[code]$1[/code]'
    }, {
      name: 'quote',
      regex: /(\n|^)\>[ ](.*)/g,
      replacement: '[quote]$2[/quote]'
    }, {
      name: 'quote_with_author',
      regex: /(\n|^)\>\[(.*)\][ ](.*)/g,
      replacement: '[quote=$2]$3[/quote]'
    }, {
      name: 'quote_fix',
      regex: /\[\/quote\]\[quote\]/,
      replacement: "\n"
    }, {
      name: 'ol_list',
      regex: /(\n|^)[ ]*[0-9]+\.[ ](.*)/g,
      replacement: '[olist]\n[*]$2\n[/olist]'
    }, {
      name: 'ol_list_fix',
      regex: /\n\[\/olist\][ ]?\[olist\]/g,
      replacement: ''
    }, {
      name: 'ulist',
      regex: /(\n|^)[ ]*[\*\-\+][ ](.*)/g,
      replacement: '[ulist]\n[*]$2\n[/ulist]'
    }, {
      name: 'ul_list_fix',
      regex: /\n\[\/ulist\][ ]?\[ulist\]/g,
      replacement: ''
    }];

    _get(Md2bb.prototype.__proto__ || Object.getPrototypeOf(Md2bb.prototype), 'setRules', _this).call(_this, rules);
    return _this;
  }

  return Md2bb;
}(_replacer2.default);

exports.default = Md2bb;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Replacer = function () {
  function Replacer() {
    _classCallCheck(this, Replacer);

    this.rules = [];
  }

  _createClass(Replacer, [{
    key: "setRules",
    value: function setRules(rules) {
      this.rules = rules;
    }
  }, {
    key: "reg_match",
    value: function reg_match(reg, text) {
      var reg_exp = new RegExp(reg);
      return reg_exp.exec(text);
    }
  }, {
    key: "parse",
    value: function parse(text) {
      this.rules.forEach(function (_ref) {
        var regex = _ref.regex,
            replacement = _ref.replacement;

        text = text.replace(regex, replacement);
      });
      return text;
    }
  }]);

  return Replacer;
}();

exports.default = Replacer;

/***/ })
/******/ ]);
});