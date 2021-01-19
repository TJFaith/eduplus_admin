<template>
    <div class="container">
        <div class="row d-flex justify-content-center text-white">

<!-- ===========================  PRIMARY SCHOOL ASSESSMENT-->

            <div class="col-5 m-4 text-center category_card">
                <div class="row h-25 bg-success">
                    <div class="col-12 align-self-center"><h4>Primary School Assessment</h4></div></div>
                    <hr>
                <div class="row h-80 bg-success shadow shadow-sm">
                    <div class="col-12 align-self-center">
                         <label class="text-white" >SUBJECT TITLE</label>
                         <p class="text-white"><i>Select one subject title or create new one</i></p>
                       <div :class="{'d-none':primary_hideError}" class="alert alert-danger">SELECT SUBJECT</div>
                       <select @change="hideError=true" v-model="addSubject.selectedSubject" class="custom-select" size="4" name="subject-title" id="">
                            <option value="0">===Select subject title===</option>
                            <option    v-for="(primary_subject, index) in primary_allSubjects" :key="index" :value="{id:subject.subject_id,text:subject.subject}">{{subject.subject}}</option>
                           
                        </select>
                     <div class="text-danger mt-2">SELECTED SUBJECT: <br>{{addSubject.selectedSubject.text}}</div>
                   <span @click="showModel=true"  data-toggle="modal" data-target="#newSubject"  class="mt-2 btn btn-danger">Add new Subject<i class="ml-2 fas fa-plus"></i></span>
 </div></div>
            </div>
            
<!-- ===========================  JUNIOR SCHOOL ASSESSMENT-->
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
                  
                   <span @click="showModel=true"  data-toggle="modal" data-target="#newSubject"  class="mt-2 btn btn-danger">Add new Subject<i class="ml-2 fas fa-plus"></i></span>

                   

                   
                    </div></div>
                   
            </div>

        </div>
      
<!-- MODAL -->

         <!-- New Subject model -->

   <div id="overlay" v-if="showModel">
            <div class="modal-dialog" style="margin-top:15%">
                <div class="modal-content">
                    <form action="" @submit.prevent="addSubjectMtd">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New User</h5>
                        <button type="button" class="close" @click="showModel=false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                       <!-- body -->
                    <!-- Compose new subject title  -->
                    <div class="from-group">
                        
                        <div class="inpute-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-heading"></i>
                                </span>
                                <input @keyup="errorReport = null" v-model="addSubject.selectedSubject" required class="form-control" type="text" name="" id="">
                                
                                 

                            </div>
                        </div>
                    </div>
                    <div class="form-group text-danger">
                                {{errorReport}}
                        
                    </div>
                    <div class="from-group mt-2">
                        <label for="checkbox">Subject Category</label><br>
                        
                        <label class="checkbox-inline mr-3">
                            <input v-model="subjectCategory" type="checkbox" value="s" class="mr-2">Science
                        </label>
                        
                        <label class="checkbox-inline mr-3">
                            <input v-model="subjectCategory" type="checkbox" value="c" class="mr-2">Commercial
                        </label>
                        
                        <label class="checkbox-inline mr-3">
                            <input v-model="subjectCategory"  type="checkbox" value="a" class="mr-2">Art
                        </label>
                    </div>

                       <!-- end of body -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showModel=false" >Close</button>
                        <button type="submit" class="btn btn-primary">
                            <span> {{feedBack}} </span>
                            <i v-if="!showSpinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i> </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

<!-- end -->




    </div>
</template>
<script>
export default {
    data(){
        return{
            // PRIMARY SCHOOL DATA
            primary_hideError:true,
            primary_allSubjects:{},

            // JUNIOIR SCHOOL DATA
            hideError:true,
            allSubjects:{},
            showModel:false,
            showSpinner:true,
            subjectCategory:[],
            errorReport:null,
                
            addSubject:{
                selectedSubject:'',
                science :'',
                art:'',
                commercial :'',
            },
           
        }
    },
    methods: {
        getSubject(){
            //  this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            this.axios.get(this.$hostname+"api.php?action=getSubject").then((response)=>{
                this.allSubjects= response.data;
                console.log(this.allSubjects);
            }).catch(error=>{
                alert(error);
            })

        

         },
           addSubjectMtd(){
            this.addSubject.science = this.subjectCategory[0];
            this.addSubject.art = this.subjectCategory[1];
            this.addSubject.commercial = this.subjectCategory[2];
           
           if(this.subjectCategory !=""){
          
            
            // check if subject exist 
            for (let index = 0; index < this.allSubjects.length; index++) {
           

                var ele = this.allSubjects[index].subject.toLowerCase();
                var newEle = this.addSubject.selectedSubject.toLowerCase();

                if (ele == newEle){
                    this.errorReport = 'Subject Already Exist';
                    break;
                }
                
            }
            if(this.errorReport == null){
                this.feedBack="Saving Data..."
                this.showSpinner= false;

                  this.axios.post(this.$hostname+"api.php?action=addSubject",this.addSubject).then((response)=>{
                    response;
                    this.showSpinner= !this.showSpinner;
                        this.showModel= false;
                        // reset form
                        this.subjectCategory = "",
                        this.addSubject.selectedSubject = "",
                        this.getSubject();
                    }).catch(error=>{alert(error)});

            }

         

               
          
            
           }else{
               alert('please select at least one subject category');
           }

        },
    
    },
    created(){
        this.getSubject()
    },
     
}
</script>