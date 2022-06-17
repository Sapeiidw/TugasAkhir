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


const Table = (props)=>{
    const { 0: perPage , 1: setPerpage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const { 0: localData , 1: setLocalData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedPage , 1: setSelectedPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const initTable = ()=>{
        console.log("initTable data", props.data);
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
    console.log(props.data, "data dari props");
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: localData ? Array(localData.length).fill(0).map((d, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedPage(index)
                                    ,
                                    style: {
                                        color: selectedPage === index ? "red" : undefined
                                    },
                                    children: index + 1
                                }, index)
                            ) : null
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                selectedPage >= 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedPage((state)=>state - 1
                                        )
                                    ,
                                    children: "Sebelumnya"
                                }) : null,
                                localData && localData[selectedPage] && selectedPage !== localData.length - 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedPage((state)=>state + 1
                                        )
                                    ,
                                    children: "Selanjutnya"
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                onChange: (e)=>setPerpage(Number(e.target.value))
                                ,
                                value: perPage,
                                name: "perpage",
                                id: "perpage",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "10",
                                        children: 10
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
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ })

};
;