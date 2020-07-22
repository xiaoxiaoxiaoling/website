import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
  const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/experience',
    component: index,
    children:[
      {
        path: '/experience',
        component: ()=>import('../components/navcontent/experience.vue')
      },
      {
        path:'/lists',
        component:()=>import('../components/navcontent/lists.vue')
      },
      {
        path:'/logs',
        component:()=>import('../components/navcontent/logs.vue')
      },
      {
        path:'/echart',
        component:()=>import('../components/navcontent/echart.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
