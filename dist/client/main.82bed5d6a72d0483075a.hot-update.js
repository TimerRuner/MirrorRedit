webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css":
false,

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (13:20)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     return (react_1.default.createElement(\\\"form\\\", { className: commentform_css_1.default.form, onSubmit: onSubmit },\\n|         react_1.default.createElement(\\\"textarea\\\", { className: commentform_css_1.default.input, value: value, onChange: onChange, \\\"aria-invalid\\\": (validate(),\\n>                     ? \\\"true\\\" : undefined) }),\\n|         error && react_1.default.createElement(\\\"div\\\", null, error),\\n|         react_1.default.createElement(\\\"button\\\", { type: \\\"submit\\\", className: commentform_css_1.default.button }, \\\"\\\\u041A\\\\u043E\\\\u043C\\\\u0435\\\\u043D\\\\u0442\\\\u0443\\\\u0432\\\\u0430\\\\u0442\\\\u0438\\\")));\");\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
false,

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