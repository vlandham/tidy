(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,a){"use strict";a.r(t);var n=a(10);a.d(t,"MemoryRouter",(function(){return n.d})),a.d(t,"Prompt",(function(){return n.f})),a.d(t,"Redirect",(function(){return n.g})),a.d(t,"Route",(function(){return n.h})),a.d(t,"Router",(function(){return n.i})),a.d(t,"StaticRouter",(function(){return n.j})),a.d(t,"Switch",(function(){return n.k})),a.d(t,"generatePath",(function(){return n.l})),a.d(t,"matchPath",(function(){return n.m})),a.d(t,"useHistory",(function(){return n.n})),a.d(t,"useLocation",(function(){return n.o})),a.d(t,"useParams",(function(){return n.p})),a.d(t,"useRouteMatch",(function(){return n.q})),a.d(t,"withRouter",(function(){return n.r})),a.d(t,"BrowserRouter",(function(){return n.a})),a.d(t,"HashRouter",(function(){return n.b})),a.d(t,"Link",(function(){return n.c})),a.d(t,"NavLink",(function(){return n.e}))},104:function(e,t,a){"use strict";var n=a(0),r=a(113);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},107:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var r=n(a(22));t.useThemeConfig=function(){return r.default().siteConfig.themeConfig}},108:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=a(98);t.isDocsPluginEnabled=!!n.useAllDocsData},109:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var u=o(a(0)),s=a(107),l=a(108),c=a(98),m=i(a(259));function d(e){var t=e.pluginIds,a=e.versionPersistence,n=e.allDocsData;var r={};return t.forEach((function(e){r[e]=function(e){var t=m.default.read(e,a);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(m.default.clear(e,a),{preferredVersionName:null})}(e)})),r}function v(){var e=c.useAllDocsData(),t=s.useThemeConfig().docs.versionPersistence,a=u.useMemo((function(){return Object.keys(e)}),[e]),n=u.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(a)})),r=n[0],o=n[1];return u.useEffect((function(){o(d({allDocsData:e,versionPersistence:t,pluginIds:a}))}),[e,t,a]),[r,u.useMemo((function(){return{savePreferredVersion:function(e,a){m.default.save(e,t,a),o((function(t){var n;return Object.assign(Object.assign({},t),((n={})[e]={preferredVersionName:a},n))}))}}}),[o])]}var g=u.createContext(null);function b(e){var t=e.children,a=v();return u.default.createElement(g.Provider,{value:a},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return l.isDocsPluginEnabled?u.default.createElement(b,null,t):u.default.createElement(u.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=u.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},113:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},250:function(e,t,a){"use strict";var n=a(0),r=a(286),o=a(95),i=a(319),u=function(e){var t=e.page,a=e.onChange,r=e.pageSize,i=e.numItems,u=Math.ceil(i/r),s=t>0,l=t<u-1;return n.createElement("div",{className:"text-sm flex items-center"},n.createElement("button",{className:Object(o.a)("button button--sm button--secondary mr-2",{disabled:!s}),disabled:!s,onClick:function(){return a(t-1)}},"Prev")," ",t+1," of ",u," ",n.createElement("button",{className:Object(o.a)("button button--sm button--secondary ml-2",{disabled:!l}),disabled:!l,onClick:function(){return a(t+1)}},"Next"))},s=function(e){var t=e.data,a=e.className,o=n.useState(0),s=o[0],l=o[1],c=null!=t&&t.length>8;if(!t||!t.length)return null;for(var m,d={},v=Object(r.a)(t);!(m=v()).done;){var g=m.value;for(var b in g)d[b]||(d[b]={Header:b,accessor:b,type:typeof g[b]})}var f=Object.values(d),p=t.slice(8*s,8*s+8);return n.createElement("div",null,n.createElement("table",{className:a},n.createElement("thead",null,n.createElement("tr",null,f.map((function(e){return n.createElement("th",{key:e.accessor,className:"data-type-"+e.type},e.Header)})))),n.createElement("tbody",null,p.map((function(e,t){return n.createElement("tr",{key:t},f.map((function(t){return n.createElement("td",{key:t.accessor,className:"data-type-"+t.type},function(e){return"object"==typeof e?JSON.stringify(e):"number"!=typeof e?e:e<1&&e>0?Object(i.a)(".3r")(e):Object(i.a)(".3s")(e)}(e[t.accessor]))})))})))),c?n.createElement(u,{page:s,onChange:l,numItems:t.length,pageSize:8}):null)},l=a(106),c=a(263),m=a.n(c);t.a=function(e){var t=e.data,a=e.header,r=e.initial,i=void 0===r?"table":r,u=e.jsonClassName,c=void 0===u?void 0:u,d=e.className,v=e.renderType,g=void 0===v?i:v,b=e.onChangeRenderType,f=n.useState(i),p=f[0],j=f[1],h=null==b?j:b,y=null==b?p:g;return n.createElement("div",{className:d},n.createElement("div",{className:"flex mb-2 items-center justify-between"},n.createElement("h4",{className:"mb-0"},a),n.createElement("div",{className:"button-group"},n.createElement("button",{className:Object(o.a)("button button--secondary",{"button--outline":"json"!==y}),onClick:function(){return h("json")}},"JSON"),n.createElement("button",{className:Object(o.a)("button button--secondary",{"button--outline":"table"!==y}),onClick:function(){return h("table")}},"Table"))),null==t?n.createElement("div",null,"Warning: The ",n.createElement("code",null,"output")," variable was"," ",null===t?"null":"undefined",". Make sure you set it to the result of your tidy flow."):"json"===y?n.createElement("div",{className:Object(o.a)(c,"limited-code-block")},n.createElement(l.a,{className:"language-json"},t.slice?m()(t.slice(0,100),{maxLength:80}):m()(t,{maxLength:80}).slice(0,3e3))):n.createElement(s,{data:t,className:"code-table"}))}},252:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=a(100),r=a(254),o=a(255);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var a=t.useAllDocsData(),r=n.useLocation().pathname;return o.getActivePlugin(a,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var a=t.useActivePlugin(e),r=n.useLocation().pathname;if(a)return{activePlugin:a,activeVersion:o.getActiveVersion(a.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var a=t.useDocsData(e);return o.getLatestVersion(a)},t.useActiveVersion=function(e){var a=t.useDocsData(e),r=n.useLocation().pathname;return o.getActiveVersion(a,r)},t.useActiveDocContext=function(e){var a=t.useDocsData(e),r=n.useLocation().pathname;return o.getActiveDocContext(a,r)},t.useDocVersionSuggestions=function(e){var a=t.useDocsData(e),r=n.useLocation().pathname;return o.getDocVersionSuggestions(a,r)}},254:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r})),a.d(t,"useAllPluginInstancesData",(function(){return o})),a.d(t,"usePluginData",(function(){return i}));var n=a(22);function r(){var e=Object(n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var a=o(e)[t];if(!a)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return a}},255:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=a(100);t.getActivePlugin=function(e,t,a){void 0===a&&(a={});var r=Object.entries(e).find((function(e){e[0];var a=e[1];return!!n.matchPath(t,{path:a.path,exact:!1,strict:!1})})),o=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!o&&a.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,a){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!n.matchPath(a,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,a){var r,o,i=t.getActiveVersion(e,a),u=null==i?void 0:i.docs.find((function(e){return!!n.matchPath(a,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:u,alternateDocVersions:u?(r=u.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,a){var n=t.getLatestVersion(e),r=t.getActiveDocContext(e,a),o=r.activeVersion!==n;return{latestDocSuggestion:o?null==r?void 0:r.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:o?n:void 0}}},256:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var a=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return a(e)===a(t)}},257:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var r=n(a(22));t.useTitleFormatter=function(e){var t=r.default().siteConfig,a=void 0===t?{}:t,n=a.title,o=a.titleDelimiter,i=void 0===o?"|":o;return e&&e.trim().length?e.trim()+" "+i+" "+n:n}},258:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=a(0),r=a(109),o=a(98),i=a(260);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=o.useDocsData(e),a=r.useDocsPreferredVersionContext(),u=a[0],s=a[1],l=u[e].preferredVersionName;return{preferredVersion:l?t.versions.find((function(e){return e.name===l})):null,savePreferredVersionName:n.useCallback((function(t){s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){var e=o.useAllDocsData(),t=r.useDocsPreferredVersionContext()[0],a=Object.keys(e),n={};return a.forEach((function(a){n[a]=function(a){var n=e[a],r=t[a].preferredVersionName;return r?n.versions.find((function(e){return e.name===r})):null}(a)})),n}},259:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return"docs-preferred-version-"+e},r={save:function(e,t,a){"none"===t||window.localStorage.setItem(n(e),a)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(n(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(n(e))}};t.default=r},260:function(e,t,a){"use strict";a.r(t),a.d(t,"DEFAULT_PLUGIN_ID",(function(){return n}));var n="default"},276:function(e,t,a){var n={"./af":114,"./af.js":114,"./ar":115,"./ar-dz":116,"./ar-dz.js":116,"./ar-kw":117,"./ar-kw.js":117,"./ar-ly":118,"./ar-ly.js":118,"./ar-ma":119,"./ar-ma.js":119,"./ar-sa":120,"./ar-sa.js":120,"./ar-tn":121,"./ar-tn.js":121,"./ar.js":115,"./az":122,"./az.js":122,"./be":123,"./be.js":123,"./bg":124,"./bg.js":124,"./bm":125,"./bm.js":125,"./bn":126,"./bn-bd":127,"./bn-bd.js":127,"./bn.js":126,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":136,"./de-at":137,"./de-at.js":137,"./de-ch":138,"./de-ch.js":138,"./de.js":136,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-in":146,"./en-in.js":146,"./en-nz":147,"./en-nz.js":147,"./en-sg":148,"./en-sg.js":148,"./eo":149,"./eo.js":149,"./es":150,"./es-do":151,"./es-do.js":151,"./es-mx":152,"./es-mx.js":152,"./es-us":153,"./es-us.js":153,"./es.js":150,"./et":154,"./et.js":154,"./eu":155,"./eu.js":155,"./fa":156,"./fa.js":156,"./fi":157,"./fi.js":157,"./fil":158,"./fil.js":158,"./fo":159,"./fo.js":159,"./fr":160,"./fr-ca":161,"./fr-ca.js":161,"./fr-ch":162,"./fr-ch.js":162,"./fr.js":160,"./fy":163,"./fy.js":163,"./ga":164,"./ga.js":164,"./gd":165,"./gd.js":165,"./gl":166,"./gl.js":166,"./gom-deva":167,"./gom-deva.js":167,"./gom-latn":168,"./gom-latn.js":168,"./gu":169,"./gu.js":169,"./he":170,"./he.js":170,"./hi":171,"./hi.js":171,"./hr":172,"./hr.js":172,"./hu":173,"./hu.js":173,"./hy-am":174,"./hy-am.js":174,"./id":175,"./id.js":175,"./is":176,"./is.js":176,"./it":177,"./it-ch":178,"./it-ch.js":178,"./it.js":177,"./ja":179,"./ja.js":179,"./jv":180,"./jv.js":180,"./ka":181,"./ka.js":181,"./kk":182,"./kk.js":182,"./km":183,"./km.js":183,"./kn":184,"./kn.js":184,"./ko":185,"./ko.js":185,"./ku":186,"./ku.js":186,"./ky":187,"./ky.js":187,"./lb":188,"./lb.js":188,"./lo":189,"./lo.js":189,"./lt":190,"./lt.js":190,"./lv":191,"./lv.js":191,"./me":192,"./me.js":192,"./mi":193,"./mi.js":193,"./mk":194,"./mk.js":194,"./ml":195,"./ml.js":195,"./mn":196,"./mn.js":196,"./mr":197,"./mr.js":197,"./ms":198,"./ms-my":199,"./ms-my.js":199,"./ms.js":198,"./mt":200,"./mt.js":200,"./my":201,"./my.js":201,"./nb":202,"./nb.js":202,"./ne":203,"./ne.js":203,"./nl":204,"./nl-be":205,"./nl-be.js":205,"./nl.js":204,"./nn":206,"./nn.js":206,"./oc-lnc":207,"./oc-lnc.js":207,"./pa-in":208,"./pa-in.js":208,"./pl":209,"./pl.js":209,"./pt":210,"./pt-br":211,"./pt-br.js":211,"./pt.js":210,"./ro":212,"./ro.js":212,"./ru":213,"./ru.js":213,"./sd":214,"./sd.js":214,"./se":215,"./se.js":215,"./si":216,"./si.js":216,"./sk":217,"./sk.js":217,"./sl":218,"./sl.js":218,"./sq":219,"./sq.js":219,"./sr":220,"./sr-cyrl":221,"./sr-cyrl.js":221,"./sr.js":220,"./ss":222,"./ss.js":222,"./sv":223,"./sv.js":223,"./sw":224,"./sw.js":224,"./ta":225,"./ta.js":225,"./te":226,"./te.js":226,"./tet":227,"./tet.js":227,"./tg":228,"./tg.js":228,"./th":229,"./th.js":229,"./tk":230,"./tk.js":230,"./tl-ph":231,"./tl-ph.js":231,"./tlh":232,"./tlh.js":232,"./tr":233,"./tr.js":233,"./tzl":234,"./tzl.js":234,"./tzm":235,"./tzm-latn":236,"./tzm-latn.js":236,"./tzm.js":235,"./ug-cn":237,"./ug-cn.js":237,"./uk":238,"./uk.js":238,"./ur":239,"./ur.js":239,"./uz":240,"./uz-latn":241,"./uz-latn.js":241,"./uz.js":240,"./vi":242,"./vi.js":242,"./x-pseudo":243,"./x-pseudo.js":243,"./yo":244,"./yo.js":244,"./zh-cn":245,"./zh-cn.js":245,"./zh-hk":246,"./zh-hk.js":246,"./zh-mo":247,"./zh-mo.js":247,"./zh-tw":248,"./zh-tw.js":248};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=276},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return v}));var n=a(3),r=a(7),o=(a(0),a(97)),i=a(250),u=(a(106),a(94)),s=a.n(u),l={title:"Moving Average Examples",sidebar_label:"Moving Average Examples"},c={unversionedId:"examples/moving_average_example",id:"examples/moving_average_example",isDocsHomePage:!1,title:"Moving Average Examples",description:"When you want to compute a moving average on your data, the main tools at your disposal will be mutate and roll. Let's go over a few examples of how to use them together.",source:"@site/docs/examples/moving_average_example.mdx",slug:"/examples/moving_average_example",permalink:"/tidy/docs/examples/moving_average_example",editUrl:"https://github.com/pbeshai/tidy/docs/examples/moving_average_example.mdx",version:"current",lastUpdatedBy:"Peter Beshai",lastUpdatedAt:1612371336,sidebar_label:"Moving Average Examples",sidebar:"docs",previous:{title:"Getting Started",permalink:"/tidy/docs/getting_started"},next:{title:"Tidy Function API",permalink:"/tidy/docs/api/tidy"}},m=[{value:"Moving Average",id:"moving-average",children:[]},{value:"Moving Average of Rates",id:"moving-average-of-rates",children:[]},{value:"Moving Average by Date",id:"moving-average-by-date",children:[]},{value:"Moving Average by Date with Zerofill",id:"moving-average-by-date-with-zerofill",children:[]}],d={toc:m};function v(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you want to compute a moving average on your data, the main tools at your disposal will be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/tidy#mutate"}),Object(o.b)("strong",{parentName:"a"},"mutate"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/vector#roll"}),Object(o.b)("strong",{parentName:"a"},"roll")),". Let's go over a few examples of how to use them together."),Object(o.b)("h2",{id:"moving-average"},"Moving Average"),Object(o.b)("p",null,"Given input data:"),Object(o.b)(i.a,{className:"mb-leading",header:"Input Data",initial:"json",data:[{value:1},{value:2},{value:3},{value:7},{value:5}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"If we want to compute a 3-item moving average of the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," key, we can do so as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tidy(\n  data, \n  mutateWithSummary({\n    movingAvg: roll(3, mean('value')),\n  })\n)\n")),Object(o.b)("p",null,"Here we're providing a value of ",Object(o.b)("inlineCode",{parentName:"p"},"3")," for the window width argument of ",Object(o.b)("strong",{parentName:"p"},"roll")," and specifying the aggregation to run as the summarizer function ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/summary#mean"}),Object(o.b)("strong",{parentName:"a"},"mean")),". This produces the following output:"),Object(o.b)(i.a,{className:"mb-leading",header:"Output Data",initial:"json",data:[{value:1},{value:2},{value:3,movingAvg:2},{value:7,movingAvg:4},{value:5,movingAvg:5}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"Note that by default ",Object(o.b)("strong",{parentName:"p"},"roll")," will only compute the aggregate value if the full window width of data is available. Since the window sizes for the first and second elements are 1 and 2, which are less than our width argument of ",Object(o.b)("inlineCode",{parentName:"p"},"3"),", their ",Object(o.b)("inlineCode",{parentName:"p"},"movingAvg")," value is undefined."),Object(o.b)("p",null,"To compute the aggregate value even when the window width is less than our desired width, we can pass in an options argument with ",Object(o.b)("inlineCode",{parentName:"p"},"partial")," set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tidy(\n  data, \n  mutateWithSummary({\n    movingAvg: roll(3, mean('value'), { partial: true }),\n  })\n)\n")),Object(o.b)("p",null,"With this change, the output becomes:"),Object(o.b)(i.a,{className:"mb-leading",header:"Output Data with Partial",initial:"json",data:[{value:1,movingAvg:1},{value:2,movingAvg:1.5},{value:3,movingAvg:2},{value:7,movingAvg:4},{value:5,movingAvg:5}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"And that's all there is to doing simple moving averages with tidy."),Object(o.b)("h2",{id:"moving-average-of-rates"},"Moving Average of Rates"),Object(o.b)("p",null,"Working with rates is generally a bit more challenging than plain ol' numbers since we want to sum the numerator and denominator separately in each window as opposed to averaging the sum of rates from each item. Here's where the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/summary#meanrate"}),Object(o.b)("strong",{parentName:"a"},"meanRate"))," summarizer comes in handy."),Object(o.b)(i.a,{className:"mb-leading",header:"Input Data",initial:"json",data:[{numer:1,denom:2},{numer:2,denom:6},{numer:3,denom:7},{numer:7,denom:12},{numer:5,denom:6}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"If we want to compute a 3-item moving average of the rate defined by ",Object(o.b)("inlineCode",{parentName:"p"},"numer / denom"),", we can do so as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tidy(\n  data, \n  mutateWithSummary({\n    movingAvg: roll(3, meanRate('numer', 'denom')),\n  })\n)\n")),Object(o.b)(i.a,{className:"mb-leading",header:"Output Data",initial:"json",data:[{numer:1,denom:2},{numer:2,denom:6},{numer:3,denom:7,movingAvg:.4},{numer:7,denom:12,movingAvg:.48},{numer:5,denom:6,movingAvg:.6}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"Note that the ",Object(o.b)("strong",{parentName:"p"},"incorrect")," way of doing it would involve averaging the rates:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{4-5}","{4-5}":!0}),"tidy(\n  data, \n  mutate({\n    rate: rate('numer', 'denom'),\n  }),\n  mutateWithSummary({\n    movingAvgWrong: roll(3, mean('rate')),\n    movingAvgRight: roll(3, meanRate('numer', 'denom')),\n  })\n)\n")),Object(o.b)(i.a,{className:"mb-leading",header:"Output Data with Wrong",initial:"table",data:[{numer:1,denom:2,rate:.5},{numer:2,denom:6,rate:.333},{numer:3,denom:7,rate:.429,movingAvgWrong:.421,movingAvgRight:.4},{numer:7,denom:12,rate:.583,movingAvgWrong:.448,movingAvgRight:.48},{numer:5,denom:6,rate:.833,movingAvgWrong:.615,movingAvgRight:.6}],mdxType:"JsonOrTable"}),Object(o.b)("h2",{id:"moving-average-by-date"},"Moving Average by Date"),Object(o.b)("p",null,"When working with time series data, we often want be able to re-aggregate the data to a variety of different granularities: e.g., a 7-day moving average (7DMA), 45DMA, 5-week moving average (5WMA), daily, weekly, and so on. For this purpose, we can use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/tidy#summarizemomentgranularity"}),Object(o.b)("strong",{parentName:"a"},"summarizeMomentGranularity"))," tidy function. Note this requires our dates to be stored as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://momentjs.com"}),"moment")," objects and that moment is installed as a dependency in our project. "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If projects are not using moment but would like this functionality, please get in touch and we can figure out a reusable solution.")),Object(o.b)("p",null,"Let's look at an example where we compute a 2-week moving average of ",Object(o.b)("inlineCode",{parentName:"p"},"value"),"."),Object(o.b)(i.a,{className:"mb-leading",header:"Input Data",initial:"table",data:[{date:s.a.utc("2020-01-01"),value:3},{date:s.a.utc("2020-01-02"),value:1},{date:s.a.utc("2020-01-03"),value:4},{date:s.a.utc("2020-01-04"),value:5},{date:s.a.utc("2020-01-05"),value:2},{date:s.a.utc("2020-01-06"),value:4},{date:s.a.utc("2020-01-07"),value:3},{date:s.a.utc("2020-01-08"),value:1},{date:s.a.utc("2020-01-09"),value:3},{date:s.a.utc("2020-01-10"),value:3},{date:s.a.utc("2020-01-11"),value:2},{date:s.a.utc("2020-01-12"),value:5},{date:s.a.utc("2020-01-13"),value:6},{date:s.a.utc("2020-01-14"),value:1},{date:s.a.utc("2020-01-15"),value:2},{date:s.a.utc("2020-01-16"),value:4},{date:s.a.utc("2020-01-17"),value:3},{date:s.a.utc("2020-01-18"),value:1},{date:s.a.utc("2020-01-19"),value:3},{date:s.a.utc("2020-01-20"),value:3},{date:s.a.utc("2020-01-21"),value:2},{date:s.a.utc("2020-01-22"),value:5},{date:s.a.utc("2020-01-23"),value:6},{date:s.a.utc("2020-01-24"),value:1},{date:s.a.utc("2020-01-25"),value:2}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"The first step is to rollup our data from being at a daily granularity to say a weekly granularity before we compute our moving average."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tidy(\n  data,\n  summarizeMomentGranularity('w', { value: sum('value') })\n);\n")),Object(o.b)("p",null,"At this point, our data has been summed up per week."),Object(o.b)(i.a,{className:"mb-leading",header:"Output Weekly Data",initial:"table",data:[{value:15,date:"2019-12-30T00:00:00.000Z",timestamp:"2019-12-30T00:00:00.000Z"},{value:21,date:"2020-01-06T00:00:00.000Z",timestamp:"2020-01-06T00:00:00.000Z"},{value:20,date:"2020-01-13T00:00:00.000Z",timestamp:"2020-01-13T00:00:00.000Z"},{value:19,date:"2020-01-20T00:00:00.000Z",timestamp:"2020-01-20T00:00:00.000Z"}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"We are now ready to compute our moving average:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tidy(\n  data,\n  summarizeMomentGranularity('w', { value: sum('value') }),\n  mutateWithSummary({\n    movingAvg: roll(2, mean('value'))\n  })\n);\n")),Object(o.b)(i.a,{className:"mb-leading",header:"Output Data",initial:"table",data:[{value:15,date:"2019-12-23T00:00:00.000Z",timestamp:"2019-12-23T00:00:00.000Z"},{value:21,date:"2019-12-30T00:00:00.000Z",timestamp:"2019-12-30T00:00:00.000Z",movingAvg:18},{value:20,date:"2020-01-06T00:00:00.000Z",timestamp:"2020-01-06T00:00:00.000Z",movingAvg:20.5},{value:19,date:"2020-01-13T00:00:00.000Z",timestamp:"2020-01-13T00:00:00.000Z",movingAvg:19.5}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"And we're done, in two steps we've moved from daily values in our input data to weekly values which include a 2-week moving average."),Object(o.b)("h2",{id:"moving-average-by-date-with-zerofill"},"Moving Average by Date with Zerofill"),Object(o.b)("p",null,"We often end up with data that is missing values for some dates, which throws off the windows used to compute moving averages. To get around this, we can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/tidy#complete"}),Object(o.b)("strong",{parentName:"a"},"complete"))," to expand our data to include zeroes (or other values) where data is missing in a sequence."),Object(o.b)("p",null,"Consider the following data:"),Object(o.b)(i.a,{className:"mb-leading",header:"Input Data",initial:"table",data:[{date:s.a.utc("2020-01-06"),value:4},{date:s.a.utc("2020-01-07"),value:3},{date:s.a.utc("2020-01-08"),value:1},{date:s.a.utc("2020-01-11"),value:2},{date:s.a.utc("2020-01-12"),value:5},{date:s.a.utc("2020-01-13"),value:6},{date:s.a.utc("2020-01-14"),value:1},{date:s.a.utc("2020-01-17"),value:3},{date:s.a.utc("2020-01-19"),value:3}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"It's missing values for January 9, 10, 15, 16, and 18. If we run our tidy flow on it to compute a 7-day moving average without accounting for these missing values we get"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tidy(\n  data,\n  mutateWithSummary({\n    movingAvg: roll(7, mean('value'), { partial: true })\n  })\n);\n")),Object(o.b)(i.a,{className:"mb-leading",header:"Output Data",initial:"table",data:[{date:"2020-01-06T00:00:00.000Z",value:4,movingAvg:4},{date:"2020-01-07T00:00:00.000Z",value:3,movingAvg:3.5},{date:"2020-01-08T00:00:00.000Z",value:1,movingAvg:2.6666666666666665},{date:"2020-01-11T00:00:00.000Z",value:2,movingAvg:2.5},{date:"2020-01-12T00:00:00.000Z",value:5,movingAvg:3},{date:"2020-01-13T00:00:00.000Z",value:6,movingAvg:3.5},{date:"2020-01-14T00:00:00.000Z",value:1,movingAvg:3.142857142857143},{date:"2020-01-17T00:00:00.000Z",value:3,movingAvg:3},{date:"2020-01-19T00:00:00.000Z",value:3,movingAvg:3}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"As you can see, the moving average doesn't account for the missing days. "),Object(o.b)("p",null,"To get around this, we can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/tidy#complete"}),Object(o.b)("strong",{parentName:"a"},"complete"))," on the data to expand it to include rows for when there is data missing from the expected day-by-day sequence. Since our ",Object(o.b)("inlineCode",{parentName:"p"},"date")," column uses moments, we will have to convert it to an ISO timestamp string first so we can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../api/sequences#fullseqdateisostring"}),Object(o.b)("strong",{parentName:"a"},"fullSeqDateISOString"))," on it. This can be done via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tidy/docs/api/tidy#summarizemomentgranularity"}),Object(o.b)("strong",{parentName:"a"},"summarizeMomentGranularity"))," as shown above or with a simple mutate since we're going to work with daily data."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{3-7}","{3-7}":!0}),"tidy(\n  data,\n  mutate({ timestamp: d => d.date.toISOString() }),\n  complete(\n    { timestamp: fullSeqDateISOString('timestamp', 'day') },\n    { value: 0 }\n  ),\n  mutateWithSummary({\n    movingAvg: roll(7, mean('value'), { partial: true })\n  })\n);\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Alternative example with summarizeMomentGranularity \u2013 granularity should match in ",Object(o.b)("strong",{parentName:"em"},"fullSeqDateISOString")," and ",Object(o.b)("strong",{parentName:"em"},"summarizeMomentGranularity")," ")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{3-7}","{3-7}":!0}),"tidy(\n  data,\n  summarizeMomentGranularity('day', { value: sum('value') }),\n  complete(\n    { timestamp: fullSeqDateISOString('timestamp', 'day') },\n    { value: 0 }\n  ),\n  mutateWithSummary({\n    movingAvg: roll(7, mean('value'), { partial: true })\n  })\n);\n")),Object(o.b)(i.a,{className:"mb-leading",header:"Output Data",initial:"table",data:[{timestamp:"2020-01-06T00:00:00.000Z",date:"2020-01-06T00:00:00.000Z",value:4,movingAvg:4},{timestamp:"2020-01-07T00:00:00.000Z",date:"2020-01-07T00:00:00.000Z",value:3,movingAvg:3.5},{timestamp:"2020-01-08T00:00:00.000Z",date:"2020-01-08T00:00:00.000Z",value:1,movingAvg:2.6666666666666665},{timestamp:"2020-01-09T00:00:00.000Z",value:0,movingAvg:2},{timestamp:"2020-01-10T00:00:00.000Z",value:0,movingAvg:1.6},{timestamp:"2020-01-11T00:00:00.000Z",date:"2020-01-11T00:00:00.000Z",value:2,movingAvg:1.6666666666666667},{timestamp:"2020-01-12T00:00:00.000Z",date:"2020-01-12T00:00:00.000Z",value:5,movingAvg:2.142857142857143},{timestamp:"2020-01-13T00:00:00.000Z",date:"2020-01-13T00:00:00.000Z",value:6,movingAvg:2.4285714285714284},{timestamp:"2020-01-14T00:00:00.000Z",date:"2020-01-14T00:00:00.000Z",value:1,movingAvg:2.142857142857143},{timestamp:"2020-01-15T00:00:00.000Z",value:0,movingAvg:2},{timestamp:"2020-01-16T00:00:00.000Z",value:0,movingAvg:2},{timestamp:"2020-01-17T00:00:00.000Z",date:"2020-01-17T00:00:00.000Z",value:3,movingAvg:2.4285714285714284},{timestamp:"2020-01-18T00:00:00.000Z",value:0,movingAvg:2.142857142857143},{timestamp:"2020-01-19T00:00:00.000Z",date:"2020-01-19T00:00:00.000Z",value:3,movingAvg:1.8571428571428572}],mdxType:"JsonOrTable"}),Object(o.b)("p",null,"Now we can see that rows have been added with ",Object(o.b)("inlineCode",{parentName:"p"},"value: 0")," for the missing dates in the sequence, which enables our moving average to be computed correctly."))}v.isMDXComponent=!0},95:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},96:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(107);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return n.useThemeConfig}});var r=a(252);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return r.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return r.DEFAULT_SEARCH_TAG}});var o=a(108);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var i=a(256);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var u=a(257);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return u.useTitleFormatter}});var s=a(258);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return s.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return s.useDocsPreferredVersionByPluginId}});var l=a(109);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return l.DocsPreferredVersionContextProvider}})},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},m=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),v=n,g=m["".concat(i,".").concat(v)]||m[v]||d[v]||o;return a?r.a.createElement(g,u(u({ref:t},l),{},{components:a})):r.a.createElement(g,u({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=v;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}v.displayName="MDXCreateElement"},98:function(e,t,a){try{e.exports=a(253)}catch(n){e.exports={}}}}]);