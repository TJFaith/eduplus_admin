<template>
    <div>
        <div class="container-fluid  p-0">
        <div class="row topRow d-flex justify-content-center">
            <div class="col-3  shadow-sm border p-0 d-flex rounded-sm">
                <div class="col-8 align-self-center text-muted">TOTAL QUESTIONS </div>
                <div class="w-100 bg-success h-100 shadow shadow-sm align-middle p-2"> 400 </div>
            </div>
     
            <router-link to="/admin/uploadQuestion" class="col-3  shadow-sm border p-0">
                <div class="rounded-sm  d-flex h-100">
                    <div class="col-8 align-self-center text-muted">UPLOAD QUESTIONS</div>
                    <div class="w-100 bg-danger h-100 shadow shadow-sm p-2 text-center"><i class="fa fa-upload text-white large"></i></div>
                </div>
            </router-link>

            <div class="col-3 shadow-sm border  p-0 d-flex rounded-sm">
                <div class="col-8 align-self-center text-muted">TOTAL STUDENTS</div>
                <div class="w-100 bg-info h-100 shadow shadow-sm p-2">1000</div>
            </div>
        </div>
        <hr>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
 methods:{
    
 },
 created(){

 }
}
</script>
