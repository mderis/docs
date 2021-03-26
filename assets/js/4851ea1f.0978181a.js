(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{168:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),b=r,m=c["".concat(l,".").concat(b)]||c[b]||u[b]||i;return t?a.a.createElement(m,o(o({ref:n},d),{},{components:t})):a.a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(168)),l={title:"Middlewares",category:"Optional Components",order:30},o={unversionedId:"optional-components/middlewares",id:"optional-components/middlewares",isDocsHomePage:!1,title:"Middlewares",description:"* Definition",source:"@site/docs/optional-components/middlewares.md",slug:"/optional-components/middlewares",permalink:"/docs/docs/optional-components/middlewares",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/middlewares.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616801441,formattedLastUpdatedAt:"3/26/2021",sidebar:"docs",previous:{title:"Factories",permalink:"/docs/docs/optional-components/factories"},next:{title:"Configs",permalink:"/docs/docs/optional-components/configs"}},s=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]}]}],d={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(i.b)("a",{name:"definition"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"Middleware provide a convenient mechanism for filtering HTTP requests entering your application. More about them ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/middleware"},"here"),"."),Object(i.b)("p",null,"You can enable and disable Middlewares as you wish."),Object(i.b)("a",{name:"principles"}),Object(i.b)("h2",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There's two types of Middlewares, General (applied on all the Routes by default) and Endpoints Middlewares (applied on some Endpoints).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Middlewares CAN be placed in Ship layer or the Container layer depend on their roles."))),Object(i.b)("a",{name:"rules"}),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If the Middleware is written inside a Container it MUST be registered inside that Container.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To register Middlewares in a Container the container needs to have a ",Object(i.b)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider"),". And like all other Container Providers it MUST be registered in the ",Object(i.b)("inlineCode",{parentName:"p"},"MainServiceProvider")," of that Container.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"General Middlewares (like some default Laravel Middleware's) SHOULD live in the Ship layer ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Middlewares/*")," and are registered in the Ship Main Provider.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Third Party packages Middleware CAN be registered in Containers or on the Ship layer (wherever they make more sense).\n",Object(i.b)("em",{parentName:"p"},"Example: the ",Object(i.b)("inlineCode",{parentName:"em"},"jwt.auth"),' middleware "provided by the JWT package" is registered in the Authentication Container (',Object(i.b)("inlineCode",{parentName:"em"},"Containers/Authentication/Providers/MiddlewareServiceProvider.php"),")"),"."))),Object(i.b)("a",{name:"folder-structure"}),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - App\n   - Containers\n       - {container-name}\n           - Middlewares\n              - WebAuthentication.php\n   - Ship\n       - Middleware\n          - Http\n             - EncryptCookies.php\n             - VerifyCsrfToken.php\n")),Object(i.b)("a",{name:"code-sample"}),Object(i.b)("h3",{id:"code-sample"},"Code Sample"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Middleware Example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Authentication\\Middlewares;\n\nuse App\\Ship\\Engine\\Butlers\\Facades\\ContainersButler;\nuse App\\Ship\\Parents\\Middlewares\\Middleware;\nuse Closure;\nuse Illuminate\\Contracts\\Auth\\Guard;\nuse Illuminate\\Http\\Request;\n\n/**\n * Class WebAuthentication\n *\n * @author  Mahmoud Zalt  <mahmoud@zalt.me>\n */\nclass WebAuthentication extends Middleware\n{\n\n    protected $auth;\n\n    public function __construct(Guard $auth)\n    {\n        $this->auth = $auth;\n    }\n\n    public function handle(Request $request, Closure $next)\n    {\n        if ($this->auth->guest()) {\n            return response()->view(ContainersButler::getLoginWebPageName(), [\n                'errorMessage' => 'Credentials Incorrect.'\n            ]);\n        }\n\n        return $next($request);\n    }\n}\n\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Middleware registration inside the Container Example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Authentication\\Providers;\n\nuse App\\Containers\\Authentication\\Middlewares\\WebAuthentication;\nuse App\\Ship\\Parents\\Providers\\MiddlewareProvider;\nuse Tymon\\JWTAuth\\Middleware\\GetUserFromToken;\nuse Tymon\\JWTAuth\\Middleware\\RefreshToken;\n\nclass MiddlewareServiceProvider extends MiddlewareProvider\n{\n\n    protected $middleware = [\n\n    ];\n\n    protected $middlewareGroups = [\n        'web' => [\n\n        ],\n        'api' => [\n\n        ],\n    ];\n\n    protected $routeMiddleware = [\n        'jwt.auth'         => GetUserFromToken::class,\n        'jwt.refresh'      => RefreshToken::class,\n        'auth:web'         => WebAuthentication::class,\n    ];\n\n    public function boot()\n    {\n        $this->loadContainersInternalMiddlewares();\n    }\n\n    public function register()\n    {\n\n    }\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Middleware registration inside the Ship layer (HTTP Kernel) Example:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Ship\\Kernels;\n\nuse App\\Ship\\Middlewares\\Http\\ProcessETagHeadersMiddleware;\nuse App\\Ship\\Middlewares\\Http\\ProfilerMiddleware;\nuse App\\Ship\\Middlewares\\Http\\ValidateJsonContent;\nuse Illuminate\\Foundation\\Http\\Kernel as LaravelHttpKernel;\n\n/**\n * Class HttpKernel\n *\n * A.K.A (app/Http/Kernel.php)\n *\n * @author  Mahmoud Zalt  <mahmoud@zalt.me>\n */\nclass HttpKernel extends LaravelHttpKernel\n{\n\n    /**\n     * The application's global HTTP middleware stack.\n     *\n     * These middleware are run during every request to your application.\n     *\n     * @var array\n     */\n    protected $middleware = [\n        // Laravel middleware's\n        \\Illuminate\\Foundation\\Http\\Middleware\\CheckForMaintenanceMode::class,\n        \\Illuminate\\Foundation\\Http\\Middleware\\ValidatePostSize::class,\n        \\Illuminate\\Foundation\\Http\\Middleware\\ConvertEmptyStringsToNull::class,\n        \\App\\Ship\\Middlewares\\Http\\TrimStrings::class,\n        \\App\\Ship\\Middlewares\\Http\\TrustProxies::class,\n\n        // CORS package middleware\n        \\Barryvdh\\Cors\\HandleCors::class,\n    ];\n\n    /**\n     * The application's route middleware groups.\n     *\n     * @var array\n     */\n    protected $middlewareGroups = [\n        'web' => [\n            \\App\\Ship\\Middlewares\\Http\\EncryptCookies::class,\n            \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,\n            \\Illuminate\\Session\\Middleware\\StartSession::class,\n            \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,\n            \\App\\Ship\\Middlewares\\Http\\VerifyCsrfToken::class,\n            \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n        ],\n\n        'api' => [\n            ValidateJsonContent::class,\n            'bindings',\n            ProcessETagHeadersMiddleware::class,\n            ProfilerMiddleware::class,\n            // The throttle Middleware is registered by the RoutesLoaderTrait in the Core\n        ],\n    ];\n\n    /**\n     * The application's route middleware.\n     *\n     * These middleware may be assigned to groups or used individually.\n     *\n     * @var array\n     */\n    protected $routeMiddleware = [\n        'bindings' => \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,\n        'throttle' => \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,\n        'can'      => \\Illuminate\\Auth\\Middleware\\Authorize::class,\n        'auth'     => \\Illuminate\\Auth\\Middleware\\Authenticate::class,\n    ];\n\n}\n")))}p.isMDXComponent=!0}}]);