// 入口文件
import Vue from 'vue'

import app from './App.vue'

// 1.1导入vue-router
import Vuerouter from 'vue-router'

// 1.2安装vue-router
Vue.use(Vuerouter);

import { Header } from 'mint-ui'


import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 1.3导入自己的router.js
import router from './router.js'
Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})