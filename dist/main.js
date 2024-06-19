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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SpicyRice-Regular.ttf */ "./src/SpicyRice-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./myIcon2.jpg */ "./src/myIcon2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin:0;
    padding:0;
}
@font-face{
    font-family:'myFont';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(truetype);
}
body{
    background:url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    position:relative;
    font-family:'myFont';
}
header{
    display:flex;
    justify-content: center;
    padding-top:1rem;
}
header>nav>button{
    margin-left:2rem;
    background: none;
    border:none;
    font-family:'myFont';
    font-size:2rem;
    color:brown;
}
#content{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:4.8rem;
    opacity:0.7;
    border-radius:10px;
    padding:1.2rem 3rem;
}
.welcome,.hours,.location{
    width:600px;
    margin-bottom:2.5rem
}
.welcome>h2,.hours>h2,.location>h2,.about>h2{
    font-size:2.5rem;
    text-align:center;
    margin-bottom:1.2rem;
}
.welcome>p,.hours>p,.location>p{
    font-size:1.5rem;
}
.about>p{
    font-size:1.3rem;
} 
.about>div{
    display:flex;
    justify-content: center;
    margin-top:2.5rem;
}
.about>div>button{
    border-radius:5px;
    border:none;
    background:rgb(171, 54, 54);
    font-size:1.3rem;
    padding:0.5rem 1rem;
}
.about>div>button a{
    text-decoration:none;
    font-family:'myFont';
    color:black;
}
.about>div>button:hover{
    background:orange;
}
#content>.menu-container{
    display:grid;
    grid-template-columns:1fr 2fr;
    gap:1.5rem;
    row-gap: 2.5rem;
}
#content>div>div{
    display:flex;
    width:400px;
}
#content>div>div img{
    width:150px;
    height:150px;
    display:inline;
    margin-right:0.5rem;
    border-radius:10px;
}
#content>div>div>div>p+p+s+p,#content>div>div>div>p+p{
    display:inline;
}
#content>div>div>div>p+p+s{
    margin-right:0.7rem;
}
#content>div>div>div button{
    display:block;
    border:none;
    background:brown;
    border-radius: 10px;
    font-size:1rem;
    font-family:'myFont';
    padding:0.5rem 0.8rem;
    margin:0.5rem 0 0 5rem;
}
#content>div>div>div button:hover{
    background:orange;
}
.footer{
    background: brown;
    position:fixed;
    left:0;
    bottom:0;
    text-align:center;
    font-size:0.7rem;
    width:100%;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding:0.5rem 0;
    margin-top:0.8rem;
}
@media(max-width:600px){
    header>nav>button{
        font-size:1.2rem
    }
    .welcome,.hours,.location{
        width:350px;
        margin-bottom:1.5rem;
    }
    .welcome>h2,.hours>h2,.location>h2,.about>h2{
        font-size:1.7rem;
        margin-bottom:0.8rem;
    }
    .welcome>p,.hours>p,.location>p{
        font-size:1.3rem;
        padding:0 0.5rem;
        text-align: justify;
    }
    .about>p{
        font-size:1rem;
        text-align: justify;
    } 
    #content>.menu-container{
        display:grid;
        grid-template-columns:1fr;
        gap:1.5rem;
    }
    #content>div>div{
        width:300px;
    }
    #content>div>div>div p:first-child{
        text-align:justify;
    }
    #content>div>div img{
        width: 135px;
        height:120px;
        margin-right:0.5rem;
    }
    #content>div>div>div button{
        margin-left: 2.5rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;AACA;IACI,oBAAoB;IACpB,4DAAiD;AACrD;AACA;IACI,kDAA+B;IAC/B,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,oBAAoB;IACpB,cAAc;IACd,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,QAAQ;IACR,0BAA0B;IAC1B,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX;AACJ;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,2BAA2B;IAC3B,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,UAAU;IACV,eAAe;AACnB;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,cAAc;AAClB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,qBAAqB;IACrB,sBAAsB;AAC1B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,MAAM;IACN,QAAQ;IACR,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;IACV,uEAAuE;IACvE,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI;QACI;IACJ;IACA;QACI,WAAW;QACX,oBAAoB;IACxB;IACA;QACI,gBAAgB;QAChB,oBAAoB;IACxB;IACA;QACI,gBAAgB;QAChB,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,cAAc;QACd,mBAAmB;IACvB;IACA;QACI,YAAY;QACZ,yBAAyB;QACzB,UAAU;IACd;IACA;QACI,WAAW;IACf;IACA;QACI,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,YAAY;QACZ,mBAAmB;IACvB;IACA;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n@font-face{\n    font-family:'myFont';\n    src:url(./SpicyRice-Regular.ttf) format(truetype);\n}\nbody{\n    background:url('./myIcon2.jpg');\n    position:relative;\n    font-family:'myFont';\n}\nheader{\n    display:flex;\n    justify-content: center;\n    padding-top:1rem;\n}\nheader>nav>button{\n    margin-left:2rem;\n    background: none;\n    border:none;\n    font-family:'myFont';\n    font-size:2rem;\n    color:brown;\n}\n#content{\n    position:absolute;\n    left:50%;\n    transform:translateX(-50%);\n    top:4.8rem;\n    opacity:0.7;\n    border-radius:10px;\n    padding:1.2rem 3rem;\n}\n.welcome,.hours,.location{\n    width:600px;\n    margin-bottom:2.5rem\n}\n.welcome>h2,.hours>h2,.location>h2,.about>h2{\n    font-size:2.5rem;\n    text-align:center;\n    margin-bottom:1.2rem;\n}\n.welcome>p,.hours>p,.location>p{\n    font-size:1.5rem;\n}\n.about>p{\n    font-size:1.3rem;\n} \n.about>div{\n    display:flex;\n    justify-content: center;\n    margin-top:2.5rem;\n}\n.about>div>button{\n    border-radius:5px;\n    border:none;\n    background:rgb(171, 54, 54);\n    font-size:1.3rem;\n    padding:0.5rem 1rem;\n}\n.about>div>button a{\n    text-decoration:none;\n    font-family:'myFont';\n    color:black;\n}\n.about>div>button:hover{\n    background:orange;\n}\n#content>.menu-container{\n    display:grid;\n    grid-template-columns:1fr 2fr;\n    gap:1.5rem;\n    row-gap: 2.5rem;\n}\n#content>div>div{\n    display:flex;\n    width:400px;\n}\n#content>div>div img{\n    width:150px;\n    height:150px;\n    display:inline;\n    margin-right:0.5rem;\n    border-radius:10px;\n}\n#content>div>div>div>p+p+s+p,#content>div>div>div>p+p{\n    display:inline;\n}\n#content>div>div>div>p+p+s{\n    margin-right:0.7rem;\n}\n#content>div>div>div button{\n    display:block;\n    border:none;\n    background:brown;\n    border-radius: 10px;\n    font-size:1rem;\n    font-family:'myFont';\n    padding:0.5rem 0.8rem;\n    margin:0.5rem 0 0 5rem;\n}\n#content>div>div>div button:hover{\n    background:orange;\n}\n.footer{\n    background: brown;\n    position:fixed;\n    left:0;\n    bottom:0;\n    text-align:center;\n    font-size:0.7rem;\n    width:100%;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    padding:0.5rem 0;\n    margin-top:0.8rem;\n}\n@media(max-width:600px){\n    header>nav>button{\n        font-size:1.2rem\n    }\n    .welcome,.hours,.location{\n        width:350px;\n        margin-bottom:1.5rem;\n    }\n    .welcome>h2,.hours>h2,.location>h2,.about>h2{\n        font-size:1.7rem;\n        margin-bottom:0.8rem;\n    }\n    .welcome>p,.hours>p,.location>p{\n        font-size:1.3rem;\n        padding:0 0.5rem;\n        text-align: justify;\n    }\n    .about>p{\n        font-size:1rem;\n        text-align: justify;\n    } \n    #content>.menu-container{\n        display:grid;\n        grid-template-columns:1fr;\n        gap:1.5rem;\n    }\n    #content>div>div{\n        width:300px;\n    }\n    #content>div>div>div p:first-child{\n        text-align:justify;\n    }\n    #content>div>div img{\n        width: 135px;\n        height:120px;\n        margin-right:0.5rem;\n    }\n    #content>div>div>div button{\n        margin-left: 2.5rem;\n    }\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutSetup: () => (/* binding */ aboutSetup)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function aboutSetup(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.style.background="#FFDE95";
    _index_js__WEBPACK_IMPORTED_MODULE_1__.aboutButton.style.borderBottomColor="#FFDE95";
    _index_js__WEBPACK_IMPORTED_MODULE_1__.aboutButton.style.borderBottomStyle="solid";

    let myFooter=document.querySelector(".footer");
    myFooter.style.visibility="visible";

    let aboutContainer=document.createElement("div");
    aboutContainer.classList.add("about");

    let aboutIntro=document.createElement("h2");
    let aboutContent1=document.createElement("p");
    let aboutContent2=document.createElement("p");
    let aboutContent3=document.createElement("p");
    let aboutContent4=document.createElement("p");
    let contactButtonContainer=document.createElement("div");
    let contactButton=document.createElement("button");
    let contactLink=document.createElement("a");

    aboutIntro.textContent="Thanks For Visiting A$D Modern Restaurant";
    aboutContent1.textContent="Our restaurant was established in 2003. We have been full filing customers needs for the past 20years with multiple regional awards for our services. Also we have two franchises in Africa as well as Europe, more over we are working day and night to expand globally so that the every one would enjoy our great products. Our greatest secret for all the success all this years is through hard work, persistance and our excellent employees who are working with their full potential."
    aboutContent2.textContent="You can contact us through the following email and phone number";
    aboutContent3.textContent="Email: AmanuelNaizghi93@gmail.com ModernA$D@yahoo.com";
    aboutContent4.textContent="Phone number: +1-354-4587-2587";
    contactLink.textContent="Contact Us";

    aboutContainer.appendChild(aboutIntro);
    aboutContainer.appendChild(aboutContent1);
    aboutContainer.appendChild(aboutContent2);
    aboutContainer.appendChild(aboutContent3);
    aboutContainer.appendChild(aboutContent4);
    contactButton.appendChild(contactLink);
    contactButtonContainer.appendChild(contactButton);
    aboutContainer.appendChild(contactButtonContainer);
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.appendChild(aboutContainer);
//Used for creating a link that will direct you to send an email to the specified address
    contactLink.setAttribute('href','mailto:AmanuelNaizghi93@gmail.com');
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeSetup: () => (/* binding */ homeSetup)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function homeSetup(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();//For clearing the previous content, so that home page's content will be created
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.style.background="#FFDE95";
    _index_js__WEBPACK_IMPORTED_MODULE_1__.homeButton.style.borderBottomColor="#FFDE95";
    _index_js__WEBPACK_IMPORTED_MODULE_1__.homeButton.style.borderBottomStyle="solid";

    let myFooter=document.querySelector(".footer");
    myFooter.style.visibility="visible";

    let welcomeContainer=document.createElement("div");
    let hoursContainer=document.createElement("div");
    let locationContainer=document.createElement("div");

    welcomeContainer.classList.add("welcome");
    hoursContainer.classList.add("hours");
    locationContainer.classList.add("location");

    let welcomeIntro=document.createElement("h2");
    let welcomeContent=document.createElement("p");
    let hoursIntro=document.createElement("h2");
    let hoursContent1=document.createElement("p");
    let hoursContent2=document.createElement("p");
    let locationIntro=document.createElement("h2");
    let locationContent=document.createElement("p");

    welcomeIntro.textContent="Welcome To A$D Modern Restaurant";
    welcomeContent.textContent="We are here by to serve our customers with the city's most delicious fast foods. Make sure you enjoy every bite."
    hoursIntro.textContent="Working Hours";
    hoursContent1.textContent="Monday To Friday  ------ 8:00Am to 10:00Pm ";
    hoursContent2.textContent="Saturday & Sunday ------ 8:00Am to 2:30Am ";
    locationIntro.textContent="Our Location";
    locationContent.textContent="North East Carolina, West Side High Way,4867 Purple Street, Block 125";
    
    welcomeContainer.appendChild(welcomeIntro);
    welcomeContainer.appendChild(welcomeContent);
    hoursContainer.appendChild(hoursIntro);
    hoursContainer.appendChild(hoursContent1);
    hoursContainer.appendChild(hoursContent2);
    locationContainer.appendChild(locationIntro);
    locationContainer.appendChild(locationContent);

    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.appendChild(welcomeContainer);
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.appendChild(hoursContainer);
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.appendChild(locationContainer);

}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutButton: () => (/* binding */ aboutButton),
/* harmony export */   clearContent: () => (/* binding */ clearContent),
/* harmony export */   homeButton: () => (/* binding */ homeButton),
/* harmony export */   menuButton: () => (/* binding */ menuButton),
/* harmony export */   myContent: () => (/* binding */ myContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





const myContent=document.querySelector("#content");
//Creating action listener for the navigation buttons
let homeButton=document.querySelector("#home");
homeButton.addEventListener('click',()=>(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeSetup)());

let aboutButton=document.querySelector("#about");
aboutButton.addEventListener('click',()=>(0,_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutSetup)());

let menuButton=document.querySelector("#menu");
menuButton.addEventListener('click',()=>(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuSetup)());
//This function is used for clearing the page after another button in the navigation is clicked
function clearContent(){
    document.getElementById('content').innerHTML="";
    myContent.style.opacity="0.7";
    homeButton.style.borderBottomColor="none";
    homeButton.style.borderBottomStyle="none";
    aboutButton.style.borderBottomColor="none";
    aboutButton.style.borderBottomStyle="none";
    menuButton.style.borderBottomColor="none";
    menuButton.style.borderBottomStyle="none";
}
//Used when the page is initializing so that the page will start loading with the home page
let initial=0;
if(initial===0){
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeSetup)();
    initial+=1;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuSetup: () => (/* binding */ menuSetup)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger.jpg */ "./src/burger.jpg");
/* harmony import */ var _chicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chicken.jpg */ "./src/chicken.jpg");
/* harmony import */ var _pasta_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pasta.jpg */ "./src/pasta.jpg");
/* harmony import */ var _macaroon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./macaroon.jpg */ "./src/macaroon.jpg");
/* harmony import */ var _salad_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salad.jpg */ "./src/salad.jpg");
/* harmony import */ var _soda_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./soda.jpg */ "./src/soda.jpg");









function menuSetup(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.style.background="#FFDE95";
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.style.opacity="0.9";
    _index_js__WEBPACK_IMPORTED_MODULE_1__.menuButton.style.borderBottomColor="#FFDE95";
    _index_js__WEBPACK_IMPORTED_MODULE_1__.menuButton.style.borderBottomStyle="solid";

    let myFooter=document.querySelector(".footer");
    myFooter.style.visibility="hidden";

    let menuContainer=document.createElement("div");
    menuContainer.classList.add("menu-container");
    let burgerContainer=document.createElement("div");
    let chickenContainer=document.createElement("div");
    let lasagnaContainer=document.createElement("div");
    let pastaContainer=document.createElement("div");
    let saladContainer=document.createElement("div");
    let sodaContainer=document.createElement("div");

    let burgerImageContainer=document.createElement("div");
    let chickenImageContainer=document.createElement("div");
    let lasagnaImageContainer=document.createElement("div");
    let pastaImageContainer=document.createElement("div");
    let saladImageContainer=document.createElement("div");
    let sodaImageContainer=document.createElement("div");

    const myBurger=new Image();
    const myChicken=new Image();
    const myLasagna=new Image();
    const myPasta=new Image();
    const mySalad=new Image();
    const mySoda=new Image();
    myBurger.src=_burger_jpg__WEBPACK_IMPORTED_MODULE_2__;
    myChicken.src=_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__;
    myLasagna.src=_pasta_jpg__WEBPACK_IMPORTED_MODULE_4__;
    myPasta.src=_macaroon_jpg__WEBPACK_IMPORTED_MODULE_5__;
    mySalad.src=_salad_jpg__WEBPACK_IMPORTED_MODULE_6__;
    mySoda.src=_soda_jpg__WEBPACK_IMPORTED_MODULE_7__;
    burgerImageContainer.appendChild(myBurger);
    chickenImageContainer.appendChild(myChicken);
    lasagnaImageContainer.appendChild(myLasagna);
    pastaImageContainer.appendChild(myPasta);
    saladImageContainer.appendChild(mySalad);
    sodaImageContainer.appendChild(mySoda);
    burgerContainer.appendChild(burgerImageContainer);
    chickenContainer.appendChild(chickenImageContainer);
    lasagnaContainer.appendChild(lasagnaImageContainer);
    pastaContainer.appendChild(pastaImageContainer);
    saladContainer.appendChild(saladImageContainer);
    sodaContainer.appendChild(sodaImageContainer);

    let burgerDetailContainer=document.createElement("div");
    let chickenDetailContainer=document.createElement("div");
    let lasagnaDetailContainer=document.createElement("div");
    let pastaDetailContainer=document.createElement("div");
    let saladDetailContainer=document.createElement("div");
    let sodaDetailContainer=document.createElement("div");

    let burgerIntro=document.createElement("h2");
    let chickenIntro=document.createElement("h2");
    let lasagnaIntro=document.createElement("h2");
    let pastaIntro=document.createElement("h2");
    let saladIntro=document.createElement("h2");
    let sodaIntro=document.createElement("h2");

    let burgerInfo=document.createElement("p");
    let chickenInfo=document.createElement("p");
    let lasagnaInfo=document.createElement("p");
    let pastaInfo=document.createElement("p");
    let saladInfo=document.createElement("p");
    let sodaInfo=document.createElement("p");

    let burgerPriceText=document.createElement("p");
    let chickenPriceText=document.createElement("p");
    let lasagnaPriceText=document.createElement("p");
    let pastaPriceText=document.createElement("p");
    let saladPriceText=document.createElement("p");
    let sodaPriceText=document.createElement("p");

    let burgerOldPrice=document.createElement("s");   
    let chickenOldPrice=document.createElement("p");  
    let lasagnaOldPrice=document.createElement("p");  
    let pastaOldPrice=document.createElement("s"); 
    let saladOldPrice=document.createElement("p"); 
    let sodaOldPrice=document.createElement("s");    

    let burgerNewPrice=document.createElement("p"); 
    let pastaNewPrice=document.createElement("p"); 
    let sodaNewPrice=document.createElement("p");  

    burgerIntro.textContent="Burger";
    chickenIntro.textContent="Chicken";
    lasagnaIntro.textContent="Lasagna";
    pastaIntro.textContent="Pasta";
    saladIntro.textContent="Salad";
    sodaIntro.textContent="Soda";

    burgerInfo.textContent="Our place special table served with high quality double meat burger and cheese";
    chickenInfo.textContent="Fried chicken with a quality taste, and chips, and chapati served along side it";
    lasagnaInfo.textContent="Delicious and spicy well toasted lasagna with fried meat balls and sauce inside";
    pastaInfo.textContent="The legendary Italian pasta macaroni with spicy sauce, grinded meat & cheese drops"
    saladInfo.textContent="With fresh vegetables like cabbage,potato, garlic, mushroom & small amount of meat"
    sodaInfo.textContent="We serve all kind of soft drinks, mineral water & different energy drinks";

    burgerPriceText.textContent="Price: ";
    chickenPriceText.textContent="Price: ";
    lasagnaPriceText.textContent="Price: ";
    pastaPriceText.textContent="Price: ";
    saladPriceText.textContent="Price: ";
    sodaPriceText.textContent="Price: ";

    burgerOldPrice.textContent="$7.99";
    chickenOldPrice.textContent="$9.00";
    lasagnaOldPrice.textContent="$5.00";
    pastaOldPrice.textContent="$5.99";
    saladOldPrice.textContent="$3.00"
    sodaOldPrice.textContent="$3.50";
    burgerNewPrice.textContent="$6.00";
    pastaNewPrice.textContent="$4.00";
    sodaNewPrice.textContent="$2.00";

    let burgerOrder=document.createElement("button");
    let chickenOrder=document.createElement("button");
    let lasagnaOrder=document.createElement("button");
    let pastaOrder=document.createElement("button");
    let saladOrder=document.createElement("button");
    let sodaOrder=document.createElement("button");

    burgerOrder.textContent="Order";
    chickenOrder.textContent="Order";
    lasagnaOrder.textContent="Order";
    pastaOrder.textContent="Order";
    saladOrder.textContent="Order";
    sodaOrder.textContent="Order";

    burgerDetailContainer.appendChild(burgerIntro);
    burgerDetailContainer.appendChild(burgerInfo);
    burgerDetailContainer.appendChild(burgerPriceText);
    burgerDetailContainer.appendChild(burgerOldPrice);
    burgerDetailContainer.appendChild(burgerNewPrice);
    burgerDetailContainer.appendChild(burgerOrder);
    chickenDetailContainer.appendChild(chickenIntro);
    chickenDetailContainer.appendChild(chickenInfo);
    chickenDetailContainer.appendChild(chickenPriceText);
    chickenDetailContainer.appendChild(chickenOldPrice);
    chickenDetailContainer.appendChild(chickenOrder);
    lasagnaDetailContainer.appendChild(lasagnaIntro);
    lasagnaDetailContainer.appendChild(lasagnaInfo);
    lasagnaDetailContainer.appendChild(lasagnaPriceText);
    lasagnaDetailContainer.appendChild(lasagnaOldPrice);
    lasagnaDetailContainer.appendChild(lasagnaOrder);
    pastaDetailContainer.appendChild(pastaIntro);
    pastaDetailContainer.appendChild(pastaInfo);
    pastaDetailContainer.appendChild(pastaPriceText);
    pastaDetailContainer.appendChild(pastaOldPrice);
    pastaDetailContainer.appendChild(pastaNewPrice);
    pastaDetailContainer.appendChild(pastaOrder);
    saladDetailContainer.appendChild(saladIntro);
    saladDetailContainer.appendChild(saladInfo);
    saladDetailContainer.appendChild(saladPriceText);
    saladDetailContainer.appendChild(saladOldPrice);
    saladDetailContainer.appendChild(saladOrder);
    sodaDetailContainer.appendChild(sodaIntro);
    sodaDetailContainer.appendChild(sodaInfo);
    sodaDetailContainer.appendChild(sodaPriceText);
    sodaDetailContainer.appendChild(sodaOldPrice);
    sodaDetailContainer.appendChild(sodaNewPrice);
    sodaDetailContainer.appendChild(sodaNewPrice);
    sodaDetailContainer.appendChild(sodaOrder);
    burgerContainer.appendChild(burgerDetailContainer);
    chickenContainer.appendChild(chickenDetailContainer);
    lasagnaContainer.appendChild(lasagnaDetailContainer);
    pastaContainer.appendChild(pastaDetailContainer);
    saladContainer.appendChild(saladDetailContainer);
    sodaContainer.appendChild(sodaDetailContainer);
    menuContainer.appendChild(burgerContainer);
    menuContainer.appendChild(chickenContainer);
    menuContainer.appendChild(lasagnaContainer);
    menuContainer.appendChild(pastaContainer);
    menuContainer.appendChild(saladContainer);
    menuContainer.appendChild(sodaContainer);
    _index_js__WEBPACK_IMPORTED_MODULE_1__.myContent.appendChild(menuContainer);
}

/***/ }),

/***/ "./src/SpicyRice-Regular.ttf":
/*!***********************************!*\
  !*** ./src/SpicyRice-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "669a98069dca05b90662.ttf";

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "023173d37822f2ad08fc.jpg";

/***/ }),

/***/ "./src/chicken.jpg":
/*!*************************!*\
  !*** ./src/chicken.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10debd6476c7c18c302d.jpg";

/***/ }),

/***/ "./src/macaroon.jpg":
/*!**************************!*\
  !*** ./src/macaroon.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bf168b60ba312f6726a.jpg";

/***/ }),

/***/ "./src/myIcon2.jpg":
/*!*************************!*\
  !*** ./src/myIcon2.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89c857b229b973847733.jpg";

/***/ }),

/***/ "./src/pasta.jpg":
/*!***********************!*\
  !*** ./src/pasta.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "508a6c82b12aeb61611e.jpg";

/***/ }),

/***/ "./src/salad.jpg":
/*!***********************!*\
  !*** ./src/salad.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df087b449a3c8576ca9a.jpg";

/***/ }),

/***/ "./src/soda.jpg":
/*!**********************!*\
  !*** ./src/soda.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57779b15b91272e54415.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsdUdBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFB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Ozs7Ozs7Ozs7VUMvTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vU3BpY3lSaWNlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9teUljb24yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTonbXlGb250JztcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQ6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQnO1xufVxuaGVhZGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xufVxuaGVhZGVyPm5hdj5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6MnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQnO1xuICAgIGZvbnQtc2l6ZToycmVtO1xuICAgIGNvbG9yOmJyb3duO1xufVxuI2NvbnRlbnR7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDo1MCU7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgdG9wOjQuOHJlbTtcbiAgICBvcGFjaXR5OjAuNztcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgcGFkZGluZzoxLjJyZW0gM3JlbTtcbn1cbi53ZWxjb21lLC5ob3VycywubG9jYXRpb257XG4gICAgd2lkdGg6NjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToyLjVyZW1cbn1cbi53ZWxjb21lPmgyLC5ob3Vycz5oMiwubG9jYXRpb24+aDIsLmFib3V0Pmgye1xuICAgIGZvbnQtc2l6ZToyLjVyZW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbToxLjJyZW07XG59XG4ud2VsY29tZT5wLC5ob3Vycz5wLC5sb2NhdGlvbj5we1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG59XG4uYWJvdXQ+cHtcbiAgICBmb250LXNpemU6MS4zcmVtO1xufSBcbi5hYm91dD5kaXZ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6Mi41cmVtO1xufVxuLmFib3V0PmRpdj5idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDpyZ2IoMTcxLCA1NCwgNTQpO1xuICAgIGZvbnQtc2l6ZToxLjNyZW07XG4gICAgcGFkZGluZzowLjVyZW0gMXJlbTtcbn1cbi5hYm91dD5kaXY+YnV0dG9uIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XG4gICAgY29sb3I6YmxhY2s7XG59XG4uYWJvdXQ+ZGl2PmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcbn1cbiNjb250ZW50Pi5tZW51LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAyZnI7XG4gICAgZ2FwOjEuNXJlbTtcbiAgICByb3ctZ2FwOiAyLjVyZW07XG59XG4jY29udGVudD5kaXY+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICB3aWR0aDo0MDBweDtcbn1cbiNjb250ZW50PmRpdj5kaXYgaW1ne1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDoxNTBweDtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBtYXJnaW4tcmlnaHQ6MC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cbiNjb250ZW50PmRpdj5kaXY+ZGl2PnArcCtzK3AsI2NvbnRlbnQ+ZGl2PmRpdj5kaXY+cCtwe1xuICAgIGRpc3BsYXk6aW5saW5lO1xufVxuI2NvbnRlbnQ+ZGl2PmRpdj5kaXY+cCtwK3N7XG4gICAgbWFyZ2luLXJpZ2h0OjAuN3JlbTtcbn1cbiNjb250ZW50PmRpdj5kaXY+ZGl2IGJ1dHRvbntcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJhY2tncm91bmQ6YnJvd247XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBmb250LWZhbWlseTonbXlGb250JztcbiAgICBwYWRkaW5nOjAuNXJlbSAwLjhyZW07XG4gICAgbWFyZ2luOjAuNXJlbSAwIDAgNXJlbTtcbn1cbiNjb250ZW50PmRpdj5kaXY+ZGl2IGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcbn1cbi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZDogYnJvd247XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgbGVmdDowO1xuICAgIGJvdHRvbTowO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTowLjdyZW07XG4gICAgd2lkdGg6MTAwJTtcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOjAuNXJlbSAwO1xuICAgIG1hcmdpbi10b3A6MC44cmVtO1xufVxuQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XG4gICAgaGVhZGVyPm5hdj5idXR0b257XG4gICAgICAgIGZvbnQtc2l6ZToxLjJyZW1cbiAgICB9XG4gICAgLndlbGNvbWUsLmhvdXJzLC5sb2NhdGlvbntcbiAgICAgICAgd2lkdGg6MzUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MS41cmVtO1xuICAgIH1cbiAgICAud2VsY29tZT5oMiwuaG91cnM+aDIsLmxvY2F0aW9uPmgyLC5hYm91dD5oMntcbiAgICAgICAgZm9udC1zaXplOjEuN3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowLjhyZW07XG4gICAgfVxuICAgIC53ZWxjb21lPnAsLmhvdXJzPnAsLmxvY2F0aW9uPnB7XG4gICAgICAgIGZvbnQtc2l6ZToxLjNyZW07XG4gICAgICAgIHBhZGRpbmc6MCAwLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIC5hYm91dD5we1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9IFxuICAgICNjb250ZW50Pi5tZW51LWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xuICAgICAgICBnYXA6MS41cmVtO1xuICAgIH1cbiAgICAjY29udGVudD5kaXY+ZGl2e1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICB9XG4gICAgI2NvbnRlbnQ+ZGl2PmRpdj5kaXYgcDpmaXJzdC1jaGlsZHtcbiAgICAgICAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xuICAgIH1cbiAgICAjY29udGVudD5kaXY+ZGl2IGltZ3tcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICBoZWlnaHQ6MTIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDowLjVyZW07XG4gICAgfVxuICAgICNjb250ZW50PmRpdj5kaXY+ZGl2IGJ1dHRvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDREQUFpRDtBQUNyRDtBQUNBO0lBQ0ksa0RBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsTUFBTTtJQUNOLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix1RUFBdUU7SUFDdkUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksY0FBYztRQUNkLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XFxuICAgIHNyYzp1cmwoLi9TcGljeVJpY2UtUmVndWxhci50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQ6dXJsKCcuL215SWNvbjIuanBnJyk7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTonbXlGb250JztcXG59XFxuaGVhZGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xcbn1cXG5oZWFkZXI+bmF2PmJ1dHRvbntcXG4gICAgbWFyZ2luLWxlZnQ6MnJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQnO1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgY29sb3I6YnJvd247XFxufVxcbiNjb250ZW50e1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgbGVmdDo1MCU7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB0b3A6NC44cmVtO1xcbiAgICBvcGFjaXR5OjAuNztcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBwYWRkaW5nOjEuMnJlbSAzcmVtO1xcbn1cXG4ud2VsY29tZSwuaG91cnMsLmxvY2F0aW9ue1xcbiAgICB3aWR0aDo2MDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbToyLjVyZW1cXG59XFxuLndlbGNvbWU+aDIsLmhvdXJzPmgyLC5sb2NhdGlvbj5oMiwuYWJvdXQ+aDJ7XFxuICAgIGZvbnQtc2l6ZToyLjVyZW07XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcXG59XFxuLndlbGNvbWU+cCwuaG91cnM+cCwubG9jYXRpb24+cHtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG59XFxuLmFib3V0PnB7XFxuICAgIGZvbnQtc2l6ZToxLjNyZW07XFxufSBcXG4uYWJvdXQ+ZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOjIuNXJlbTtcXG59XFxuLmFib3V0PmRpdj5idXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMTcxLCA1NCwgNTQpO1xcbiAgICBmb250LXNpemU6MS4zcmVtO1xcbiAgICBwYWRkaW5nOjAuNXJlbSAxcmVtO1xcbn1cXG4uYWJvdXQ+ZGl2PmJ1dHRvbiBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udCc7XFxuICAgIGNvbG9yOmJsYWNrO1xcbn1cXG4uYWJvdXQ+ZGl2PmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDpvcmFuZ2U7XFxufVxcbiNjb250ZW50Pi5tZW51LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDJmcjtcXG4gICAgZ2FwOjEuNXJlbTtcXG4gICAgcm93LWdhcDogMi41cmVtO1xcbn1cXG4jY29udGVudD5kaXY+ZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOjQwMHB4O1xcbn1cXG4jY29udGVudD5kaXY+ZGl2IGltZ3tcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIGhlaWdodDoxNTBweDtcXG4gICAgZGlzcGxheTppbmxpbmU7XFxuICAgIG1hcmdpbi1yaWdodDowLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuI2NvbnRlbnQ+ZGl2PmRpdj5kaXY+cCtwK3MrcCwjY29udGVudD5kaXY+ZGl2PmRpdj5wK3B7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbn1cXG4jY29udGVudD5kaXY+ZGl2PmRpdj5wK3Arc3tcXG4gICAgbWFyZ2luLXJpZ2h0OjAuN3JlbTtcXG59XFxuI2NvbnRlbnQ+ZGl2PmRpdj5kaXYgYnV0dG9ue1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZDpicm93bjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOjFyZW07XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQnO1xcbiAgICBwYWRkaW5nOjAuNXJlbSAwLjhyZW07XFxuICAgIG1hcmdpbjowLjVyZW0gMCAwIDVyZW07XFxufVxcbiNjb250ZW50PmRpdj5kaXY+ZGl2IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDpvcmFuZ2U7XFxufVxcbi5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGJyb3duO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgbGVmdDowO1xcbiAgICBib3R0b206MDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTowLjdyZW07XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOjAuNXJlbSAwO1xcbiAgICBtYXJnaW4tdG9wOjAuOHJlbTtcXG59XFxuQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XFxuICAgIGhlYWRlcj5uYXY+YnV0dG9ue1xcbiAgICAgICAgZm9udC1zaXplOjEuMnJlbVxcbiAgICB9XFxuICAgIC53ZWxjb21lLC5ob3VycywubG9jYXRpb257XFxuICAgICAgICB3aWR0aDozNTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MS41cmVtO1xcbiAgICB9XFxuICAgIC53ZWxjb21lPmgyLC5ob3Vycz5oMiwubG9jYXRpb24+aDIsLmFib3V0Pmgye1xcbiAgICAgICAgZm9udC1zaXplOjEuN3JlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MC44cmVtO1xcbiAgICB9XFxuICAgIC53ZWxjb21lPnAsLmhvdXJzPnAsLmxvY2F0aW9uPnB7XFxuICAgICAgICBmb250LXNpemU6MS4zcmVtO1xcbiAgICAgICAgcGFkZGluZzowIDAuNXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIH1cXG4gICAgLmFib3V0PnB7XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIH0gXFxuICAgICNjb250ZW50Pi5tZW51LWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XFxuICAgICAgICBnYXA6MS41cmVtO1xcbiAgICB9XFxuICAgICNjb250ZW50PmRpdj5kaXZ7XFxuICAgICAgICB3aWR0aDozMDBweDtcXG4gICAgfVxcbiAgICAjY29udGVudD5kaXY+ZGl2PmRpdiBwOmZpcnN0LWNoaWxke1xcbiAgICAgICAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xcbiAgICB9XFxuICAgICNjb250ZW50PmRpdj5kaXYgaW1ne1xcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjAuNXJlbTtcXG4gICAgfVxcbiAgICAjY29udGVudD5kaXY+ZGl2PmRpdiBidXR0b257XFxuICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYWJvdXRCdXR0b24sY2xlYXJDb250ZW50LG15Q29udGVudH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhYm91dFNldHVwKCl7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbXlDb250ZW50LnN0eWxlLmJhY2tncm91bmQ9XCIjRkZERTk1XCI7XG4gICAgYWJvdXRCdXR0b24uc3R5bGUuYm9yZGVyQm90dG9tQ29sb3I9XCIjRkZERTk1XCI7XG4gICAgYWJvdXRCdXR0b24uc3R5bGUuYm9yZGVyQm90dG9tU3R5bGU9XCJzb2xpZFwiO1xuXG4gICAgbGV0IG15Rm9vdGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIG15Rm9vdGVyLnN0eWxlLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCI7XG5cbiAgICBsZXQgYWJvdXRDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG5cbiAgICBsZXQgYWJvdXRJbnRybz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGFib3V0Q29udGVudDE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGFib3V0Q29udGVudDI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGFib3V0Q29udGVudDM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGFib3V0Q29udGVudDQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGNvbnRhY3RCdXR0b25Db250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY29udGFjdEJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBjb250YWN0TGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGFib3V0SW50cm8udGV4dENvbnRlbnQ9XCJUaGFua3MgRm9yIFZpc2l0aW5nIEEkRCBNb2Rlcm4gUmVzdGF1cmFudFwiO1xuICAgIGFib3V0Q29udGVudDEudGV4dENvbnRlbnQ9XCJPdXIgcmVzdGF1cmFudCB3YXMgZXN0YWJsaXNoZWQgaW4gMjAwMy4gV2UgaGF2ZSBiZWVuIGZ1bGwgZmlsaW5nIGN1c3RvbWVycyBuZWVkcyBmb3IgdGhlIHBhc3QgMjB5ZWFycyB3aXRoIG11bHRpcGxlIHJlZ2lvbmFsIGF3YXJkcyBmb3Igb3VyIHNlcnZpY2VzLiBBbHNvIHdlIGhhdmUgdHdvIGZyYW5jaGlzZXMgaW4gQWZyaWNhIGFzIHdlbGwgYXMgRXVyb3BlLCBtb3JlIG92ZXIgd2UgYXJlIHdvcmtpbmcgZGF5IGFuZCBuaWdodCB0byBleHBhbmQgZ2xvYmFsbHkgc28gdGhhdCB0aGUgZXZlcnkgb25lIHdvdWxkIGVuam95IG91ciBncmVhdCBwcm9kdWN0cy4gT3VyIGdyZWF0ZXN0IHNlY3JldCBmb3IgYWxsIHRoZSBzdWNjZXNzIGFsbCB0aGlzIHllYXJzIGlzIHRocm91Z2ggaGFyZCB3b3JrLCBwZXJzaXN0YW5jZSBhbmQgb3VyIGV4Y2VsbGVudCBlbXBsb3llZXMgd2hvIGFyZSB3b3JraW5nIHdpdGggdGhlaXIgZnVsbCBwb3RlbnRpYWwuXCJcbiAgICBhYm91dENvbnRlbnQyLnRleHRDb250ZW50PVwiWW91IGNhbiBjb250YWN0IHVzIHRocm91Z2ggdGhlIGZvbGxvd2luZyBlbWFpbCBhbmQgcGhvbmUgbnVtYmVyXCI7XG4gICAgYWJvdXRDb250ZW50My50ZXh0Q29udGVudD1cIkVtYWlsOiBBbWFudWVsTmFpemdoaTkzQGdtYWlsLmNvbSBNb2Rlcm5BJERAeWFob28uY29tXCI7XG4gICAgYWJvdXRDb250ZW50NC50ZXh0Q29udGVudD1cIlBob25lIG51bWJlcjogKzEtMzU0LTQ1ODctMjU4N1wiO1xuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50PVwiQ29udGFjdCBVc1wiO1xuXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRJbnRybyk7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50MSk7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50Mik7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50Myk7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50NCk7XG4gICAgY29udGFjdEJ1dHRvbi5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG4gICAgY29udGFjdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uQ29udGFpbmVyKTtcbiAgICBteUNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuLy9Vc2VkIGZvciBjcmVhdGluZyBhIGxpbmsgdGhhdCB3aWxsIGRpcmVjdCB5b3UgdG8gc2VuZCBhbiBlbWFpbCB0byB0aGUgc3BlY2lmaWVkIGFkZHJlc3NcbiAgICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCdtYWlsdG86QW1hbnVlbE5haXpnaGk5M0BnbWFpbC5jb20nKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWVCdXR0b24sbXlDb250ZW50LGNsZWFyQ29udGVudCB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZVNldHVwKCl7XG4gICAgY2xlYXJDb250ZW50KCk7Ly9Gb3IgY2xlYXJpbmcgdGhlIHByZXZpb3VzIGNvbnRlbnQsIHNvIHRoYXQgaG9tZSBwYWdlJ3MgY29udGVudCB3aWxsIGJlIGNyZWF0ZWRcbiAgICBteUNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZD1cIiNGRkRFOTVcIjtcbiAgICBob21lQnV0dG9uLnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yPVwiI0ZGREU5NVwiO1xuICAgIGhvbWVCdXR0b24uc3R5bGUuYm9yZGVyQm90dG9tU3R5bGU9XCJzb2xpZFwiO1xuXG4gICAgbGV0IG15Rm9vdGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIG15Rm9vdGVyLnN0eWxlLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCI7XG5cbiAgICBsZXQgd2VsY29tZUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBob3Vyc0NvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBsb2NhdGlvbkNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgd2VsY29tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2VsY29tZVwiKTtcbiAgICBob3Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gICAgbG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuXG4gICAgbGV0IHdlbGNvbWVJbnRybz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IHdlbGNvbWVDb250ZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBob3Vyc0ludHJvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBsZXQgaG91cnNDb250ZW50MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgaG91cnNDb250ZW50Mj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbG9jYXRpb25JbnRybz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IGxvY2F0aW9uQ29udGVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHdlbGNvbWVJbnRyby50ZXh0Q29udGVudD1cIldlbGNvbWUgVG8gQSREIE1vZGVybiBSZXN0YXVyYW50XCI7XG4gICAgd2VsY29tZUNvbnRlbnQudGV4dENvbnRlbnQ9XCJXZSBhcmUgaGVyZSBieSB0byBzZXJ2ZSBvdXIgY3VzdG9tZXJzIHdpdGggdGhlIGNpdHkncyBtb3N0IGRlbGljaW91cyBmYXN0IGZvb2RzLiBNYWtlIHN1cmUgeW91IGVuam95IGV2ZXJ5IGJpdGUuXCJcbiAgICBob3Vyc0ludHJvLnRleHRDb250ZW50PVwiV29ya2luZyBIb3Vyc1wiO1xuICAgIGhvdXJzQ29udGVudDEudGV4dENvbnRlbnQ9XCJNb25kYXkgVG8gRnJpZGF5ICAtLS0tLS0gODowMEFtIHRvIDEwOjAwUG0gXCI7XG4gICAgaG91cnNDb250ZW50Mi50ZXh0Q29udGVudD1cIlNhdHVyZGF5ICYgU3VuZGF5IC0tLS0tLSA4OjAwQW0gdG8gMjozMEFtIFwiO1xuICAgIGxvY2F0aW9uSW50cm8udGV4dENvbnRlbnQ9XCJPdXIgTG9jYXRpb25cIjtcbiAgICBsb2NhdGlvbkNvbnRlbnQudGV4dENvbnRlbnQ9XCJOb3J0aCBFYXN0IENhcm9saW5hLCBXZXN0IFNpZGUgSGlnaCBXYXksNDg2NyBQdXJwbGUgU3RyZWV0LCBCbG9jayAxMjVcIjtcbiAgICBcbiAgICB3ZWxjb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVJbnRybyk7XG4gICAgd2VsY29tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lQ29udGVudCk7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNJbnRybyk7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNDb250ZW50MSk7XG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNDb250ZW50Mik7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JbnRybyk7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250ZW50KTtcblxuICAgIG15Q29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lQ29udGFpbmVyKTtcbiAgICBteUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpO1xuICAgIG15Q29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG5cbn1cblxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aG9tZVNldHVwfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHthYm91dFNldHVwfSBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCB7bWVudVNldHVwfSBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zdCBteUNvbnRlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuLy9DcmVhdGluZyBhY3Rpb24gbGlzdGVuZXIgZm9yIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnNcbmxldCBob21lQnV0dG9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5ob21lU2V0dXAoKSk7XG5cbmxldCBhYm91dEJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5hYm91dFNldHVwKCkpO1xuXG5sZXQgbWVudUJ1dHRvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+bWVudVNldHVwKCkpO1xuLy9UaGlzIGZ1bmN0aW9uIGlzIHVzZWQgZm9yIGNsZWFyaW5nIHRoZSBwYWdlIGFmdGVyIGFub3RoZXIgYnV0dG9uIGluIHRoZSBuYXZpZ2F0aW9uIGlzIGNsaWNrZWRcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MPVwiXCI7XG4gICAgbXlDb250ZW50LnN0eWxlLm9wYWNpdHk9XCIwLjdcIjtcbiAgICBob21lQnV0dG9uLnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yPVwibm9uZVwiO1xuICAgIGhvbWVCdXR0b24uc3R5bGUuYm9yZGVyQm90dG9tU3R5bGU9XCJub25lXCI7XG4gICAgYWJvdXRCdXR0b24uc3R5bGUuYm9yZGVyQm90dG9tQ29sb3I9XCJub25lXCI7XG4gICAgYWJvdXRCdXR0b24uc3R5bGUuYm9yZGVyQm90dG9tU3R5bGU9XCJub25lXCI7XG4gICAgbWVudUJ1dHRvbi5zdHlsZS5ib3JkZXJCb3R0b21Db2xvcj1cIm5vbmVcIjtcbiAgICBtZW51QnV0dG9uLnN0eWxlLmJvcmRlckJvdHRvbVN0eWxlPVwibm9uZVwiO1xufVxuLy9Vc2VkIHdoZW4gdGhlIHBhZ2UgaXMgaW5pdGlhbGl6aW5nIHNvIHRoYXQgdGhlIHBhZ2Ugd2lsbCBzdGFydCBsb2FkaW5nIHdpdGggdGhlIGhvbWUgcGFnZVxubGV0IGluaXRpYWw9MDtcbmlmKGluaXRpYWw9PT0wKXtcbiAgICBob21lU2V0dXAoKTtcbiAgICBpbml0aWFsKz0xO1xufVxuXG5leHBvcnQge2hvbWVCdXR0b24sYWJvdXRCdXR0b24sbWVudUJ1dHRvbixjbGVhckNvbnRlbnQsbXlDb250ZW50fTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG1lbnVCdXR0b24sY2xlYXJDb250ZW50LG15Q29udGVudH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgYnVyZ2VyIGZyb20gJy4vYnVyZ2VyLmpwZyc7XG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuL2NoaWNrZW4uanBnJztcbmltcG9ydCBsYXNhZ25hIGZyb20gJy4vcGFzdGEuanBnJztcbmltcG9ydCBwYXN0YSBmcm9tICcuL21hY2Fyb29uLmpwZyc7XG5pbXBvcnQgc2FsYWQgZnJvbSAnLi9zYWxhZC5qcGcnO1xuaW1wb3J0IHNvZGEgZnJvbSAnLi9zb2RhLmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51U2V0dXAoKXtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBteUNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZD1cIiNGRkRFOTVcIjtcbiAgICBteUNvbnRlbnQuc3R5bGUub3BhY2l0eT1cIjAuOVwiO1xuICAgIG1lbnVCdXR0b24uc3R5bGUuYm9yZGVyQm90dG9tQ29sb3I9XCIjRkZERTk1XCI7XG4gICAgbWVudUJ1dHRvbi5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZT1cInNvbGlkXCI7XG5cbiAgICBsZXQgbXlGb290ZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XG4gICAgbXlGb290ZXIuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiO1xuXG4gICAgbGV0IG1lbnVDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgICBsZXQgYnVyZ2VyQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGNoaWNrZW5Db250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbGFzYWduYUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwYXN0YUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBzYWxhZENvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBzb2RhQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgYnVyZ2VySW1hZ2VDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY2hpY2tlbkltYWdlQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGxhc2FnbmFJbWFnZUNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwYXN0YUltYWdlQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHNhbGFkSW1hZ2VDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgc29kYUltYWdlQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBteUJ1cmdlcj1uZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBteUNoaWNrZW49bmV3IEltYWdlKCk7XG4gICAgY29uc3QgbXlMYXNhZ25hPW5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IG15UGFzdGE9bmV3IEltYWdlKCk7XG4gICAgY29uc3QgbXlTYWxhZD1uZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBteVNvZGE9bmV3IEltYWdlKCk7XG4gICAgbXlCdXJnZXIuc3JjPWJ1cmdlcjtcbiAgICBteUNoaWNrZW4uc3JjPWNoaWNrZW47XG4gICAgbXlMYXNhZ25hLnNyYz1sYXNhZ25hO1xuICAgIG15UGFzdGEuc3JjPXBhc3RhO1xuICAgIG15U2FsYWQuc3JjPXNhbGFkO1xuICAgIG15U29kYS5zcmM9c29kYTtcbiAgICBidXJnZXJJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChteUJ1cmdlcik7XG4gICAgY2hpY2tlbkltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG15Q2hpY2tlbik7XG4gICAgbGFzYWduYUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG15TGFzYWduYSk7XG4gICAgcGFzdGFJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChteVBhc3RhKTtcbiAgICBzYWxhZEltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG15U2FsYWQpO1xuICAgIHNvZGFJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChteVNvZGEpO1xuICAgIGJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJJbWFnZUNvbnRhaW5lcik7XG4gICAgY2hpY2tlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuSW1hZ2VDb250YWluZXIpO1xuICAgIGxhc2FnbmFDb250YWluZXIuYXBwZW5kQ2hpbGQobGFzYWduYUltYWdlQ29udGFpbmVyKTtcbiAgICBwYXN0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXN0YUltYWdlQ29udGFpbmVyKTtcbiAgICBzYWxhZENvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxhZEltYWdlQ29udGFpbmVyKTtcbiAgICBzb2RhQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvZGFJbWFnZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgYnVyZ2VyRGV0YWlsQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGNoaWNrZW5EZXRhaWxDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgbGFzYWduYURldGFpbENvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBwYXN0YURldGFpbENvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBzYWxhZERldGFpbENvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBzb2RhRGV0YWlsQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgYnVyZ2VySW50cm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBjaGlja2VuSW50cm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBsYXNhZ25hSW50cm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBwYXN0YUludHJvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBsZXQgc2FsYWRJbnRybz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbGV0IHNvZGFJbnRybz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgICBsZXQgYnVyZ2VySW5mbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgY2hpY2tlbkluZm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGxhc2FnbmFJbmZvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBwYXN0YUluZm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHNhbGFkSW5mbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgc29kYUluZm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBsZXQgYnVyZ2VyUHJpY2VUZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBjaGlja2VuUHJpY2VUZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBsYXNhZ25hUHJpY2VUZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBwYXN0YVByaWNlVGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgc2FsYWRQcmljZVRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IHNvZGFQcmljZVRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBsZXQgYnVyZ2VyT2xkUHJpY2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNcIik7ICAgXG4gICAgbGV0IGNoaWNrZW5PbGRQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgIFxuICAgIGxldCBsYXNhZ25hT2xkUHJpY2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7ICBcbiAgICBsZXQgcGFzdGFPbGRQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic1wiKTsgXG4gICAgbGV0IHNhbGFkT2xkUHJpY2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuICAgIGxldCBzb2RhT2xkUHJpY2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNcIik7ICAgIFxuXG4gICAgbGV0IGJ1cmdlck5ld1ByaWNlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcbiAgICBsZXQgcGFzdGFOZXdQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG4gICAgbGV0IHNvZGFOZXdQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgIFxuXG4gICAgYnVyZ2VySW50cm8udGV4dENvbnRlbnQ9XCJCdXJnZXJcIjtcbiAgICBjaGlja2VuSW50cm8udGV4dENvbnRlbnQ9XCJDaGlja2VuXCI7XG4gICAgbGFzYWduYUludHJvLnRleHRDb250ZW50PVwiTGFzYWduYVwiO1xuICAgIHBhc3RhSW50cm8udGV4dENvbnRlbnQ9XCJQYXN0YVwiO1xuICAgIHNhbGFkSW50cm8udGV4dENvbnRlbnQ9XCJTYWxhZFwiO1xuICAgIHNvZGFJbnRyby50ZXh0Q29udGVudD1cIlNvZGFcIjtcblxuICAgIGJ1cmdlckluZm8udGV4dENvbnRlbnQ9XCJPdXIgcGxhY2Ugc3BlY2lhbCB0YWJsZSBzZXJ2ZWQgd2l0aCBoaWdoIHF1YWxpdHkgZG91YmxlIG1lYXQgYnVyZ2VyIGFuZCBjaGVlc2VcIjtcbiAgICBjaGlja2VuSW5mby50ZXh0Q29udGVudD1cIkZyaWVkIGNoaWNrZW4gd2l0aCBhIHF1YWxpdHkgdGFzdGUsIGFuZCBjaGlwcywgYW5kIGNoYXBhdGkgc2VydmVkIGFsb25nIHNpZGUgaXRcIjtcbiAgICBsYXNhZ25hSW5mby50ZXh0Q29udGVudD1cIkRlbGljaW91cyBhbmQgc3BpY3kgd2VsbCB0b2FzdGVkIGxhc2FnbmEgd2l0aCBmcmllZCBtZWF0IGJhbGxzIGFuZCBzYXVjZSBpbnNpZGVcIjtcbiAgICBwYXN0YUluZm8udGV4dENvbnRlbnQ9XCJUaGUgbGVnZW5kYXJ5IEl0YWxpYW4gcGFzdGEgbWFjYXJvbmkgd2l0aCBzcGljeSBzYXVjZSwgZ3JpbmRlZCBtZWF0ICYgY2hlZXNlIGRyb3BzXCJcbiAgICBzYWxhZEluZm8udGV4dENvbnRlbnQ9XCJXaXRoIGZyZXNoIHZlZ2V0YWJsZXMgbGlrZSBjYWJiYWdlLHBvdGF0bywgZ2FybGljLCBtdXNocm9vbSAmIHNtYWxsIGFtb3VudCBvZiBtZWF0XCJcbiAgICBzb2RhSW5mby50ZXh0Q29udGVudD1cIldlIHNlcnZlIGFsbCBraW5kIG9mIHNvZnQgZHJpbmtzLCBtaW5lcmFsIHdhdGVyICYgZGlmZmVyZW50IGVuZXJneSBkcmlua3NcIjtcblxuICAgIGJ1cmdlclByaWNlVGV4dC50ZXh0Q29udGVudD1cIlByaWNlOiBcIjtcbiAgICBjaGlja2VuUHJpY2VUZXh0LnRleHRDb250ZW50PVwiUHJpY2U6IFwiO1xuICAgIGxhc2FnbmFQcmljZVRleHQudGV4dENvbnRlbnQ9XCJQcmljZTogXCI7XG4gICAgcGFzdGFQcmljZVRleHQudGV4dENvbnRlbnQ9XCJQcmljZTogXCI7XG4gICAgc2FsYWRQcmljZVRleHQudGV4dENvbnRlbnQ9XCJQcmljZTogXCI7XG4gICAgc29kYVByaWNlVGV4dC50ZXh0Q29udGVudD1cIlByaWNlOiBcIjtcblxuICAgIGJ1cmdlck9sZFByaWNlLnRleHRDb250ZW50PVwiJDcuOTlcIjtcbiAgICBjaGlja2VuT2xkUHJpY2UudGV4dENvbnRlbnQ9XCIkOS4wMFwiO1xuICAgIGxhc2FnbmFPbGRQcmljZS50ZXh0Q29udGVudD1cIiQ1LjAwXCI7XG4gICAgcGFzdGFPbGRQcmljZS50ZXh0Q29udGVudD1cIiQ1Ljk5XCI7XG4gICAgc2FsYWRPbGRQcmljZS50ZXh0Q29udGVudD1cIiQzLjAwXCJcbiAgICBzb2RhT2xkUHJpY2UudGV4dENvbnRlbnQ9XCIkMy41MFwiO1xuICAgIGJ1cmdlck5ld1ByaWNlLnRleHRDb250ZW50PVwiJDYuMDBcIjtcbiAgICBwYXN0YU5ld1ByaWNlLnRleHRDb250ZW50PVwiJDQuMDBcIjtcbiAgICBzb2RhTmV3UHJpY2UudGV4dENvbnRlbnQ9XCIkMi4wMFwiO1xuXG4gICAgbGV0IGJ1cmdlck9yZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IGNoaWNrZW5PcmRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBsYXNhZ25hT3JkZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgcGFzdGFPcmRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBzYWxhZE9yZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHNvZGFPcmRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgYnVyZ2VyT3JkZXIudGV4dENvbnRlbnQ9XCJPcmRlclwiO1xuICAgIGNoaWNrZW5PcmRlci50ZXh0Q29udGVudD1cIk9yZGVyXCI7XG4gICAgbGFzYWduYU9yZGVyLnRleHRDb250ZW50PVwiT3JkZXJcIjtcbiAgICBwYXN0YU9yZGVyLnRleHRDb250ZW50PVwiT3JkZXJcIjtcbiAgICBzYWxhZE9yZGVyLnRleHRDb250ZW50PVwiT3JkZXJcIjtcbiAgICBzb2RhT3JkZXIudGV4dENvbnRlbnQ9XCJPcmRlclwiO1xuXG4gICAgYnVyZ2VyRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlckludHJvKTtcbiAgICBidXJnZXJEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VySW5mbyk7XG4gICAgYnVyZ2VyRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlclByaWNlVGV4dCk7XG4gICAgYnVyZ2VyRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1cmdlck9sZFByaWNlKTtcbiAgICBidXJnZXJEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyTmV3UHJpY2UpO1xuICAgIGJ1cmdlckRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChidXJnZXJPcmRlcik7XG4gICAgY2hpY2tlbkRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuSW50cm8pO1xuICAgIGNoaWNrZW5EZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlbkluZm8pO1xuICAgIGNoaWNrZW5EZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlblByaWNlVGV4dCk7XG4gICAgY2hpY2tlbkRldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlja2VuT2xkUHJpY2UpO1xuICAgIGNoaWNrZW5EZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpY2tlbk9yZGVyKTtcbiAgICBsYXNhZ25hRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhc2FnbmFJbnRybyk7XG4gICAgbGFzYWduYURldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYXNhZ25hSW5mbyk7XG4gICAgbGFzYWduYURldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYXNhZ25hUHJpY2VUZXh0KTtcbiAgICBsYXNhZ25hRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhc2FnbmFPbGRQcmljZSk7XG4gICAgbGFzYWduYURldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYXNhZ25hT3JkZXIpO1xuICAgIHBhc3RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhSW50cm8pO1xuICAgIHBhc3RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhSW5mbyk7XG4gICAgcGFzdGFEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQocGFzdGFQcmljZVRleHQpO1xuICAgIHBhc3RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhT2xkUHJpY2UpO1xuICAgIHBhc3RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhTmV3UHJpY2UpO1xuICAgIHBhc3RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhc3RhT3JkZXIpO1xuICAgIHNhbGFkRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkSW50cm8pO1xuICAgIHNhbGFkRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkSW5mbyk7XG4gICAgc2FsYWREZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc2FsYWRQcmljZVRleHQpO1xuICAgIHNhbGFkRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkT2xkUHJpY2UpO1xuICAgIHNhbGFkRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkT3JkZXIpO1xuICAgIHNvZGFEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc29kYUludHJvKTtcbiAgICBzb2RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvZGFJbmZvKTtcbiAgICBzb2RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvZGFQcmljZVRleHQpO1xuICAgIHNvZGFEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc29kYU9sZFByaWNlKTtcbiAgICBzb2RhRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvZGFOZXdQcmljZSk7XG4gICAgc29kYURldGFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChzb2RhTmV3UHJpY2UpO1xuICAgIHNvZGFEZXRhaWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc29kYU9yZGVyKTtcbiAgICBidXJnZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyRGV0YWlsQ29udGFpbmVyKTtcbiAgICBjaGlja2VuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5EZXRhaWxDb250YWluZXIpO1xuICAgIGxhc2FnbmFDb250YWluZXIuYXBwZW5kQ2hpbGQobGFzYWduYURldGFpbENvbnRhaW5lcik7XG4gICAgcGFzdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocGFzdGFEZXRhaWxDb250YWluZXIpO1xuICAgIHNhbGFkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkRGV0YWlsQ29udGFpbmVyKTtcbiAgICBzb2RhQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvZGFEZXRhaWxDb250YWluZXIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyQ29udGFpbmVyKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW5Db250YWluZXIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobGFzYWduYUNvbnRhaW5lcik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXN0YUNvbnRhaW5lcik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxhZENvbnRhaW5lcik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzb2RhQ29udGFpbmVyKTtcbiAgICBteUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9