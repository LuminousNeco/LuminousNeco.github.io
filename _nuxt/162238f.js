(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{418:function(e,t,r){"use strict";r.r(t);r(37),r(17),r(70),r(83),r(39),r(238);var n=r(101),o=r.n(n),l={data:function(){return{required:[function(e){return!!e||"Required."}],show:!1}},methods:{submit:function(){var e=this,t=new URLSearchParams;t.append("accessKey","7eab0e4f-d476-4ffd-b382-dd1e7d4ecb65"),t.append("name",this.name),t.append("subject",this.subject),t.append("email",this.email),t.append("message",this.message),this.$refs.form.validate()&&o.a.post("https://api.staticforms.xyz/submit",t).then((function(t){e.$refs.form.reset(),alert("Your message was sent successfully. Thanks for reaching out!")})).catch((function(e){alert("Sorry, an error has occurred.")}))}},created:function(){var e=this;setTimeout((function(){e.show=!0}),1)}},c=r(73),m=r(104),v=r.n(m),d=r(232),f=r(385),h=r(380),w=r(391),x=r(379),_=r(414),V=r(158),k=r(392),C=r(164),y=r(376),j=r(409),T=r(415),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"center-align-container"},[r("v-row",[r("h1",[r("v-icon",{attrs:{left:"","x-large":""}},[e._v("mdi-email")]),e._v("\n      CONTACT\n    ")],1)]),e._v(" "),r("v-row",[r("p",[e._v("Do you have a question? or would you like to work together?")])]),e._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[r("v-slide-y-reverse-transition",[r("v-card",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[r("v-form",{ref:"form",staticClass:"pa-8"},[r("v-text-field",{attrs:{label:"name",rules:e.required},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{label:"title"},model:{value:e.subject,callback:function(t){e.subject=t},expression:"subject"}}),e._v(" "),r("v-text-field",{attrs:{label:"e-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-textarea",{attrs:{label:"message",rules:e.required},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"mr-4",on:{click:e.submit}},[e._v(" submit ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:d.a,VCard:f.a,VCardActions:h.a,VCol:w.a,VContainer:x.a,VForm:_.a,VIcon:V.a,VRow:k.a,VSlideYReverseTransition:C.d,VSpacer:y.a,VTextField:j.a,VTextarea:T.a})}}]);