/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import './mock/mockServer'//加载mock模拟数据
import Loading from './common/image/loading.gif'
import './filters'//加载过滤器

//注册全局组件
Vue.component(Button.name, Button) //<mt-button>
Vue.use(VueLazyload,{
  loading:Loading
})


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
