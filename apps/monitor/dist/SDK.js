/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var SDK;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/Error/JsError/index.ts":
/*!*****************************************!*\
  !*** ./src/core/Error/JsError/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar utils_1 = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\r\nvar JSError = /** @class */ (function () {\r\n    function JSError(parent) {\r\n        // console.log(parent);\r\n        this.parent = parent;\r\n        this.collection = [];\r\n        this.parent = parent;\r\n        this.init();\r\n    }\r\n    JSError.prototype.init = function () {\r\n        var _this = this;\r\n        window.addEventListener(\"error\", function (event) {\r\n            if (event instanceof ErrorEvent) {\r\n                // console.log(event);\r\n                // console.log(this.parent.endEvent);\r\n                var message = event.message, filename = event.filename, timeStamp = event.timeStamp, error = event.error;\r\n                _this.collection.push({\r\n                    type: \"JSError\",\r\n                    message: message,\r\n                    filename: filename,\r\n                    timeStamp: (0, utils_1.transformTime)(),\r\n                    stack: error.stack ? (0, utils_1.transformStack)(error.stack) : error,\r\n                    selector: (0, utils_1.getSelector)(_this.parent.endEvent.path),\r\n                });\r\n            }\r\n        });\r\n    };\r\n    return JSError;\r\n}());\r\nexports[\"default\"] = JSError;\r\n\n\n//# sourceURL=webpack://SDK/./src/core/Error/JsError/index.ts?");

/***/ }),

/***/ "./src/core/Error/PromiseError/index.ts":
/*!**********************************************!*\
  !*** ./src/core/Error/PromiseError/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar utils_1 = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\r\nvar PromiseError = /** @class */ (function () {\r\n    function PromiseError(parent) {\r\n        this.parent = parent;\r\n        this.collection = [];\r\n        this.parent = parent;\r\n        this.init();\r\n    }\r\n    PromiseError.prototype.init = function () {\r\n        var _this = this;\r\n        window.addEventListener(\"unhandledrejection\", function (event) {\r\n            if (event instanceof PromiseRejectionEvent) {\r\n                console.log(event);\r\n                var paths = _this.parent.endEvent.path;\r\n                //   console.log(this.parent.endEvent);\r\n                //   console.log(paths.length);\r\n                var reason = event.reason;\r\n                _this.collection.push({\r\n                    type: \"PromiseError\",\r\n                    message: reason && typeof reason === \"object\" ? reason.message : reason,\r\n                    filename: \"\",\r\n                    stack: (reason === null || reason === void 0 ? void 0 : reason.stack) ? reason.stack : \"\",\r\n                    timeStamp: (0, utils_1.transformTime)(),\r\n                    selector: (0, utils_1.getSelector)(paths),\r\n                });\r\n            }\r\n        }, true);\r\n    };\r\n    return PromiseError;\r\n}());\r\nexports[\"default\"] = PromiseError;\r\n\n\n//# sourceURL=webpack://SDK/./src/core/Error/PromiseError/index.ts?");

/***/ }),

/***/ "./src/core/Error/ResourceError/index.ts":
/*!***********************************************!*\
  !*** ./src/core/Error/ResourceError/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar utils_1 = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\r\nvar REsourceError = /** @class */ (function () {\r\n    function REsourceError(parent) {\r\n        this.parent = parent;\r\n        this.collection = [];\r\n        // this.parent = parent\r\n        this.init();\r\n    }\r\n    REsourceError.prototype.init = function () {\r\n        var _this = this;\r\n        window.addEventListener(\"error\", function (event) {\r\n            if (event instanceof ErrorEvent)\r\n                return;\r\n            console.log(event);\r\n            var target = event[\"target\"];\r\n            console.dir(target);\r\n            var timeStamp = event.timeStamp;\r\n            var src = target.src, href = target.href, link = target.link;\r\n            var paths = _this.parent.endEvent.path;\r\n            console.log(src);\r\n            console.log(link);\r\n            var message = \"can not find resource \".concat(src);\r\n            _this.collection.push({\r\n                type: \"ResourceType\",\r\n                message: message,\r\n                tagName: target[\"localName\"],\r\n                timeStamp: (0, utils_1.transformTime)(),\r\n                selector: (0, utils_1.getSelector)(paths),\r\n                filename: src || href || link,\r\n            });\r\n            // console.log(event.message);\r\n        }, true);\r\n    };\r\n    return REsourceError;\r\n}());\r\nexports[\"default\"] = REsourceError;\r\n\n\n//# sourceURL=webpack://SDK/./src/core/Error/ResourceError/index.ts?");

/***/ }),

/***/ "./src/core/Error/index.ts":
/*!*********************************!*\
  !*** ./src/core/Error/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ErrorMonitor = void 0;\r\nvar JsError_1 = __importDefault(__webpack_require__(/*! ./JsError */ \"./src/core/Error/JsError/index.ts\"));\r\nvar PromiseError_1 = __importDefault(__webpack_require__(/*! ./PromiseError */ \"./src/core/Error/PromiseError/index.ts\"));\r\nvar ResourceError_1 = __importDefault(__webpack_require__(/*! ./ResourceError */ \"./src/core/Error/ResourceError/index.ts\"));\r\nvar ErrorMonitor = /** @class */ (function () {\r\n    function ErrorMonitor() {\r\n        this.endEvent = null;\r\n        this.getEndEvent();\r\n        this.JsError = new JsError_1.default(this);\r\n        this.PromiseError = new PromiseError_1.default(this);\r\n        this.ResourceError = new ResourceError_1.default(this);\r\n    }\r\n    ErrorMonitor.prototype.getEndEvent = function () {\r\n        var _this = this;\r\n        var eventArr = [\"click\", \"touchstart\", \"mousedown\", \"keydown\", \"input\"];\r\n        eventArr.forEach(function (eventType) {\r\n            document.addEventListener(eventType, function (event) {\r\n                _this.endEvent = event;\r\n            });\r\n        });\r\n    };\r\n    ErrorMonitor.prototype.test = function () {\r\n        console.log(this.JsError);\r\n        console.log(this.PromiseError);\r\n        console.log(this.ResourceError);\r\n    };\r\n    return ErrorMonitor;\r\n}());\r\nexports.ErrorMonitor = ErrorMonitor;\r\n\n\n//# sourceURL=webpack://SDK/./src/core/Error/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// import { JSError } from \"@error/JsError\";\r\n// import { PromiseError } from \"@error/PromiseError\";\r\n// import ZYError from \"@error/ResourceError\";\r\nvar index_1 = __webpack_require__(/*! @error/index */ \"./src/core/Error/index.ts\");\r\nvar SDK = /** @class */ (function () {\r\n    function SDK() {\r\n        this.Error = new index_1.ErrorMonitor();\r\n    }\r\n    SDK.prototype.test = function () {\r\n        this.Error.test();\r\n    };\r\n    return SDK;\r\n}());\r\nexports[\"default\"] = SDK;\r\n\n\n//# sourceURL=webpack://SDK/./src/index.ts?");

/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __importDefault(__webpack_require__(/*! ./index */ \"./src/index.ts\"));\r\nvar sdk = new index_1.default();\r\n// const body = document.querySelector(\"body\");\r\n// const jsBtn = document.querySelector(\".js-error\");\r\n// const zyBtn = document.querySelector(\".zy-error\");\r\nvar test = document.querySelector(\".test\");\r\ntest === null || test === void 0 ? void 0 : test.addEventListener(\"click\", function () {\r\n    sdk.test();\r\n});\r\n\n\n//# sourceURL=webpack://SDK/./src/test.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n/**\r\n *\r\n * @param timeStamp  时间戳\r\n * 格式化时间\r\n * @returns\r\n */\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getSelector = exports.transformStack = exports.transformTime = void 0;\r\nfunction transformTime(timeStamp) {\r\n    var date = timeStamp ? new Date(timeStamp) : new Date();\r\n    var Y = date.getFullYear() + \"-\";\r\n    var M = (date.getMonth() + 1 < 10\r\n        ? \"0\" + (date.getMonth() + 1)\r\n        : date.getMonth() + 1) + \"-\";\r\n    var D = date.getDate() + \" \";\r\n    var h = date.getHours() + \":\";\r\n    var m = date.getMinutes() + \":\";\r\n    var s = date.getSeconds();\r\n    //   console.log(Y + M + D + h + m + s);\r\n    return Y + M + D + h + m + s;\r\n}\r\nexports.transformTime = transformTime;\r\nfunction transformStack(stack) {\r\n    return stack;\r\n}\r\nexports.transformStack = transformStack;\r\nfunction getSelector(paths) {\r\n    //   console.log(paths);\r\n    if (!paths || paths.length <= 0)\r\n        return \"\";\r\n    var path = paths[0];\r\n    //   console.dir(path);\r\n    var localName = path.localName, id = path.id, className = path.className, innerHTML = path.innerHTML;\r\n    return \"element:\".concat(localName, \"--id:\").concat(id, \"--classname:\").concat(className, \"--innerText:\").concat(innerHTML);\r\n}\r\nexports.getSelector = getSelector;\r\n\n\n//# sourceURL=webpack://SDK/./src/utils/index.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/test.ts");
/******/ 	SDK = __webpack_exports__;
/******/ 	
/******/ })()
;