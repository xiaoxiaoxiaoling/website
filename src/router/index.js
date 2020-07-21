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
    component: index,
    children:[
      {
        path: '/experience',
        component: ()=>import('../components/navcontent/experience.vue')
      },
      {
        path:'/lists',
        component:()=>import('../components/navcontent/lists.vue')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
