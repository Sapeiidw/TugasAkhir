(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{47:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toko/[id]/produk",function(){return t(6790)}])},2810:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.name,t=void 0===n?"":n,a=e.value,i=void 0===a?"":a,o=e.isSubmitted,c=void 0!==o&&o,u=e.isEmpty,s=void 0!==u&&u,l=e.min,d=void 0===l?0:l,f=e.max,m=void 0===f?99:f,p=(e.msg,e.isEqual),v=void 0!==p&&p;return(0,r.jsx)(r.Fragment,{children:c&&(0,r.jsxs)("span",{style:{color:"red",width:"100%",textAlign:"left"},children:[s&&"".concat(t," tidak boleh kosong! "),v&&"".concat(t," tidak sama! "),"string"===typeof i&&i.length<d&&"".concat(t," minimal ").concat(d," karakter! "),"number"===typeof i&&i<d&&"".concat(t," minimal ").concat(d," karakter! "),"string"===typeof i&&i.length>m&&"".concat(t," maximal ").concat(m," karakter! "),"number"===typeof i&&i>m&&"".concat(t," maximal ").concat(m," karakter! ")]})})}},6790:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(4051),a=t.n(r),i=t(5893),o=t(1664),c=t(1163),u=t(7294),s=t(8599),l=t(2810);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}var m=function(e,n){switch(n.name){case"SET_SENDING":return f({},e,{sending:n.payload});case"SET_IS_SUBMITTED":return f({},e,{isSubmitted:!0});case"SET_INPUTS":return f({},e,{inputs:f({},e.inputs,n.payload)});case"SET_ERROR":return f({},e,{error:f({},e.inputs,n.payload)});default:return e}},p=t(5644),v=t(4949),y=t(5926),g=t(6608),h=t.n(g);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n,t,r,a,i,o){try{var c=e[i](o),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,a)}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){S(e,n,t[n])}))}return e}function k(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(e){var n=(0,u.useState)({visible:!1,edit:!1}),t=n[0],r=n[1],d=(0,c.useRouter)(),f=d.query.id,g=(0,u.useState)(),x=g[0],S=g[1],_=(0,u.useState)([]),N=_[0],P=_[1],w=(0,u.useState)(),E=w[0],I=w[1],T=(0,u.useState)([]),O=T[0],C=T[1],D=(0,u.useState)(""),R=D[0],M=D[1],Z=(0,u.useState)(""),z=(Z[0],Z[1]),A=(0,u.useReducer)(m,{isSubmitted:!1,sending:!1,inputs:{categoryName:"",name:"",description:"",unit:"",groceryPrice:0,price:0},error:{statusCode:0,message:""}}),U=A[0],H=A[1],B=U.isSubmitted,F=U.inputs,L=U.sending,K=U.error,G=F.name,J=F.description,q=F.unit,V=F.groceryPrice,W=F.price,X=F.categoryName;(0,u.useEffect)((function(){d.isReady&&((0,y.h)(f).then((function(e){S(e.data.data)})).catch((function(e){console.log(e)})),(0,v.RB)(f).then((function(e){P(e.data.data)})).catch((function(e){console.log(e)})),(0,p.b)().then((function(e){C(e.data.data)})).catch((function(e){console.log(e)})))}),[d.isReady]);var Y=function(){var e,n=(e=a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=N.find((function(e){return e.id===t}))){e.next=3;break}return e.abrupt("return");case 3:P(N.filter((function(e,n){return n!==N.indexOf(r)}))),(0,v.H6)(t,f);case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){b(i,r,a,o,c,"next",e)}function c(e){b(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(e,t){return n.apply(this,arguments)}}(),Q=(0,u.useMemo)((function(){return N.filter((function(e){return e.name.toLowerCase().includes(R.toLowerCase())}))}),[N,R]),$=[{key:"id",title:"NO",dataType:"numbering"},{key:"id",title:"ID"},{key:"name",title:"Name"},{key:"category",title:"Category",render:function(e){return"".concat(e.category.name)}},{key:"unit",title:"Stock"},{key:"price",title:"Modal",render:function(e){return"".concat(e.price.toLocaleString())}},{key:"groceryPrice",title:"Modal",render:function(e){return"".concat(e.groceryPrice.toLocaleString())}},{key:"description",title:"Deskripsi"},{key:"id",title:"Action",render:function(e,n){return(0,i.jsxs)("div",{className:"flex-row-center gap-10",children:[(0,i.jsx)(s.zx,{text:"Edit",size:"btnSmall",color:"btnPrimary",onClick:function(n){return function(e,n){r(j({},t,{visible:!0,edit:!0})),I(n);var a=N.find((function(e){return e.id===n}));a&&H({name:"SET_INPUTS",payload:{name:a.name,categoryName:a.category.name,description:a.description,groceryPrice:a.groceryPrice,price:a.price,unit:a.unit}})}(0,e.id)}}),(0,i.jsx)(s.zx,{text:"Hapus",size:"btnSmall",color:"btnDanger",onClick:function(n){return Y(n,e.id)}})]})}}];return(0,i.jsxs)(s.VQ,{children:[U.error.message,(0,i.jsxs)("header",{children:[(0,i.jsxs)("div",{className:".flex-row ".concat(h().inventoryToko),children:[(0,i.jsx)("img",{src:"/images/avatar.png",alt:"avatar"}),(0,i.jsxs)("div",{className:"flex-col",children:[(0,i.jsx)("h1",{children:null===x||void 0===x?void 0:x.name}),(0,i.jsx)("p",{children:null===x||void 0===x?void 0:x.address})]})]}),(0,i.jsxs)("div",{className:"flex-row-center justify-between p-2",children:[(0,i.jsxs)("div",{className:"invetoryBreadcrumb",children:[(0,i.jsx)(o.default,{href:"/",children:"Dashboard"})," /"," ",(0,i.jsx)(o.default,{href:"/",children:"Inventory"})]}),(0,i.jsxs)("div",{className:h().inventoryFungsi,children:[(0,i.jsx)(s.zx,{text:"Tambah Satuan",color:"btnInverse",size:"btnSmall"}),(0,i.jsx)(s.zx,{text:"Tambah Kategori",color:"btnInverse",size:"btnSmall"})]})]})]}),(0,i.jsxs)("div",{className:h().inventoryContent,children:[(0,i.jsxs)("div",{className:h().inventoryFilter,children:[(0,i.jsxs)("select",{name:"",id:"",onChange:function(e){return z(e.target.value)},children:[(0,i.jsx)("option",{value:"filter",children:"filter"}),(0,i.jsx)("option",{value:"nama",children:"nama"}),(0,i.jsx)("option",{value:"kategori",children:"kategori"})]}),(0,i.jsx)("input",{type:"text",placeholder:"Cari produk...",onChange:function(e){return function(e){M(e.target.value)}(e)}}),(0,i.jsx)(s.zx,{text:"Tambah Produk",size:"btnSmall",color:"btnPrimary",onClick:function(){return r(j({},t,{visible:!0}))}})]}),N[0]?(0,i.jsx)("div",{className:"x-auto",children:(0,i.jsx)(s.iA,{columns:$,data:Q})}):(0,i.jsxs)("div",{className:h().emptyInventory,children:[(0,i.jsx)("img",{src:"/images/produkKosong.svg",alt:""}),(0,i.jsx)("h4",{className:"text-primary",children:"Belum ada produk"})]})]}),(0,i.jsxs)(s.M0,{title:"Tambah Produk",visible:t.visible,edit:t.edit,onOK:function(){return null},onCancel:function(){r(j({},t,{visible:!t.visible})),H({name:"SET_INPUTS",payload:{categoryName:"",name:"",description:"",unit:"",groceryPrice:0,price:0}}),r(j({},t,{visible:!1,edit:!1}))},footer:(0,i.jsx)(i.Fragment,{}),children:[K.message," ",t.edit,(0,i.jsxs)("form",{onSubmit:t.edit?function(e){return function(e){e.preventDefault(),(G||J||q||V||W||X)&&(0,v.nM)(E,f,F).then((function(e){H({name:"SET_SENDING",payload:!0}),P((function(e){var n=k(e),t=n.find((function(e){return e.id===E}));return t?(t.name=F.name,t.category.name=F.categoryName,t.description=F.description,t.groceryPrice=F.groceryPrice,t.price=F.price,t.unit=F.unit,n):e}))})).catch((function(e){H({name:"SET_ERROR",payload:{statusCode:e.response.data.statusCode,message:e.response.data.message}})})).finally((function(){H({name:"SET_SENDING",payload:!1})}))}(e)}:function(e){return function(e){e.preventDefault(),H({name:"SET_IS_SUBMITTED"}),(G||J||q||V||W||X)&&(0,v.gK)(f,F).then((function(e){H({name:"SET_SENDING",payload:!0}),P(k(N).concat([e.data.data]))})).catch((function(e){H({name:"SET_ERROR",payload:{statusCode:e.response.data.statusCode,message:e.response.data.message}})})).finally((function(){H({name:"SET_SENDING",payload:!1})}))}(e)},className:"flex flex-column gap-10",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(s.II,{name:"name",onChange:function(e){return H({name:"SET_INPUTS",payload:{name:e.target.value}})},value:G,placeholder:"Nama Produk",type:"text",label:"Nama Produk"}),(0,i.jsx)(l.Z,{isSubmitted:B,value:G,isEmpty:!G,name:"Nama Produk",min:4,max:12})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Ph,{data:O,k:"name",value:X,label:"Kategori",name:"categoryName",onChange:function(e){return H({name:"SET_INPUTS",payload:{categoryName:e.target.value}})}}),(0,i.jsx)(l.Z,{isSubmitted:B,value:X,isEmpty:!X,name:"Category"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.II,{name:"description",onChange:function(e){return H({name:"SET_INPUTS",payload:{description:e.target.value}})},placeholder:"Deskripsi Produk",type:"text",label:"Deskripsi Produk",value:J}),(0,i.jsx)(l.Z,{isSubmitted:B,value:J,isEmpty:!J,name:"Deskripsi",min:4,max:12})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.II,{name:"groceryPrice",onChange:function(e){return H({name:"SET_INPUTS",payload:{groceryPrice:e.target.valueAsNumber}})},placeholder:"Harga Modal",type:"number",label:"Harga Modal",value:V}),(0,i.jsx)(l.Z,{isSubmitted:B,value:V.toLocaleString(),isEmpty:!V,name:"Harga Modal",min:4,max:12})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.II,{name:"price",onChange:function(e){return H({name:"SET_INPUTS",payload:{price:e.target.valueAsNumber}})},placeholder:"Harga Jual",type:"number",label:"Harga Jual",value:W}),(0,i.jsx)(l.Z,{isSubmitted:B,value:W.toLocaleString(),isEmpty:!W,name:"Harga Modal",min:4,max:12})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Ph,{k:"unit",data:[{unit:"Lusin"},{unit:"Pcs"}],name:"unit",label:"Satuan",onChange:function(e){return H({name:"SET_INPUTS",payload:{unit:e.target.value}})}}),(0,i.jsx)(l.Z,{isSubmitted:B,value:q,name:"Satuan"})]}),(0,i.jsx)(s.zx,{type:"submit",text:L?"...Loading":"Simpan Produk",size:"btnBig",color:"btnPrimary"})]})]})]})}},5644:function(e,n,t){"use strict";t.d(n,{b:function(){return c}});var r=t(4051),a=t.n(r),i=t(9801);function o(e,n,t,r,a,i,o){try{var c=e[i](o),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,a)}var c=function(){var e,n=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("categories");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){o(i,r,a,c,u,"next",e)}function u(e){o(i,r,a,c,u,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}()},4949:function(e,n,t){"use strict";t.d(n,{gK:function(){return u},RB:function(){return s},O7:function(){return l},H6:function(){return d},nM:function(){return f},VS:function(){return m}});var r=t(4051),a=t.n(r),i=t(9801);function o(e,n,t,r,a,i,o){try{var c=e[i](o),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,a)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){o(i,r,a,c,u,"next",e)}function u(e){o(i,r,a,c,u,"throw",e)}c(void 0)}))}}var u=function(){var e=c(a().mark((function e(n,t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("/products/".concat(n),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=c(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("products/store/".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=c(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("products/".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=c(a().mark((function e(n,t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("products/".concat(n,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=c(a().mark((function e(n,t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put("products/".concat(n,"/").concat(t),r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=c(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("products/avatar/".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},6608:function(e){e.exports={inventoryToko:"Inventory_inventoryToko__i99wh",inventoryFungsi:"Inventory_inventoryFungsi__0YdWW",inventoryContent:"Inventory_inventoryContent__1Iy6O",action:"Inventory_action__BzpJO",inventoryFilter:"Inventory_inventoryFilter__wbmMR",emptyInventory:"Inventory_emptyInventory__KYrRk"}}},function(e){e.O(0,[135,675,134,774,888,179],(function(){return n=47,e(e.s=n);var n}));var n=e.O();_N_E=n}]);