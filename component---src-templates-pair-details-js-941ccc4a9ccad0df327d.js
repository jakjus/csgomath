(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[825],{2296:function(e,t,r){"use strict";r.d(t,{G:function(){return v}});var n=r(4694),a=r(5697),l=r.n(a),o=r(7294);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=p(t.slice(0,n)),l=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[a]=l,e}),{})}var b=!1;try{b=!0}catch(h){}function d(e){return n.parse.icon?n.parse.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?i({},e,t):{}}function v(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),a=r.icon,l=r.mask,o=r.symbol,s=r.className,c=r.title,p=r.titleId,y=d(a),h=g("classes",[].concat(m(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,l=e.inverse,o=e.border,s=e.listItem,c=e.flip,u=e.size,f=e.rotation,m=e.pull,p=(i(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":l,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),i(t,"fa-rotate-".concat(f),null!=f&&0!==f),i(t,"fa-pull-".concat(m),null!=m),i(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),m(s.split(" ")))),x=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),E=g("mask",d(l)),w=(0,n.icon)(y,u({},h,{},x,{},E,{symbol:o,title:c,titleId:p}));if(!w)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var j=w.abstract,k={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),O(j[0],k)}v.displayName="FontAwesomeIcon",v.propTypes={border:l().bool,className:l().string,mask:l().oneOfType([l().object,l().array,l().string]),fixedWidth:l().bool,inverse:l().bool,flip:l().oneOf(["horizontal","vertical","both"]),icon:l().oneOfType([l().object,l().array,l().string]),listItem:l().bool,pull:l().oneOf(["right","left"]),pulse:l().bool,rotation:l().oneOf([0,90,180,270]),size:l().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l().bool,symbol:l().oneOfType([l().bool,l().string]),title:l().string,transform:l().oneOfType([l().string,l().object]),swapOpacity:l().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[p(t)]=n}return e}),{attrs:{}}),o=n.style,s=void 0===o?{}:o,i=f(n,["style"]);return l.attrs.style=u({},l.attrs.style,{},s),t.apply(void 0,[r.tag,u({},l.attrs,{},i)].concat(m(a)))}.bind(null,o.createElement)},4752:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(7198),l=r(5444),o=r(3751),s=r(1870),i=r(2296),c=r(7190),u={boxShadow:"0 0.25rem 0.75rem rgba(0, 0, 0, .05  )"};t.default=function(e){var t,r=e.pageContext.r,f=function(e){var t="",r=e.toString();return e<0&&(r=r.slice(1),t="-"),t+(1==r.length?"$0.0"+r:2==r.length?"$0."+r:"$"+r.slice(0,-2)+"."+r.slice(-2))},m=function(e){return e.includes("|")&&'https://steamcommunity.com/market/search?q="'+e+'"'};return n.createElement(a.Z,null,n.createElement(o.Z,{title:r.name,description:r.asset_description.descriptions.map((function(e){return e.value})).join(", ")}),n.createElement("div",{style:{borderBottom:"1px solid #ebebeb"},class:"row pb-4"},n.createElement("div",{class:"col-sm-4"},n.createElement(s.G,{alt:"Image of "+r.name,image:(0,s.e)(r.image)})),n.createElement("div",{class:"col-sm-8"},n.createElement("div",{class:"card-body d-flex flex-column align-items-start"},n.createElement("strong",{class:"d-inline-block mb-2 text-primary"},r.asset_description.type),n.createElement("h4",{class:"mb-0"},r.name),n.createElement("div",{class:"mb-1 text-muted"},r.datetime),r.name.includes("Key")?n.createElement(n.Fragment,null,n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Fixed Sale Price: "),n.createElement("strong",null,f(249))),n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Market Sale Price: "),n.createElement("strong",null,r.sale_price_text))):n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Sale Price: "),n.createElement("strong",null,r.sale_price_text)),n.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},n.createElement("span",{class:"text-muted"}," Sell Listings: "),n.createElement("strong",null,r.sell_listings)),n.createElement(l.Link,{to:(t=r.name,"https://steamcommunity.com/market/listings/730/"+t),target:"_blank"},n.createElement("button",{type:"button",style:{fontSize:"0.85rem"},class:"my-2 btn btn-outline-dark"},"Check on "," ",n.createElement(i.G,{icon:c.vsm})))))),n.createElement("div",{class:"row mt-3 mb-5"},n.createElement("div",{class:"col"},n.createElement("h4",{style:{fontFamily:"DM Serif Display",fontSize:"1.2rem",lineHeight:"3rem"}},"Description"),n.createElement("ul",{class:"list-group",style:u},r.asset_description.descriptions.map((function(e){return e.value.replace(" ","")&&n.createElement(l.Link,{class:"link shadhover",to:m(e.value),target:"_blank"},n.createElement("li",{class:"list-group-item d-flex justify-content-between lh-condensed"},n.createElement("div",null,n.createElement("p",{style:{color:"#"+e.color},class:"my-0"},e.value)),n.createElement("span",{class:"text-muted"},e.total&&f(e.total))))}))))))}}}]);
//# sourceMappingURL=component---src-templates-pair-details-js-941ccc4a9ccad0df327d.js.map