"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[483],{5483:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});var r=n(1413),a=n(9439),c=n(2791),o="NOT_FOUND";var u=function(t,e){return t===e};function s(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?u:r,c=n.maxSize,s=void 0===c?1:c,i=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),_=1===s?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:o},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(e,a){r(e)===o&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(s,l);function f(){var e=_.get(arguments);if(e===o){if(e=t.apply(null,arguments),i){var n=_.getEntries(),r=n.find((function(t){return i(t.value,e)}));r&&(e=r.value)}_.put(arguments,e)}return e}return f.clearCache=function(){return _.clear()},f}function i(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function l(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var c,o=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=u,_=l.memoizeOptions,f=void 0===_?n:_,m=Array.isArray(f)?f:[f],p=i(r),d=t.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(m)),h=t((function(){for(var t=[],e=p.length,n=0;n<e;n++)t.push(p[n].apply(null,arguments));return c=d.apply(null,t)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:d,dependencies:p,lastResult:function(){return c},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var _=l(s),f=function(t){return t.contactsStore.contacts},m=function(t){return t.contactsStore.isLoading},p=function(t){return t.contactsStore.error},d=function(t){return t.filter},h=_([f,d],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},x=n(3855),g=n(2639),y=n(2387),b=n(1686),j=n.n(b),C="ContactForm_contact_form_cont__lRQTO",N="ContactForm_contact_form_inp__-1JaS",w="ContactForm_contact_form_btn__2fPS7",k="ContactForm_contact_form_cont_text__UzMpq",A=n(184),S=function(){var t=(0,c.useState)(""),e=(0,a.Z)(t,2),n=e[0],o=e[1],u=(0,c.useState)(""),s=(0,a.Z)(u,2),i=s[0],l=s[1],_=(0,c.useState)(!1),m=(0,a.Z)(_,2),p=m[0],d=m[1],h=(0,x.I0)(),b=(0,x.v9)(f);return(0,A.jsxs)("form",{className:C,onSubmit:function(t){t.preventDefault();var e={name:n,number:i};d(!0),function(t){var e=(0,r.Z)((0,r.Z)({},t),{},{id:v()});b.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?(alert("".concat(t.name," is already in contacts!")),d(!1)):(h((0,y.je)(e)),o(""),l(""),setTimeout((function(){return d(!1)}),1e3),j().Notify.success("Contact ".concat(t.name," is added!"),{position:"center-top",timeout:3e3}))}(e)},children:[(0,A.jsxs)("label",{children:[(0,A.jsx)("p",{className:k,children:"Name"}),(0,A.jsx)("input",{className:N,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",onChange:function(t){return o(t.target.value)},value:n})]}),(0,A.jsxs)("label",{children:[(0,A.jsx)("p",{className:k,children:"Number"}),(0,A.jsx)("input",{className:N,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number",onChange:function(t){return l(t.target.value)},value:i})]}),(0,A.jsx)("button",{type:"submit",className:w,children:p?(0,A.jsx)(g.Z,{className:"spinner"}):"Add contact"})]})},F="ContactList_contacts_item_btn__slcr+",E="ContactList_contacts_item__E-7AL",L="ContactList_contacts_cont__A381Z",M=function(){var t=(0,x.I0)(),e=(0,x.v9)(h);return(0,A.jsx)("ul",{className:L,children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,A.jsxs)("li",{className:E,children:[r,": ",a,(0,A.jsx)("button",{className:F,type:"button",onClick:function(){return t((0,y.xX)(n))},children:"Delete"})]},n)}))})},Z=n(6189),z="Filter_filter_inp__L1-VS",U="Filter_filter_cont__mrKWX",q="Filter_filter_cont_text__pArWt",O=function(){var t=(0,x.I0)(),e=(0,x.v9)(d);return(0,A.jsxs)("label",{className:U,children:[(0,A.jsx)("p",{className:q,children:"Find contacts by name"}),(0,A.jsx)("input",{className:z,type:"text",name:e,onChange:function(e){t((0,Z.T)(e.target.value))},placeholder:"Enter name"})]})},P=n(9606),I={user_cont:"UserMenu_user_cont__KCpx3",user_cont_text:"UserMenu_user_cont_text__0VQm5",user_cont_text_add:"UserMenu_user_cont_text_add__iZa3N",user_cont_btn:"UserMenu_user_cont_btn__VMxMN",user_log_btn:"UserMenu_user_log_btn__Q+QTY"},T=function(){var t=(0,x.I0)(),e=(0,x.v9)(P.tT);return(0,A.jsxs)("div",{className:I.user_cont,children:[(0,A.jsxs)("div",{className:I.user_cont_data,children:[(0,A.jsx)("span",{className:I.user_cont_text,children:e.name})," ",(0,A.jsx)("p",{className:I.user_cont_text_add,children:e.email})]}),(0,A.jsx)("div",{className:I.user_cont_btn,children:(0,A.jsx)("button",{className:I.user_log_btn,onClick:function(){t((0,y.j2)())},children:"LogOut"})})]})},D="ContactsPage_cont_page__cD8dW",R="ContactsPage_cont_page_cont__DrqYq",V="ContactsPage_cont_page_title__awmM+",Q="ContactsPage_cont_page_subtitle__J6XMB",J=function(){var t=(0,x.I0)(),e=(0,x.v9)(m),n=(0,x.v9)(p);return(0,c.useEffect)((function(){t((0,y.VC)())}),[t]),(0,A.jsxs)("div",{className:D,children:[(0,A.jsx)(T,{}),(0,A.jsxs)("div",{className:R,children:[(0,A.jsx)("h1",{className:V,children:"Phonebook"}),(0,A.jsx)(S,{}),(0,A.jsx)("h2",{className:Q,children:"Contacts"}),(0,A.jsx)(O,{}),e&&!n,(0,A.jsx)(M,{})]})]})}}}]);
//# sourceMappingURL=483.ad7556c0.chunk.js.map