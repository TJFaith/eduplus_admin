(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["q_upload_form"],{"0647":function(t,n,i){"use strict";var e=i("ce24"),o=i.n(e);o.a},"63a2":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"pageLayout container"},[i("v-snackbar",{attrs:{color:t.snackOptions.color},scopedSlots:t._u([{key:"action",fn:function(n){var e=n.attrs;return[i("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(n){t.snackOptions.status=!1}}},"v-btn",e,!1),[i("v-icon",[t._v("fas fa-times")])],1)]}}]),model:{value:t.snackOptions.status,callback:function(n){t.$set(t.snackOptions,"status",n)},expression:"snackOptions.status"}},[t._v(" "+t._s(t.snackOptions.message)+" ")]),i("v-dialog",{attrs:{persistent:"","max-width":"30vw"},model:{value:t.generalLoader.status,callback:function(n){t.$set(t.generalLoader,"status",n)},expression:"generalLoader.status"}},[i("v-card",{staticClass:"text-center",attrs:{color:"primary",dark:""}},[i("v-card-text",[i("span",[t._v(t._s(t.generalLoader.response))]),i("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),i("p",{staticClass:"text-muted border-left pl-3"},[i("b",[t._v("Upload New "+t._s(t.$route.params.sub_id)+" Question ")]),i("router-link",{attrs:{to:"/uploadQuestion"}},[i("button",{staticClass:"btn btn-light mr-5"},[t._v(" CHANGE SUBJECT ")])])],1),i("hr"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",[i("div",{staticClass:"bg-danger text-white p-2 rounded shadow shadow-xs"},[i("h4",[t._v(" SUBJECT: "+t._s(t.$route.params.sub_id)+" ")])]),i("hr"),i("div",[i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(n){t.showQuestionDialog=!0}}},[i("v-icon",[t._v("mdi-plus")]),t._v(" NEW QUESTION")],1)],1),i("v-card",[i("v-card-title",[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.searchQuestion,callback:function(n){t.searchQuestion=n},expression:"searchQuestion"}})],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.question_arr,"sort-by":"calories",loading:t.loadingQuestions,"loading-text":"Loading... Please wait",search:t.searchQuestion},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-dialog",{attrs:{persistent:"","max-width":"70vw"},model:{value:t.showQuestionDialog,callback:function(n){t.showQuestionDialog=n},expression:"showQuestionDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("New Question")])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"8"}},[i("v-select",{staticClass:"basic",attrs:{hint:"Select an instruction from the drop down or click on edit button to add new instruction",items:t.allInstruction,"item-text":"instruction","item-value":"instruction_id",label:"Select Instruction","persistent-hint":"","return-object":"","single-line":""},on:{change:function(n){return t.setInstruction()}},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("v-btn",{attrs:{color:"blue",text:""},on:{click:function(n){t.showInstructionDialog=!0}}},[i("v-icon",[t._v("mdi-pencil")]),t._v(" Edit ")],1)]},proxy:!0},{key:"item",fn:function(n){var e=n.item;return[i("span",{domProps:{innerHTML:t._s(e.instruction)}})]}},{key:"selection",fn:function(n){var e=n.item;return[i("span",{staticClass:"showInstruction",domProps:{innerHTML:t._s(e.instruction)}},[t._v(t._s(e.instruction.slice(0,5)))])]}}]),model:{value:t.selectedInstruction,callback:function(n){t.selectedInstruction=n},expression:"selectedInstruction"}})],1),i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"blue",text:""},on:{click:function(n){t.showOptionDialog=!0}}},[i("v-icon",[t._v("mdi-pencil")]),t._v(" Edit Option")],1)],1)],1),i("v-row",[i("v-col",{staticClass:"overflow-auto",staticStyle:{"max-height":"25vh"},attrs:{cols:"8"}},[i("span",{domProps:{innerHTML:t._s(t.selectedInstruction.instruction)}})])],1),i("v-row",[i("v-col",{staticClass:"overflow-auto",staticStyle:{height:"30vh"},attrs:{cols:"8"}},[i("div",{staticClass:"quill-editor"},[i("quill-editor",{ref:"myTextEditor",attrs:{requried:""},model:{value:t.newQuestion_obj.question,callback:function(n){t.$set(t.newQuestion_obj,"question",n)},expression:"newQuestion_obj.question"}})],1)]),i("v-col",{staticClass:"overflow-auto",staticStyle:{height:"30vh"},attrs:{cols:"4"}},[i("ol",{attrs:{type:"A"}},t._l(t.newQuestion_obj.options,(function(n){return i("li",{key:n.option_id},[i("span",{domProps:{innerHTML:t._s(n.options)}},[t._v(t._s(n.options))]),n.option_id==t.newQuestion_obj.answers_id?i("v-icon",{attrs:{color:"green"}},[t._v("mdi-check")]):t._e()],1)})),0)])],1)],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeQustionDialog}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveQuestion}},[t._v(" Save ")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"50vw"},model:{value:t.showOptionDialog,callback:function(n){t.showOptionDialog=n},expression:"showOptionDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Option Dialog")]),i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(n){t.showOptionDialog=!1}}},[i("v-icon",[t._v("fas fa-times")])],1)],1),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{staticClass:"overflow-auto",staticStyle:{height:"40vh"},attrs:{cols:"6"}},[i("div",{staticClass:"quill-editor"},[i("quill-editor",{ref:"myTextEditor",staticClass:"ql-editor",attrs:{requried:""},model:{value:t.newOptionData,callback:function(n){t.newOptionData=n},expression:"newOptionData"}})],1)]),i("v-col",{staticClass:"overflow-auto",staticStyle:{height:"40vh"},attrs:{cols:"6"}},[i("ol",{attrs:{type:"A"}},t._l(t.newQuestion_obj.options,(function(n){return i("li",{key:n.option_id,staticClass:"newOption",on:{click:function(i){return t.getEditOption(n.option_id)}}},[i("span",{domProps:{innerHTML:t._s(n.options)}},[t._v(t._s(n.options))]),n.option_id==t.newQuestion_obj.answers_id?i("v-icon",{attrs:{color:"green"}},[t._v("mdi-check")]):t._e()],1)})),0)])],1)],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:"red darken-1",text:"",disabled:!t.editMode},on:{click:t.deleteOption}},[i("v-icon",[t._v("mdi-delete")]),t._v(" Delete ")],1),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.addOption}},[i("v-icon",[t._v("mdi-check")]),t._v(" Done ")],1),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.editMode},on:{click:t.resetOption}},[i("v-icon",[t._v("mdi-file")]),t._v(" New ")],1),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.editMode},on:{click:t.setAnswer}},[i("v-icon",[t._v("mdi-check")]),t._v("Set as Answer ")],1),i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(n){t.showOptionDialog=!1}}},[t._v(" Close ")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"50vw"},model:{value:t.showInstructionDialog,callback:function(n){t.showInstructionDialog=n},expression:"showInstructionDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Instruction Dialog")]),i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(n){t.showInstructionDialog=!1}}},[i("v-icon",[t._v("fas fa-times")])],1)],1),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{staticClass:"overflow-auto",staticStyle:{height:"40vh"},attrs:{cols:"6"}},[i("div",{staticClass:"quill-editor"},[i("quill-editor",{ref:"myTextEditor",staticClass:"ql-editor",attrs:{requried:""},model:{value:t.newInstruction_obj.instruction,callback:function(n){t.$set(t.newInstruction_obj,"instruction",n)},expression:"newInstruction_obj.instruction"}})],1)]),i("v-col",{staticClass:"overflow-auto",staticStyle:{height:"40vh"},attrs:{cols:"6"}},t._l(t.allInstruction,(function(n){return i("v-list-item",{key:n.instruction_id,attrs:{link:""},on:{click:function(i){return t.getEditInstruction(n.instruction_id,n.instruction)}}},[i("v-list-item-content",[i("v-list-item-title",[i("span",{domProps:{innerHTML:t._s(n.instruction)}},[t._v(t._s(n.instruction))])])],1)],1)})),1)],1)],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:"red darken-1",text:"",disabled:!t.editMode},on:{click:t.confirmInstructionDelete}},[i("v-icon",[t._v("mdi-delete")]),t._v(" Delete ")],1),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.addInstruction}},[i("v-icon",[t._v("mdi-check")]),t._v(" Done ")],1),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.editMode},on:{click:t.resetInstruction}},[i("v-icon",[t._v("mdi-file")]),t._v(" New ")],1),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.editMode},on:{click:t.bindInstruction}},[i("v-icon",[t._v("mdi-check")]),t._v("Bind to Question")],1),i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(n){t.showInstructionDialog=!1}}},[t._v(" Close ")])],1)],1)],1)]},proxy:!0},{key:"item.instruction",fn:function(n){var e=n.item;return[i("span",{domProps:{innerHTML:t._s(e.instruction.slice(0,100))}})]}},{key:"item.questions",fn:function(n){var e=n.item;return[i("span",{domProps:{innerHTML:t._s(e.questions)}})]}},{key:"item.answer",fn:function(n){var e=n.item;return[i("span",{domProps:{innerHTML:t._s(e.answer)}})]}},{key:"item.actions",fn:function(n){var e=n.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){return t.editItem(e)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(n){return t.confirmDelete(e)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.getAllQuestions}},[t._v(" Refresh ")])]},proxy:!0}])})],1)],1)])])],1)},o=[],s=(i("7db0"),i("a15b"),i("a434"),i("ac1f"),i("5319"),i("1276"),{data:function(){return{showQuestionDialog:!1,loadingQuestions:!1,showOptionDialog:!1,showInstructionDialog:!1,editMode:!1,dialogDelete:!1,showLoading:!1,generalLoader:{status:!1,response:""},newQuestion_obj:{answers_id:"",options:[],instruction_id:"",instruction:"",question_id:"",question:"",subject_id:""},question_arr:[],snackOptions:{status:!1,color:"",message:""},headers:[{text:"INSTRUCTION",align:"start",sortable:!0,value:"instruction"},{text:"QUESTIONS",value:"questions",sortable:!0},{text:"ANSWERS",value:"answer",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],newInstruction_obj:{subject_id:"",instruction_id:"",instruction:""},allInstruction:[],searchQuestion:"",newOptionData:"",option_id:"",selectedInstruction:{}}},methods:{generateID:function(t){var n="qwertzuiopasdfghjklyxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz",i=n.split("").sort((function(){return.5-Math.random()})).join("");i=i.substring(0,2);var e=new Date,o=e.getDate(),s=e.getMonth(),a=e.getFullYear();return i=t+"_"+i+a+s+o,i},getInstructions:function(){var t=this;this.allInstruction=[];var n={subject_id:this.$session.get("subject")};this.axios.post(this.$hostname+"junior_api.php?action=getInstructions",n).then((function(n){for(var i=0;i<n.data.length;i++)t.allInstruction.push(n.data[i])})).catch((function(n){t.snackOptions.color="red",t.snackOptions.message=n,t.snackOptions.status=!0}))},getEditInstruction:function(t,n){this.generalLoader.status=!0,this.generalLoader.response="Loading...please wait",this.editMode=!0,this.newInstruction_obj.subject_id=this.$session.get("subject"),this.newInstruction_obj.instruction_id=t,this.newInstruction_obj.instruction=n,this.generalLoader.status=!1},resetInstruction:function(){this.editMode=!1,this.newInstruction_obj={subject_id:"",instruction_id:"",instruction:""}},addInstruction:function(){var t=this;""==this.newInstruction_obj.instruction?this.snackbackMethod("red","Type question before saving",!0):(this.newInstruction_obj.instruction=this.removeQullTag(this.newInstruction_obj.instruction),this.newInstruction_obj.subject_id=this.$session.get("subject"),this.generalLoader.status=!0,this.generalLoader.response="...please wait",this.axios.post(this.$hostname+"junior_api.php?action=saveInstruction",this.newInstruction_obj).then((function(n){t.generalLoader.status=!1,1==n.data?(t.resetInstruction(),t.snackbackMethod("green","Instruction Added",!0)):2==n.data?(t.resetInstruction(),t.snackbackMethod("green","Instruction Updated",!0)):t.snackbackMethod("red","try again, an error occured!",!0),t.getInstructions()})).catch((function(n){t.generalLoader.status=!1,t.snackbackMethod("red",n,!0)})))},bindInstruction:function(){this.newQuestion_obj.instruction_id=this.newInstruction_obj.instruction_id,this.snackbackMethod("green","Instruction binded to this question",!0)},setInstruction:function(){this.newQuestion_obj.instruction_id=this.selectedInstruction.instruction_id,this.snackbackMethod("green","Instruction binded to this question",!0)},confirmInstructionDelete:function(){var t=this;this.$swal.fire({title:"Are you sure?",text:"Every instruction binded to question would be deleted",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&t.deleteInstruction()}))},deleteInstruction:function(){var t=this,n={instruction_id:this.newInstruction_obj.instruction_id};this.axios.post(this.$hostname+"junior_api.php?action=deleteInstruction",n).then((function(n){1==n.data&&(t.getInstructions(),t.resetInstruction(),t.snackbackMethod("green","Instruction Deleted",!0))})).catch((function(n){t.snackbackMethod("red",n,!0)}))},getAllQuestions:function(){var t=this;this.loadingQuestions=!0;var n={subject_id:this.$session.get("subject")};this.axios.post(this.$hostname+"junior_api.php?action=getAllQuestions",n).then((function(n){t.question_arr=n.data,t.loadingQuestions=!1})).catch((function(n){t.snackbackMethod("red",n,!0),t.loadingQuestions=!1}))},saveQuestion:function(){var t=this;""==this.newQuestion_obj.question?this.snackbackMethod("red","Type question before saving",!0):(this.generalLoader.status=!0,this.generalLoader.response="Saving Question....please wait",""==this.newQuestion_obj.question_id&&""==this.newQuestion_obj.subject_id&&(this.newQuestion_obj.question_id=this.generateID("qst"),this.newQuestion_obj.subject_id=this.$session.get("subject")),this.axios.post(this.$hostname+"junior_api.php?action=save_question",this.newQuestion_obj).then((function(n){1==n.data?(t.getAllQuestions(),t.generalLoader.status=!1,t.closeQustionDialog(),t.newQuestion_obj={answers_id:"",options:[],instruction_id:"",instruction:"",question_id:"",question:"",subject_id:""},t.snackbackMethod("green","success",!0)):(t.generalLoader.status=!1,t.snackbackMethod("red","sorry an error occured",!0)),t.loadingQuestions=!1})).catch((function(n){t.snackbackMethod("red",n,!0),t.generalLoader.status=!1,t.loadingQuestions=!1}))),this.newQuestion_obj={answers_id:"",options:[],instruction_id:"",instruction:"",question_id:"",question:"",subject_id:""}},editItem:function(t){this.newQuestion_obj.answers_id=t.answers_id,this.selectedInstruction.instruction=t.instruction,this.newQuestion_obj.instruction_id=t.instruction_id,this.newQuestion_obj.question_id=t.question_id,this.newQuestion_obj.question=t.questions,this.newQuestion_obj.options=t["options"],this.showQuestionDialog=!0},addOption:function(){var t=this;if(""==this.newOptionData)this.snackbackMethod("red","type your option",!0);else if(0==this.editMode){this.newOptionData=this.removeQullTag(this.newOptionData);var n={};n.option_id=this.generateID("otp"),n.options=this.newOptionData,this.newQuestion_obj.options.push(n),this.newOptionData=""}else 1==this.editMode&&(this.newOptionData=this.removeQullTag(this.newOptionData),this.newQuestion_obj.options.find((function(n,i){if(n.option_id===t.option_id)return t.newQuestion_obj.options[i]={option_id:t.option_id,options:t.newOptionData},!0})),this.newOptionData="",this.editMode=!1)},getEditOption:function(t){var n=this;this.generalLoader.status=!0,this.generalLoader.response="Loading...please wait",this.editMode=!0,this.option_id=t,this.newQuestion_obj.options.find((function(i,e){if(i.option_id===t)return n.newOptionData=n.newQuestion_obj.options[e].options,!0})),this.generalLoader.status=!1},resetOption:function(){this.option_id="",this.editMode=!1,this.newOptionData=""},deleteOption:function(){var t=this;this.newQuestion_obj.options.find((function(n,i){if(n.option_id===t.option_id)return t.newQuestion_obj.options.splice(i,1),!0})),this.newOptionData="",this.editMode=!1;var n={option_id:this.option_id};this.axios.post(this.$hostname+"junior_api.php?action=deleteOption",n).then((function(n){1!=n.data&&2!=n.data||t.snackbackMethod("green","Option Deleted Successfully",!0)})).catch((function(n){t.snackbackMethod("red",n,!0),t.generalLoader.status=!1,t.loadingQuestions=!1}))},setAnswer:function(){this.newQuestion_obj.answers_id=this.option_id,this.newOptionData="",this.editMode=!1},confirmDelete:function(t){var n=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){i.value&&n.deleteFunc(t)}))},deleteFunc:function(t){var n=this;this.axios.post(this.$hostname+"junior_api.php?action=deleteQuestion",t).then((function(){n.snackbackMethod("green","Question Deleted ",!0),n.getAllQuestions()})).catch((function(t){n.errorMessage=t,n.showSnackbarAlert=!0}))},removeQullTag:function(t){return t=t.replace(/<p[^>]*>/g,""),t.replace(/<\/?p[^>]*>/g,"")},closeQustionDialog:function(){this.selectedInstruction={},this.showQuestionDialog=!1},snackbackMethod:function(t,n,i){this.snackOptions.color=t,this.snackOptions.message=n,this.snackOptions.status=i}},mounted:function(){this.getInstructions(),this.getAllQuestions()}}),a=s,r=(i("0647"),i("2877")),c=i("6544"),u=i.n(c),l=i("8336"),d=i("b0af"),h=i("99d9"),p=i("62ad"),v=i("a523"),_=i("8fea"),b=i("169a"),w=i("132d"),f=i("da13"),g=i("5d23"),k=i("8e36"),m=i("0fd9"),I=i("b974"),Q=i("2db4"),j=i("2fa4"),x=i("8654"),D=Object(r["a"])(a,e,o,!1,null,"9c65bed2",null);n["default"]=D.exports;u()(D,{VBtn:l["a"],VCard:d["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:p["a"],VContainer:v["a"],VDataTable:_["a"],VDialog:b["a"],VIcon:w["a"],VListItem:f["a"],VListItemContent:g["a"],VListItemTitle:g["c"],VProgressLinear:k["a"],VRow:m["a"],VSelect:I["a"],VSnackbar:Q["a"],VSpacer:j["a"],VTextField:x["a"]})},ce24:function(t,n,i){}}]);
//# sourceMappingURL=q_upload_form.434b247f.js.map