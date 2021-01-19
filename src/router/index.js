import Vue from 'vue'
import VueRouter from 'vue-router'

// import pages
// primary pages
const p_q_upload_form =() =>
  import(/* webpackChunkName: "p_q_upload_form" */'../components/question/primary_question_upload.vue')

// import p_q_upload_form from '../components/question/primary_question_upload.vue'

// junior pages
const page404 =() =>
  import(/* webpackChunkName: "page404" */'../views/404.vue')

const login =() =>
  import(/* webpackChunkName: "login" */'../views/login.vue')

const index =() =>
  import(/* webpackChunkName: "login" */'../views/index.vue')

const junior_subjects =() =>
  import(/* webpackChunkName: "junior_subjects" */'../views/junior_subjects.vue')

const primary_subjects =() =>
  import(/* webpackChunkName: "primary_subjects" */'../views/primary_subjects.vue')

const uploadQuestion =() =>
  import(/* webpackChunkName: "uploadQuestion" */'../views/new_questions.vue')
  // q_upload_form
const certification =() =>
  import(/* webpackChunkName: "certification" */'../views/certification/certification_index.vue')

const all_certification =() =>
  import(/* webpackChunkName: "certification" */'../views/certification/all_certification.vue')

const new_certification =() =>
  import(/* webpackChunkName: "new_certification" */'../views/certification/new_certification.vue')

const q_upload_form =() =>
  import(/* webpackChunkName: "q_upload_form" */'../components/question/question_upload_form.vue')

// import page404 from '../views/404.vue'
// import login from '../views/login.vue'
// import index from '../views/index.vue'
// import subjects from '../views/subjects.vue'
// import uploadQuestion from '../views/new_questions.vue'
// import certification from '../views/certification/certification_index.vue'
// import all_certification from '../views/certification/all_certification.vue'
// import new_certification from '../views/certification/new_certification.vue'


// import q_upload_form from '../components/question/question_upload_form.vue'


// use imported files
Vue.use(VueRouter)

  const routes = [
    {
      path:'/admin-login',
      name:'login',
      component:login
    },
  {
    path: '/',
    name: 'index',
    component: index
  },
   {
    path: '/subjects/junior',
    name: 'junior',
    component: junior_subjects
  },
  {
    path: '/subjects/primary',
    name: 'primary',
    component: primary_subjects
  },
  {
    path:'/uploadQuestion',
    name:'uploadQuestion',
    component:uploadQuestion,
    
  },
  {
    path:'/uploadQuestion/:id/:sub_id',
    name:'question_form',
    component: q_upload_form
  },
  {
    path:'/certification',
    component:certification,
    children:[
      {
      path:'/certification/:startRange/:endRange',
      name:'all_certification',
      component:all_certification
      },
      {
        path:'/certification/new',
        name:'new_certification',
        component:new_certification
      }
    ]
  },
  // primary router
  {
    path:'/primary_uploadQuestion/:id/:sub_id',
    name:'primary_uploadQuestion',
    component:p_q_upload_form
  },
  {
    path:'*',
    name:'catchAll',
    component:page404
  },

  {
    path:'/page404',
    name:'page404',
    component:page404
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
