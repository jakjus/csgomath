(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{t3tn:function(e,t,r){"use strict";r.r(t);var n=r("HaE+"),a=r("o0o1"),l=r.n(a),o=(r("ToJy"),r("q1tI")),s=r.n(o),c=r("Bl7J"),i=(r("XZBW"),r("mxg0"),r("wd/R")),u=r.n(i),f=r("Wbzz"),m=r("vrFN"),p=(r("E9XD"),r("7O5W")),y=r("17x9"),b=r.n(y);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function w(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=x(t.slice(0,n)),l=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[a]=l,e}),{})}var j=!1;try{j=!0}catch(I){}function k(e){return p.parse.icon?p.parse.icon(e):null===e?null:"object"===d(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function S(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?g({},e,t):{}}function P(e){var t=e.forwardedRef,r=O(e,["forwardedRef"]),n=r.icon,a=r.mask,l=r.symbol,o=r.className,s=r.title,c=r.titleId,i=k(n),u=S("classes",[].concat(E(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,l=e.inverse,o=e.border,s=e.listItem,c=e.flip,i=e.size,u=e.rotation,f=e.pull,m=(g(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":l,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(i),null!=i),g(t,"fa-rotate-".concat(u),null!=u&&0!==u),g(t,"fa-pull-".concat(f),null!=f),g(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),E(o.split(" ")))),f=S("transform","string"==typeof r.transform?p.parse.transform(r.transform):r.transform),m=S("mask",k(a)),y=Object(p.icon)(i,v({},u,{},f,{},m,{symbol:l,title:s,titleId:c}));if(!y)return function(){var e;!j&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",i),null;var b=y.abstract,d={ref:t};return Object.keys(r).forEach((function(e){P.defaultProps.hasOwnProperty(e)||(d[e]=r[e])})),z(b[0],d)}P.displayName="FontAwesomeIcon",P.propTypes={border:b.a.bool,className:b.a.string,mask:b.a.oneOfType([b.a.object,b.a.array,b.a.string]),fixedWidth:b.a.bool,inverse:b.a.bool,flip:b.a.oneOf(["horizontal","vertical","both"]),icon:b.a.oneOfType([b.a.object,b.a.array,b.a.string]),listItem:b.a.bool,pull:b.a.oneOf(["right","left"]),pulse:b.a.bool,rotation:b.a.oneOf([0,90,180,270]),size:b.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.a.bool,symbol:b.a.oneOfType([b.a.bool,b.a.string]),title:b.a.string,transform:b.a.oneOfType([b.a.string,b.a.object]),swapOpacity:b.a.bool},P.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var z=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=w(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[x(t)]=n}return e}),{attrs:{}}),o=n.style,s=void 0===o?{}:o,c=O(n,["style"]);return l.attrs.style=v({},l.attrs.style,{},s),t.apply(void 0,[r.tag,v({},l.attrs,{},c)].concat(E(a)))}.bind(null,s.a.createElement),A=r("8tEE"),N={boxShadow:"0 0.25rem 0.75rem rgba(0, 0, 0, .05  )"};t.default=function(e){var t=e.pageContext.r,r=Object(o.useState)(null),a=r[0],s=r[1];Object(o.useEffect)((function(){function e(){return(e=Object(n.a)(l.a.mark((function e(){var r,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="case",t.name.includes("Key")&&(r="key"),e.next=4,fetch("https://host.jakjus.com:3010/api/"+r+"_description/"+t.id);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,s(a.data.sort((function(e,t){return e.ind-t.ind})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i,p=function(e){var t="",r=e.toString();return e<0&&(r=r.slice(1),t="-"),t+(1==r.length?"$0.0"+r:2==r.length?"$0."+r:"$"+r.slice(0,-2)+"."+r.slice(-2))},y=function(e){return e.includes("|")&&'https://steamcommunity.com/market/search?q="'+e+'"'};return o.createElement(c.a,null,a&&o.createElement(m.a,{title:t.name,description:a.map((function(e){return e.value})).join(", ")}),o.createElement("div",{style:{borderBottom:"1px solid #ebebeb"},class:"row pb-4"},o.createElement("div",{class:"col-sm-4"},o.createElement("img",{alt:"Image of "+t.name,src:t.icon_url,image:t.icon_url,style:{width:"100%"}})),o.createElement("div",{class:"col-sm-8"},o.createElement("div",{class:"card-body d-flex flex-column align-items-start"},o.createElement("strong",{class:"d-inline-block mb-2 text-primary"},t.name.includes("Key")?"Key":"Case"),o.createElement("h4",{class:"mb-0"},t.name),t.name.includes("Key")?o.createElement(o.Fragment,null,o.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},o.createElement("span",{class:"text-muted"}," Fixed Sale Price: "),o.createElement("strong",null,p(250)))):o.createElement(o.Fragment,null,o.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},o.createElement("span",{class:"text-muted"}," Estimated Value: "),o.createElement("strong",null,p(t.prices[t.prices.length-1].total))),o.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},o.createElement("span",{class:"text-muted"}," Sale Price: "),o.createElement("strong",null,p(t.prices[t.prices.length-1].sale_price))),o.createElement("p",{style:{fontSize:"0.9rem"},class:"card-text mb-auto"},o.createElement("span",{class:"text-muted"},u.a.unix(t.prices[t.prices.length-1].timestamp).fromNow()))),o.createElement(f.Link,{to:(i=t.name,"https://steamcommunity.com/market/listings/730/"+i),target:"_blank"},o.createElement("button",{type:"button",style:{fontSize:"0.85rem"},class:"my-2 btn btn-outline-dark"},"Check on "," ",o.createElement(P,{icon:A.a})))))),o.createElement("div",{class:"row mt-3 mb-5"},o.createElement("div",{class:"col"},o.createElement("h4",{style:{fontFamily:"DM Serif Display",fontSize:"1.2rem",lineHeight:"3rem"}},"Description"),o.createElement("ul",{class:"list-group",style:N},a&&a.map((function(e){return![""," "].includes(e.value)&&o.createElement(f.Link,{class:"link shadhover",to:y(e.value),target:"_blank"},o.createElement("li",{class:"list-group-item d-flex justify-content-between lh-condensed"},o.createElement("div",null,o.createElement("p",{style:{color:"#"+("NULL"==e.color?"99ccff":e.color)},class:"my-0"},e.value)),e.prices&&e.prices.length>0&&o.createElement("span",{class:"text-muted"},e.prices[e.prices.length-1].total&&p(e.prices[e.prices.length-1].total))))}))))))}}}]);
//# sourceMappingURL=component---src-templates-details-js-d329ea66f34b9bb2bd17.js.map