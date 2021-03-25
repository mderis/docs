(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(p,".").concat(u)]||s[u]||m[u]||r;return a?o.a.createElement(d,i(i({ref:t},c),{},{components:a})):o.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<r;c++)p[c]=a[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),r=(a(0),a(108)),p={title:"Installation",slug:"/installation"},i={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"* A) Apiato Installation",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/docs/installation",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/docs/installation.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616630150,formattedLastUpdatedAt:"3/24/2021",sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/docs/"},next:{title:"Overview",permalink:"/docs/docs/overview"}},l=[],c={toc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#App"},"A) Apiato Installation"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Code-Setup"},"1) Code Setup"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#App-Composer"},"Option 1: Automatically via Composer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#App-Git"},"Option 2: Manually")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Setup-Database"},"2) Database Setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Prepare-OAuth"},"3) OAuth Setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Documentation"},"4) Documentation Setup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Testing"},"5) Testing Setup")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Development-Environment"},"B) Environment Setup"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Dev-Env-Opt-A"},"Option 1: Using Docker and Laradock")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Dev-Env-Opt-B"},"Option 2: Using Vagrant and Homestead")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Dev-Env-Opt-C"},"Option 3: Using MAMP/WAMP or something else")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Play"},"C) Play"))),Object(r.b)("a",{name:"App"}),"## A) Apiato Application Installation",Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Apiato")," can be installed automatically with Composer (recommended) or manually (with Git or direct download):"),Object(r.b)("a",{name:"Code-Setup"}),"### 1) Code Setup",Object(r.b)("a",{name:"App-Composer"}),"#### 1.A) Automatically via Composer",Object(r.b)("p",null,"1) Clone the repo, install dependencies and setup the project:"),Object(r.b)("p",null,"Option 1: Latest ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/releases/latest"},"stable"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api\n")),Object(r.b)("p",null,"Option 2: On going ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/commits/master"},"development"),' branch "dev master" ',Object(r.b)("em",{parentName:"p"},"(unstable)"),":\n",Object(r.b)("em",{parentName:"p"},"This gives you features from the upcoming releases. But you need to keep syncing your project with the upstream master\nbranch and running ",Object(r.b)("inlineCode",{parentName:"em"},"composer install")," when changes occurs.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api dev-master\n")),Object(r.b)("p",null,"2) Edit your ",Object(r.b)("inlineCode",{parentName:"p"},".env")," variables to match with your environment (Set Database credentials, App URL, ...)."),Object(r.b)("p",null,"3) Continue from ",Object(r.b)("a",{parentName:"p",href:"#Setup-Database"},"2) Database Setup")," below."),Object(r.b)("a",{name:"App-Git"}),"#### 1.B) Manually",Object(r.b)("p",null,"You can download the Code directly from the repository as ",Object(r.b)("inlineCode",{parentName:"p"},".ZIP")," file or clone the repository using ",Object(r.b)("inlineCode",{parentName:"p"},"Git")," (recommended):"),Object(r.b)("p",null,"1) Clone the repository using ",Object(r.b)("inlineCode",{parentName:"p"},"Git"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apiato/apiato.git\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Hint")," ",Object(r.b)("br",null),"\nIf using ",Object(r.b)("a",{parentName:"p",href:"http://laradock.io/"},"Laradock"),", you can run all the commands below from the ",Object(r.b)("inlineCode",{parentName:"p"},"workspace")," Container. ",Object(r.b)("br",null),"\nFirst you need to run the required tools by running ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose up -d nginx mysql php-fpm workspace redis")," from the Laradock folder ",Object(r.b)("em",{parentName:"p"},"(of course you can add any other tools you need)"),". ",Object(r.b)("br",null),"\nThen enter the  ",Object(r.b)("inlineCode",{parentName:"p"},"workspace")," Container by running ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose exec workspace bash"),". ",Object(r.b)("br",null),"\nFor more details see the section ",Object(r.b)("strong",{parentName:"p"},"Using Docker (with Laradock)")," below.")),Object(r.b)("p",null,"2) Install all dependency packages (including Containers dependencies):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"composer install\n")),Object(r.b)("p",null,"3) Create ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file and copy the content of ",Object(r.b)("inlineCode",{parentName:"p"},".env.example")," inside it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cp .env.example .env\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Check all the variables and edit whatever you want.")),Object(r.b)("p",null,"4) Generate a random key ",Object(r.b)("inlineCode",{parentName:"p"},"APP_KEY")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan key:generate\n")),Object(r.b)("p",null,"5) delete the ",Object(r.b)("inlineCode",{parentName:"p"},".git")," folder from the root directory and initialize your own with ",Object(r.b)("inlineCode",{parentName:"p"},"git init"),"."),Object(r.b)("a",{name:"Setup-Database"}),"### 2) Database Setup",Object(r.b)("p",null,"1) Migrate the Database:"),Object(r.b)("p",null,"Run the migration artisan command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate\n")),Object(r.b)("p",null,"2) Seed the database with the artisan command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),Object(r.b)("p",null,'3) Optional. By default Apiato seeds a "Super User", given the default ',Object(r.b)("inlineCode",{parentName:"p"},"admin")," role (the role has no Permissions set\nto it)."),Object(r.b)("p",null,"To give the ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," role, access to all the seeded permissions in the system, run the following command, at any time."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"php artisan apiato:permissions:toRole admin\n")),Object(r.b)("a",{name:"Prepare-OAuth"}),"### 3) OAuth 2.0 Setup",Object(r.b)("p",null,'1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients\nwhich will be used to generate access tokens:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"php artisan passport:install\n")),Object(r.b)("a",{name:"Documentation"}),"### 4) Documentation Setup",Object(r.b)("p",null,"If you are planning to use ApiDoc JS then proceed with this setup, else skip this and use whatever you prefer:"),Object(r.b)("p",null,"1) Install ",Object(r.b)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," using NPM or your favorite dependencies manager:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),Object(r.b)("p",null,"Or install it alone by just running ",Object(r.b)("inlineCode",{parentName:"p"},"npm install apidoc")," on the root of the project, after checking the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file on the root."),Object(r.b)("p",null,"2) Run ",Object(r.b)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")),Object(r.b)("p",null,"Behind the scene ",Object(r.b)("inlineCode",{parentName:"p"},"apiato:apidoc")," is executing a command like this"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"apidoc -c app/Containers/Documentation/ApiDocJs/public -f public.php -i app -o public/api/documentation\n")),Object(r.b)("p",null,"Alternatively you can generate a swagger doc from the apidoc comments, to do so run ",Object(r.b)("inlineCode",{parentName:"p"},"php artisan apiato:swagger"),"."),Object(r.b)("h5",{id:"visit-api-docs-generator-sitebaseurl--link-_docsfeaturesapi-docs-generatormd--for-more-details"},"Visit ","[API Docs Generator]","({{ site.baseurl }}{% link _docs/features/api-docs-generator.md %}) for more details."),Object(r.b)("a",{name:"Testing"}),"### 5) Testing Setup",Object(r.b)("p",null,"1) Open ",Object(r.b)("inlineCode",{parentName:"p"},"phpunit.xml")," and make sure the environments are correct for your domain."),Object(r.b)("p",null,"2) run the tests"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"vendor/bin/phpunit\n")),Object(r.b)("a",{name:"Development-Environment"}),"## B) Development Environment Setup",Object(r.b)("p",null,"You can run ",Object(r.b)("strong",{parentName:"p"},"Apiato")," on your favorite environment. Below you'll see how you can run it on top of\n",Object(r.b)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," (using ",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/homestead"},"Laravel Homestead"),") or\n",Object(r.b)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," (using ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Laradock/laradock"},"Laradock"),")."),Object(r.b)("p",null,"We'll see how to use both tools and you can pick one, or you can use other options like\n",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/valet"},"Larvel Valet"),", ",Object(r.b)("a",{parentName:"p",href:"https://laragon.org/"},"Laragon")," or even run it directly on your machine."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Heads up!")," ",Object(r.b)("br",null),"\nThe ICANN has now officially approved ",Object(r.b)("inlineCode",{parentName:"p"},".dev")," as a generic top level domain (gTLD). Therefore, it is ",Object(r.b)("strong",{parentName:"p"},"not")," recommended\nto use ",Object(r.b)("inlineCode",{parentName:"p"},".dev")," domains any more in your local development setup! Our docs has been changed to use ",Object(r.b)("inlineCode",{parentName:"p"},".test"),"\ninstead of ",Object(r.b)("inlineCode",{parentName:"p"},".dev"),", however, you may change it to ",Object(r.b)("inlineCode",{parentName:"p"},".example"),", or ",Object(r.b)("inlineCode",{parentName:"p"},".localhost")," or whatever suits your needs. ",Object(r.b)("a",{parentName:"p",href:"http://www.faqs.org/rfcs/rfc2606.html"},"Read more"),".")),Object(r.b)("a",{name:"Dev-Env-Opt-A"}),"### A.1) Using Docker (with Laradock)",Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Laradock")," is a Docker PHP development environment. It facilitate running PHP Apps on Docker."),Object(r.b)("p",null,"1) Install ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LaraDock/laradock#installation"},"Laradock"),"."),Object(r.b)("p",null,"2) Navigate into the ",Object(r.b)("inlineCode",{parentName:"p"},"laradock")," directory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd laradock\n")),Object(r.b)("p",null,"This directory contains a ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. (From the LaraDock project)."),Object(r.b)("p",null,"2.1) If you haven't done so, rename ",Object(r.b)("inlineCode",{parentName:"p"},"env-example")," to ",Object(r.b)("inlineCode",{parentName:"p"},".env"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cp env-example .env\n")),Object(r.b)("p",null,"3) Run the Docker containers:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d nginx mysql redis beanstalkd\n")),Object(r.b)("p",null,"4) Make sure you are setting the ",Object(r.b)("inlineCode",{parentName:"p"},"Docker IP")," as ",Object(r.b)("inlineCode",{parentName:"p"},"Host")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"DB")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Redis"),"  in your ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file."),Object(r.b)("p",null,"5) Add the domain to the Hosts file:"),Object(r.b)("p",null,"5.1) Open the hosts file on your local machine ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"We'll be using ",Object(r.b)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),Object(r.b)("p",null,"5.2) Map the domain and its subdomains to 127.0.0.1:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"127.0.0.1  apiato.test\n127.0.0.1  api.apiato.test\n127.0.0.1  admin.apiato.test\n")),Object(r.b)("p",null,"If you're using NGINX or Apache, make sure the ",Object(r.b)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",Object(r.b)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your the server config file, is set to the following ",Object(r.b)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",Object(r.b)("em",{parentName:"p"},"(Also don't forget to point the ",Object(r.b)("strong",{parentName:"em"},"Root")," or ",Object(r.b)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",Object(r.b)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),Object(r.b)("a",{name:"Dev-Env-Opt-B"}),"### A.2) Using Vagrant (with Laravel Homestead)",Object(r.b)("p",null,"1) Configure Homestead:"),Object(r.b)("p",null,"1.1) Open the Homestead config file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"homestead edit\n")),Object(r.b)("p",null,"1.2) Map the ",Object(r.b)("inlineCode",{parentName:"p"},"api.apiato.test")," domain to the project public directory - Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"sites:\n    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n")),Object(r.b)("p",null,"1.3) You can also map other domains like ",Object(r.b)("inlineCode",{parentName:"p"},"apiato.test")," and ",Object(r.b)("inlineCode",{parentName:"p"},"admin.apiato.test")," to other web apps:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"    - map: apiato.test\n      to: /{full-path-to}/clients/web/user\n    - map: admin.apiato.test\n      to: /{full-path-to}/clients/web/admin\n")),Object(r.b)("p",null,"Note: in the example above the ",Object(r.b)("inlineCode",{parentName:"p"},"/{full-path-to}/clients/web/***")," are separate apps, who live on their own repositories\nand in different folder then the Apiato one. If your Admins, Users or other type of Apps are within Apiato, then you\nmust point them all to the Apiato project folder ",Object(r.b)("inlineCode",{parentName:"p"},"/{full-path-to}/apiato/public"),". So in that case you would have\nsomething like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: admin.apiato.test\n      to: /{full-path-to}/apiato/public\n")),Object(r.b)("p",null,"2) Add the domain to the Hosts file:"),Object(r.b)("p",null,"2.1) Open the hosts file on your local machine ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"We'll be using ",Object(r.b)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),Object(r.b)("p",null,"2.2) Map the domain and its subdomains to the Vagrant IP Address:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"192.168.10.10   apiato.test\n192.168.10.10   api.apiato.test\n192.168.10.10   admin.apiato.test\n")),Object(r.b)("p",null,"If you're using NGINX or Apache, make sure the ",Object(r.b)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",Object(r.b)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your the server config file, is set to the following ",Object(r.b)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",Object(r.b)("em",{parentName:"p"},"(Also don't forget to set your ",Object(r.b)("strong",{parentName:"em"},"root")," or ",Object(r.b)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",Object(r.b)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),Object(r.b)("p",null,"2.3) Run the Virtual Machine:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"homestead up --provision\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you see ",Object(r.b)("inlineCode",{parentName:"em"},"No input file specified")," on the sub-domains!\ntry running this command ",Object(r.b)("inlineCode",{parentName:"em"},"homestead halt && homestead up --provision"),".")),Object(r.b)("a",{name:"Dev-Env-Opt-C"}),"### A.3) Using something else",Object(r.b)("p",null,"If you're not into virtualization solutions, you can setup your environment directly on your machine. Check the\n","[software's requirements list]","({{ site.baseurl }}{% link _docs/getting-started/requirements.md %})."),Object(r.b)("a",{name:"Play"}),"## C) Let's Play",Object(r.b)("p",null,"Now let's see it in action"),Object(r.b)("p",null,"1.a. Open your web browser and visit:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://apiato.test")," You should see an HTML page, with ",Object(r.b)("inlineCode",{parentName:"li"},"Apiato")," in the middle."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://admin.apiato.test")," You should see an HTML Login page.")),Object(r.b)("p",null,"1.b. Open your HTTP client and call:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://api.apiato.test/")," You should see a JSON response with message: ",Object(r.b)("inlineCode",{parentName:"li"},'"Welcome to apiato."'),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"http://api.apiato.test/v1")," You should see a JSON response with message: ",Object(r.b)("inlineCode",{parentName:"li"},'"Welcome to apiato (API V1)."'),",")),Object(r.b)("p",null,"2) Make some HTTP calls to the API:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"To make the calls you can use ",Object(r.b)("a",{parentName:"em",href:"https://www.getpostman.com/"},"Postman"),", ",Object(r.b)("a",{parentName:"em",href:"https://github.com/jkbrzt/httpie"},"HTTPIE")," or\nany other tool you prefer.")),Object(r.b)("p",null,"Let's test the (user registration) endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register ")," with ",Object(r.b)("strong",{parentName:"p"},"cURL"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=mahmoud@zalt.me" -F "password=so-secret" -F "name=Mahmoud Zalt" "http://api.apiato.test/v1/register"\n')),Object(r.b)("p",null,"You should get response like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'Access-Control-Allow-Origin \u2192 ...\nCache-Control \u2192 ...\nConnection \u2192 keep-alive\nContent-Language \u2192 en\nContent-Type \u2192 application/json\nDate \u2192 Wed, 11 Apr 2000 22:55:88 GMT\nServer \u2192 nginx\nTransfer-Encoding \u2192 chunked\nVary \u2192 Origin\nX-Powered-By \u2192 PHP/7.7.7\nX-RateLimit-Limit \u2192 30\nX-RateLimit-Remaining \u2192 29\n\n{\n  "data": {\n    "object": "User",\n    "id": 77,\n    "name": "Mahmoud Zalt",\n    "email": "apiato@mail.com",\n    "confirmed": null,\n    "nickname": "Mega",\n    "gender": "male",\n    "birth": null,\n    "social_auth_provider": null,\n    "social_id": null,\n    "social_avatar": {\n      "avatar": null,\n      "original": null\n    },\n    "created_at": {\n      "date": "2017-04-05 16:17:26.000000",\n      "timezone_type": 3,\n      "timezone": "UTC"\n    },\n    "updated_at": {\n      "date": "2017-04-05 16:17:26.000000",\n      "timezone_type": 3,\n      "timezone": "UTC"\n    },\n    "roles": {\n      "data": []\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);