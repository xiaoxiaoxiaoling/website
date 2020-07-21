import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'



// 阻止启动生产消息
Vue.config.productionTip = false
Vue.prototype.$http= axios


Vue.use(ElementUI, { size: 'small', zIndex: 3000 });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
