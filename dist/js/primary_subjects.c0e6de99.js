(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["primary_subjects"],{"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("71d9"),s=i("80d2"),r=Object(s["h"])("v-toolbar__title"),n=Object(s["h"])("v-toolbar__items");a["a"]},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),s=i("58df"),r=i("7e2b"),n=i("3206");e["a"]=Object(s["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("0481"),i("4160"),i("4069"),i("a9e3");var a=i("3835"),s=i("5530"),r=(i("5e23"),i("8dd9")),n=i("adda"),o=i("80d2"),c=i("d9bd");e["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(s["a"])(Object(s["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{height:Object(o["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],r=i[1];t.$attrs.hasOwnProperty(s)&&Object(c["a"])(s,r,t)}))},methods:{genBackground:function(){var t={height:Object(o["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["g"])(this.computedContentHeight)}},Object(o["r"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["g"])(this.extensionHeight)}},Object(o["r"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},7464:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Container"},[i("div",{staticClass:"pageLayout d-flex justify-content-center text-white"},[i("v-snackbar",{attrs:{color:"red"},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[i("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(e){t.showSnackbarAlert=!1}}},"v-btn",a,!1),[i("v-icon",[t._v("fas fa-times")])],1)]}}]),model:{value:t.showSnackbarAlert,callback:function(e){t.showSnackbarAlert=e},expression:"showSnackbarAlert"}},[t._v(" "+t._s(t.errorMessage)+" ")]),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.primary_allSubjects,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("PRIMARY SUBJECTS")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),a),[i("v-icon",[t._v("mdi-plus")]),t._v(" New Subject ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-form",{ref:"form"},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Subject Name",required:"",rules:t.nameRules},model:{value:t.editedItem.primary_subject,callback:function(e){t.$set(t.editedItem,"primary_subject",e)},expression:"editedItem.primary_subject"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete "+t._s(t.selectedSubjct)+"?, The questions and options related to this subject would be deleted as well")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",disabled:t.showLoading,text:""},on:{click:t.deleteItemConfirm}},[t.showLoading?i("v-progress-circular",{attrs:{color:"primary",size:20,indeterminate:""}}):t._e(),t._v(" OK ")],1),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.get_Primary_Subject}},[t._v(" Refresh ")])]},proxy:!0}])})],1)])},s=[],r=(i("c975"),{data:function(){return{nameRules:[function(t){return!!t||"Name is required"}],showSnackbarAlert:!1,errorMessage:"",selectedSubjct:null,dialog:!1,dialogDelete:!1,headers:[{text:"Subjects",align:"start",sortable:!0,value:"primary_subject"},{text:"Total Questions",value:"total_question"},{text:"Actions",value:"actions",sortable:!1}],primary_allSubjects:[],editedIndex:-1,editedItem:{primary_subject:"",total_question:0},defaultItem:{primary_subject:"",total_question:0},showLoading:!1}},computed:{formTitle:function(){return-1===this.editedIndex?"New Subject":"Edit Subject"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.get_Primary_Subject()},methods:{get_Primary_Subject:function(){var t=this;this.axios.get(this.$hostname+"primary_api.php?action=get_Primary_Subject").then((function(e){t.primary_allSubjects=e.data})).catch((function(e){t.errorMessage=e,t.showSnackbarAlert=!0}))},editItem:function(t){this.editedIndex=this.primary_allSubjects.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.selectedSubjct=t.primary_subject,this.editedIndex=this.primary_allSubjects.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){var t=this;this.showLoading=!0,this.axios.post(this.$hostname+"primary_api.php?action=delete_Primary_Subject",this.editedItem).then((function(e){t.get_Primary_Subject(),t.showLoading=!1,t.closeDelete()})).catch((function(e){t.errorMessage=e,t.showSnackbarAlert=!0}))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;this.$refs.form.validate()&&(this.showLoading=!0,this.editedIndex>-1?this.axios.post(this.$hostname+"primary_api.php?action=update_Primary_Subject",this.editedItem).then((function(){t.showLoading=!1,t.get_Primary_Subject(),t.closeDelete()})).catch((function(e){t.errorMessage=e,t.showSnackbarAlert=!0})):this.axios.post(this.$hostname+"primary_api.php?action=add_Primary_Subject",this.editedItem).then((function(e){t.get_Primary_Subject(),t.showLoading=!1,t.primaryModel=!1})).catch((function(e){t.errorMessage=e,t.showSnackbarAlert=!0})),this.close())}}}),n=r,o=i("2877"),c=i("6544"),l=i.n(c),d=i("8336"),u=i("b0af"),h=i("99d9"),p=i("62ad"),f=i("a523"),b=i("8fea"),m=i("169a"),v=i("ce7e"),g=i("4bd4"),_=i("132d"),x=i("490a"),y=i("0fd9"),j=i("2db4"),w=i("2fa4"),S=i("8654"),k=i("71d9"),C=i("2a7f"),I=Object(o["a"])(n,a,s,!1,null,null,null);e["default"]=I.exports;l()(I,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:p["a"],VContainer:f["a"],VDataTable:b["a"],VDialog:m["a"],VDivider:v["a"],VForm:g["a"],VIcon:_["a"],VProgressCircular:x["a"],VRow:y["a"],VSnackbar:j["a"],VSpacer:w["a"],VTextField:S["a"],VToolbar:k["a"],VToolbarTitle:C["a"]})}}]);
//# sourceMappingURL=primary_subjects.c0e6de99.js.map