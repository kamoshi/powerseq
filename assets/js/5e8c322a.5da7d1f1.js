"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),k=m(n),s=r,N=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return n?a.createElement(N,i(i({ref:t},o),{},{components:n})):a.createElement(N,i({ref:t},o))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[k]="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={id:"index",title:"powerseq",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},i=void 0,d={unversionedId:"api/index",id:"api/index",title:"powerseq",description:"installation and usage",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/powerseq/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"powerseq",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/powerseq/docs/api/modules"}},p={},m=[{value:"installation and usage",id:"installation-and-usage",level:2},{value:"Operators",id:"operators",level:2},{value:"Enumerable",id:"enumerable",level:3},{value:"Operators",id:"operators-1",level:3}],o={toc:m},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation-and-usage"},"installation and usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install powerseq\n")),(0,r.kt)("p",null,"executing single operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { filter } from "powerseq";\n\nfor(var item of filter([1,2,3,4,5], x => x % 2 === 0)){\n    console.log(item);\n}\n')),(0,r.kt)("p",null,"chaining many operators "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Enumerable } from \"powerseq/enumerable\";  \n// use 'Enumerable' class ONLY on the server side !! (use 'pipe' method on the client side )\n\nconst items = Enumerable\n    .range(1,Number.MAX_VALUE)\n    .filter( x => x % 2 === 0)\n    .take(5)\n    .reverse()\n    .toarray();\n\nconsole.log(items);\n")),(0,r.kt)("p",null,"chaining many operators using ",(0,r.kt)("strong",{parentName:"p"},"pipe")," method (it allows code tree shaking)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { pipe, range, filter, take, reverse, toarray } from "powerseq";\n\nconst items = pipe(\n    range(1, Number.MAX_VALUE),\n    filter(x => x % 2 === 0),\n    take(5),\n    reverse(),\n    toarray());\n\nconsole.log(items);\n')),(0,r.kt)("p",null,"most of the operators can be used as a single operator (",(0,r.kt)("inlineCode",{parentName:"p"},"filter([1,2,3,4,5], x => x % 2 === 0)"),") or as a part of the operator chain ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe([1, 2, 3, 4, 5], filter(x => x % 2 === 0), ... )"),".But some operators have special counterparts (concatp, defaultifemptyp, includesp, sequenceequalp, zipp) when used with pipe, so we call ",(0,r.kt)("inlineCode",{parentName:"p"},"concat([1,2,3], [4,5,6])")," but we have to call ",(0,r.kt)("inlineCode",{parentName:"p"},"pipe([1,2,3], concatp([4,5,6]), ... )")," if we want to chain ",(0,r.kt)("inlineCode",{parentName:"p"},"concat")," with other operators."),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/marcinnajder/powerseq/tree/master/docs/mapping.md"},"click")," to see mapping powerseq operators to ",(0,r.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/system.linq.enumerable(v=vs.110).aspx"},"LINQ"),", ",(0,r.kt)("a",{parentName:"li",href:"http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html"},"RxJS"),", ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"JS Array"),", ",(0,r.kt)("a",{parentName:"li",href:"https://lodash.com/docs/4.17.2"},"lodash"),", ",(0,r.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/visualfsharpdocs/conceptual/collections.seq-module-%5bfsharp%5d"},"F#"))),(0,r.kt)("h3",{id:"enumerable"},"Enumerable"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/defer.ts"},"defer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defer(() => [1, 2, 3] /* executed on demand */) -> seq [1, 2, 3]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/range.ts"},"range")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"range(10, 4) -> seq [10, 11, 12, 13]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/empty.ts"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty() -> seq []"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/repeatvalue.ts"},"repeatvalue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"repeatvalue(true, 4) -> seq [true, true, true, true]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"take(repeatvalue(true), 2) -> seq [true, true]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/entries.ts"},"entries")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"entries({ 'a': 1, b: 2 }) -> seq [['a', 1], ['b', 2]]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"entries([1, 2, 3]) -> seq [[0, 1], [1, 2], [2, 3]]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/throww.ts"},"throww")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"throww(new Error('exception ...')) -> error: exception ..."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/from.ts"},"from")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Enumerable.from([1, 2, 3]) -> enumerable [1, 2, 3]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Enumerable.from((function* () { yield 1; })()) -> enumerable []"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/generate.ts"},"generate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"generate(0, x => x < 4, x => x + 1, x => 'a'.repeat(x)) -> seq ['', 'a', 'aa', 'aaa']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/marcinnajder/powerseq/tree/master/test/enumerable/of.ts"},"of")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"of(1, 2, true, 'abc') -> seq [1, 2, true, 'abc']"))))),(0,r.kt)("h3",{id:"operators-1"},"Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asiterable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"asiterable([1, 2] /**changes seq type to help TypeScript*/) -> [1, 2]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filter([1, 2, 2, 3, 4], x => x > 2) -> seq [3, 4]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"filter([1, 2, 2, 3, 4], (x, index) => x - 1 === index) -> seq [1, 2]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max([1, 2, 3, 1]) -> 3"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"max(['a', 'bb', 'rrr', 'd'], x => x.length) -> 3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skiplast"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skiplast([1, 2, 3, 4], 2) -> seq [1, 2]"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"skiplast([1, 2, 3, 4], 0) -> seq [1, 2, 3, 4]"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"skiplast([1, 2, 3, 4], 5) -> seq []"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"average"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"average([1, 2, 3, 4]) -> 2.5"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"average(['a', 'aa', 'aaa'], s => s.length) -> 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"find"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"find([1, 2, 2, 3, 4]) -> 1"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"find([1, 2, 2, 3, 4], x => x > 2) -> 3"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"find([1, 2, 2, 3, 4], x => x > 4) -> undefined"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"find([1, 2, 2, 3, 4], x => x > 4, 100) -> 100"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"find([1, 2, 2, 3, 4], (x, index) => x > 1 && index > 2) -> 3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxby"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maxby(['a', 'bb', 'rrr', 'd'], x => x.length) -> 'rrr'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skipwhile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skipwhile([1, 2, 2, 3, 3, 4, 5], x => x < 3) -> seq [3, 3, 4, 5]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buffer([1, 2, 3, 4, 5, 6, 7], 2) -> seq [[1, 2], [3, 4], [5, 6], [7]]"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"buffer([1, 2, 3, 4, 5, 6, 7], 2, /*skip*/ 4) -> seq [[1, 2], [5, 6]]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findindex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"findindex([1, 2, 2, 3, 4], x => x > 1) -> 1"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"findindex([1, 2, 2, 3, 4], (x, index) => x > 1 && index > 2) -> 3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"min([1, 2, 3, 1]) -> 1"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"min(['a', 'bb', 'rrr', 'd'], x => x.length) -> 1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"some"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"some([1]) -> true"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"some([]) -> false"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"some([1, 2, 3], x => x > 2) -> true"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'some([1, 2, 3], x => x > 3) -> false">some'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cast"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cast([new Number(1), new Number(2), 's', false], Number) -> error: An element in the sequence cannot be cast to type 'Number'."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flatmap"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flatmap([{ ns: [1] }, { ns: [99, 10] }, { ns: [6, 3] }], x => x.ns) -> seq [1, 99, 10, 6, 3]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"flatmap(['abc', 'cd'], text => text, (text, char) => text + '-' + char) -> seq ['abc-a', 'abc-b', 'abc-c', 'cd-c', 'cd-d']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minby"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minby(['a', 'bb', 'rrr', 'd'], x => x.length) -> 'a'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sum([1, 2, 3]) -> 6"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"sum(['a', 'asd', 'yy'], x => x.length) -> 6"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concat([1, 2], [3, 5], [6]) -> seq [1, 2, 3, 5, 6]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foreach"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foreach([1, 2, 3], x => { /* some action */ ; }) -> undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oftype"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oftype([new Number(1), new Number(2), 's', false], Number) -> seq [{ }, { }]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"take"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"take([1, 2, 3, 4, 5], 2) -> seq [1, 2]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"count([2, 2, 2]) -> 3"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"count([2, 4, 6], x => x > 2) -> 2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupby"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupby(['a', 'b', 'cc', 'ddd', 'xx'], x => x.length) -> seq [enumerable ['a', 'b'], enumerable ['cc', 'xx'], enumerable ['ddd']]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"groupby(['a', 'b', 'cc', 'ddd', 'xx'], x => x.length, x => x.toUpperCase()) -> seq [enumerable ['A', 'B'], enumerable ['CC', 'XX'], enumerable ['DDD']]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderby"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderby([1, 4, 2, 3, 5, 1], x => x) -> enumerable [1, 1, 2, 3, 4, 5]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"orderby(['abc', 'dd', 'sdfe', 'f'], x => x.length) -> enumerable ['f', 'dd', 'abc', 'sdfe']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"takelast"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"takelast([1, 2, 3], 2) -> seq [2, 3]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"takelast([1, 2, 3], 0) -> seq []"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"takelast([1, 2, 3], 5) -> seq [1, 2, 3]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultifempty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultifempty([1, 2, 3]) -> seq [1, 2, 3], defaultifempty([]) -> seq [undefined], and defaultifempty([], 10) -> seq [10]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groupjoin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupjoin([1, 3, 2], ['a', 'b', 'cc'], x => x, y => y.length, (x, ys) => x + ':' + toarray(ys)) -> seq ['1:a,b', '2:cc']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"orderbydescending"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderbydescending([1, 4, 2, 3, 5, 1], x => x) -> enumerable [5, 4, 3, 2, 1, 1] and orderbydescending(['abc', 'dd', 'sdfe', 'f'], x => x.length) -> enumerable ['sdfe', 'abc', 'dd', 'f']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"takewhile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"takewhile([1, 2, 2, 3, 3, 4, 5], x => x < 3) -> seq [1, 2, 2]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distinct"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"distinct([1, 2, 1, 3, 2]) -> seq [1, 2, 3]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"distinct(['a', 'aa', 'ab', 'abc'], x => x.length) -> seq ['a', 'aa', 'abc']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignoreelements"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignoreelements([1, 3, 2]) -> seq []"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reduce"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reduce([1, 2, 3], (a, x) => a + x) -> 6"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"reduce([1, 2, 3], (a, x) => a + (x * 10), '') -> '102030'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thenby"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thenby(orderby(['xa', 'a', 'fg', 'ert', 'b'], x => x.length), x => x) -> enumerable ['a', 'b', 'fg', 'xa', 'ert']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distinctuntilchanged"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"distinctuntilchanged([1, 1, 2, 2, 2, 1, 3, 3]) -> seq [1, 2, 1, 3]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"includes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"includes([1, 2, 3], 2) -> true"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"includes([1, 2, 3], 5) -> false"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"includes([1, 2, 3], 3, /*fromIndex*/ 4) -> false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repeat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"repeat([1, 2, 3], 2) -> seq [1, 2, 3, 1, 2, 3]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"take(repeat([1, 2, 3]), 5) -> seq [1, 2, 3, 1, 2]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thenbydescending"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"thenbydescending(orderby(['xa', 'a', 'fg', 'ert', 'b'], x => x.length), x => x) -> enumerable ['b', 'a', 'xa', 'fg', 'ert']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doo([1, 2, 3,], (x) => { /* executed during iteration */ ; }) -> seq [1, 2, 3]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intersect"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"intersect([1, 2, 2, 3], [3, 3, 1]) -> seq [3, 1]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"intersect(['a', 'c', 'ddd'], ['r', 'ww', 'ttt', 'oooo'], x => x.length) -> seq ['r', 'ttt']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reverse([1, 2, 3]) -> seq [3, 2, 1]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toarray"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toarray([1, 2, 2]) -> [1, 2, 2]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elementat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"elementat([1, 2, 12, 15], 2) -> 12"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"elementat([1, 2, 12, 15], 20) -> undefined"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"elementat([1, 2, 12, 15], 20, 100) -> 100"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isempty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isempty([]) -> true"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"isempty([1, 2]) -> false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scan"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scan([1, 2, 3], (a, x) => a + x) -> seq [3, 6]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"scan([1, 2, 3], (a, x) => a + (x * 10), '') -> seq ['10', '1020', '102030']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tomap"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tomap(['a', 'bb', 'ccc'], x => x.length) -> Map {1 => 'a', 2 => 'bb', 3 => 'ccc'}"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"tomap(['a', 'bb', 'ccc'], x => x.length, x => x.toUpperCase()) -> Map {1 => 'A', 2 => 'BB', 3 => 'CCC'}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"every"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"every([1, 2, 12, 15], x => x > 0) -> true"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"every([1, 2, 12, 15], x => x < 10) -> false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"join"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"join([1, 2, 3], ['a', 'bb', 'x'], x => x, y => y.length, (x, y) => x + ':' + y) -> seq ['1:a', '1:x', '2:bb']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequenceequal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sequenceequal([1, 2, 3], [1, 2, 3]) -> true"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"sequenceequal([1, 2, 3], [1, 2, 2]) -> false"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"sequenceequal([1, 2, 3], [1, 2]) -> false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toobject"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toobject(['a', 'bb', 'ccc'], x => x.length) -> { 1:a, 2:bb, 3:ccc }"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"toobject(['a', 'bb', 'ccc'], x => x.length, x => x.toUpperCase()) -> { 1:A, 2:BB, 3:CCC }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"except"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"except([1, 2, 2, 3, 4], [2, 3]) -> seq [1, 4]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"except(['a', 'b', 'ba', 'xde'], ['poc'], x => x.length) -> seq ['a', 'ba']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"last([1, 2, 3]) -> 3"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"last([]) -> undefined"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"last([1, 2, 3, 4, 5], x => x % 2 === 0) -> 4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"single"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"single([1]) -> 1"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"single([1, 2, 3], x => x > 2) -> 3"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"single([1, 2, 3], x => x > 1) -> error: More than one element satisfies the condition in predicate."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"union"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"union([1, 2, 2], [2, 3, 3, 4]) -> seq [1, 2, 3, 4]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"union(['a', 'c', 'ddd'], ['r', 'ww', 'ttt', 'oooo'], x => x.length) -> seq ['a', 'ddd', 'ww', 'oooo']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expand"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expand([1], x => x > 8 ? [] : [10, x * 2]) -> seq [1, 10, 2, 10, 4, 10, 8, 10, 16]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"map"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map([1, 2, 3], x => x * 10) -> seq [10, 20, 30]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"map([1, 2, 3], (x, index) => x * 10 + index) -> seq [10, 21, 32]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skip"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skip([1, 2, 3, 4, 5], 2) -> seq [3, 4, 5]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zip"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zip(['a', 'b', 'c'], [1, 2], (s, n) => s + n) -> seq ['a1', 'b2']"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"zip(['a', 'b', 'c'], [1, 2], [false], (s, n, b) => s + n + b) -> seq ['a1false']"))))))}u.isMDXComponent=!0}}]);