<template>
   <div class="row">
           <div class="col-md-8">
             
                <table class="table table-responsive w-100 table-borderless table-striped table-active table-hover table-info">

                            <th>Icon </th>
                            <th>Name </th>
                            <th>web address </th>
                          
                            <tr v-if="showMoreLoading">
                                <td colspan="3" style="text-align:center; width:100vw; height:20vh">
                                <v-progress-circular color="black"  :size="30"  indeterminate></v-progress-circular>
                                </td>
                </tr>

                            <tr v-else style="cursor:pointer" @click="view_Cert_Center(index)" v-for="(item, index) in certification_info" :key="index">
                              <td class="w-25 m-0">
                                  <img :src="item.c_logo" alt="" class="w-25">
                              </td>
                              <td>{{item.c_title}}</td>
                              <td>{{item.c_webAddress}}</td>
                               
                            </tr>
                             
                        </table>
                        <v-pagination @input="getCertificationPost(page)"  v-model="page" class="my-4" :length="paginationLength" ></v-pagination>
                     
                        
           </div>
           <div class="col-md-4">
               <div class=" shadow-lg bg-light rounded border p-2 h-75 text-center" style="position:fixed;">
                   <div :class="{'d-none':hidden}">
                   <div class=" overflow-auto" style=" height:65vh">
                   <img class="w-50" :src="selected_item.c_logo" alt="">
                   <br>
                   <div class="mt-3">
                       <h5 class="text-muted">{{selected_item.c_title}}</h5>
                   
                       <span>Organization Name:</span>
                       <h3>{{selected_item.c_organizationName}}</h3>

                       <span>website:</span>
                       
                       <h6> <a :href="selected_item.web_address">{{selected_item.c_webAddress}}</a> </h6>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a :href="selected_item.c_facebook">
                                <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                   <a :href="selected_item.c_twitter">
                                    <i class="fab fa-twitter"></i>
                                   </a>
                            </li>
                            <li class="list-inline-item">
                                  <a :href="selected_item.c_instagram">
                                <i class="fab fa-instagram"></i>
                                  </a>
                                </li>
                            <li class="list-inline-item">
                                  <a :href="selected_item.c_youtube">
                                <i class="fab fa-youtube"></i>
                                  </a>
                                </li>
                        </ul>
                    </div>
                    <div class="p-2 mt-3">
                        {{selected_item.c_description}}
                    </div>
                   </div>
                   
                   <div>
                       <button @click="edit_mtd(selected_item)" class="btn btn-success mr-3">Edit <i class="fa fa-pen"></i></button>
                       <button @click="confirm_delete(selected_item)" class="btn btn-danger">Delete <i class="fa fa-trash"></i></button>
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
            hidden:true,
            // certification_info:{},
            selected_item:{},
            startRange:null,
            endRange:null,
            totalPostNumber:null,
            showLoading:false,
            showMoreLoading:false,
            page: this.$route.params.endRange / 10,
            paginationLength:0,
        }
    },
   props:['certification_info' , 'searchNumber'],
 
    methods:{
      // method to calculate the total number of pagination to make
        paginationMethod(totalData){
          var paginateLength;
          if(totalData > 10 ){
           if (totalData % 10 !=0){
             paginateLength = totalData  / 10
             this.paginationLength = Math.round(paginateLength) + 1

           }else{
             paginateLength = totalData  / 10

           this.paginationLength = paginateLength
           }
          }else if(totalData <= 10){
            this.paginationLength = 1
          }
           console.log(totalData)
          
        },

        // method to get total post
        totalPost(){
         this.axios.get(this.$hostname+"general_api.php?action=totalCertificationPost").then((response)=>{
           this.paginationMethod(response.data)
           
          
        
         }).catch(error=>{
           alert(error)
         })

    },
     getCertificationPost(page){
    
       this.endRange = page * 10
          this.startRange = this.endRange - 9
            this.$router.replace({ name: "all_certification", params: {startRange:this.startRange,endRange:this.endRange}}).then(()=>{
                       
         }).catch(()=>{});

      this.showMoreLoading = true;
        let dataRange ={
           'startRange':this.$route.params.startRange,
           'endRange':this.$route.params.endRange
           }
         this.axios.post(this.$hostname+"general_api.php?action=getData", dataRange).then((response2)=>{
            bus.$emit('loader', true);
    
            let ceri = response2.data
            this.$emit("updateInfo", ceri);
            bus.$emit('loader', false);

      this.showMoreLoading = false;
          

         }).catch(error=>{
      this.showMoreLoading = false;
           alert(error)
         })
    },
    getData(){
      bus.$emit('loader', true);
    
            let ceri = this.certification_info
            this.$emit("updateInfo", ceri);
            bus.$emit('loader', false);

            
    },
    view_Cert_Center(id){
        this.selected_item = "";
        this.selected_item = this.certification_info[id]
        this.hidden = false;

    },
    confirm_delete(data){
         this.$swal.fire({
            title: 'Are you sure?',
            text: "You want to delete '" +data.c_title + "' data",

            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result)=>{
                if(result.value){
                    this.$swal.fire(
                        this.delete_mtd(data.ID),
                        console.log(data.ID),
                        this.icon='success'
                    )

                }
            });         
    },
    edit_mtd(selected_item){
        selected_item.query ='edit';
      bus.$emit('queryType', selected_item);
      // this.$router.push({name:'new_certification'}).catch(()=>{});

    },
    delete_mtd(data){
        this.axios.post(this.$hostname+"general_api.php?action=delete_Data", data).then(()=>{
             this.selected_item = "";
             this.hidden = true;
                 this.getData();
             }).catch(error=>{
                alert(error);
               
            })
    }
    },
    mounted(){
        this.totalPost()
        this.getData()

    },
    updated(){
         console.log(this.searchNumber)

    },
    computed:{
      paginateMTD(){
        return this.paginationMethod(this.searchNumber)
      }
    },
     watch: {
    searchNumber: function() {
      console.log(this.searchNumber)
      // console.log(this.certification_info)
        //  this.searchNumber = Object.keys(this.certification_info).length
        //  console.log(this.searchNumber)
        //  this.paginateMTD
         this.paginationMethod(this.searchNumber)
    }
  },
    created(){ 
      // this.getCertificationPost(this.page)        
    },
     
   
   
   
}
</script>

<style scoped>
    .table tr:hover{
        background-color: rgb(73, 176, 223);
    }

  
</style>