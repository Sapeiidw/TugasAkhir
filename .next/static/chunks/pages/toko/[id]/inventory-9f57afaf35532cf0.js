(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{7760:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toko/[id]/inventory",function(){return e(2e3)}])},2810:function(n,t,e){"use strict";var r=e(5893);e(7294);t.Z=function(n){var t=n.name,e=void 0===t?"":t,a=n.value,o=void 0===a?"":a,i=n.isSubmitted,c=void 0!==i&&i,u=n.isEmpty,s=void 0!==u&&u,l=n.min,d=void 0===l?0:l,f=n.max,p=void 0===f?99:f,v=(n.msg,n.isEqual),m=void 0!==v&&v;return(0,r.jsx)(r.Fragment,{children:c&&(0,r.jsxs)("span",{style:{color:"red",width:"100%",textAlign:"left"},children:[s&&"".concat(e," tidak boleh kosong! "),m&&"".concat(e," tidak sama! "),"string"===typeof o&&o.length<d&&"".concat(e," minimal ").concat(d," karakter! "),"number"===typeof o&&o<d&&"".concat(e," minimal ").concat(d," karakter! "),"string"===typeof o&&o.length>p&&"".concat(e," maximal ").concat(p," karakter! "),"number"===typeof o&&o>p&&"".concat(e," maximal ").concat(p," karakter! ")]})})}},2e3:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return E}});var r=e(4051),a=e.n(r),o=e(5893),i=e(1664),c=e(1163),u=e(7294),s=e(9432),l=e(2810);function d(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){d(n,t,e[t])}))}return n}var p=function(n,t){switch(t.name){case"SET_SENDING":return f({},n,{sending:t.payload});case"SET_IS_SUBMITTED":return f({},n,{isSubmitted:!0});case"SET_INPUTS":return f({},n,{inputs:f({},n.inputs,t.payload)});case"SET_ERROR":return f({},n,{error:f({},n.inputs,t.payload)});default:return n}},v=e(5644),m=e(9801);function h(n,t,e,r,a,o,i){try{var c=n[o](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,a)}function y(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function i(n){h(o,r,a,i,c,"next",n)}function c(n){h(o,r,a,i,c,"throw",n)}i(void 0)}))}}var x=function(){var n=y(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.Z.get("/inventories/store/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=y(a().mark((function n(t,e,r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",m.Z.post("/inventories/".concat(t,"/").concat(e),r));case 1:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),g=e(4949),k=e(5926),S=e(6608),j=e.n(S);function w(n,t,e,r,a,o,i){try{var c=n[o](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,a)}function _(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function I(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){_(n,t,e[t])}))}return n}var E=function(n){var t=(0,u.useState)({visible:!1,edit:!1}),e=t[0],r=t[1],d=(0,c.useRouter)(),f=d.query.id,m=(0,u.useState)(),h=m[0],y=m[1],S=(0,u.useState)([]),_=S[0],E=S[1],T=(0,u.useState)([]),N=T[0],P=T[1],O=(0,u.useState)(),C=(O[0],O[1],(0,u.useState)([])),R=(C[0],C[1]),D=(0,u.useState)(""),Z=D[0],z=D[1],B=(0,u.useState)(""),F=(B[0],B[1]),U=(0,u.useReducer)(p,{isSubmitted:!1,sending:!1,inputs:{productId:0,stock:0,description:""},error:{statusCode:0,message:""}}),M=U[0],K=U[1],V=M.isSubmitted,A=M.inputs,G=M.sending,L=M.error,q=A.stock,H=A.description,W=(function(){var n,t=(n=a().mark((function n(t,e,r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:E(_.filter((function(n,t){return t!==r}))),(0,g.H6)(e,f);case 2:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function i(n){w(o,r,a,i,c,"next",n)}function c(n){w(o,r,a,i,c,"throw",n)}i(void 0)}))})}(),(0,u.useMemo)((function(){return _.filter((function(n){return n.product.name.toLowerCase().includes(Z.toLowerCase())}))}),[_,Z]));return(0,u.useEffect)((function(){d.isReady&&((0,k.h)(f).then((function(n){y(n.data.data)})).catch((function(n){console.log(n)})),(0,g.RB)(f).then((function(n){P(n.data.data)})).catch((function(n){console.log(n)})),x(f).then((function(n){E(n.data.data)})).catch((function(n){console.log(n)})),(0,v.b)().then((function(n){R(n.data.data)})).catch((function(n){console.log(n)})))}),[d.isReady]),(0,o.jsxs)(s.VQ,{children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("div",{className:".flex-row ".concat(j().inventoryToko),children:[(0,o.jsx)("img",{src:"/images/avatar.png",alt:"avatar"}),(0,o.jsxs)("div",{className:"flex-col",children:[(0,o.jsx)("h1",{children:null===h||void 0===h?void 0:h.name}),(0,o.jsx)("p",{children:null===h||void 0===h?void 0:h.address})]})]}),(0,o.jsxs)("div",{className:"flex-row-center justify-between p-2",children:[(0,o.jsxs)("div",{className:"invetoryBreadcrumb",children:[(0,o.jsx)(i.default,{href:"/",children:"Dashboard"})," /"," ",(0,o.jsx)(i.default,{href:"/",children:"Inventory"})]}),(0,o.jsxs)("div",{className:j().inventoryFungsi,children:[(0,o.jsx)(s.zx,{text:"Tambah Satuan",color:"btnInverse",size:"btnSmall"}),(0,o.jsx)(s.zx,{text:"Tambah Kategori",color:"btnInverse",size:"btnSmall"})]})]})]}),(0,o.jsxs)("div",{className:j().inventoryContent,children:[(0,o.jsxs)("div",{className:j().inventoryFilter,children:[(0,o.jsxs)("select",{name:"",id:"",onChange:function(n){return F(n.target.value)},children:[(0,o.jsx)("option",{value:"filter",children:"filter"}),(0,o.jsx)("option",{value:"nama",children:"nama"}),(0,o.jsx)("option",{value:"kategori",children:"kategori"})]}),(0,o.jsx)("input",{type:"text",placeholder:"Cari inventory...",onChange:function(n){return function(n){z(n.target.value)}(n)}}),(0,o.jsx)(s.zx,{text:"Tambah Inventory",size:"btnSmall",color:"btnPrimary",onClick:function(){return r(I({},e,{visible:!0}))}})]}),_[0]?(0,o.jsx)("div",{className:"x-auto",children:(0,o.jsx)(s.iA,{columns:[{key:"id",title:"NO",dataType:"numbering"},{key:"name",title:"Nama Produk",render:function(n){return"".concat(n.product.name)}},{key:"name",title:"Category",render:function(n){return"".concat(n.product.category.name)}},{key:"stock",title:"Stock"},{key:"description",title:"Description"}],data:W})}):(0,o.jsxs)("div",{className:j().emptyInventory,children:[(0,o.jsx)("img",{src:"/images/produkKosong.svg",alt:""}),(0,o.jsx)("h4",{className:"text-primary",children:"Belum ada inventory"})]})]}),(0,o.jsxs)(s.M0,{title:"Tambah Inventory",visible:e.visible,edit:e.edit,onOK:function(){return null},onCancel:function(){r(I({},e,{visible:!e.visible})),K({name:"SET_INPUTS",payload:{productId:0,stock:0,description:""}}),r(I({},e,{visible:!1,edit:!1}))},footer:(0,o.jsx)(o.Fragment,{}),children:[L.message," ",e.edit,(0,o.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault(),K({name:"SET_IS_SUBMITTED"}),q||H||K({name:"SET_ERROR",payload:{isValid:!0}}),L.isValid||b(A.productId,f,{stock:q,description:H}).then((function(n){K({name:"SET_SENDING",payload:!0}),x(f).then((function(n){E(n.data.data)})).catch((function(n){console.log(n)}))})).catch((function(n){K({name:"SET_ERROR",payload:{statusCode:n.response.data.statusCode,message:n.response.data.message}})})).finally((function(){K({name:"SET_SENDING",payload:!1})}))}(n)},className:"flex flex-column gap-10",children:[M.error.message,(0,o.jsx)("div",{children:(0,o.jsx)(s.Ph,{data:N,k:"name",kValue:"id",name:"productId",onChange:function(n){return K({name:"SET_INPUTS",payload:{productId:n.target.value}})},label:"Produk"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.II,{name:"stock",onChange:function(n){return K({name:"SET_INPUTS",payload:{stock:n.target.valueAsNumber}})},value:q,placeholder:"Stock awal",type:"number",label:"Stock awal"}),(0,o.jsx)(l.Z,{isSubmitted:V,value:q,isEmpty:!q,name:"Stock"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.II,{name:"description",onChange:function(n){return K({name:"SET_INPUTS",payload:{description:n.target.value}})},placeholder:"Deskripsi Inventory",type:"text",label:"Deskripsi Inventory",value:H}),(0,o.jsx)(l.Z,{isSubmitted:V,value:H,isEmpty:!H,name:"Deskripsi",min:4,max:12})]}),(0,o.jsx)("div",{children:(0,o.jsx)(s.zx,{type:"submit",text:G?"...Loading":"Simpan Inventory",size:"btnBig",color:"btnPrimary"})})]})]})]})}},5644:function(n,t,e){"use strict";e.d(t,{b:function(){return c}});var r=e(4051),a=e.n(r),o=e(9801);function i(n,t,e,r,a,o,i){try{var c=n[o](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,a)}var c=function(){var n,t=(n=a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("categories");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function c(n){i(o,r,a,c,u,"next",n)}function u(n){i(o,r,a,c,u,"throw",n)}c(void 0)}))});return function(){return t.apply(this,arguments)}}()},4949:function(n,t,e){"use strict";e.d(t,{gK:function(){return u},RB:function(){return s},O7:function(){return l},H6:function(){return d},nM:function(){return f},VS:function(){return p}});var r=e(4051),a=e.n(r),o=e(9801);function i(n,t,e,r,a,o,i){try{var c=n[o](i),u=c.value}catch(s){return void e(s)}c.done?t(u):Promise.resolve(u).then(r,a)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function c(n){i(o,r,a,c,u,"next",n)}function u(n){i(o,r,a,c,u,"throw",n)}c(void 0)}))}}var u=function(){var n=c(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post("/products/".concat(t),e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=c(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("products/store/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=c(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("products/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=c(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.delete("products/".concat(t,"/").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=c(a().mark((function n(t,e,r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.put("products/".concat(t,"/").concat(e),r);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=c(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("products/avatar/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6608:function(n){n.exports={inventoryToko:"Inventory_inventoryToko__i99wh",inventoryFungsi:"Inventory_inventoryFungsi__0YdWW",inventoryContent:"Inventory_inventoryContent__1Iy6O",action:"Inventory_action__BzpJO",inventoryFilter:"Inventory_inventoryFilter__wbmMR",emptyInventory:"Inventory_emptyInventory__KYrRk"}}},function(n){n.O(0,[135,675,599,774,888,179],(function(){return t=7760,n(n.s=t);var t}));var t=n.O();_N_E=t}]);