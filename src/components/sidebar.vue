<template>

    <v-navigation-drawer
      absolute
      dark
      width="300"
      permanent
      :expand-on-hover ="$vuetify.breakpoint.mobile"
       class="mx-auto sidebar pt-13"
    height="100vh"
    >
       <v-list class="mt-3">
           
           <v-list-group no-action>
              
            <template v-slot:activator>
                 <v-list-item class="px-0">
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar> 
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Sandra 
                        </v-list-item-title>
                        <v-list-item-subtitle>sandra</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
             </template>

            
                    <v-list-item>
                        <v-list-item-title>
                            <v-icon class="mr-5">fa fa-file</v-icon>Edit profile
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title style="cursor:pointer">
                            <v-icon class="mr-5">fa fa-users</v-icon>Users
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title style="cursor:pointer" @click="logOut()">
                            <v-icon class="mr-5">mdi-run</v-icon>log Out
                        </v-list-item-title>
                    </v-list-item>
                    
                

           </v-list-group>
       </v-list>
     

        <v-divider></v-divider>
        <v-list>
            <v-list-item to="/">
                <v-list-item-icon>
                    <v-icon>fas fa-tachometer-alt </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <!-- question list group -->
            <v-list-group no-action prepend-icon="fas fa-quote-left">
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Questions</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item to="#">
                    <v-list-item-content>
                        <v-list-item-title>All questions</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/uploadQuestion">
                    <v-list-item-content>
                        <v-list-item-title>Upload question</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>

            <!-- subject list -->
         
             <v-list-group no-action prepend-icon="fas fa-tachometer-alt">
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Subjects</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item to="/subjects/primary">
                    <v-list-item-content>
                        <v-list-item-title>Primary School</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/subjects/junior">
                    <v-list-item-content>
                        <v-list-item-title>Junior School</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>


            <!-- certification -->
            <v-list-item to="/certification/1/10">
                <v-list-item-icon>
                    <v-icon>fas fa-book </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Certification</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

</template>
<script>
import { bus } from '../main'

export default {
    data(){
        return{
            transition:{
                slide:{
                    user:false,
                    question:false,
                },
            },
              items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Attractions',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Dining',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Education',
        },
        {
          action: 'mdi-run',
          items: [{ title: 'List Item' }],
          title: 'Family',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Health',
        },
        {
          action: 'mdi-content-cut',
          items: [{ title: 'List Item' }],
          title: 'Office',
        },
        {
          action: 'mdi-tag',
          items: [{ title: 'List Item' }],
          title: 'Promotions',
        },
      ],
        }
    },
       
    methods:{
        logOut(){
         bus.$emit('loader', true);
        this.$session.destroy();
        this.$router.push({name:'login'}).catch(()=>{});
        bus.$emit('loader', false);
        bus.$emit('side_bar_Show', false);
    }
  
    }
    
}
</script>