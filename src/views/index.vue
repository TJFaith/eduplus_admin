<template>
    <v-app class="pageLayout">
        <div class="container-fluid  p-0">
            <div class="row topRow justify-content-center">
                <div class="col-10 col-md-3 h-50 shadow-sm border p-0 d-flex rounded-sm m-2">
                    <div class="col-8 align-self-center text-muted">TOTAL<br> QUESTIONS </div>
                    <div class="w-100 bg-success  shadow shadow-sm text-white align-self-center p-2"> 
                        {{totalQuestion}}
                    </div>
                </div>
        
                <router-link to="/uploadQuestion" class="col-10 col-md-3 h-50 shadow-sm border p-0 d-flex rounded-sm m-2">
                    
                        <div class="col-8 align-self-center text-muted">UPLOAD<br> QUESTIONS</div>
                        <div class="w-100 bg-danger shadow shadow-sm p-2 align-self-center"><i class="fa fa-upload text-white large"></i></div>
                 
                </router-link>

                <div class="col-10 col-md-3 h-50 shadow-sm border p-0 d-flex rounded-sm m-2">
                    <div class="col-8 align-self-center text-muted">TOTAL<br> USERS</div>
                    <div class="w-100 bg-info shadow text-white align-self-center shadow-sm p-2">{{totalStudent}}</div>
                </div>
            </div>
            <hr>        
        </div>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
        totalQuestion:null,
        totalStudent:null,
        }
    },
 methods:{
    dashBoardCount(){
        this.axios.get(this.$hostname+"general_api.php?action=dashBoardCount").then((response)=>{
               this.totalQuestion = response.data.totalQuestion
               this.totalStudent = response.data.totalStudent
        }).catch(error=>{
                alert(error);
        })
    }
 },
 
 created(){
     this.dashBoardCount();
 }
}
</script>
