(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{380:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return v}));var r=n(381),o=n(1),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");r.a},406:function(e,t,n){var content=n(407);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("5939d713",content,!0,{sourceMap:!1})},407:function(e,t,n){(t=n(9)(!1)).push([e.i,".center-align-container .row{justify-content:center}.v-img-responsive-container{position:relative;padding-top:var(--pt)}.v-img-responsive{position:absolute;top:0}.v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),e.exports=t},416:function(e,t,n){"use strict";n.r(t);n(53);var r={data:function(){return{skillCategory:[{id:1,icon:"mdi-monitor",name:"Frontend"},{id:2,icon:"fa-cog",name:"Backend"},{id:3,icon:"fa-database",name:"Database"},{id:4,icon:"fa-network-wired",name:"Infrastructure and Tools"},{id:5,icon:"fa-language",name:"Languages"}],items:[{categoryId:1,rate:4.5,title:"javascript",remarks:""},{categoryId:1,rate:4,title:"TypeScript",remarks:""},{categoryId:1,rate:4,title:"jQuery",remarks:""},{categoryId:1,rate:3.5,title:"Vue.js",remarks:"This site is made with Nuxt.js and Vuetify."},{categoryId:2,rate:5,title:"C#",remarks:""},{categoryId:2,rate:4,title:"php",remarks:"The API for this site is made with Laravel."},{categoryId:2,rate:2,title:"Python",remarks:"I'm studying."},{categoryId:3,rate:4,title:"Oracle",remarks:"I can performance tuning."},{categoryId:3,rate:4,title:"SQL Server",remarks:"I use it for work."},{categoryId:3,rate:4,title:"MySQL",remarks:"I use it for side business."},{categoryId:4,rate:3,title:"AWS",remarks:"The API for this site is working on AWS."},{categoryId:4,rate:4,title:"Git / GitHub"},{categoryId:5,rate:2.5,title:"English",remarks:"I study English every day."},{categoryId:5,rate:5,title:"Japanese"}]}},methods:{categoryItems:function(e){return this.items.filter((function(t){return t.categoryId===e}))}}},o=n(73),l=n(104),c=n.n(l),d=n(381),v=n(380),h=n(391),f=n(379),m=n(158),y=(n(46),n(14),n(172),n(406),n(84)),I=n(20),k=(n(39),n(0)),_=k.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var n=this;this.clearDelay();var r=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){n.isActive={open:!0,close:!1}[e]},r)}}}),x=n(127),w=n(79),H=k.a.extend({name:"rippleable",directives:{ripple:w.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),C=n(25),S=n(1),V=n(6),T=Object(V.a)(I.a,_,H,x.a,C.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,r=e.light,o=e.medium,small=e.small;return{dark:t,large:n,light:r,medium:o,size:e.size,small:small,xLarge:e.xLarge,xSmall:e.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",(function(){t.hoverIndex=t.genHoverIndex(e,i)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(y.a,this.setTextColor(this.getColor(t),{attrs:{tabindex:-1,"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(S.g)(Number(this.length)).map((function(i){return t.genItem(i)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),j=n(392),$=n(376),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"center-align-container"},[n("v-row",[n("h1",[n("v-icon",{attrs:{left:"","x-large":""}},[e._v("mdi-account-check")]),e._v("\n      My skill set\n    ")],1)]),e._v(" "),n("v-row",[n("p",[e._v("\n      here are my skill set, thanks for watching.\n    ")])]),e._v(" "),n("v-row",e._l(e.skillCategory,(function(t,i){return n("v-col",{key:i,attrs:{cols:"12",md:"6",lg:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[n("v-card-title",{staticClass:"headline"},[n("v-icon",{attrs:{left:""}},[e._v(e._s(t.icon))]),e._v("\n          "+e._s(t.name)+" \n        ")],1),e._v(" "),e._l(e.categoryItems(t.id),(function(t,r){return n("v-col",{key:r,attrs:{cols:"12"}},[n("v-card",{attrs:{color:"secondary"}},[n("v-card-title",[e._v("\n              "+e._s(t.title)+"\n              "),n("v-spacer"),e._v(" "),n("v-rating",{attrs:{readonly:"","half-increments":"",dense:"",value:t.rate}})],1),e._v(" "),t.remarks?n("v-card-text",[e._v("\n              "+e._s(t.remarks)+"\n            ")]):e._e()],1)],1)}))],2)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VCol:h.a,VContainer:f.a,VIcon:m.a,VRating:T,VRow:j.a,VSpacer:$.a})}}]);