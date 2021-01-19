<template>

    <div class="loader_container" v-if="spinner == true" style="position:fixed">
        <div class="loader">
        <i class="text-light display-1 fa fa-spinner fa-spin"></i>
      </div>
    </div>
</template>
<script>
import { bus } from '../main';

export default {
    data(){
        return{
            spinner:false,
        }
    },
    
    created(){
         bus.$on('loader', (data) => {
      this.spinner = data;
    })
    }
}
</script>