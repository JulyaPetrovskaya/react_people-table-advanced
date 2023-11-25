(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(24),a=(c(34),c(35),c(6)),s=c(3),r=(c(36),c(8)),l=c.n(r),i=c(1),j=function(){var e=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:e,to:"people",children:"People"})]})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})},d=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})},b=c(4),u=c(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(38);var O=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.person,c=Object(a.d)(),n=Object(b.a)(c,1)[0];return Object(i.jsx)(a.b,{to:{pathname:"/people/".concat(t.slug),search:n.toString()},className:l()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.person,c=e.people,n=t.sex,a=t.born,r=t.died,j=t.motherName,o=t.fatherName,d=Object(u.useMemo)((function(){return function(e){return c.find((function(t){return t.name===e}))}}),[c]),b=d(j),h=d(o),O=j||"-",m=o||"-",p=Object(s.r)().slug;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":t.slug===p}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(x,{person:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:b?Object(i.jsx)(x,{person:b}):O}),Object(i.jsx)("td",{children:h?Object(i.jsx)(x,{person:h}):m})]})},p=c(22),f=c(25);function v(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var N=["children","params"],g=function(e){var t=e.children,c=e.params,n=Object(f.a)(e,N),s=Object(a.d)(),r=Object(b.a)(s,1)[0];return Object(i.jsx)(a.b,Object(p.a)(Object(p.a)({to:{search:v(r,c)}},n),{},{children:t}))},y=function(e){return e.Name="Name",e.Sex="Sex",e.Born="Born",e.Died="Died",e}({}),w=function(e){var t=e.people;var c=Object(a.d)(),n=Object(b.a)(c,1)[0],s=n.get("sex"),r=n.get("query"),j=n.getAll("centuries")||[],o=n.get("sort")||"",d=n.get("order")||"",h=Object(u.useMemo)((function(){var e=t.filter((function(e){var t=null===r||void 0===r?void 0:r.toLowerCase();return(s?e.sex===s:e)&&function(){var e,t,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return n.name.toLowerCase().includes(c)||(null===(e=n.fatherName)||void 0===e?void 0:e.toLowerCase().includes(c))||(null===(t=n.motherName)||void 0===t?void 0:t.toLowerCase().includes(c))}(t,e)&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return!e.length||e.includes(Math.ceil(t.born/100).toString())}(j,e)})).sort((function(e,t){switch(o){case y.Name:return e.name.localeCompare(t.name);case y.Sex:return e.sex.localeCompare(t.sex);case y.Born:return e.born-t.born;case y.Died:return e.died-t.died;default:return 0}}));return"desc"===d&&e.reverse(),e}),[s,r,j]);return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsxs)("thead",{children:[Object.values(y).map((function(e){return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[String(e),Object(i.jsx)(g,{params:{sort:"desc"===d&&o===e?null:e,order:o!==e||d?null:"desc"},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas","fa-sort",{"fa-sort-up":o===e&&!d,"fa-sort-down":o===e&&d})})})})]})},e)})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]}),Object(i.jsx)("tbody",{children:h.map((function(e){return Object(i.jsx)(m,{person:e,people:h},e.name)}))})]})},S=c(7),k=function(){var e=Object(a.d)(),t=Object(b.a)(e,2),c=t[0],n=t[1],s=c.get("sex"),r=c.get("query")||"",j=c.getAll("centuries")||[];return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(g,{className:l()({"is-active":!s}),params:{sex:null},children:"All"}),Object(i.jsx)(g,{className:l()({"is-active":"m"===s}),params:{sex:"m"},children:"Male"}),Object(i.jsx)(g,{className:l()({"is-active":"f"===s}),params:{sex:"f"},children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){n(v(c,{query:e.target.value||null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(i.jsx)(g,{"data-cy":"century",className:l()("button","mr-1",{"is-info":j.includes(e)}),params:{centuries:j.includes(e)?j.filter((function(t){return t!==e})):[].concat(Object(S.a)(j),[e])},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(g,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(a.b,{to:{search:""},className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})},L=function(){var e=Object(u.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!0),s=Object(b.a)(a,2),r=s[0],l=s[1],j=Object(u.useState)(!1),o=Object(b.a)(j,2),d=o[0],x=o[1],m=!r&&!d&&c.length>0;return Object(u.useEffect)((function(){h().then((function(e){return n(e)})).catch((function(){return x(!0)})).finally((function(){return l(!1)}))}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!r&&Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(i.jsx)(k,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(O,{}),d&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!r&&!d&&0===c.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),m&&Object(i.jsx)(w,{people:c})]})})]})})]})},A=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})},C=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(s.c,{path:"home",element:Object(i.jsx)(s.a,{to:"/"})}),Object(i.jsxs)(s.c,{path:"people",children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(L,{})}),Object(i.jsx)(s.c,{path:":slug",element:Object(i.jsx)(L,{})})]}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(A,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(C,{}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f3eafef1.chunk.js.map