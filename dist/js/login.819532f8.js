(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"1e4b":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-app",{staticClass:"pageLayout"},[a("div",{staticClass:"container-fluid  p-0"},[a("div",{staticClass:"row topRow justify-content-center"},[a("div",{staticClass:"col-10 col-md-3 h-50 shadow-sm border p-0 d-flex rounded-sm m-2"},[a("div",{staticClass:"col-8 align-self-center text-muted"},[t._v("TOTAL"),a("br"),t._v(" QUESTIONS ")]),a("div",{staticClass:"w-100 bg-success  shadow shadow-sm text-white align-self-center p-2"},[t._v(" "+t._s(t.totalQuestion)+" ")])]),a("router-link",{staticClass:"col-10 col-md-3 h-50 shadow-sm border p-0 d-flex rounded-sm m-2",attrs:{to:"/uploadQuestion"}},[a("div",{staticClass:"col-8 align-self-center text-muted"},[t._v("UPLOAD"),a("br"),t._v(" QUESTIONS")]),a("div",{staticClass:"w-100 bg-danger shadow shadow-sm p-2 align-self-center"},[a("i",{staticClass:"fa fa-upload text-white large"})])]),a("div",{staticClass:"col-10 col-md-3 h-50 shadow-sm border p-0 d-flex rounded-sm m-2"},[a("div",{staticClass:"col-8 align-self-center text-muted"},[t._v("TOTAL"),a("br"),t._v(" USERS")]),a("div",{staticClass:"w-100 bg-info shadow text-white align-self-center shadow-sm p-2"},[t._v(t._s(t.totalStudent))])])],1),a("hr")])])},n=[],i={data:function(){return{totalQuestion:null,totalStudent:null}},methods:{dashBoardCount:function(){var t=this;this.axios.get(this.$hostname+"general_api.php?action=dashBoardCount").then((function(s){t.totalQuestion=s.data.totalQuestion,t.totalStudent=s.data.totalStudent})).catch((function(t){alert(t)}))}},created:function(){this.dashBoardCount()}},o=i,r=a("2877"),l=a("6544"),d=a.n(l),c=a("7496"),u=Object(r["a"])(o,e,n,!1,null,null,null);s["default"]=u.exports;d()(u,{VApp:c["a"]})},dd7b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"loginPg"},[t._m(0),a("div",{staticClass:"container-fluid",staticStyle:{"padding-top":"3em"}},[a("h4",{staticClass:"mt-5 text-center text-muted strong",staticStyle:{"font-family":"myFirstFont"}},[t._v("EDUPLUS ADMINISTRATIVE")]),a("hr",{staticClass:"w-25"}),a("br"),a("div",{staticClass:"row mt-3 "},[a("div",{staticClass:"col-md-6",staticStyle:{"z-index":"1"}},[a("form",{staticClass:"card p-5",on:{submit:function(s){return s.preventDefault(),t.login()}}},[a("span",{domProps:{innerHTML:t._s(t.feedback)}}),a("br"),a("div",{staticClass:"input-group mb-3"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{placeholder:"username",type:"text",name:"",id:"username",required:""},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),a("div",{staticClass:"input-group mb-3"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"password",type:"password",name:"",id:"password",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._m(3)])]),a("div",{staticClass:"col-md-6 .hidden-xs-down admin-login position-absolute"})])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg-light shadow py-2 d-flex flex-column fixed-top  justify-content-center align-items-center"},[e("a",{attrs:{href:"https://eduplus.sch.ng/"}},[e("img",{staticClass:"logo mr-3",staticStyle:{width:"50px"},attrs:{src:a("cf05")}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-user"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-key"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"input-group"},[a("input",{staticClass:"btn btn-light w-25 shadow",attrs:{type:"submit",value:"LOGIN"}})])}],i=a("56d7"),o={data:function(){return{username:"",password:"",feedback:""}},methods:{login:function(){var t=this;i["bus"].$emit("loader",!0);var s={username:this.username,password:this.password};this.axios.post(this.$hostname+"general_api.php?action=login",s).then((function(s){"success"==s.data.respond?(t.$session.set("admin-login",s.data.admin_data),i["bus"].$emit("side_bar_Show",!0),t.$router.push({name:"index"}).catch((function(){}))):t.feedback=s.data,i["bus"].$emit("loader",!1)})).catch((function(t){i["bus"].$emit("loader",!1),alert("Opps! sorry and error occured"),console.log(t)}))}},created:function(){i["bus"].$emit("side_bar_Show",!1)}},r=o,l=a("2877"),d=Object(l["a"])(r,e,n,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=login.819532f8.js.map