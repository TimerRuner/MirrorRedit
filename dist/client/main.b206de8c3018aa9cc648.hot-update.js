webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequest());\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/api/v1/me\", {\r\n            headers: { Authorization: \"bearer \" + token },\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({\r\n                name: userData.name,\r\n                iconImg: userData.snoovatar_img,\r\n            });\r\n            dispatch({ type: \"ME_REQUEST_SUCCESS\" });\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch({ type: \"ME_REQUEST_ERROR\" });\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.tsx?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestSuccess = exports.meRequest = exports.ME_REQUEST_SUCCESS = exports.ME_REQUEST = void 0;\r\nexports.ME_REQUEST = \"ME_REQUEST\";\r\nexports.ME_REQUEST_SUCCESS = \"ME_REQUEST_SUCCESS\";\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequest = meRequest;\r\nvar meRequestSuccess = function () { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ })

})