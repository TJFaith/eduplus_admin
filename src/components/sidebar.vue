<template>
    <div class="sidebar">
        <div class="w-100 bg-dark py-4 pl-4">
            <img style="width:50px" class="img-rounded" src="@/assets/logo.png" alt="">
            <span class="ml-3 " >Admin
                <span @click="transition.slide.user = !transition.slide.user" class="float-right mr-3 mt-3">
                <i class="fa fa-angle-double-right "></i></span>
            </span>

           <transition name="slide">
           
            <ul v-if="transition.slide.user" class="mt-3 list-unstyled">
                <li class="p-2 bg-white text-info border-right-0 border border-primary shadow shadow-sm">Edit Profile</li>
                <li class="p-2">Users</li>
                <hr class="bg-secondary">
                <li class="p-2 ">Log Out</li>
            </ul>
           </transition> 

          

        </div>
             <ul class="list-unstyled mt-3 ml-4">
              <router-link to="/admin/"> <li class="py-3">
                    <span class="float-left mr-3 ">
                        <i class="fas fa-tachometer-alt "></i>
                    </span>  
                   DASHBOARD
                </li>
            </router-link>
              
                <li @click=" transition.slide.question = !transition.slide.question">
                    <span class="float-left mr-3 "><i class="fas fa-quote-left "></i></span>  
                    QUESTIONS 
                    <span class="float-right mr-3 ">
                        <i class="fa fa-angle-double-right "></i>
                    </span>
    
                   <transition name="question">
                   
                    <ul v-if="transition.slide.question" class="list-unstyled bg-white shadow-lg text-muted mt-3">
                        <li class="pt-3 pl-5">ALL QUESTIONS</li>
                       <router-link to="/admin/uploadQuestion"> <li class="pb-3 pt-2 pl-5">UPLOAD QUESTION</li> </router-link>
                    </ul>
                 
                   </transition>
                   
                </li>
                 <li class="py-3">
                <router-link to="/admin/subjects" >
                    <span class="float-left mr-3 "><i class="fas fa-tachometer-alt "></i></span>  
                   SUBJECTS
                </router-link>
                </li>

           </ul>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            transition:{
                slide:{
                    user:false,
                    question:false,
                },
            }
        }
    }
  
}
</script>