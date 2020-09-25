import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/admin'
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin'),
    children:[
      {
        path: '/info',
        name: 'info',
        component: () => import(/* webpackChunkName: "about" */ '../views/info')
      },
      {
        path: '/interview',
        name: 'interview',
        component: () => import(/* webpackChunkName: "about" */ '../views/interview')
      },
      {
        path: '/interviewInfo',
        name: 'interviewInfo',
        component: () => import(/* webpackChunkName: "about" */ '../components/interview-info')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


