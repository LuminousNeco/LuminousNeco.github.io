(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{419:function(t,e,n){"use strict";n.r(e);n(87);var r=n(16),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,o="http://ec2-54-150-105-27.ap-northeast-1.compute.amazonaws.com",c="/api/blog/".concat(r.slug),e.next=5,n.$get(o+c);case 5:return l=e.sent,e.abrupt("return",{url:o,post:l});case 7:case"end":return e.stop()}}),e)})))()}},c=n(73),l=n(104),v=n.n(l),d=n(232),_=n(385),m=n(380),h=n(391),f=n(379),w=n(158),x=n(134),C=n(392),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{lg:"8","offset-lg":"2"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800",outlined:""}},[n("div",{staticClass:"v-img-responsive-container",style:"--pt:"+t.post.thumbnail_height/t.post.thumbnail_width*100+"%",attrs:{width:"100%"}},[t.post.thumbnail?n("v-img",{staticClass:"v-img-responsive",attrs:{src:"data:image/"+t.post.thumbnail_ext+";base64, "+t.post.thumbnail}}):t._e()],1),t._v(" "),n("v-card-title",{staticClass:"headline"},[t._v(" \n        "+t._s(t.post.title)+"          \n      ")]),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(t.post.created_at))]),t._v(" "),n("p",{staticClass:"text--primary",staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.post.content))])])],1)],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{lg:"8","offset-lg":"2"}},[n("div",{staticClass:"d-flex justify-space-around "},[n("v-btn",{attrs:{text:"",color:"info",disabled:!t.post.previous,to:"/articles/"+t.post.previous}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-left")]),t._v("\n        previous\n      ")],1),t._v(" "),n("v-btn",{staticStyle:{"background-color":"transparent"},attrs:{text:"",plain:"",color:"info",to:"/articles"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-view-list")]),t._v("\n        back to list\n      ")],1),t._v(" "),n("v-btn",{attrs:{text:"",color:"info",disabled:!t.post.next,to:"/articles/"+t.post.next}},[t._v("\n        next\n        "),n("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-right")])],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:_.a,VCardText:m.b,VCardTitle:m.c,VCol:h.a,VContainer:f.a,VIcon:w.a,VImg:x.a,VRow:C.a})}}]);