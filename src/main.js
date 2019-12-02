import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'

//使用element-ui的组件
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
//设置全局变量, 类似...
Vue.prototype.$axios=axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
