

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import quillEditor from 'vue-quill-editor'
import VueSweetalert2 from 'vue-sweetalert2';


import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
// import 'quill/dist/quill.bubble.css' // for bubble theme
// import 'quill/dist/quill.core.css' // for core theme



import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'animate.css/animate.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';

require('@/assets/style.css')
require('@/assets/vue-transition.css')

// inport component 
import  header from './components/header.vue'
import  footer from './components/footer.vue'
import  sidebar from './components/sidebar.vue'
import question_category from './components/question/question_category.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueSession)
Vue.use(quillEditor)
Vue.use(VueSweetalert2)

Vue.component('app-header', header)
Vue.component('app-sidebar', sidebar)
Vue.component('app-question-category',question_category)
Vue.component('app-footer', footer)


// GLOBAL VARIABLES
// Vue.prototype.$hostname = "http://localhost/MY_WEB_WORKS/eduplus_new/admin.eduplus/";
Vue.prototype.$hostname = 'https://eduplus.sch.ng/admin/';

// window variable
Vue.prototype.$windowObj = window;



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
