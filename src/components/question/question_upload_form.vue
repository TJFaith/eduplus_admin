<template>
    <div class="pageLayout container">
       
   <p class="text-muted border-left pl-3"><b>Upload New {{$route.params.sub_id}} Question </b>  
  
   <router-link to="/uploadQuestion"><button class="btn btn-light mr-5"> CHANGE SUBJECT </button></router-link>
   </p>
   
 
       <hr>
    
       <div class="row">
           <div class="col-12">
              
                   
                   <div>
                      <div class="bg-danger text-white p-2 rounded shadow shadow-xs">
                           <h4>
                          SUBJECT: {{$route.params.sub_id}}
                      </h4>
                      </div>
                    <hr>
               <!-- overflow-auto -->
                      <!-- SHOW ALL SUBJECT IN A TABLE -->
                      <div>

                          <button @click="newQuestion()" class="btn btn-success mb-2"><i class="fas fa-plus mr-2 "></i>NEW QUESTION</button>
                      </div>
                  <div class="overflow-auto" style="height:60vh">
                    <!-- Get all question -->
                    <table class="table">
                        <tr>
                            <th>INSTRUCTION ID</th>
                            <th>QUESTION</th>
                            <th>ANSWER</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr v-for="(question, index) in  allQuestions" :key="index">
                            <td>{{question.instruction_id}}</td>
                            <td v-html="question.questions"></td>
                            <td v-if="question.answer!=''"  v-html="question.answer"></td>
                            <td v-else class="text-danger"><b> NO ANSWER SELECTED</b></td> 
                            <td><button @click="editFunc(question.question_id)"  class="btn btn-success">Edit</button></td>
                            <td><button @click="confirmDelete(question.question_id)" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
                        </tr>                        
                    </table>
                  </div>
                </div>
           </div>
       </div>


       <!-- MODAL BOXES -->
        <!-- =====================newQuestion -->

            
   <div id="overlay" class="px-5" v-if="showModel">
            <div class="" style="margin-top:7%;">
                <div class="modal-content ">
                   <form action="" @submit.prevent="addQuestion">
                       
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Question</h5>
                        <button type="button" class="close" @click="showModel=false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                       <!-- body -->
                    <!-- Compose new subject title  -->
                    <div class="from-group">
                        <div class="row">
                            <div class="col-3">
                                <h6 >INSTRUCTION</h6>
                                <hr>
                                <!-- saveQuestion.hasOwnProperty('instruction_id') -->
                                <div class="my-3">
                                    <p v-if="saveQuestion.instruction_id !=''" style="cursor: pointer" v-html="currentInstruction">
                               
                                    </p>
                                    <p class="text-danger" v-else>NO INSTRUCTION BINDED TO THIS QUESTION</p>
                                </div>
                              
                                <button type="button" @click="checkInstruction()" class="btn btn-success">BIND INSTRUCTION</button>
                                <hr>
                                <button @click="showOptionMtd();" type="button" class="btn btn-success"><i class="fa fa-plus"></i> ADD OPTIONS</button>
                                

                                <div class="overflow-auto; mt-2" style="height:10vh">
                                    
                                 <span><b>ANSWER:</b> 
                                 <p v-if="saveQuestion.answer !=''" v-html="saveQuestion.answer">
                                    
                                 </p>
                                 <p v-else-if="saveQuestion.answer==''" class="text-danger" >
                                 NO ANSWER SELECTED

                                 </p>
                                 </span>
                                </div>
                            </div>
                            <div class="col-9">
                            
                          <div class="quill-editor">
                               <quill-editor ref="myTextEditor"
                                    v-model="saveQuestion.questions"
                                    requried
                                    >
                                </quill-editor>
                                </div>
                            </div>
                        </div>
                             
                    </div>
                    
                   
                       <!-- end of body -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showModel=false" >Close</button>
                        <button type="submit" class="btn btn-primary">
                            <span> {{feedBack}} </span>
                            <i v-if="!showSpinner" class=" fa fa-spinner fa-spin" style="font-size:24px"></i> </button>
                    </div>
                   </form>
                </div>
            </div>
        </div>

        <!-- =====================End newQuestion -->

        <!-- =====================instruction Modal -->

        <div id="overlay" v-if="showInstructionModel">
            <div class="modal-dialog" style="margin-top:7%; right:6%">
                <div class="modal-content " style="width:50vw;margin:auto">
                    <form action="" @submit.prevent="saveInstruction">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Instruction</h5>
                        <button type="button" class="close" @click="resetInstructionForm(), showInstructionModel=false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                       <!-- body -->
                    <!-- Compose new subject title  -->
                    <div class="from-group">
                        <div class="row">
                            <div class="col-4">
                                <h6 >INSTRUCTION ID</h6>
                                <hr>
                               click on an instruction id to edit it
                               
                                <select v-model="selected_ins" @click="updateInstruction"  class="form-control "  size="4">
                                    <option :value="{text:instruction.instruction, id:instruction.instruction_id}" class="instruc text-light p-2 mb-2" v-for="(instruction, index) in  allInstruction" :key="index" v-html="instruction.instruction">
                                       
                                    </option>
                                </select>
                                <button @click="selected_ins = {}, newInstruction()" type="button" class="mt-3 btn btn-success"><i class="mr-3 fa fa-plus"></i>New Instruction</button>
                            </div>
                            <div class="col-8">
                          
                            <div v-if="!showEditor" class="m-5" v-html="selected_ins.text">
                            </div>
                              <quill-editor 
                                    v-else-if="showEditor"
                                    ref="instruction"
                                    v-model="selected_ins.text"
                                    placeholder="Instruction content" 
                                    name="instruction" >
                                </quill-editor>
                               
                            </div>
                        </div>
                             
                    </div>
                    
                   
                       <!-- end of body -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="resetInstructionForm(), showInstructionModel=false" >Close</button>
                        <button  :disabled="btnDelDisabled" type="button" @click="deleteInstructon(selected_ins.id)" class="btn btn-danger">DELET</button>
                        <button  :disabled="btnEditDisabled" type="button" @click="showEditor = true;" class="btn btn-success">Edit</button>
                        <button  :disabled="btnSaveDisabled" type="submit" @click="showEditor = false;" class="btn btn-primary">
                            <span> Save</span>
                            <i v-if="!showSpinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i> </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- =====================end of  instruction Modal -->


              <!-- =====================new OPTIONS -->
   <div id="overlay" class=" px-5" v-if="showOption">
            <div class="h-100" style=" margin-top:4rem;">
                <div class="modal-content">
                    <form action="" @submit.prevent="saveOption">
                    <div class="modal-header">
                        <h5 class="modal-title">Question Options</h5>
                        <button type="button" class="close" @click="showOption=false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-4" >
                       <!-- body -->
                    <!-- Compose new subject title  -->
                    <div class="from-group row">
                        <div class="col-8">
                                 <div style="min-height:50vh;">
                        <i class="text-danger">Type in your option and click the below button</i>
                      
                      <quill-editor ref="option"
                                    v-model="currentOption"
                                    >
                                </quill-editor>
                           

                                </div>
                        <button type="button" @click="addOption" class="btn btn-success mb-2"> {{optionStatusText}}
                            <i v-if="!showSpinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i>
                        </button>
                       <button type="button" @click="deleteOpton" :disabled="optionBtnDisable" class="btn btn-danger mx-3 mb-2"> DELETE</button>

                       <button type="button" @click="currentOption = '', optionStatusText='ADD OPTION', optionBtnDisable = true " :disabled="optionBtnDisable" class="btn btn-light  mb-2"> CANCEL</button>
                        </div>
                       
                       <br>
                       <div class="col-4">
                       <div class="d-flex">
                           
                      
                        
                       </div>

                       <p class="text-danger">Check the a radio button to set option as answer</p>
                       <div class="overflow-auto mt-3" style="height:50vh">
                           <ol type="A" class="d-block">
                               <li class="optionClass" @click="selectOption(index, optionItem.option_id)" v-for="(optionItem, index) in optionObject" :key="index">)
                                   <span>
                                   <input :checked="optionItem.option_id == saveQuestion.answers_id"  class="mr-3" :value="optionItem.options" type="radio" name="options" id=""> 
                                        <span v-html="optionItem.options"></span>
                                   </span>
                                    
                                </li>
                        
                           </ol>
                       </div>
                    </div>
                    
                       <!-- end of body -->
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showOption=false; this.saveQuestion.answers_id = ''" >Close</button>
                        <button type="submit" class="btn btn-primary">
                            <span> {{feedBack}} </span>
                            <i v-if="!showSpinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i> </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- =====================End option -->

    </div>
</template>
<script>


export default {
    data(){
        return{
           allQuestions:{},

            //user data    
           saveQuestion:{},
           selected_ins:{},

            // question Options
            questionOption:[],

            // instruction data
            allInstruction:{},
            showEditor:false,
            currentInstruction:'',

            // Option data
            showOption:false,
            currentOption:'',
            optionArray:[],
            optionObject:{},
            optionBtnDisable:true,
            optionStatusText:'ADD OPTION',
            selectedOpiton:null,
            opt:{},

            // modal properties
            showModel:false,
            showInstructionModel:false,
            showSpinner:true,
            errorReport:null,
            feedBack:"Save",
            disable:true,

            // others
            isDisabled:true,
            btnDelDisabled:false,
            btnEditDisabled:false,
            btnSaveDisabled:false,
            taskType:'',
            // editor:ClassicEditor,
        }
    },
    methods:{
        generateID(id_type){
                let token = 'qwertzuiopasdfghjklyxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
                let str = token.split('').sort(function(){
                    return 0.5-Math.random()
                }).join('');
                str = str.substring(0,2);
                let date = new Date();
                var day= date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                str = id_type+'_'+str+year+month+day;
            return str;
        },
        getAnswer(q_id, answer_id, count){
            let question_id = {'question_id':q_id, 'answer_id':answer_id};
            
            this.axios.post(this.$hostname+"junior_api.php?action=getAnswer",question_id).then((response)=>{
                this.allQuestions[count].answer = response.data[0].options;
            }).catch(error=>{
               error;
            })
        },
        getAllQuestions(){
            let subject_id = {'subject_id':this.$session.get('subject')};
             this.axios.post(this.$hostname+"junior_api.php?action=getAllQuestions",subject_id).then((response)=>{
                 let allQuestions = response.data;
                   this.allQuestions= allQuestions;
                
            }).then((updated)=>{
                updated
                 for (let index = 0; index < this.allQuestions.length; index++) {
                   let question_id =this.allQuestions[index].question_id;
                   let answer_id = this.allQuestions[index].answers_id;
                  this.getAnswer(question_id, answer_id, index)
                 }
            }).catch(error=>{
                console.log(error);
            })
        },

        
        addQuestion(){
            this.feedBack='Uploading....'
            this.showSpinner= false;
            this.saveQuestion.subject_id = this.$session.get('subject')
            this.saveQuestion.options = this.optionObject;

            // Check if there is instruction
            if(!Object.prototype.hasOwnProperty.call(this.saveQuestion,'instruction_id')){
                this.saveQuestion.instruction_id = '';
            }

            // check if there is option in the question
            if(!Object.prototype.hasOwnProperty.call(this.saveQuestion,'answer')){
                this.saveQuestion.answer = '';
            }
             this.axios.post(this.$hostname+"junior_api.php?action=save_question",this.saveQuestion).then((response)=>{
                if (response.data=='success'){    
                    this.showModel=false;
                    this.feedBack="Save";
                }
               
            }).then(saveQuestion=>{
                saveQuestion;
                  this.showSpinner= true;
                this.showModel=false;
                this.feedBack="Save";
            this.getAllQuestions();

            }).
            catch(error=>{
                console.log(error);
            });

          

        },
        newQuestion(){
          this.currentInstruction='';
          this.saveQuestion={};
          this.saveQuestion.question_id= this.generateID('qst');
          this.currentOption = '';
          this.optionStatusText='ADD OPTION';
          this.optionBtnDisable = true;
          this.showModel=true;

        },

        confirmDelete(question_id){
           this.$swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",

            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result)=>{
                if(result.value){
                    this.$swal.fire(
                        this.deleteFunc(question_id),
                        'success'
                    )

                }
            });          
        },

        deleteFunc(question_id){
             let qustion_id = {'question_id':question_id}
             this.axios.post(this.$hostname+"junior_api.php?action=deleteQuestion",qustion_id).then((response)=>{
                 {response}
                }).then(endre=>{
                    {endre}
                 this.getAllQuestions();

                })
                .catch(error=>{
                    console.log(error)
                })

        },

        editFunc(question_id){
           
             let question_id_obj = {'question_id':question_id}
            this.axios.post(this.$hostname+"junior_api.php?action=getOneQuestion",question_id_obj).then((response)=>{
                   
                    let questionData = response.data;
                    this.saveQuestion = questionData[0];
                    
                }).then(res=>{
                      let answer_id_arr = {'question_id':question_id, 'answer_id':this.saveQuestion.answers_id}
                     this.axios.post(this.$hostname+"junior_api.php?action=getAnswer",answer_id_arr).then((response2)=>{
                          this.saveQuestion.answer = response2.data[0].options;
                            for (let index = 0; index < this.allInstruction.length; index++) {
                                if (this.allInstruction[index].instruction_id== this.saveQuestion.instruction_id) {
                                    this.currentInstruction = this.allInstruction[index].instruction.slice(0,50)+'....';
                                   
                                }
                                
                            }
                            // this.currentInstruction = 
                     }); {{res}} 
                   this.showModel=true;
                }).
                catch(error=>{
                      
                    console.log(error)
                })
        },


        // Instruction methods

        // main crude
        getInstructions(){
                    let subject_id = {'subject_id':this.$session.get('subject')};
                    this.axios.post(this.$hostname+"junior_api.php?action=getInstructions",subject_id).then((response)=>{
                    
                        this.allInstruction= response.data;
                    }).catch(error=>{
                        console.log(error);
                    });
                },


        saveInstruction(){
            let instruction_data = {'subject_id':this.$session.get('subject'),'instruction_id':this.selected_ins.id,'instruction':this.selected_ins.text};
            this.axios.post(this.$hostname+"junior_api.php?action=saveInstruction", instruction_data).then((response)=>{
                         response;
                         this.saveQuestion.instruction_id=instruction_data.instruction_id;
                         this.currentInstruction=instruction_data.instruction.slice(0,50)+'....';
                         this.getInstructions();
                     });
        },
        updateInstruction(){
            this.showEditor = false
            this.btnDelDisabled = false;
            this.btnEditDisabled = false;
             this.btnSaveDisabled = false;
        },
        deleteInstructon(instruction_id){
           let instruction_id_obj = {'instruction_id':instruction_id}
                     this.axios.post(this.$hostname+"junior_api.php?action=deleteInstruction", instruction_id_obj).then((response)=>{
                         response;
                         this.getInstructions();
                             this.showEditor = false;
                            this.btnDelDisabled = true;
                            this.btnEditDisabled = true;
                            this.btnSaveDisabled = true;
                         this.selected_ins.text='';
                     });
        },

        // other methods
        

        newInstruction(){
                this.btnDelDisabled = true;
                this.btnEditDisabled = true;
                this.btnSaveDisabled = false;
           this.showEditor = true;
            this.selected_ins.id=this.generateID("ins");
        //    
        },

        resetInstructionForm(){
            this.isDisabled =true;
        },
        checkInstruction(){
            if(this.saveQuestion.instruction_id==''){
                this.btnDelDisabled = true;
                this.btnEditDisabled = true;
                this.btnSaveDisabled = true;
            }
            for (let index = 0; index < this.allInstruction.length; index++) {
               if(this.allInstruction[index].instruction_id==this.saveQuestion.instruction_id){
                   this.selected_ins.text = this.allInstruction[index].instruction;
               }
            }
           
            this.showInstructionModel = true

           
        },


        // START ======================= METHODS FOR OPTIONS
            getOptionsFromDB(){
                    let option_data = {'question_id':this.saveQuestion};  
                    this.axios.post(this.$hostname+"junior_api.php?action=getQuestionOptions",option_data).then((response)=>{
                        this.optionObject = response.data;
                    });
            },
            showOptionMtd(){
                    let option_data = {'question_id':this.saveQuestion};    
                    this.axios.post(this.$hostname+"junior_api.php?action=getQuestionOptions",option_data).then((response)=>{
                        this.optionObject = response.data;
                        this.currentOption = this.saveQuestion.answer;
                        if(this.saveQuestion.answer==undefined){
                            this.optionBtnDisable = false;
                            this.optionStatusText='ADD OPTION';

                        }else{
                            this.optionBtnDisable = false;
                            this.optionStatusText = 'UPDATE';
                        }
                            this.showOption=true;  

                     })
                   
               
        },
        addOption(){

            if (this.currentOption == ''){
                alert('Please type in your option')
            }else{
            if(this.currentOption != '' & this.optionStatusText != 'UPDATE'){
                let option_data = {'question_id':this.saveQuestion.question_id, 'options':this.currentOption};  
                 this.axios.post(this.$hostname+"junior_api.php?action=saveOptions",option_data).then((response)=>{
                     response
                     this.getOptionsFromDB();
                 })
            }else if(this.optionStatusText == 'UPDATE'){
                
                 let option_data = {'question_id':this.saveQuestion.question_id, 'option_id':this.saveQuestion.answers_id, 'options':this.currentOption};  
                 this.axios.post(this.$hostname+"junior_api.php?action=updateOption",option_data).then((response)=>{
                     response
                    this.getOptionsFromDB();
                 })
                this.optionStatusText='ADD OPTION';
                this.optionBtnDisable = true;
            }else{
                //  this.$refs.option.focus();
            }
            this.currentOption = '';
            }
        },
        selectOption(index, option_id){
            this.currentOption =this.optionObject[index].options;
            this.saveQuestion.answers_id = option_id;
            this.saveQuestion.answer= this.currentOption;
            this.selectedOpiton = index;
            this.optionBtnDisable = false;
            this.optionStatusText = 'UPDATE';
        },
        deleteOpton(){
            let option_data = {'option_id':this.saveQuestion.answers_id};  
                 this.axios.post(this.$hostname+"junior_api.php?action=deleteOption",option_data).then((response)=>{
                     response
                    this.getOptionsFromDB();
            })

            this.saveQuestion.answers_id ='';
            this.currentOption = '';
            this.optionStatusText='ADD OPTION';
            this.optionBtnDisable = true;

        },
        saveOption(){
            if(this.saveQuestion.answers_id ==''){
                alert('You have not selected any answer');
            }else{
                this.saveQuestion.answer = this.currentOption;
                this.showOption = false;
               
            }
        },
        // END ======================== METHODS FOR OPTIONS

      
    },
 
    created(){
        
        
    },
    mounted(){
        this.getAllQuestions();
        this.getInstructions();
    },
    updated(){
       
    },
  
    watch: {
        scrollFix(){
            let winOffset = this.$windowObj.scrollTop || this.$windowObj.body.scrollTop;
                if(winOffset>50){
                   this.fixedTop= true;
                }else{
                    this.fixedTop= false;

                }
        },
      
    },

    
}
</script>