"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/toko/[id]",{

/***/ "./services/product.service.tsx":
/*!**************************************!*\
  !*** ./services/product.service.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": function() { return /* binding */ addProduct; },\n/* harmony export */   \"products\": function() { return /* binding */ products; },\n/* harmony export */   \"product\": function() { return /* binding */ product; },\n/* harmony export */   \"destroyProduct\": function() { return /* binding */ destroyProduct; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ \"./services/api.service.tsx\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar addProduct = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(storeId, data) {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/products/\".concat(storeId, \"/\").concat(data.category), {\n                        data: data\n                    });\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function addProduct(storeId, data) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar products = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(storeId) {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"products/store/\".concat(storeId));\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function products(storeId) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar product = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"products/\".concat(id));\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function product(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar destroyProduct = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"](\"products/\".concat(id));\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function destroyProduct(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsR0FBSyxDQUFDQyxVQUFVO3NNQUFHLFFBQVEsU0FDaENDLE9BQVksRUFDWkMsSUFBaUIsRUFDZSxDQUFDOzs7OzsyQkFDcEJILHlEQUFRLENBQUUsQ0FBVSxZQUFhRyxNQUFhLENBQXhCRCxPQUFPLEVBQUMsQ0FBQyxJQUFnQixPQUFkQyxJQUFJLENBQUNFLFFBQVEsR0FBSSxDQUFDO3dCQUFDRixJQUFJLEVBQUpBLElBQUk7b0JBQUMsQ0FBQzs7Ozs7Ozs7SUFDekUsQ0FBQztvQkFMWUYsVUFBVSxDQUNyQkMsT0FBWSxFQUNaQyxJQUFpQjs7OztBQUtaLEdBQUssQ0FBQ0csUUFBUTtzTUFBRyxRQUFRLFNBQURKLE9BQVksRUFBa0MsQ0FBQzs7Ozs7MkJBQy9ERix3REFBTyxDQUFFLENBQWUsaUJBQVUsT0FBUkUsT0FBTzs7Ozs7Ozs7SUFDaEQsQ0FBQztvQkFGWUksUUFBUSxDQUFVSixPQUFZOzs7O0FBSXBDLEdBQUssQ0FBQ00sT0FBTztzTUFBRyxRQUFRLFNBQURDLEVBQU8sRUFBa0MsQ0FBQzs7Ozs7MkJBQ3pEVCx3REFBTyxDQUFFLENBQVMsV0FBSyxPQUFIUyxFQUFFOzs7Ozs7OztJQUNyQyxDQUFDO29CQUZZRCxPQUFPLENBQVVDLEVBQU87Ozs7QUFJOUIsR0FBSyxDQUFDQyxjQUFjO3NNQUFHLFFBQVEsU0FBREQsRUFBTyxFQUFrQyxDQUFDOzs7OzsyQkFDaEVULDhEQUFVLENBQUUsQ0FBUyxXQUFLLE9BQUhTLEVBQUU7Ozs7Ozs7O0lBQ3hDLENBQUM7b0JBRllDLGNBQWMsQ0FBVUQsRUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UudHN4PzRhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0Rm9ybSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuL2FwaS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdCA9IGFzeW5jIChcclxuICBzdG9yZUlkOiBhbnksXHJcbiAgZGF0YTogUHJvZHVjdEZvcm1cclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+ID0+IHtcclxuICByZXR1cm4gYXdhaXQgYXBpLnBvc3QoYC9wcm9kdWN0cy8ke3N0b3JlSWR9LyR7ZGF0YS5jYXRlZ29yeX1gLCB7IGRhdGEgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBhc3luYyAoc3RvcmVJZDogYW55KTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+ID0+IHtcclxuICByZXR1cm4gYXdhaXQgYXBpLmdldChgcHJvZHVjdHMvc3RvcmUvJHtzdG9yZUlkfWApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3QgPSBhc3luYyAoaWQ6IGFueSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+PiA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFwaS5nZXQoYHByb2R1Y3RzLyR7aWR9YCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVzdHJveVByb2R1Y3QgPSBhc3luYyAoaWQ6IGFueSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+PiA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFwaS5kZWxldGUoYHByb2R1Y3RzLyR7aWR9YCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhcGkiLCJhZGRQcm9kdWN0Iiwic3RvcmVJZCIsImRhdGEiLCJwb3N0IiwiY2F0ZWdvcnkiLCJwcm9kdWN0cyIsImdldCIsInByb2R1Y3QiLCJpZCIsImRlc3Ryb3lQcm9kdWN0IiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/product.service.tsx\n");

/***/ })

});