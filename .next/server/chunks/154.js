exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 9689:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "Auth_banner__QUwG1",
	"signForm": "Auth_signForm__OOiSt",
	"img": "Auth_img__0IvUM",
	"header": "Auth_header__pjEQ9",
	"footer": "Auth_footer__FD4T_",
	"title": "Auth_title__84TM8",
	"subtitle": "Auth_subtitle__QTwAW",
	"wrapper": "Auth_wrapper__TnvIV",
	"text": "Auth_text__vgaYu",
	"form": "Auth_form__w2Mfn",
	"stroke": "Auth_stroke__GU_pk",
	"forgotPasswordLink": "Auth_forgotPasswordLink__dqolC",
	"forgotPassword": "Auth_forgotPassword__2N0Ir",
	"forgotPasswordWrapper": "Auth_forgotPasswordWrapper__YzIuj",
	"forgotPasswordTitle": "Auth_forgotPasswordTitle__6OChZ",
	"forgotPasswordSubtitle": "Auth_forgotPasswordSubtitle__qEfGU",
	"forgotPasswordForm": "Auth_forgotPasswordForm__2mfH0"
};


/***/ }),

/***/ 1332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z2": () => (/* binding */ register),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "lk": () => (/* binding */ google)
/* harmony export */ });
/* unused harmony exports profile, forgotPassword */
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9801);

const register = async (data)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("auth/register", data);
};
const login = async (data)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("auth/login", data);
};
const google = async ()=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("auth/google", {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
};
const profile = async ()=>{
    return await api.get("auth/user");
};
const forgotPassword = async (data)=>{
    return await api.post("auth/forgot-password", data);
};


/***/ })

};
;