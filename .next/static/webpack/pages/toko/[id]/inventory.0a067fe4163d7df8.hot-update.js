"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/toko/[id]/inventory",{

/***/ "./services/store.service.tsx":
/*!************************************!*\
  !*** ./services/store.service.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storesCreate\": function() { return /* binding */ storesCreate; },\n/* harmony export */   \"stores\": function() { return /* binding */ stores; },\n/* harmony export */   \"store\": function() { return /* binding */ store; },\n/* harmony export */   \"storeDestroy\": function() { return /* binding */ storeDestroy; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ \"./services/api.service.tsx\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar storesCreate = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"stores\", data);\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function storesCreate(data) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar stores = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"stores\");\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function stores() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar store = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"stores/\".concat(id));\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function store(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar storeDestroy = function() {\n    var _ref = _asyncToGenerator(C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n        return C_Users_Sakti_Downloads_Coding_MKA_frontend_tim_d_batch_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return _api_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"](\"stores/\".concat(id));\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function storeDestroy(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zdG9yZS5zZXJ2aWNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLEdBQUssQ0FBQ0MsWUFBWTtzTUFBRyxRQUFRLFNBQ2xDQyxJQUFlLEVBQytCLENBQUM7Ozs7OzJCQUNsQ0YseURBQVEsQ0FBQyxDQUFRLFNBQUVFLElBQUk7Ozs7Ozs7O0lBQ3RDLENBQUM7b0JBSllELFlBQVksQ0FDdkJDLElBQWU7Ozs7QUFLVixHQUFLLENBQUNFLE1BQU07c01BQUcsUUFBUSxXQUE4QyxDQUFDOzs7OzsyQkFDOURKLHdEQUFPLENBQUMsQ0FBUTs7Ozs7Ozs7SUFDL0IsQ0FBQztvQkFGWUksTUFBTTs7OztBQUlaLEdBQUssQ0FBQ0UsS0FBSztzTUFBRyxRQUFRLFNBQURDLEVBQU8sRUFBa0MsQ0FBQzs7Ozs7MkJBQ3ZEUCx3REFBTyxDQUFFLENBQU8sU0FBSyxPQUFITyxFQUFFOzs7Ozs7OztJQUNuQyxDQUFDO29CQUZZRCxLQUFLLENBQVVDLEVBQU87Ozs7QUFJNUIsR0FBSyxDQUFDQyxZQUFZO3NNQUFHLFFBQVEsU0FBREQsRUFBTyxFQUFrQyxDQUFDOzs7OzsyQkFDOURQLDhEQUFVLENBQUUsQ0FBTyxTQUFLLE9BQUhPLEVBQUU7Ozs7Ozs7O0lBQ3RDLENBQUM7b0JBRllDLFlBQVksQ0FBVUQsRUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9zdG9yZS5zZXJ2aWNlLnRzeD9iNzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgU3RvcmVGb3JtLCBHZXRTdG9yZVJlc3BvbnNlLCBQb3N0U3RvcmVSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuL2FwaS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmVzQ3JlYXRlID0gYXN5bmMgKFxyXG4gIGRhdGE6IFN0b3JlRm9ybVxyXG4pOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UG9zdFN0b3JlUmVzcG9uc2U+PiA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGFwaS5wb3N0KFwic3RvcmVzXCIsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlcyA9IGFzeW5jICgpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8R2V0U3RvcmVSZXNwb25zZT4+ID0+IHtcclxuICByZXR1cm4gYXdhaXQgYXBpLmdldChcInN0b3Jlc1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGFzeW5jIChpZDogYW55KTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+ID0+IHtcclxuICByZXR1cm4gYXdhaXQgYXBpLmdldChgc3RvcmVzLyR7aWR9YCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmVEZXN0cm95ID0gYXN5bmMgKGlkOiBhbnkpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj4gPT4ge1xyXG4gIHJldHVybiBhd2FpdCBhcGkuZGVsZXRlKGBzdG9yZXMvJHtpZH1gKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImFwaSIsInN0b3Jlc0NyZWF0ZSIsImRhdGEiLCJwb3N0Iiwic3RvcmVzIiwiZ2V0Iiwic3RvcmUiLCJpZCIsInN0b3JlRGVzdHJveSIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/store.service.tsx\n");

/***/ })

});