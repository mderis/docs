(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(168)),i={title:"Containers Installer"},l={unversionedId:"miscellaneous/container-installer",id:"miscellaneous/container-installer",isDocsHomePage:!1,title:"Containers Installer",description:"- Containers",source:"@site/docs/miscellaneous/container-installer.md",slug:"/miscellaneous/container-installer",permalink:"/docs/docs/miscellaneous/container-installer",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/miscellaneous/container-installer.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616802868,formattedLastUpdatedAt:"3/26/2021",sidebar:"docs",previous:{title:"Tasks Queuing",permalink:"/docs/docs/miscellaneous/tasks-queuing"},next:{title:"Postman Environment",permalink:"/docs/docs/miscellaneous/postman"}},c=[],p={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#containers"},"Containers"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#downloading-and-installing-3rdPartyContainers"},"Downloading and Installing 3rd Party Containers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#developing-a-container"},"Developing a Container"))))),Object(r.b)("a",{name:"containers"}),"## Containers",Object(r.b)("p",null,"Apiato ships with a few pre-defined and pre-configured containers. However, other developers may provide additional\nfeatures in form of a respective container. This section explains, how so called ",Object(r.b)("inlineCode",{parentName:"p"},"3rd party containers")," may be\nautomatically downloaded and installed to your specific web application."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note that this feature is only available for apiato > 4.1.3")),Object(r.b)("a",{name:"downloading-and-installing-3rdPartyContainers"}),"### Downloading and Installing 3rd Party Containers",Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A curated list of awesome Apiato containers\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/awesome-apiato"},"https://github.com/apiato/awesome-apiato"))),Object(r.b)("p",null,"In order to use a specific container that is developed by a 3rd party developer, apiato provides an easy-to-use solution\nfor downloading, installing and continuously updating containers from 3rd party developers."),Object(r.b)("p",null,"As an application developer, you simply need to include the respective ",Object(r.b)("inlineCode",{parentName:"p"},"vendor/project")," to the\n",Object(r.b)("inlineCode",{parentName:"p"},"composer.json")," file within the ",Object(r.b)("inlineCode",{parentName:"p"},"app/Containers")," folder."),Object(r.b)("p",null,"For example, the respective ",Object(r.b)("inlineCode",{parentName:"p"},"/app/Containers/composer.json")," file may look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "apiato/containers",\n  "description": "Composer file to include 3rd party containers.",\n  "require": {\n    "johannesschobel/apiato-null" : "dev-master"\n  }\n}\n')),Object(r.b)("p",null,"You just need to call ",Object(r.b)("inlineCode",{parentName:"p"},"composer update")," in order to install the respective packages. The package (e.g., the container)\n",Object(r.b)("inlineCode",{parentName:"p"},"johannesschobel/apiato-null")," is then installed to the ",Object(r.b)("inlineCode",{parentName:"p"},"/app/Container")," folder. However, the developer of the package\nneeds to follow some basic guidelines listed below."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Warning: ",Object(r.b)("strong",{parentName:"p"},"Do not")," modify content within a downloaded container, as it will be overwritten if you call ",Object(r.b)("inlineCode",{parentName:"p"},"composer update"),".")),Object(r.b)("a",{name:"developing-a-container"}),"### Developing a Container",Object(r.b)("p",null,"Developing a container that can be used by others is quite easy. Basically, you can ",Object(r.b)("inlineCode",{parentName:"p"},"extract")," already existing functionality\nin a new container and provide the features. Note that you need to upload the container to ",Object(r.b)("inlineCode",{parentName:"p"},"GitHub")," and then release\nit on ",Object(r.b)("inlineCode",{parentName:"p"},"Packagist")," in order to be available via ",Object(r.b)("inlineCode",{parentName:"p"},"Composer"),". Please see a respective tutorial how to submit a package\nto ",Object(r.b)("inlineCode",{parentName:"p"},"GitHub")," and release it via ",Object(r.b)("inlineCode",{parentName:"p"},"Packagist"),"."),Object(r.b)("p",null,"In particular, the only thing that needs to be done, when developing a container, is to provide a specific ",Object(r.b)("inlineCode",{parentName:"p"},"composer.json"),"\nfile within the main folder of the container."),Object(r.b)("p",null,"An example of such a ",Object(r.b)("inlineCode",{parentName:"p"},"composer.json")," file is shown below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n  "name": "vendor/project",\n  "description": "This is a short description for your container.",\n  "type": "apiato-container",   // you must set the type to "apiato-container" here!\n  "require": {\n    "somevendor/somepackage" : "dev-master"\n    // some other requirements here\n  },\n  "extra": {\n    "apiato": {\n      "container": {\n        "name": "Foo"   // The name of the container within the /app/Containers folder\n      }\n    }\n  }\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important Information:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You ",Object(r.b)("strong",{parentName:"li"},"must")," add the respective ",Object(r.b)("inlineCode",{parentName:"li"},"type : apiato-container")," to the composer file. This way, the custom installer is used\nthat allows installing / updating containers."),Object(r.b)("li",{parentName:"ul"},"You ",Object(r.b)("strong",{parentName:"li"},"must")," provide the key ",Object(r.b)("inlineCode",{parentName:"li"},"extra.apiato.container.name"),". This key indicates the name of the folder (e.g., container)\nwhen installing the package to the ",Object(r.b)("inlineCode",{parentName:"li"},"/app/Containers")," folder. In the shown example, the container would be installed to\n",Object(r.b)("inlineCode",{parentName:"li"},"app/Containers/Foo"),".")))}s.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,l(l({ref:n},p),{},{components:t})):o.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);