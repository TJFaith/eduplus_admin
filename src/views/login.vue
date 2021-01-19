<template>
 <div class="loginPg">
 <div class="bg-light shadow py-2 d-flex flex-column fixed-top  justify-content-center align-items-center">
                <a href="https://eduplus.sch.ng/">
                <img  style="width:50px" src="@/assets/logo.png" class="logo mr-3">
</a>
 </div>
     

        <div class="container-fluid" style="padding-top:3em">
           
             <h4 class="mt-5 text-center text-muted strong" style="font-family:myFirstFont">EDUPLUS ADMINISTRATIVE</h4>
    <hr class="w-25">
           <br>
         <div class="row mt-3 ">
             <div class="col-md-6" style="z-index:1">
             <form class="card p-5" @submit.prevent="login()">
                 <span v-html="feedback"></span><br>
                 
                 <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        
                         <span class="input-group-text"><i class="fa fa-user"></i></span>
                     </div>
                        <input class="form-control" placeholder="username" v-model="username" type="text" name="" id="username" required>
                 </div>

                  <div class="input-group mb-3">
                     <div class="input-group-prepend">
                        
                         <span class="input-group-text"><i class="fa fa-key"></i></span>
                     </div>
                        <input class="form-control" placeholder="password" v-model="password" type="password" name="" id="password" required>
                 </div>

                 <div class="input-group">
                     <input class="btn btn-light w-25 shadow" type="submit" value="LOGIN">
                 </div>

     </form>
         </div>
         <div class="col-md-6 .hidden-xs-down admin-login position-absolute" >

         </div>
     </div>

     </div>
     </div>

</template>
<script>
import { bus } from '../main'
export default {
    
    data(){
        return{
            username:"",
            password:"",
            feedback:'',
        }
    },
    methods:{
        login(){
            
            bus.$emit('loader', true);
            let loginDetails = {username: this.username, password: this.password}
        
            this.axios.post(this.$hostname+"general_api.php?action=login", loginDetails).then((response)=>{
              
                if (response.data.respond == 'success'){
                    this.$session.set('admin-login', response.data.admin_data);
                    bus.$emit('side_bar_Show', true);
                    this.$router.push({name:'index'}).catch(()=>{});
                }else{
                this.feedback=response.data;

                }
                bus.$emit('loader', false);

            }).catch(error=>{
            bus.$emit('loader', false);

                alert('Opps! sorry and error occured');
                console.log(error);
            })
        }
    },
    created(){
     bus.$emit('side_bar_Show', false);

    }
}
</script>