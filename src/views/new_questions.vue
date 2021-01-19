<template>
    <div class="pageLayout">
         <h4 class="text-muted border-left pl-12">Upload New Question</h4>
       <hr>
       <!-- <router-view></router-view> -->
        <app-question-category></app-question-category>

    </div>
</template>
<script>
export default {
    data(){
        return{
           show_new_title:false,
           
        }
    },
    methods:{
       
    }
}
</script>