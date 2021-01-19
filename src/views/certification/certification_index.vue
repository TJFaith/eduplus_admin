<template>
  <div class="pageLayout mx-5">
   <div class="text-muted border-left pl-3 d-flex align-items-center"><b>Certification Centers</b>
   
   <!-- new certification -->
   <button class="btn btn-light ml-3 text-danger" @click="newCertification()">UPLOAD NEW <i class="fa fa-plus"></i></button>
    
    <div class="input-group mx-3" style="width:50%">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-search"></i></span>
        </div>

            <input class="form-control" @keyup="filter_search()" v-model="search" type="text" name="mobileNumber" id="search" placeholder="Filter Certification Centers" >


              <div class="input-group-prepend">
                <select name="" id="search" @change="filter_search()" v-model="search_category"  class="text-muted form-control rounded-0" style="cursor:pointer">
                  <option>All</option>
                  <option v-for="(category, index) in c_category" :key="index"  :value="{id:category.c_ID, text:category.c_name}">{{category.c_name}}</option>
                </select>
              </div>
    </div>

  <!-- all certification -->
    <Button  class="btn btn-light border-primary float-right">
        <router-link to="/certification/all">All Certification</router-link>
        
        </Button>
   </div> 
   <hr>

   <div class="container">
       <img v-if='loadingImg' src="@/assets/loader.gif" alt="" class="loadingImg">
      
        <router-view :searchNumber=searchNumber :queryType=queryType :certification_info=certification_info @updateInfo="updateInfo"></router-view>
    </div> 
  </div>
</template>

<script>
import { bus } from '../../main'

export default {
    data(){
        return{
          // data for search
            search:'',
            search_category:'ALL',
            searchNumber:null,
            search_result:null,
            // end of search data

            c_category:{},
            queryType:{},
            certification_info:{},
            loadingImg:false,
           

        }
    },
    methods:{
      updateInfo(certification_info){
        this.certification_info = certification_info
      },
        newCertification(){      
            this.$router.push('/certification/new').catch(()=>{
                this.$router.go()
            })
        },
        dataTransfer(){
             bus.$on('queryType', (data) => {
            this.queryType = data;
          })
        },
      getAllCategory(){
              this.axios.get(this.$hostname+"general_api.php?action=c_category").then((response)=>{
                this.c_category=response.data
     
            }).catch(error=>{
                alert(error);
   
            });
        },

        filter_search(){
          this.loadingImg=true;
          if(this.search.category_id ==""){
            this.search.category_id =0;
          }
          let filter_value = {'c_id':this.search_category.id, 'c_value':this.search}
          this.axios.post(this.$hostname+"general_api.php?action=search_filter", filter_value).then((response)=>{
            this.certification_info=response.data
         this.searchNumber = Object.keys(this.certification_info).length

          this.loadingImg=false;
          }).catch(error=>{
            alert(error)
          this.loadingImg=false;
          })
        },
        getData(){
      bus.$emit('loader', true);
         let dataRange ={
           'startRange':this.$route.params.startRange,
           'endRange':this.$route.params.endRange
           }
        this.axios.post(this.$hostname+"general_api.php?action=getData", dataRange).then((response)=>{
          
            this.certification_info=response.data
          
                bus.$emit('loader', false);

             }).catch(error=>{
                alert(error);
                bus.$emit('loader', false);

            })
    },
    },
      created(){
    this.dataTransfer();
    this.getData();
    this.getAllCategory();


  },
  updated(){
    this.getAllCategory();

  }
}
</script>

<style scoped>
  .loadingImg{
        width:2rem;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(50%,50%);
    }
</style>