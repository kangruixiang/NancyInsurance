(function(e){function t(t){for(var a,n,r=t[0],o=t[1],l=t[2],f=0,u=[];f<r.length;f++)n=r[f],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&u.push(c[n][0]),c[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,r=1;r<s.length;r++){var o=s[r];0!==c[o]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},c={app:0},i=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("8a23"),c=s.n(a);c.a},"2d4b":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=i,e.exports=c,c.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-content",[s("Test")],1)],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section main"},[s("div",{staticClass:"card content"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("1. Select Website")]),s("div",{staticClass:"control has-icons-left"},[s("div",{staticClass:"select is-primary"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.website,expression:"website"}],attrs:{placeholder:"Select"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.website=t.target.multiple?s:s[0]}}},e._l(e.sites,(function(t){return s("option",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),e._m(0)])]),s("div",{staticClass:"cpt-code"},[s("div",{staticClass:"field formattedDate"},[s("label",{staticClass:"label"},[e._v("Dates")]),s("div",{staticClass:"control"},e._l(e.formattedDate,(function(t){return s("div",{key:t},[e._v(e._s(t))])})),0)]),s("div",{staticClass:"calendar"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("2. Select Dates")]),s("div",{staticClass:"control"},[s("b-datepicker",{attrs:{"date-formatter":e.dobFormatter,multiple:"",inline:""},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}})],1)])])]),s("div",{staticClass:"cpt-container"},[s("label",{staticClass:"label"},[e._v("3. Select Modifiers")]),e._l(e.cpt,(function(t){return s("div",{key:t.label,staticClass:"cpt-code"},[s("div",{staticClass:"field"},[s("label",{staticClass:"checkbox"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"code.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(s){var a=t.checked,c=s.target,i=!!c.checked;if(Array.isArray(a)){var n=null,r=e._i(a,n);c.checked?r<0&&e.$set(t,"checked",a.concat([n])):r>-1&&e.$set(t,"checked",a.slice(0,r).concat(a.slice(r+1)))}else e.$set(t,"checked",i)}}}),e._v(" "+e._s(t.label)+" ")])])]),t.checked?s("div",{staticClass:"code-input-container"},[s("div",{staticClass:"field code-input"},[s("label",{staticClass:"label"},[e._v(" Modifier "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modifier,expression:"code.modifier"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.modifier},on:{input:function(s){s.target.composing||e.$set(t,"modifier",s.target.value)}}})])])]),t.checked?s("div",{staticClass:"field code-input"},[s("label",{staticClass:"label"},[e._v(" Cost "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cost,expression:"code.cost"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.cost},on:{input:function(s){s.target.composing||e.$set(t,"cost",s.target.value)}}})])])]):e._e(),t.checked?s("div",{staticClass:"field code-input"},[s("label",{staticClass:"label"},[e._v(" Unit "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.unit,expression:"code.unit"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.unit},on:{input:function(s){s.target.composing||e.$set(t,"unit",s.target.value)}}})])])]):e._e()]):e._e()])}))],2),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("4. Select Diagnosis Codes")]),s("div",{staticClass:"control has-icons-left"},[s("div",{staticClass:"select is-primary"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.diagnosisCode,expression:"diagnosisCode"}],attrs:{placeholder:"Select"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.diagnosisCode=t.target.multiple?s:s[0]}}},e._l(e.diagnosis,(function(t){return s("option",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),e._m(1)])]),s("button",{staticClass:"button is-primary",on:{click:e.submit}},[e._v("Submit")]),e.btnShow?s("a",{attrs:{href:"javascript: "+e.bScript}},[e._v("Bookmark")]):e._e()])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon is-left"},[s("i",{staticClass:"fas fa-bookmark"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon is-left"},[s("i",{staticClass:"fas fa-sort-numeric-down"})])}],o=(s("99af"),s("159b"),{name:"Form",data:function(){return{website:"",dates:[],test:"",sites:["Availity","OfficeAlly","United Health Care"],diagnosis:[1,2,3,4,5],diagnosisCode:"",cpt:[{label:99203,checked:!1,modifier:"25",cost:"65",unit:"1"},{label:99213,checked:!1,modifier:"25",cost:"45",unit:"1"},{label:97813,checked:!1,modifier:"",cost:"75",unit:"1"},{label:97814,checked:!1,modifier:"",cost:"180",unit:"3"},{label:97026,checked:!1,modifier:"GP",cost:"10",unit:"1"},{label:97124,checked:!1,modifier:"GP",cost:"60",unit:"2"}],btnShow:!1,script:"",iframe:""}},methods:{submit:function(){console.log(this.a99203),this.script="console.log('test')",this.generate(),this.btnShow=!0},generate:function(){var e;switch(this.website){case"Availity":e="https://thisispiggy.github.io/NancyInsurance/js/availity.js";break;case"OfficeAlly":e="https://thisispiggy.github.io/NancyInsurance/js/officeally.js";break;default:e="https://thisispiggy.github.io/NancyInsurance/js/united.js";break}var t=JSON.stringify({website:this.website,dates:this.formattedDate,diagnosisCode:this.diagnosisCode,cpt:this.cpt});this.bScript=encodeURIComponent("var BOOKMARK =".concat(t,';var s = document.createElement("script");s.type = "text/javascript";s.src="').concat(e,'";document.body.appendChild(s);'))},dobFormatter:function(e){var t=s("c1df"),a=new Array;return e.forEach((function(e){var s=t(e).format("MM/DD/YYYY");a.push(s)})),a}},computed:{formattedDate:function(){var e=s("c1df"),t=new Array;return this.dates.forEach((function(s){var a=e(s).format("MM/DD/YYYY");t.push(a)})),t}}}),l=o,d=(s("7255"),s("2877")),f=Object(d["a"])(l,n,r,!1,null,"dcd1b098",null),u=f.exports,b={name:"App",components:{Test:u},data:function(){return{}}},j=b,p=(s("034f"),s("6544")),v=s.n(p),m=s("7496"),h=s("a75b"),y=Object(d["a"])(j,c,i,!1,null,null,null),g=y.exports;v()(y,{VApp:m["a"],VContent:h["a"]});var k=s("f309");a["a"].use(k["a"]);var C=new k["a"]({}),_=s("289d"),w=(s("5abe"),s("c1df")),x=s.n(w);a["a"].use(_["a"]),a["a"].config.productionTip=!1,new a["a"]({vuetify:C,moment:x.a,render:function(e){return e(g)}}).$mount("#app")},7255:function(e,t,s){"use strict";var a=s("2d4b"),c=s.n(a);c.a},"8a23":function(e,t,s){}});
//# sourceMappingURL=app.d18b6e86.js.map