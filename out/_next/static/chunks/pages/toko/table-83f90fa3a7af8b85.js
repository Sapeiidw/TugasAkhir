(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{5325:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toko/table",function(){return e(7513)}])},4453:function(n,t,e){"use strict";var r=e(5893),u=e(5675),c=(e(7294),e(8495)),o=e.n(c);t.Z=function(n){return(0,r.jsxs)("button",{type:n.type,className:"".concat(o().btn,"  ").concat(n.size," ").concat(n.color),onClick:n.onClick,children:[n.icon&&(0,r.jsx)(u.default,{src:n.icon,alt:"google",layout:"fixed",width:"24px",height:"24px",className:o().icon}),n.text]})}},4952:function(n,t,e){"use strict";var r=e(5893),u=e(7294),c=e(4453);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function i(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(n){var t=(0,u.useState)(2),e=t[0],o=t[1],a=(0,u.useState)(),s=a[0],l=a[1],f=(0,u.useState)(0),p=f[0],d=f[1];return(0,u.useEffect)((function(){!function(){for(var t=i(n.data),r=[],u=e;t.length>0;)r.push(t.splice(0,u));l(r)}()}),[n.data,e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:n.columns.map((function(n,t){return(0,r.jsx)("th",{children:n.title},t)}))})}),(0,r.jsx)("tbody",{children:s&&s[p]?s[p].map((function(t,u){return(0,r.jsx)("tr",{children:n.columns.map((function(n,c){var o=t[n.key];return n.render&&(o=n.render(t,u)),"numbering"===n.dataType&&(o=p*e+u+1),(0,r.jsx)("td",{children:o},c)}))},u)})):null})]}),(0,r.jsxs)("div",{className:"p-2 flex-row-center justify-between w-full",children:[(0,r.jsx)("div",{className:"flex-row-center items-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"perPage",children:"Rows per page"}),(0,r.jsxs)("select",{onChange:function(n){return o(Number(n.target.value))},value:e,name:"perPage",id:"perPage",style:{width:"min-content",border:"1px solid transparent",background:"transparent"},children:[(0,r.jsx)("option",{value:"2",children:2}),(0,r.jsx)("option",{value:"20",children:20}),(0,r.jsx)("option",{value:"50",children:50}),(0,r.jsx)("option",{value:"100",children:100})]})]})}),(0,r.jsxs)("div",{className:"flex-row-center justify-between gap-10",children:[p>=1?(0,r.jsx)(c.Z,{text:"Sebelumnya",size:"btnSmall",color:"btnInverse",onClick:function(){return d((function(n){return n-1}))}}):null,s?Array(s.length).fill(0).map((function(n,t){return(0,r.jsx)(c.Z,{text:"".concat(t+1),size:"btnSmall",color:t===p?"btnPrimary":"btnInverse",onClick:function(){return d(t)}},t)})):null,s&&s[p]&&p!==s.length-1?(0,r.jsx)(c.Z,{text:"Selanjutnya",size:"btnSmall",color:"btnInverse",onClick:function(){return d((function(n){return n+1}))}}):null]})]})]})}},7513:function(n,t,e){"use strict";e.r(t);var r=e(5893),u=e(7294),c=e(4952),o=e(4949);t.default=function(n){var t=(0,u.useState)([]),e=t[0],i=t[1];(0,u.useEffect)((function(){(0,o.RB)(3).then((function(n){i(n.data.data),console.log(e)})).catch((function(n){console.log(n)}))}),[]);var a=[{title:"Nomor",key:"id",dataType:"numbering"},{title:"ID",key:"id"},{title:"Nama",key:"name"},{title:"Description",key:"description"},{title:"Action",key:"id",render:function(n){return(0,r.jsx)("button",{onClick:function(){return console.log("id",n.id)},children:"Delete"})}}];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{columns:a,data:e})})}},9801:function(n,t,e){"use strict";var r=e(9669),u=e.n(r),c=e(7199),o=u().create({baseURL:"https://api-dev.inposery.com/api/v1/"});o.interceptors.request.use((function(n){var t=(0,c.LP)()||"";return n.headers={Authorization:t},n}),(function(n){return Promise.reject(n)})),t.Z=o},4949:function(n,t,e){"use strict";e.d(t,{gK:function(){return a},RB:function(){return s},O7:function(){return l},H6:function(){return f},nM:function(){return p},VS:function(){return d}});var r=e(4051),u=e.n(r),c=e(9801);function o(n,t,e,r,u,c,o){try{var i=n[c](o),a=i.value}catch(s){return void e(s)}i.done?t(a):Promise.resolve(a).then(r,u)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,u){var c=n.apply(t,e);function i(n){o(c,r,u,i,a,"next",n)}function a(n){o(c,r,u,i,a,"throw",n)}i(void 0)}))}}var a=function(){var n=i(u().mark((function n(t,e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.post("/products/".concat(t),e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=i(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("products/store/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=i(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("products/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=i(u().mark((function n(t,e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.delete("products/".concat(t,"/").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=i(u().mark((function n(t,e,r){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.put("products/".concat(t,"/").concat(e),r);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),d=function(){var n=i(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("products/avatar/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7199:function(n,t,e){"use strict";e.d(t,{o4:function(){return u},LP:function(){return c},TD:function(){return o}});var r=e(6245),u=function(n){return localStorage.setItem("TOKEN","Bearer ".concat(n))},c=function(){return localStorage.getItem("TOKEN")},o=function(n){return(0,r.Z)(n)}},8495:function(n){n.exports={btn:"Button_btn__gkj_d",btnPrimary:"Button_btnPrimary__sysIJ",btnDanger:"Button_btnDanger__0KUhW",btnInverse:"Button_btnInverse__UlyLw",btnSmall:"Button_btnSmall__wWDZa",btnMedium:"Button_btnMedium__qpXk0",btnBig:"Button_btnBig__KnJa5"}}},function(n){n.O(0,[135,675,774,888,179],(function(){return t=5325,n(n.s=t);var t}));var t=n.O();_N_E=t}]);