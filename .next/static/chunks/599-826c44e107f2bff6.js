(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{4453:function(e,n,r){"use strict";var t=r(5893),a=r(5675),i=(r(7294),r(8495)),s=r.n(i);n.Z=function(e){return(0,t.jsxs)("button",{type:e.type,className:"".concat(s().btn,"  ").concat(e.size," ").concat(e.color),onClick:e.onClick,children:[e.icon&&(0,t.jsx)(a.default,{src:e.icon,alt:"google",layout:"fixed",width:"24px",height:"24px",className:s().icon}),e.text]})}},4578:function(e,n,r){"use strict";var t=r(5893),a=r(5675),i=r(1664),s=(r(7294),r(8495)),o=r.n(s);n.Z=function(e){return(0,t.jsx)(i.default,{href:e.href,children:(0,t.jsxs)("a",{target:e.target,rel:e.target&&"noreferrer",className:"".concat(o().btn,"  ").concat(e.size," ").concat(e.color," ").concat(e.className),children:[e.icon&&(0,t.jsx)(a.default,{src:e.icon,alt:"google",layout:"fixed",width:"24px",height:"24px",className:o().icon}),e.text]})})}},8270:function(e,n,r){"use strict";var t=r(5893),a=(r(7294),r(9432)),i=r(3293),s=r.n(i);n.Z=function(e){return e.data?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"".concat(s().planCard," ").concat(e.recomend&&s().planCardRecomend),children:[(0,t.jsx)("div",{className:s().planTitle,children:e.data.name}),(0,t.jsxs)("ul",{className:s().planFeatures,children:[(0,t.jsx)("li",{children:"Lorem ipsum dolor sit amet."}),(0,t.jsx)("li",{children:"Lorem ipsum dolor sit amet."}),(0,t.jsx)("li",{children:"Lorem ipsum dolor sit amet."}),(0,t.jsx)("li",{children:"Lorem ipsum dolor sit amet."}),(0,t.jsx)("li",{children:"Lorem ipsum dolor sit amet."})]}),(0,t.jsxs)("p",{className:s().planPrice,children:["Rp.",(0,t.jsx)("span",{children:e.data.price}),"/",e.data.unit]}),(0,t.jsx)(a.zx,{size:"btnBig",color:"btnPrimary",onClick:e.onClick,text:"Choose"})]})}):(0,t.jsx)(t.Fragment,{})}},2683:function(e,n,r){"use strict";var t=r(5893),a=r(1664);r(7294);n.Z=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("img",{src:"/icons/InPOSery.svg",alt:"guestLogo",className:"guestLogo"})}),e.children]})}},9945:function(e,n,r){"use strict";var t=r(5893),a=(r(7294),r(5163)),i=r.n(a);n.Z=function(e){return e.visible?(0,t.jsx)("div",{className:i().modalContainer,children:(0,t.jsx)("div",{className:i().modalCentered,children:(0,t.jsxs)("div",{className:i().modal,children:[(0,t.jsx)("div",{className:i().modalClose,onClick:function(){return e.onCancel()},children:"X"}),(0,t.jsx)("div",{className:i().modalHeader,children:(0,t.jsxs)("div",{className:i().modalTitle,children:[e.title," "]})}),(0,t.jsx)("div",{className:i().modalBody,children:e.children}),(0,t.jsx)("div",{children:e.footer})]})})}):(0,t.jsx)(t.Fragment,{})}},4952:function(e,n,r){"use strict";var t=r(5893),a=r(7294),i=r(4453);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n=(0,a.useState)(2),r=n[0],s=n[1],c=(0,a.useState)(),l=c[0],d=c[1],u=(0,a.useState)(0),f=u[0],m=u[1];return(0,a.useEffect)((function(){!function(){for(var n=o(e.data),t=[],a=r;n.length>0;)t.push(n.splice(0,a));d(t)}()}),[e.data,r]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:e.columns.map((function(e,n){return(0,t.jsx)("th",{children:e.title},n)}))})}),(0,t.jsx)("tbody",{children:l&&l[f]?l[f].map((function(n,a){return(0,t.jsx)("tr",{children:e.columns.map((function(e,i){var s=n[e.key];return e.render&&(s=e.render(n,a)),"numbering"===e.dataType&&(s=f*r+a+1),(0,t.jsx)("td",{children:s},i)}))},a)})):null})]}),(0,t.jsxs)("div",{className:"p-2 flex-row-center justify-between w-full",children:[(0,t.jsx)("div",{className:"flex-row-center items-center",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"perPage",children:"Rows per page"}),(0,t.jsxs)("select",{onChange:function(e){return s(Number(e.target.value))},value:r,name:"perPage",id:"perPage",style:{width:"min-content",border:"1px solid transparent",background:"transparent"},children:[(0,t.jsx)("option",{value:"2",children:2}),(0,t.jsx)("option",{value:"20",children:20}),(0,t.jsx)("option",{value:"50",children:50}),(0,t.jsx)("option",{value:"100",children:100})]})]})}),(0,t.jsxs)("div",{className:"flex-row-center justify-between gap-10",children:[f>=1?(0,t.jsx)(i.Z,{text:"Sebelumnya",size:"btnSmall",color:"btnInverse",onClick:function(){return m((function(e){return e-1}))}}):null,l?Array(l.length).fill(0).map((function(e,n){return(0,t.jsx)(i.Z,{text:"".concat(n+1),size:"btnSmall",color:n===f?"btnPrimary":"btnInverse",onClick:function(){return m(n)}},n)})):null,l&&l[f]&&f!==l.length-1?(0,t.jsx)(i.Z,{text:"Selanjutnya",size:"btnSmall",color:"btnInverse",onClick:function(){return m((function(e){return e+1}))}}):null]})]})]})}},9432:function(e,n,r){"use strict";r.d(n,{zx:function(){return k.Z},ZP:function(){return T.Z},Zb:function(){return u},A:function(){return z},Lt:function(){return o},$_:function(){return $},KX:function(){return O.Z},II:function(){return F},Ar:function(){return B},M0:function(){return c.Z},W_:function(){return G},dV:function(){return V},_b:function(){return f.Z},Yw:function(){return K},Zh:function(){return C},Kp:function(){return P},JH:function(){return I},Ak:function(){return _},Ph:function(){return D},r7:function(){return S},p6:function(){return N},iA:function(){return q.Z},VQ:function(){return J}});var t=r(5893),a=r(7294),i=r(4660),s=r.n(i),o=function(e){var n=(0,a.useState)(!1),r=n[0],i=n[1],o=function(){return i(!r)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("li",{className:s().faqLi,onFocus:function(){return o()},onBlur:function(){return o()},tabIndex:0,children:[(0,t.jsxs)("div",{className:s().faqQuestion,children:[e.question,(0,t.jsxs)("div",{className:r?s().faqIconActive:s().faqIcon,children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsx)("div",{className:"".concat(s().faqAnswer," ").concat(r&&s().faqAnswerOpen),children:e.answer})]})})};var c=r(9945),l=r(3293),d=r.n(l),u=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:d().card,children:[(0,t.jsx)("img",{src:e.icon,className:d().cardIcon}),(0,t.jsx)("h1",{className:d().cardTitle,children:e.title}),(0,t.jsx)("p",{className:d().cardSubtitle,children:e.subtitle})]})})},f=r(8270),m=r(5675),_=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:d().reviewCard,children:[(0,t.jsx)("div",{className:d().reviewImg,children:(0,t.jsx)(m.default,{src:e.img,layout:"fill",objectFit:"cover"})}),(0,t.jsx)("div",{className:d().reviewer,children:e.reviewer}),(0,t.jsxs)("div",{className:"flex-row-center justify-between",children:[(0,t.jsx)("div",{className:d().reviewerJob,children:e.job}),(0,t.jsx)(I,{disable:!0,ratings:e.rating})]}),(0,t.jsx)("div",{className:d().reviewerText,children:e.text})]})})},h=r(4051),x=r.n(h),g=r(1664),v=r(1163),p=r(5926),j=r(3401),b=r.n(j);function y(e,n,r,t,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void r(l)}o.done?n(c):Promise.resolve(c).then(t,a)}var N=function(e){var n=function(){var n,r=(n=x().mark((function n(){return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.U8)(e.id);case 2:v.default.reload();case 3:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function s(e){y(i,t,a,s,o,"next",e)}function o(e){y(i,t,a,s,o,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,t.jsxs)("div",{className:b().card,children:[(0,t.jsxs)("div",{className:b().cardOption,children:[(0,t.jsx)("img",{src:"/icons/titik3.svg",alt:""}),(0,t.jsx)("div",{className:b().cardOptionItem,children:(0,t.jsxs)("button",{onClick:function(){return n()},children:["Hapus ",e.id]})})]}),(0,t.jsx)("img",{src:"/icons/home.svg",className:b().cardIcon}),(0,t.jsx)(g.default,{href:e.link,children:(0,t.jsx)("a",{children:(0,t.jsx)("h1",{className:b().cardTitle,children:e.name})})}),(0,t.jsx)("p",{className:b().cardSubitle,children:e.address}),(0,t.jsx)("div",{className:b().cardProgress})]})},w=r(1799),L=r.n(w),I=function(e){var n=(0,a.useState)(e.ratings||0),r=n[0],i=n[1],s=(0,a.useState)(0),o=s[0],c=s[1],l=function(e){c(e)},d=function(){c(0)},u=function(e){i(e)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:L().ratings,children:e.disable?[1,2,3,4,5].map((function(e){return(0,t.jsx)(C,{index:e,rating:r},e)})):[1,2,3,4,5].map((function(e){return(0,t.jsx)(P,{index:e,rating:r,hoverRating:o,onMouseEnter:l,onMouseLeave:d,onSaveRating:u},e)}))})})},P=function(e){var n=(0,a.useMemo)((function(){return e.hoverRating>=e.index||!e.hoverRating&&e.rating>=e.index?"yellow":"none"}),[e.rating,e.hoverRating,e.index]);return(0,t.jsx)("div",{onMouseEnter:function(){return e.onMouseEnter(e.index)},onMouseLeave:function(){return e.onMouseLeave()},onClick:function(){return e.onSaveRating(e.index)},children:(0,t.jsx)(S,{fill:n})})},C=function(e){var n=(0,a.useMemo)((function(){return e.rating>=e.index?"yellow":"none"}),[e.rating,e.index]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(S,{fill:n})})},S=function(e){return(0,t.jsx)("svg",{fill:e.fill||"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})},k=r(4453),T=r(4578),A=r(2699),M=r.n(A),F=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:M().formGroup,children:[e.label&&(0,t.jsx)("label",{htmlFor:e.name,children:e.label}),(0,t.jsx)("input",{type:e.type,name:e.name,placeholder:e.placeholder,onChange:e.onChange,required:e.required,min:e.min,max:e.max,value:e.value})]})})},D=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:M().formGroup,children:[(0,t.jsx)("label",{htmlFor:e.name,children:e.label}),(0,t.jsxs)("div",{className:M().select,children:[(0,t.jsx)("select",{name:e.name,id:e.name,onChange:e.onChange,value:e.value,children:e.data.map((function(n,r){return(0,t.jsx)("option",{value:n[e.kValue?e.kValue:e.k],children:n[e.k]},r)}))}),(0,t.jsx)("div",{className:M().arrow,children:(0,t.jsx)(m.default,{alt:"arrow",src:"/icons/arrow-forward.svg",layout:"fill"})})]})]})})},q=r(4952),B=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{}),e.children,(0,t.jsx)($,{})]})},O=r(2683),Z=r(9111),R=r.n(Z),E=function(e){return e.visible?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("ul",{className:R().notificationBox,children:[(0,t.jsxs)("li",{className:R().notificationItem,children:[(0,t.jsx)("div",{className:R().circle}),(0,t.jsx)("a",{href:"#",className:R().notificationText,children:"Lorem ipsum dolor sit amet."}),(0,t.jsx)("p",{className:R().notificationDate,children:"1 jam"})]}),(0,t.jsxs)("li",{className:R().notificationItem,children:[(0,t.jsx)("div",{className:R().circle}),(0,t.jsx)("a",{href:"#",className:R().notificationText,children:"Lorem ipsum dolor sit amet."}),(0,t.jsx)("p",{className:R().notificationDate,children:"1 jam"})]}),(0,t.jsxs)("li",{className:R().notificationItem,children:[(0,t.jsx)("div",{className:R().circle}),(0,t.jsx)("a",{href:"#",className:R().notificationText,children:"Lorem ipsum dolor sit amet."}),(0,t.jsx)("p",{className:R().notificationDate,children:"1 jam"})]})]})}):(0,t.jsx)(t.Fragment,{})};function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function H(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,i=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);s=!0);}catch(c){o=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return U(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=function(e){var n=H(a.useState(!1),2),r=n[0],i=n[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("nav",{className:b().nav,children:[(0,t.jsxs)("div",{className:b().start,children:[(0,t.jsx)("div",{className:b().diamonds,children:(0,t.jsx)(m.default,{src:"/icons/diamonds.svg",alt:"logo",layout:"fill"})}),(0,t.jsx)("div",{className:b().logo,children:(0,t.jsx)(m.default,{src:"/icons/InPOSery.svg",alt:"logo",layout:"fill"})})]}),(0,t.jsxs)("div",{className:b().end,children:[(0,t.jsxs)("div",{className:b().notif,children:[(0,t.jsx)(m.default,{src:"/icons/bell.svg",alt:"logo",layout:"fill",onClick:function(){return i(!r)}}),(0,t.jsx)(E,{visible:r})]}),(0,t.jsx)("div",{className:b().profile})]})]}),(0,t.jsxs)("div",{className:b().sidebar,children:[(0,t.jsxs)("div",{className:b().sidebarTop,children:[(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:b().sidebarItems,children:[(0,t.jsx)("img",{src:"/icons/home.svg",alt:""}),"Home"]})}),(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:b().sidebarItems,children:[(0,t.jsx)("img",{src:"/icons/ntah.svg",alt:""}),"Home"]})}),(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:b().sidebarItems,children:[(0,t.jsx)("img",{src:"/icons/fileSetting.svg",alt:""}),"Home"]})})]}),(0,t.jsx)("div",{className:b().sidebarBottom,children:(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:b().sidebarItems,children:[(0,t.jsx)("img",{src:"/icons/questionCircle.svg",alt:""}),"F.A.Q"]})})})]}),(0,t.jsx)("main",{className:b().main,children:e.children})]})},W=r(7689),Q=r.n(W),G=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("nav",{className:Q().nav,children:(0,t.jsxs)("div",{className:"container flex-row-center justify-between",children:[(0,t.jsx)("img",{src:"/icons/InPOSery.svg",alt:"logo",className:"logo"}),(0,t.jsxs)("div",{className:Q().navLinks,children:[(0,t.jsx)(g.default,{href:"",children:(0,t.jsx)("a",{className:Q().navItem,children:"Home"})}),(0,t.jsx)(g.default,{href:"",children:(0,t.jsx)("a",{className:Q().navItem,children:"Feature"})}),(0,t.jsx)(g.default,{href:"",children:(0,t.jsx)("a",{className:Q().navItem,children:"Review"})}),(0,t.jsx)(g.default,{href:"",children:(0,t.jsx)("a",{className:Q().navItem,children:"Pricing"})})]}),(0,t.jsx)(g.default,{href:"/auth/signin",children:(0,t.jsx)("a",{className:"btn btnPrimary btnMedium",children:"Masuk"})})]})})})},J=function(e){var n=(0,a.useState)(!1),r=(n[0],n[1],(0,v.useRouter)());return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{}),(0,t.jsxs)("div",{className:b().sidebar,children:[(0,t.jsxs)("div",{className:b().sidebarTop,children:[(0,t.jsx)(g.default,{href:"/toko/".concat(r.query.id),children:(0,t.jsxs)("a",{className:"".concat("/toko/[id]"==r.pathname?b().active:""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/dashboard.svg",alt:""}),"dashboard"]})}),(0,t.jsx)(g.default,{href:"/toko/".concat(r.query.id,"/inventory"),children:(0,t.jsxs)("a",{className:"".concat("/toko/[id]/inventory"==r.pathname?b().active:""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/inventory.svg",alt:""}),"inventory"]})}),(0,t.jsx)(g.default,{href:"/toko/".concat(r.query.id,"/produk"),children:(0,t.jsxs)("a",{className:"".concat("/toko/[id]/produk"==r.pathname?b().active:""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/inventory.svg",alt:""}),"produk"]})}),(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:"".concat("/"==r.pathname?b().active:""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/transaksi.svg",alt:""}),"transaksi"]})}),(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:"".concat("/"==r.pathname?"active":""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/laporan.svg",alt:""}),"laporan"]})}),(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:"".concat("/"==r.pathname?"active":""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/manajemen.svg",alt:""}),"manajemen"]})}),(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:"".concat("/"==r.pathname?"active":""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/pengaturan.svg",alt:""}),"pengaturan"]})})]}),(0,t.jsx)("div",{className:b().sidebarBottom,children:(0,t.jsx)(g.default,{href:"/",children:(0,t.jsxs)("a",{className:"".concat("/"==r.pathname?"active":""," ").concat(b().sidebarItems),children:[(0,t.jsx)("img",{src:"/icons/questionCircle.svg",alt:""}),"F.A.Q"]})})})]}),(0,t.jsx)("main",{className:b().main,children:e.children})]})},K=function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{}),(0,t.jsx)("main",{children:e.children})]})},V=function(e){var n=(0,a.useState)(!1),r=n[0],i=n[1];return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("nav",{className:b().nav,children:[(0,t.jsxs)("div",{className:b().start,children:[(0,t.jsx)("div",{className:b().diamonds,children:(0,t.jsx)(m.default,{src:"/icons/diamonds.svg",alt:"logo",layout:"fill"})}),(0,t.jsx)("div",{className:b().logo,children:(0,t.jsx)(m.default,{src:"/icons/InPOSery.svg",alt:"logo",layout:"fill"})})]}),(0,t.jsxs)("div",{className:b().end,children:[(0,t.jsxs)("div",{className:b().notif,children:[(0,t.jsx)(m.default,{src:"/icons/bell.svg",alt:"logo",layout:"fill",onClick:function(){return i(!r)}}),(0,t.jsx)(E,{visible:r})]}),(0,t.jsx)("div",{className:b().profile})]})]})})},Y=r(3952),X=r.n(Y),$=function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("footer",{className:X().footer,children:(0,t.jsxs)("div",{className:"container relative",children:[(0,t.jsx)("p",{className:X().footerText,children:"\xa9 2021 Inposery. All rights reserved"}),(0,t.jsxs)("div",{className:X().footerSosmed,children:[(0,t.jsx)(g.default,{href:"",children:(0,t.jsx)("img",{src:"/icons/facebook.svg",alt:"Facebook"})}),(0,t.jsx)(g.default,{href:"",children:(0,t.jsx)("img",{src:"/icons/twitter.svg",alt:"Tweeter"})}),(0,t.jsx)(g.default,{href:"",children:(0,t.jsx)("img",{src:"/icons/instagram.svg",alt:"Instagram"})})]})]})})})}},8418:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,i=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);s=!0);}catch(c){o=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,s=(i=r(7294))&&i.__esModule?i:{default:i},o=r(6273),c=r(387),l=r(7190);var d={};function u(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;d[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,t=c.useRouter(),i=s.default.useMemo((function(){var n=a(o.resolveHref(t,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?o.resolveHref(t,e.as):i||r}}),[t,e.href,e.as]),f=i.href,m=i.as,_=e.children,h=e.replace,x=e.shallow,g=e.scroll,v=e.locale;"string"===typeof _&&(_=s.default.createElement("a",null,_));var p=(n=s.default.Children.only(_))&&"object"===typeof n&&n.ref,j=a(l.useIntersection({rootMargin:"200px"}),2),b=j[0],y=j[1],N=s.default.useCallback((function(e){b(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,b]);s.default.useEffect((function(){var e=y&&r&&o.isLocalURL(f),n="undefined"!==typeof v?v:t&&t.locale,a=d[f+"%"+m+(n?"%"+n:"")];e&&!a&&u(t,f,m,{locale:n})}),[m,f,y,v,r,t]);var w={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,i,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),n[a?"replace":"push"](r,t,{shallow:i,locale:c,scroll:s}))}(e,t,f,m,h,x,g,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(f)&&u(t,f,m,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof v?v:t&&t.locale,I=t&&t.isLocaleDomain&&o.getDomainLocale(m,L,t&&t.locales,t&&t.domainLocales);w.href=I||o.addBasePath(o.addLocale(m,L,t&&t.defaultLocale))}return s.default.cloneElement(n,w)};n.default=f},9801:function(e,n,r){"use strict";var t=r(9669),a=r.n(t),i=r(7199),s=a().create({baseURL:"https://api-dev.inposery.com/api/v1/"});s.interceptors.request.use((function(e){var n=(0,i.LP)()||"";return e.headers={Authorization:n},e}),(function(e){return Promise.reject(e)})),n.Z=s},7199:function(e,n,r){"use strict";r.d(n,{o4:function(){return a},LP:function(){return i},TD:function(){return s}});var t=r(6245),a=function(e){return localStorage.setItem("TOKEN","Bearer ".concat(e))},i=function(){return localStorage.getItem("TOKEN")},s=function(e){return(0,t.Z)(e)}},5926:function(e,n,r){"use strict";r.d(n,{z6:function(){return c},gg:function(){return l},h:function(){return d},U8:function(){return u}});var t=r(4051),a=r.n(t),i=r(9801);function s(e,n,r,t,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void r(l)}o.done?n(c):Promise.resolve(c).then(t,a)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(e){s(i,t,a,o,c,"next",e)}function c(e){s(i,t,a,o,c,"throw",e)}o(void 0)}))}}var c=function(){var e=o(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("stores",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("stores");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=o(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("stores/".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=o(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("stores/".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},2699:function(e){e.exports={formGroup:"Form_formGroup__zoYti",select:"Form_select__sN2HQ",arrow:"Form_arrow__IJNrw"}},8495:function(e){e.exports={btn:"Button_btn__gkj_d",btnPrimary:"Button_btnPrimary__sysIJ",btnDanger:"Button_btnDanger__0KUhW",btnInverse:"Button_btnInverse__UlyLw",btnSmall:"Button_btnSmall__wWDZa",btnMedium:"Button_btnMedium__qpXk0",btnBig:"Button_btnBig__KnJa5",btnFull:"Button_btnFull__iHF7t"}},3293:function(e){e.exports={card:"Cards_card__Igz_I",cardIcon:"Cards_cardIcon__JFUh9",cardTitle:"Cards_cardTitle__eeFlk",cardSubtitle:"Cards_cardSubtitle__nRvNS",planCard:"Cards_planCard__lvYQz",planTitle:"Cards_planTitle__A4WLU",planFeatures:"Cards_planFeatures__4nCxN",planPrice:"Cards_planPrice__Phrme",planCardRecomend:"Cards_planCardRecomend__Mw3Kb",reviewCard:"Cards_reviewCard___Gey8",reviewImg:"Cards_reviewImg__doAmw",reviewer:"Cards_reviewer__NRVYk",reviewerJob:"Cards_reviewerJob__fIWEG",reviewerText:"Cards_reviewerText__8RU_A"}},3401:function(e){e.exports={nav:"Dashboard_nav__V5DSl",start:"Dashboard_start__sh6ln",diamonds:"Dashboard_diamonds__apgrV",logo:"Dashboard_logo__CR8p8",end:"Dashboard_end__N7Gu6",notif:"Dashboard_notif__zkN0_",profile:"Dashboard_profile__DIwhm",sidebar:"Dashboard_sidebar__39qny",sidebarItems:"Dashboard_sidebarItems__tQ96H",active:"Dashboard_active__ByZwy",header:"Dashboard_header__aO7g4",headerSearch:"Dashboard_headerSearch__Qxgvy",emptyStore:"Dashboard_emptyStore__bibaD",main:"Dashboard_main__wjQdL",mainContent:"Dashboard_mainContent__3IzXa",card:"Dashboard_card__tAwsi",cardOption:"Dashboard_cardOption__03BoT",cardOptionItem:"Dashboard_cardOptionItem__OFg1O",cardIcon:"Dashboard_cardIcon__3l2yE",cardTitle:"Dashboard_cardTitle__SV_8I",cardSubtitle:"Dashboard_cardSubtitle__8G2AP",cardProgress:"Dashboard_cardProgress__sK9SM"}},3952:function(e){e.exports={footer:"Footer_footer__Tl1eP",footerText:"Footer_footerText__UQsE6",footerSosmed:"Footer_footerSosmed__qMZ6B"}},4660:function(e){e.exports={header:"LandingPage_header__OlWM9",headerText:"LandingPage_headerText__clYzo",title:"LandingPage_title__318KH",subtitle:"LandingPage_subtitle__OBlSX",headerArt:"LandingPage_headerArt__utA4y",longbox:"LandingPage_longbox__1GKJz",feature:"LandingPage_feature__EAGCI",featureTitle:"LandingPage_featureTitle__PfA17",featureSubtitle:"LandingPage_featureSubtitle__GxPrz",featureGrid:"LandingPage_featureGrid__Mhyd6",eclipse:"LandingPage_eclipse__36YAQ",eclipse1:"LandingPage_eclipse1__y7RVW",eclipse2:"LandingPage_eclipse2__t_THU",benefits:"LandingPage_benefits__foHvM",benefitsCard:"LandingPage_benefitsCard__G8voT",ilustration2:"LandingPage_ilustration2__nlBN9",faq:"LandingPage_faq__ICR_x",faqWrapper:"LandingPage_faqWrapper__7RYTu",faqTitle:"LandingPage_faqTitle__hDWGM",faqUl:"LandingPage_faqUl__HK371",faqLi:"LandingPage_faqLi__6pIDN",faqQuestion:"LandingPage_faqQuestion__O6Jb2",faqIcon:"LandingPage_faqIcon__NQMVb",faqIconActive:"LandingPage_faqIconActive__6XtA2",faqAnswer:"LandingPage_faqAnswer__eIZJg",faqAnswerOpen:"LandingPage_faqAnswerOpen__VfGXA",ilustration3:"LandingPage_ilustration3__2ay6P",plans:"LandingPage_plans__O64DD",plansTitle:"LandingPage_plansTitle__DCr0_",plansSubtitle:"LandingPage_plansSubtitle__N0eO9",plansWraper:"LandingPage_plansWraper__HQuIp",review:"LandingPage_review__ke3FO",reviewText:"LandingPage_reviewText__gt0ae",reviewTitle:"LandingPage_reviewTitle__Q88ti",reviewSubtitle:"LandingPage_reviewSubtitle__iSVJ1",reviewWraper:"LandingPage_reviewWraper__MQs2e",reviewControl:"LandingPage_reviewControl__uYQFZ",mobile:"LandingPage_mobile__oUW8_",mobileWraper:"LandingPage_mobileWraper__U1yGY",mobileTitle:"LandingPage_mobileTitle__UyPdz",mobileSubtitle:"LandingPage_mobileSubtitle__Mvu6a",mobileImg1:"LandingPage_mobileImg1__wX_p_",mobileImg2:"LandingPage_mobileImg2__T9ms_",prefooter:"LandingPage_prefooter__jHsCL",prefooterText:"LandingPage_prefooterText__puhJm",prefooterNav:"LandingPage_prefooterNav__TDe7s",prefooterNavItem:"LandingPage_prefooterNavItem__pUkro"}},5163:function(e){e.exports={modalContainer:"Modal_modalContainer__k4wTD",modalCentered:"Modal_modalCentered__Tq8Ut",modal:"Modal_modal__yDLSi",modalHeader:"Modal_modalHeader__JpDPJ",modalClose:"Modal_modalClose__7VUwh",modalBackButton:"Modal_modalBackButton__lyccm",modalBackButtton:"Modal_modalBackButtton__oH5v_",modalTitle:"Modal_modalTitle__sD4ZR",modalActionClose:"Modal_modalActionClose__4BR_U","modal-btn-x":"Modal_modal-btn-x__0wn2B",modalBody:"Modal_modalBody__10EAY",modalFooter:"Modal_modalFooter__Jum1J","modal-btn-close":"Modal_modal-btn-close__9LQee","modal-btn-action":"Modal_modal-btn-action__HafYg",alertContainer:"Modal_alertContainer__FPlE8",alert:"Modal_alert__63uCV",circle:"Modal_circle__Y4gWi",text:"Modal_text__HqK6z"}},7689:function(e){e.exports={nav:"Navigation_nav__4Et7T",navLinks:"Navigation_navLinks__DCEuw",navItem:"Navigation_navItem__W_Tha"}},9111:function(e){e.exports={notificationBox:"Notification_notificationBox__rrPyE",notificationItem:"Notification_notificationItem__dwshI",notificationText:"Notification_notificationText__YTphL",notificationDate:"Notification_notificationDate__SLWIy",circle:"Notification_circle__VVm__"}},1799:function(e){e.exports={ratings:"Ratings_ratings__DXI2T"}},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)}}]);