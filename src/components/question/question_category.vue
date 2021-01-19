<template>
    <div class="container">
        <div class="row d-flex justify-content-center text-white">
            <div class="col-5 m-4 text-center category_card">
                <div class="row h-25 bg-success">
                    <div class="col-12 align-self-center"><h4>Primary School Assessment</h4></div></div>
                    <hr>
                <div class="row h-80 bg-success shadow shadow-sm">
                    <div class="col-12 align-self-center">
                        <p>NO SUBJECTS FOUND</p>
                        <router-link to="/admin/subjects">Upload subject</router-link>
                        
                        <i class="ml-4 fa fa-upload"></i> </div></div>
            </div>
            
<!-- =========================== -->
            <div class="col-5 m-4 text-center category_card">
                <div class="row h-25 bg-danger">
                    <div class="col-12 align-self-center"><h4>Junior Sechool Assessment</h4></div></div>
                    <hr>
                  <div class="row pb-4 bg-light shadow shadow-sm">
                    <div class="col-12 align-self-center">
                            
                       <label class="text-muted" >SUBJECT TITLE</label>
                       <p class="text-muted"><i>Select one subject title or create new one</i></p>
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
         getSubject(){
            this.axios.get(this.$hostname+"api.php?action=getSubject").then((response)=>{
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
                 this.$router.push({path:`/admin/uploadQuestion/${this.question_category}/${this.addSubject.selectedSubject.text}`});

             }
         }
    },
    created(){
        this.getSubject()
    },
     
}
</script>