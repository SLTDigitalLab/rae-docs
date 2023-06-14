"use strict";(self.webpackChunkrae_docs=self.webpackChunkrae_docs||[]).push([[57],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1661:(e,t,n)=>{n.r(t),n.d(t,{Tooltip:()=>m,assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},o="Make Permanent Cached Model Permanent",i={unversionedId:"api-engine/Explorer/ML/Cached/make_permanent",id:"api-engine/Explorer/ML/Cached/make_permanent",title:"Make Permanent Cached Model Permanent",description:"To use runner trained model need to be saved permanently. Use this endpoint to make cached models permanent.",source:"@site/docs/api-engine/Explorer/ML/Cached/make_permanent.mdx",sourceDirName:"api-engine/Explorer/ML/Cached",slug:"/api-engine/Explorer/ML/Cached/make_permanent",permalink:"/docs/api-engine/Explorer/ML/Cached/make_permanent",draft:!1,editUrl:"https://github.com/SLTDigitalLab/RAE-docs/tree/main/docs/api-engine/Explorer/ML/Cached/make_permanent.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get ALL Cached Models",permalink:"/docs/api-engine/Explorer/ML/Cached/get-all"},next:{title:"Web",permalink:"/docs/category/web"}},p={},d=[{value:"Authorization",id:"authorization",level:2},{value:"Request Body",id:"request-body",level:2},{value:"Types",id:"types",level:3},{value:"Sample",id:"sample",level:3},{value:"Reponse Body",id:"reponse-body",level:2},{value:"Types",id:"types-1",level:3},{value:"Sample",id:"sample-1",level:3}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"7px",cursor:"pointer",fontWeight:"750",fontSize:"15px",position:"relative",bottom:"4px"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},s={toc:d,Tooltip:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"make-permanent-cached-model-permanent"},"Make Permanent Cached Model Permanent"),(0,r.kt)("p",null,"To use ",(0,r.kt)("a",null,(0,r.kt)("inlineCode",{parentName:"p"},"runner"))," trained model need to be saved permanently. Use this endpoint to make cached models permanent."),(0,r.kt)(m,{color:"#3abe25",mdxType:"Tooltip"},"Method: POST")," ",(0,r.kt)(m,{color:"#Be2525",mdxType:"Tooltip"},"Authorization: API Key"),(0,r.kt)("div",{style:{marginBottom:"20px"}}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://engine.raccoon-ai.io/api/v1/trainer/ml/permanent/<cached_model_id>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<cached_model_id>")," will be available after you trained the model with trainer. Refer ",(0,r.kt)("a",{href:"/docs/category/trainer"},(0,r.kt)("inlineCode",{parentName:"p"},"trainer"))," to find ",(0,r.kt)("inlineCode",{parentName:"p"},"<cached_model_id>"),"."),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API Key"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Api-Key"),(0,r.kt)("td",{parentName:"tr",align:null},"rae","_","##########")))),(0,r.kt)("h2",{id:"request-body"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Name for the trained model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_desc"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Short description to explain about the model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_desc"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Long description to explain deeply about model (Supports Markdown (MD)).")))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "model_name": <string>,\n  "short_desc": <sting>,\n  "long_desc": <string>\n}\n')),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "model_name": "My Model",\n  "short_desc": "This is my model short description",\n  "long_desc": "This is my model long description. This support **MARKDOWN**"\n}\n')),(0,r.kt)("h2",{id:"reponse-body"},"Reponse Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicate the success of the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message indicators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error_code"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Error code information, only set if success is false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"Result, only set if success is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gen_at"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Generated datetime")))),(0,r.kt)("h3",{id:"types-1"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": <bool>,\n    "msg": <string>,\n    "error": <null> or <string>,\n    "result": <json>,\n    "score": <json>,\n    "generated_ts": <timestamp>\n}\n')),(0,r.kt)("h3",{id:"sample-1"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"")))}u.isMDXComponent=!0}}]);