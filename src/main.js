// 入口文件
import Vue from 'vue'

import app from './App.vue'

// 1.1导入vue-router
import Vuerouter from 'vue-router'

// 1.2安装vue-router
Vue.use(Vuerouter);

// import { Header,Swipe, SwipeItem,Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import MintUI from 'mint-ui'
Vue.use(MintUI)

import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 1.3导入自己的router.js
import router from './router.js'

import VueResource from 'vue-resource'
import moment from 'moment';
Vue.use(VueResource)
Vue.http.options.xhr = { withCredentials: true }

// 设置请求根路径
Vue.http.options.root='http://localhost'

// 全局时间格式化过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})