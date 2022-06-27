"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 2810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMsg = (props)=>{
    const { name ="" , value ="" , isSubmitted =false , isEmpty =false , min =0 , max =99 , msg ="" , isEqual =false ,  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isSubmitted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            style: {
                color: "red",
                width: "100%",
                textAlign: "left"
            },
            children: [
                isEmpty && `${name} tidak boleh kosong! `,
                isEqual && `${name} tidak sama! `,
                typeof value === "string" && value.length < min && `${name} minimal ${min} karakter! `,
                typeof value === "number" && value < min && `${name} minimal ${min} karakter! `,
                typeof value === "string" && value.length > max && `${name} maximal ${max} karakter! `,
                typeof value === "number" && value > max && `${name} maximal ${max} karakter! `
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMsg);


/***/ })

};
;