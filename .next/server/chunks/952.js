"use strict";
exports.id = 952;
exports.ids = [952];
exports.modules = {

/***/ 4952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4453);



const Table = (props)=>{
    const { 0: perPage , 1: setPerpage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    const { 0: localData , 1: setLocalData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedPage , 1: setSelectedPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const initTable = ()=>{
        const initData = [
            ...props.data
        ];
        const results = [];
        const chunk_size = perPage;
        while(initData.length > 0){
            results.push(initData.splice(0, chunk_size));
        }
        setLocalData(results);
    };
    // componentDidUpdate
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        initTable();
    }, [
        props.data,
        perPage
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                            children: props.columns.map((column, index)=>{
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: column.title
                                }, index));
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: localData && localData[selectedPage] ? localData[selectedPage].map((data, index)=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                children: props.columns.map((column, indexColumn)=>{
                                    let toShown = data[column.key];
                                    if (column.render) toShown = column.render(data, index);
                                    if (column.dataType === "numbering") {
                                        toShown = selectedPage * perPage + index + 1;
                                    }
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: toShown
                                    }, indexColumn));
                                })
                            }, index));
                        }) : null
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-2 flex-row-center justify-between w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-row-center items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "perPage",
                                    children: "Rows per page"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    onChange: (e)=>setPerpage(Number(e.target.value))
                                    ,
                                    value: perPage,
                                    name: "perPage",
                                    id: "perPage",
                                    style: {
                                        width: "min-content",
                                        border: "1px solid transparent",
                                        background: "transparent"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "2",
                                            children: 2
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "20",
                                            children: 20
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "50",
                                            children: 50
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "100",
                                            children: 100
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-row-center justify-between gap-10",
                        children: [
                            selectedPage >= 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                text: "Sebelumnya",
                                size: "btnSmall",
                                color: "btnInverse",
                                onClick: ()=>setSelectedPage((state)=>state - 1
                                    )
                            }) : null,
                            localData ? Array(localData.length).fill(0).map((d, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    text: `${index + 1}`,
                                    size: "btnSmall",
                                    color: index === selectedPage ? "btnPrimary" : "btnInverse",
                                    onClick: ()=>setSelectedPage(index)
                                }, index)
                            ) : null,
                            localData && localData[selectedPage] && selectedPage !== localData.length - 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                text: "Selanjutnya",
                                size: "btnSmall",
                                color: "btnInverse",
                                onClick: ()=>setSelectedPage((state)=>state + 1
                                    )
                            }) : null
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ })

};
;