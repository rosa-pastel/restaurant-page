/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/RosmatikaRegular-BWA45.ttf */ "./src/fonts/RosmatikaRegular-BWA45.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/MontserratRegular-BWBEl.ttf */ "./src/fonts/MontserratRegular-BWBEl.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/MontserratBold-DOWZd.ttf */ "./src/fonts/MontserratBold-DOWZd.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"rosmatika\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: \"montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: \"montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: bold;\n}\n@keyframes pageLoad {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n* {\n  font-family: \"montserrat\", monospace, sans-serif;\n  margin: 0;\n  padding: 0;\n  color: rgb(37, 37, 37);\n}\n#content {\n  background-color: rgb(244, 255, 149);\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n}\n#header {\n  box-sizing: border-box;\n  width: clamp(200px, 90vw, 1100px);\n  height: max-content;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: calc(10px + 1vmin) 0;\n  opacity: 0;\n}\n#header ul {\n  font-weight: bold;\n  font-size: calc(14px + 0.2vw);\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  gap: 15px;\n}\n#header ul li:hover {\n  cursor: default;\n  position: relative;\n  bottom: 2px;\n}\n#tiny-logo {\n  font-family: \"rosmatika\";\n  font-size: calc(24px + 0.5vw);\n  padding: 5px 10px 0;\n  border: rgb(37, 37, 37) solid 3px;\n}\n#page {\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n}\n#homepage {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#logo {\n  font-family: \"rosmatika\";\n  color: rgb(244, 255, 149);\n  font-size: calc(10px + 10vmin);\n  text-shadow: 0 0 10px rgb(37, 37, 37), 1px 1px 5px rgb(37, 37, 37),\n    -1px -1px 5px rgb(37, 37, 37);\n}\n#logo-info {\n  font-size: calc(14px + 1vmin);\n  color: rgb(244, 255, 149);\n  text-shadow: 0 0 10px rgb(37, 37, 37), 1px 1px 3px rgb(37, 37, 37),\n    -1px -1px 3px rgb(37, 37, 37);\n}\ndiv#contactpage img {\n  width: calc(15px + 1.5vmin);\n  height: calc(15px + 1.5vmin);\n}\ndiv#contactpage div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\ndiv#contactpage,\ndiv#menupage {\n  width: calc(200px + 16vw);\n  height: calc(275px + 22vmax);\n  padding: calc(10px + 3vw);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: calc(10px + 1vw);\n  background-color: rgb(244, 255, 149, 0.75);\n  border-radius: 25px;\n  border: 3px rgb(37, 37, 37) solid;\n}\ndiv#menupage div h1 {\n  font-size: calc(18px + 0.5vmin);\n  font-weight: normal;\n}\ndiv#contactpage div h1 {\n  font-size: calc(18px + 0.4vmin);\n}\ndiv#contactpage div h2 {\n  font-size: calc(18px + 0.5vmin);\n  font-weight: normal;\n}\ndiv#menupage > h1 {\n  font-size: calc(22px + 1vmin);\n  text-align: center;\n}\ndiv#menu-items div {\n  display: flex;\n  justify-content: space-between;\n}\ndiv#menu-items {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.load {\n  animation: pageLoad 300ms ease-out forwards;\n}\n\n.loadWithDelay {\n  animation: pageLoad 300ms ease-out 1s forwards;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,+DAA+D;AACjE;AACA;EACE,yBAAyB;EACzB,+DAAkE;AACpE;AACA;EACE,yBAAyB;EACzB,+DAA+D;EAC/D,iBAAiB;AACnB;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE,gDAAgD;EAChD,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,6BAA6B;EAC7B,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,wBAAwB;EACxB,6BAA6B;EAC7B,mBAAmB;EACnB,iCAAiC;AACnC;AACA;EACE,sBAAsB;EACtB,yDAAyC;EACzC,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,8BAA8B;EAC9B;iCAC+B;AACjC;AACA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB;iCAC+B;AACjC;AACA;EACE,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;;EAEE,yBAAyB;EACzB,4BAA4B;EAC5B,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,0CAA0C;EAC1C,mBAAmB;EACnB,iCAAiC;AACnC;AACA;EACE,+BAA+B;EAC/B,mBAAmB;AACrB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;EAC/B,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,2CAA2C;AAC7C;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":["@font-face {\n  font-family: \"rosmatika\";\n  src: url(./fonts/RosmatikaRegular-BWA45.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: \"montserrat\";\n  src: url(\"./fonts/MontserratRegular-BWBEl.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"montserrat\";\n  src: url(\"./fonts/MontserratBold-DOWZd.ttf\") format(\"truetype\");\n  font-weight: bold;\n}\n@keyframes pageLoad {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n* {\n  font-family: \"montserrat\", monospace, sans-serif;\n  margin: 0;\n  padding: 0;\n  color: rgb(37, 37, 37);\n}\n#content {\n  background-color: rgb(244, 255, 149);\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n}\n#header {\n  box-sizing: border-box;\n  width: clamp(200px, 90vw, 1100px);\n  height: max-content;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: calc(10px + 1vmin) 0;\n  opacity: 0;\n}\n#header ul {\n  font-weight: bold;\n  font-size: calc(14px + 0.2vw);\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  gap: 15px;\n}\n#header ul li:hover {\n  cursor: default;\n  position: relative;\n  bottom: 2px;\n}\n#tiny-logo {\n  font-family: \"rosmatika\";\n  font-size: calc(24px + 0.5vw);\n  padding: 5px 10px 0;\n  border: rgb(37, 37, 37) solid 3px;\n}\n#page {\n  background-size: cover;\n  background-image: url(\"./background.jpg\");\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n}\n#homepage {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#logo {\n  font-family: \"rosmatika\";\n  color: rgb(244, 255, 149);\n  font-size: calc(10px + 10vmin);\n  text-shadow: 0 0 10px rgb(37, 37, 37), 1px 1px 5px rgb(37, 37, 37),\n    -1px -1px 5px rgb(37, 37, 37);\n}\n#logo-info {\n  font-size: calc(14px + 1vmin);\n  color: rgb(244, 255, 149);\n  text-shadow: 0 0 10px rgb(37, 37, 37), 1px 1px 3px rgb(37, 37, 37),\n    -1px -1px 3px rgb(37, 37, 37);\n}\ndiv#contactpage img {\n  width: calc(15px + 1.5vmin);\n  height: calc(15px + 1.5vmin);\n}\ndiv#contactpage div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\ndiv#contactpage,\ndiv#menupage {\n  width: calc(200px + 16vw);\n  height: calc(275px + 22vmax);\n  padding: calc(10px + 3vw);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: calc(10px + 1vw);\n  background-color: rgb(244, 255, 149, 0.75);\n  border-radius: 25px;\n  border: 3px rgb(37, 37, 37) solid;\n}\ndiv#menupage div h1 {\n  font-size: calc(18px + 0.5vmin);\n  font-weight: normal;\n}\ndiv#contactpage div h1 {\n  font-size: calc(18px + 0.4vmin);\n}\ndiv#contactpage div h2 {\n  font-size: calc(18px + 0.5vmin);\n  font-weight: normal;\n}\ndiv#menupage > h1 {\n  font-size: calc(22px + 1vmin);\n  text-align: center;\n}\ndiv#menu-items div {\n  display: flex;\n  justify-content: space-between;\n}\ndiv#menu-items {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.load {\n  animation: pageLoad 300ms ease-out forwards;\n}\n\n.loadWithDelay {\n  animation: pageLoad 300ms ease-out 1s forwards;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeContactPage": () => (/* binding */ makeContactPage)
/* harmony export */ });
/* harmony import */ var _icons_address_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/address.png */ "./src/icons/address.png");
/* harmony import */ var _icons_phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/phone.png */ "./src/icons/phone.png");
/* harmony import */ var _icons_clock_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/clock.png */ "./src/icons/clock.png");



function makeContactPage() {
  const lang = document.getElementById("lang").textContent;

  const contactPage = document.createElement("div");
  contactPage.setAttribute("id", "contactpage");

  const address = document.createElement("div");
  const addressIcon = document.createElement("img");
  addressIcon.src = _icons_address_png__WEBPACK_IMPORTED_MODULE_0__;
  address.appendChild(addressIcon);
  const addressHeading = document.createElement("h1");
  addressHeading.textContent = lang === "TR" ? "ADRES" : "ADDRESS";
  address.appendChild(addressHeading);
  const addressText = document.createElement("h2");
  addressText.textContent =
    lang === "TR"
      ? "1725 Slough Bulvarı, Scranton Pensilvanya"
      : "1725 Slough Avenue, Scranton PA";
  address.appendChild(addressText);
  contactPage.appendChild(address);

  const phone = document.createElement("div");
  const phoneIcon = document.createElement("img");
  phoneIcon.src = _icons_phone_png__WEBPACK_IMPORTED_MODULE_1__;
  phone.appendChild(phoneIcon);
  const phoneHeading = document.createElement("h1");
  phoneHeading.textContent = lang === "TR" ? "TELEFON" : "PHONE";
  phone.appendChild(phoneHeading);
  const phoneText = document.createElement("h2");
  phoneText.textContent = "(407) 456-7943";
  phone.appendChild(phoneText);
  contactPage.appendChild(phone);

  const hours = document.createElement("div");
  const hoursIcon = document.createElement("img");
  hoursIcon.src = _icons_clock_png__WEBPACK_IMPORTED_MODULE_2__;
  hours.appendChild(hoursIcon);
  const hoursHeading = document.createElement("h1");
  hoursHeading.textContent = lang === "TR" ? "ÇALIŞMA SAATLERİ" : "HOURS";
  hours.appendChild(hoursHeading);
  const hoursText = document.createElement("h2");
  hoursText.textContent =
    lang === "TR" ? "sabah 10 - akşam 4.30" : "10 a.m. - 4.30 p.m.";
  hours.appendChild(hoursText);
  contactPage.appendChild(hours);
  contactPage.classList.add("load");

  const page = document.getElementById("page");
  page.appendChild(contactPage);
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeHeaderLanguage": () => (/* binding */ changeHeaderLanguage),
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader)
/* harmony export */ });
function makeHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const tinyLogo = document.createElement("div");
  tinyLogo.textContent = "laverne's";
  tinyLogo.setAttribute("id", "tiny-logo");

  const list = document.createElement("ul");

  const homeBtn = document.createElement("li");
  homeBtn.textContent = "HOME";
  homeBtn.setAttribute("id", "home");
  list.appendChild(homeBtn);

  const menuBtn = document.createElement("li");
  menuBtn.textContent = "MENU";
  menuBtn.setAttribute("id", "menu");
  list.appendChild(menuBtn);

  const contactBtn = document.createElement("li");
  contactBtn.textContent = "CONTACT";
  contactBtn.setAttribute("id", "contact");
  list.appendChild(contactBtn);

  const changeLang = document.createElement("li");
  changeLang.textContent = "EN";
  changeLang.setAttribute("id", "lang");
  list.appendChild(changeLang);

  header.appendChild(tinyLogo);
  header.appendChild(list);
  header.classList.add("loadWithDelay");

  const content = document.getElementById("content");
  content.appendChild(header);
}
function changeHeaderLanguage() {
  const lang = document.getElementById("lang");
  const home = document.getElementById("home");
  const menu = document.getElementById("menu");
  const contact = document.getElementById("contact");
  lang.textContent = lang.textContent === "EN" ? "TR" : "EN";
  home.textContent = lang.textContent === "EN" ? "HOME" : "GİRİŞ";
  menu.textContent = lang.textContent === "EN" ? "MENU" : "MENÜ";
  contact.textContent = lang.textContent === "EN" ? "CONTACT" : "BİZE ULAŞIN";
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanPage": () => (/* binding */ cleanPage),
/* harmony export */   "makeHomepage": () => (/* binding */ makeHomepage),
/* harmony export */   "makePage": () => (/* binding */ makePage)
/* harmony export */ });
function makeHomepage() {
  const lang = document.getElementById("lang").textContent;

  const homepage = document.createElement("div");
  homepage.setAttribute("id", "homepage");
  const logo = document.createElement("div");
  logo.setAttribute("id", "logo");
  logo.textContent = "laverne's";
  const logoInfo = document.createElement("div");
  logoInfo.setAttribute("id", "logo-info");
  logoInfo.textContent =
    lang === "TR"
      ? "yaban mersinli turtalar & dahası"
      : "blueberry pies & others";

  homepage.appendChild(logo);
  homepage.appendChild(logoInfo);
  homepage.classList.add("load");

  const page = document.getElementById("page");
  page.appendChild(homepage);
}
function makePage() {
  const page = document.createElement("div");
  page.setAttribute("id", "page");
  page.classList.add("loadWithDelay");
  const content = document.getElementById("content");
  content.appendChild(page);
}
function cleanPage() {
  const page = document.getElementById("page");
  if (page.lastChild) page.lastChild.remove();
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenuPage": () => (/* binding */ makeMenuPage)
/* harmony export */ });
function makeMenuPage() {
  const lang = document.getElementById("lang").textContent;

  const menuPage = document.createElement("div");
  menuPage.setAttribute("id", "menupage");

  const heading = document.createElement("h1");
  heading.textContent = lang === "TR" ? "MENÜ" : "MENU";
  menuPage.appendChild(heading);

  const allItems = document.createElement("div");
  allItems.setAttribute("id", "menu-items");

  let itemContainer = document.createElement("div");
  let item = document.createElement("h1");
  item.textContent = lang === "TR" ? "yaban mersinli" : "blueberry";
  let price = document.createElement("h1");
  price.textContent = "5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "elmalı" : "apple";
  price = document.createElement("h1");
  price.textContent = "3";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "çikolatalı" : "chocolate";
  price = document.createElement("h1");
  price.textContent = "3.5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "muz kremalı" : "banana cream";
  price = document.createElement("h1");
  price.textContent = "4";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "raventli" : "rhubarb";
  price = document.createElement("h1");
  price.textContent = "2.5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "balkabaklı" : "pumpkin";
  price = document.createElement("h1");
  price.textContent = "3";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "vişneli" : "cherry";
  price = document.createElement("h1");
  price.textContent = "4";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  itemContainer = document.createElement("div");
  item = document.createElement("h1");
  item.textContent = lang === "TR" ? "şeftalili" : "peach";
  price = document.createElement("h1");
  price.textContent = "5";
  itemContainer.appendChild(item);
  itemContainer.appendChild(price);
  allItems.appendChild(itemContainer);

  menuPage.appendChild(allItems);
  menuPage.classList.add("load");

  const page = document.getElementById("page");
  page.appendChild(menuPage);
}


/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f65cf0d135a0e3e3f22.jpg";

/***/ }),

/***/ "./src/fonts/MontserratBold-DOWZd.ttf":
/*!********************************************!*\
  !*** ./src/fonts/MontserratBold-DOWZd.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d74ab070332e4ac790c2.ttf";

/***/ }),

/***/ "./src/fonts/MontserratRegular-BWBEl.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/MontserratRegular-BWBEl.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "710cb84718ae1a65995c.ttf";

/***/ }),

/***/ "./src/fonts/RosmatikaRegular-BWA45.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/RosmatikaRegular-BWA45.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7b5935032bdf59f2734.ttf";

/***/ }),

/***/ "./src/icons/address.png":
/*!*******************************!*\
  !*** ./src/icons/address.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2495adb158c9ee5ee6c2.png";

/***/ }),

/***/ "./src/icons/clock.png":
/*!*****************************!*\
  !*** ./src/icons/clock.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc550a9f52c407d30fa5.png";

/***/ }),

/***/ "./src/icons/phone.png":
/*!*****************************!*\
  !*** ./src/icons/phone.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20a0ed4204215b0502d9.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");






(0,_header_js__WEBPACK_IMPORTED_MODULE_2__.makeHeader)();
(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.makePage)();
(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.makeHomepage)();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");
const changeLang = document.getElementById("lang");

homeBtn.addEventListener("click", () => {
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.cleanPage)();
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.makeHomepage)();
});
menuBtn.addEventListener("click", () => {
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.cleanPage)();
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.makeMenuPage)();
});
contactBtn.addEventListener("click", () => {
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.cleanPage)();
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.makeContactPage)();
});
changeLang.addEventListener("click", () => {
  (0,_header_js__WEBPACK_IMPORTED_MODULE_2__.changeHeaderLanguage)();
  const currentPage = document.getElementById("page").lastChild.id;
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.cleanPage)();
  console.log(currentPage);
  if (currentPage === "menupage") (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.makeMenuPage)();
  else if (currentPage === "contactpage") (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.makeContactPage)();
  else (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.makeHomepage)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BETztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZDO0FBQ0g7QUFDaEI7QUFDTjs7QUFFekMsc0RBQVU7QUFDVixzREFBUTtBQUNSLDBEQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBUztBQUNYLEVBQUUsMERBQVk7QUFDZCxDQUFDO0FBQ0Q7QUFDQSxFQUFFLHVEQUFTO0FBQ1gsRUFBRSxzREFBWTtBQUNkLENBQUM7QUFDRDtBQUNBLEVBQUUsdURBQVM7QUFDWCxFQUFFLDREQUFlO0FBQ2pCLENBQUM7QUFDRDtBQUNBLEVBQUUsZ0VBQW9CO0FBQ3RCO0FBQ0EsRUFBRSx1REFBUztBQUNYO0FBQ0Esa0NBQWtDLHNEQUFZO0FBQzlDLDBDQUEwQyw0REFBZTtBQUN6RCxPQUFPLDBEQUFZO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb3NtYXRpa2FSZWd1bGFyLUJXQTQ1LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvTW9udHNlcnJhdFJlZ3VsYXItQldCRWwudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Nb250c2VycmF0Qm9sZC1ET1daZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInJvc21hdGlrYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbkBrZXlmcmFtZXMgcGFnZUxvYWQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtb250c2VycmF0XFxcIiwgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XFxufVxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI1NSwgMTQ5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNoZWFkZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgOTB2dywgMTEwMHB4KTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNhbGMoMTBweCArIDF2bWluKSAwO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuI2hlYWRlciB1bCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4ydncpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDE1cHg7XFxufVxcbiNoZWFkZXIgdWwgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAycHg7XFxufVxcbiN0aW55LWxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJyb3NtYXRpa2FcXFwiO1xcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjV2dyk7XFxuICBwYWRkaW5nOiA1cHggMTBweCAwO1xcbiAgYm9yZGVyOiByZ2IoMzcsIDM3LCAzNykgc29saWQgM3B4O1xcbn1cXG4jcGFnZSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4jaG9tZXBhZ2Uge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNsb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9zbWF0aWthXFxcIjtcXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNTUsIDE0OSk7XFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDEwdm1pbik7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiKDM3LCAzNywgMzcpLCAxcHggMXB4IDVweCByZ2IoMzcsIDM3LCAzNyksXFxuICAgIC0xcHggLTFweCA1cHggcmdiKDM3LCAzNywgMzcpO1xcbn1cXG4jbG9nby1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMXZtaW4pO1xcbiAgY29sb3I6IHJnYigyNDQsIDI1NSwgMTQ5KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2IoMzcsIDM3LCAzNyksIDFweCAxcHggM3B4IHJnYigzNywgMzcsIDM3KSxcXG4gICAgLTFweCAtMXB4IDNweCByZ2IoMzcsIDM3LCAzNyk7XFxufVxcbmRpdiNjb250YWN0cGFnZSBpbWcge1xcbiAgd2lkdGg6IGNhbGMoMTVweCArIDEuNXZtaW4pO1xcbiAgaGVpZ2h0OiBjYWxjKDE1cHggKyAxLjV2bWluKTtcXG59XFxuZGl2I2NvbnRhY3RwYWdlIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuZGl2I2NvbnRhY3RwYWdlLFxcbmRpdiNtZW51cGFnZSB7XFxuICB3aWR0aDogY2FsYygyMDBweCArIDE2dncpO1xcbiAgaGVpZ2h0OiBjYWxjKDI3NXB4ICsgMjJ2bWF4KTtcXG4gIHBhZGRpbmc6IGNhbGMoMTBweCArIDN2dyk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNhbGMoMTBweCArIDF2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNTUsIDE0OSwgMC43NSk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyOiAzcHggcmdiKDM3LCAzNywgMzcpIHNvbGlkO1xcbn1cXG5kaXYjbWVudXBhZ2UgZGl2IGgxIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMC41dm1pbik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5kaXYjY29udGFjdHBhZ2UgZGl2IGgxIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMC40dm1pbik7XFxufVxcbmRpdiNjb250YWN0cGFnZSBkaXYgaDIge1xcbiAgZm9udC1zaXplOiBjYWxjKDE4cHggKyAwLjV2bWluKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbmRpdiNtZW51cGFnZSA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMnB4ICsgMXZtaW4pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYjbWVudS1pdGVtcyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZGl2I21lbnUtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5sb2FkIHtcXG4gIGFuaW1hdGlvbjogcGFnZUxvYWQgMzAwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5sb2FkV2l0aERlbGF5IHtcXG4gIGFuaW1hdGlvbjogcGFnZUxvYWQgMzAwbXMgZWFzZS1vdXQgMXMgZm9yd2FyZHM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsK0RBQStEO0FBQ2pFO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsK0RBQWtFO0FBQ3BFO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsK0RBQStEO0VBQy9ELGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIseURBQXlDO0VBQ3pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUI7aUNBQytCO0FBQ2pDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCO2lDQUMrQjtBQUNqQztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9zbWF0aWthXFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udHMvUm9zbWF0aWthUmVndWxhci1CV0E0NS50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTW9udHNlcnJhdFJlZ3VsYXItQldCRWwudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Nb250c2VycmF0Qm9sZC1ET1daZC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuQGtleWZyYW1lcyBwYWdlTG9hZCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIm1vbnRzZXJyYXRcXFwiLCBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcXG59XFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjU1LCAxNDkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2hlYWRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA5MHZ3LCAxMTAwcHgpO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogY2FsYygxMHB4ICsgMXZtaW4pIDA7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4jaGVhZGVyIHVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjJ2dyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogMTVweDtcXG59XFxuI2hlYWRlciB1bCBsaTpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDJweDtcXG59XFxuI3RpbnktbG9nbyB7XFxuICBmb250LWZhbWlseTogXFxcInJvc21hdGlrYVxcXCI7XFxuICBmb250LXNpemU6IGNhbGMoMjRweCArIDAuNXZ3KTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDA7XFxuICBib3JkZXI6IHJnYigzNywgMzcsIDM3KSBzb2xpZCAzcHg7XFxufVxcbiNwYWdlIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4jaG9tZXBhZ2Uge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNsb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicm9zbWF0aWthXFxcIjtcXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNTUsIDE0OSk7XFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDEwdm1pbik7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiKDM3LCAzNywgMzcpLCAxcHggMXB4IDVweCByZ2IoMzcsIDM3LCAzNyksXFxuICAgIC0xcHggLTFweCA1cHggcmdiKDM3LCAzNywgMzcpO1xcbn1cXG4jbG9nby1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMXZtaW4pO1xcbiAgY29sb3I6IHJnYigyNDQsIDI1NSwgMTQ5KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2IoMzcsIDM3LCAzNyksIDFweCAxcHggM3B4IHJnYigzNywgMzcsIDM3KSxcXG4gICAgLTFweCAtMXB4IDNweCByZ2IoMzcsIDM3LCAzNyk7XFxufVxcbmRpdiNjb250YWN0cGFnZSBpbWcge1xcbiAgd2lkdGg6IGNhbGMoMTVweCArIDEuNXZtaW4pO1xcbiAgaGVpZ2h0OiBjYWxjKDE1cHggKyAxLjV2bWluKTtcXG59XFxuZGl2I2NvbnRhY3RwYWdlIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuZGl2I2NvbnRhY3RwYWdlLFxcbmRpdiNtZW51cGFnZSB7XFxuICB3aWR0aDogY2FsYygyMDBweCArIDE2dncpO1xcbiAgaGVpZ2h0OiBjYWxjKDI3NXB4ICsgMjJ2bWF4KTtcXG4gIHBhZGRpbmc6IGNhbGMoMTBweCArIDN2dyk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IGNhbGMoMTBweCArIDF2dyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNTUsIDE0OSwgMC43NSk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyOiAzcHggcmdiKDM3LCAzNywgMzcpIHNvbGlkO1xcbn1cXG5kaXYjbWVudXBhZ2UgZGl2IGgxIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMC41dm1pbik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5kaXYjY29udGFjdHBhZ2UgZGl2IGgxIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMC40dm1pbik7XFxufVxcbmRpdiNjb250YWN0cGFnZSBkaXYgaDIge1xcbiAgZm9udC1zaXplOiBjYWxjKDE4cHggKyAwLjV2bWluKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbmRpdiNtZW51cGFnZSA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMnB4ICsgMXZtaW4pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYjbWVudS1pdGVtcyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZGl2I21lbnUtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5sb2FkIHtcXG4gIGFuaW1hdGlvbjogcGFnZUxvYWQgMzAwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5sb2FkV2l0aERlbGF5IHtcXG4gIGFuaW1hdGlvbjogcGFnZUxvYWQgMzAwbXMgZWFzZS1vdXQgMXMgZm9yd2FyZHM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWRkcmVzc0ljb25TcmMgZnJvbSBcIi4vaWNvbnMvYWRkcmVzcy5wbmdcIjtcbmltcG9ydCBwaG9uZUljb25TcmMgZnJvbSBcIi4vaWNvbnMvcGhvbmUucG5nXCI7XG5pbXBvcnQgY2xvY2tJY29uU3JjIGZyb20gXCIuL2ljb25zL2Nsb2NrLnBuZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgbGFuZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFuZ1wiKS50ZXh0Q29udGVudDtcblxuICBjb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdHBhZ2VcIik7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZHJlc3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWRkcmVzc0ljb24uc3JjID0gYWRkcmVzc0ljb25TcmM7XG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0ljb24pO1xuICBjb25zdCBhZGRyZXNzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgYWRkcmVzc0hlYWRpbmcudGV4dENvbnRlbnQgPSBsYW5nID09PSBcIlRSXCIgPyBcIkFEUkVTXCIgOiBcIkFERFJFU1NcIjtcbiAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzSGVhZGluZyk7XG4gIGNvbnN0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBhZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9XG4gICAgbGFuZyA9PT0gXCJUUlwiXG4gICAgICA/IFwiMTcyNSBTbG91Z2ggQnVsdmFyxLEsIFNjcmFudG9uIFBlbnNpbHZhbnlhXCJcbiAgICAgIDogXCIxNzI1IFNsb3VnaCBBdmVudWUsIFNjcmFudG9uIFBBXCI7XG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xuICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHBob25lSWNvbi5zcmMgPSBwaG9uZUljb25TcmM7XG4gIHBob25lLmFwcGVuZENoaWxkKHBob25lSWNvbik7XG4gIGNvbnN0IHBob25lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcGhvbmVIZWFkaW5nLnRleHRDb250ZW50ID0gbGFuZyA9PT0gXCJUUlwiID8gXCJURUxFRk9OXCIgOiBcIlBIT05FXCI7XG4gIHBob25lLmFwcGVuZENoaWxkKHBob25lSGVhZGluZyk7XG4gIGNvbnN0IHBob25lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcGhvbmVUZXh0LnRleHRDb250ZW50ID0gXCIoNDA3KSA0NTYtNzk0M1wiO1xuICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZVRleHQpO1xuICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob3Vyc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBob3Vyc0ljb24uc3JjID0gY2xvY2tJY29uU3JjO1xuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0ljb24pO1xuICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9IGxhbmcgPT09IFwiVFJcIiA/IFwiw4dBTEnFnk1BIFNBQVRMRVLEsFwiIDogXCJIT1VSU1wiO1xuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICBjb25zdCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhvdXJzVGV4dC50ZXh0Q29udGVudCA9XG4gICAgbGFuZyA9PT0gXCJUUlwiID8gXCJzYWJhaCAxMCAtIGFrxZ9hbSA0LjMwXCIgOiBcIjEwIGEubS4gLSA0LjMwIHAubS5cIjtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUZXh0KTtcbiAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBjb250YWN0UGFnZS5jbGFzc0xpc3QuYWRkKFwibG9hZFwiKTtcblxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICBwYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtYWtlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGlueUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aW55TG9nby50ZXh0Q29udGVudCA9IFwibGF2ZXJuZSdzXCI7XG4gIHRpbnlMb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGlueS1sb2dvXCIpO1xuXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgbGlzdC5hcHBlbmRDaGlsZChob21lQnRuKTtcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuICBsaXN0LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcbiAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG4gIGxpc3QuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgY29uc3QgY2hhbmdlTGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY2hhbmdlTGFuZy50ZXh0Q29udGVudCA9IFwiRU5cIjtcbiAgY2hhbmdlTGFuZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxhbmdcIik7XG4gIGxpc3QuYXBwZW5kQ2hpbGQoY2hhbmdlTGFuZyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpbnlMb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImxvYWRXaXRoRGVsYXlcIik7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUhlYWRlckxhbmd1YWdlKCkge1xuICBjb25zdCBsYW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW5nXCIpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICBsYW5nLnRleHRDb250ZW50ID0gbGFuZy50ZXh0Q29udGVudCA9PT0gXCJFTlwiID8gXCJUUlwiIDogXCJFTlwiO1xuICBob21lLnRleHRDb250ZW50ID0gbGFuZy50ZXh0Q29udGVudCA9PT0gXCJFTlwiID8gXCJIT01FXCIgOiBcIkfEsFLEsMWeXCI7XG4gIG1lbnUudGV4dENvbnRlbnQgPSBsYW5nLnRleHRDb250ZW50ID09PSBcIkVOXCIgPyBcIk1FTlVcIiA6IFwiTUVOw5xcIjtcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IGxhbmcudGV4dENvbnRlbnQgPT09IFwiRU5cIiA/IFwiQ09OVEFDVFwiIDogXCJCxLBaRSBVTEHFnklOXCI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUhvbWVwYWdlKCkge1xuICBjb25zdCBsYW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW5nXCIpLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZXBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lcGFnZVwiKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJsYXZlcm5lJ3NcIjtcbiAgY29uc3QgbG9nb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ28taW5mb1wiKTtcbiAgbG9nb0luZm8udGV4dENvbnRlbnQgPVxuICAgIGxhbmcgPT09IFwiVFJcIlxuICAgICAgPyBcInlhYmFuIG1lcnNpbmxpIHR1cnRhbGFyICYgZGFoYXPEsVwiXG4gICAgICA6IFwiYmx1ZWJlcnJ5IHBpZXMgJiBvdGhlcnNcIjtcblxuICBob21lcGFnZS5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQobG9nb0luZm8pO1xuICBob21lcGFnZS5jbGFzc0xpc3QuYWRkKFwibG9hZFwiKTtcblxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICBwYWdlLmFwcGVuZENoaWxkKGhvbWVwYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFnZSgpIHtcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYWdlXCIpO1xuICBwYWdlLmNsYXNzTGlzdC5hZGQoXCJsb2FkV2l0aERlbGF5XCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUGFnZSgpIHtcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKTtcbiAgaWYgKHBhZ2UubGFzdENoaWxkKSBwYWdlLmxhc3RDaGlsZC5yZW1vdmUoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtYWtlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGxhbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmdcIikudGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51UGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVwYWdlXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBsYW5nID09PSBcIlRSXCIgPyBcIk1FTsOcXCIgOiBcIk1FTlVcIjtcbiAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgY29uc3QgYWxsSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhbGxJdGVtcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtaXRlbXNcIik7XG5cbiAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaXRlbS50ZXh0Q29udGVudCA9IGxhbmcgPT09IFwiVFJcIiA/IFwieWFiYW4gbWVyc2lubGlcIiA6IFwiYmx1ZWJlcnJ5XCI7XG4gIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBcIjVcIjtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZSk7XG4gIGFsbEl0ZW1zLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuXG4gIGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBpdGVtLnRleHRDb250ZW50ID0gbGFuZyA9PT0gXCJUUlwiID8gXCJlbG1hbMSxXCIgOiBcImFwcGxlXCI7XG4gIHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBwcmljZS50ZXh0Q29udGVudCA9IFwiM1wiO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgYWxsSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG5cbiAgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGl0ZW0udGV4dENvbnRlbnQgPSBsYW5nID09PSBcIlRSXCIgPyBcIsOnaWtvbGF0YWzEsVwiIDogXCJjaG9jb2xhdGVcIjtcbiAgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHByaWNlLnRleHRDb250ZW50ID0gXCIzLjVcIjtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZSk7XG4gIGFsbEl0ZW1zLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuXG4gIGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBpdGVtLnRleHRDb250ZW50ID0gbGFuZyA9PT0gXCJUUlwiID8gXCJtdXoga3JlbWFsxLFcIiA6IFwiYmFuYW5hIGNyZWFtXCI7XG4gIHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBwcmljZS50ZXh0Q29udGVudCA9IFwiNFwiO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgYWxsSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG5cbiAgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGl0ZW0udGV4dENvbnRlbnQgPSBsYW5nID09PSBcIlRSXCIgPyBcInJhdmVudGxpXCIgOiBcInJodWJhcmJcIjtcbiAgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHByaWNlLnRleHRDb250ZW50ID0gXCIyLjVcIjtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZSk7XG4gIGFsbEl0ZW1zLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuXG4gIGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBpdGVtLnRleHRDb250ZW50ID0gbGFuZyA9PT0gXCJUUlwiID8gXCJiYWxrYWJha2zEsVwiIDogXCJwdW1wa2luXCI7XG4gIHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBwcmljZS50ZXh0Q29udGVudCA9IFwiM1wiO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgYWxsSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG5cbiAgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGl0ZW0udGV4dENvbnRlbnQgPSBsYW5nID09PSBcIlRSXCIgPyBcInZpxZ9uZWxpXCIgOiBcImNoZXJyeVwiO1xuICBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBcIjRcIjtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZSk7XG4gIGFsbEl0ZW1zLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuXG4gIGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBpdGVtLnRleHRDb250ZW50ID0gbGFuZyA9PT0gXCJUUlwiID8gXCLFn2VmdGFsaWxpXCIgOiBcInBlYWNoXCI7XG4gIHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBwcmljZS50ZXh0Q29udGVudCA9IFwiNVwiO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgYWxsSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG5cbiAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoYWxsSXRlbXMpO1xuICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKFwibG9hZFwiKTtcblxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlXCIpO1xuICBwYWdlLmFwcGVuZENoaWxkKG1lbnVQYWdlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbWFrZUhvbWVwYWdlLCBtYWtlUGFnZSwgY2xlYW5QYWdlIH0gZnJvbSBcIi4vaG9tZXBhZ2UuanNcIjtcbmltcG9ydCB7IG1ha2VIZWFkZXIsIGNoYW5nZUhlYWRlckxhbmd1YWdlIH0gZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgeyBtYWtlQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBtYWtlTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbm1ha2VIZWFkZXIoKTtcbm1ha2VQYWdlKCk7XG5tYWtlSG9tZXBhZ2UoKTtcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuY29uc3QgY2hhbmdlTGFuZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFuZ1wiKTtcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhblBhZ2UoKTtcbiAgbWFrZUhvbWVwYWdlKCk7XG59KTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYW5QYWdlKCk7XG4gIG1ha2VNZW51UGFnZSgpO1xufSk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFuUGFnZSgpO1xuICBtYWtlQ29udGFjdFBhZ2UoKTtcbn0pO1xuY2hhbmdlTGFuZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaGFuZ2VIZWFkZXJMYW5ndWFnZSgpO1xuICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKS5sYXN0Q2hpbGQuaWQ7XG4gIGNsZWFuUGFnZSgpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XG4gIGlmIChjdXJyZW50UGFnZSA9PT0gXCJtZW51cGFnZVwiKSBtYWtlTWVudVBhZ2UoKTtcbiAgZWxzZSBpZiAoY3VycmVudFBhZ2UgPT09IFwiY29udGFjdHBhZ2VcIikgbWFrZUNvbnRhY3RQYWdlKCk7XG4gIGVsc2UgbWFrZUhvbWVwYWdlKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==