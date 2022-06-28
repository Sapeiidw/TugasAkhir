"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 9801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7199);


const main = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    // baseURL: "http://localhost:4000/api/v1/",
    baseURL: "https://api-dev.inposery.com/api/v1/"
});
main.interceptors.request.use(function(config) {
    // Do something before request is sent
    const userToken = (0,_storage_service__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)() || "";
    config.headers = {
        Authorization: userToken
    };
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ 7199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "TD": () => (/* binding */ decodeToken)
/* harmony export */ });
/* unused harmony export removeToken */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

const isServer = (/* unused pure expression or super */ null && ("undefined" === "undefined"));
const setToken = (token)=>localStorage.setItem("TOKEN", `Bearer ${token}`)
;
const getToken = ()=> false ? 0 : ""
;
const removeToken = ()=>localStorage.removeItem("TOKEN")
;
const decodeToken = (token)=>{
    return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
};


/***/ })

};
;