"use strict";(self.webpackChunkgatsby_static_template=self.webpackChunkgatsby_static_template||[]).push([[223],{8223:function(t,e,n){n.r(e),n.d(e,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(3723),a=n(7294),i=n(7762);n(2369);let r;const c=new WeakMap,s=navigator.connection||navigator.mozConnection||navigator.webkitConnection,l=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(t,e){t.style.opacity="1",e&&(e.style.opacity="0")}function d(t,e,n,o,a,i){const r=t.querySelector("[data-main-image]"),c=t.querySelector("[data-placeholder-image]"),s=n.has(e);function l(t){this.removeEventListener("load",l);const e=t.currentTarget,n=new Image;n.src=e.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==a||a({wasCached:s})})).catch((t=>{u(this,c),null==i||i(t)})):(u(this,c),null==a||a({wasCached:s}))}return r.addEventListener("load",l),null==o||o({wasCached:s}),Array.from(r.parentElement.children).forEach((t=>{const e=t.getAttribute("data-src"),n=t.getAttribute("data-srcset");e&&(t.removeAttribute("data-src"),t.setAttribute("src",e)),n&&(t.removeAttribute("data-srcset"),t.setAttribute("srcset",n))})),n.add(e),r.complete&&l.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",l)}}function g(t,e,a,i,l,u,g){if(!(0,o.h)()){let o;const f=(h=()=>{o=d(t,e,a,l,u,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((t=>{t.forEach((t=>{var e;t.isIntersecting&&(null==(e=c.get(t.target))||e(),c.delete(t.target))}))}),{rootMargin:"4g"!==(null==s?void 0:s.effectiveType)||null!=s&&s.saveData?"2500px":"1250px"})),function(t){return c.set(t,h),r.observe(t),function(){r&&t&&(c.delete(t),r.unobserve(t))}}):function(){return h(),function(){}}),v=f(t);var b,m;return"objectFit"in document.documentElement.style||(t.dataset.objectFit=null!=(b=i.objectFit)?b:"cover",t.dataset.objectPosition=""+(null!=(m=i.objectPosition)?m:"50% 50%"),async function(t){"objectFitPolyfill"in window||await n.e(843).then(n.t.bind(n,4843,23)),window.objectFitPolyfill(t)}(t)),()=>{o&&o(),v()}}var h;return d(t,e,a,l,u,g)}function b(t){let{image:e,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:s,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:b="cover"}=t,m=(0,o._)(t,l);const{width:h,height:f,layout:v,images:w,placeholder:y,backgroundColor:p}=e;return u=(0,o.a)({objectFit:b,objectPosition:d,backgroundColor:g},u),(0,i.renderToStaticMarkup)(a.createElement(o.L,{layout:v,width:h,height:f},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,v,h,f,p,b,d))),a.createElement(o.M,(0,o.a)({},m,{width:h,height:f,className:s},(0,o.b)(r,c,w,n,u)))))}}}]);
//# sourceMappingURL=223-b6125377810b19966e90.js.map