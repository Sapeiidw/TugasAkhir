exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 2486:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "Button_btn__gkj_d",
	"btnPrimary": "Button_btnPrimary__sysIJ",
	"btnDanger": "Button_btnDanger__0KUhW",
	"btnInverse": "Button_btnInverse__UlyLw",
	"btnSmall": "Button_btnSmall__wWDZa",
	"btnMedium": "Button_btnMedium__qpXk0",
	"btnBig": "Button_btnBig__KnJa5"
};


/***/ }),

/***/ 4453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2486);
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);




const Button = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: props.type,
        className: `${(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn)}  ${props.size} ${props.color}`,
        onClick: props.onClick,
        children: [
            props.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: props.icon,
                alt: "google",
                layout: "fixed",
                width: "24px",
                height: "24px",
                className: (_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
            }),
            props.text
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;