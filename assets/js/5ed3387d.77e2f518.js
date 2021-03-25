(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(108)),i={title:"Requirements",slug:"/"},c={unversionedId:"requirements",id:"requirements",isDocsHomePage:!1,title:"Requirements",description:"Software's",source:"@site/docs/requirements.md",slug:"/",permalink:"/docs/docs/",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/docs/requirements.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616630150,formattedLastUpdatedAt:"3/24/2021",sidebar:"docs",next:{title:"Installation",permalink:"/docs/docs/installation"}},l=[{value:"Software&#39;s",id:"softwares",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"softwares"},"Software's"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"GIT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"php.net"},"PHP")," >= 7.2 ",Object(o.b)("em",{parentName:"li"},"(7.4 is recommended)")),Object(o.b)("li",{parentName:"ul"},"PHP Extensions:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"OpenSSL PHP Extension"),Object(o.b)("li",{parentName:"ul"},"PDO PHP Extension"),Object(o.b)("li",{parentName:"ul"},"Mbstring PHP Extension"),Object(o.b)("li",{parentName:"ul"},"Tokenizer PHP Extension"),Object(o.b)("li",{parentName:"ul"},"BCMath PHP Extension ",Object(o.b)("em",{parentName:"li"},"(required when the Hash ID feature is enabled)")),Object(o.b)("li",{parentName:"ul"},"Intl Extension ",Object(o.b)("em",{parentName:"li"},"(required when you use the Localization Container)")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://getcomposer.org/download/"},"Composer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," ",Object(o.b)("em",{parentName:"li"},"(required for the API Docs generator feature)")),Object(o.b)("li",{parentName:"ul"},"Web Server ",Object(o.b)("em",{parentName:"li"},"(example: ",Object(o.b)("a",{parentName:"em",href:"https://www.nginx.com/"},"Nginx"),")")),Object(o.b)("li",{parentName:"ul"},"Cache Engine ",Object(o.b)("em",{parentName:"li"},"(example: ",Object(o.b)("a",{parentName:"em",href:"http://redis.io"},"Redis"),")")),Object(o.b)("li",{parentName:"ul"},"Database Engine ",Object(o.b)("em",{parentName:"li"},"(example: ",Object(o.b)("a",{parentName:"em",href:"https://www.mysql.com/"},"MySQL"),")")),Object(o.b)("li",{parentName:"ul"},"Queues Engine ",Object(o.b)("em",{parentName:"li"},"(example: ",Object(o.b)("a",{parentName:"em",href:"https://beanstalkd.github.io/"},"Beanstalkd"),")"))))}s.isMDXComponent=!0}}]);