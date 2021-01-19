import Vue from 'vue'
import VueRouter from 'vue-router'

// import pages
import index from '../views/index.vue'
import subjects from '../views/subjects.vue'
import uploadQuestion from '../views/new_questions.vue'
import q_upload_form from '../components/question/question_upload_form.vue'


// use imported files
Vue.use(VueRouter)

  const routes = [
  {
    path: '/admin/',
    name: 'index',
    component: index
  },
   {
    path: '/admin/subjects',
    name: 'subjects',
    component: subjects
  },
  {
    path:'/admin/uploadQuestion',
    name:'uploadQuestion',
    component:uploadQuestion,
    
  },
  {
    path:'/admin/uploadQuestion/:id/:sub_id',
    name:'question_form',
    component:q_upload_form
  },

  {
    path:'*',
    name:'catchAll',
    component:index
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
