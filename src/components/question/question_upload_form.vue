<template>
    <div class="pageLayout container">
              <!-- snackbar for  alert messages-->
            <v-snackbar
                    v-model="snackOptions.status"
                    :color="snackOptions.color"
                >
                    {{ snackOptions.message }}
                    <template v-slot:action="{ attrs }">
                    <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="snackOptions.status = false"
                    >
                        <v-icon>fas fa-times</v-icon>
                    </v-btn>
                    </template>
                </v-snackbar>
                
                <!-- general progress bar -->
                <v-dialog v-model="generalLoader.status" persistent  max-width="30vw" >
                    <v-card class="text-center"  color="primary" dark>
                        <v-card-text> 
                             <span>{{generalLoader.response}}</span>
                              <v-progress-linear indeterminate color="white" class="mb-0" ></v-progress-linear> 
                        </v-card-text>
                    </v-card>
                </v-dialog>
                
       <p class="text-muted border-left pl-3"><b>Upload New {{$route.params.sub_id}} Question </b>  
            <router-link to="/uploadQuestion"><button class="btn btn-light mr-5"> CHANGE SUBJECT </button></router-link>
        </p>
       <hr>
    
       <div class="row">
           <div class="col-12">
                   <div>
                      <div class="bg-danger text-white p-2 rounded shadow shadow-xs">
                           <h4> SUBJECT: {{$route.params.sub_id}} </h4>
                      </div>
                    <hr>
            
                <!-- SHOW ALL SUBJECT IN A TABLE -->
                      <div>
                          <v-btn color="primary" dark class="mb-2" @click="showQuestionDialog = true" > <v-icon>mdi-plus</v-icon> NEW QUESTION</v-btn>
                      </div>
                
                    <!-- Get all question -->
                    <!-- data table code starts here -->
                   <v-card>
                       <v-card-title>
                           <!-- search code -->
                            <v-text-field
                                v-model="searchQuestion"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details>
                            </v-text-field>
                        </v-card-title>

                    <!-- main data table -->
                   <v-data-table :headers="headers" :items="question_arr" sort-by="calories"  class="elevation-1" :loading='loadingQuestions' loading-text="Loading... Please wait" :search="searchQuestion">
                       
                       <template v-slot:top> 
                        <!-- NEW QUESTION DIALOGE -->
                                 <v-dialog v-model="showQuestionDialog" persistent  max-width="70vw" >
                                      <v-card>
                                           <v-card-title>
                                                <span class="headline">New Question</span>
                                                </v-card-title>

                                                <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <!-- instruction -->
                                                        <v-col cols="8">
                                                            <v-select
                                                                v-model="selectedInstruction" 
                                                                @change="setInstruction()"
                                                                hint="Select an instruction from the drop down or click on edit button to add new instruction"
                                                                :items="allInstruction"
                                                                item-text="instruction"
                                                                item-value="instruction_id"
                                                                label="Select Instruction"
                                                                class="basic"
                                                                persistent-hint
                                                                return-object
                                                                single-line
                                                                >
                                                                 <template v-slot:prepend>
                                                                        <v-btn @click="showInstructionDialog = true" color="blue" text > 
                                                                 <v-icon>mdi-pencil</v-icon> Edit </v-btn>
                                                                </template>
                                                                 <template v-slot:item='{item}'> 
                                                                     <span v-html='item.instruction'/> 
                                                                    </template>


                                                                <template v-slot:selection='{item}'> 
                                                                    <span class="showInstruction" v-html='item.instruction'>{{ item.instruction.slice(0, 5) }}</span> 
                                                                </template>
                                                                
                                                                </v-select>
                                                            <!-- <v-chip>Add new instruction to question or bind to an existing instruction</v-chip> -->
                                                        

                                                        </v-col>
                                                        <v-col cols="4">
                                                         <v-btn @click="showOptionDialog = true" color="blue" text > <v-icon>mdi-pencil</v-icon> Edit Option</v-btn>
                                                         </v-col>
                                                    </v-row>
                                                    <v-row>
                                                         <v-col cols="8" class="overflow-auto" style="max-height:25vh">
                                                             <span v-html="selectedInstruction.instruction"/>
                                                         </v-col>
                                                    </v-row>
                                                    <v-row>
                                                    <v-col  cols="8" class="overflow-auto" style="height:30vh" > 
                                                        <!-- Question -->
                                                        <div class="quill-editor">
                                                              <quill-editor ref="myTextEditor" v-model="newQuestion_obj.question" requried> </quill-editor>
                                                        </div> 
                                                    </v-col>
                                                    <v-col  cols="4" class="overflow-auto" style="height:30vh"> 
                                                        <!-- options -->
                                                            <ol type="A">
                                                                <li v-for="(options) in newQuestion_obj.options" :key="options.option_id">
                                                                    <span v-html="options.options">{{options.options}}</span>
                                                                    <v-icon v-if="options.option_id == newQuestion_obj.answers_id" color="green">mdi-check</v-icon>

                                                                </li>
                                                            </ol>
                                                         
                                                      
                                                    </v-col>
                                                    </v-row>
                                                </v-container>
                                                </v-card-text>
                                               
                                                <v-card-actions>
                                                    <v-btn  color="blue darken-1" text  @click="closeQustionDialog">  Cancel </v-btn>
                                                    <v-btn color="blue darken-1" text @click="saveQuestion" > Save </v-btn>
                                                </v-card-actions>
                                        </v-card>
                                </v-dialog>
                        <!-- NEW OPTION -->
                                <v-dialog v-model="showOptionDialog" persistent  max-width="50vw" >
                                      <v-card>
                                           <v-card-title>
                                                <span class="headline">Option Dialog</span>
                                                <v-spacer></v-spacer>
                                                    <v-btn  color="blue darken-1" text  @click="showOptionDialog = false">
                                                        
                                                        <v-icon>fas fa-times</v-icon></v-btn>
                                                </v-card-title>

                                                <v-card-text>
                                                <v-container>
                                                   
                                                    <v-row>
                                                    <v-col  cols="6" class="overflow-auto" style="height:40vh" > 
                                                        <!-- option -->
                                                        <div class="quill-editor">
                                                              <quill-editor class='ql-editor' ref="myTextEditor" v-model="newOptionData" requried> </quill-editor>
                                                        </div> 
                                                    </v-col>
                                                     <v-col  cols="6" class="overflow-auto" style="height:40vh" > 
                                                        <!-- option -->
                                                         <ol type="A">
                                                                <li class="newOption" @click="getEditOption(options.option_id)" v-for="(options) in newQuestion_obj.options" :key="options.option_id">
                                                                    <span v-html="options.options">{{options.options}}</span>
                                                                    <v-icon v-if="options.option_id == newQuestion_obj.answers_id" color="green">mdi-check</v-icon>

                                                                </li>
                                                            </ol>
                                                      
                                                    </v-col>
                                                    
                                                    </v-row>
                                                </v-container>
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-btn color="red darken-1" text @click="deleteOption" :disabled="!editMode" > <v-icon>mdi-delete</v-icon> Delete </v-btn>
                                                    <v-btn color="blue darken-1" text @click="addOption" > <v-icon>mdi-check</v-icon> Done </v-btn>
                                                    <v-btn color="blue darken-1" text @click="resetOption" :disabled="!editMode"> <v-icon>mdi-file</v-icon> New </v-btn>
                                                    <v-btn color="blue darken-1" text @click="setAnswer" :disabled="!editMode" > <v-icon>mdi-check</v-icon>Set as Answer </v-btn>
                                                    <v-spacer></v-spacer>

                                                     <v-btn color="red darken-1" text @click="showOptionDialog = false" >  Close </v-btn>
                                                </v-card-actions>
                                        </v-card>
                                </v-dialog>
                     
                     <!-- INSTRUCTION DIALOGE -->
                          <v-dialog v-model="showInstructionDialog" persistent  max-width="50vw" >
                                      <v-card>
                                           <v-card-title>
                                                <span class="headline">Instruction Dialog</span>
                                                <v-spacer></v-spacer>
                                                    <v-btn  color="blue darken-1" text  @click="showInstructionDialog = false">
                                                        
                                                        <v-icon>fas fa-times</v-icon></v-btn>
                                                </v-card-title>

                                                <v-card-text>
                                                <v-container>
                                                   
                                                    <v-row>
                                                    <v-col  cols="6" class="overflow-auto" style="height:40vh" > 
                                                        <!-- option -->
                                                        <div class="quill-editor">
                                                              <quill-editor class='ql-editor' ref="myTextEditor" v-model="newInstruction_obj.instruction" requried> </quill-editor>
                                                        </div> 
                                                    </v-col>
                                                     <v-col  cols="6" class="overflow-auto" style="height:40vh" > 
                                                        <!-- List of instruction -->
                                                    
                                                        <v-list-item link @click="getEditInstruction(allInstruction.instruction_id,allInstruction.instruction )" v-for="(allInstruction) in allInstruction" :key="allInstruction.instruction_id">
                                                            <v-list-item-content>
                                                                <v-list-item-title>
                                                                    <span v-html="allInstruction.instruction">{{allInstruction.instruction}}</span>
                                                                </v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                       
                                                    </v-col>
                                                    
                                                    </v-row>
                                                </v-container>
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-btn color="red darken-1" text @click="confirmInstructionDelete" :disabled="!editMode" > <v-icon>mdi-delete</v-icon> Delete </v-btn>
                                                    <v-btn color="blue darken-1" text @click="addInstruction" > <v-icon>mdi-check</v-icon> Done </v-btn>
                                                    <v-btn color="blue darken-1" text @click="resetInstruction" :disabled="!editMode"> <v-icon>mdi-file</v-icon> New </v-btn>
                                                    <v-btn color="blue darken-1" text @click="bindInstruction" :disabled="!editMode" > <v-icon>mdi-check</v-icon>Bind to Question</v-btn>
                                                    <v-spacer></v-spacer>

                                                     <v-btn color="red darken-1" text @click="showInstructionDialog = false" >  Close </v-btn>
                                                </v-card-actions>
                                        </v-card>
                                </v-dialog>

                        </template>

                        <template v-slot:item.instruction="{ item }" >
                                <span v-html="item.instruction.slice(0,100)"></span>
                        </template>

                         <template v-slot:item.questions="{ item }" >
                                <span v-html="item.questions"></span>
                        </template>

                         <template v-slot:item.answer="{ item }" >
                                <span v-html="item.answer"></span>
                        </template>
                        
                    
                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editItem(item)" > mdi-pencil </v-icon>
                            <v-icon small @click="confirmDelete(item)"> mdi-delete </v-icon>
                        </template>

                        <template v-slot:no-data>
                            <v-btn color="primary" @click="getAllQuestions">
                                Refresh
                            </v-btn>
                        </template>

                        
                     

                    </v-data-table>
                   </v-card>
                </div>
           </div>
       </div>


      

    </div>
</template>
<script>


export default {
    data(){
        return{
            // Boolian Variables
            showQuestionDialog:false,
            loadingQuestions:false,
            showOptionDialog:false,
            showInstructionDialog:false,
            editMode:false,
            dialogDelete: false,
            showLoading:false,


            // array and Objects Variables
            generalLoader:{status:false, response:''},
            newQuestion_obj:{answers_id:'', options:[], instruction_id:'', instruction:'', question_id:'', question:'', subject_id:''},
            question_arr:[],
            snackOptions:{status:false, color:'', message:''},
            headers: [
                { text: 'INSTRUCTION', align: 'start', sortable: true, value: 'instruction'},
                { text: 'QUESTIONS', value: 'questions', sortable: true,  },
                { text: 'ANSWERS', value: 'answer', sortable: true, },
                { text: 'Actions', value: 'actions', sortable: false },
            ],

            newInstruction_obj:{subject_id:'', instruction_id:'', instruction:''},
            allInstruction:[],

            // Data Variables
            searchQuestion:'',
           newOptionData:'',
           option_id:'',
           selectedInstruction:{}

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

        //  METHODS FOR INSTRUCTION 
        getInstructions(){
             this.allInstruction = [];
             let subject_id = {'subject_id':this.$session.get('subject')};
             this.axios.post(this.$hostname+"junior_api.php?action=getInstructions",subject_id).then((response)=>{
                for (let index = 0; index < response.data.length; index++) {
                      this.allInstruction.push(response.data[index]);
                }
                //  this.allInstruction.push(response.data)
              
            }).catch(error=>{
               this.snackOptions.color = 'red'
               this.snackOptions.message = error
               this.snackOptions.status = true
                

            })
        },

        getEditInstruction(instruction_id, instruction){
            this.generalLoader.status = true
            this.generalLoader.response ='Loading...please wait'
            this.editMode = true
            this.newInstruction_obj.subject_id =this.$session.get('subject')
            this.newInstruction_obj.instruction_id =instruction_id
            this.newInstruction_obj.instruction = instruction
         
             this.generalLoader.status = false

        },
     
            resetInstruction(){
                 this.editMode = false
                this.newInstruction_obj={subject_id:'', instruction_id:'', instruction:''}
            },

            addInstruction(){
                if(this.newInstruction_obj.instruction == ''){
                    this.snackbackMethod('red', 'Type question before saving', true)
                }else{
                    this.newInstruction_obj.instruction = this.removeQullTag(this.newInstruction_obj.instruction)
                    this.newInstruction_obj.subject_id =this.$session.get('subject')
                    this.generalLoader.status = true
                    this.generalLoader.response ='...please wait'
                    this.axios.post(this.$hostname+"junior_api.php?action=saveInstruction",this.newInstruction_obj).then((response)=>{
                        this.generalLoader.status = false
                    if(response.data ==1){
                        this.resetInstruction();
                        this.snackbackMethod('green', 'Instruction Added', true)

                    }else if(response.data ==2){
                        // this.selectedInstruction.instruction = this.newInstruction_obj.instruction
                        this.resetInstruction();
                        this.snackbackMethod('green', 'Instruction Updated', true)
                        
                    }else{
                        
                    this.snackbackMethod('red', 'try again, an error occured!', true)
                    }
                
                    this.getInstructions();
                    }).catch(error=>{
                        this.generalLoader.status = false
                    this.snackbackMethod('red', error, true)
                    })
                }
            },

            bindInstruction(){
                this.newQuestion_obj.instruction_id =  this.newInstruction_obj.instruction_id
                this.snackbackMethod('green', 'Instruction binded to this question', true)
            },

            setInstruction(){
                this.newQuestion_obj.instruction_id =  this.selectedInstruction.instruction_id
                this.snackbackMethod('green', 'Instruction binded to this question', true)
            }, 

           confirmInstructionDelete(){
           this.$swal.fire({
            title: 'Are you sure?',
            text: "Every instruction binded to question would be deleted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result)=>{
                if(result.value){
                        this.deleteInstruction()

                    // this.$swal.fire(
                    //     // icon  = 'success'

                    // )

                }
            });          
        },

        deleteInstruction(){
            let instruction_id ={'instruction_id' : this.newInstruction_obj.instruction_id}
             this.axios.post(this.$hostname+"junior_api.php?action=deleteInstruction",instruction_id).then((response)=>{
                
                 if (response.data == 1){
                this.getInstructions();
                    this.resetInstruction();

                this.snackbackMethod('green', 'Instruction Deleted', true)
                 }
             }).catch(error=>{
                this.snackbackMethod('red', error, true)
            })
        },

        
        // METHODS FOR QUESTIONS
         getAllQuestions(){
             this.loadingQuestions = true
            let subject_id = {'subject_id':this.$session.get('subject')};
             this.axios.post(this.$hostname+"junior_api.php?action=getAllQuestions",subject_id).then((response)=>{
                this.question_arr = response.data;
                this.loadingQuestions =false
                
            }).catch(error=>{
               this.snackbackMethod('red', error, true)
                this.loadingQuestions =false

            })
        },
        saveQuestion(){
            if(this.newQuestion_obj.question == ''){
                this.snackbackMethod('red', 'Type question before saving', true)
            }else{
            this.generalLoader.status = true,
            this.generalLoader.response ='Saving Question....please wait'

            if (this.newQuestion_obj.question_id == '' && this.newQuestion_obj.subject_id == ''){
                this.newQuestion_obj.question_id = this.generateID('qst')
                this.newQuestion_obj.subject_id = this.$session.get('subject')
            }
             this.axios.post(this.$hostname+"junior_api.php?action=save_question",this.newQuestion_obj).then((response)=>{
               
              if(response.data == 1){
                  this.getAllQuestions();
                this.generalLoader.status = false
                this.closeQustionDialog()
                this.newQuestion_obj={answers_id:'', options:[], instruction_id:'', instruction:'', question_id:'', question:'', subject_id:''}
                this.snackbackMethod('green', 'success', true)
              }else {
                this.generalLoader.status = false
                  this.snackbackMethod('red', 'sorry an error occured', true)
              }
                
                

                this.loadingQuestions =false
                
            }).catch(error=>{
             this.snackbackMethod('red', error, true)
                this.generalLoader.status = false,

                this.loadingQuestions =false

            })
            }

            // reset form
            this.newQuestion_obj={
                answers_id:'',
                options:[], 
                instruction_id:'', 
                instruction:'', 
                question_id:'', 
                question:'', 
                subject_id:''
            }
        },


        editItem(item){
            this.newQuestion_obj.answers_id = item.answers_id
            this.selectedInstruction.instruction = item.instruction
            this.newQuestion_obj.instruction_id = item.instruction_id
            this.newQuestion_obj.question_id = item.question_id
            this.newQuestion_obj.question = item.questions
                this.newQuestion_obj.options=item['options']
                
            this.showQuestionDialog = true;

        },





        // METHODS FOR OPTIONS
        addOption(){
            if(this.newOptionData ==''){
                this.snackbackMethod('red', 'type your option', true)
            }else{
                if(this.editMode == false){
                    this.newOptionData = this.removeQullTag(this.newOptionData)
                    let newOption = {}
                    newOption.option_id = this.generateID('otp')
                    newOption.options = this.newOptionData
                    this.newQuestion_obj.options.push(newOption)
                    this.newOptionData = ''
                }else if(this.editMode == true){
                    this.newOptionData = this.removeQullTag(this.newOptionData)
                    

                    // update option in array
                    this.newQuestion_obj.options.find((o, i) => {
                        if (o.option_id === this.option_id) {
                            this.newQuestion_obj.options[i] = { option_id: this.option_id, options: this.newOptionData};
                            return true; // stop searching
                        }
                    });

                    this.newOptionData = ''
                    this.editMode = false

                }
            }
        },

        getEditOption(option_id){
             this.generalLoader.status = true
            this.generalLoader.response ='Loading...please wait'
            this.editMode = true
           this.option_id = option_id
           this.newQuestion_obj.options.find((o, i) => {
                if (o.option_id === option_id) {
                    this.newOptionData = this.newQuestion_obj.options[i].options
                    // this.newQuestion_obj.options[i] = { option_id: option_id, option: this.newOptionData};
                    return true; // stop searching
                }
            });
             this.generalLoader.status = false

        },

         resetOption(){
            this.option_id=''
            this.editMode = false
            this.newOptionData = ''
        },

        deleteOption(){
            // remove option from array 
            this.newQuestion_obj.options.find((o, i) => {
                if (o.option_id === this.option_id) {
                    this.newQuestion_obj.options.splice(i, 1);
                    return true; // stop searching
                }
            });

             this.newOptionData = ''
             this.editMode = false

            // delete option from database
            let option_id = {'option_id':this.option_id}
             this.axios.post(this.$hostname+"junior_api.php?action=deleteOption",option_id).then((response)=>{
            
                    if (response.data == 1 || response.data == 2){
                        this.snackbackMethod('green', 'Option Deleted Successfully',true)
                        
                    }
            
            }).catch(error=>{
             this.snackbackMethod('red', error, true)
                this.generalLoader.status = false,

                this.loadingQuestions =false

            })
            
            
        },
        
        setAnswer(){
            this.newQuestion_obj.answers_id = this.option_id
             this.newOptionData = ''
             this.editMode = false
              
        },



        // METHODS FOR DELETE
         confirmDelete(item){
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
                        this.deleteFunc(item)

                    // this.$swal.fire(
                    //     // icon  = 'success'

                    // )

                }
            });          
        },
        

       deleteFunc (item) {
         this.axios.post(this.$hostname+"junior_api.php?action=deleteQuestion", item).then(()=>{
                    this.snackbackMethod('green', 'Question Deleted ', true)
             
                this.getAllQuestions();
            }).catch(error=>{
              this.errorMessage = error
                this.showSnackbarAlert = true
            });

      },

    

     

        removeQullTag(q_data){
            q_data =  q_data.replace(/<p[^>]*>/g, "");
            return q_data = q_data.replace(/<\/?p[^>]*>/g, "")
        },
        closeQustionDialog(){
            this.selectedInstruction = {}
            this.showQuestionDialog = false;
        },
       
       
        snackbackMethod(color, message, status){
             this.snackOptions.color = color
               this.snackOptions.message = message
               this.snackOptions.status = status
        }
    },
    mounted(){
        this.getInstructions();
        this.getAllQuestions();
    },
}
</script>

<style scoped>
.newOption{
    cursor:pointer;
    padding:2px 0px 2px 5px
}

.newOption:hover{
    background-color: rgb(206, 234, 236);
   
}

.basic{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.showInstruction img{
    width: 100%;
}
</style>