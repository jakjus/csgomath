(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[727],{5224:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(7294),a=r(7198),l=r(5444),o=r(3751),s=r(154),i=r(4694),c=r(5697),u=r.n(c);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function v(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=g(t.slice(0,n)),l=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[a]=l,e}),{})}var O=!1;try{O=!0}catch(P){}function h(e){return i.parse.icon?i.parse.icon(e):null===e?null:"object"===m(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}function E(e){var t=e.forwardedRef,r=b(e,["forwardedRef"]),n=r.icon,a=r.mask,l=r.symbol,o=r.className,s=r.title,c=r.titleId,u=h(n),m=x("classes",[].concat(d(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,l=e.inverse,o=e.border,s=e.listItem,i=e.flip,c=e.size,u=e.rotation,m=e.pull,p=(f(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":l,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===i||"both"===i,"fa-flip-vertical":"vertical"===i||"both"===i},"fa-".concat(c),null!=c),f(t,"fa-rotate-".concat(u),null!=u&&0!==u),f(t,"fa-pull-".concat(m),null!=m),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),d(o.split(" ")))),p=x("transform","string"==typeof r.transform?i.parse.transform(r.transform):r.transform),g=x("mask",h(a)),v=(0,i.icon)(u,y({},m,{},p,{},g,{symbol:l,title:s,titleId:c}));if(!v)return function(){var e;!O&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var j=v.abstract,k={ref:t};return Object.keys(r).forEach((function(e){E.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),w(j[0],k)}E.displayName="FontAwesomeIcon",E.propTypes={border:u().bool,className:u().string,mask:u().oneOfType([u().object,u().array,u().string]),fixedWidth:u().bool,inverse:u().bool,flip:u().oneOf(["horizontal","vertical","both"]),icon:u().oneOfType([u().object,u().array,u().string]),listItem:u().bool,pull:u().oneOf(["right","left"]),pulse:u().bool,rotation:u().oneOf([0,90,180,270]),size:u().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:u().bool,symbol:u().oneOfType([u().bool,u().string]),title:u().string,transform:u().oneOfType([u().string,u().object]),swapOpacity:u().bool},E.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=v(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[g(t)]=n}return e}),{attrs:{}}),o=n.style,s=void 0===o?{}:o,i=b(n,["style"]);return l.attrs.style=y({},l.attrs.style,{},s),t.apply(void 0,[r.tag,y({},l.attrs,{},i)].concat(d(a)))}.bind(null,n.createElement),j=r(7190),k={boxShadow:"0 0.25rem 0.75rem rgba(0, 0, 0, .05  )"},S=function(e){var t,r=e.pageContext.r,i=function(e){return e.includes("|")&&'https://steamcommunity.com/market/search?q="'+e+'"'};return n.createElement(a.Z,null,n.createElement(o.Z,{title:r.name,description:r.asset_description.descriptions.map((function(e){return e.value})).join(", ")}),n.createElement("div",{style:{borderBottom:"1px solid #ebebeb"},class:"row pb-4"},n.createElement("div",{class:"col-sm-4"},n.createElement(s.G,{alt:"Image of "+r.name,image:(0,s.e)(r.image)})),n.createElement("div",{class:"col-sm-8"},n.createElement("div",{class:"card-body d-flex flex-column align-items-start"},n.createElement("strong",{class:"d-inline-block mb-2 text-primary"},r.asset_description.type),n.createElement("h4",{class:"mb-0"},r.name),n.createElement("div",{class:"mb-1 text-muted"},r.datetime),r.name.includes("Key")?n.createElement(n.Fragment,null,n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Fixed Sale Price: "),n.createElement("strong",null,"$2.50")),n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Market Sale Price: "),n.createElement("strong",null,r.sale_price_text))):n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Sale Price: "),n.createElement("strong",null,r.sale_price_text)),n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Sell Listings: "),n.createElement("strong",null,r.sell_listings)),n.createElement(l.Link,{to:(t=r.name,"https://steamcommunity.com/market/listings/730/"+t),target:"_blank"},n.createElement("button",{type:"button",style:{fontSize:"0.85rem"},class:"my-2 btn btn-outline-dark"},"Check on "," ",n.createElement(E,{icon:j.vsm})))))),n.createElement("div",{class:"row mt-3 mb-5"},n.createElement("div",{class:"col"},n.createElement("h4",{style:{fontFamily:"DM Serif Display",fontSize:"1.2rem",lineHeight:"3rem"}},"Description"),n.createElement("ul",{class:"list-group",style:k},r.asset_description.descriptions.map((function(e){return e.value.replace(" ","")&&n.createElement(l.Link,{to:i(e.value),target:"_blank"},n.createElement("li",{class:"shadhover list-group-item d-flex justify-content-between lh-condensed"},n.createElement("div",null,n.createElement("p",{style:{color:"#"+e.color},class:"my-0"},e.value)),n.createElement("span",{class:"text-muted"},e.total&&(t=e.total,r="",a=t.toString(),t<0&&(a=a.slice(1),r="-"),r+(1==a.length?"$0.0"+a:2==a.length?"$0."+a:"$"+a.slice(0,-2)+"."+a.slice(-2))))));var t,r,a}))))))}}}]);
//# sourceMappingURL=component---src-templates-details-js-bdc708b4ba9e132fd29a.js.map