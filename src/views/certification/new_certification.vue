<template>
<div class="container">
  <div class="row bg-dark text-light p-4 border-rounded">
      <div class="col-md-12">
    <form @submit.prevent="dataEngine(queryType.query)" class="w-100" style="min-width:100%">
     
      <div class="d-flex">
       <div class="col-md-6">
           <span >Certification Title</span>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fas-task"></i></span>
                </div>
                    <input v-model="c_data.c_title" class="form-control" type="text" name="title" id="1" placeholder="Certification Title" required>
                </div>
                
              <span >Organization Name</span>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fas-task"></i></span>
                </div>
                    <input v-model="c_data.c_organizationName" class="form-control" type="text" name="name" id="11" placeholder="Organization Name" required>
                </div>
        <span>Office Address</span>
              <div class="input-group mb-3">
              
                <textarea v-model="c_data.c_officeAddress" class="form-control" name="officeAddress" id="2" cols="2" rows="3"></textarea>
                   
                </div>
 
              <span>Web Address</span>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-globe"></i></span>
                </div>
                    <input v-model="c_data.c_webAddress" class="form-control" type="url" name="webAddress" id="3" placeholder="Web Address" required>
                </div>

                <span>Email Address</span>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                </div>
                    <input v-model="c_data.c_emailAddress" class="form-control" type="email" name="emailAddress" id="4" placeholder="Email Address" >
                </div>

             <span>Moblie Number</span>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-phone"></i></span>
                </div>
                    <input v-model="c_data.c_mobileNumber" class="form-control" type="number" name="mobileNumber" id="5" placeholder="Mobile Number" >
                </div>

        <span>Category</span>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-list-alt"></i></span>
                </div>
                <select name="" id="" class="form-control" v-model="c_data.c_category">
                  <option selected disabled value="all">Select Category Option</option>
                  <option :selected="category.c_ID == c_data.c_category" v-for="(category, index) in c_category" :key="index" :value="category.c_ID">{{category.c_name}}</option>
                </select>
                     <div class="input-group-prepend">
                    <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-success">
                    Add <i class="fa fa-plus"></i>
                  </button>
                </div>
                </div>
              


        </div>

        <div class="text-center">
          <div class="text-danger">Image must be less than 500kb</div>
          <hr>

          <img v-if="img_preview" :src="img_preview" class="img-rounded mb-3 w-50" />
          <img v-else class="mb-3 w-25"  src="@/assets/icon.png" alt="">
        <input  @change="onFileChange"  type="file" ref="file" name="file" class=" btn btn-light text-center form-control" id="file">

        <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fab fa-facebook"></i></span>
                </div>
                    <input v-model="c_data.c_facebook" class="form-control" type="url" name="facebook" id="6" placeholder="facebook Id" >
                </div>

          <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fab fa-youtube"></i></span>
                </div>
                    <input v-model="c_data.c_youtube" class="form-control" type="text" name="youtube" id="7" placeholder="Youtube channel" >
                </div>

      <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fab fa-twitter"></i></span>
                </div>
                    <input v-model="c_data.c_twitter" class="form-control" type="url" name="twitter" id="8" placeholder="twitter Id" >
                </div>

          <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fab fa-instagram"></i></span>
                </div>
                    <input v-model="c_data.c_instagram" class="form-control" type="url" name="instagram" id="9" placeholder="instagram Id" >
                </div>

                 <span>Describe this resource center in brief</span>
              <div class="input-group mb-3">
              
                <textarea v-model="c_data.c_description" class="form-control" name="description" id="10" cols="2" rows="3"></textarea>
                   
                </div>
 

        </div>
        </div>
        <hr>
        <div>
          <input class="btn btn-outline-danger" type="submit" value="submit">
        </div>
    </form>
  </div>
  </div>

<!-- modal alert -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Certification Category</h5>
        <button @click="getAllCategory()" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
       
      </div>
      <div class="modal-body">
        <app-certification-category></app-certification-category>
       <button style="margin-top:-38px"  class="btn btn-secondary float-right" data-dismiss="modal" @click="getAllCategory()" >Close</button>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import { bus } from '../../main'

export default {
  data(){
    return{
      c_category:{},
      img_preview:null,
      c_data:{
        c_title:'',
        c_organizationName:'',
        c_officeAddress:'', 
        c_webAddress:'', 
        c_emailAddress:'', 
        c_mobileNumber:'', 
        c_logo:'', 
        c_facebook:'', 
        c_youtube:'',
        c_twitter:'', 
        c_instagram:'', 
        c_description:'',
        c_category:'',
        }
    }
  },
   props:['queryType', 'newData'],
  methods:{
   
  //  category icon 
    onFileChange(e){
      let file = e.target.files[0];
       var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
       var file_type = this.$refs.file.value
       if (!allowedExtensions.exec(file_type)) { 
         this.$refs.file.value = null;
         this.img_preview = null;
                alert('Invalid file type'); 
                return false; 
            } else{
              if(e.target.files[0].size >= 600000){
                 this.$refs.file.value = null;
                 if(this.img_preview == null){
                  this.img_preview = null;

                 }
                alert('Image File is too heavy, it should be less than 500kb')
              }else{
                this.img_preview= URL.createObjectURL(file);

              }
            }
    },
   
  //  save or update category
      dataEngine(queryType){
      bus.$emit('loader', true);

      if( this.$refs.file.files[0] == undefined){
        this.c_data.c_logo = this.img_preview
      }else{
      this.c_data.c_logo = this.$refs.file.files[0];
      }
      var formData = this.toFormData(this.c_data);
 
      formData.append('file', this.c_data.c_logo);
      this.axios.post(this.$hostname+"general_api.php?action="+queryType, formData).then((response)=>{
 
              if(response.data.response){
                bus.$emit('loader', false);
               this.$swal.fire(
                  'Uploaded',
                  'You clicked the button!',
                  'success'
                )

                this.$router.push({name:'all_certification'})
                   
                }
                else{
                bus.$emit('loader', false);
                alert('Sorry and Error occured!')
                  
                }
             
                
            }).catch(error=>{
                alert(error);
                bus.$emit('loader', false);

            })
    },
   
    toFormData(obj){
            var fd = new FormData();
                for(var i in obj){
                    fd.append(i,obj[i]);
            }
            return fd;
        },


     // get all categories
        getAllCategory(){
        bus.$emit('loader', true);

              this.axios.get(this.$hostname+"general_api.php?action=c_category").then((response)=>{
                this.c_category=response.data
        bus.$emit('loader', false);

            }).catch(error=>{
                alert(error);
        bus.$emit('loader', false);

            });
        },

  },

  //--------------end of methods 


  created(){
     this.c_data=this.queryType
  this.img_preview = this.queryType.c_logo;
  if(this.queryType.query == undefined){
    this.queryType.query = 'newCertification';
    this.c_data={
        c_title:'',
        c_organizationName:'',
        c_officeAddress:'', 
        c_webAddress:'', 
        c_emailAddress:'', 
        c_mobileNumber:'', 
        c_logo:'', 
        c_facebook:'', 
        c_youtube:'',
        c_twitter:'', 
        c_instagram:'', 
        c_description:'',
        c_category:'',
    }

      
  }
  this.getAllCategory();
 
  },
 
}
</script>

<style scoped>
.modal-dialog {
 /* position: absolute; */
  left: 0%;
  top: 20%;
  /* transform: translate(-50%, -50%); */

}
</style>