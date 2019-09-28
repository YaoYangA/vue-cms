// 入口文件
import Vue from 'vue'

import app from './App.vue'

// 1.1导入vue-router
import Vuerouter from 'vue-router'

// 1.2安装vue-router
Vue.use(Vuerouter);

import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 1.3导入自己的router.js
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.xhr = { withCredentials: true }



var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})