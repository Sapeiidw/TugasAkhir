(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19],{8798:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toko/[id]/produk/[pid]",function(){return r(412)}])},412:function(n,t,r){"use strict";r.r(t);var e=r(5893),u=r(1163),c=r(7294),o=r(4949);t.default=function(n){var t=(0,u.useRouter)(),r=t.query.pid,a=(0,c.useState)([]),i=a[0],s=a[1];return(0,c.useEffect)((function(){t.isReady&&(0,o.O7)(r).then((function(n){s(n.data.data)})).catch((function(n){console.log(n)}))}),[t.isReady]),(0,e.jsxs)("div",{children:["Single ",r," ",JSON.stringify(i)]})}},9801:function(n,t,r){"use strict";var e=r(9669),u=r.n(e),c=r(7199),o=u().create({baseURL:"https://api-dev.inposery.com/api/v1/"});o.interceptors.request.use((function(n){var t=(0,c.LP)()||"";return n.headers={Authorization:t},n}),(function(n){return Promise.reject(n)})),t.Z=o},4949:function(n,t,r){"use strict";r.d(t,{gK:function(){return i},RB:function(){return s},O7:function(){return f},H6:function(){return p},nM:function(){return d},VS:function(){return v}});var e=r(4051),u=r.n(e),c=r(9801);function o(n,t,r,e,u,c,o){try{var a=n[c](o),i=a.value}catch(s){return void r(s)}a.done?t(i):Promise.resolve(i).then(e,u)}function a(n){return function(){var t=this,r=arguments;return new Promise((function(e,u){var c=n.apply(t,r);function a(n){o(c,e,u,a,i,"next",n)}function i(n){o(c,e,u,a,i,"throw",n)}a(void 0)}))}}var i=function(){var n=a(u().mark((function n(t,r){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.post("/products/".concat(t),r);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),s=function(){var n=a(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("products/store/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=a(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("products/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=a(u().mark((function n(t,r){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.delete("products/".concat(t,"/").concat(r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=a(u().mark((function n(t,r,e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.put("products/".concat(t,"/").concat(r),e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),v=function(){var n=a(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("products/avatar/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7199:function(n,t,r){"use strict";r.d(t,{o4:function(){return u},LP:function(){return c},TD:function(){return o}});var e=r(6245),u=function(n){return localStorage.setItem("TOKEN","Bearer ".concat(n))},c=function(){return localStorage.getItem("TOKEN")},o=function(n){return(0,e.Z)(n)}},1163:function(n,t,r){n.exports=r(387)}},function(n){n.O(0,[135,774,888,179],(function(){return t=8798,n(n.s=t);var t}));var t=n.O();_N_E=t}]);