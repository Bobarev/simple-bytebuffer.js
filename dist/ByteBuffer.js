/******/ (function(modules) { // webpackBootstrap
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeBytesLength = {
  BYTE: 1,
  BOOLEAN: 1,
  SHORT: 2,
  INTEGER: 4,
  FLOAT: 4
};

var ByteBuffer = function () {
  function ByteBuffer(data) {
    _classCallCheck(this, ByteBuffer);

    this.dataview = null;
    this.cursor = 0;

    this.dataview = new DataView(data);
  }

  _createClass(ByteBuffer, [{
    key: "getByte",
    value: function getByte() {
      var val = this.dataview.getInt8(this.cursor);
      this.cursor += TypeBytesLength.BYTE;
      return val;
    }
  }, {
    key: "writeByte",
    value: function writeByte(val) {
      this.dataview.setInt8(this.cursor, val);
      this.cursor += TypeBytesLength.BYTE;
    }
  }, {
    key: "getShort",
    value: function getShort() {
      var val = this.dataview.getInt16(this.cursor);
      this.cursor += TypeBytesLength.SHORT;
      return val;
    }
  }, {
    key: "writeShort",
    value: function writeShort(val) {
      this.dataview.setInt16(this.cursor, val);
      this.cursor += TypeBytesLength.SHORT;
    }
  }, {
    key: "getInteger",
    value: function getInteger() {
      var val = this.dataview.getInt32(this.cursor);
      this.cursor += TypeBytesLength.INTEGER;
      return val;
    }
  }, {
    key: "writeInteger",
    value: function writeInteger(val) {
      this.dataview.setInt32(this.cursor, val);
      this.cursor += TypeBytesLength.INTEGER;
    }
  }, {
    key: "getFloat",
    value: function getFloat() {
      var val = this.dataview.getFloat32(this.cursor);
      this.cursor += TypeBytesLength.FLOAT;
      return val;
    }
  }, {
    key: "writeFloat",
    value: function writeFloat(val) {
      this.dataview.setFloat32(this.cursor, val);
      this.cursor += TypeBytesLength.FLOAT;
    }
  }, {
    key: "getBoolean",
    value: function getBoolean() {
      var val = this.dataview.getInt8(this.cursor);
      this.cursor += TypeBytesLength.BOOLEAN;
      if (val === 0) return false;
      return true;
    }
  }, {
    key: "writeBoolean",
    value: function writeBoolean(val) {
      this.dataview.setInt8(this.cursor, val ? 1 : 0);
      this.cursor += TypeBytesLength.BOOLEAN;
    }
  }, {
    key: "scroll",
    value: function scroll(val) {
      this.cursor += val;
    }
  }, {
    key: "isReadable",
    value: function isReadable() {
      return this.cursor < this.dataview.byteLength;
    }
  }, {
    key: "length",
    value: function length() {
      return this.dataview.byteLength;
    }
  }, {
    key: "array",
    value: function array() {
      return this.dataview.buffer;
    }
  }], [{
    key: "create",
    value: function create(size) {
      var arrbuffer = new ArrayBuffer(size);
      return new ByteBuffer(arrbuffer);
    }
  }]);

  return ByteBuffer;
}();

exports.default = ByteBuffer;

/***/ })
/******/ ]);