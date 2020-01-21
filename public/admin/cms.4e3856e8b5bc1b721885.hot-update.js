webpackHotUpdate("cms",{

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/gatsby-plugin-intl/index.js":
/*!**************************************************!*\
  !*** ./node_modules/gatsby-plugin-intl/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");__webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");(function(){var enterModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.enterModule:undefined;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");exports.__esModule=true;var _exportNames={Link:true,withIntl:true,navigate:true,changeLocale:true,IntlContextProvider:true,IntlContextConsumer:true};exports.IntlContextConsumer=exports.IntlContextProvider=exports.changeLocale=exports.navigate=exports.withIntl=exports.Link=void 0;var _reactIntl=__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");Object.keys(_reactIntl).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;exports[key]=_reactIntl[key];});var _link=_interopRequireWildcard(__webpack_require__(/*! ./link */ "./node_modules/gatsby-plugin-intl/link.js"));exports.Link=_link["default"];exports.navigate=_link.navigate;exports.changeLocale=_link.changeLocale;var _withIntl=_interopRequireDefault(__webpack_require__(/*! ./with-intl */ "./node_modules/gatsby-plugin-intl/with-intl.js"));exports.withIntl=_withIntl["default"];var _intlContext=__webpack_require__(/*! ./intl-context */ "./node_modules/gatsby-plugin-intl/intl-context.js");exports.IntlContextProvider=_intlContext.IntlContextProvider;exports.IntlContextConsumer=_intlContext.IntlContextConsumer;;(function(){var reactHotLoader=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default:undefined;if(!reactHotLoader){return;}reactHotLoader.register(_exportNames,"_exportNames","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/index.js");reactHotLoader.register(_link,"_link","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/index.js");reactHotLoader.register(_withIntl,"_withIntl","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/index.js");})();;(function(){var leaveModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.leaveModule:undefined;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/gatsby-plugin-intl/link.js":
/*!*************************************************!*\
  !*** ./node_modules/gatsby-plugin-intl/link.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {__webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");(function(){var enterModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.enterModule:undefined;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.changeLocale=exports.navigate=exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _intlContext=__webpack_require__(/*! ./intl-context */ "./node_modules/gatsby-plugin-intl/intl-context.js");var Link=function Link(_ref){var to=_ref.to,language=_ref.language,children=_ref.children,onClick=_ref.onClick,rest=(0,_objectWithoutPropertiesLoose2["default"])(_ref,["to","language","children","onClick"]);return _react["default"].createElement(_intlContext.IntlContextConsumer,null,function(intl){var languageLink=language||intl.language;var link=intl.routed||language?"/"+languageLink+to:""+to;var handleClick=function handleClick(e){if(language){localStorage.setItem("gatsby-intl-language",language);}if(onClick){onClick(e);}};return _react["default"].createElement(_gatsby.Link,(0,_extends2["default"])({},rest,{to:link,onClick:handleClick}),children);});};Link.propTypes={children:_propTypes["default"].node.isRequired,to:_propTypes["default"].string,language:_propTypes["default"].string};Link.defaultProps={to:""};var _default=Link;exports["default"]=_default;var navigate=function navigate(to,options){if(typeof window==="undefined"){return;}var _window$___gatsbyIntl=window.___gatsbyIntl,language=_window$___gatsbyIntl.language,routed=_window$___gatsbyIntl.routed;var link=routed?"/"+language+to:""+to;(0,_gatsby.navigate)(link,options);};exports.navigate=navigate;var changeLocale=function changeLocale(language,to){if(typeof window==="undefined"){return;}var routed=window.___gatsbyIntl.routed;var removePrefix=function removePrefix(pathname){var base= true?"":undefined;if(base&&pathname.indexOf(base)===0){pathname=pathname.slice(base.length);}return pathname;};var removeLocalePart=function removeLocalePart(pathname){if(!routed){return pathname;}var i=pathname.indexOf("/",1);return pathname.substring(i);};var pathname=to||removeLocalePart(removePrefix(window.location.pathname));// TODO: check slash
var link="/"+language+pathname+window.location.search;localStorage.setItem("gatsby-intl-language",language);(0,_gatsby.navigate)(link);};exports.changeLocale=changeLocale;;(function(){var reactHotLoader=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default:undefined;if(!reactHotLoader){return;}reactHotLoader.register(_extends2,"_extends2","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");reactHotLoader.register(_objectWithoutPropertiesLoose2,"_objectWithoutPropertiesLoose2","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");reactHotLoader.register(_react,"_react","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");reactHotLoader.register(_propTypes,"_propTypes","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");reactHotLoader.register(Link,"Link","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");reactHotLoader.register(_default,"_default","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");reactHotLoader.register(navigate,"navigate","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");reactHotLoader.register(changeLocale,"changeLocale","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/link.js");})();;(function(){var leaveModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.leaveModule:undefined;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/gatsby-plugin-intl/with-intl.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-plugin-intl/with-intl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function(){var enterModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.enterModule:undefined;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var _reactIntl=__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");var _default=function _default(Component){return function(props){console.warn("withIntl is deprecated. Please use injectIntl instead.");return _react["default"].createElement((0,_reactIntl.injectIntl)(Component),props);};};exports["default"]=_default;;(function(){var reactHotLoader=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default:undefined;if(!reactHotLoader){return;}reactHotLoader.register(_react,"_react","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/with-intl.js");reactHotLoader.register(_default,"_default","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/node_modules/gatsby-plugin-intl/with-intl.js");})();;(function(){var leaveModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.leaveModule:undefined;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all.sass */ "./src/components/all.sass");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_all_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SiteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteMetadata */ "./src/components/SiteMetadata.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gatsby-plugin-intl */ "./node_modules/gatsby-plugin-intl/index.js");
/* harmony import */ var gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName="/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Layout.js";(function(){var enterModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.enterModule:undefined;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};//
var TemplateWrapper=function TemplateWrapper(_ref){var children=_ref.children;var intl=Object(gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_7__["useIntl"])();//const { title, description } = useSiteMetadata()
return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:17},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"],{__source:{fileName:_jsxFileName,lineNumber:18},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",{__source:{fileName:_jsxFileName,lineNumber:20},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",{__source:{fileName:_jsxFileName,lineNumber:21},__self:this},intl.formatMessage({id:"title"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:intl.formatMessage({id:"description"}),__source:{fileName:_jsxFileName,lineNumber:22},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/')+"img/apple-touch-icon.png",__source:{fileName:_jsxFileName,lineNumber:24},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"icon",type:"image/png",href:Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/')+"img/favicon-32x32.png",sizes:"32x32",__source:{fileName:_jsxFileName,lineNumber:29},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"icon",type:"image/png",href:Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/')+"img/favicon-16x16.png",sizes:"16x16",__source:{fileName:_jsxFileName,lineNumber:35},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"mask-icon",href:Object(gatsby__WEBPACK_IMPORTED_MODULE_6__["withPrefix"])('/')+"img/safari-pinned-tab.svg",color:"#ff4400",__source:{fileName:_jsxFileName,lineNumber:42},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"theme-color",content:"#fff",__source:{fileName:_jsxFileName,lineNumber:47},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:type",content:"business.business",__source:{fileName:_jsxFileName,lineNumber:49},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:intl.formatMessage({id:"title"}),__source:{fileName:_jsxFileName,lineNumber:50},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:url",content:"https://www.ss-guesthouse.com/",__source:{fileName:_jsxFileName,lineNumber:51},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:image",content:"https://www.ss-guesthouse.com/img/og-image001.png",__source:{fileName:_jsxFileName,lineNumber:52},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"google-site-verification",content:"AtBXV62-NYJ_gWHW-q9hBGDC0iYSt3vkvl2r8lfcTac",__source:{fileName:_jsxFileName,lineNumber:56},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:58},__self:this})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"],{__source:{fileName:_jsxFileName,lineNumber:61},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:62},__self:this},children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"],{__source:{fileName:_jsxFileName,lineNumber:63},__self:this}));};__signature__(TemplateWrapper,"useIntl{intl}",function(){return[gatsby_plugin_intl__WEBPACK_IMPORTED_MODULE_7__["useIntl"]];});var _default=TemplateWrapper;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default:undefined;if(!reactHotLoader){return;}reactHotLoader.register(TemplateWrapper,"TemplateWrapper","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Layout.js");reactHotLoader.register(_default,"default","/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/components/Layout.js");})();;(function(){var leaveModule=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.leaveModule:undefined;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.4e3856e8b5bc1b721885.hot-update.js.map