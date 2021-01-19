<template>
<nav class="navbar navbar-expand-md navbar-light bg-white fixed-top  shadow" style="padding:0 5%">
  
        <a class="navbar-brand" href='/admin/'>
                <img style="width:40px" src="@/assets/logo.png" class="logo mr-3"><span>EDUPLUS</span>
        </a> 
         
         <button class="navbar-toggler custom-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
            <span class="navbar-toggler-icon"></span>
        </button>
      
       <div class="navbar-collapse collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto otherMenu">
                   
                </ul>
    
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                   <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/career_Communities">Career communities</router-link></li>
                    <!-- <li @click="toggleCollapse=true"  class="nav-item"><router-link class="nav-link" to="/resource_center">Resource Center</router-link></li> -->
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/certification">Certification</router-link></li>
                    <li @click="toggleCollapse = true" class="nav-item"><router-link class="nav-link" to="/contact">Contact Us</router-link></li>
                    <li @click="toggleCollapse=true" class="nav-item"><router-link class="nav-link" to="/about">About Us</router-link></li>
               
                </ul>
            </div>

    </nav> 
   
</template>
<script>
export default {
    
}
</script>