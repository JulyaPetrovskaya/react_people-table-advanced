(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(24),s=(c(34),c(35),c(6)),a=c(3),r=(c(36),c(8)),l=c.n(r),i=c(1),j=function(){var e=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.c,{className:e,to:"/",children:"Home"}),Object(i.jsx)(s.c,{className:e,to:"people",children:"People"})]})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},d=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})},b=c(4),u=c(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(38);var O=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.person,c=Object(a.r)().slug;return Object(i.jsx)(s.b,{to:c?"../".concat(t.slug):"".concat(t.slug),className:l()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.person,c=e.people,n=t.sex,s=t.born,r=t.died,j=t.motherName,o=t.fatherName,d=Object(u.useMemo)((function(){return function(e){return c.find((function(t){return t.name===e}))}}),[c]),b=d(j),h=d(o),O=j||"-",m=o||"-",p=Object(a.r)().slug;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":t.slug===p}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(x,{person:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:b?Object(i.jsx)(x,{person:b}):O}),Object(i.jsx)("td",{children:h?Object(i.jsx)(x,{person:h}):m})]})},p=c(22),f=c(25);function v(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),n=t[0],s=t[1];null===s?c.delete(n):Array.isArray(s)?(c.delete(n),s.forEach((function(e){c.append(n,e)}))):c.set(n,s)})),c.toString()}var N=["children","params"],g=function(e){var t=e.children,c=e.params,n=Object(f.a)(e,N),a=Object(s.d)(),r=Object(b.a)(a,1)[0];return Object(i.jsx)(s.b,Object(p.a)(Object(p.a)({to:{search:v(r,c)}},n),{},{children:t}))},y=function(e){var t=e.people,c={Name:"name",Sex:"sex",Born:"born",Died:"died"};var n=Object(s.d)(),a=Object(b.a)(n,1)[0],r=a.get("sex"),j=a.get("query"),o=a.getAll("centuries")||[],d=a.get("sort")||"",h=a.get("order")||"",O=Object(u.useMemo)((function(){var e=t.filter((function(e){var t=null===j||void 0===j?void 0:j.toLowerCase();return(r?e.sex===r:e)&&function(){var e,t,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return n.name.toLowerCase().includes(c)||(null===(e=n.fatherName)||void 0===e?void 0:e.toLowerCase().includes(c))||(null===(t=n.motherName)||void 0===t?void 0:t.toLowerCase().includes(c))}(t,e)&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return!e.length||e.includes(Math.ceil(t.born/100).toString())}(o,e)})).sort((function(e,t){switch(d){case c.Name:case c.Sex:return e[d].localeCompare(t[d]);case c.Born:case c.Died:return e[d]-t[d];default:return 0}}));return"desc"===h&&e.reverse(),e}),[r,j,o]),x=Object.keys(c);return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[x.map((function(e){return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(i.jsx)(g,{params:{sort:"desc"===h&&d===c[e]?null:c[e],order:d!==c[e]||h?null:"desc"},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas","fa-sort",{"fa-sort-up":d===c[e]&&!h,"fa-sort-down":d===c[e]&&h})})})})]})},e)})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:O.map((function(e){return Object(i.jsx)(m,{person:e,people:O},e.name)}))})]})},w=c(7),k=function(){var e=Object(s.d)(),t=Object(b.a)(e,2),c=t[0],n=t[1],a=c.get("sex"),r=c.get("query")||"",j=c.getAll("centuries")||[];return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(g,{className:l()({"is-active":!a}),params:{sex:null},children:"All"}),Object(i.jsx)(g,{className:l()({"is-active":"m"===a}),params:{sex:"m"},children:"Male"}),Object(i.jsx)(g,{className:l()({"is-active":"f"===a}),params:{sex:"f"},children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){n(v(c,{query:e.target.value||null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(i.jsx)(g,{"data-cy":"century",className:l()("button","mr-1",{"is-info":j.includes(e)}),params:{centuries:j.includes(e)?j.filter((function(t){return t!==e})):[].concat(Object(w.a)(j),[e])},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(g,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(s.b,{to:{search:""},className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})},S=function(){var e=Object(u.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(u.useState)(!0),a=Object(b.a)(s,2),r=a[0],l=a[1],j=Object(u.useState)(!1),o=Object(b.a)(j,2),d=o[0],x=o[1],m=!r&&!d&&c.length>0;return Object(u.useEffect)((function(){h().then((function(e){return n(e)})).catch((function(){return x(!0)})).finally((function(){return l(!1)}))}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!r&&Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(i.jsx)(k,{})}),Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(O,{}),d&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!r&&!d&&0===c.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),m&&Object(i.jsx)(y,{people:c})]})]})})]})},L=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})},A=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/"})}),Object(i.jsxs)(a.c,{path:"people",children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(S,{})}),Object(i.jsx)(a.c,{path:":slug",element:Object(i.jsx)(S,{})})]}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(L,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(A,{}))}},[[39,1,2]]]);
//# sourceMappingURL=main.c551d8db.chunk.js.map