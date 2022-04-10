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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.tokenContext = react_1.default.createContext("");


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestError = exports.meRequestSuccess = exports.meRequest = exports.ME_REQUEST_ERROR = exports.ME_REQUEST_SUCCESS = exports.ME_REQUEST = void 0;
exports.ME_REQUEST = "ME_REQUEST";
exports.ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS";
exports.ME_REQUEST_ERROR = "ME_REQUEST_ERROR";
var meRequest = function () { return ({
    type: exports.ME_REQUEST,
}); };
exports.meRequest = meRequest;
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.meRequestSuccess = meRequestSuccess;
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error,
}); };
exports.meRequestError = meRequestError;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MenuIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "5", height: "20", viewBox: "0 0 5 20", fill: "none" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(37);
exports.userContext = react_1.default.createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var data = useUserData_1.useUserData()[0];
    return react_1.default.createElement(exports.userContext.Provider, { value: data }, children);
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(11));
var server_1 = __importDefault(__webpack_require__(12));
var App_1 = __webpack_require__(13);
var indexTemplate_1 = __webpack_require__(106);
var axios_1 = __importDefault(__webpack_require__(1));
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use("/static", express_1.default.static("./dist/client"));
app.get("/auth", function (req, res) {
    axios_1.default
        .post("https://www.reddit.com/api/v1/access_token", "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: {
            username: 'undefined',
            password: "nIHJjIdoJKauRQD0ylPlk41lI5TuvQ",
        },
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data["access_token"]));
    })
        .catch(console.log);
});
app.get("*", function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(PORT, function () {
    console.log("server started on port http://localhost:" + PORT);
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.AppCopmonent = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(14);
var root_1 = __webpack_require__(16);
var Layout_1 = __webpack_require__(17);
var Header_1 = __webpack_require__(20);
var Content_1 = __webpack_require__(44);
var CardsList_1 = __webpack_require__(47);
var useToken_1 = __webpack_require__(91);
var tokenContext_1 = __webpack_require__(2);
var userContext_1 = __webpack_require__(8);
var redux_1 = __webpack_require__(92);
var react_redux_1 = __webpack_require__(3);
var redux_devtools_extension_1 = __webpack_require__(93);
var redux_thunk_1 = __importDefault(__webpack_require__(94));
var store_1 = __webpack_require__(95);
var react_router_dom_1 = __webpack_require__(9);
var Post_1 = __webpack_require__(97);
var store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
function AppCopmonent() {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    var token = useToken_1.useToken()[0];
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },
            react_1.default.createElement(userContext_1.UserContextProvider, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(Layout_1.Layout, null,
                    react_1.default.createElement(Header_1.Header, null),
                    react_1.default.createElement(Content_1.Content, null,
                        react_1.default.createElement(CardsList_1.CardsList, null),
                        react_1.default.createElement(react_router_dom_1.Routes, null,
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/:id", element: react_1.default.createElement(Post_1.Post, null) }))))))))));
}
exports.AppCopmonent = AppCopmonent;
exports.App = root_1.hot(function () { return react_1.default.createElement(AppCopmonent, null); });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\r\n    --black: #333333;\r\n    --white: #ffffff;\r\n    --orange: #cc6633;\r\n    --green: #a4cc33;\r\n    --greyF4: #f4f4f4;\r\n    --greyF3: #f3f3f3;\r\n    --greyD9: #d9d9d9;\r\n    --greyC4: #c4c4c4;\r\n    --grey99: #999999;\r\n    --grey66: #666666;\r\n    --greyEC: #ececec;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: var(--greyF4);\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-family: \"Roboto\", serif;\r\n}\r\n* {\r\n    color: var(--black);\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    cursor: pointer;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(18), exports);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(19));
function Layout(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: layout_css_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(21));
var SearchBlock_1 = __webpack_require__(22);
var ThreadTitle_1 = __webpack_require__(38);
var SortBlock_1 = __webpack_require__(41);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--bAgyG"
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(24));
var UserBlock_1 = __webpack_require__(25);
var userContext_1 = __webpack_require__(8);
function SearchBlock() {
    var _a = react_1.useContext(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3aDPv"
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icons_1 = __webpack_require__(5);
var Text_1 = __webpack_require__(7);
var userblock_css_1 = __importDefault(__webpack_require__(36));
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=53DbZSXMFRvfrGnpexK2_g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity", className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement("img", { src: avatarSrc, alt: "avatar", className: userblock_css_1.default.avatarImage })) : (react_1.default.createElement(icons_1.IconAnon, null))),
        react_1.default.createElement("div", { className: userblock_css_1.default.username },
            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, username || "Аноним"))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcons = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function BlockIcons() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" },
        react_1.default.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" })));
}
exports.BlockIcons = BlockIcons;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function WarningIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "12", viewBox: "0 0 14 12", fill: "none" },
        react_1.default.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CommentIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentIcon = CommentIcon;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ShareIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "14", viewBox: "0 0 12 14", fill: "none" },
        react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function SaveIcon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" },
        react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function IconAnon() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 50 50", fill: "none" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColors = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(34));
var classnames_1 = __importDefault(__webpack_require__(35));
var EColors;
(function (EColors) {
    EColors["black"] = "black";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["white"] = "white";
    EColors["greyF4"] = "greyF4";
    EColors["greyF3"] = "greyF3";
    EColors["greyD9"] = "greyD9";
    EColors["greyC4"] = "greyC4";
    EColors["grey99"] = "grey99";
    EColors["grey66"] = "grey66";
    EColors["greyEC"] = "greyEC";
})(EColors = exports.EColors || (exports.EColors = {}));
function Text(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? "span" : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize, _f = props.color, color = _f === void 0 ? EColors.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g;
    var classes = classnames_1.default(text_css_1.default["s" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default["m" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default["d" + desktopSize]] = desktopSize, _d));
    return react_1.default.createElement(As, { className: classes }, children);
}
exports.Text = Text;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--Puvgs",
	"s20": "text__s20--3Xq66",
	"s16": "text__s16--G_lUr",
	"s14": "text__s14--jvCoO",
	"s12": "text__s12--2S2T2",
	"s10": "text__s10--DYLfy",
	"black": "text__black--1zchg",
	"orange": "text__orange--1RyAM",
	"green": "text__green--3mYQn",
	"white": "text__white--13JGE",
	"grayF4": "text__grayF4--2X2jV",
	"greyF3": "text__greyF3--2Lfsi",
	"greyD9": "text__greyD9--7iRFr",
	"greyC4": "text__greyC4--3oiNM",
	"grey99": "text__grey99--35u3B",
	"grey66": "text__grey66--373uw",
	"upperCase": "text__upperCase--2EMyT",
	"bold": "text__bold--gb02H",
	"m28": "text__m28--2u2zs",
	"m20": "text__m20--1gFlM",
	"m16": "text__m16--cSY4u",
	"m14": "text__m14--s6pnr",
	"m12": "text__m12--1W0av",
	"m10": "text__m10--UtIkW",
	"t28": "text__t28--A4rHF",
	"t20": "text__t20--78tCz",
	"t16": "text__t16--nkVMz",
	"t14": "text__t14--1Rj72",
	"t12": "text__t12--7txjW",
	"t10": "text__t10--n2R7f",
	"d28": "text__d28--3oIok",
	"d20": "text__d20--uwHxr",
	"d16": "text__d16--1Pwd1",
	"d14": "text__d14--3Futo",
	"d12": "text__d12--5X_qc",
	"d10": "text__d10--3pWnc"
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--24rEF",
	"avatarBox": "userblock__avatarBox--2OTfi",
	"avatarImage": "userblock__avatarImage--2ryXC",
	"username": "userblock__username--3bLc0"
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(1));
var tokenContext_1 = __webpack_require__(2);
var react_redux_1 = __webpack_require__(3);
var actions_1 = __webpack_require__(4);
function useUserData() {
    var data = react_redux_1.useSelector(function (state) { return state.me.data; });
    var token = react_1.useContext(tokenContext_1.tokenContext);
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (!token)
            return;
        dispatch(actions_1.meRequest());
        axios_1.default
            .get("https://oauth.reddit.com/api/v1/me", {
            headers: { Authorization: "bearer " + token },
        })
            .then(function (resp) {
            var userData = resp.data;
            var myUserData = {
                name: userData.name,
                iconImg: userData.snoovatar_img,
            };
            dispatch(actions_1.meRequestSuccess(myUserData));
        })
            .catch(function (error) {
            console.log(error);
            dispatch(actions_1.meRequestError(String(error)));
        });
    }, [token]);
    return [data];
}
exports.useUserData = useUserData;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(40));
function ThreadTitle() {
    return react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Header");
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--oxugx"
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(43));
function SortBlock() {
    return react_1.default.createElement("div", { className: sortblock_css_1.default.sortBlock }, "sorting dropdown");
}
exports.SortBlock = SortBlock;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--141aZ"
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(46));
function Content(_a) {
    var children = _a.children;
    return react_1.default.createElement("main", { className: content_css_1.default.content }, children);
}
exports.Content = Content;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2O9-S"
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var cardslist_css_1 = __importDefault(__webpack_require__(49));
var Card_1 = __webpack_require__(50);
var axios_1 = __importDefault(__webpack_require__(1));
var tokenContext_1 = __webpack_require__(2);
function CardsList() {
    var token = react_1.useContext(tokenContext_1.tokenContext);
    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(""), errorLoading = _c[0], setErrorLoading = _c[1];
    var _d = react_1.useState(""), nextAfter = _d[0], setNextAfter = _d[1];
    var bottomOfList = react_1.useRef(null);
    react_1.useEffect(function () {
        function load() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, children_1, after, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setLoading(true);
                            setErrorLoading("");
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios_1.default.get("https://oauth.reddit.com/best/", {
                                    headers: { Authorization: "bearer " + token },
                                    params: { limit: 10, after: nextAfter },
                                })];
                        case 2:
                            _a = (_b.sent()).data.data, children_1 = _a.children, after = _a.after;
                            setNextAfter(after);
                            setPosts(function (prevChildren) {
                                return prevChildren.concat.apply(prevChildren, children_1);
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            setErrorLoading(String(error_1));
                            return [3 /*break*/, 4];
                        case 4:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                //? спрацює лише,коли елемент видимий
                load();
            }
        }, { rootMargin: "100px" });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, nextAfter, token]);
    return (react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList },
        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: "center" } }, "Немає жодного поста")),
        posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.data.id, title: post.data.title })); }),
        react_1.default.createElement("div", { ref: bottomOfList }),
        loading && (react_1.default.createElement("div", { style: { textAlign: "center" } }, "Загрузка...")),
        errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: "center" } }, errorLoading))));
}
exports.CardsList = CardsList;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardslist__cardsList--1DoiZ"
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(51));
var TextContent_1 = __webpack_require__(52);
var Preview_1 = __webpack_require__(64);
var Menu_1 = __webpack_require__(67);
var Controls_1 = __webpack_require__(76);
function Card(_a) {
    var title = _a.title;
    return (react_1.default.createElement("li", { className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { title: title }),
        react_1.default.createElement(Preview_1.Preview, null),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, null)));
}
exports.Card = Card;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--7bN6-",
	"textContent": "card__textContent--3Ki_7"
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(54));
var UserLink_1 = __webpack_require__(55);
var Title_1 = __webpack_require__(58);
var CreatedAt_1 = __webpack_require__(61);
function TextContent(_a) {
    var title = _a.title;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_css_1.default.metaData },
            react_1.default.createElement(UserLink_1.UserLink, null),
            react_1.default.createElement(CreatedAt_1.CreatedAt, null)),
        react_1.default.createElement(Title_1.Title, { title: title })));
}
exports.TextContent = TextContent;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--2RuXa",
	"metaData": "textcontent__metaData--1L7oU"
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLink = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userlink_css_1 = __importDefault(__webpack_require__(57));
function UserLink() {
    return (react_1.default.createElement("div", { className: userlink_css_1.default.userLink },
        react_1.default.createElement("img", { src: "https://www.ne-prospi.space/pluginfile.php/1/theme_space/teamimage1/1641569635/istockphoto-1131164548-612x612.jpg", alt: "avatar", className: userlink_css_1.default.avatar }),
        react_1.default.createElement("a", { href: "#user-url", className: userlink_css_1.default.username }, "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0413\u0440\u0438\u0448\u0438\u043D")));
}
exports.UserLink = UserLink;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userLink": "userlink__userLink--X580t",
	"avatar": "userlink__avatar--3wav7",
	"username": "userlink__username--1lMzo"
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(60));
var react_router_dom_1 = __webpack_require__(9);
function Title(_a) {
    var title = _a.title;
    return (react_1.default.createElement("h2", { className: title_css_1.default.title },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/1", className: title_css_1.default.postLink }, title)));
}
exports.Title = Title;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--3THtn",
	"postLink": "title__postLink--3ZH1E",
	"textContent": "title__textContent--1BWZQ"
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedAt = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var createdat_css_1 = __importDefault(__webpack_require__(63));
function CreatedAt() {
    return (react_1.default.createElement("span", { className: createdat_css_1.default.createdAt },
        react_1.default.createElement("span", { className: createdat_css_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E"),
        "4 \u0433\u043E\u0434\u0438\u043D\u0438 \u043D\u0430\u0437\u0430\u0434"));
}
exports.CreatedAt = CreatedAt;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"createdAt": "createdat__createdAt--1aNLR",
	"publishedLabel": "createdat__publishedLabel--2T6jK"
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(66));
function Preview() {
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview },
        react_1.default.createElement("img", { src: "https://cdn.dribbble.com/users/535817/screenshots/17929359/intro_v6_10_still.gif?compress=1&resize=400x300&vertical=top", alt: "preview", className: preview_css_1.default.previewImg })));
}
exports.Preview = Preview;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--1Nukb",
	"previewImg": "preview__previewImg--3kTAV"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menu_css_1 = __importDefault(__webpack_require__(69));
var MenuIcon_1 = __webpack_require__(6);
var Dropdown_1 = __webpack_require__(70);
var MenuItemsList_1 = __webpack_require__(73);
function Menu() {
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menu_css_1.default.menuButton },
                react_1.default.createElement(MenuIcon_1.MenuIcon, null)) },
            react_1.default.createElement("div", { className: menu_css_1.default.dropdown },
                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: "1234" }),
                react_1.default.createElement("button", { className: menu_css_1.default.closeButton + " " + menu_css_1.default.mobile }, "\u0417\u0430\u043A\u0440\u0438\u0442\u044C")))));
}
exports.Menu = Menu;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--22Yos",
	"menuButton": "menu__menuButton--2RzAb",
	"dropdown": "menu__dropdown--2v5tI",
	"closeButton": "menu__closeButton--1Vmbj",
	"mobile": "menu__mobile--32Dl9"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var dropdown_css_1 = __importDefault(__webpack_require__(72));
var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;
    var _d = react_1.useState(isOpen), isDeopdownOpen = _d[0], setIsDropdownOpen = _d[1];
    react_1.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    react_1.useEffect(function () { return (isDeopdownOpen ? onOpen() : onClose()); }, [isDeopdownOpen]);
    var handleOpen = function () {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDeopdownOpen);
        }
    };
    var cls = isDeopdownOpen ? "" + dropdown_css_1.default.active : "";
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { onClick: handleOpen, className: cls }, button),
        isDeopdownOpen && (react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--a5Jzh",
	"listContainer": "dropdown__listContainer--YYYB3",
	"active": "dropdown__active--2Ifq8",
	"list": "dropdown__list--23slg",
	"nothing": "dropdown__nothing--2kEIi"
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menuitemslist_css_1 = __importDefault(__webpack_require__(75));
var icons_1 = __webpack_require__(5);
var Text_1 = __webpack_require__(7);
function MenuItemsList(_a) {
    var postId = _a.postId;
    return (react_1.default.createElement("ul", { className: menuitemslist_css_1.default.menuItemsList },
        react_1.default.createElement("li", { onClick: function () { return console.log(postId); }, className: menuitemslist_css_1.default.menuItem + " " + menuitemslist_css_1.default.desktop },
            react_1.default.createElement(icons_1.CommentIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 12, mobileSize: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider + " " + menuitemslist_css_1.default.desktop }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem + " " + menuitemslist_css_1.default.desktop },
            react_1.default.createElement(icons_1.ShareIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 12, mobileSize: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider + " " + menuitemslist_css_1.default.desktop }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(icons_1.BlockIcons, null),
            react_1.default.createElement(Text_1.Text, { size: 12, mobileSize: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem + " " + menuitemslist_css_1.default.desktop },
            react_1.default.createElement(icons_1.SaveIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 12, mobileSize: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_css_1.default.divider + " " + menuitemslist_css_1.default.desktop }),
        react_1.default.createElement("li", { className: menuitemslist_css_1.default.menuItem },
            react_1.default.createElement(icons_1.WarningIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 12, mobileSize: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--3fgSr",
	"menuItem": "menuitemslist__menuItem--2CsEl",
	"divider": "menuitemslist__divider--1_GEo",
	"desktop": "menuitemslist__desktop--3EbwX"
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(77), exports);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(78));
var CarmaCounter_1 = __webpack_require__(79);
var CommentsButton_1 = __webpack_require__(82);
var ShareButton_1 = __webpack_require__(85);
var SaveButton_1 = __webpack_require__(88);
function Controls() {
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement(CarmaCounter_1.CarmaCounter, null),
        react_1.default.createElement(CommentsButton_1.CommentsButton, null),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement(ShareButton_1.ShareButton, null),
            react_1.default.createElement(SaveButton_1.SaveButton, null))));
}
exports.Controls = Controls;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--1pbuI",
	"actions": "controls__actions--1iXY3"
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarmaCounter = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var carmacounter_css_1 = __importDefault(__webpack_require__(81));
function CarmaCounter() {
    return (react_1.default.createElement("div", { className: carmacounter_css_1.default.karmaCounter },
        react_1.default.createElement("button", { className: carmacounter_css_1.default.up },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "19", height: "10", viewBox: "0 0 19 10", fill: "none" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
        react_1.default.createElement("span", { className: carmacounter_css_1.default.karmaValue }, "234"),
        react_1.default.createElement("button", { className: carmacounter_css_1.default.down },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "19", height: "10", viewBox: "0 0 19 10", fill: "none" },
                react_1.default.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })))));
}
exports.CarmaCounter = CarmaCounter;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaCounter": "carmacounter__karmaCounter--3Qhuy",
	"karmaValue": "carmacounter__karmaValue--xNdU-",
	"down": "carmacounter__down--HZz1-",
	"up": "carmacounter__up--r6aW2"
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentsbutton_css_1 = __importDefault(__webpack_require__(84));
function CommentsButton() {
    return (react_1.default.createElement("button", { className: commentsbutton_css_1.default.commentsButton },
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: commentsbutton_css_1.default.commentsNumber }, "13")));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--3bUHw",
	"commentsNumber": "commentsbutton__commentsNumber--3_qtU"
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sharebutton_css_1 = __importDefault(__webpack_require__(87));
function ShareButton() {
    return (react_1.default.createElement("button", { className: sharebutton_css_1.default.shareButton },
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))));
}
exports.ShareButton = ShareButton;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareButton": "sharebutton__shareButton--3ZQRi"
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var savebutton_css_1 = __importDefault(__webpack_require__(90));
function SaveButton() {
    return (react_1.default.createElement("button", { className: savebutton_css_1.default.saveButton },
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
            react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))));
}
exports.SaveButton = SaveButton;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"saveButton": "savebutton__saveButton--1jjuK"
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
var react_1 = __webpack_require__(0);
function useToken() {
    var _a = react_1.useState(""), token = _a[0], setToken = _a[1];
    react_1.useEffect(function () {
        if (window.__token__) {
            setToken(window.__token__);
        }
    }, []);
    return [token];
}
exports.useToken = useToken;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.updateComment = exports.UPDATE_COMMENT = void 0;
var actions_1 = __webpack_require__(4);
var reducer_1 = __webpack_require__(96);
var initialState = {
    commentText: "Hello Skillbox",
    me: {
        loading: false,
        error: "",
        data: {},
    },
};
exports.UPDATE_COMMENT = "UPDATE_COMMENT";
var updateComment = function (text) { return ({
    type: exports.UPDATE_COMMENT,
    text: text,
}); };
exports.updateComment = updateComment;
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case exports.UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });
    }
    return state;
};
exports.rootReducer = rootReducer;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(4);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(98), exports);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var ReactDOM = __importStar(__webpack_require__(99));
var post_css_1 = __importDefault(__webpack_require__(100));
var CommentFormContainer_1 = __webpack_require__(101);
var react_router_1 = __webpack_require__(105);
function Post(props) {
    var ref = react_1.useRef(null);
    var history = react_router_1.useNavigate();
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && //? перевірка, що event.target - node
                !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                // props.onClose?.()
                history("/");
            }
        }
        document.addEventListener("click", handleClick);
        return function () {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    var node = document.querySelector("#modal_root");
    if (!node)
        return null;
    return ReactDOM.createPortal(react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, "\u0421\u043B\u0435\u0434\u0443\u0435\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u043D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442"),
        react_1.default.createElement("div", { className: post_css_1.default.content },
            react_1.default.createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C."),
            react_1.default.createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C."),
            react_1.default.createElement("p", null, "\u0415\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C.")),
        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null)), node);
}
exports.Post = Post;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--yRo-c",
	"content": "post__content--2gFMc",
	"close": "post__close--1HSqz"
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormContainer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(3);
var CommentForm_1 = __webpack_require__(103);
function CommentFormContainer() {
    // const value = useSelector<RootState, string>((state) => state.commentText)
    var _a = react_1.useState(""), value = _a[0], setValue = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var _b = react_1.useState(false), valueTouched = _b[0], setValueTouched = _b[1];
    var _c = react_1.useState(""), valueError = _c[0], setValueError = _c[1];
    function handleChange(event) {
        // dispatch(updateComment(event.target.value))
        setValue(event.target.value);
    }
    function handleBlur() {
        // setValueTouched(true)
    }
    function handleSubmit(event) {
        event.preventDefault();
        setValueTouched(true);
        setValueError(validateValue());
        var isFormValid = !validateValue();
        if (!isFormValid)
            return;
        alert("Form sent");
    }
    function validateValue() {
        if (value.length <= 3)
            return "Enter more 3 symbols";
        return "";
    }
    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit, error: valueError, touched: valueTouched, blur: handleBlur }));
}
exports.CommentFormContainer = CommentFormContainer;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentform_css_1 = __importDefault(__webpack_require__(104));
function CommentForm(_a) {
    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit, error = _a.error, touched = _a.touched, blur = _a.blur;
    return (react_1.default.createElement("form", { className: commentform_css_1.default.form, onSubmit: onSubmit },
        react_1.default.createElement("textarea", { className: commentform_css_1.default.input, value: value, onChange: onChange, "aria-invalid": error ? "true" : undefined, onBlur: blur }),
        touched && error && react_1.default.createElement("div", null, error),
        react_1.default.createElement("button", { type: "submit", className: commentform_css_1.default.button }, "\u041A\u043E\u043C\u0435\u043D\u0442\u0443\u0432\u0430\u0442\u0438")));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--Cs1Oi",
	"input": "commentform__input--2fC-z",
	"button": "commentform__button--35eLT"
};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Reddit</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n    window.__token__ = '" + token + "'\n  </script>\n</head>\n\n<body>\n  <div id=\"react_root\">" + content + "</div>\n  <div id=\"modal_root\"></div>\n</body>\n\n</html>\n"; };
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);