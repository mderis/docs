(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{168:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=t,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||i;return a?r.a.createElement(d,o(o({ref:n},c),{},{components:a})):r.a.createElement(d,o({ref:n},c))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),i=(a(0),a(168)),l={title:"Magical Call"},o={unversionedId:"miscellaneous/magical-call",id:"miscellaneous/magical-call",isDocsHomePage:!1,title:"Magical Call",description:"- The Magical Call",source:"@site/docs/miscellaneous/magical-call.md",slug:"/miscellaneous/magical-call",permalink:"/docs/docs/miscellaneous/magical-call",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/miscellaneous/magical-call.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1616802868,formattedLastUpdatedAt:"3/26/2021",sidebar:"docs",previous:{title:"Values",permalink:"/docs/docs/optional-components/values"},next:{title:"Tests Helpers",permalink:"/docs/docs/miscellaneous/tests-helpers"}},s=[],c={toc:s};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#the-magical-call"},"The Magical Call"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#basic-usage"},"Basic Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#Usage-options"},"Usage options")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#passing-arguments-to-the-run-function"},"Passing arguments to the run function")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#calling-other-functions-before-the-run"},"Calling other functions before the run")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#calling-other-functions-and-pass-them-arguments"},"Calling other functions and pass them arguments:")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#transactional-call"},"Transactional Magical Call")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#use-case-example"},"Use case example:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#the-listuserstask-class"},"The ListUsersTask class:"))))),Object(i.b)("a",{name:"the-magical-call"}),"### The Magical Call",Object(i.b)("p",null,"This magical function allows you to call any Action or Task ",Object(i.b)("inlineCode",{parentName:"p"},"run")," function, from anywhere. Using the ",Object(i.b)("inlineCode",{parentName:"p"},"Apiato::call()")," Facade."),Object(i.b)("p",null,"The function ",Object(i.b)("inlineCode",{parentName:"p"},"call")," is mainly used for calling Apiato ",Object(i.b)("inlineCode",{parentName:"p"},"Actions")," from ",Object(i.b)("inlineCode",{parentName:"p"},"Controllers")," and for calling Apiato ",Object(i.b)("inlineCode",{parentName:"p"},"Tasks"),"\nfrom ",Object(i.b)("inlineCode",{parentName:"p"},"Actions"),"."),Object(i.b)("p",null,"Each Action knows which UI called it, using ",Object(i.b)("inlineCode",{parentName:"p"},"$this->getUI()"),", this is useful for handling the same Action differently\nbased on the UI type (Web or API). This will work when calling the Action from Controllers and Commands using the\nmagical ",Object(i.b)("inlineCode",{parentName:"p"},"call()")," function."),Object(i.b)("a",{name:"Usage-options"}),"### Usage options",Object(i.b)("p",null,"In the first argument you can pass the class full name, as follow ",Object(i.b)("inlineCode",{parentName:"p"},"App\\Containers\\User\\Tasks\\CreateUserTask::class"),",\nor you can pass the container name and class name, as follow ",Object(i.b)("inlineCode",{parentName:"p"},"User@CreateUserTask"),"."),Object(i.b)("p",null,"It is highly recommended to use the Apiato caller style ",Object(i.b)("inlineCode",{parentName:"p"},"containerName@className")," as it helps removing direct\ndependencies between containers. The function will verify the Container exist before calling the function and inform\nthe user to install Container if not exist."),Object(i.b)("p",null,'Note: When a class is directly called using his full name, a warning will be logged informing you to use the\n"apiato caller style". This info, however, can be disabled by changing the flag\n',Object(i.b)("inlineCode",{parentName:"p"},"apiato.logging.log-wrong-apiato-caller-style")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"Ship/Configs/apiato.php")," file accordingly."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},'<?php\n\n// Call "AssignUserToRoleTask" Task from the "Authorization" Container using the apiato caller style\nApiato::call(\'Authorization@AssignUserToRoleTask\');\n\n// Call "AssignUserToRoleTask" Task from the "Authorization" Container using class full name.\n// This will cause to add an INFO entry to the log file!\nApiato::call(\\App\\Containers\\Authorization\\Tasks\\AssignUserToRoleTask::class);\n')),Object(i.b)("a",{name:"basic-usage"}),"##### Basic Usage",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$foo = \\Apiato\\Core\\Foundation\\Facades\\Apiato::call('Container@ActionOrTask');\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Notes"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"From Controllers and Actions you can use the ",Object(i.b)("inlineCode",{parentName:"li"},"$this->call('Container@ActionOrTask')")," instead of the Facade\nbut it's not recommended."),Object(i.b)("li",{parentName:"ul"},"The magical ",Object(i.b)("inlineCode",{parentName:"li"},"call")," function accepts the class full namespace (",Object(i.b)("inlineCode",{parentName:"li"},"\\App\\Containers\\User\\Tasks\\GetAllUsersTask::class"),")\nand the Apiato caller style (",Object(i.b)("inlineCode",{parentName:"li"},"Containers@GetAllUsersTask"),")."),Object(i.b)("li",{parentName:"ul"},"There is also a ",Object(i.b)("inlineCode",{parentName:"li"},"transactionalCall()")," method available, that wraps everything in a ",Object(i.b)("inlineCode",{parentName:"li"},"DB::Transaction")," (see below).")),Object(i.b)("a",{name:"passing-arguments-to-the-run-function"}),"##### Passing arguments to the `run` function",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$foo = Apiato::call('Container@ActionOrTask', [$runArgument1, $runArgument2, $runArgument3]);\n")),Object(i.b)("a",{name:"calling-other-functions-before-the-run"}),"##### Calling other functions before calling the `run`",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"$foo = Apiato::call('Container@ActionOrTask', [$runArgument], ['otherFunction1', 'otherFunction2']);\n")),Object(i.b)("a",{name:"calling-other-functions-and-pass-them-arguments"}),"##### Calling other functions and pass them arguments before calling the `run`",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n$foo = Apiato::call('Container@ActionOrTask', [$runArgument], [\n    [\n       'function1' => ['function1-argument1', 'function1-argument2']\n    ],\n    [\n       'function2' => ['function2-argument1']\n    ],\n]);\n\n$foo = Apiato::call('Container@ActionOrTask', [$runArgument], [\n    'function-without-argument',\n    [\n      'function1' => ['function1-argument1', 'function1-argument2']\n    ],\n]);\n\n$foo = Apiato::call('Container@ActionOrTask', [], [\n    'function-without-argument',\n    [\n      'function1' => ['function1-argument1', 'function1-argument2']\n    ],\n    'another-function-without-argument',\n    [\n      'function2' => ['function2-argument1', 'function2-argument2', 'function2-argument3']\n    ],\n]);\n")),Object(i.b)("a",{name:"#transactional-call"}),"### Transactional Magical Call",Object(i.b)("p",null,"Sometimes, you want to wrap a call into one ",Object(i.b)("inlineCode",{parentName:"p"},"Database Transaction")," (see\n",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/database#database-transactions"},"Laravel Documentation"),")."),Object(i.b)("p",null,"Consider the following example: You want to create a new ",Object(i.b)("inlineCode",{parentName:"p"},"Team")," and automatically assign yourself (i.e., your own\n",Object(i.b)("inlineCode",{parentName:"p"},"User"),") to this newly created ",Object(i.b)("inlineCode",{parentName:"p"},"Team"),". Your ",Object(i.b)("inlineCode",{parentName:"p"},"CreateTeamAction")," may call a dedicated ",Object(i.b)("inlineCode",{parentName:"p"},"CreateTeamTask")," and a\n",Object(i.b)("inlineCode",{parentName:"p"},"AssignMemberToTeamTask")," afterwards."),Object(i.b)("p",null," However, if the ",Object(i.b)("inlineCode",{parentName:"p"},"AssignMemberToTeamTask"),' fails, for unknown reasons, you may want to "rollback" (i.e., remove) the\nnewly created ',Object(i.b)("inlineCode",{parentName:"p"},"Team")," from the database in order to keep the database in a valid state."),Object(i.b)("p",null," That's where ",Object(i.b)("inlineCode",{parentName:"p"},"DB::transactions")," comes into play!"),Object(i.b)("p",null," Apiato provides a ",Object(i.b)("inlineCode",{parentName:"p"},"transactionalCall($class, $params, $extraMethods)")," method with the similar parameters as already\nknown from the  ",Object(i.b)("inlineCode",{parentName:"p"},"call()")," method. Internally, this method calls this ",Object(i.b)("inlineCode",{parentName:"p"},"call()")," method anyways, but wraps it into a\n",Object(i.b)("inlineCode",{parentName:"p"},"DB::transaction"),"."),Object(i.b)("p",null," If any ",Object(i.b)("inlineCode",{parentName:"p"},"Exception")," occurs during the execution of the ",Object(i.b)("inlineCode",{parentName:"p"},"$class")," to be called, everything done in this context is\nautomatically rolled-back from the database. However, respective operations on the file system (e.g., you may also\nhave uploaded a profile picture for this ",Object(i.b)("inlineCode",{parentName:"p"},"Team")," already that needs to be removed in this case) need to be performed\nmanually!"),Object(i.b)("p",null," Typically, you may want to use the ",Object(i.b)("inlineCode",{parentName:"p"},"transactionalCall()")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"Controller")," level!"),Object(i.b)("a",{name:"use-case-example"}),"### Use case example",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nreturn Apiato::call('User@ListUsersTask', [], ['ordered']);\n// can be called this way as well Apiato::call(ListUsersTask::class, [], ['ordered']);\n\nreturn Apiato::call('User@ListUsersTask', [], ['ordered', 'clients']);\n\nreturn Apiato::call('User@ListUsersTask', [], ['admins']);\n\nreturn Apiato::call('User@ListUsersTask', [], ['admins', ['roles' => ['manager', 'employee']]]);\n")),Object(i.b)("a",{name:"the-listuserstask-class"}),"##### The ListUsersTask class",Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Tasks;\n\nuse App\\Containers\\User\\Data\\Criterias\\AdminsCriteria;\nuse App\\Containers\\User\\Data\\Criterias\\ClientsCriteria;\nuse App\\Containers\\User\\Data\\Criterias\\RoleCriteria;\nuse App\\Containers\\User\\Data\\Repositories\\UserRepository;\nuse App\\Ship\\Criterias\\Eloquent\\OrderByCreationDateDescendingCriteria;\nuse App\\Ship\\Parents\\Tasks\\Task;\n\nclass ListUsersTask extends Task\n{\n    private $userRepository;\n\n    public function __construct(UserRepository $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run()\n    {\n        return $this->userRepository->paginate();\n    }\n\n    public function clients()\n    {\n        $this->userRepository->pushCriteria(new ClientsCriteria());\n    }\n\n    public function admins()\n    {\n        $this->userRepository->pushCriteria(new AdminsCriteria());\n    }\n\n    public function ordered()\n    {\n        $this->userRepository->pushCriteria(new OrderByCreationDateDescendingCriteria());\n    }\n\n    public function withRole($roles)\n    {\n        $this->userRepository->pushCriteria(new RoleCriteria($roles));\n    }\n\n}\n\n")))}p.isMDXComponent=!0}}]);