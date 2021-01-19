(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["q_upload_form"],{"63a2":function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pageLayout container"},[i("p",{staticClass:"text-muted border-left pl-3"},[i("b",[t._v("Upload New "+t._s(t.$route.params.sub_id)+" Question ")]),i("router-link",{attrs:{to:"/uploadQuestion"}},[i("button",{staticClass:"btn btn-light mr-5"},[t._v(" CHANGE SUBJECT ")])])],1),i("hr"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",[i("div",{staticClass:"bg-danger text-white p-2 rounded shadow shadow-xs"},[i("h4",[t._v(" SUBJECT: "+t._s(t.$route.params.sub_id)+" ")])]),i("hr"),i("div",[i("button",{staticClass:"btn btn-success mb-2",on:{click:function(s){return t.newQuestion()}}},[i("i",{staticClass:"fas fa-plus mr-2 "}),t._v("NEW QUESTION")])]),i("div",{staticClass:"overflow-auto",staticStyle:{height:"60vh"}},[i("table",{staticClass:"table"},[t._m(0),t._l(t.allQuestions,(function(s,n){return i("tr",{key:n},[i("td",[t._v(t._s(s.instruction_id))]),i("td",{domProps:{innerHTML:t._s(s.questions)}}),""!=s.answer?i("td",{domProps:{innerHTML:t._s(s.answer)}}):i("td",{staticClass:"text-danger"},[i("b",[t._v(" NO ANSWER SELECTED")])]),i("td",[i("button",{staticClass:"btn btn-success",on:{click:function(i){return t.editFunc(s.question_id)}}},[t._v("Edit")])]),i("td",[i("button",{staticClass:"btn btn-danger",on:{click:function(i){return t.confirmDelete(s.question_id)}}},[i("i",{staticClass:"fas fa-trash"})])])])}))],2)])])])]),t.showModel?i("div",{staticClass:"px-5",attrs:{id:"overlay"}},[i("div",{staticStyle:{"margin-top":"7%"}},[i("div",{staticClass:"modal-content "},[i("form",{attrs:{action:""},on:{submit:function(s){return s.preventDefault(),t.addQuestion(s)}}},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title"},[t._v("Add New Question")]),i("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(s){t.showModel=!1}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"modal-body p-4"},[i("div",{staticClass:"from-group"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-3"},[i("h6",[t._v("INSTRUCTION")]),i("hr"),i("div",{staticClass:"my-3"},[""!=t.saveQuestion.instruction_id?i("p",{staticStyle:{cursor:"pointer"},domProps:{innerHTML:t._s(t.currentInstruction)}}):i("p",{staticClass:"text-danger"},[t._v("NO INSTRUCTION BINDED TO THIS QUESTION")])]),i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(s){return t.checkInstruction()}}},[t._v("BIND INSTRUCTION")]),i("hr"),i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(s){return t.showOptionMtd()}}},[i("i",{staticClass:"fa fa-plus"}),t._v(" ADD OPTIONS")]),i("div",{staticClass:"overflow-auto; mt-2",staticStyle:{height:"10vh"}},[i("span",[i("b",[t._v("ANSWER:")]),""!=t.saveQuestion.answer?i("p",{domProps:{innerHTML:t._s(t.saveQuestion.answer)}}):""==t.saveQuestion.answer?i("p",{staticClass:"text-danger"},[t._v(" NO ANSWER SELECTED ")]):t._e()])])]),i("div",{staticClass:"col-9"},[i("div",{staticClass:"quill-editor"},[i("quill-editor",{ref:"myTextEditor",attrs:{requried:""},model:{value:t.saveQuestion.questions,callback:function(s){t.$set(t.saveQuestion,"questions",s)},expression:"saveQuestion.questions"}})],1)])])])]),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(s){t.showModel=!1}}},[t._v("Close")]),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[i("span",[t._v(" "+t._s(t.feedBack)+" ")]),t.showSpinner?t._e():i("i",{staticClass:" fa fa-spinner fa-spin",staticStyle:{"font-size":"24px"}})])])])])])]):t._e(),t.showInstructionModel?i("div",{attrs:{id:"overlay"}},[i("div",{staticClass:"modal-dialog",staticStyle:{"margin-top":"7%",right:"6%"}},[i("div",{staticClass:"modal-content ",staticStyle:{width:"50vw",margin:"auto"}},[i("form",{attrs:{action:""},on:{submit:function(s){return s.preventDefault(),t.saveInstruction(s)}}},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title"},[t._v("Add New Instruction")]),i("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(s){t.resetInstructionForm(),t.showInstructionModel=!1}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"modal-body p-4"},[i("div",{staticClass:"from-group"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4"},[i("h6",[t._v("INSTRUCTION ID")]),i("hr"),t._v(" click on an instruction id to edit it "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_ins,expression:"selected_ins"}],staticClass:"form-control ",attrs:{size:"4"},on:{click:t.updateInstruction,change:function(s){var i=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.selected_ins=s.target.multiple?i:i[0]}}},t._l(t.allInstruction,(function(s,n){return i("option",{key:n,staticClass:"instruc text-light p-2 mb-2",domProps:{value:{text:s.instruction,id:s.instruction_id},innerHTML:t._s(s.instruction)}})})),0),i("button",{staticClass:"mt-3 btn btn-success",attrs:{type:"button"},on:{click:function(s){t.selected_ins={},t.newInstruction()}}},[i("i",{staticClass:"mr-3 fa fa-plus"}),t._v("New Instruction")])]),i("div",{staticClass:"col-8"},[t.showEditor?t.showEditor?i("quill-editor",{ref:"instruction",attrs:{placeholder:"Instruction content",name:"instruction"},model:{value:t.selected_ins.text,callback:function(s){t.$set(t.selected_ins,"text",s)},expression:"selected_ins.text"}}):t._e():i("div",{staticClass:"m-5",domProps:{innerHTML:t._s(t.selected_ins.text)}})],1)])])]),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(s){t.resetInstructionForm(),t.showInstructionModel=!1}}},[t._v("Close")]),i("button",{staticClass:"btn btn-danger",attrs:{disabled:t.btnDelDisabled,type:"button"},on:{click:function(s){return t.deleteInstructon(t.selected_ins.id)}}},[t._v("DELET")]),i("button",{staticClass:"btn btn-success",attrs:{disabled:t.btnEditDisabled,type:"button"},on:{click:function(s){t.showEditor=!0}}},[t._v("Edit")]),i("button",{staticClass:"btn btn-primary",attrs:{disabled:t.btnSaveDisabled,type:"submit"},on:{click:function(s){t.showEditor=!1}}},[i("span",[t._v(" Save")]),t.showSpinner?t._e():i("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"24px"}})])])])])])]):t._e(),t.showOption?i("div",{staticClass:" px-5",attrs:{id:"overlay"}},[i("div",{staticClass:"h-100",staticStyle:{"margin-top":"4rem"}},[i("div",{staticClass:"modal-content"},[i("form",{attrs:{action:""},on:{submit:function(s){return s.preventDefault(),t.saveOption(s)}}},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title"},[t._v("Question Options")]),i("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(s){t.showOption=!1}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"modal-body p-4"},[i("div",{staticClass:"from-group row"},[i("div",{staticClass:"col-8"},[i("div",{staticStyle:{"min-height":"50vh"}},[i("i",{staticClass:"text-danger"},[t._v("Type in your option and click the below button")]),i("quill-editor",{ref:"option",model:{value:t.currentOption,callback:function(s){t.currentOption=s},expression:"currentOption"}})],1),i("button",{staticClass:"btn btn-success mb-2",attrs:{type:"button"},on:{click:t.addOption}},[t._v(" "+t._s(t.optionStatusText)+" "),t.showSpinner?t._e():i("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"24px"}})]),i("button",{staticClass:"btn btn-danger mx-3 mb-2",attrs:{type:"button",disabled:t.optionBtnDisable},on:{click:t.deleteOpton}},[t._v(" DELETE")]),i("button",{staticClass:"btn btn-light  mb-2",attrs:{type:"button",disabled:t.optionBtnDisable},on:{click:function(s){t.currentOption="",t.optionStatusText="ADD OPTION",t.optionBtnDisable=!0}}},[t._v(" CANCEL")])]),i("br"),i("div",{staticClass:"col-4"},[i("div",{staticClass:"d-flex"}),i("p",{staticClass:"text-danger"},[t._v("Check the a radio button to set option as answer")]),i("div",{staticClass:"overflow-auto mt-3",staticStyle:{height:"50vh"}},[i("ol",{staticClass:"d-block",attrs:{type:"A"}},t._l(t.optionObject,(function(s,n){return i("li",{key:n,staticClass:"optionClass",on:{click:function(i){return t.selectOption(n,s.option_id)}}},[t._v(") "),i("span",[i("input",{staticClass:"mr-3",attrs:{type:"radio",name:"options",id:""},domProps:{checked:s.option_id==t.saveQuestion.answers_id,value:s.options}}),i("span",{domProps:{innerHTML:t._s(s.options)}})])])})),0)])])])]),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(s){t.showOption=!1,this.saveQuestion.answers_id=""}}},[t._v("Close")]),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[i("span",[t._v(" "+t._s(t.feedBack)+" ")]),t.showSpinner?t._e():i("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"24px"}})])])])])])]):t._e()])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("tr",[i("th",[t._v("INSTRUCTION ID")]),i("th",[t._v("QUESTION")]),i("th",[t._v("ANSWER")]),i("th"),i("th")])}],o=(i("a15b"),i("fb6a"),i("ac1f"),i("1276"),{data:function(){return{allQuestions:{},saveQuestion:{},selected_ins:{},questionOption:[],allInstruction:{},showEditor:!1,currentInstruction:"",showOption:!1,currentOption:"",optionArray:[],optionObject:{},optionBtnDisable:!0,optionStatusText:"ADD OPTION",selectedOpiton:null,opt:{},showModel:!1,showInstructionModel:!1,showSpinner:!0,errorReport:null,feedBack:"Save",disable:!0,isDisabled:!0,btnDelDisabled:!1,btnEditDisabled:!1,btnSaveDisabled:!1,taskType:""}},methods:{generateID:function(t){var s="qwertzuiopasdfghjklyxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz",i=s.split("").sort((function(){return.5-Math.random()})).join("");i=i.substring(0,2);var n=new Date,e=n.getDate(),o=n.getMonth(),a=n.getFullYear();return i=t+"_"+i+a+o+e,i},getAnswer:function(t,s,i){var n=this,e={question_id:t,answer_id:s};this.axios.post(this.$hostname+"junior_api.php?action=getAnswer",e).then((function(t){n.allQuestions[i].answer=t.data[0].options})).catch((function(t){}))},getAllQuestions:function(){var t=this,s={subject_id:this.$session.get("subject")};this.axios.post(this.$hostname+"junior_api.php?action=getAllQuestions",s).then((function(s){var i=s.data;t.allQuestions=i})).then((function(s){for(var i=0;i<t.allQuestions.length;i++){var n=t.allQuestions[i].question_id,e=t.allQuestions[i].answers_id;t.getAnswer(n,e,i)}})).catch((function(t){console.log(t)}))},addQuestion:function(){var t=this;this.feedBack="Uploading....",this.showSpinner=!1,this.saveQuestion.subject_id=this.$session.get("subject"),this.saveQuestion.options=this.optionObject,Object.prototype.hasOwnProperty.call(this.saveQuestion,"instruction_id")||(this.saveQuestion.instruction_id=""),Object.prototype.hasOwnProperty.call(this.saveQuestion,"answer")||(this.saveQuestion.answer=""),this.axios.post(this.$hostname+"junior_api.php?action=save_question",this.saveQuestion).then((function(s){"success"==s.data&&(t.showModel=!1,t.feedBack="Save")})).then((function(s){t.showSpinner=!0,t.showModel=!1,t.feedBack="Save",t.getAllQuestions()})).catch((function(t){console.log(t)}))},newQuestion:function(){this.currentInstruction="",this.saveQuestion={},this.saveQuestion.question_id=this.generateID("qst"),this.currentOption="",this.optionStatusText="ADD OPTION",this.optionBtnDisable=!0,this.showModel=!0},confirmDelete:function(t){var s=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){i.value&&s.$swal.fire(s.deleteFunc(t),"success")}))},deleteFunc:function(t){var s=this,i={question_id:t};this.axios.post(this.$hostname+"junior_api.php?action=deleteQuestion",i).then((function(t){})).then((function(t){s.getAllQuestions()})).catch((function(t){console.log(t)}))},editFunc:function(t){var s=this,i={question_id:t};this.axios.post(this.$hostname+"junior_api.php?action=getOneQuestion",i).then((function(t){var i=t.data;s.saveQuestion=i[0]})).then((function(i){var n={question_id:t,answer_id:s.saveQuestion.answers_id};s.axios.post(s.$hostname+"junior_api.php?action=getAnswer",n).then((function(t){s.saveQuestion.answer=t.data[0].options;for(var i=0;i<s.allInstruction.length;i++)s.allInstruction[i].instruction_id==s.saveQuestion.instruction_id&&(s.currentInstruction=s.allInstruction[i].instruction.slice(0,50)+"....")})),s.showModel=!0})).catch((function(t){console.log(t)}))},getInstructions:function(){var t=this,s={subject_id:this.$session.get("subject")};this.axios.post(this.$hostname+"junior_api.php?action=getInstructions",s).then((function(s){t.allInstruction=s.data})).catch((function(t){console.log(t)}))},saveInstruction:function(){var t=this,s={subject_id:this.$session.get("subject"),instruction_id:this.selected_ins.id,instruction:this.selected_ins.text};this.axios.post(this.$hostname+"junior_api.php?action=saveInstruction",s).then((function(i){t.saveQuestion.instruction_id=s.instruction_id,t.currentInstruction=s.instruction.slice(0,50)+"....",t.getInstructions()}))},updateInstruction:function(){this.showEditor=!1,this.btnDelDisabled=!1,this.btnEditDisabled=!1,this.btnSaveDisabled=!1},deleteInstructon:function(t){var s=this,i={instruction_id:t};this.axios.post(this.$hostname+"junior_api.php?action=deleteInstruction",i).then((function(t){s.getInstructions(),s.showEditor=!1,s.btnDelDisabled=!0,s.btnEditDisabled=!0,s.btnSaveDisabled=!0,s.selected_ins.text=""}))},newInstruction:function(){this.btnDelDisabled=!0,this.btnEditDisabled=!0,this.btnSaveDisabled=!1,this.showEditor=!0,this.selected_ins.id=this.generateID("ins")},resetInstructionForm:function(){this.isDisabled=!0},checkInstruction:function(){""==this.saveQuestion.instruction_id&&(this.btnDelDisabled=!0,this.btnEditDisabled=!0,this.btnSaveDisabled=!0);for(var t=0;t<this.allInstruction.length;t++)this.allInstruction[t].instruction_id==this.saveQuestion.instruction_id&&(this.selected_ins.text=this.allInstruction[t].instruction);this.showInstructionModel=!0},getOptionsFromDB:function(){var t=this,s={question_id:this.saveQuestion};this.axios.post(this.$hostname+"junior_api.php?action=getQuestionOptions",s).then((function(s){t.optionObject=s.data}))},showOptionMtd:function(){var t=this,s={question_id:this.saveQuestion};this.axios.post(this.$hostname+"junior_api.php?action=getQuestionOptions",s).then((function(s){t.optionObject=s.data,t.currentOption=t.saveQuestion.answer,void 0==t.saveQuestion.answer?(t.optionBtnDisable=!1,t.optionStatusText="ADD OPTION"):(t.optionBtnDisable=!1,t.optionStatusText="UPDATE"),t.showOption=!0}))},addOption:function(){var t=this;if(""==this.currentOption)alert("Please type in your option");else{if(""!=this.currentOption&"UPDATE"!=this.optionStatusText){var s={question_id:this.saveQuestion.question_id,options:this.currentOption};this.axios.post(this.$hostname+"junior_api.php?action=saveOptions",s).then((function(s){t.getOptionsFromDB()}))}else if("UPDATE"==this.optionStatusText){var i={question_id:this.saveQuestion.question_id,option_id:this.saveQuestion.answers_id,options:this.currentOption};this.axios.post(this.$hostname+"junior_api.php?action=updateOption",i).then((function(s){t.getOptionsFromDB()})),this.optionStatusText="ADD OPTION",this.optionBtnDisable=!0}this.currentOption=""}},selectOption:function(t,s){this.currentOption=this.optionObject[t].options,this.saveQuestion.answers_id=s,this.saveQuestion.answer=this.currentOption,this.selectedOpiton=t,this.optionBtnDisable=!1,this.optionStatusText="UPDATE"},deleteOpton:function(){var t=this,s={option_id:this.saveQuestion.answers_id};this.axios.post(this.$hostname+"junior_api.php?action=deleteOption",s).then((function(s){t.getOptionsFromDB()})),this.saveQuestion.answers_id="",this.currentOption="",this.optionStatusText="ADD OPTION",this.optionBtnDisable=!0},saveOption:function(){""==this.saveQuestion.answers_id?alert("You have not selected any answer"):(this.saveQuestion.answer=this.currentOption,this.showOption=!1)}},created:function(){},mounted:function(){this.getAllQuestions(),this.getInstructions()},updated:function(){},watch:{scrollFix:function(){var t=this.$windowObj.scrollTop||this.$windowObj.body.scrollTop;this.fixedTop=t>50}}}),a=o,c=i("2877"),r=Object(c["a"])(a,n,e,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=q_upload_form.e62204a2.js.map