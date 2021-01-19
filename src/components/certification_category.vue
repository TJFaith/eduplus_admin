<template>
  <div>
      <div>
        <select @change="resetInput()" name="" id="" class="form-control" size="3" v-model="i_c_category">
            <option  :value="{id:category.c_ID, text:category.c_name}" v-for="(category, index) in c_category" :key="index">{{category.c_name}}</option>
        </select>
      </div>
    <div class="input-group my-3">
          <div class="input-group-prepend" style="cursor:pointer" @click="addCategory()">
          <span class="input-group-text bg-success text-white"> <i class="fa fa-plus mr-2"></i> Add</span>
        </div>

        <!-- category input field -->
         <input :disabled="dissable_update_btn" ref="catigory" type="text" name="" v-model="i_c_category.text" id="newCat" class="form-control" placeholder="Click on the + Add button and type your value here" required>
        <!-- end of category input field -->

        <div class="input-group-prepend" style="cursor:pointer" @click="saveBtn()">
            <span type="submit" class="input-group-text"> {{updateBtn}} <span  v-if="showLoading" > <i class="ml-2 text-dark  fa fa-spinner fa-spin"></i></span> </span>
        </div>
      </div>
    <div>
     
         <span>
            <button @click="confirm_delete()" :disabled="dissable_delete_btn" type="button" class="btn btn-danger"><i class="fa fa-plus"></i> Delete</button>
        </span>
    </div>
  </div>
</template>

<script>


export default {
    data(){
        return{
            showLoading:false,
            updateBtn:'Edit',
            dissable_update_btn:true,
            dissable_delete_btn:true,
            i_c_category:{},
            c_category:{}
        }
    },
    methods:{
        resetForm(){
            this.dissable_update_btn = true;
            this.dissable_delete_btn = true;
            this.updateBtn = 'Edit'
            this.i_c_category ={}
            this.showLoading = false;

        },
        resetInput(){
                this.dissable_update_btn= true;
                this.dissable_delete_btn= false;
                this.updateBtn = 'Edit'
        },

        saveBtn(){
            if(this.i_c_category.id !=undefined && this.updateBtn =='Edit'){
                this.dissable_update_btn= false;
                this.updateBtn = 'Update'
                this.$refs.catigory.focus();
            }else if(this.i_c_category.id ==undefined && this.updateBtn == 'Save'){
                if(this.$refs.catigory.value !=""){
                    this.add_new_category();
                }else{
                    alert('Type a value in the input box')
                }
            }else if(this.i_c_category.id !=undefined && this.updateBtn == 'Update'){
                this.update_category();
            }


        },


        // CRUD METHODS =========================== DDDDD========
        // get all categories
        getAllCategory(){
              this.axios.get(this.$hostname+"general_api.php?action=c_category").then((response)=>{
                this.c_category=response.data
          
            }).catch(error=>{
                alert(error);
            });
        },

        // add new category
        addCategory(){ 
            this.dissable_update_btn= false;
            this.dissable_delete_btn= true;
            this.updateBtn = 'Save'
            this.$refs.catigory.focus();
            this.i_c_category ={}
             
             
           
        },
        add_new_category(){
            this.showLoading = true;
            let category_name = {'c_name':this.i_c_category.text}
            this.axios.post(this.$hostname+"general_api.php?action=c_add_category",  category_name).then((response)=>{
                    if (response.data.response){
                         this.$swal.fire(
                            'Category Created',
                            '',
                            'success'
                            )
                        this.getAllCategory();
                        this.resetForm();

                    }
            this.showLoading = false;
           

            }).catch(error=>{
                alert(error);
             this.showLoading = false;

            })
        },

        // update category
            update_category(){
                this.showLoading = true;
                let category_id = {'c_id':this.i_c_category.id, 'c_name':this.i_c_category.text}
                this.axios.post(this.$hostname+"general_api.php?action=c_update_category", category_id).then((response)=>{
                   
                    if(response.data.response){
                         this.$swal.fire(
                            'Updated',
                            '',
                            'success'
                            )
                            this.getAllCategory();
                            this.resetForm();
                            this.showLoading = false;
                    }
                }).catch(error=>{
                    alert(error);
                    this.showLoading= false;
                })
            },

        // delete category
       confirm_delete(){
         this.$swal.fire({
            title: 'Are you sure?',
            text: "You want to delete '" +this.i_c_category.text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result)=>{
                if(result.value){
                    this.$swal.fire(
                        this.c_delete_category(this.i_c_category.id),
                        '',
                        this.icon='success'
                    )

                }
            });         
        },
        c_delete_category(id){
                this.showLoading = true;
            let category_id = {'c_id':id}
                this.axios.post(this.$hostname+"general_api.php?action=c_delete_category", category_id).then((response)=>{
                 
                    if(response.data.response){
                        
                            this.getAllCategory();
                            this.resetForm();
                            this.showLoading = false;
                    }
                }).catch(error=>{
                    alert(error);
                    this.showLoading= false;
                })
        }


    },
    created(){
        this.getAllCategory();
    },
    computed:{
        
    }
}
</script>

<style>

</style>