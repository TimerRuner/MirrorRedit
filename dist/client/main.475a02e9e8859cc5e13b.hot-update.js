webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/CommentForm/commentform.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".commentform__form--Cs1Oi {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.commentform__input--2fC-z {\\r\\n    height: 89px;\\r\\n    border: 1px solid #d9d9d9;\\r\\n    padding: 16px;\\r\\n    box-sizing: border-box;\\r\\n    border-radius: 3px 3px 0px 0px;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 16px;\\r\\n    line-height: 19px;\\r\\n    color: #999999;\\r\\n    resize: none;\\r\\n}\\r\\n\\r\\n.commentform__input--2fC-z[aria-invalid] {\\r\\n    border-color: red;\\r\\n}\\r\\n\\r\\n.commentform__button--35eLT {\\r\\n    width: 220px;\\r\\n    height: 50px;\\r\\n    background: #cc6633;\\r\\n    border-radius: 0px 0px 3px 0px;\\r\\n    align-self: flex-end;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n    text-align: center;\\r\\n    color: #ffffff;\\r\\n}\\r\\n\\r\\n.commentform__button--35eLT:disabled {\\r\\n    opacity: 0.5;\\r\\n    cursor: default;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm(_a) {\r\n    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit, validate = _a.validate, touched = _a.touched;\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: onSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, value: value, onChange: onChange, \"aria-invalid\": validate() ? \"true\" : undefined }),\r\n        error && react_1.default.createElement(\"div\", null, error),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u0435\\u043D\\u0442\\u0443\\u0432\\u0430\\u0442\\u0438\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\r\nfunction CommentFormContainer() {\r\n    // const value = useSelector<RootState, string>((state) => state.commentText)\r\n    var _a = react_1.useState(\"\"), value = _a[0], setValue = _a[1];\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var _b = react_1.useState(false), valueTouched = _b[0], setValueTouched = _b[1];\r\n    var _c = react_1.useState(\"\"), valueError = _c[0], setValueError = _c[1];\r\n    function handleChange(event) {\r\n        // dispatch(updateComment(event.target.value))\r\n        setValue(event.target.value);\r\n        validateValue();\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        // validateValue()\r\n    }\r\n    function validateValue() {\r\n        if (value.length <= 3)\r\n            return \"Enter more 3 symbols\";\r\n        return \"\";\r\n    }\r\n    var isFormValid = !validateValue();\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit, validate: validateValue, touched: valueTouched }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ })

})