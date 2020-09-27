import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( /* webpackChunkName: "about" */ '../views/admin'),
    redirect: '/welcome',
    children: [{
        path: '/welcome',
        name: 'welcome',
        component: () => import('../components/info/welcome.vue')
      },
      {
        path: '/info',
        name: 'info',
        component: () => import( /* webpackChunkName: "about" */ '../views/info'),
      },
      {
        path: '/weightChange',
        name: "weightChange",
        component: () => import('../components/info/weightChange.vue')
      },
      {
        path: '/stuDetails/:id',
        component: () => import('../components/info/stuDetails.vue'),
        props: true
      },
      {
        path: '/interview',
        name: 'interview',
        component: () => import( /* webpackChunkName: "about" */ '../views/interview')
      },
      {
        path: '/interviewInfo',
        name: 'interviewInfo',
        component: () => import( /* webpackChunkName: "about" */ '../components/interview-info')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router