(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(168)),o={title:"Data Caching"},c={unversionedId:"features/data-caching",id:"features/data-caching",isDocsHomePage:!1,title:"Data Caching",description:"- Enable / Disable Eloquent Query Caching",source:"@site/docs/features/data-caching.md",slug:"/features/data-caching",permalink:"/docs/docs/features/data-caching",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/data-caching.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616802868,formattedLastUpdatedAt:"3/26/2021",sidebar:"docs",previous:{title:"Requests Monitor",permalink:"/docs/docs/features/requests-monitor"},next:{title:"Pagination",permalink:"/docs/docs/features/pagination"}},s=[{value:"Enable / Disable Eloquent Query Caching",id:"enable--disable-eloquent-query-caching",children:[]},{value:"Change different caching settings",id:"change-different-caching-settings",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#change-different-caching-settings"},"Change different caching settings"))),Object(i.b)("a",{name:"enable-disable-eloquent-query-caching"}),Object(i.b)("h2",{id:"enable--disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"By default caching is disabled.")),Object(i.b)("p",null,"To enable it, go to ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/repository.php")," config file and set ",Object(i.b)("inlineCode",{parentName:"p"},"cache")," > ",Object(i.b)("inlineCode",{parentName:"p"},"enabled  => true"),", or set it from the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file using ",Object(i.b)("inlineCode",{parentName:"p"},"ELOQUENT_QUERY_CACHE"),"."),Object(i.b)("p",null,"More details can be found ",Object(i.b)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"here"),"."),Object(i.b)("p",null,"Users can skip the query caching and request new data by passing specific parameter to the Endpoint. Checkout the Query parameters page."),Object(i.b)("a",{name:"change-different-caching-settings"}),Object(i.b)("h2",{id:"change-different-caching-settings"},"Change different caching settings"),Object(i.b)("p",null,"You can use different cache setting for each repository."),Object(i.b)("p",null,"To set cache settings on each repository, first the caching must be enabled, second you need to set some properties on the repository class to override the default values."),Object(i.b)("p",null,"For an example look at the ",Object(i.b)("inlineCode",{parentName:"p"},"app/Containers/Countries/Data/Repositories/CountryRepository.php")," class. For more details about all the properties refer to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"the L5 repository package documentation"),"."),Object(i.b)("p",null,"Note: you don't need to use the ",Object(i.b)("inlineCode",{parentName:"p"},"CacheableRepository")," trait or implement the ",Object(i.b)("inlineCode",{parentName:"p"},"CacheableInterface")," since they both exist on the Abstract repository class (",Object(i.b)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),")."))}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);