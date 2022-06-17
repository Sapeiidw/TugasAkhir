"use strict";
exports.id = 926;
exports.ids = [926];
exports.modules = {

/***/ 9801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9575);


const main = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    // baseURL: "http://localhost:4000/api/v1/",
    baseURL: "https://api-dev.inposery.com/api/v1/"
});
main.interceptors.request.use(function(config) {
    // Do something before request is sent
    const userToken = ___WEBPACK_IMPORTED_MODULE_1__/* .storageService.getToken */ .Hw.getToken() || "";
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

/***/ 9575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ON": () => (/* reexport */ auth_service_namespaceObject),
  "Hw": () => (/* reexport */ storage_service_namespaceObject)
});

// UNUSED EXPORTS: subscribeService, userService

// NAMESPACE OBJECT: ./services/auth.service.tsx
var auth_service_namespaceObject = {};
__webpack_require__.r(auth_service_namespaceObject);
__webpack_require__.d(auth_service_namespaceObject, {
  "forgotPassword": () => (forgotPassword),
  "google": () => (google),
  "login": () => (login),
  "profile": () => (profile),
  "register": () => (register)
});

// NAMESPACE OBJECT: ./services/storage.service.tsx
var storage_service_namespaceObject = {};
__webpack_require__.r(storage_service_namespaceObject);
__webpack_require__.d(storage_service_namespaceObject, {
  "decodeToken": () => (decodeToken),
  "getToken": () => (getToken),
  "removeToken": () => (removeToken),
  "setToken": () => (setToken)
});

// EXTERNAL MODULE: ./services/api.service.tsx
var api_service = __webpack_require__(9801);
;// CONCATENATED MODULE: ./services/auth.service.tsx

const register = async (data)=>{
    return await api_service/* default.post */.Z.post("auth/register", data);
};
const login = async (data)=>{
    return await api_service/* default.post */.Z.post("auth/login", data);
};
const google = async ()=>{
    return await api_service/* default.get */.Z.get("auth/google", {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
};
const profile = async ()=>{
    return await api_service/* default.get */.Z.get("auth/user");
};
const forgotPassword = async (data)=>{
    return await api_service/* default.post */.Z.post("auth/forgot-password", data);
};

;// CONCATENATED MODULE: ./services/user.service.tsx

const user_service_profile = async ()=>{
    return await api.get("users/profile");
};
const avatar = async ()=>{
    return await api.get("users/avatar");
};

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(5567);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);
;// CONCATENATED MODULE: ./services/storage.service.tsx

const isServer = (/* unused pure expression or super */ null && ("undefined" === "undefined"));
const setToken = (token)=>localStorage.setItem("TOKEN", `Bearer ${token}`)
;
const getToken = ()=> false ? 0 : ""
;
const removeToken = ()=>localStorage.removeItem("TOKEN")
;
const decodeToken = (token)=>{
    external_jwt_decode_default()(token);
};

;// CONCATENATED MODULE: ./services/subscribe.service.tsx

const GetSubscribePlans = async ()=>{
    return await api.get("/subscribe-orders/subscribe-plans");
};
const GetSubscribeHistory = async ()=>{
    return await api.get("/subscribe-orders/subscribe-history");
};
const GetSubscribeHistoryId = async (id)=>{
    return await api.get(`/subscribe-orders/subscribe-history/${id}`);
};

;// CONCATENATED MODULE: ./services/index.tsx







/***/ }),

/***/ 5926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z6": () => (/* binding */ storesCreate),
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "U8": () => (/* binding */ storeDestroy),
/* harmony export */   "RB": () => (/* binding */ products),
/* harmony export */   "O7": () => (/* binding */ product),
/* harmony export */   "qX": () => (/* binding */ productsDestroy)
/* harmony export */ });
/* unused harmony export stores */
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9801);

const storesCreate = async (data)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("stores", data);
};
const stores = async ()=>{
    return await api.get("stores");
};
const store = async (id)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`stores/${id}`);
};
const storeDestroy = async (id)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`stores/${id}`);
};
const products = async (id)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`products/store/${id}`);
};
const product = async (id)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`products/${id}`);
};
const productsDestroy = async (id)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`products/${id}`);
};


/***/ })

};
;