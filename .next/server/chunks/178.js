exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 1420:
/***/ ((module) => {

// Exports
module.exports = {
	"inventoryToko": "Inventory_inventoryToko__i99wh",
	"inventoryFungsi": "Inventory_inventoryFungsi__0YdWW",
	"inventoryContent": "Inventory_inventoryContent__1Iy6O",
	"action": "Inventory_action__BzpJO",
	"inventoryFilter": "Inventory_inventoryFilter__wbmMR",
	"emptyInventory": "Inventory_emptyInventory__KYrRk"
};


/***/ }),

/***/ 5644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ categories)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9801);

const categories = async ()=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("categories");
};


/***/ }),

/***/ 4949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gK": () => (/* binding */ addProduct),
/* harmony export */   "RB": () => (/* binding */ products),
/* harmony export */   "O7": () => (/* binding */ product),
/* harmony export */   "H6": () => (/* binding */ destroyProduct),
/* harmony export */   "nM": () => (/* binding */ updateProduct),
/* harmony export */   "VS": () => (/* binding */ productAvatar)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9801);

const addProduct = async (storeId, data)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/products/${storeId}`, data);
};
const products = async (storeId)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`products/store/${storeId}`);
};
const product = async (id)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`products/${id}`);
};
const destroyProduct = async (id, storeId)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`products/${id}/${storeId}`);
};
const updateProduct = async (id, storeId, data)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`products/${id}/${storeId}`, data);
};
const productAvatar = async (id)=>{
    return await _api_service__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`products/avatar/${id}`);
};


/***/ })

};
;