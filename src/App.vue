
<template>
  <v-app>
    <app-header></app-header>
<div  v-if="hideSideBar">
    <app-sidebar></app-sidebar>
</div>
      <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import { bus } from './main'

export default {
    data(){
        return{
           show_new_title:false,
           hideSideBar:true,
        }
    },
    methods:{
       hideSideBarMTD(){
         if(this.$session.has('admin-login')){
           this.hideSideBar = true
         }
             bus.$on('side_bar_Show', (data) => {
            this.hideSideBar = data;
            // alert(data)
          })
          // alert(this.hideSideBar)
        },
    },
    created(){
      this.hideSideBarMTD();
    },
    // watch: {
    //   hideSideBar: function(){
    //         bus.$on('side_bar_Show', (data) => {
    //         this.hideSideBar = data;
      
    //       })
    //   }
     
    // }

}
</script>
