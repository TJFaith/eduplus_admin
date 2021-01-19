<template>
   <div class="container">
        <div class="row d-flex justify-content-center text-white">
             <div class="col-11 col-md-4 m-2 text-center category_card">
                <div class="row h-25 bg-success">
                    <div class="col-12 align-self-center"><h4>Primary School Assessment</h4></div></div>
                    <hr>
                       <div class="row pb-4 bg-light shadow shadow-sm">
                    <div class="col-12 align-self-center">
                      <label class="text-muted" >SUBJECT TITLE</label>
                       <p class="text-muted"><i>Select one subject title to upload question</i></p>
                       <div :class="{'d-none':primary_hideError}" class="alert alert-danger">SELECT SUBJECT</div>
                        <select @change="primary_hideError=true" v-model="primary_addSubject" class="custom-select" size="4" name="subject-title" id="">
                            <option value="0">===Select subject title===</option>
                            <option    v-for="(primary_subject, index) in primary_allSubjects" :key="index" :value="{id:primary_subject.primary_subject_id, text:primary_subject.primary_subject}">{{primary_subject.primary_subject}}</option>
                           
                        </select>
                       
                   <div class="text-danger mt-2">SELECTED SUBJECT: <br>{{primary_addSubject.text}}
                   </div>
                  
                  <button @click="primary_uploadQuestion" class="mt-2 btn btn-danger align-self-center">Upload Questions <i class="ml-4 fa fa-upload"></i> </button>
                    </div></div>
            </div>
            
<!-- =========================== -->
            <div class="col-11 col-md-4 m-2 text-center category_card">
                <div class="row h-25 bg-danger">
                    <div class="col-12 align-self-center"><h4>Junior School Assessment</h4></div></div>
                    <hr>
                  <div class="row pb-4 bg-light shadow shadow-sm">
                    <div class="col-12 align-self-center">
                            
                       <label class="text-muted" >SUBJECT TITLE</label>
                       <p class="text-muted"><i>Select one subject title to upload question</i></p>
                       <div :class="{'d-none':hideError}" class="alert alert-danger">SELECT SUBJECT</div>
                        <select @change="hideError=true" v-model="addSubject.selectedSubject" class="custom-select" size="4" name="subject-title" id="">
                            <option value="0">===Select subject title===</option>
                            <option    v-for="(subject, index) in allSubjects" :key="index" :value="{id:subject.subject_id,text:subject.subject}">{{subject.subject}}</option>
                           
                        </select>
                       
                   <div class="text-danger mt-2">SELECTED SUBJECT: <br>{{addSubject.selectedSubject.text}}</div>
                  
                  <button @click="uploadQuestion" class="mt-2 btn btn-danger align-self-center">Upload Questions <i class="ml-4 fa fa-upload"></i> </button>
                    </div></div>
                   
            </div>

        </div>
      
    </div>
</template>
<script>
export default {
    data(){
        return{
            // primary school
            primary_hideError:true,
            primary_allSubjects:{},
            primary_addSubject:{
                primary_selectedSubject:''
            },
            primary_question_category:"Primary School",


            // junior secondary school
            hideError:true,
            allSubjects:{},
            addSubject:{
                selectedSubject:'',
                science :'',
                art:'',
                commercial :'',
            },
            question_category:"Junior Secondary"
        }
    },
    methods: {
        // primary school methods
        get_Primary_Subject(){
            this.axios.get(this.$hostname+"primary_api.php?action=get_Primary_Subject").then((response)=>{
                this.primary_allSubjects = response.data;
            }).catch(error=>{
                alert(error);
            });
        },

        primary_uploadQuestion(){
            if(this.primary_addSubject.primary_selectedSubject == '' || this.primary_addSubject.primary_selectedSubject==0){
                 this.primary_hideError=false;
             }else{
                 this.$session.start();
                 this.$session.set('primary_subject', this.primary_addSubject.id);
                 this.$router.push({path:`/primary_uploadQuestion/${this.primary_question_category}/${this.primary_addSubject.text}`});

             }
        },

        // junior secondary methods
         getSubject(){
            this.axios.get(this.$hostname+"junior_api.php?action=get_junior_Subject").then((response)=>{
                this.allSubjects= response.data;
               
            }).catch(error=>{
                alert(error);
            })
         },
         uploadQuestion(){
             if(this.addSubject.selectedSubject == '' || this.addSubject.selectedSubject==0){
                 this.hideError=false;
             }else{
                 this.$session.start();
                 this.$session.set('subject', this.addSubject.selectedSubject.id);
                 this.$router.push({path:`/uploadQuestion/${this.question_category}/${this.addSubject.selectedSubject.text}`});

             }
         }
    },
    created(){
        this.getSubject();
        this.get_Primary_Subject();
    },
     
}
</script>