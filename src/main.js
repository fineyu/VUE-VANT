import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 引入axios
import {post,get} from './assets/http.js'
Vue.prototype.$post=post;
Vue.prototype.$get=get;

// 引入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
