"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8611],{8611:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(9636),a=t(3238),r=t(7190),u=t(6685),i=t(7829),o=t(1630),n=t(8430),c=t(2549);const h=["/DailyRoutine.html","/Fitness.html","/","/blog.html","/intro.html","/posts/2024-03-01-blog_example.html","/posts/2024-03-02-blog_example2.html","/apps/Applist.html","/apps/Chrome.html","/apps/design.html","/apps/toolbox.html","/code/AutoHotkey.html","/code/Electron.html","/code/HTML.html","/code/Javascript.html","/code/Markdown.html","/code/Python.html","/code/","/code/Regex.html","/code/Vue.html","/deploy/CloudServices.html","/deploy/Cloudflare.html","/deploy/DNS.html","/deploy/GitHub.html","/deploy/MySQL.html","/deploy/Static.html","/deploy/VPS.html","/family/Coupon.html","/family/Diet.html","/family/Life.html","/web/Comments.html","/web/VuePress.html","/web/docsify.html","/apps/topic/","/apps/topic/topic01.html","/apps/topic/topic02anytitle.html","/404.html","/posts/","/apps/","/deploy/","/family/","/web/","/category/","/category/%E7%BD%91%E7%BB%9C/","/category/%E5%B7%A5%E5%85%B7/","/tag/","/tag/%E7%BD%91%E7%BB%9C%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/article/","/star/","/timeline/"];t(5034);const p=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),v=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),h=(0,o.Zv)(),m=(0,s.s5)(c.a),{enabled:g,addQueryHistory:E,queryHistory:f,removeQueryHistory:H}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:p,addQueryHistory:t=>{l&&(p.value=Array.from(new Set([t,...p.value.slice(0,e-1)])))},removeQueryHistory:e=>{p.value=[...p.value.slice(0,e),...p.value.slice(e+1)]}}})(),{enabled:k,resultHistory:C,addResultHistory:b,removeResultHistory:w}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:v(l),display:l.display};"header"in l&&(e.header=l.header),y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),Q=g||k,R=(0,u.lW)(e,"queries"),{results:D,isSearching:x}=(e=>{const l=(0,c.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,u.KR)(0),n=(0,i.EW)((()=>a.value>0)),h=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:o}=(0,c.c)(),n=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=e=>e,splitWord:o,suggestionsFilter:n,...c}=l.value;r?(a.value+=1,u(e.join(" "),t.value,c).then((e=>i(e,r,t.value,s.value))).then((e=>{a.value-=1,h.value=e})).catch((e=>{console.warn(e),a.value-=1,a.value||(h.value=[])}))):h.value=[]}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,t],(([e])=>n(e)),{immediate:!0}),(0,i.hi)((()=>{o()}))})),{isSearching:n,results:h}})(R),B=(0,u.Kh)({isQuery:!0,index:0}),A=(0,u.KR)(0),S=(0,u.KR)(0),q=(0,i.EW)((()=>Q&&(f.value.length>0||C.value.length>0))),_=(0,i.EW)((()=>D.value.length>0)),M=(0,i.EW)((()=>D.value[A.value]||null)),T=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),W=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",T([t,...e,a]))))}return e.display.map((e=>(0,i.h)("div",T(e))))},F=()=>{A.value=0,S.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(_.value){if("ArrowUp"===s.key)S.value>0?S.value-=1:(A.value=A.value>0?A.value-1:D.value.length-1,S.value=M.value.contents.length-1);else if("ArrowDown"===s.key)S.value<M.value.contents.length-1?S.value+=1:(A.value=A.value<D.value.length-1?A.value+1:0,S.value=0);else if("Enter"===s.key){const l=M.value.contents[S.value];E(e.queries.join(" ")),b(l),t.push(v(l)),F()}}else if(k)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=B;0===l?(B.isQuery=!e,B.index=e?C.value.length-1:f.value.length-1):B.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=B;l===(e?f.value.length-1:C.value.length-1)?(B.isQuery=!e,B.index=0):B.index=l+1})();else if("Enter"===s.key){const{index:e}=B;B.isQuery?(l("updateQuery",f.value[e]),s.preventDefault()):(t.push(C.value[e].link),F())}})),(0,i.wB)([A,S],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!_.value:!q.value}],id:"search-pro-results"},e.queries.length?x.value?(0,i.h)(n.S,{hint:m.value.searching}):_.value?(0,i.h)("ul",{class:"search-pro-result-list"},D.value.map((({title:l,contents:t},s)=>{const a=A.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&S.value===t;return(0,i.h)(o.Wt,{to:v(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{E(e.queries.join(" ")),b(l),F()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?n.T:"heading"===l.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",W(l))])]))}))])}))):m.value.emptyResult:Q?q.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),f.value.map(((e,t)=>(0,i.h)("div",{class:["search-pro-result-item",{active:B.isQuery&&B.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),H(t)}})])))])):null,k?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),C.value.map(((e,l)=>(0,i.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!B.isQuery&&B.index===l}],onClick:()=>{F()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>T(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),w(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);