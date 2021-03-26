(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(168)),o={title:"Views"},c={unversionedId:"main-components/views",id:"main-components/views",isDocsHomePage:!1,title:"Views",description:"* Definition & Principles",source:"@site/docs/main-components/views.md",slug:"/main-components/views",permalink:"/docs/docs/main-components/views",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/main-components/views.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616802868,formattedLastUpdatedAt:"3/26/2021",sidebar:"docs",previous:{title:"Models",permalink:"/docs/docs/main-components/models"},next:{title:"Transformers",permalink:"/docs/docs/main-components/transformers"}},l=[{value:"Definition &amp; Principles",id:"definition--principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]},{value:"Namespaces",id:"namespaces",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#namespaces"},"Namespaces"))),Object(i.b)("a",{name:"definition-principles"}),Object(i.b)("h3",{id:"definition--principles"},"Definition & Principles"),Object(i.b)("p",null,"Read from the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Views"},Object(i.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Views)")),"."),Object(i.b)("a",{name:"rules"}),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Views SHOULD be created inside the Containers. And they will be automatically available for use in the Web Controllers.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"All Views are namespaced as the lower case of the Container name."))),Object(i.b)("a",{name:"folder-structure"}),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - WEB\n                    - Views\n                        - welcome.php\n                        - profile.php\n                        - ...\n")),Object(i.b)("a",{name:"code-samples"}),Object(i.b)("h3",{id:"code-sample"},"Code Sample"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Welcome page View")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome</title>\n</head>\n<body>\n<div class="container">\n    <div class="content">\n        <div class="title">Welcome</div>\n    </div>\n</div>\n</body>\n</html>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example: Usage From Controller")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Welcome\\UI\\WEB\\Controllers;\n\nuse App\\Ship\\Parents\\Controllers\\WebController;\n\nclass Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('just-welcome');\n    }\n}\n\n")),Object(i.b)("a",{name:"namespaces"}),Object(i.b)("h2",{id:"namespaces"},"Namespaces"),Object(i.b)("p",null,"By default all the Container Views are namespaced to the Container name."),Object(i.b)("p",null,"Example:"),Object(i.b)("p",null,"If a Container named ",Object(i.b)("em",{parentName:"p"},"Store")," has View ",Object(i.b)("inlineCode",{parentName:"p"},"say-hello"),", you can access the view like this ",Object(i.b)("inlineCode",{parentName:"p"},"view('store::just-welcome')"),". If you try to access it without the namespace ",Object(i.b)("inlineCode",{parentName:"p"},"view('just-welcome')"),", it will not find your View."))}p.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,d=m["".concat(o,".").concat(u)]||m[u]||b[u]||i;return t?a.a.createElement(d,c(c({ref:n},s),{},{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);